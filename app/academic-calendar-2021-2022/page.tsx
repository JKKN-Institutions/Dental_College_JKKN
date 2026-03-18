import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Academic Calendar 2021-22 | JKKN Dental College Schedule',
  description: 'View JKKN Dental College academic calendar 2021-22. Check past exam dates, holidays and academic events. Access archived academic schedule PDF.',
  keywords: 'academic calendar 2021-22, college calendar, exam schedule, academic year, archived calendar',
  openGraph: {
    title: 'Academic Calendar 2021-22 | JKKN Dental College Schedule',
    description: 'View JKKN Dental College academic calendar 2021-22. Check past exam dates, holidays and academic events. Access archived academic schedule PDF.',
    url: 'https://dental.jkkn.ac.in/academic-calendar-2021-2022/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AcademicCalendar20212022() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academic-calendar-2021-2022');

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="/pdf/Academic-calender-2021-2022.pdf"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  );
}
