import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Curriculum Feedback - JKKN Dental College',
  description: 'Share your valuable curriculum feedback at JKKN Dental College. Help us improve academic programs and enhance learning experiences. Submit feedback now.',
  keywords: 'curriculum feedback, student feedback, academic improvement, course evaluation, JKKN dental feedback, curriculum review, educational assessment',
};

export default function CurriculumFeedback() {
  redirect('https://form.jotform.com/240432334247045');
}
