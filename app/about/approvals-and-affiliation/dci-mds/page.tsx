import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/about/approvals-and-affiliation/dci-mds/' },
  title: 'MDS Permission Letter | NDC (formerly DCI) Approval',
  description: 'Download the JKKN Dental College letter of permission for MDS, issued by the Ministry of Health and Family Welfare under Section 10(A) of the Dentists Act, 1948, for Oral Medicine and Radiology. The regulator is now the National Dental Commission, which succeeded the Dental Council of India on 19 March 2026.',
  keywords: 'NDC MDS approval, National Dental Commission, DCI MDS approval, postgraduate permission, Oral Medicine and Radiology, MDS approval',
  openGraph: {
    title: 'MDS Permission Letter | NDC (formerly DCI) Approval',
    description: 'Download the JKKN Dental College letter of permission for MDS, issued by the Ministry of Health and Family Welfare under Section 10(A) of the Dentists Act, 1948, for Oral Medicine and Radiology. The regulator is now the National Dental Commission, which succeeded the Dental Council of India on 19 March 2026.',
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
