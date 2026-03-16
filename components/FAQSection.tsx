'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What courses are offered at JKKN Dental College & Hospital?",
      answer: "JKKN Dental College & Hospital offers BDS (Bachelor of Dental Surgery) - a 5-year undergraduate program with comprehensive training across 9 departments including Oral Surgery, Orthodontics, Periodontics, Prosthodontics, Conservative Dentistry, Pedodontics, Oral Medicine, Oral Pathology, and Public Health Dentistry. We also offer MDS (Master of Dental Surgery) postgraduate programs in 5 specializations: Conservative Dentistry & Endodontics, Prosthodontics, Periodontics, Oral Medicine & Radiology, and Orthodontics & Dentofacial Orthopedics."
    },
    {
      question: "Is JKKN Dental College & Hospital DCI approved?",
      answer: "Yes, JKKN Dental College & Hospital is fully approved by the Dental Council of India (DCI) and National Medical Commission (NMC). The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University and NAAC accredited."
    },
    {
      question: "What is the admission process for BDS?",
      answer: "BDS admission is based on NEET-UG scores through state or All India Quota counseling. Candidates need 10+2 with Physics, Chemistry, and Biology with minimum 50% marks (40% for reserved categories). After counseling allocation, complete document verification and fee payment."
    },
    {
      question: "What facilities does JKKN Dental College offer?",
      answer: "Our campus features a 200+ chair dental hospital treating 500+ patients daily, digital simulation labs, CBCT and OPG imaging, CAD/CAM laboratory, library with e-resources, research labs, separate hostels, cafeteria, sports facilities, and 24/7 Wi-Fi."
    },
    {
      question: "What is the placement record?",
      answer: "JKKN Dental College & Hospital provides 100% placement assistance. Alumni work at Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and private practices. Many pursue higher studies abroad or establish their own clinics."
    },
    {
      question: "What makes JKKN different from other dental colleges?",
      answer: "JKKN stands out with its 57+ years of educational legacy (JKKN Group founded 1969), learner-centric philosophy, exceptional clinical exposure (500+ daily patients), distinguished Learning Facilitators, state-of-the-art infrastructure, research culture, and comprehensive placement support."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#FBFBEE]">

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">FAQS</h3>
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

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
