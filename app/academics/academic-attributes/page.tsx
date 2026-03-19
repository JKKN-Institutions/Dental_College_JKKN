import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Academic Attributes - JKKN Dental College',
  description: 'Explore academic attributes and quality standards at JKKN Dental College. Discover our commitment to excellence in dental education. View details now.',
  keywords: 'academic attributes, dental college quality standards, JKKN academics, dental education excellence, academic quality, education standards, dental college attributes',
  openGraph: {
    title: 'Academic Attributes - JKKN Dental College',
    description: 'Explore academic attributes and quality standards at JKKN Dental College. Discover our commitment to excellence in dental education. View details now.',
    url: 'https://dental.jkkn.ac.in/academics/academic-attributes/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AcademicAttributes() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Academic Attributes', url: 'https://dental.jkkn.ac.in/academics/academic-attributes/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/Academic-Attributes.pdf" />
    </>
  );
}
