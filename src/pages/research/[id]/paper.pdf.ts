import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { getPapers, pdfPath, type Paper } from '../../../lib/research';

export async function getStaticPaths() {
  return (await getPapers())
    .filter((paper) => pdfPath(paper))
    .map((paper) => ({ params: { id: paper.id }, props: { paper } }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await readFile(pdfPath(props.paper as Paper)!), {
    headers: { 'Content-Type': 'application/pdf' },
  });
