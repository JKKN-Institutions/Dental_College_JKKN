import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annual Report | JKKN Dental College Yearly Performance Review',
  description: 'Download JKKN Dental College annual report. View achievements, academic performance, research activities, and institutional development. Access latest yearly reports.',
  keywords: 'annual report, yearly performance, college achievements, institutional report, academic progress',
};

export default function AnnualReport() {
  return <PdfRedirect pdfUrl="/pdf/ANNUAL-REPORT.pdf" />;
}
