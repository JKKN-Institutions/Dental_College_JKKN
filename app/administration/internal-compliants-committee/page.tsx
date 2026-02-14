import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Internal Complaints Committee | JKKN Dental College',
  description: 'Information about the Internal Complaints Committee at JKKN Dental College, ensuring a safe and respectful campus environment for all.',
  keywords: 'Internal Complaints Committee, JKKN Dental College, ICC, campus safety, grievance redressal, student welfare, anti-harassment policy',
};

export default function InternalCompliantsCommittee() {
  return <PdfRedirect pdfUrl="/pdf/Internal-Compliance-committee.pdf" />;
}
