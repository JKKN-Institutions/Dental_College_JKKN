import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

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
    description: 'Learn about JKKN Dental College & Hospital — founded 1952, affiliated to TN Dr. MGR Medical University, offering BDS and MDS programs in Komarapalayam, Namakkal.',
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
