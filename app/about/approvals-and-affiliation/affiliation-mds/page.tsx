import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'MDS Affiliation Certificate | Dr. MGR Medical University Approval',
  description: 'View JKKN Dental College MDS affiliation from Dr. MGR Medical University, Chennai. 5 specializations approved. Download official university affiliation letters.',
  keywords: 'MDS affiliation, postgraduate affiliation, MGR medical university, MDS approval, specialization approval',
  openGraph: {
    title: 'MDS Affiliation Certificate | Dr. MGR Medical University Approval',
    description: 'View JKKN Dental College MDS affiliation from Dr. MGR Medical University, Chennai. 5 specializations approved. Download official university affiliation letters.',
    url: 'https://dental.jkkn.ac.in/about/approvals-and-affiliation/affiliation-mds/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AffiliationMDS() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/approvals-and-affiliation/affiliation-mds');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/university-provisional-affiliation-letters-mds.pdf" />
    </>
  );
}
