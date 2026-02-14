import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Cog, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IQAC | Internal Quality Assurance Cell | JKKN Dental College',
  description: 'Internal Quality Assurance Cell (IQAC) at JKKN Dental College ensures continuous quality improvement in academics, research, administration, and infrastructure development.',
  keywords: 'IQAC, quality assurance, internal quality cell, academic quality, NAAC IQAC',
};

export default function IQAC() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12">
            INTERNAL QUALITY ASSURANCE CELL (IQAC)
          </h1>

          {/* About IQAC Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D7C66] mb-6">
            About IQAC
          </h2>

          <p className="text-base text-black mb-4 leading-relaxed">
            The <span className="font-bold">Internal Quality Assurance Cell (IQAC)</span> was established at JKKN Dental College & Hospital as per the guidelines of the National Assessment and Accreditation Council (NAAC) to develop a system for conscious, consistent, and catalytic improvement in the overall performance of the institution.
          </p>

          <p className="text-base text-black mb-12 leading-relaxed">
            IQAC ensures quality enhancement and sustenance through institutionalizing good practices in teaching-learning, research, administration, and infrastructure development. It acts as a nodal agency to coordinate quality-related activities and promotes a culture of excellence throughout the institution.
          </p>

          {/* Objectives of IQAC */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 inline-block" /> Objectives of IQAC
          </h3>

          <ul className="list-disc list-inside mb-12 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              To ensure timely, efficient, and progressive performance of academic, administrative, and financial tasks.
            </li>
            <li className="font-semibold">
              To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.
            </li>
            <li className="font-semibold">
              To develop a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of the institution.
            </li>
            <li className="font-semibold">
              To channelize all efforts and measures of the institution towards promoting quality education.
            </li>
            <li className="font-semibold">
              To facilitate the creation of a learner-centric environment conducive to quality education and faculty growth.
            </li>
            <li className="font-semibold">
              To arrange for feedback responses from students, parents, and other stakeholders on quality-related institutional processes.
            </li>
            <li className="font-semibold">
              To disseminate information on various quality parameters to all stakeholders.
            </li>
            <li className="font-semibold">
              To organize workshops, seminars, and awareness programs on quality-related themes and promotion of quality culture.
            </li>
          </ul>

          {/* Functions of IQAC */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <Cog className="w-6 h-6 mr-3 inline-block" /> Functions of IQAC
          </h3>

          <ul className="list-disc list-inside mb-12 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Development and application of quality benchmarks/parameters for various academic and administrative activities.
            </li>
            <li className="font-semibold">
              Facilitating the creation of a learner-centric environment for quality education.
            </li>
            <li className="font-semibold">
              Collection and analysis of feedback from all stakeholders on quality-related institutional processes.
            </li>
            <li className="font-semibold">
              Dissemination of information on quality parameters and best practices.
            </li>
            <li className="font-semibold">
              Organization of inter and intra institutional workshops, seminars on quality-related themes.
            </li>
            <li className="font-semibold">
              Documentation of various programs/activities leading to quality improvement.
            </li>
            <li className="font-semibold">
              Preparation of Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC.
            </li>
            <li className="font-semibold">
              Development and maintenance of institutional database for quality-related activities.
            </li>
          </ul>

          {/* IQAC Composition */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <span className="text-2xl mr-3">👥</span> IQAC Composition
          </h3>

          <p className="text-base text-black mb-6 leading-relaxed">
            The IQAC comprises of the following members as per NAAC guidelines:
          </p>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Chairperson - Principal/Head of the Institution
            </li>
            <li className="font-semibold">
              Senior faculty members from various departments
            </li>
            <li className="font-semibold">
              IQAC Coordinator
            </li>
            <li className="font-semibold">
              Management Representative
            </li>
            <li className="font-semibold">
              External experts from academia and industry
            </li>
            <li className="font-semibold">
              Stakeholder representatives (Alumni, Students)
            </li>
          </ul>

          {/* View IQAC Document */}
          <div className="mb-12">
            <a
              href="/pdf/IQAC.pdf"
              className="inline-block bg-[#0D5E2E] hover:bg-[#0A4A23] text-white font-bold py-3 px-8 rounded transition-all duration-300 text-sm uppercase"
            >
              VIEW IQAC DOCUMENT
            </a>
          </div>

          {/* IQAC Activities */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <span className="text-2xl mr-3">📋</span> Key Activities
          </h3>

          <ul className="list-disc list-inside mb-12 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Conducting regular IQAC meetings and maintaining minutes
            </li>
            <li className="font-semibold">
              Preparation and submission of Annual Quality Assurance Report (AQAR)
            </li>
            <li className="font-semibold">
              Organizing faculty development programs and quality enhancement initiatives
            </li>
            <li className="font-semibold">
              Collecting and analyzing feedback from students, faculty, and stakeholders
            </li>
            <li className="font-semibold">
              Monitoring academic and administrative quality parameters
            </li>
            <li className="font-semibold">
              Coordinating with NAAC for accreditation and quality assurance processes
            </li>
            <li className="font-semibold">
              Promoting research, innovation, and best practices in dental education
            </li>
            <li className="font-semibold">
              Maintaining institutional database and documentation for quality initiatives
            </li>
          </ul>

          {/* Quality Initiatives */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-4 flex items-center">
            <span className="text-2xl mr-3">🌟</span> Quality Initiatives
          </h3>

          <p className="text-base text-black mb-12 leading-relaxed">
            JKKN Dental College & Hospital, through IQAC, continuously strives for excellence in dental education by implementing innovative teaching methodologies, promoting research culture, ensuring infrastructure development, and fostering industry-academia collaboration. Our commitment to quality assurance reflects in our NAAC accreditation and continuous improvement in NIRF rankings.
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
