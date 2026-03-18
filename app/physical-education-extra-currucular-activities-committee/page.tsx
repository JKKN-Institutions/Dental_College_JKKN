import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Physical Education & Extra Curricular Activities Committee | JKKN Dental College',
  description: 'Fostering sports, fitness, and extracurricular excellence. View committee members promoting holistic student development beyond academics.',
  keywords: 'physical education, sports committee, extracurricular activities, student fitness, sports programs, JKKN dental college, athletics',
  openGraph: {
    title: 'Physical Education & Extra Curricular Activities Committee | JKKN Dental College',
    description: 'Fostering sports, fitness, and extracurricular excellence. View committee members promoting holistic student development beyond academics.',
    url: 'https://dental.jkkn.ac.in/physical-education-extra-currucular-activities-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PhysicalEducationExtraCurrucularActivitiesCommittee() {
  const webPageSchema = generateWebPageSchema({
    title: 'Physical Education & Extra Curricular Activities Committee | JKKN Dental College',
    description: 'Fostering sports, fitness, and extracurricular excellence. View committee members promoting holistic student development beyond academics.',
    url: 'https://dental.jkkn.ac.in/physical-education-extra-currucular-activities-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Physical Education & Extra Curricular Activities Committee | JKKN Dental College',
    description: 'Fostering sports, fitness, and extracurricular excellence. View committee members promoting holistic student development beyond academics.',
    url: 'https://dental.jkkn.ac.in/physical-education-extra-currucular-activities-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Physical Education & Extra Curricular Activities Committee', url: 'https://dental.jkkn.ac.in/physical-education-extra-currucular-activities-committee/' },
      ]} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            PHYSICAL EDUCATION & EXTRA CURRUCULAR ACTIVITIES COMMITTEE
          </h1>

          {/* Committee Members List */}
          <div className="space-y-1">
            <p className="text-base text-black font-bold">1 . Convener – Principal.Prof.Dr.Dhanasekar B</p>
            <p className="text-base text-black font-bold">2.Mr.Rozario Cyril- (Chair)</p>
            <p className="text-base text-black font-bold">3.Dr.Vijay Thiyagarajan- (Member Secretary)</p>
            <p className="text-base text-black font-bold">4.Dr.AnuPriya</p>
            <p className="text-base text-black font-bold">5.Prof.Dr.B.Sasi Rekha</p>
            <p className="text-base text-black font-bold">6.Dr.Sasi Kumar</p>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
