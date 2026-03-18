import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Academic Calendar 2023-24 & 2024-25 | JKKN Dental College',
  description: 'View JKKN Dental College academic calendar 2023-24 & 2024-25. Check exam dates, holidays, events & important academic schedules. Plan your academic year effectively.',
  keywords: 'academic calendar, college calendar 2023-24, exam schedule, academic year, important dates',
  openGraph: {
    title: 'Academic Calendar 2023-24 & 2024-25 | JKKN Dental College',
    description: 'View JKKN Dental College academic calendar 2023-24 & 2024-25. Check exam dates, holidays, events & important academic schedules. Plan your academic year effectively.',
    url: 'https://dental.jkkn.ac.in/academic-calendar-2023-2024-2024-2025/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AcademicCalendar() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Academic Calendar 2023-24 & 2024-25 | JKKN Dental College',
    description: 'View JKKN Dental College academic calendar 2023-24 & 2024-25. Check exam dates, holidays, events & important academic schedules. Plan your academic year effectively.',
    url: 'https://dental.jkkn.ac.in/academic-calendar-2023-2024-2024-2025/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academic Calendar 2023-2025', url: 'https://dental.jkkn.ac.in/academic-calendar-2023-2024-2024-2025/' },
      ]} />
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="https://calendar.google.com/calendar/u/0/embed?src=c_a87ef5523f0037f72793de0a608042f30ce62ca343535fa73face6f00c501792@group.calendar.google.com&ctz=Asia/Kolkata&mode=AGENDA"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
