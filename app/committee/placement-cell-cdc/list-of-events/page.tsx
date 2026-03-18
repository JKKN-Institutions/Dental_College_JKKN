import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Placement Cell Events List | JKKN Dental College',
  description: 'View the comprehensive list of events organized by Career Development Center (CDC) for student training and placement activities.',
  keywords: 'placement events, CDC events, career development, training programs, placement activities, JKKN dental college, student events',
  openGraph: {
    title: 'Placement Cell Events List | JKKN Dental College',
    description: 'View the comprehensive list of events organized by Career Development Center (CDC) for student training and placement activities.',
    url: 'https://dental.jkkn.ac.in/committee/placement-cell-cdc/list-of-events/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/committee/placement-cell-cdc/list-of-events/');

export default function PlacementCellListOfEvents() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/LIST-OF-EVENTS-PLACEMENT-CELL- CDC.pdf" />
    </>
  );
}
