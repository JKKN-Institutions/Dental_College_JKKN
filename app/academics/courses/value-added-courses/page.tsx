import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Value-Added Courses - JKKN Dental College',
  description: 'Discover value-added courses at JKKN Dental College. Enhance your skills beyond regular curriculum with specialized dental training programs. Explore now.',
  keywords: 'value-added courses, dental skill enhancement, specialized training, additional courses, dental certification, professional development, JKKN courses',
  openGraph: {
    title: 'Value-Added Courses - JKKN Dental College',
    description: 'Discover value-added courses at JKKN Dental College. Enhance your skills beyond regular curriculum with specialized dental training programs. Explore now.',
    url: 'https://dental.jkkn.ac.in/academics/courses/value-added-courses/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function ValueAddedCourses() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Courses', url: 'https://dental.jkkn.ac.in/academics/courses/' },
        { name: 'Value Added Courses', url: 'https://dental.jkkn.ac.in/academics/courses/value-added-courses/' },
      ]} />
      <PdfRedirect pdfUrl="/pdf/value-added-course.pdf" />
    </>
  );
}
