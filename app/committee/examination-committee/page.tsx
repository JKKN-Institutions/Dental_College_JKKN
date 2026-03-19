import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Examination Committee | JKKN Dental College',
  description: 'Overseeing fair and smooth conduct of examinations. Formulating policies, designing question papers, and ensuring credible assessments.',
  keywords: 'examination committee, exam policies, question papers, fair examination, result evaluation, JKKN dental college, academic assessment',
  openGraph: {
    title: 'Examination Committee | JKKN Dental College',
    description: 'Overseeing fair and smooth conduct of examinations. Formulating policies, designing question papers, and ensuring credible assessments.',
    url: 'https://dental.jkkn.ac.in/committee/examination-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function ExaminationCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/examination-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Examination Committee - JKKN Dental College',
    description: 'Overseeing fair and smooth conduct of examinations. Formulating policies, designing question papers, and ensuring credible assessments.',
    url: 'https://dental.jkkn.ac.in/committee/examination-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Examination Committee | JKKN Dental College',
    description: 'Overseeing fair and smooth conduct of examinations. Formulating policies, designing question papers, and ensuring credible assessments.',
    url: 'https://dental.jkkn.ac.in/committee/examination-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBFBEE] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D5E2E] mb-8">
            EXAMINATION COMMITTEE
          </h1>

          {/* Description Paragraph */}
          <p className="text-base text-gray-700 mb-8 leading-relaxed text-justify font-semibold">
            The Examination Committee is a vital body within educational institutions responsible for overseeing all aspects related to examinations. Comprising faculty members, administrators, and sometimes external experts, the committee ensures the smooth and fair conduct of examinations. It formulates examination policies, schedules, and guidelines, adhering to academic regulations and standards. The committee designs question papers, coordinates examination logistics, and arranges invigilation teams. After the exams, it oversees the evaluation process, results compilation, and grade allocation. Additionally, the Examination Committee handles student grievances related to examinations and works diligently to uphold the integrity and credibility of the examination system, contributing to a robust and reliable assessment process.
          </p>

          {/* Chairman */}
          <p className="text-base text-gray-700 font-semibold mb-12 leading-relaxed">
            Chairman – Dr.Dhanabal
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
