import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Research & Development (R&D) Cell | JKKN Dental College',
  description: 'Promoting innovation, interdisciplinary research, and scientific advancement in dentistry, biomedical sciences, and healthcare excellence.',
  keywords: 'R&D cell, research development, dental research, scientific innovation, biomedical research, research funding, JKKN Dental College'
};

export default function ResearchDevelopmentRDCell() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            RESEARCH & DEVELOPMENT (R&D) CELL
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            JKKN Dental College & Hospital
          </h2>

          {/* Second Subtitle */}
          <p className="text-base md:text-lg font-semibold text-black mb-6">
            Fostering Innovation & Excellence in Research
          </p>

          {/* Introduction */}
          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            At JKKN Dental College & Hospital, research is the driving force behind academic excellence and scientific advancement. Our Research and Development (R&D) Cell is committed to promoting a culture of innovation, interdisciplinary collaboration, and impactful research in dentistry, biomedical sciences, and healthcare. By supporting faculty and student-led research initiatives, the R&D Cell plays a vital role in advancing knowledge, improving patient care, and contributing to global scientific progress.
          </p>

          {/* Objectives Section */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            Objectives of the R&D Cell
          </h3>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700">
            <li className="font-semibold">
              Encourage Research & Innovation – Foster a research-driven academic environment by facilitating high-quality scientific studies.
            </li>
            <li className="font-semibold">
              Support Faculty & Student Research – Provide necessary guidance, funding assistance, and access to advanced research facilities.
            </li>
            <li className="font-semibold">
              Enhance Industry & Academic Collaborations – Strengthen partnerships with universities, research institutions, and healthcare industries.
            </li>
            <li className="font-semibold">
              Promote Publications & Patents – Encourage the publication of research in reputed journals and the development of innovative patents.
            </li>
            <li className="font-semibold">
              Facilitate Ethical Research Practices – Ensure research adheres to national and international ethical guidelines.
            </li>
          </ul>

          {/* Key Initiatives & Facilities */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-6">
            Key Initiatives & Facilities
          </h3>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <a
              href="/pdf/RD-Reimbursement-Policy.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              R&D Reimbursement Policy
            </a>
            <a
              href="/pdf/RD-Solution-Oriented-Research-and-Entrepreneurship-Policy-BDS.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              Solution-Oriented Research and Entrepreneurship Policy BDS
            </a>
            <a
              href="/pdf/RD-Solution-Oriented-Research-and-Entrepreneurship-Policy-MDS.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              Solution-Oriented Research and Entrepreneurship Policy MDS
            </a>
          </div>

          <div className="mb-12">
            <a
              href="/pdf/RD-UGC-Guidelines.pdf"
              className="block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-6 rounded transition-all duration-300 text-sm text-center"
            >
              UGC Guidelines
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
