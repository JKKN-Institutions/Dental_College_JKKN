import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acts & Statutes | JKKN Dental College Regulations & Rules',
  description: 'View JKKN Dental College acts, statutes and regulatory framework. Download official college regulations, rules and governance documents. Transparency in compliance.',
  keywords: 'acts statutes, college regulations, governance, regulatory framework, college rules',
};

export default function ActStatutes() {
  return <PdfRedirect pdfUrl="/pdf/acts-and-statutes.pdf" />;
}
