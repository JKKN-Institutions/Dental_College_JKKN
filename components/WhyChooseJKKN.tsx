export default function WhyChooseJKKN() {
  return (
    <section className="institution-highlights py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#006837] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top: Centered heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">Why Choose JKKN</h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 leading-tight">
            Why JKKN is the Best Dental College in Tamil Nadu
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">JKKN Dental College stands out with 39+ years of excellence, 500+ daily patients for clinical exposure, AI-integrated campus technology, and 92% placement assistance backed by JKKN Institutions since 1952.</p>
        </div>

        {/* Middle: Numbered list in two columns */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-14">
          <ol className="space-y-5 sm:space-y-6 list-none p-0 m-0">
            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
                  01
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">JKKN Group: 74+ Years of Educational Legacy</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Part of JKKN Institutions, founded in 1952 with seventy-four years of educational heritage across eight colleges and two schools. The JKKN Group operates a five hundred bed multi-specialty teaching hospital on the same campus.
                </p>
              </div>
            </li>

            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
                  02
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Unmatched Clinical Exposure</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Over five hundred patients visit daily across nine clinical departments, providing extensive hands-on training from second year onwards in all dental specialties.
                </p>
              </div>
            </li>
          </ol>

          <ol className="space-y-5 sm:space-y-6 list-none p-0 m-0">
            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
                  03
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Distinguished Learning Facilitators</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Experienced specialists with national and international recognition in their fields.
                </p>
              </div>
            </li>

            <li className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
                  04
                </div>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">92% Placement Assistance</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Strong industry connections with Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and international institutions including NHS United Kingdom.
                </p>
                <a href="https://placements.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#7cb983] hover:underline text-xs sm:text-sm mt-1 inline-block">
                  View verified placement records →
                </a>
              </div>
            </li>
          </ol>
        </div>

        {/* Bottom: Stats in a horizontal row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="bg-[#002309] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983] mb-1 sm:mb-2">39+</div>
            <div className="text-gray-300 text-xs sm:text-sm">Dental College Est. 1987</div>
          </div>
          <div className="bg-[#002309] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983] mb-1 sm:mb-2">3000+</div>
            <div className="text-gray-300 text-xs sm:text-sm">Alumni Network</div>
          </div>
          <div className="bg-[#002309] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983] mb-1 sm:mb-2">50+</div>
            <div className="text-gray-300 text-xs sm:text-sm">Publications</div>
          </div>
          <div className="bg-[#002309] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983] mb-1 sm:mb-2">25+</div>
            <div className="text-gray-300 text-xs sm:text-sm">Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  );
}
