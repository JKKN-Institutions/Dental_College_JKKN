'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trophy } from 'lucide-react';
import EnquiryButton from '@/components/lead/EnquiryButton';
import DentalEnquiryForm from '@/components/lead/DentalEnquiryForm';

// Fix D2 of the 2026-10-12 homepage form audit: an action inside the first screen.
// Phones: the photo moves below the text, so heading + "Get a Call Back" sit in the first screen
// (mock-up: button at y=654 of an 812 px screen; before, the photo pushed it to y=879).
// md and up: the photo's column becomes the 3-box enquiry card (mock-up: button bottom y=680 of 768).

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('academic-programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="bg-[#0b6d41] text-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#032816] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <span className="text-white text-xs sm:text-sm font-semibold">NAAC Accredited (A) · NDC (formerly DCI) Approved</span>
            </div>

            {/* Main Heading — user's choice 2026-10-21: lead with the NIRF-filed outcome, keep "Tamil Nadu" */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              JKKN Dental College & Hospital, Tamil Nadu —{' '}
              <span className="text-[#ffde59]">93 of 99 BDS graduates placed or in higher studies</span>
              <span className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-200 mt-2">2024-25 batch, from JKKN&apos;s NIRF 2026 filing</span>
            </h1>

            {/* Description */}
            <p className="hero-description text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              Established in 1987 at Komarapalayam, Namakkal, JKKN Dental College & Hospital is a NDC-approved, NAAC A Grade dental college in Tamil Nadu, teaching in a 200+ chair hospital that sees around 500 patients a day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="text-center sm:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffde59]">500+</div>
                <div className="text-xs sm:text-sm text-gray-200 uppercase mt-1">Learners</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffde59]">200+</div>
                <div className="text-xs sm:text-sm text-gray-200 uppercase mt-1">Dental Chairs</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffde59]">500+</div>
                <div className="text-xs sm:text-sm text-gray-200 uppercase mt-1">Patients a Day</div>
              </div>
            </div>

            {/* Buttons — the call-back button is for phones; md and up has the card on the right */}
            <p className="md:hidden text-gray-200 text-sm sm:text-base">
              Fill 3 details. Our admission team will call you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <EnquiryButton
                sourcePage="home-hero-btn"
                fallbackHref="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=dental.jkkn.ac.in&utm_medium=organic&utm_campaign=components-hero"
                fallbackLabel="Start Your Application →"
                className="md:hidden bg-[#ffde59] hover:bg-[#e6c64d] active:bg-[#e6c64d] text-[#032816] font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation transform hover:scale-105 active:scale-95"
              >
                Get a Call Back
              </EnquiryButton>
              <Link
                href="#academic-programs"
                onClick={scrollToSection}
                className="border-2 border-white hover:bg-white hover:text-[#0b6d41] active:bg-gray-100 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Right: photo on phones (below the text), enquiry card from md up */}
          <div className="relative md:hidden">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
              <Image
                src="/images/JKKN-Dental-Clinical-Training.webp"
                alt="JKKN Dental College clinical training with dental chairs and faculty treating patients"
                width={1920}
                height={1440}
                className="w-full h-full object-cover"
                sizes="100vw"
                quality={85}
              />
            </div>
          </div>
          {/* White card, mockup #7 (user's pick 2026-10-22): the form's own 3-step strip replaces the
              old sub-line, so the heading sits straight above it. */}
          <div className="hidden md:block rounded-[20px] bg-white shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-6 lg:p-7">
            <h2 className="mb-4 text-xl lg:text-2xl font-bold text-[#032816] leading-snug">Get BDS / MDS fee and admission details</h2>
            <DentalEnquiryForm sourcePage="home-hero" compact bare />
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
              alt="National Dental Commission (formerly Dental Council of India)"
              width={120}
              height={64}
              className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: "auto" }}
              loading="lazy"
              sizes="(max-width: 768px) 64px, 80px"
            />
            <Image
              src="/images/NAAC_LOGO.webp"
              alt="NAAC Accreditation"
              width={120}
              height={64}
              className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: "auto" }}
              loading="lazy"
              sizes="(max-width: 768px) 64px, 80px"
            />
            <Image
              src="/images/Dr.M.G.R.Medical-University-logo.webp"
              alt="Tamil Nadu Dr. MGR Medical University"
              width={120}
              height={64}
              className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: "auto" }}
              loading="lazy"
              sizes="(max-width: 768px) 64px, 80px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
