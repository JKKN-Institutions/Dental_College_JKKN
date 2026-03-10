import StructuredData from '@/components/StructuredData';

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
  return (
    <>
      <StructuredData data={aboutBreadcrumbSchema} />
    </>
  );
}
