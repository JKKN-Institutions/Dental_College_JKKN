import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Alumni Registration Certificate - JKKN Dental College',
  description: 'View JKKN Dental College Alumni Association registration certificate. Official documentation for registered alumni members and their privileges.',
  keywords: 'JKKN alumni registration, alumni certificate, JKKN alumni membership, registration document, alumni association certificate, dental college alumni, official alumni document',
  openGraph: {
    title: 'Alumni Registration Certificate - JKKN Dental College',
    description: 'View JKKN Dental College Alumni Association registration certificate. Official documentation for registered alumni members and their privileges.',
    url: 'https://dental.jkkn.ac.in/alumni/alumni-registration-certificate/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/alumni/alumni-registration-certificate/');

export default function AlumniRegistrationCertificate() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/ALUMNI-Registration-Certificate.pdf" />
    </>
  );
}
