import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'DCI MDS Permission Letter | Dental Council of India Postgraduate Approval',
  description: 'Download JKKN Dental College DCI permission letter for MDS postgraduate programs. View Dental Council of India approval for 5 MDS specializations.',
  keywords: 'DCI MDS approval, postgraduate permission, dental council India MDS, DCI recognition, MDS approval',
  openGraph: {
    title: 'DCI MDS Permission Letter | Dental Council of India Postgraduate Approval',
    description: 'Download JKKN Dental College DCI permission letter for MDS postgraduate programs. View Dental Council of India approval for 5 MDS specializations.',
    url: 'https://dental.jkkn.ac.in/about/approvals-and-affiliation/dci-mds/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function DCIMDS() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/approvals-and-affiliation/dci-mds');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/DCI-Permission-letter-mds.pdf" />
    </>
  );
}
