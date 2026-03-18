import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Alumni Association Activities - JKKN Dental College',
  description: 'Explore JKKN Dental College Alumni Association activities, events, and programs. Stay connected with fellow alumni and college initiatives.',
  keywords: 'JKKN alumni activities, dental college alumni, alumni association, alumni events, JKKN alumni programs, alumni network, dental graduates, alumni engagement, college reunions',
  openGraph: {
    title: 'Alumni Association Activities - JKKN Dental College',
    description: 'Explore JKKN Dental College Alumni Association activities, events, and programs. Stay connected with fellow alumni and college initiatives.',
    url: 'https://dental.jkkn.ac.in/alumni/alumni-association-activities/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/alumni/alumni-association-activities/');

export default function AlumniAssociationActivities() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/ALUMNI-ASSOCIATION-ACTIVITIES.pdf" />
    </>
  );
}
