import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Cross-Cutting Issues in Dental Education - JKKN Dental College',
  description: 'Explore cross-cutting issues and interdisciplinary topics in dental education at JKKN Dental College. Comprehensive curriculum coverage. View details.',
  keywords: 'cross-cutting issues, interdisciplinary dental education, comprehensive curriculum, dental education topics, JKKN academics, holistic dental training',
  openGraph: {
    title: 'Cross-Cutting Issues in Dental Education - JKKN Dental College',
    description: 'Explore cross-cutting issues and interdisciplinary topics in dental education at JKKN Dental College. Comprehensive curriculum coverage. View details.',
    url: 'https://dental.jkkn.ac.in/academics/courses/cross-cutting-issues/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function CrossCuttingIssues() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Courses', url: 'https://dental.jkkn.ac.in/academics/courses/' },
        { name: 'Cross Cutting Issues', url: 'https://dental.jkkn.ac.in/academics/courses/cross-cutting-issues/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/cross-cutting-issues.pdf" />
    </>
  );
}
