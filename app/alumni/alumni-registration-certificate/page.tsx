import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Alumni Registration Certificate - JKKN Dental College',
  description: 'View JKKN Dental College Alumni Association registration certificate. Official documentation for registered alumni members and their privileges.',
  keywords: 'JKKN alumni registration, alumni certificate, JKKN alumni membership, registration document, alumni association certificate, dental college alumni, official alumni document',
};

export default function AlumniRegistrationCertificate() {
  return <PdfRedirect pdfUrl="/pdf/ALUMNI-Registration-Certificate.pdf" />;
}
