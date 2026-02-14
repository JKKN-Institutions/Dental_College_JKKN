import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BDS Affiliation Certificate | Dr. MGR Medical University Approval',
  description: 'View JKKN Dental College BDS affiliation from Dr. MGR Medical University, Chennai. 100 seats approved. Download official university affiliation letters and documents.',
  keywords: 'BDS affiliation, university affiliation, MGR medical university, BDS approval, affiliation certificate',
};

export default function AffiliationBDS() {
  return <PdfRedirect pdfUrl="/pdf/university-provisional-affiliation-letters-bds.pdf" />;
}
