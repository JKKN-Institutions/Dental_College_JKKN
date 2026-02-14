import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Calendar 2023-24 & 2024-25 | JKKN Dental College',
  description: 'View JKKN Dental College academic calendar 2023-24 & 2024-25. Check exam dates, holidays, events & important academic schedules. Plan your academic year effectively.',
  keywords: 'academic calendar, college calendar 2023-24, exam schedule, academic year, important dates',
};

export default function AcademicCalendar() {
  return (
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
  );
}
