import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Faculty Development Programs Attended - JKKN Dental College',
  description: 'View FDP attended by JKKN Dental College faculty members. Committed to continuous professional development and educational excellence. Learn more.',
  keywords: 'faculty development program, FDP attended, faculty training, professional development, dental faculty achievements, JKKN faculty, academic excellence',
  openGraph: {
    title: 'Faculty Development Programs Attended - JKKN Dental College',
    description: 'View FDP attended by JKKN Dental College faculty members. Committed to continuous professional development and educational excellence. Learn more.',
    url: 'https://dental.jkkn.ac.in/academics/faculty-achievements/fdp-attended/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function FdpAttended() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/faculty-achievements/fdp-attended/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Faculty Development Programs Attended - JKKN Dental College',
    description: 'View FDP attended by JKKN Dental College faculty members. Committed to continuous professional development and educational excellence. Learn more.',
    url: 'https://dental.jkkn.ac.in/academics/faculty-achievements/fdp-attended/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            FDP ATTENDED
          </h1>

          {/* View Document Button */}
          <a
            href="#"
            className="inline-block bg-[#E8E3F3] hover:bg-[#d9d3e8] text-gray-700 font-semibold py-4 px-8 rounded transition-all duration-300"
          >
            View Document
          </a>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
