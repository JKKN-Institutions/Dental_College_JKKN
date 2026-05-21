import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Physical Education & Extracurricular Activities | JKKN',
  description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
  keywords: 'physical education committee, sports activities, extracurricular activities, student fitness, holistic development, JKKN dental college',
  openGraph: {
    title: 'Physical Education & Extracurricular Activities | JKKN',
    description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
    url: 'https://dental.jkkn.ac.in/committee/physical-education-and-extra-curricular-activities-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PhysicalEducationExtraCurricularCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/physical-education-and-extra-curricular-activities-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Physical Education Committee | JKKN Dental',
    description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
    url: 'https://dental.jkkn.ac.in/committee/physical-education-and-extra-curricular-activities-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Physical Education & Extracurricular Activities | JKKN',
    description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
    url: 'https://dental.jkkn.ac.in/committee/physical-education-and-extra-curricular-activities-committee/',
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            PHYSICAL EDUCATION &amp; EXTRA CURRUCULAR ACTIVITIES COMMITTEE
          </h1>
        </div>
      </section>

      {/* Committee Members */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'I . Convener – Principal.Prof.Dr.Dhanasekar B',
              '2.Mr.Rozario Cyril- (Chair)',
              '3.Dr.Vijay Thiyagarajan- (Member Secretary)',
              '4.Dr.AnuPriya',
              '5.Prof.Dr.B.Sasi Rekha',
              '6.Dr.Sasi Kumar',
            ].map((member) => (
              <div key={member} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-bold text-sm leading-relaxed">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
