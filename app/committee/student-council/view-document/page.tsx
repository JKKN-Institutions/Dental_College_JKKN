import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Student Council Document | JKKN Dental College',
  description: 'View official Student Council document detailing roles, responsibilities, and guidelines for student representatives at JKKN.',
  keywords: 'student council document, council guidelines, student roles, student responsibilities, JKKN dental college, student governance',
  openGraph: {
    title: 'Student Council Document | JKKN Dental College',
    description: 'View official Student Council document detailing roles, responsibilities, and guidelines for student representatives at JKKN.',
    url: 'https://dental.jkkn.ac.in/committee/student-council/view-document/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/committee/student-council/view-document/');

export default function StudentCouncilViewDocument() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Student-Council-ViewDocument.pdf" />
    </>
  );
}
