import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Learner Council Document | JKKN Dental College',
  description: 'View official Learner Council document detailing roles, responsibilities, and guidelines for learner representatives at JKKN.',
  keywords: 'learner council document, council guidelines, learner roles, learner responsibilities, JKKN dental college, learner governance',
  openGraph: {
    title: 'Learner Council Document | JKKN Dental College',
    description: 'View official Learner Council document detailing roles, responsibilities, and guidelines for learner representatives at JKKN.',
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
