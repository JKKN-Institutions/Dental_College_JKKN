import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/about/approvals-and-affiliation/dci-bds/' },
  title: 'DCI BDS Permission Letter | Dental Council of India Approval',
  description: 'Download JKKN Dental College DCI permission letter for BDS program. View the dental regulator approval and recognition - the Dental Council of India became the National Dental Commission on 19 March 2026. 100 BDS seats approved.',
  keywords: 'DCI approval, dental council India, BDS permission, DCI recognition, regulatory approval',
  openGraph: {
    title: 'DCI BDS Permission Letter | Dental Council of India Approval',
    description: 'Download JKKN Dental College DCI permission letter for BDS program. View Dental Council of India approval and recognition. 100 BDS seats DCI approved.',
    url: 'https://dental.jkkn.ac.in/about/approvals-and-affiliation/dci-bds/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function DCIBDS() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/approvals-and-affiliation/dci-bds');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/DCI-Permission-letter-bds.pdf" />
    </>
  );
}
