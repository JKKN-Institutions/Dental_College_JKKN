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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/JKKN-Dental-College-Building.jpg"
                alt="JKKN Dental College & Hospital building exterior with signboard at Komarapalayam campus"
                width={1920}
                height={1280}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              {/* JKKN Group Legacy Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-[#7cb983] text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl">
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-center">57+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-wide text-center">JKKN Group Legacy</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
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
              JKKN Dental College &amp; Hospital is a DCI-approved and NAAC A Grade accredited dental institution in Tamil Nadu, established in 1987. With 200+ dental chairs, 100+ hospital beds, 500+ daily patients, and a 92% placement rate, JKKN offers BDS and MDS programs affiliated to TN Dr. MGR Medical University at Komarapalayam, Namakkal — accessible from Salem, Erode, and Coimbatore.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Founded on the vision of J.K.K. Nattraja Chettiar (1895–1995), JKKN Dental College is a premier institution under JKKN Institutions. Located on NH-544 in Komarapalayam, Namakkal District, the college provides an ideal environment for focused learning as India&#39;s first AI-integrated dental campus.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <div className="text-gray-700 font-medium text-sm sm:text-base">DCI & NMC Approved</div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <div className="text-gray-700 font-medium text-sm sm:text-base">NAAC Accredited</div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <div className="text-gray-700 font-medium text-sm sm:text-base">200+ Dental Chairs</div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <div className="text-gray-700 font-medium text-sm sm:text-base">500+ Daily Patients</div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <div className="text-gray-700 font-medium text-sm sm:text-base">5 MDS Specializations</div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                <div className="text-gray-700 font-medium text-sm sm:text-base">92% Placement</div>
              </div>
            </div>

            <Link
              href="#academic-programs"
              onClick={scrollToSection}
              className="inline-block bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation"
            >
              Explore Programs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
