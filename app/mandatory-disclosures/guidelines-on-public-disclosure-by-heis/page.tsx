import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Guidelines on Public Disclosure by HEIs - JKKN Dental',
  description: 'View UGC guidelines on public disclosure by Higher Education Institutions. JKKN Dental College mandatory disclosure compliance documents.',
  keywords: 'UGC public disclosure guidelines, HEI disclosure, mandatory disclosures, JKKN compliance, higher education transparency, UGC regulations, institutional disclosure, JKKN dental disclosures',
};

export default function GuidelinesOnPublicDisclosure() {
  return <PdfRedirect pdfUrl="/pdf/Guidelines-on-Public-Disclosure-by-HEIs-MD.pdf" />;
}
