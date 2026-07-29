/**
 * Shared blog body rendering.
 *
 * Used by BOTH the live campus blog page (`/blog/campus/[slug]`) and the draft
 * preview page (`/blog/preview/[id]`) so a preview renders exactly what the
 * live page would render — no drift between the two.
 */

export interface TocItem {
  id: string;
  label: string;
}

/** Extract h2/h3 headings from HTML and inject id attributes for TOC */
export function processContent(
  html: string
): { processedHtml: string; tocItems: TocItem[] } {
  if (!html) return { processedHtml: '', tocItems: [] };

  const tocItems: TocItem[] = [];
  const seen = new Map<string, number>();

  const processedHtml = html.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (_, level: string, attrs: string, inner: string) => {
      const label = inner.replace(/<[^>]+>/g, '').trim();
      const base = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const count = seen.get(base) ?? 0;
      const id = count > 0 ? `${base}-${count}` : base;
      seen.set(base, count + 1);

      tocItems.push({ id, label });

      if (!attrs.includes('id=')) {
        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
      }
      return `<h${level}${attrs}>${inner}</h${level}>`;
    }
  );

  return { processedHtml, tocItems };
}

/** Estimate reading time from HTML content */
export function calcReadMeta(content: string): { words: number; readTime: number } {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, readTime: Math.max(1, Math.ceil(words / 200)) };
}

/**
 * Turn a stored blog row into everything `CampusBlogContent` needs.
 *
 * Posts saved in the newer structured format (`sections` JSONB) render their
 * own layout, so the HTML body is skipped for them.
 */
export function renderBlogBody(post: {
  content?: string | null;
  sections?: unknown;
}): {
  processedHtml: string;
  tocItems: TocItem[];
  words: number;
  readTime: number;
} {
  const isStructured = !!post.sections;

  const contentHtml = post.content ?? '';
  const isHtml = contentHtml.includes('<');

  const rawHtml = isStructured
    ? ''
    : isHtml
    ? contentHtml
    : contentHtml
        .split(/\n\n+/)
        .map((p: string) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
        .join('');

  const { processedHtml, tocItems } = isStructured
    ? { processedHtml: '', tocItems: [] as TocItem[] }
    : processContent(rawHtml);

  const { words, readTime } = calcReadMeta(rawHtml);

  return { processedHtml, tocItems, words, readTime };
}
