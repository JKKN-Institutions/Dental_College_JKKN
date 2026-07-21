import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/research/collaboration/' },
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

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 text-sm text-green-300">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>COLLABORATION</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            COLLABORATION
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-green-100">
            <div className="border-l-4 border-[#7cb983] pl-6">
              <p className="hero-description text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                JKKN Dental College, we believe in the power of collaboration and research to drive innovation and excellence in the field of dentistry. Through strategic partnerships with industry leaders, academic institutions, and research organizations, we provide our learners and senior learners with unparalleled opportunities to engage in cutting-edge research projects and initiatives. By fostering a culture of collaboration, we aim to create a vibrant ecosystem where ideas flourish, knowledge is shared, and breakthroughs are made. Our commitment to collaboration and research not only enhances the academic experience for our learners but also contributes to advancements in dental education and patient care. Join us at JKKNDental College and embark on a journey of discovery and innovation in the world of dentistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
