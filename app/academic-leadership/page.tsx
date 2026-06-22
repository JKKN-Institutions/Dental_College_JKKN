import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Academic Leadership | JKKN Dental College',
  description: 'Meet the academic leadership team at JKKN Dental College, committed to excellence in dental education and institutional development.',
  keywords: 'Academic Leadership, JKKN Dental College, dental college leadership, academic administration, dental education leaders, department heads',
  openGraph: {
    title: 'Academic Leadership | JKKN Dental College',
    description: 'Meet the academic leadership team at JKKN Dental College, committed to excellence in dental education and institutional development.',
    url: 'https://dental.jkkn.ac.in/administration/academic-leadership/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/administration/academic-leadership/');

export default function AcademicLeadership() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Academic-Leadership.pdf" />
    </>
  );
}
