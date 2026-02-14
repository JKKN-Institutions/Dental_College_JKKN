import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annual Account Statement | JKKN Dental College Financial Reports',
  description: 'Access JKKN Dental College annual account statements and financial reports. View our financial transparency and compliance with UGC guidelines. Download PDF reports.',
  keywords: 'annual accounts, financial statement, college finances, financial reports, transparency',
};

export default function AnnualAccountStatement() {
  return <PdfRedirect pdfUrl="/pdf/ANNUAL-ACCOUNTS-STATEMENT.pdf" />;
}
