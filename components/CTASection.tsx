import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#7cb983]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Ready to Shape Your Dental Career?
        </h2>

        {/* Description */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Join JKKN Dental College & Hospital and become part of over five decades of educational excellence. Applications for 2026-27 are now open.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
            className="w-full sm:w-auto bg-white hover:bg-gray-100 active:bg-gray-200 text-[#006837] font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center shadow-lg min-h-[44px] flex items-center justify-center touch-manipulation text-sm sm:text-base"
          >
            Apply Now →
          </Link>
          <a
            href="tel:+919345855001"
            className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-[#7cb983] active:bg-gray-100 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
          >
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
