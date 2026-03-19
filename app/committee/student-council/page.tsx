import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Student Council | JKKN Dental College',
  description: 'Student representatives fostering campus life, organizing events, and bridging students with administration at JKKN Dental College.',
  keywords: 'student council, student representatives, campus events, student leadership, student activities, JKKN dental college, student body',
  openGraph: {
    title: 'Student Council | JKKN Dental College',
    description: 'Student representatives fostering campus life, organizing events, and bridging students with administration at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/committee/student-council/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function StudentCouncil() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/student-council');
  const webPageSchema = generateWebPageSchema({
    title: 'Student Council - JKKN Dental College',
    description: 'Student representatives fostering campus life, organizing events, and bridging students with administration at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/committee/student-council/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Student Council | JKKN Dental College',
    description: 'Student representatives fostering campus life, organizing events, and bridging students with administration at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/committee/student-council/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D5E2E] mb-8">
            STUDENT COUNCIL
          </h1>

          {/* View Document Button */}
          <div className="mb-8">
            <a
              href="/view-student-council-document"
              className="inline-block bg-[#E8E1F0] hover:bg-[#D9CEE8] text-gray-700 font-semibold py-3 px-8 rounded transition-all duration-300 text-base"
            >
              View Document
            </a>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="w-full">
              <img
                src="/images/student-council-1.jpg"
                alt="Student Council 1"
                className="w-full h-64 object-cover rounded"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full">
              <img
                src="/images/student-council-2.jpg"
                alt="Student Council 2"
                className="w-full h-64 object-cover rounded"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full">
              <img
                src="/images/student-council-3.webp"
                alt="Student Council 3"
                className="w-full h-64 object-cover rounded"
              />
            </div>

            {/* Image 4 */}
            <div className="w-full">
              <img
                src="/images/student-council-4.jpg"
                alt="Student Council 4"
                className="w-full h-64 object-cover rounded"
              />
            </div>

            {/* Image 5 */}
            <div className="w-full">
              <img
                src="/images/student-council-5.jpeg"
                alt="Student Council 5"
                className="w-full h-64 object-cover rounded"
              />
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
