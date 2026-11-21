import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPapers } from '../lib/research';
import { site } from '../data/site';

export const GET: APIRoute = async (context) =>
  rss({
    title: `${site.name} — research`,
    description: site.description,
    site: context.site!,
    items: (await getPapers())
      .filter((p) => !p.data.draft)
      .map((p) => ({
        title: p.data.title,
        description: p.data.abstract,
        pubDate: p.data.date,
        link: `/research/${p.id}/`,
        categories: p.data.tags,
      })),
  });
