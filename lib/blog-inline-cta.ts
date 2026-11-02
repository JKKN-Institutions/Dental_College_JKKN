// Enquiry box INSIDE a CMS blog post - which posts get one, and where it goes.
//
// Dental Step 2 of the 10,300-lead plan (2026-11-02). The NEET BDS cutoff post drew 35,404 Google
// impressions and 257 clicks from 2026-09-15 to 10-30 (GSC, position 5.1), yet it had no enquiry form
// at all - only the comment form, 20.4 phone screens down a 25-screen page, while a phone visit
// lasted 64 s on average (GA4 2026-09-15..11-01). The box goes right after the first answer section.
//
// The post body is CMS HTML, so the box cannot live in the CMS text. The template splits the HTML
// just before the Nth <h2> and renders the box in between. The split is refused (null) whenever the
// part before it leaves a block element open - then the box simply goes after the whole post - so
// a later CMS edit that wraps the body in a <div> can never produce broken markup.

export const BLOG_INLINE_CTA: Readonly<Record<string, { beforeH2: number; sourcePage: string }>> = {
  'neet-cutoff-for-bds-2026-category-wise-marks-college-list': { beforeH2: 2, sourcePage: 'blog-neet-cutoff' },
};

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

export type InlineCta = { sourcePage: string; before: string | null; after: string | null };

/** For a configured slug: the source tag and the two halves (both null = put the box after the post). */
export function inlineCtaFor(slug: string, html: string): InlineCta | null {
  const cfg = BLOG_INLINE_CTA[slug];
  if (!cfg) return null;
  const parts = splitBeforeNthH2(html, cfg.beforeH2);
  return { sourcePage: cfg.sourcePage, before: parts?.before ?? null, after: parts?.after ?? null };
}
