import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Mentoring Committee | JKKN Dental College',
  description: 'Providing guidance, support, and mentorship to students and faculty. Fostering personal development and academic excellence.',
  keywords: 'mentoring committee, student mentorship, faculty guidance, personal development, academic support, JKKN dental college, mentor program',
  openGraph: {
    title: 'Mentoring Committee | JKKN Dental College',
    description: 'Providing guidance, support, and mentorship to students and faculty. Fostering personal development and academic excellence.',
    url: 'https://dental.jkkn.ac.in/committee/mentoring-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MentoringCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/mentoring-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Mentoring Committee - JKKN Dental College',
    description: 'Providing guidance, support, and mentorship to students and faculty. Fostering personal development and academic excellence.',
    url: 'https://dental.jkkn.ac.in/committee/mentoring-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Mentoring Committee | JKKN Dental College',
    description: 'Providing guidance, support, and mentorship to students and faculty. Fostering personal development and academic excellence.',
    url: 'https://dental.jkkn.ac.in/committee/mentoring-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            MENTORING COMMITTEE
          </h1>

          {/* Description Paragraph */}
          <p className="text-base text-black mb-8 leading-relaxed text-justify">
            The Mentoring Committee is a crucial body within educational institutions focused on providing guidance, support, and mentorship to students and faculty members. Comprising experienced educators, administrators, and sometimes external experts, the committee fosters a culture of mentorship and personal development. The committee also oversees , promoting professional growth and teaching excellence. It plays a pivotal role in nurturing a positive learning environment, fostering individual growth, and building strong relationships within the educational community. Through mentorship, the committee aims to empower individuals to achieve their full potential and succeed in their academic and professional pursuit.
          </p>

          {/* Committee Members */}
          <p className="text-base text-black mb-4 leading-relaxed">
            1.Chairman – Dr. B . Dhanasekar
          </p>

          <p className="text-base text-black mb-4 leading-relaxed">
            2.Co-Chairman – Dr.B. Sasirekha
          </p>

          <p className="text-base text-black mb-4 leading-relaxed">
            3.Executive members – Dr. Sai Sadan
          </p>

          <p className="text-base text-black mb-4 leading-relaxed">
            4. Dr. Santhosh
          </p>

          <p className="text-base text-black mb-4 leading-relaxed">
            5. Dr. Dhinesh Kumar.T
          </p>

          <p className="text-base text-black mb-4 leading-relaxed">
            6. Dr. Karkuzhali
          </p>

          <p className="text-base text-black mb-12 leading-relaxed">
            7.Dr. Venilla
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
