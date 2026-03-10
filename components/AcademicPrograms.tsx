import Link from "next/link";
import { Circle, GraduationCap, Check, Leaf, Wrench, Pill, Microscope } from 'lucide-react';

export default function AcademicPrograms() {
  return (
    <section id="academic-programs" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">Academic Programs</h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
            Comprehensive Dental Education Programs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Choose from our DCI-approved undergraduate and postgraduate dental programs designed to shape competent, compassionate dental professionals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
          {/* BDS Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-[#006837] text-white p-6 sm:p-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#002309] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Circle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2">Bachelor of Dental Surgery (BDS)</h3>
              <p className="text-gray-300 text-xs sm:text-sm">5 Years (incl. 1-year internship)</p>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Our flagship undergraduate program provides comprehensive training in all aspects of dental science with extensive clinical exposure.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Complete curriculum covering oral biology, pathology, surgery, and restorative dentistry</div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Hands-on clinical training from second year</div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Modern simulation labs for pre-clinical practice</div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Community dentistry camps and rural exposure</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-[#006837]">100 Seats</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase">Annual Intake</div>
                </div>
                <a
                  href="/bds"
                  className="block w-full bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation transform hover:scale-105 active:scale-95"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* MDS Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-[#006837] text-white p-6 sm:p-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#002309] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2">Master of Dental Surgery (MDS)</h3>
              <p className="text-gray-300 text-xs sm:text-sm">3 Years Postgraduate</p>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Advance your dental career with specialized MDS programs offering advanced clinical training and research opportunities.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">5 specialized branches including Orthodontics, Oral Surgery, Prosthodontics</div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Research-oriented curriculum with publication support</div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Advanced CBCT and CAD/CAM systems</div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0" />
                  <div className="text-gray-700 text-sm sm:text-base">Conference presentations and international exposure</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-[#006837]">18+ Seats</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase">PG Intake</div>
                </div>
                <a
                  href="/mds"
                  className="block w-full bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation transform hover:scale-105 active:scale-95"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BDS vs MDS Program Comparison Table */}
        <div className="mb-12 sm:mb-16 md:mb-20 overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#006837] text-center mb-6">BDS vs MDS – Program Comparison</h2>
          <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
            <thead>
              <tr className="bg-[#006837] text-white">
                <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold">Criteria</th>
                <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold">BDS</th>
                <th className="px-4 py-3 text-left text-sm sm:text-base font-semibold">MDS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Duration</td>
                <td className="px-4 py-3 text-sm text-gray-600">5 years (incl. 1-year internship)</td>
                <td className="px-4 py-3 text-sm text-gray-600">3 years</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Eligibility</td>
                <td className="px-4 py-3 text-sm text-gray-600">10+2 with PCB, NEET-UG</td>
                <td className="px-4 py-3 text-sm text-gray-600">BDS degree, NEET-MDS</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Seat Intake</td>
                <td className="px-4 py-3 text-sm text-gray-600">100 seats</td>
                <td className="px-4 py-3 text-sm text-gray-600">18+ seats</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Specializations</td>
                <td className="px-4 py-3 text-sm text-gray-600">General Dentistry</td>
                <td className="px-4 py-3 text-sm text-gray-600">5 specializations available</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Degree Awarded</td>
                <td className="px-4 py-3 text-sm text-gray-600">BDS (Tamil Nadu Dr. MGR Medical University)</td>
                <td className="px-4 py-3 text-sm text-gray-600">MDS (Tamil Nadu Dr. MGR Medical University)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Admission</td>
                <td className="px-4 py-3 text-sm text-gray-600">State counseling + management quota</td>
                <td className="px-4 py-3 text-sm text-gray-600">State counseling + management quota</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MDS Specializations Section */}
        <div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#006837] text-center mb-8 sm:mb-10 md:mb-12">MDS Specializations Offered</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Periodontics */}
            <Link href="/academics/details-of-academic-programs/mds/periodontics" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Periodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Gum disease treatment</p>
                </div>
              </div>
            </Link>

            {/* Orthodontics and Dentofacial Orthopedics */}
            <Link href="/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Orthodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Teeth alignment & braces</p>
                </div>
              </div>
            </Link>

            {/* Prosthodontics Crown and Bridge */}
            <Link href="/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Prosthodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Implants & dentures</p>
                </div>
              </div>
            </Link>

            {/* Conservative Dentistry and Endodontics */}
            <Link href="/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Endodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Root canal therapy</p>
                </div>
              </div>
            </Link>

            {/* Oral Medicine and Radiology */}
            <Link href="/academics/details-of-academic-programs/mds/oral-medicine" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Oral Medicine</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Diagnosis & imaging</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
