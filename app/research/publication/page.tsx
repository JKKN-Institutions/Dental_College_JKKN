import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Research Publications | JKKN Dental College Faculty Research',
  description: 'Explore research publications by JKKN Dental College faculty and students. Browse our contributions to dental research, clinical studies, and academic journals.',
  keywords: 'dental research, research publications, faculty research, dental studies, academic research',
  openGraph: {
    title: 'Research Publications | JKKN Dental College Faculty Research',
    description: 'Explore research publications by JKKN Dental College faculty and students. Browse our contributions to dental research, clinical studies, and academic journals.',
    url: 'https://dental.jkkn.ac.in/research/publication/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function Publication() {
  const breadcrumbSchema = generateBreadcrumbSchema('/research/publication/');
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Publication-TEMPLATE.pdf" heading="Research Publications" />
    </>
  );
}
