import { getCollection, type CollectionEntry } from 'astro:content';
import { existsSync } from 'node:fs';
import path from 'node:path';

export type Paper = CollectionEntry<'research'>;

export async function getPapers(): Promise<Paper[]> {
  const all = await getCollection('research', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function sourcePath(paper: Paper): string {
  return path.resolve(paper.filePath!);
}

export function pdfPath(paper: Paper): string | undefined {
  const p = path.join(path.dirname(sourcePath(paper)), 'paper.pdf');
  return existsSync(p) ? p : undefined;
}

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export function bibtex(paper: Paper, url: string): string {
  const { title, authors, date, arxiv } = paper.data;
  const year = date.getUTCFullYear();
  const surname = (authors[0].split(' ').pop() ?? 'anon').toLowerCase();
  const key = `${surname}${year}${paper.id.split('-')[0]}`;
  const fields: [string, string][] = [
    ['title', `{${title}}`],
    ['author', authors.join(' and ')],
    ['year', String(year)],
  ];
  if (arxiv) {
    fields.push(['eprint', arxiv], ['archivePrefix', 'arXiv']);
  }
  fields.push(['url', arxiv ? `https://arxiv.org/abs/${arxiv}` : url]);
  const body = fields.map(([k, v]) => `  ${k.padEnd(13)} = {${v}}`).join(',\n');
  return `@misc{${key},\n${body}\n}`;
}
