// Enquiry box INSIDE a CMS blog post - which posts get one, and where it goes.
//
// Dental Step 2 of the 10,300-lead plan (2026-11-02). The NEET BDS cutoff post drew 35,404 Google
// impressions and 257 clicks from 2026-09-15 to 10-30 (GSC, position 5.1), yet it had no enquiry form
// at all - only the comment form, 20.4 phone screens down a 25-screen page, while a phone visit
// lasted 64 s on average (GA4 2026-09-15..11-01). The box goes right after the first answer section.
//
// 2026-11-05 (lead option 2): EVERY campus post now gets the box, not only the NEET post. A live
// 375 px check that day found no enquiry form inside the other posts (only header / footer buttons).
// The course in the box follows the post's slug: an MDS post pre-selects MDS (its speciality when the
// slug names one), a BDS post pre-selects BDS, any other post leaves the course for the reader to pick.
//
// The post body is CMS HTML, so the box cannot live in the CMS text. The template splits the HTML
// just before the Nth <h2> and renders the box in between. The split is refused (null) whenever the
// part before it leaves a block element open - then the box simply goes after the whole post - so
// a later CMS edit that wraps the body in a <div> can never produce broken markup.

/** Which copy the box shows (components/lead/BlogEnquiryBox.tsx). */
export type BoxVariant = 'neet-bds' | 'bds' | 'mds' | 'general' | 'counselling';

/** Posts with their own wording / place. Every other post gets the default below. */
export const BLOG_INLINE_CTA: Readonly<Record<string, { beforeH2: number; sourcePage: string; variant: BoxVariant }>> = {
  'neet-cutoff-for-bds-2026-category-wise-marks-college-list': { beforeH2: 2, sourcePage: 'blog-neet-cutoff', variant: 'neet-bds' },
};

/** Every other post: the box goes just before its 2nd <h2> (after the first answer section). */
export const DEFAULT_BEFORE_H2 = 2;

/** The CRM tag is utm_campaign dental-<sourcePage>; the slug part is kept short. */
const SOURCE_SLUG_MAX = 40;

const BLOCK_TAGS = ['div', 'section', 'article', 'aside', 'table', 'ul', 'ol', 'blockquote', 'figure', 'details', 'p', 'pre'];

/** True when every block tag opened in `html` is also closed in it. */
export function blockTagsBalanced(html: string): boolean {
  return BLOCK_TAGS.every((tag) => {
    const open = (html.match(new RegExp(`<${tag}(?=[\\s>/])`, 'gi')) || []).length;
    const close = (html.match(new RegExp(`</${tag}\\s*>`, 'gi')) || []).length;
    return open === close;
  });
}

/** The HTML cut just before its Nth <h2> (n >= 2), or null when there is no Nth <h2> or the cut is unsafe. */
export function splitBeforeNthH2(html: string, n: number): { before: string; after: string } | null {
  if (!html || n < 2) return null;
  const re = /<h2(?=[\s>])/gi;
  let count = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    count += 1;
    if (count === n) {
      const before = html.slice(0, m.index);
      const after = html.slice(m.index);
      return blockTagsBalanced(before) ? { before, after } : null;
    }
  }
  return null;
}

/** MDS speciality keys of lib/dental-programmes.ts DEFAULT_PROGRAMME_BY_PAGE, matched on slug words. */
const MDS_SPECIALITY: ReadonlyArray<[RegExp, string]> = [
  [/periodont/, 'mds-periodontics'],
  [/prosthodont/, 'mds-prosthodontics'],
  [/orthodont/, 'mds-orthodontics'],
  [/endodont|conservative-dentistry/, 'mds-conservative'],
  [/oral-medicine|oral-radiology/, 'mds-oral-medicine'],
];

/** Box copy + pre-selected programme key for a post, read from its slug only. */
export function courseForSlug(slug: string): { variant: BoxVariant; programmeKey: string | null } {
  const s = (slug || '').toLowerCase();
  const mds = /(^|-)mds(-|$)/.test(s);
  const bds = /(^|-)bds(-|$)/.test(s);
  if (mds && !bds) {
    const hit = MDS_SPECIALITY.find(([re]) => re.test(s));
    return { variant: 'mds', programmeKey: hit ? hit[1] : null };
  }
  if (bds && !mds) return { variant: 'bds', programmeKey: 'bds' };
  return { variant: 'general', programmeKey: null };
}

export type InlineCta = {
  sourcePage: string;
  variant: BoxVariant;
  /** Key of DEFAULT_PROGRAMME_BY_PAGE, or null = the reader picks the course. */
  programmeKey: string | null;
  before: string | null;
  after: string | null;
};

/** The box for a post: its source tag, copy, course and the two halves (both null = box after the post).
 *  Null only when there is no slug. */
export function inlineCtaFor(slug: string, html: string): InlineCta | null {
  if (!slug) return null;
  const cfg = BLOG_INLINE_CTA[slug];
  const course = courseForSlug(slug);
  const variant = cfg ? cfg.variant : course.variant;
  const programmeKey = variant === 'neet-bds' ? 'bds' : course.programmeKey;
  const sourcePage = cfg ? cfg.sourcePage : `blog-${slug.slice(0, SOURCE_SLUG_MAX).replace(/-+$/, '')}`;
  const parts = splitBeforeNthH2(html, cfg ? cfg.beforeH2 : DEFAULT_BEFORE_H2);
  return { sourcePage, variant, programmeKey, before: parts?.before ?? null, after: parts?.after ?? null };
}
