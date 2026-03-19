import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'MDS Periodontics Syllabus - JKKN Dental College',
  description: 'Review MDS Periodontics syllabus at JKKN Dental College. Advanced postgraduate training in periodontal health and gum disease management. Access now.',
  keywords: 'MDS periodontics syllabus, periodontics curriculum, gum disease treatment, postgraduate periodontics, MDS specialization, JKKN periodontics program',
  openGraph: {
    title: 'MDS Periodontics Syllabus - JKKN Dental College',
    description: 'Review MDS Periodontics syllabus at JKKN Dental College. Advanced postgraduate training in periodontal health and gum disease management. Access now.',
    url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MDSPeriodonticsSyllabus() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Syllabus', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/' },
        { name: 'MDS Periodontics', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/MDS-PERIODONTICS-Syllabus.pdf" />
    </>
  );
}
