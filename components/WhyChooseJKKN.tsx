export default function WhyChooseJKKN() {
  return (
    <section className="institution-highlights py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#0b6d41] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top: Centered heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h3 className="text-[#ffde59] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">Why Choose JKKN</h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 leading-tight">
            Why Students Choose JKKN Dental College in Tamil Nadu
          </h2>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">JKKN Dental College stands out with 39+ years of excellence, 500+ daily patients for clinical exposure, AI-integrated campus technology, and 93.9% placed or in higher studies (2024-25 batch) backed by JKKN Institutions since 1952.</p>
        </div>

        {/* Middle: Numbered list in two columns */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-14">
          <ol className="space-y-5 sm:space-y-6 list-none p-0 m-0">
            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffde59] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg text-[#032816]">
                  01
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">JKKN Group: 74+ Years of Educational Legacy</h4>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  Part of JKKN Institutions, founded in 1952 with seventy-four years of educational heritage across seven colleges and two schools. JKKN Dental College runs its own dental hospital with 200+ chairs and 100+ beds.
                </p>
              </div>
            </li>

            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffde59] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg text-[#032816]">
                  02
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Clinical Training in Our Own Hospital</h4>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  Over five hundred patients visit daily across nine clinical departments, giving learners hands-on clinical training in every dental specialty.
                </p>
              </div>
            </li>
          </ol>

          <ol className="space-y-5 sm:space-y-6 list-none p-0 m-0">
            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffde59] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg text-[#032816]">
                  03
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Distinguished Learning Facilitators</h4>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  Experienced specialists with national and international recognition in their fields.
                </p>
              </div>
            </li>

            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffde59] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg text-[#032816]">
                  04
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">93.9% Placed or in Higher Studies (2024-25)</h4>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  Of 99 BDS graduates in 2024-25, 75 were placed and 18 went on to higher studies; median salary ₹3.6 lakh. MDS: 7 of 7 placed, median ₹6.0 lakh. Source: JKKN&apos;s NIRF 2026 filing.
                </p>
                <a href="/placements/" className="text-[#ffde59] hover:underline text-xs sm:text-sm mt-1 inline-block">
                  See the placement figures →
                </a>
              </div>
            </li>
          </ol>
        </div>

        {/* Bottom: Stats in a horizontal row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="bg-[#032816] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#ffde59] mb-1 sm:mb-2">39+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Dental College Est. 1987</div>
          </div>
          <div className="bg-[#032816] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#ffde59] mb-1 sm:mb-2">3000+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Alumni Network</div>
          </div>
          <div className="bg-[#032816] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#ffde59] mb-1 sm:mb-2">50+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Publications</div>
          </div>
          <div className="bg-[#032816] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#ffde59] mb-1 sm:mb-2">25+</div>
            <div className="text-gray-200 text-xs sm:text-sm">Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  );
}
