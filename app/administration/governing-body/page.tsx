import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Governing Body | JKKN Dental College',
  description: 'Explore the Governing Body of JKKN Dental College, guiding excellence in dental education, healthcare, and institutional governance.',
  keywords: 'Governing Body, JKKN Dental College, governance, institutional policies, dental education governance, academic excellence, healthcare leadership',
};

export default function GoverningBody() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
            GOVERNING BODY
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-6 sm:mb-8">
            Guiding Excellence in Dental Education & Healthcare
          </h2>

          {/* Introduction */}
          <div className="mb-6 sm:mb-8 text-justify">
            <p className="text-sm sm:text-base leading-relaxed text-black">
              The <span className="font-bold">Governing Body of JKKN Dental College & Hospital</span> is dedicated to upholding the highest standards of <span className="font-bold">academic excellence, research innovation, and patient care</span>. Comprising distinguished professionals from academia, healthcare, and administration, the governing body plays a pivotal role in <span className="font-bold">strategic planning, policy formulation, and institutional growth</span>.
            </p>
          </div>

          {/* Role & Responsibilities */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-3 sm:mb-4">
            Role & Responsibilities
          </h3>
          <p className="text-sm sm:text-base text-black mb-3 sm:mb-4">
            The Governing Body provides <span className="font-bold">visionary leadership</span> and ensures the smooth functioning of the institution by:
          </p>

          {/* List of Responsibilities */}
          <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-black font-bold flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-black">
                <span className="font-bold">Setting Institutional Policies</span> – Defining governance frameworks to enhance academic and operational efficiency.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-black font-bold flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-black">
                <span className="font-bold">Ensuring Quality Education</span> – Overseeing curriculum development, faculty recruitment, and student welfare initiatives.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-black font-bold flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-black">
                <span className="font-bold">Advancing Research & Innovation</span> – Supporting scientific research, collaborations, and technological advancements.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-black font-bold flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-black">
                <span className="font-bold">Upholding Ethical Standards</span> – Ensuring compliance with regulatory authorities, accreditation bodies, and ethical guidelines.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-black font-bold flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-black">
                <span className="font-bold">Strengthening Community Engagement</span> – Promoting outreach programs, public health initiatives, and social responsibility.
              </p>
            </div>
          </div>

          {/* Council Members Heading */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-4 sm:mb-6 mt-8 sm:mt-10 md:mt-12">
            GOVERNING COUNCIL MEMBERS 2025-26
          </h3>

          {/* Table */}
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-10 md:mb-12">
            <table className="w-full border-collapse bg-white min-w-[500px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm md:text-base font-bold text-gray-600 whitespace-nowrap">
                    S.NO
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm md:text-base font-bold text-gray-600">
                    DESIGNATION
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm md:text-base font-bold text-gray-600">
                    NAME OF THE MEMBER
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    1.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    CHAIRPERSON
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    SMT.N.SENDAMARAAI
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    2.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    MANAGING DIRECTOR
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    MR. S.OMMSHARRAVANA
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    3.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    MANAGEMENT MEMBER-TRUSTEE
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    MRS. O.ISVARYA LAKSHMI
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    4.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    MANAGEMENT MEMBER- CHIEF ADMINISTRATIVE OFFICER
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    MR.RAJENDIRAN
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    5.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    PRINCIPAL-MEMBER SECRETARY
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    DR.DHANASEKAR BALAKRISHNAN
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    6.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    VICE PRINCIPAL
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    DR. B SASIREKHA
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    7.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    FACULTY MEMBER-ACADEMICS
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    1.DR.J.V.KARUNAKARAN, 2.DR.G.PRANAVADHYANI, 3.DR.C.DHINESH KUMAR
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    8.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    EXPERTISE IN HEALTH CARE AND PUBLIC HEALTH
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    1.DR.NAVEEN RAJ
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base text-gray-700">
                    9.
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                    EXTERNAL EXPERT-EDUCATIONALIST
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    PROFESSOR.DR.H.THAMIZHCHELVAN
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Commitment to Excellence */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-3 sm:mb-4">
            Commitment to Excellence
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-black text-justify mb-8 sm:mb-10 md:mb-12">
            The <span className="font-bold">Governing Body of JKKN Dental College & Hospital</span> is committed to fostering a <span className="font-bold">progressive learning environment, innovative research, and high-quality patient care</span>. By ensuring efficient governance, the institution continues to make a significant impact in <span className="font-bold">dental education, healthcare, and community service</span>.
          </p>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
