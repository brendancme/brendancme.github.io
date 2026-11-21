import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { getPapers, sourcePath, type Paper } from '../../../lib/research';

export async function getStaticPaths() {
  return (await getPapers()).map((paper) => ({ params: { id: paper.id }, props: { paper } }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await readFile(sourcePath(props.paper as Paper)), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
