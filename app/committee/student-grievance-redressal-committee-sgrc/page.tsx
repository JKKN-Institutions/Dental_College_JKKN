import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Student Grievance Redressal Committee (SGRC) | JKKN Dental College',
  description: 'Addressing student grievances and concerns through fair and transparent redressal mechanism. View SGRC committee details and procedures.',
  keywords: 'student grievance, SGRC, complaint redressal, student issues, grievance committee, JKKN dental college, student support',
};

export default function StudentGrievanceRedressalCommittee() {
  return <PdfRedirect pdfUrl="/pdf/Student-Grievance-residencial-committee.pdf" />;
}
