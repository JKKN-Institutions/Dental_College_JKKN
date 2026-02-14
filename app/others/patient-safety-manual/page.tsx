import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Patient Safety Manual - JKKN Dental Hospital',
  description: 'Access JKKN Dental Hospital Patient Safety Manual. Comprehensive guidelines and protocols ensuring quality healthcare and patient safety standards.',
  keywords: 'patient safety manual, JKKN hospital safety, healthcare protocols, patient care guidelines, hospital safety standards, dental hospital safety, quality healthcare, patient protection, medical protocols',
};

export default function PatientSafetyManual() {
  return <PdfRedirect pdfUrl="/pdf/PATIENT-SAFETY-MANUAL.pdf" />;
}
