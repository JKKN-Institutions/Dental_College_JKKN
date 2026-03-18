import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Download UGC Public Disclosure - Anti Ragging Committee | JKKN Dental College',
  description: 'Download UGC public disclosure for anti-ragging measures at JKKN Dental College. View compliance documents and preventive measures.',
  keywords: 'UGC public disclosure, anti ragging, ragging prevention, UGC compliance, JKKN dental college, student safety, ragging free campus',
  openGraph: {
    title: 'Download UGC Public Disclosure - Anti Ragging Committee | JKKN Dental College',
    description: 'Download UGC public disclosure for anti-ragging measures at JKKN Dental College. View compliance documents and preventive measures.',
    url: 'https://dental.jkkn.ac.in/committee/anti-ragging-committee/download-ugc-public-disclosure/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/committee/anti-ragging-committee/download-ugc-public-disclosure/');

export default function AntiRaggingUGCPublicDisclosure() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/ANTI-RAGGING-COMMITTEE-PublicDisclosures.pdf" />
    </>
  );
}
