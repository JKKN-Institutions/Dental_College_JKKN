import { Metadata } from 'next';
import { PdfRedirect } from '@/components/pdf-redirect';

export const metadata: Metadata = {
  title: 'Value-Added Courses - JKKN Dental College',
  description: 'Discover value-added courses at JKKN Dental College. Enhance your skills beyond regular curriculum with specialized dental training programs. Explore now.',
  keywords: 'value-added courses, dental skill enhancement, specialized training, additional courses, dental certification, professional development, JKKN courses',
};

export default function ValueAddedCourses() {
  return <PdfRedirect pdfUrl="/pdf/value-added-course.pdf" />;
}
