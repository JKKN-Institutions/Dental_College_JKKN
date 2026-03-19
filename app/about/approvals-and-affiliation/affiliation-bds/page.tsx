import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'BDS Affiliation Certificate | Dr. MGR University Approval',
  description: 'View JKKN Dental College BDS affiliation from Dr. MGR Medical University, Chennai. 100 seats approved. Download official university affiliation letters and documents.',
  keywords: 'BDS affiliation, university affiliation, MGR medical university, BDS approval, affiliation certificate',
  openGraph: {
    title: 'BDS Affiliation Certificate | Dr. MGR University Approval',
    description: 'View JKKN Dental College BDS affiliation from Dr. MGR Medical University, Chennai. 100 seats approved. Download official university affiliation letters and documents.',
    url: 'https://dental.jkkn.ac.in/about/approvals-and-affiliation/affiliation-bds/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AffiliationBDS() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/approvals-and-affiliation/affiliation-bds');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/university-provisional-affiliation-letters-bds.pdf" />
    </>
  );
}
