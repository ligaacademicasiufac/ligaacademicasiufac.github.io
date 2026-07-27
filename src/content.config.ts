import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    year: z.number(),
    status: z.enum(['ativo', 'concluido', 'planejado']),
    area: z.enum(['ia-dados', 'engenharia-software', 'infraestrutura-redes', 'institucional']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    cover: z.string(),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    repositoryUrl: z.string().url().optional()
  })
});

export const collections = { projects };
