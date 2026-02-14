import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Alumni Association Activities - JKKN Dental College',
  description: 'Explore JKKN Dental College Alumni Association activities, events, and programs. Stay connected with fellow alumni and college initiatives.',
  keywords: 'JKKN alumni activities, dental college alumni, alumni association, alumni events, JKKN alumni programs, alumni network, dental graduates, alumni engagement, college reunions',
};

export default function AlumniAssociationActivities() {
  return <PdfRedirect pdfUrl="/pdf/ALUMNI-ASSOCIATION-ACTIVITIES.pdf" />;
}
