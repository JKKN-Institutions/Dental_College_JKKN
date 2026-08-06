'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function AboutInstitution() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('academic-programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <div>
            <div className="mb-3 sm:mb-4">
              <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">About Our Institution</h3>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-2 sm:mb-3 leading-tight">
              Best Dental College in Tamil Nadu
            </h2>
            <p className="text-[#7cb983] text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-6">
              Over Five Decades of Excellence in Progressive Education
            </p>
            <p className="snippet-answer text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              JKKN Dental College and Hospital, established in 1987 in Komarapalayam, Namakkal District, is a Dental Council of India approved and NAAC A Grade accredited dental college in Tamil Nadu. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, the college offers Bachelor of Dental Surgery and Master of Dental Surgery programs with over two hundred dental chairs, five hundred daily patients, and ninety-two percent placement assistance.
            </p>
            {/* Voice Search Answer — hidden visually, accessible to crawlers and screen readers */}
            <div className="voice-answer sr-only" aria-hidden="false">
              JKKN Dental College and Hospital in Komarapalayam, Namakkal, is a Dental Council of India approved dental college in Tamil Nadu with NAAC A Grade accreditation established in nineteen eighty-seven.
            </div>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Founded on the vision of J.K.K. Nattraja Chettiar (1895–1995), JKKN Dental College is a premier institution under JKKN Institutions. Located on NH-544 in Komarapalayam, Namakkal District, the college provides an ideal environment for focused learning as India&#39;s first AI-integrated dental campus.
            </p>

            {/* Why Choose JKKN — Unique value propositions */}
            <ul className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 list-none p-0 m-0">
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Clinical Exposure from Year 1</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <a href="https://placements.jkkn.ac.in/" target="_blank" rel="noopener" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#006837] hover:underline">International Placements — UK, UAE, Singapore</a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Attached 100+ Bed Multi-Specialty Hospital</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <Link href="/research/publication/" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#006837] hover:underline">50+ Research Publications Annually</Link>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Rural Healthcare Outreach Program</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <Link href="/admissions/scholarship/" className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#006837] hover:underline">Merit Scholarships Available</Link>
              </li>
            </ul>

            <Link
              href="#academic-programs"
              onClick={scrollToSection}
              className="inline-block bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation"
            >
              Explore Programs →
            </Link>
          </div>

          {/* Right - Image + Key Facts */}
          <div>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-6 sm:mb-8">
              <Image
                src="/images/JKKN-Dental-College-Building.webp"
                alt="JKKN Dental College & Hospital building exterior with signboard at Komarapalayam campus"
                width={1920}
                height={1280}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              {/* JKKN Group Legacy Badge */}
              <div className="absolute bottom-3 right-3 bg-[#7cb983] text-white rounded-xl p-3 shadow-2xl">
                <div className="text-2xl font-bold text-center">74+</div>
                <div className="text-[9px] font-bold uppercase tracking-wide text-center">JKKN Group Legacy</div>
              </div>
            </div>

            {/* AI Overview Content Block — Key Facts for citation optimization */}
            <div className="ai-citation-block bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">JKKN Dental College — Key Facts</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                <div className="text-gray-700"><strong className="text-[#006837]">Established:</strong> 1987</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Affiliation:</strong> TN Dr. M.G.R. Medical University</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Approval:</strong> Dental Council of India (DCI)</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Accreditation:</strong> NAAC A Grade</div>
                <div className="text-gray-700"><strong className="text-[#006837]">BDS Seats:</strong> 100 (Annual Intake)</div>
                <div className="text-gray-700"><strong className="text-[#006837]">MDS Seats:</strong> 18 (5 Specializations)</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Dental Chairs:</strong> 200+</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Daily Patients:</strong> 500+</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Hospital Beds:</strong> 100+</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Placement:</strong> 92% Assistance</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Location:</strong> NH-544, Komarapalayam, Namakkal</div>
                <div className="text-gray-700"><strong className="text-[#006837]">Unique:</strong> India&apos;s First AI-Integrated Dental Campus</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
