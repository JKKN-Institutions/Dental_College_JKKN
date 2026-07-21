import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/academic-council/' },
  title: 'Academic Council | JKKN Dental College',
  description: 'Learn about the Academic Council at JKKN Dental College, dedicated to shaping curriculum, promoting research, and enhancing dental education.',
  keywords: 'Academic Council, JKKN Dental College, dental curriculum, dental education, faculty development, DCI guidelines, teaching methodology',
  openGraph: {
    title: 'Academic Council | JKKN Dental College',
    description: 'Learn about the Academic Council at JKKN Dental College, dedicated to shaping curriculum, promoting research, and enhancing dental education.',
    url: 'https://dental.jkkn.ac.in/academic-council/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/academic-council/');
const speakableSchema = generateSpeakableWebPageSchema({
  title: 'Academic Council | JKKN Dental College',
  description: 'Learn about the Academic Council at JKKN Dental College, dedicated to shaping curriculum, promoting research, and enhancing dental education.',
  url: 'https://dental.jkkn.ac.in/academic-council/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function AcademicCouncil() {
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
              ACADEMIC COUNCIL
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

        {/* Introduction */}
        <section className="bg-[#FBFBEE] pt-2 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  The Academic Council plays a pivotal role in shaping and enhancing the academic framework of our dental college. Committed to excellence in education, the committee ensures that the learning framework remains dynamic, learner-centred, and aligned with contemporary advancements in dental sciences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives & Functions */}
        <section className="bg-[#FBFBEE] pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

            {/* Objectives */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-8 bg-[#006837] rounded-full" />
                  <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
                  <h2 className="text-lg md:text-xl font-bold text-[#006837] ml-2">
                    Objectives
                  </h2>
                </div>
                <div className="space-y-3">
                  {[
                    'To develop and periodically revise the learning framework in accordance with the guidelines of regulatory bodies such as the Dental Council of India (DCI).',
                    'To integrate innovative teaching methodologies, including digital learning and hands on training, for a comprehensive learning experience.',
                    'To promote interdisciplinary and evidence-based education, preparing learners for modern dental practice.',
                    'To encourage research, critical thinking, and problem-solving skills among learners.',
                    'To incorporate community-based learning initiatives to enhance social responsibility and patient-centred care.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                      <span className="text-[#006837] font-bold flex-shrink-0 mt-0.5">•</span>
                      <p className="text-sm sm:text-base text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Functions */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-8 bg-[#006837] rounded-full" />
                  <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
                  <h2 className="text-lg md:text-xl font-bold text-[#006837] ml-2">
                    Functions
                  </h2>
                </div>
                <div className="space-y-3">
                  {[
                    'Regular assessment and updating of course content to maintain relevance with industry and academic advancements.',
                    'Organizing senior learner development programs and workshops to improve teaching effectiveness.',
                    'Facilitating collaborations with healthcare institutions and research organizations for academic enrichment.',
                    'Monitoring and evaluating learner feedback to enhance the teaching- learning experience.',
                    'Ensuring adherence to accreditation and quality assurance standards.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                      <span className="text-[#006837] font-bold flex-shrink-0 mt-0.5">•</span>
                      <p className="text-sm sm:text-base text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Concluding Statement */}
        <section className="bg-[#FBFBEE] pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  The Academic Council remains dedicated to fostering an engaging and progressive academic environment that equips future dental professionals with the knowledge, skills, and ethical values necessary for excellence in patient care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Members Table */}
        <section className="bg-[#FBFBEE] pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-[#006837] rounded-full" />
                  <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] ml-2">
                    Council Members
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-[#006837]">
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white whitespace-nowrap">S.No</th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white">Senior Learner Name</th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white">Designation</th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white">Role</th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white whitespace-nowrap">Contact Number</th>
                        <th className="px-4 py-3 text-left text-xs sm:text-sm font-bold text-white">E-Mail Id</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { no: '1.', name: 'Dr. Dhanasekar B', designation: 'Principal', role: 'Chairperson', contact: '9742444184', email: 'dentalprincipl@jkkn.ac.in' },
                        { no: '2.', name: 'Dr. M. Rekha', designation: 'Head Of The Department', role: 'Member Secretary', contact: '9965754937', email: 'hodoralsurgery@jkkn.ac.in' },
                        { no: '3.', name: 'Dr. J. V. Karunakaran', designation: 'Head Of The Department', role: 'Member', contact: '9840215137', email: 'jvkarunak58@jkkn.ac.in' },
                        { no: '4.', name: 'Dr. Ramya', designation: 'Head Of The Department', role: 'Member', contact: '9003795490', email: 'hodorthodontics@jkkn.ac.in' },
                        { no: '5.', name: 'Dr. T.Dineshkumar', designation: 'Head Of The Department', role: 'Member', contact: '8610365007', email: 'hodoralpathology@jkkn.ac.in' },
                        { no: '6.', name: 'Dr. C. DhineshKumar', designation: 'Head Of The Department', role: 'Member', contact: '9443236200', email: 'hodprosthodontics@jkkn.ac.in' },
                        { no: '7.', name: 'Dr. P.K. SasiKumar', designation: 'Head Of The Department', role: 'Member', contact: '9865289991', email: 'hodperiodontics@jkkn.ac.in' },
                        { no: '8.', name: 'Dr. B. Sasirekha', designation: 'Head Of The Department', role: 'Member', contact: '9500606824', email: 'hodoralmedicine@jkkn.ac.in' },
                        { no: '9.', name: 'Dr. Nandhini', designation: 'Head Of The Department', role: 'Member', contact: '9677750616', email: 'hodpedodontics@jkkn.ac.in' },
                        { no: '10.', name: 'Dr.Nazer', designation: 'Head Of The Department', role: 'Member', contact: '9443552172', email: 'nazer@jkkn.ac.in' },
                        { no: '11.', name: 'Dr.Dhanabalan', designation: 'Controller Of Examinations', role: 'Member', contact: '9488826921', email: 'dhanabalan.s@jkkn.ac.in' },
                        { no: '12.', name: 'Dr. Shivakumar', designation: 'Principal - JKKN Engineering College', role: 'Expert/Academician', contact: '9842710606', email: 'principaljkncet@jkkn.ac.in' },
                        { no: '13.', name: 'Mr. Senthil', designation: 'Principal -JKKN Pharmacy College', role: 'Expert/Academician', contact: '9842650602', email: 'pharmacyprincipal@jkkn.ac.in' },
                        { no: '14.', name: 'Mrs. Gowri B', designation: 'Vice Principal – Sre Sakthimaeyil College Of Nursing', role: 'Expert/Academician', contact: '9894302206', email: 'hodmedicalsurgical@jkkn.ac.in' },
                        { no: '15.', name: 'Poonguzhali', designation: 'Vice Principal –JKKN College Of Arts And Science', role: 'Expert/Academician', contact: '9500882792', email: 'viceprincipalcas@jkkn.ac.in' },
                        { no: '16.', name: 'Dr Vinod Thangasamy', designation: 'Professor', role: 'Member', contact: '9791642614', email: 'vinodthangaswamy@jkkn.ac.in' },
                        { no: '17.', name: 'Dr.Sai Sadan', designation: 'Professor', role: 'Member', contact: '9842796493', email: 'saisadan.d@jkkn.ac.in' },
                        { no: '18.', name: 'Dr.Jayaprakash', designation: 'Professor', role: 'Member', contact: '9790235535', email: 'jayaprakash@jkkn.ac.in' },
                        { no: '19.', name: 'Dr. Vignesh Kumar', designation: 'Professor', role: 'Member', contact: '9842325551', email: 'drvigneshkumar@jkkn.ac.in' },
                      ].map((row, i) => (
                        <tr key={row.no} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FBFBEE]'}>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-700 border-b border-gray-100">{row.no}</td>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-600 border-b border-gray-100">{row.name}</td>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-600 border-b border-gray-100">{row.designation}</td>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-600 border-b border-gray-100">{row.role}</td>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-600 border-b border-gray-100">{row.contact}</td>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-600 border-b border-gray-100">{row.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
