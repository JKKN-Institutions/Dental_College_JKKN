import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Research & Development (R&D) Cell | JKKN Dental College',
  description: 'Promoting innovation, interdisciplinary research, and scientific advancement in dentistry, biomedical sciences, and healthcare excellence.',
  keywords: 'R&D cell, research development, dental research, scientific innovation, biomedical research, research funding, JKKN Dental College',
  openGraph: {
    title: 'Research & Development (R&D) Cell | JKKN Dental College',
    description: 'Promoting innovation, interdisciplinary research, and scientific advancement in dentistry, biomedical sciences, and healthcare excellence.',
    url: 'https://dental.jkkn.ac.in/research/research-development-rd-cell/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const objectives = [
  'Encourage Research & Innovation – Foster a research-driven academic environment by facilitating high-quality scientific studies.',
  'Support Faculty & Student Research – Provide necessary guidance, funding assistance, and access to advanced research facilities.',
  'Enhance Industry & Academic Collaborations – Strengthen partnerships with universities, research institutions, and healthcare industries.',
  'Promote Publications & Patents – Encourage the publication of research in reputed journals and the development of innovative patents.',
  'Facilitate Ethical Research Practices – Ensure research adheres to national and international ethical guidelines.',
];

const pdfLinks = [
  {
    href: '/pdf/RD-Reimbursement-Policy.pdf',
    label: 'R&D Reimbursement Policy',
  },
  {
    href: '/pdf/RD-Solution-Oriented-Research-and-Entrepreneurship-Policy-BDS.pdf',
    label: 'Solution-Oriented Research and Entrepreneurship Policy BDS',
  },
  {
    href: '/pdf/RD-Solution-Oriented-Research-and-Entrepreneurship-Policy-MDS.pdf',
    label: 'Solution-Oriented Research and Entrepreneurship Policy MDS',
  },
  {
    href: '/pdf/RD-UGC-Guidelines.pdf',
    label: 'UGC Guidelines',
  },
];

export default function ResearchDevelopmentRDCell() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Research & Development (R&D) Cell | JKKN Dental College',
    description: 'Promoting innovation, interdisciplinary research, and scientific advancement in dentistry, biomedical sciences, and healthcare excellence.',
    url: 'https://dental.jkkn.ac.in/research/research-development-rd-cell/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'R&D Cell', url: 'https://dental.jkkn.ac.in/research/research-development-rd-cell/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base md:text-lg font-semibold text-[#7cb983] mb-2 uppercase tracking-widest">
            JKKN Dental College &amp; Hospital
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            RESEARCH &amp; DEVELOPMENT (R&amp;D) CELL
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-5 rounded-full" />
          <p className="text-white/80 text-base md:text-lg font-semibold mb-5">
            Fostering Innovation &amp; Excellence in Research
          </p>
          <p className="hero-description text-white/80 text-base leading-relaxed max-w-3xl">
            At JKKN Dental College &amp; Hospital, research is the driving force behind academic excellence and scientific advancement. Our Research and Development (R&amp;D) Cell is committed to promoting a culture of innovation, interdisciplinary collaboration, and impactful research in dentistry, biomedical sciences, and healthcare. By supporting faculty and student-led research initiatives, the R&amp;D Cell plays a vital role in advancing knowledge, improving patient care, and contributing to global scientific progress.
          </p>
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Objectives */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Objectives of the R&amp;D Cell
              </h3>
            </div>
            <ul className="px-6 py-5 space-y-4">
              {objectives.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#006837] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Initiatives & Facilities */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6">
              Key Initiatives &amp; Facilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pdfLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 bg-white hover:bg-[#006837] border-2 border-[#006837] text-[#006837] hover:text-white font-bold py-4 px-5 rounded-xl transition-all duration-200 shadow-sm group ${i === 3 ? 'sm:col-span-2 sm:max-w-sm' : ''}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#006837] group-hover:bg-white flex items-center justify-center transition-colors duration-200">
                    <svg className="w-4 h-4 text-white group-hover:text-[#006837] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm leading-snug">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
