import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Anti Ragging Committee Members | JKKN Dental College',
  description: 'View the current members of the Anti Ragging Committee at JKKN Dental College committed to maintaining a safe and respectful campus.',
  keywords: 'anti ragging committee members, committee faculty, student safety, ragging prevention team, JKKN dental college, campus security',
};

export default function AntiRaggingCommitteeMembers() {
  return <PdfRedirect pdfUrl="/pdf/ANTI-RAGGING-COMMITTEE-ViewCommitteeMembers.pdf" />;
}
