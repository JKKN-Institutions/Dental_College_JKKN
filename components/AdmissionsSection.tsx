import { Check, Phone, Mail } from 'lucide-react';

export default function AdmissionsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left - Eligibility */}
          <div>
            <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">Admissions 2026-27</h3>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#006837] mb-6 sm:mb-8 leading-tight">
              Begin Your Journey to Dental Excellence
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
              Join JKKN Dental College and embark on a transformative educational journey in dental science.
            </p>

            {/* BDS Eligibility */}
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
              <h4 className="text-lg sm:text-xl font-bold text-[#006837] mb-3 sm:mb-4">BDS Eligibility</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">10+2 with Physics, Chemistry, Biology</div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Minimum 50% marks (40% reserved)</div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Valid NEET-UG score</div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Age: 17 years by Dec 31</div>
                </div>
              </div>
            </div>

            {/* MDS Eligibility */}
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-[#006837] mb-3 sm:mb-4">MDS Eligibility</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">BDS from DCI-recognized institution</div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Completed rotating internship</div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Valid NEET-MDS score</div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">State Dental Council registration</div>
                </div>
              </div>
            </div>

            {/* Eligibility Comparison Table */}
            <div className="overflow-x-auto mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-4">Eligibility Criteria at a Glance</h3>
              <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden text-sm">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-3 py-2.5 text-left font-semibold">Criteria</th>
                    <th className="px-3 py-2.5 text-left font-semibold">BDS</th>
                    <th className="px-3 py-2.5 text-left font-semibold">MDS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2.5 text-gray-700 font-medium">Qualification</td>
                    <td className="px-3 py-2.5 text-gray-600">10+2 with PCB</td>
                    <td className="px-3 py-2.5 text-gray-600">BDS from DCI-recognized college</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-3 py-2.5 text-gray-700 font-medium">Min. Marks</td>
                    <td className="px-3 py-2.5 text-gray-600">50% (40% reserved)</td>
                    <td className="px-3 py-2.5 text-gray-600">Pass in BDS</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2.5 text-gray-700 font-medium">Entrance Exam</td>
                    <td className="px-3 py-2.5 text-gray-600">NEET-UG</td>
                    <td className="px-3 py-2.5 text-gray-600">NEET-MDS</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 py-2.5 text-gray-700 font-medium">Internship Required</td>
                    <td className="px-3 py-2.5 text-gray-600">Not required</td>
                    <td className="px-3 py-2.5 text-gray-600">Compulsory rotating internship</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:+919345855001"
                className="bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                <span>Talk to Admissions</span>
              </a>
              <a
                href="mailto:dental@jkkn.ac.in"
                className="border-2 border-[#006837] hover:bg-[#006837] hover:text-white active:bg-[#0d3d13] text-[#006837] font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Right - Admission Process */}
          <div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-6 sm:mb-8">Admission Process</h3>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Step 1 */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-0.5 sm:mb-1">Check Eligibility</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Verify academic and NEET requirements</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-0.5 sm:mb-1">Register for Counseling</h4>
                    <p className="text-xs sm:text-sm text-gray-600">TN State or All India Quota</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-0.5 sm:mb-1">Participate in Counseling</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Select JKKN during choice-filling</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-0.5 sm:mb-1">Document Verification</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Complete verification at our office</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base">
                      5
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-0.5 sm:mb-1">Fee Payment & Enrollment</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Pay fees and secure your seat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
