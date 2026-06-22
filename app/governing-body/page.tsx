import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Governing Body | JKKN Dental College',
  description: 'Explore the Governing Body of JKKN Dental College, guiding excellence in dental education, healthcare, and institutional governance.',
  keywords: 'Governing Body, JKKN Dental College, governance, institutional policies, dental education governance, academic excellence, healthcare leadership',
  openGraph: {
    title: 'Governing Body | JKKN Dental College',
    description: 'Explore the Governing Body of JKKN Dental College, guiding excellence in dental education, healthcare, and institutional governance.',
    url: 'https://dental.jkkn.ac.in/governing-body/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/governing-body/');
const speakableSchema = generateSpeakableWebPageSchema({
  title: 'Governing Body | JKKN Dental College',
  description: 'Explore the Governing Body of JKKN Dental College, guiding excellence in dental education, healthcare, and institutional governance.',
  url: 'https://dental.jkkn.ac.in/governing-body/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function GoverningBody() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <main className="overflow-x-hidden w-full">
        <Header />

        {/* Hero Section */}
        <div className="bg-[#006837] pt-16 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
              <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide">
              GOVERNING BODY
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
              <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            </div>
          </div>
          <div className="overflow-hidden leading-none">
            <svg
              viewBox="0 0 1440 60"
              preserveAspectRatio="none"
              className="w-full h-12 md:h-16 block"
              fill="#FBFBEE"
            >
              <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
            </svg>
          </div>
        </div>

        {/* Intro Section */}
        <section className="bg-[#FBFBEE] pt-2 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Guiding Excellence in Dental Education &amp; Healthcare
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify">
                  The <span className="font-bold text-[#002309]">Governing Body of JKKN Dental College &amp; Hospital</span> is dedicated to upholding the highest standards of <span className="font-bold text-[#002309]">academic excellence, research innovation, and patient care</span>. Comprising distinguished professionals from academia, healthcare, and administration, the governing body plays a pivotal role in <span className="font-bold text-[#002309]">strategic planning, policy formulation, and institutional growth</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Role & Responsibilities */}
        <section className="bg-[#FBFBEE] pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-[#006837] rounded-full" />
                  <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] ml-2">
                    Role &amp; Responsibilities
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-5">
                  The Governing Body provides <span className="font-bold text-[#002309]">visionary leadership</span> and ensures the smooth functioning of the institution by:
                </p>
                <div className="space-y-3">
                  {[
                    { title: 'Setting Institutional Policies', desc: 'Defining governance frameworks to enhance academic and operational efficiency.' },
                    { title: 'Ensuring Quality Education', desc: 'Overseeing curriculum development, faculty recruitment, and student welfare initiatives.' },
                    { title: 'Advancing Research & Innovation', desc: 'Supporting scientific research, collaborations, and technological advancements.' },
                    { title: 'Upholding Ethical Standards', desc: 'Ensuring compliance with regulatory authorities, accreditation bodies, and ethical guidelines.' },
                    { title: 'Strengthening Community Engagement', desc: 'Promoting outreach programs, public health initiatives, and social responsibility.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                      <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-gray-700">
                        <span className="font-bold text-[#002309]">{item.title}</span> – {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Council Members Table */}
        <section className="bg-[#FBFBEE] pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-[#006837] rounded-full" />
                  <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] ml-2">
                    GOVERNING COUNCIL MEMBERS 2025-26
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-[#006837]">
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white whitespace-nowrap rounded-tl-lg">
                          S.NO
                        </th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white">
                          DESIGNATION
                        </th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white rounded-tr-lg">
                          NAME OF THE MEMBER
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { no: '1.', designation: 'CHAIRPERSON', name: 'SMT.N.SENDAMARAAI' },
                        { no: '2.', designation: 'MANAGING DIRECTOR', name: 'MR. S.OMMSHARRAVANA' },
                        { no: '3.', designation: 'MANAGEMENT MEMBER-TRUSTEE', name: 'MRS. O.ISVARYA LAKSHMI' },
                        { no: '4.', designation: 'MANAGEMENT MEMBER- CHIEF ADMINISTRATIVE OFFICER', name: 'MR.RAJENDIRAN' },
                        { no: '5.', designation: 'PRINCIPAL-MEMBER SECRETARY', name: 'DR.DHANASEKAR BALAKRISHNAN' },
                        { no: '6.', designation: 'VICE PRINCIPAL', name: 'DR. B SASIREKHA' },
                        { no: '7.', designation: 'FACULTY MEMBER-ACADEMICS', name: '1.DR.J.V.KARUNAKARAN, 2.DR.G.PRANAVADHYANI, 3.DR.C.DHINESH KUMAR' },
                        { no: '8.', designation: 'EXPERTISE IN HEALTH CARE AND PUBLIC HEALTH', name: '1.DR.NAVEEN RAJ' },
                        { no: '9.', designation: 'EXTERNAL EXPERT-EDUCATIONALIST', name: 'PROFESSOR.DR.H.THAMIZHCHELVAN' },
                      ].map((row, i) => (
                        <tr key={row.no} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FBFBEE]'}>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-700 border-b border-gray-100">
                            {row.no}
                          </td>
                          <td className="px-4 py-3 text-xs sm:text-sm font-semibold text-gray-600 border-b border-gray-100">
                            {row.designation}
                          </td>
                          <td className="px-4 py-3 text-xs sm:text-sm font-semibold text-gray-700 border-b border-gray-100">
                            {row.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Excellence */}
        <section className="bg-[#FBFBEE] pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-[#006837] rounded-full" />
                  <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] ml-2">
                    Commitment to Excellence
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify">
                  The <span className="font-bold text-[#002309]">Governing Body of JKKN Dental College &amp; Hospital</span> is committed to fostering a <span className="font-bold text-[#002309]">progressive learning environment, innovative research, and high-quality patient care</span>. By ensuring efficient governance, the institution continues to make a significant impact in <span className="font-bold text-[#002309]">dental education, healthcare, and community service</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
