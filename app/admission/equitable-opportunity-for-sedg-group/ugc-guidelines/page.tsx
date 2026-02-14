import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'UGC Guidelines for SEDG - JKKN Dental College Admission Policy',
  description: 'View UGC 2024 guidelines for equitable opportunities for Socio-Economically Disadvantaged Groups at JKKN Dental College admission process.',
  keywords: 'UGC guidelines, SEDG policy, UGC 2024, equitable opportunity guidelines, JKKN Dental College, admission guidelines, disadvantaged groups UGC',
};

export default function UGCGuidelines() {
  return <PdfRedirect pdfUrl="/pdf/EQUITABLE-OPPORTUNITY-FOR-SEDG-UGC-Guidelines.pdf" />;
}
