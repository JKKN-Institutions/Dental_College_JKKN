import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'BDS Syllabus - JKKN Dental College',
  description: 'Access complete BDS syllabus at JKKN Dental College. Comprehensive curriculum for Bachelor of Dental Surgery program. Download now.',
  keywords: 'BDS syllabus, Bachelor of Dental Surgery curriculum, dental undergraduate syllabus, JKKN BDS program, dental course structure, BDS academics',
  openGraph: {
    title: 'BDS Syllabus - JKKN Dental College',
    description: 'Access complete BDS syllabus at JKKN Dental College. Comprehensive curriculum for Bachelor of Dental Surgery program. Download now.',
    url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/bds-syllabus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function BDSSyllabus() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Syllabus', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/' },
        { name: 'BDS Syllabus', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/bds-syllabus/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/BDS-syllabus.pdf" />
    </>
  );
}
