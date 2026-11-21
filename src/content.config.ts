import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per piece of research:
//   src/content/research/<slug>/index.md   (required)
//   src/content/research/<slug>/paper.pdf  (optional, linked automatically)
const research = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/research',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    abstract: z.string(),
    authors: z.array(z.string()).default(['Brendan C. Lee']),
    tags: z.array(z.string()).default([]),
    // arXiv identifier only, e.g. "2611.01234"
    arxiv: z.string().optional(),
    lang: z.string().default('en'),
    // Drafts show up in `npm run dev` but are left out of the published site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { research };
