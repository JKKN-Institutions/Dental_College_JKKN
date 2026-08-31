// GL6-254 / G1-00 — a sitemap path Search Console has no record of. See lib/sitemap-split.ts
// for why a NEW path is the fix and why app/sitemap.ts is read but never modified.
import { sectionResponse } from '@/lib/sitemap-split'

export const dynamic = 'force-dynamic'

export async function GET() {
  return sectionResponse('blog')
}
