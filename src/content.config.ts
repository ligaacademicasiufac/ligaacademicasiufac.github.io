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
    externalUrl: z.string().url().optional()
  })
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    date: z.string(),
    status: z.enum(['aberto', 'concluido', 'planejado']),
    type: z.string(),
    order: z.number().default(99),
    cover: z.string().optional(),
    theme: z.enum(['lasi', 'linuxtips-local']).default('lasi'),
    featured: z.boolean().default(false),
    time: z.string().optional(),
    location: z.string().optional(),
    organizer: z.string().optional(),
    supporters: z.array(z.string()).default([]),
    sponsors: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    areas: z.array(z.string()).default([]),
    prizeTotal: z.string().optional(),
    externalUrl: z.string().url().optional(),
    ctaLabel: z.string().optional(),
    criteria: z.array(z.string()).default([]),
    jury: z.array(z.object({ name: z.string() })).default([]),
    results: z.array(z.object({
      position: z.string(),
      track: z.string(),
      team: z.string(),
      project: z.string(),
      prize: z.string()
    })).default([])
  })
});

export const collections = { projects, events };
