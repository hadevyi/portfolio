import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    status: z.enum(['진행 중', '운영 중', '정리 중']),
    stack: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
    links: z
      .object({
        live: z.string().optional(),
        repo: z.string().optional(),
        reference: z.string().optional()
      })
      .optional()
  })
});

export const collections = { projects };
