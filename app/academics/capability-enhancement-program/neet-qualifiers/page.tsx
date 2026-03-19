import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'NEET Qualifiers - JKKN Dental College',
  description: 'View our NEET qualifiers list at JKKN Dental College. Celebrating students who excelled in NEET examinations. Check achievements now.',
  keywords: 'NEET qualifiers, dental NEET results, JKKN NEET achievers, dental entrance exam, NEET toppers, dental admissions, NEET success stories',
  openGraph: {
    title: 'NEET Qualifiers - JKKN Dental College',
    description: 'View our NEET qualifiers list at JKKN Dental College. Celebrating students who excelled in NEET examinations. Check achievements now.',
    url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/neet-qualifiers/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function NeetQualifiers() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Capability Enhancement', url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/' },
        { name: 'NEET Qualifiers', url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/neet-qualifiers/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/Capability-Enhancement-Program-NeetQualifiers.pdf" />
    </>
  );
}
