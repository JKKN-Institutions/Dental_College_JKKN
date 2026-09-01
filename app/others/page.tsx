import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

type HubLink = { label: string; href: string; description: string; external?: boolean };

const otherLinks: HubLink[] = [
  {
    label: 'Senior Learners',
    href: '/faculty',
    description: 'Faculty and senior learners of JKKN Dental College and Hospital.',
  },
  {
    label: 'Careers',
    href: 'https://jobs.cvviz.com/jkkn_institutions',
    description: 'Current openings across JKKN Institutions.',
    external: true,
  },
  {
    label: 'Patient Safety Manual',
    href: '/pdf/PATIENT-SAFETY-MANUAL.pdf',
    description: 'The patient safety manual published by the college hospital.',
    external: true,
  },
  {
    label: 'Outreach',
    href: 'https://outreach.dental.jkkn.ac.in/',
    description: 'Community outreach activities run by the college hospital.',
    external: true,
  },
];

export const metadata: Metadata = {
  alternates: { canonical: '/others/' },
  title: 'Others | JKKN Dental College & Hospital',
  description: 'Other sections of JKKN Dental College & Hospital - senior learners, careers, the patient safety manual and community outreach.',
  keywords: 'senior learners, careers, patient safety manual, outreach, JKKN dental college',
  openGraph: {
    title: 'Others | JKKN Dental College & Hospital',
    description: 'Senior learners, careers, the patient safety manual and community outreach.',
    url: 'https://dental.jkkn.ac.in/others/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function OthersHub() {
  const breadcrumbSchema = generateBreadcrumbSchema('/others');
  const webPageSchema = generateWebPageSchema({
    title: 'Others - JKKN Dental College & Hospital',
    description: 'Senior learners, careers, the patient safety manual and community outreach.',
    url: 'https://dental.jkkn.ac.in/others/',
    dateModified: '2026-09-01',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Others | JKKN Dental College & Hospital',
    description: 'Senior learners, careers, the patient safety manual and community outreach.',
    url: 'https://dental.jkkn.ac.in/others/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  const cardClass =
    'block h-full border border-gray-200 rounded p-6 hover:border-[#0D5E2E] transition-all duration-300';

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D5E2E] mb-6">
            OTHERS
          </h1>

          <p className="hero-description text-base md:text-lg text-gray-700 max-w-4xl mb-10">
            This page groups the sections of the JKKN Dental College &amp; Hospital site that do not
            sit under academics, admissions or facilities.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
            {otherLinks.map((item) => (
              <li key={item.href} className="w-full">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    <span className="block text-lg font-bold text-[#0D5E2E] mb-2">{item.label}</span>
                    <span className="block text-sm text-gray-700">{item.description}</span>
                  </a>
                ) : (
                  <Link href={item.href} className={cardClass}>
                    <span className="block text-lg font-bold text-[#0D5E2E] mb-2">{item.label}</span>
                    <span className="block text-sm text-gray-700">{item.description}</span>
                  </Link>
                )}
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
