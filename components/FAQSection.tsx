'use client';

import { useState } from 'react';
import { homeFaqs } from '@/data/homeFaqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = homeFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#FBFBEE]">

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <span className="block text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">FAQS</span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Find answers to common questions about admissions, programs, and campus life.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 min-h-[56px] sm:min-h-[64px] touch-manipulation"
              >
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] pr-3 sm:pr-4 leading-snug">
                  {faq.question}
                </h4>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer — always in DOM for SEO crawlers, collapsed visually when closed */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                    {faq.link && (
                      <>
                        {' '}
                        <a href={faq.link.href} className="text-[#006837] hover:underline font-medium">
                          {faq.link.label}
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
