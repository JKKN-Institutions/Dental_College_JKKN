import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'SGRC - Learner Grievance | JKKN Dental College',
  description: 'Addressing learner grievances and concerns through fair and transparent redressal mechanism. View SGRC committee details and procedures.',
  keywords: 'learner grievance, SGRC, complaint redressal, learner issues, grievance committee, JKKN dental college, learner support',
  openGraph: {
    title: 'SGRC - Learner Grievance | JKKN Dental College',
    description: 'Addressing learner grievances and concerns through fair and transparent redressal mechanism. View SGRC committee details and procedures.',
    url: 'https://dental.jkkn.ac.in/committee/student-grievance-redressal-committee-sgrc/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/committee/student-grievance-redressal-committee-sgrc/');

export default function StudentGrievanceRedressalCommittee() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PdfRedirect pdfUrl="/pdf/Student-Grievance-residencial-committee.pdf" />
    </>
  );
}
