import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

type HubLink = { label: string; href: string; external?: boolean };

const disclosureLinks: HubLink[] = [
  { label: 'Guidelines on Public Disclosure by HEIs', href: '/pdf/Guidelines-on-Public-Disclosure-by-HEIs-MD.pdf', external: true },
  { label: 'Letter of Undertaking', href: '/pdf/Letter-of-Undertaking-MD.pdf', external: true },
];

const relatedLinks: HubLink[] = [
  { label: 'Annual Report', href: '/about/annual-report' },
  { label: 'Annual Account Statement', href: '/about/annual-account-statement' },
  { label: 'Acts & Statutes', href: '/about/act-statutes' },
  { label: 'IQAC', href: '/iqac' },
];

export const metadata: Metadata = {
  alternates: { canonical: '/mandatory-disclosures/' },
  title: 'Mandatory Disclosures | JKKN Dental College & Hospital',
  description: 'Public disclosure documents published by JKKN Dental College & Hospital, including the guidelines on public disclosure by HEIs and the letter of undertaking.',
  keywords: 'mandatory disclosures, public disclosure, letter of undertaking, HEI guidelines, JKKN dental college',
  openGraph: {
    title: 'Mandatory Disclosures | JKKN Dental College & Hospital',
    description: 'Public disclosure documents published by JKKN Dental College & Hospital.',
    url: 'https://dental.jkkn.ac.in/mandatory-disclosures/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MandatoryDisclosuresHub() {
  const breadcrumbSchema = generateBreadcrumbSchema('/mandatory-disclosures');
  const webPageSchema = generateWebPageSchema({
    title: 'Mandatory Disclosures - JKKN Dental College & Hospital',
    description: 'Public disclosure documents published by JKKN Dental College & Hospital.',
    url: 'https://dental.jkkn.ac.in/mandatory-disclosures/',
    dateModified: '2026-09-01',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Mandatory Disclosures | JKKN Dental College & Hospital',
    description: 'Public disclosure documents published by JKKN Dental College & Hospital.',
    url: 'https://dental.jkkn.ac.in/mandatory-disclosures/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  const cardClass =
    'block h-full border border-gray-200 rounded p-5 text-gray-800 font-semibold hover:border-[#0D5E2E] hover:text-[#0D5E2E] transition-all duration-300';

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D5E2E] mb-6">
            MANDATORY DISCLOSURES
          </h1>

          <p className="hero-description text-base md:text-lg text-gray-700 max-w-4xl mb-10">
            This page carries the public disclosure documents published by JKKN Dental College &amp;
            Hospital. Open a document below to read or download it.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mb-14">
            {disclosureLinks.map((item) => (
              <li key={item.href} className="w-full">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0D5E2E] mb-6">
            Related institutional documents
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
            {relatedLinks.map((item) => (
              <li key={item.href} className="w-full">
                <Link href={item.href} className={cardClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
