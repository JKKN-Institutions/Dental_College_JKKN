import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

type HubLink = { label: string; href: string; description: string; external?: boolean };

const infoLinks: HubLink[] = [
  {
    label: 'Right to Information (RTI)',
    href: '/information-center/right-to-information-rti',
    description: 'The RTI disclosure published by the college, with the officers a request is addressed to.',
  },
  {
    label: 'Blog',
    href: '/blog',
    description: 'Articles on BDS and MDS admission, counselling, fees, campus life and dental careers.',
  },
  {
    label: 'FAQs',
    href: '/faq',
    description: 'Answers to the questions asked most often by applicants and parents.',
  },
  {
    // The internal route /information-center/careers/ 307-redirects off-site, so this card
    // links the destination directly — same rule the sitemap applies to that route.
    label: 'Careers',
    href: 'https://jobs.cvviz.com/jkkn_institutions',
    description: 'Current openings across JKKN Institutions.',
    external: true,
  },
];

export const metadata: Metadata = {
  alternates: { canonical: '/information-center/' },
  title: 'Information Center | JKKN Dental College & Hospital',
  description: 'Information Center for JKKN Dental College & Hospital - right to information, blog articles, frequently asked questions and current career openings.',
  keywords: 'information center, right to information, RTI, blog, FAQ, careers, JKKN dental college',
  openGraph: {
    title: 'Information Center | JKKN Dental College & Hospital',
    description: 'Right to information, blog articles, frequently asked questions and current career openings.',
    url: 'https://dental.jkkn.ac.in/information-center/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function InformationCenterHub() {
  const breadcrumbSchema = generateBreadcrumbSchema('/information-center');
  const webPageSchema = generateWebPageSchema({
    title: 'Information Center - JKKN Dental College & Hospital',
    description: 'Right to information, blog articles, frequently asked questions and current career openings.',
    url: 'https://dental.jkkn.ac.in/information-center/',
    dateModified: '2026-09-01',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Information Center | JKKN Dental College & Hospital',
    description: 'Right to information, blog articles, frequently asked questions and current career openings.',
    url: 'https://dental.jkkn.ac.in/information-center/',
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
            INFORMATION CENTER
          </h1>

          <p className="hero-description text-base md:text-lg text-gray-700 max-w-4xl mb-10">
            This page collects the information JKKN Dental College &amp; Hospital publishes for
            learners, parents and visitors. Choose a section below.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
            {infoLinks.map((item) => (
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
