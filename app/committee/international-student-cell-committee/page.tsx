import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'International Student Cell Committee | JKKN Dental College',
  description: 'Supporting NRI and international students with admission, orientation, and academic guidance. Globally acclaimed dental education.',
  keywords: 'international student cell, NRI admissions, foreign students, international education, student support, JKKN dental college',
};

export default function InternationalStudentCellCommittee() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            INTERNATIONAL STUDENT CELL COMMITTEE
          </h1>

          {/* Introduction */}
          <p className="text-base text-black mb-6 leading-relaxed text-justify">
            J.K.K. Nattaraja Dental College and the hospital provide globally acclaimed services with good hospitality to NRI candidates. The international student cell is active to facilitate international candidates. It considers and coordinates well with every futuristic prospect of international students. On fulfilling the needed requirement, the foreign and NRI candidates are admitted into the institution based upon eligibility framed by UGC and DCI.
          </p>

          {/* Objectives */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            OBJECTIVES:
          </h2>

          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            1. The international student cell aims to take care of future international scholars during their stay, from the time of admission till the completion of the study.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            2. The main intent of the international student cell is to promote the cordial student-student;student-teacher relationships.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-6 leading-relaxed">
            3. To offer help and support for establishing good rapport in various academic and extension activities conducted by the institution.
          </p>

          {/* Structure */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            STRUCTURE
          </h2>

          <p className="text-base text-black mb-6 leading-relaxed text-justify">
            The international student cell comprises of faculty advisor with student members The head of the institution confers the international student cell. It consist of president, vice president, and student members nominated by faculties.
          </p>

          {/* Activities */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            ACTIVITIES
          </h2>

          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            1. To help and offer assistance for admission based upon the Guidelines followed by our institution
          </p>
          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            2. To guide the orientation programs so that the first-year students become familiar with the programs offered, policies of the institution, fees structure.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-3 leading-relaxed">
            3. To monitor the academic performances of the students and guide them with a mentor for progression and improvement in each internal examination.
          </p>
          <p className="text-base text-gray-700 font-semibold mb-6 leading-relaxed">
            4. Conducting and involving the international students in various events thereby creating opportunities to mingle with each other.
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
