import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Capability Enhancement Program Document - JKKN Dental College',
  description: 'View detailed capability enhancement program documentation at JKKN Dental College. Access comprehensive information on student development initiatives. Read now.',
  keywords: 'capability enhancement document, program details, JKKN training programs, student development, skill enhancement documentation, academic programs',
  openGraph: {
    title: 'Capability Enhancement Program Document - JKKN Dental College',
    description: 'View detailed capability enhancement program documentation at JKKN Dental College. Access comprehensive information on student development initiatives. Read now.',
    url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/view-document/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function ViewDocument() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Capability Enhancement', url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/' },
        { name: 'View Document', url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/view-document/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/Capability-Enhancement-Program-ViewDocument.pdf" />
    </>
  );
}
