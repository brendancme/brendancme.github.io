import type { APIRoute } from 'astro';
import { site } from '../../data/site';

// RFC 9116. Expires is set to roughly a year after each build, so any deploy
// within the year keeps it current.
export const GET: APIRoute = ({ site: base }) => {
  const expires = new Date(Date.now() + 360 * 24 * 60 * 60 * 1000);
  expires.setUTCHours(0, 0, 0, 0);
  const body = [
    `Contact: ${site.securityContact}`,
    `Expires: ${expires.toISOString()}`,
    'Preferred-Languages: en, zh',
    `Canonical: ${new URL('/.well-known/security.txt', base)}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
