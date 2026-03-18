import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

// Schema #4f: BreadcrumbList – /facilities Page
const facilitiesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Facilities", "item": "https://dental.jkkn.ac.in/facilities/" }
  ]
};

export default function FacilitiesPage() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Facilities | JKKN Dental College & Hospital',
    description: 'Explore world-class facilities at JKKN Dental College & Hospital — 200+ dental chairs, fully equipped labs, hostel, library, sports complex and more.',
    url: 'https://dental.jkkn.ac.in/facilities/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <>
      <StructuredData data={facilitiesBreadcrumbSchema} />
      <StructuredData data={speakableSchema} />
    </>
  );
}