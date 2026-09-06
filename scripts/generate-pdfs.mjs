import { existsSync } from 'node:fs';
import { copyFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'output', 'pdf');
const downloadsDir = path.join(projectRoot, 'public', 'downloads');
const baseUrl = process.env.PORTFOLIO_BASE_URL ?? 'http://127.0.0.1:4321/portfolio';
const downloadsManifestPath = path.join(projectRoot, 'src', 'data', 'portfolioDownloads.json');
const documents = JSON.parse(await readFile(downloadsManifestPath, 'utf8'))
  .filter((document) => !process.env.PORTFOLIO_TRACK || document.track === process.env.PORTFOLIO_TRACK);

const chromeCandidates = [
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium'
].filter(Boolean);

const getBrowserLaunchOptions = () => {
  const executablePath = chromeCandidates.find((candidate) => existsSync(candidate));

  return executablePath ? { executablePath } : {};
};

const assertPageAvailable = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`페이지 접근 실패: ${url} (${response.status})`);
  }
};

const buildUrl = (route) => `${baseUrl.replace(/\/$/, '')}${route}`;

await mkdir(outputDir, { recursive: true });
await mkdir(downloadsDir, { recursive: true });

for (const document of documents) {
  await assertPageAvailable(buildUrl(document.route));
}

const browser = await chromium.launch({
  headless: true,
  ...getBrowserLaunchOptions()
});

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1800 },
    deviceScaleFactor: 1
  });

  await page.emulateMedia({ media: 'print' });

  for (const document of documents) {
    const url = buildUrl(document.route);
    const outputPath = path.join(outputDir, document.fileName);
    const downloadPath = path.join(downloadsDir, document.fileName);

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(Array.from(document.images, async (image) => {
        image.loading = 'eager';
        await image.decode();
      }));
    });
    await page.evaluate((title) => {
      document.title = title;
    }, document.title);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
    });
    await copyFile(outputPath, downloadPath);

    console.log(`generated ${document.fileName}`);
  }
} finally {
  await browser.close();
}
