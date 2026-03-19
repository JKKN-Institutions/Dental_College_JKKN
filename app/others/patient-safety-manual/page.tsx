import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Patient Safety Manual - JKKN Dental Hospital',
  description: 'Access JKKN Dental Hospital Patient Safety Manual. Comprehensive guidelines and protocols ensuring quality healthcare and patient safety standards.',
  keywords: 'patient safety manual, JKKN hospital safety, healthcare protocols, patient care guidelines, hospital safety standards, dental hospital safety, quality healthcare, patient protection, medical protocols',
  openGraph: {
    title: 'Patient Safety Manual - JKKN Dental Hospital',
    description: 'Access JKKN Dental Hospital Patient Safety Manual. Comprehensive guidelines and protocols ensuring quality healthcare and patient safety standards.',
    url: 'https://dental.jkkn.ac.in/others/patient-safety-manual/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PatientSafetyManual() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Others', url: 'https://dental.jkkn.ac.in/others/' },
        { name: 'Patient Safety Manual', url: 'https://dental.jkkn.ac.in/others/patient-safety-manual/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/PATIENT-SAFETY-MANUAL.pdf" />
    </>
  );
}
