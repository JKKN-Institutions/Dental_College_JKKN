import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'UGC Anti Ragging Guidelines | JKKN Dental College',
  description: 'Read full UGC regulations on curbing ragging in higher educational institutions. Comprehensive framework for prevention and penalties.',
  keywords: 'UGC anti ragging guidelines, ragging regulations, UGC 2009 regulations, anti ragging rules, student safety, JKKN dental college',
  openGraph: {
    title: 'UGC Anti Ragging Guidelines | JKKN Dental College',
    description: 'Read full UGC regulations on curbing ragging in higher educational institutions. Comprehensive framework for prevention and penalties.',
    url: 'https://dental.jkkn.ac.in/committee/anti-ragging-committee/read-full-ugc-guidelines/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/committee/anti-ragging-committee/read-full-ugc-guidelines/');

export default function AntiRaggingUGCGuidelines() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/ANTI-RAGGING-COMMITTEE-UGC-Guideliness.pdf" />
    </>
  );
}
