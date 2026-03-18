import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Academic Calendar 2019-20 | JKKN Dental College Schedule',
  description: 'View JKKN Dental College academic calendar 2019-20. Check past exam dates, holidays and academic events. Access archived academic schedule PDF.',
  keywords: 'academic calendar 2019-20, college calendar, exam schedule, academic year, archived calendar',
  openGraph: {
    title: 'Academic Calendar 2019-20 | JKKN Dental College Schedule',
    description: 'View JKKN Dental College academic calendar 2019-20. Check past exam dates, holidays and academic events. Access archived academic schedule PDF.',
    url: 'https://dental.jkkn.ac.in/academic-calendar-2019-2020/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AcademicCalendar20192020() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academic Calendar 2019-2020', url: 'https://dental.jkkn.ac.in/academic-calendar-2019-2020/' },
      ]} />
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="/pdf/Academic-calender-2019-2020.pdf"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  );
}
