import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

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

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            EXAMINATION COMMITTEE
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983] mb-10">
            <p className="hero-description text-gray-700 text-base leading-relaxed text-justify font-semibold">
              The Examination Committee is a vital body within educational institutions responsible for overseeing all aspects related to learning assessments. Comprising senior learner members, administrators, and sometimes external experts, the committee ensures the smooth and fair conduct of learning assessments. It formulates learning assessment policies, schedules, and guidelines, adhering to academic regulations and standards. The committee designs question papers, coordinates learning assessment logistics, and arranges invigilation teams. After the learning assessments, it oversees the evaluation process, results compilation, and grade allocation. Additionally, the Examination Committee handles learner grievances related to learning assessments and works diligently to uphold the integrity and credibility of the learning assessment system, contributing to a robust and reliable assessment process.
            </p>
          </div>

          {/* Chairman */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4 w-full md:w-96">
            <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-[#006837]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#7cb983] uppercase tracking-wide mb-1">Chairman</p>
              <p className="text-[#002309] font-bold text-sm">Dr.Dhanabal</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
