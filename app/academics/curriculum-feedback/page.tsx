import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Curriculum Feedback - JKKN Dental College',
  description: 'Share your valuable curriculum feedback at JKKN Dental College. Help us improve academic programs and enhance learning experiences. Submit feedback now.',
  keywords: 'curriculum feedback, student feedback, academic improvement, course evaluation, JKKN dental feedback, curriculum review, educational assessment',
  openGraph: {
    title: 'Curriculum Feedback - JKKN Dental College',
    description: 'Share your valuable curriculum feedback at JKKN Dental College. Help us improve academic programs and enhance learning experiences. Submit feedback now.',
    url: 'https://dental.jkkn.ac.in/academics/curriculum-feedback/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

// Note: SpeakableSpecification schema not added — this page immediately redirects
// to the external JotForm URL and never renders HTML content.
export default function CurriculumFeedback() {
  redirect('https://form.jotform.com/240432334247045');
}
