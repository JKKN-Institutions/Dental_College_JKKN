import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Physical Education & Extracurricular Activities | JKKN',
  description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
  keywords: 'physical education committee, sports activities, extracurricular activities, student fitness, holistic development, JKKN dental college',
  openGraph: {
    title: 'Physical Education & Extracurricular Activities | JKKN',
    description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
    url: 'https://dental.jkkn.ac.in/committee/physical-education-&-extra-currucular-activities-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PhysicalEducationExtraCurricularCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/physical-education-&-extra-currucular-activities-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Physical Education & Extracurricular Activities Committee - JKKN Dental College',
    description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
    url: 'https://dental.jkkn.ac.in/committee/physical-education-&-extra-currucular-activities-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Physical Education & Extracurricular Activities | JKKN',
    description: 'Promoting sports, physical fitness, and extracurricular activities. View committee members fostering holistic student development.',
    url: 'https://dental.jkkn.ac.in/committee/physical-education-&-extra-currucular-activities-committee/',
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
            PHYSICAL EDUCATION & EXTRA CURRUCULAR ACTIVITIES COMMITTEE
          </h1>

          {/* Committee Members List */}
          <p className="text-base text-black mb-3 leading-relaxed">
            I . Convener – Principal.Prof.Dr.Dhanasekar B
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            2.Mr.Rozario Cyril- (Chair)
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            3.Dr.Vijay Thiyagarajan- (Member Secretary)
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            4.Dr.AnuPriya
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            5.Prof.Dr.B.Sasi Rekha
          </p>
          <p className="text-base text-black mb-12 leading-relaxed">
            6.Dr.Sasi Kumar
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
