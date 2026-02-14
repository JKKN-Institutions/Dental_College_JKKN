import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Placement Cell Events List | JKKN Dental College',
  description: 'View the comprehensive list of events organized by Career Development Center (CDC) for student training and placement activities.',
  keywords: 'placement events, CDC events, career development, training programs, placement activities, JKKN dental college, student events',
};

export default function PlacementCellListOfEvents() {
  return <PdfRedirect pdfUrl="/pdf/LIST-OF-EVENTS-PLACEMENT-CELL- CDC.pdf" />;
}
