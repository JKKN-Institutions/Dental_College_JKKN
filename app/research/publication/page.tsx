import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Publications | JKKN Dental College Faculty Research',
  description: 'Explore research publications by JKKN Dental College faculty and students. Browse our contributions to dental research, clinical studies, and academic journals.',
  keywords: 'dental research, research publications, faculty research, dental studies, academic research',
};

export default function Publication() {
  return <PdfRedirect pdfUrl="/pdf/Publication-TEMPLATE.pdf" heading="Research Publications" />;
}
