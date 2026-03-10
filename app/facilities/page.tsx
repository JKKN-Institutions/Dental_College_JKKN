import StructuredData from '@/components/StructuredData';

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
  return (
    <>
      <StructuredData data={facilitiesBreadcrumbSchema} />
    </>
  );
}
