import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'About JKKN Dental College | Vision & Overview',
  description: 'Learn about JKKN Dental College & Hospital — DCI approved, NAAC A accredited, affiliated to TN Dr. MGR Medical University, Komarapalayam, Namakkal.',
  openGraph: {
    title: 'About JKKN Dental College | Vision & Overview',
    description: 'Learn about JKKN Dental College & Hospital — DCI approved, NAAC A accredited, affiliated to TN Dr. MGR Medical University, Komarapalayam, Namakkal.',
    url: 'https://dental.jkkn.ac.in/about/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

// Schema #4d: BreadcrumbList – /about Page
const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://dental.jkkn.ac.in/about/" }
  ]
};

export default function AboutPage() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'About Us | JKKN Dental College & Hospital',
    description: 'Learn about JKKN Dental College & Hospital — established 1987, part of JKKN Institutions (since 1952). Affiliated to TN Dr. MGR Medical University, offering BDS and MDS programs in Komarapalayam, Namakkal.',
    url: 'https://dental.jkkn.ac.in/about/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <>
      <StructuredData data={aboutBreadcrumbSchema} />
      <StructuredData data={speakableSchema} />
    </>
  );
}
