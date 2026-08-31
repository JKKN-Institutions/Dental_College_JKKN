import { faqItems, type FaqItem } from '@/lib/faq';

/**
 * The visible half of a page's FAQ, rendered from the same data the JSON-LD is built from.
 *
 * Deliberately a SERVER component built on <details>/<summary>:
 *   - no useState, so there is no render path on which a question is absent from the HTML;
 *   - collapsed answers stay in the DOM, which is what Google's FAQPage guidance asks for and
 *     what a React conditional render silently breaks;
 *   - no max-height, because the accordion this replaces clipped answers over ~384px.
 *
 * That is the point. GL6-178 existed because visibility depended on component state; here it
 * cannot, so the defect cannot come back on this component.
 */
export default function FaqAccordion({
  items,
  schema,
  title = 'Frequently Asked Questions',
  intro,
  id = 'faq',
}: {
  items?: FaqItem[];
  schema?: unknown;
  title?: string;
  intro?: string;
  id?: string;
}) {
  const faqs = items ?? faqItems(schema);
  if (!faqs.length) return null;

  return (
    <section id={id} className="bg-[#FBFBEE] py-14 px-4 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="block text-[#7cb983] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837] leading-tight">
            {title}
          </h2>
          {intro ? (
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">{intro}</p>
          ) : null}
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mt-6" />
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:border-[#7cb983] hover:shadow-md transition-shadow duration-300"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 cursor-pointer list-none min-h-[56px] hover:bg-gray-50 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] leading-snug">
                  {faq.q}
                </h3>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6 border-t border-[#7cb983]/20">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
