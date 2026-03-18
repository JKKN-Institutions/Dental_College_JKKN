import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Library & Learning Resources Committee | JKKN Dental',
  description: 'Managing library resources and learning facilities. View committee members responsible for academic resources and student learning support.',
  keywords: 'library committee, learning resources, academic library, library management, student resources, JKKN dental college, educational materials',
  openGraph: {
    title: 'Library & Learning Resources Committee | JKKN Dental',
    description: 'Managing library resources and learning facilities. View committee members responsible for academic resources and student learning support.',
    url: 'https://dental.jkkn.ac.in/committee/library-and-learning-resources-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function LibraryAndLearningResourcesCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/library-and-learning-resources-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Library & Learning Resources Committee - JKKN Dental College',
    description: 'Managing library resources and learning facilities. View committee members responsible for academic resources and student learning support.',
    url: 'https://dental.jkkn.ac.in/committee/library-and-learning-resources-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Library & Learning Resources Committee | JKKN Dental',
    description: 'Managing library resources and learning facilities. View committee members responsible for academic resources and student learning support.',
    url: 'https://dental.jkkn.ac.in/committee/library-and-learning-resources-committee/',
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8">
            LIBRARY AND LEARNING RESOURCES COMMITTEE
          </h1>

          {/* Committee Members List */}
          <p className="text-base text-black mb-3 leading-relaxed">
            1 .CONVENER – Principal.Prof.Dr.Dhanasekar B
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            2. Prof.Dr.B. Sasirekha
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            3.Dr.Vignesh Kumar ( Member secretary)
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            4.Dr.T. Dhinesh Kumar
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            5.Dr. Kalaranjani
          </p>
          <p className="text-base text-black mb-3 leading-relaxed">
            6.Librarian-Miss&apos;Kiruthika
          </p>
          <p className="text-base text-black mb-12 leading-relaxed">
            7.Dr. Linda
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
