import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Academic Council | JKKN Dental College',
  description: 'Learn about the Academic Council at JKKN Dental College, dedicated to shaping curriculum, promoting research, and enhancing dental education.',
  keywords: 'Academic Council, JKKN Dental College, dental curriculum, dental education, faculty development, DCI guidelines, teaching methodology',
  openGraph: {
    title: 'Academic Council | JKKN Dental College',
    description: 'Learn about the Academic Council at JKKN Dental College, dedicated to shaping curriculum, promoting research, and enhancing dental education.',
    url: 'https://dental.jkkn.ac.in/administration/academic-council/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/administration/academic-council/');
const speakableSchema = generateSpeakableWebPageSchema({
  title: 'Academic Council | JKKN Dental College',
  description: 'Learn about the Academic Council at JKKN Dental College, dedicated to shaping curriculum, promoting research, and enhancing dental education.',
  url: 'https://dental.jkkn.ac.in/administration/academic-council/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function AcademicCouncil() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            ACADEMIC COUNCIL
          </h1>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-base leading-relaxed text-black">
              The Academic Council plays a pivotal role in shaping and enhancing the academic framework of our dental college. Committed to excellence in education, the committee ensures that the curriculum remains dynamic, student-centred, and aligned with contemporary advancements in dental sciences.
            </p>
          </div>

          {/* Objectives */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            Objectives:
          </h2>
          <div className="mb-8 space-y-2">
            <p className="text-base text-black">
              • To develop and periodically revise the curriculum in accordance with the guidelines of regulatory bodies such as the Dental Council of India (DCI).
            </p>
            <p className="text-base text-black">
              • To integrate innovative teaching methodologies, including digital learning and hands on training, for a comprehensive learning experience.
            </p>
            <p className="text-base text-black">
              • To promote interdisciplinary and evidence-based education, preparing students for modern dental practice.
            </p>
            <p className="text-base text-black">
              • To encourage research, critical thinking, and problem-solving skills among students.
            </p>
            <p className="text-base text-black">
              • To incorporate community-based learning initiatives to enhance social responsibility and patient-centred care.
            </p>
          </div>

          {/* Functions */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            Functions:
          </h2>
          <div className="mb-8 space-y-2">
            <p className="text-base text-black">
              • Regular assessment and updating of course content to maintain relevance with industry and academic advancements.
            </p>
            <p className="text-base text-black">
              • Organizing faculty development programs and workshops to improve teaching effectiveness.
            </p>
            <p className="text-base text-black">
              • Facilitating collaborations with healthcare institutions and research organizations for academic enrichment.
            </p>
            <p className="text-base text-black">
              • Monitoring and evaluating student feedback to enhance the teaching- learning experience.
            </p>
            <p className="text-base text-black">
              • Ensuring adherence to accreditation and quality assurance standards.
            </p>
          </div>

          {/* Concluding Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-black">
              The Academic Council remains dedicated to fostering an engaging and progressive academic environment that equips future dental professionals with the knowledge, skills, and ethical values necessary for excellence in patient care.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    S.No
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    Faculty Name
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    Designation
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    Role
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    Contact Number
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-600">
                    E-Mail Id
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    1.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. Dhanasekar B
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Principal
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Chairperson
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9742444184
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    dentalprincipl@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    2.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. M. Rekha
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member Secretary
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9965754937
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodoralsurgery@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    3.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. J. V. Karunakaran
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9840215137
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    jvkarunak58@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    4.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. Ramya
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9003795490
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodorthodontics@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    5.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. T.Dineshkumar
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    8610365007
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodoralpathology@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    6.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. C. DhineshKumar
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9443236200
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodprosthodontics@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    7.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. P.K. SasiKumar
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9865289991
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodperiodontics@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    8.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. B. Sasirekha
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9500606824
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodoralmedicine@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    9.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. Nandhini
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9677750616
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodpedodontics@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    10.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr.Nazer
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Head Of The Department
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9443552172
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    nazer@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    11.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr.Dhanabalan
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Controller Of Examinations
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9488826921
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    dhanabalan.s@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    12.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. Shivakumar
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Principal - JKKN Engineering College
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Expert/Academician
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9842710606
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    principaljkncet@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    13.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Mr. Senthil
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Principal -JKKN Pharmacy College
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Expert/Academician
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9842650602
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    pharmacyprincipal@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    14.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Mrs. Gowri B
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Vice Principal – Sre Sakthimaeyil College Of Nursing
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Expert/Academician
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9894302206
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    hodmedicalsurgical@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    15.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Poonguzhali
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Vice Principal –JKKN College Of Arts And Science
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Expert/Academician
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9500882792
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    viceprincipalcas@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    16.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr Vinod Thangasamy
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Professor
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9791642614
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    vinodthangaswamy@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    17.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr.Sai Sadan
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Professor
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9842796493
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    saisadan.d@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    18.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr.Jayaprakash
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Professor
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9790235535
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    jayaprakash@jkkn.ac.in
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">
                    19.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Dr. Vignesh Kumar
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Professor
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    Member
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    9842325551
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-600">
                    drvigneshkumar@jkkn.ac.in
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
    </>
  );
}
