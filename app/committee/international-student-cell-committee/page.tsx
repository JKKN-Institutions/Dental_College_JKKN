import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'International Learner Cell Committee | JKKN Dental College',
  description: 'Supporting NRI and international learners with admission, orientation, and academic guidance. Globally acclaimed dental education.',
  keywords: 'international learner cell, NRI admissions, foreign learners, international education, learner support, JKKN dental college',
  openGraph: {
    title: 'International Learner Cell Committee | JKKN Dental College',
    description: 'Supporting NRI and international learners with admission, orientation, and academic guidance. Globally acclaimed dental education.',
    url: 'https://dental.jkkn.ac.in/committee/international-student-cell-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function InternationalStudentCellCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/international-student-cell-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'International Learner Cell Committee - JKKN Dental College',
    description: 'Supporting NRI and international learners with admission, orientation, and academic guidance. Globally acclaimed dental education.',
    url: 'https://dental.jkkn.ac.in/committee/international-student-cell-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'International Learner Cell Committee | JKKN Dental College',
    description: 'Supporting NRI and international learners with admission, orientation, and academic guidance. Globally acclaimed dental education.',
    url: 'https://dental.jkkn.ac.in/committee/international-student-cell-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            INTERNATIONAL LEARNER CELL COMMITTEE
          </h1>

          {/* Introduction */}
          <p className="text-base text-black mb-6 leading-relaxed text-justify">
            J.K.K. Nattaraja Dental College and the hospital provide globally acclaimed services with good hospitality to NRI candidates. The international learner cell is active to facilitate international candidates. It considers and coordinates well with every futuristic prospect of international learners. On fulfilling the needed requirement, the foreign and NRI candidates are admitted into the institution based upon eligibility framed by UGC and DCI.
          </p>

          {/* Objectives */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            OBJECTIVES:
          </h2>

          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            1. The international learner cell aims to take care of future international scholars during their stay, from the time of admission till the completion of the study.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            2. The main intent of the international learner cell is to promote the cordial learner-learner;learner-senior learner relationships.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-6 leading-relaxed">
            3. To offer help and support for establishing good rapport in various academic and extension activities conducted by the institution.
          </p>

          {/* Structure */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            STRUCTURE
          </h2>

          <p className="text-base text-black mb-6 leading-relaxed text-justify">
            The international learner cell comprises of senior learner advisor with learner members The head of the institution confers the international learner cell. It consist of president, vice president, and learner members nominated by senior learners.
          </p>

          {/* Activities */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            ACTIVITIES
          </h2>

          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            1. To help and offer assistance for admission based upon the Guidelines followed by our institution
          </p>
          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            2. To guide the orientation programs so that the first-year learners become familiar with the programs offered, policies of the institution, fees structure.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            3. To monitor the academic performances of the learners and guide them with a mentor for progression and improvement in each internal learning assessment.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-6 leading-relaxed">
            4. Conducting and involving the international learners in various events thereby creating opportunities to mingle with each other.
          </p>

          {/* Convener */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            CONVENER
          </h2>

          <p className="text-base text-black mb-6 leading-relaxed">
            Dr.S.Elanchezhiyan, Principal
          </p>

          {/* Committee Members */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            COMMITTEE MEMBERS
          </h2>

          <p className="text-base text-black mb-3 leading-relaxed">
            Dr.B.Sasirekha, MDS
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Dr.S.Premkumar, MDS
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Dr.D.Sai Sadan, MDS
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Dr.C.Dhinesh Kumar, MDS
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            Dr.Nallasivam, MDS
          </p>
          <p className="text-base text-black mb-12 leading-relaxed">
            Dr.Praveena, MDS
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
