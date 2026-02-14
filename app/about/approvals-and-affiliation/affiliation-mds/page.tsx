import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDS Affiliation Certificate | Dr. MGR Medical University Approval',
  description: 'View JKKN Dental College MDS affiliation from Dr. MGR Medical University, Chennai. 5 specializations approved. Download official university affiliation letters.',
  keywords: 'MDS affiliation, postgraduate affiliation, MGR medical university, MDS approval, specialization approval',
};

export default function AffiliationMDS() {
  return <PdfRedirect pdfUrl="/pdf/university-provisional-affiliation-letters-mds.pdf" />;
}
