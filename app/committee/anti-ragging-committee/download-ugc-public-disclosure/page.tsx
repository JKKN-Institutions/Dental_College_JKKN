import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Download UGC Public Disclosure - Anti Ragging Committee | JKKN Dental College',
  description: 'Download UGC public disclosure for anti-ragging measures at JKKN Dental College. View compliance documents and preventive measures.',
  keywords: 'UGC public disclosure, anti ragging, ragging prevention, UGC compliance, JKKN dental college, student safety, ragging free campus',
};

export default function AntiRaggingUGCPublicDisclosure() {
  return <PdfRedirect pdfUrl="/pdf/ANTI-RAGGING-COMMITTEE-PublicDisclosures.pdf" />;
}
