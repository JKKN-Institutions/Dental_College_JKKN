import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'MDS Prosthodontics Syllabus - JKKN Dental College',
  description: 'Access MDS Prosthodontics syllabus at JKKN Dental College. Specialized postgraduate program in dental prosthetics and restorative dentistry. View details.',
  keywords: 'MDS prosthodontics syllabus, prosthodontics curriculum, dental prosthetics, restorative dentistry, postgraduate prosthodontics, JKKN MDS program',
  openGraph: {
    title: 'MDS Prosthodontics Syllabus - JKKN Dental College',
    description: 'Access MDS Prosthodontics syllabus at JKKN Dental College. Specialized postgraduate program in dental prosthetics and restorative dentistry. View details.',
    url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MDSProsthodonticsSyllabus() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Syllabus', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/' },
        { name: 'MDS Prosthodontics', url: 'https://dental.jkkn.ac.in/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/MDS- PROSTHODONTICS-syllabus.pdf" />
    </>
  );
}
