import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/committee/ncc/nss/' },
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

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0b6d41] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            NCC/NSS
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-[#d4f1e4]">
            JKKN DENTAL COLLEGE &amp; HOSPITAL
          </h2>
        </div>
      </section>

      {/* National Service Scheme */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#0b6d41] mb-6">
            NATIONAL SERVICE SCHEME
          </h3>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#d4f1e4] border-l-4 border-l-[#0f8f56]">
            <p className="text-gray-700 text-base font-semibold leading-relaxed">
              NSS COORDINATOR: DR NS NAVEENRAJ, MDS
            </p>
          </div>
        </div>
      </section>

      {/* Self Financing Unit */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#0b6d41] mb-6">
            SELF FINANCING UNIT
          </h3>
          <div className="bg-[#FBFBEE] rounded-xl p-8 shadow-sm border border-[#d4f1e4] border-l-4 border-l-[#0f8f56] space-y-5">
            <p className="text-gray-700 text-base font-semibold leading-relaxed">
              National Service Scheme (NSS) at JKKN Dental College &amp; Hospital
            </p>
            <p className="hero-description text-gray-700 text-base leading-relaxed text-justify">
              The National Service Scheme (NSS) unit of JKKN Dental College is committed to instilling a sense of social responsibility and community service among learners. Through various outreach programs, awareness campaigns, and health initiatives, our NSS volunteers actively engage in serving underprivileged communities. Emphasizing the importance of public health and social welfare, the unit conducts dental screening camps, oral health awareness drives, Swachh Bharat initiatives, and environmental sustainability projects. By fostering teamwork and leadership, the NSS unit plays a vital role in shaping socially responsible dental professionals dedicated to holistic community development.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
