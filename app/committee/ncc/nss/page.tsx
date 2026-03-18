import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'NCC/NSS - National Service Scheme | JKKN Dental College',
  description: 'NSS unit instilling social responsibility through community service, dental camps, health awareness drives, and sustainability projects.',
  keywords: 'NSS, national service scheme, community service, social responsibility, dental camps, health awareness, JKKN dental college',
  openGraph: {
    title: 'NCC/NSS - National Service Scheme | JKKN Dental College',
    description: 'NSS unit instilling social responsibility through community service, dental camps, health awareness drives, and sustainability projects.',
    url: 'https://dental.jkkn.ac.in/committee/ncc/nss/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NCCNSSPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/ncc/nss');
  const webPageSchema = generateWebPageSchema({
    title: 'NCC/NSS - National Service Scheme - JKKN Dental College',
    description: 'NSS unit instilling social responsibility through community service, dental camps, health awareness drives, and sustainability projects.',
    url: 'https://dental.jkkn.ac.in/committee/ncc/nss/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'NCC/NSS - National Service Scheme | JKKN Dental College',
    description: 'NSS unit instilling social responsibility through community service, dental camps, health awareness drives, and sustainability projects.',
    url: 'https://dental.jkkn.ac.in/committee/ncc/nss/',
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
            NCC/NSS
          </h1>

          {/* College Name */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-4">
            JKKN DENTAL COLLEGE & HOSPITAL
          </h2>

          {/* National Service Scheme */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            NATIONAL SERVICE SCHEME
          </h3>

          {/* Coordinator */}
          <p className="text-base text-black mb-4 leading-relaxed">
            NSS COORDINATOR: DR NS NAVEENRAJ, MDS
          </p>

          {/* Self Financing Unit */}
          <h3 className="text-base md:text-lg font-bold text-black mb-4">
            SELF FINANCING UNIT
          </h3>

          {/* NSS Title */}
          <p className="text-base text-black mb-4 leading-relaxed">
            National Service Scheme (NSS) at JKKN Dental College & Hospital
          </p>

          {/* Description Paragraph */}
          <p className="text-base text-black mb-8 leading-relaxed text-justify">
            The National Service Scheme (NSS) unit of JKKN Dental College is committed to instilling a sense of social responsibility and community service among students. Through various outreach programs, awareness campaigns, and health initiatives, our NSS volunteers actively engage in serving underprivileged communities. Emphasizing the importance of public health and social welfare, the unit conducts dental screening camps, oral health awareness drives, Swachh Bharat initiatives, and environmental sustainability projects. By fostering teamwork and leadership, the NSS unit plays a vital role in shaping socially responsible dental professionals dedicated to holistic community development.
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
