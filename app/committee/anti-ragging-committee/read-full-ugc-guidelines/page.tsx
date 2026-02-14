import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'UGC Anti Ragging Guidelines | JKKN Dental College',
  description: 'Read full UGC regulations on curbing ragging in higher educational institutions. Comprehensive framework for prevention and penalties.',
  keywords: 'UGC anti ragging guidelines, ragging regulations, UGC 2009 regulations, anti ragging rules, student safety, JKKN dental college',
};

export default function AntiRaggingUGCGuidelines() {
  return <PdfRedirect pdfUrl="/pdf/ANTI-RAGGING-COMMITTEE-UGC-Guideliness.pdf" />;
}
