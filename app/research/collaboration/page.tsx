import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Research Collaboration | JKKN Dental College',
  description: 'Strategic partnerships with industry leaders, academic institutions, and research organizations for cutting-edge dental research.',
  keywords: 'dental research collaboration, academic partnerships, research organizations, dental innovation, JKKN Dental College, healthcare collaboration',
  openGraph: {
    title: 'Research Collaboration | JKKN Dental College',
    description: 'Strategic partnerships with industry leaders, academic institutions, and research organizations for cutting-edge dental research.',
    url: 'https://dental.jkkn.ac.in/research/collaboration/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function Collaboration() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Research Collaboration | JKKN Dental College',
    description: 'Strategic partnerships with industry leaders, academic institutions, and research organizations for cutting-edge dental research.',
    url: 'https://dental.jkkn.ac.in/research/collaboration/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Collaboration', url: 'https://dental.jkkn.ac.in/research/collaboration/' },
      ]} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>COLLABORATION</span>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            COLLABORATION
          </h1>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed text-justify">
            JKKN Dental College, we believe in the power of collaboration and research to drive innovation and excellence in the field of dentistry. Through strategic partnerships with industry leaders, academic institutions, and research organizations, we provide our students and faculty with unparalleled opportunities to engage in cutting-edge research projects and initiatives. By fostering a culture of collaboration, we aim to create a vibrant ecosystem where ideas flourish, knowledge is shared, and breakthroughs are made. Our commitment to collaboration and research not only enhances the academic experience for our students but also contributes to advancements in dental education and patient care. Join us at JKKNDental College and embark on a journey of discovery and innovation in the world of dentistry.
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
