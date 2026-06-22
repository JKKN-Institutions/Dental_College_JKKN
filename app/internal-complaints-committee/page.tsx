import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Internal Complaints Committee | JKKN Dental College',
  description: 'Information about the Internal Complaints Committee at JKKN Dental College, ensuring a safe and respectful campus environment for all.',
  keywords: 'Internal Complaints Committee, JKKN Dental College, ICC, campus safety, grievance redressal, student welfare, anti-harassment policy',
  openGraph: {
    title: 'Internal Complaints Committee | JKKN Dental College',
    description: 'Information about the Internal Complaints Committee at JKKN Dental College, ensuring a safe and respectful campus environment for all.',
    url: 'https://dental.jkkn.ac.in/internal-complaints-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/internal-complaints-committee/');

export default function InternalCompliantsCommittee() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Internal-Compliance-committee.pdf" />
    </>
  );
}
