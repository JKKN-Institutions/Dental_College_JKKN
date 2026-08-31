/**
 * One source of truth for a page's FAQs.
 *
 * GL6-178 measured, on 2026-08-31, that 137 of the 406 FAQPage questions this site declares to
 * Google never reach the DOM. Two different causes, one shape: a page kept the schema and the
 * visible section as SEPARATE hand-written arrays, and they drifted - or the visible one was
 * never written at all.
 *
 * The fix is not to re-sync 137 strings; it is to make drift impossible. Every page should hold
 * ONE array and derive the other side from it:
 *
 *   const faqs = [...]                          // the single source
 *   <StructuredData data={faqPageSchema(faqs)} />
 *   <FaqAccordion items={faqs} />
 *
 * A page that already owns a hand-written faqSchema can go the other way with faqItems(), which
 * is the cheaper edit and gives the same guarantee.
 */

export type FaqItem = { q: string; a: string };

export type FaqPageSchema = {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: { '@type': 'Answer'; text: string };
  }[];
};

/** Build FAQPage JSON-LD from the very items the page renders. */
export function faqPageSchema(items: FaqItem[]): FaqPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question' as const,
      name: item.q,
      acceptedAnswer: { '@type': 'Answer' as const, text: item.a },
    })),
  };
}

/**
 * Read renderable items back out of a FAQPage object. Accepts the loose shape the older
 * hand-written consts use ('@type' strings, single-object mainEntity) so a page can adopt this
 * without its schema being rewritten first.
 */
export function faqItems(schema: unknown): FaqItem[] {
  const node = schema as { mainEntity?: unknown } | null;
  if (!node || typeof node !== 'object') return [];
  const raw = node.mainEntity;
  const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
  const out: FaqItem[] = [];
  for (const entry of list) {
    if (!entry || typeof entry !== 'object') continue;
    const q = (entry as { name?: unknown }).name;
    const answer = (entry as { acceptedAnswer?: unknown }).acceptedAnswer;
    const a =
      answer && typeof answer === 'object' ? (answer as { text?: unknown }).text : undefined;
    if (typeof q === 'string' && typeof a === 'string' && q.trim() && a.trim()) {
      out.push({ q, a });
    }
  }
  return out;
}
