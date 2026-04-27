import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

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

  const members = [
    '1 .CONVENER – Principal.Prof.Dr.Dhanasekar B',
    '2. Prof.Dr.B. Sasirekha',
    '3.Dr.Vignesh Kumar ( Member secretary)',
    '4.Dr.T. Dhinesh Kumar',
    '5.Dr. Kalaranjani',
    '6.Librarian-Miss’Kiruthika',
    '7.Dr. Linda',
  ];

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
            LIBRARY AND LEARNING RESOURCES COMMITTEE
          </h1>
        </div>
      </section>

      {/* Members */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member) => (
              <div key={member} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-semibold text-sm leading-relaxed">{member}</p>
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
