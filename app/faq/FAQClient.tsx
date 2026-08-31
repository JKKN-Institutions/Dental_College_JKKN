'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { faqCategories } from './faqData';

function CategoryAccordion({ category }: { category: (typeof faqCategories)[0] }) {
  return (
    <div className="space-y-3">
      {category.faqs.map((faq) => (
        <details
          key={faq.question}
          className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:border-[#7cb983] hover:shadow-md transition-shadow duration-300"
        >
          <summary className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer list-none min-h-[56px] hover:bg-gray-50 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] leading-snug">
              {faq.question}
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
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2 border-t border-[#7cb983]/20">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState('about');

  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] to-[#002309] pt-16">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-[#7cb983] text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about JKKN Dental College &amp; Hospital — admissions, programs, fees, facilities, and more.
          </p>
          <div className="mt-6 mx-auto w-20 h-[3px] bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-[#006837] transition-colors">
                Home
              </a>
            </li>
            <li className="text-gray-300 select-none">/</li>
            <li className="text-[#006837] font-medium" aria-current="page">
              FAQ
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <section className="bg-[#FBFBEE] py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 justify-center">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-[#006837] text-white border-[#006837]'
                    : 'bg-white text-[#006837] border-[#006837] hover:bg-[#006837] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Every category is rendered; the tab only chooses which one is SHOWN.
              GL6-178: rendering just the active one kept 43 of 54 declared questions out
              of the served HTML while the FAQPage schema still promised them. */}
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((cat) => (
              <div key={cat.id} className={cat.id === activeCategory ? 'block' : 'hidden'}>
                <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6">{cat.label}</h2>
                <CategoryAccordion category={cat} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 text-center max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Our admissions team is available Monday to Saturday, 9:00 AM to 5:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919345855001"
                className="inline-flex items-center justify-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 93458 55001
              </a>
              <a
                href="mailto:dental@jkkn.ac.in"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#006837] text-[#006837] hover:bg-[#006837] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                dental@jkkn.ac.in
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
