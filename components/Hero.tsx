'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trophy } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('academic-programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="bg-[#006837] text-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#002309] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <span className="text-white text-xs sm:text-sm font-semibold">DCI Approved | NAAC Accredited</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Transform Your Future at{' '}
              <span className="text-[#7cb983]">Tamil Nadu's Premier Dental College</span>
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              Join JKKN Dental College & Hospital — where world-class dental education meets compassionate patient care. Our DCI-approved programs prepare Learners for exceptional careers in dentistry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="text-center sm:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7cb983]">500+</div>
                <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Learners</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7cb983]">200+</div>
                <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Dental Chairs</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7cb983]">92%</div>
                <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Placement</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                className="bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation transform hover:scale-105 active:scale-95"
              >
                Start Your Application →
              </Link>
              <Link
                href="#academic-programs"
                onClick={scrollToSection}
                className="border-2 border-white hover:bg-white hover:text-[#006837] active:bg-gray-100 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first md:order-last">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] md:aspect-auto">
              <Image
                src="/images/JKKN-Dental-Main-Banner-Image.webp"
                alt="Dental Professional"
                width={1920}
                height={1440}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </div>

        {/* Recognized & Approved By Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider">Recognized & Approved By</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 opacity-70">
            <Image
              src="/images/Dental_Council_of_India_logo.webp"
              alt="Dental Council of India"
              width={120}
              height={64}
              className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 64px, 80px"
            />
            <Image
              src="/images/National_Medical_Commission_logo.jpg"
              alt="National Medical Commission"
              width={120}
              height={64}
              className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 64px, 80px"
            />
            <Image
              src="/images/NAAC_LOGO.webp"
              alt="NAAC Accreditation"
              width={120}
              height={64}
              className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 64px, 80px"
            />
            <Image
              src="/images/Dr.M.G.R.Medical-University-logo.webp"
              alt="Tamil Nadu Dr. MGR Medical University"
              width={120}
              height={64}
              className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 64px, 80px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
