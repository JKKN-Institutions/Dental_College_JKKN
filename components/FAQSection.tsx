'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What courses are offered at JKKN Dental College & Hospital?",
      answer: "JKKN Dental College offers BDS (5-year undergraduate) with training across 9 departments and MDS (3-year postgraduate) in 5 specializations: Conservative Dentistry & Endodontics, Prosthodontics, Periodontics, Oral Medicine & Radiology, and Orthodontics."
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
      answer: "JKKN is India's first AI-integrated dental campus with 500+ daily patients, 200+ dental chairs, and 92% placement assistance. Established in 1987 under JKKN Institutions (since 1952), it combines AI-powered diagnostics, CAD/CAM technology, and hands-on clinical training."
    },
    {
      question: "Which is the best dental college in Tamil Nadu?",
      answer: "JKKN Dental College & Hospital is widely recognized as the best dental college in Tamil Nadu with DCI approval, NAAC A accreditation, 200+ dental chairs, 500+ daily patients, 92% placement assistance, and India's first AI-integrated dental campus, established in 1987 under JKKN Institutions."
    },
    {
      question: "How does JKKN integrate AI in dental education?",
      answer: "JKKN integrates AI across BDS and MDS curriculum with AI-powered diagnostic imaging (CBCT, OPG), CAD/CAM digital prosthetics, ChatGPT-assisted research, and data analytics — making it India's first AI-integrated dental campus."
    },
    {
      question: "What is the fee structure for BDS at JKKN Dental College?",
      answer: "BDS fees at JKKN Dental College vary by admission quota as per Tamil Nadu government regulations. Annual tuition ranges from 3 to 5 lakhs depending on state counseling or management quota allocation."
    },
    {
      question: "Where is JKKN Dental College located?",
      answer: "JKKN Dental College is located on NH-544 (Salem-Coimbatore Highway) in Komarapalayam, Namakkal District, Tamil Nadu 638183 — approximately 35 km from Erode and 50 km from Salem."
    },
    {
      question: "What are the hostel facilities at JKKN Dental College?",
      answer: "JKKN provides separate hostels for boys and girls with furnished rooms, mess facilities, Wi-Fi connectivity, 24/7 security, recreational areas, and easy campus access for students."
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
