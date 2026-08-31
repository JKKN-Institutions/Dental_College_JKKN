// GL6-254 / G1-00 — SPLIT SITEMAPS ON BRAND-NEW PATHS.
//
// WHY THIS FILE EXISTS, and it is not a refactor.
// Search Console keys a sitemap record by its PATH STRING, and that record carries the fetch
// history, the pending flag and the error count. Measured live 2026-08-31:
// https://dental.jkkn.ac.in/sitemap.xml has lastDownloaded 2022-09-04, isPending true,
// errors 1 — 1,457 days stale — while the file itself answers 200 application/xml, 49,186
// bytes, 260 <loc>, zero redirects, to Googlebot and to a browser alike. The file is fine;
// the RECORD is poisoned. Resubmitting that path only stamps lastSubmitted; it creates no
// fetch job, which is why the 2026-08-29 remove-and-re-add moved nothing.
//
// The fix that is PROVEN on this estate, not guessed: stop arguing with the poisoned record
// and hand Google path strings it has never seen. The parent property did exactly that on
// 2026-08-24 (GL6-51) and its four child sitemaps now read lastDownloaded 0-3 days old.
//
// app/sitemap.ts IS NOT MODIFIED BY ANY OF THIS. It is the one sitemap that currently works,
// so it is imported and read, never edited. Rollback is deleting four folders and this file.
import type { MetadataRoute } from 'next'
import sitemap from '@/app/sitemap'

export type Section = 'pages' | 'blog' | 'faculty' | 'events'

const BASE = 'https://dental.jkkn.ac.in'

const pathOf = (url: string) => (url.startsWith(BASE) ? url.slice(BASE.length) : url)

// Section split. The HUB pages (/blog/, /faculty/, /events/) stay in `pages` on purpose:
// they are static routes with their own rankings, and the point of splitting is to isolate
// the DYNAMIC sets whose discovery is in question — measured 2026-08-31, 0 of 55 blog URLs
// carry a single GSC impression over 90 days. In its own file that becomes a readable number
// in Search Console instead of a share of one 260-URL total.
export function sectionOf(url: string): Section {
  const p = pathOf(url)
  if (p.startsWith('/blog/') && p !== '/blog/') return 'blog'
  if (p.startsWith('/faculty/') && p !== '/faculty/') return 'faculty'
  if (p.startsWith('/events/') && p !== '/events/') return 'events'
  return 'pages'
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&apos;')

// A lastmod that cannot be parsed is DROPPED, never defaulted to now(). GL6-255 is the whole
// reason: a sitemap whose dates say "everything changed this instant" is the signal Google is
// documented to stop trusting, and app/sitemap.ts already fought that battle via
// lastmod-manifest.json. This serializer must not reintroduce it through the back door.
function iso(v: MetadataRoute.Sitemap[number]['lastModified']): string | null {
  if (!v) return null
  const d = v instanceof Date ? v : new Date(String(v))
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}

export function toXml(entries: MetadataRoute.Sitemap): string {
  const body = entries.map(e => {
    const lm = iso(e.lastModified)
    return [
      '  <url>',
      `    <loc>${esc(e.url)}</loc>`,
      lm ? `    <lastmod>${lm}</lastmod>` : null,
      e.changeFrequency ? `    <changefreq>${e.changeFrequency}</changefreq>` : null,
      e.priority !== undefined ? `    <priority>${e.priority}</priority>` : null,
      '  </url>',
    ].filter(Boolean).join('\n')
  }).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

export async function sectionResponse(section: Section): Promise<Response> {
  const all = await sitemap()
  const entries = all.filter(e => sectionOf(e.url) === section)
  return new Response(toXml(entries), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
