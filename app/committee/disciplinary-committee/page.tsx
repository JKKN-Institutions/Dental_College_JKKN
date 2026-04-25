import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disciplinary Committee | JKKN Dental College',
  description: 'Maintaining discipline and enforcing codes of conduct to create a safe and respectful learning environment at JKKN Dental College.',
  keywords: 'disciplinary committee, student discipline, code of conduct, institutional rules, student accountability, JKKN dental college',
  openGraph: {
    title: 'Disciplinary Committee | JKKN Dental College',
    description: 'Maintaining discipline and enforcing codes of conduct to create a safe and respectful learning environment at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/committee/disciplinary-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function DisciplinaryCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/disciplinary-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Disciplinary Committee - JKKN Dental College',
    description: 'Maintaining discipline and enforcing codes of conduct to create a safe and respectful learning environment at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/committee/disciplinary-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Disciplinary Committee | JKKN Dental College',
    description: 'Maintaining discipline and enforcing codes of conduct to create a safe and respectful learning environment at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/committee/disciplinary-committee/',
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
            DISCIPLINARY COMMITTEE
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983] mb-10">
            <p className="hero-description text-gray-700 text-base leading-relaxed text-justify">
              The Disciplinary Committee is a crucial body within educational institutions tasked with maintaining discipline and enforcing codes of conduct among students and staff. Comprising faculty members, administrators, and sometimes student representatives, the committee handles disciplinary issues and violations of institutional rules. It conducts impartial investigations, provides fair hearings to individuals involved, and imposes appropriate disciplinary actions when necessary. The committee aims to create a safe and respectful learning environment, instilling a sense of responsibility and accountability among the student community. By upholding disciplinary standards and promoting ethical behavior, the committee fosters a conducive atmosphere for academic growth, character development, and overall well-being within the institution.
            </p>
          </div>

          {/* Committee Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#006837]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#7cb983] uppercase tracking-wide mb-1">Chairman</p>
                <p className="text-[#002309] font-bold text-sm">Dr. Vignesh Kumar</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#006837]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#7cb983] uppercase tracking-wide mb-1">Co-Chairman</p>
                <p className="text-[#002309] font-bold text-sm">Mr.Rozario Cyril</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#006837]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#7cb983] uppercase tracking-wide mb-1">Executive members</p>
                <p className="text-[#002309] font-bold text-sm">Dr.Dhivya, Dr.Arunima</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
