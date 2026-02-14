import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Internal Complaints Committee (ICC) | JKKN Dental College',
  description: 'Addressing workplace harassment and ensuring safe environment. View ICC members and complaint redressal procedures at JKKN.',
  keywords: 'internal complaints committee, ICC, harassment prevention, workplace safety, complaint redressal, JKKN dental college, student protection',
};

export default function InternalCompliantsCommittee() {
  return <PdfRedirect pdfUrl="/pdf/Internal-Compliance-committee.pdf" />;
}
