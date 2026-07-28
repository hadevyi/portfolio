export const siteMeta = {
  title: 'Portfolio',
  brand: '당현아 포트폴리오',
  subtitle: '독립 포트폴리오 사이트',
  tagline: '목적별로 바로 확인할 수 있는 포트폴리오',
  description:
    '지원 목적에 맞는 핵심 경험과 결과를 빠르게 확인할 수 있도록 정리한 당현아의 포트폴리오 사이트입니다.',
  siteUrl: 'https://hadevyi.github.io/portfolio/',
  rootPath: '/portfolio/',
  repoUrl: 'https://github.com/hadevyi/portfolio'
} as const;

export const mainNav = [
  {
    href: 'https://hadevyi.github.io/',
    label: '공식 홈페이지',
    description: '공식 홈페이지로 돌아가기',
    external: true
  },
  {
    href: 'https://github.com/hadevyi/portfolio',
    label: '저장소',
    description: '이 사이트 저장소 보기',
    external: true
  }
] as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/hadevyi'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hadevyi/'
  }
] as const;
