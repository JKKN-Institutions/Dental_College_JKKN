import { PdfRedirect } from '@/components/pdf-redirect';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/about/approvals-and-affiliation/dci-bds/' },
  title: 'BDS Permission Letter | NDC (formerly DCI) Approval',
  description: 'Download the JKKN Dental College permission letter for the BDS programme, 100 seats. The Dental Council of India that issued it was dissolved on 19 March 2026 and the National Dental Commission succeeded it; the approval is unaffected.',
  keywords: 'NDC approval, National Dental Commission, DCI approval, dental council India, BDS permission, regulatory approval',
  openGraph: {
    title: 'BDS Permission Letter | NDC (formerly DCI) Approval',
    description: 'Download the JKKN Dental College permission letter for the BDS programme, 100 seats. The Dental Council of India that issued it was dissolved on 19 March 2026 and the National Dental Commission succeeded it; the approval is unaffected.',
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
