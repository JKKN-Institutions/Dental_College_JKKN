import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

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

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            MENTORING COMMITTEE
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983] mb-10">
            <p className="hero-description text-gray-700 text-base leading-relaxed text-justify">
              The Mentoring Committee is a crucial body within educational institutions focused on providing guidance, support, and mentorship to students and faculty members. Comprising experienced educators, administrators, and sometimes external experts, the committee fosters a culture of mentorship and personal development. The committee also oversees , promoting professional growth and teaching excellence. It plays a pivotal role in nurturing a positive learning environment, fostering individual growth, and building strong relationships within the educational community. Through mentorship, the committee aims to empower individuals to achieve their full potential and succeed in their academic and professional pursuit.
            </p>
          </div>

          {/* Committee Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: '1.Chairman', name: 'Dr. B . Dhanasekar' },
              { label: '2.Co-Chairman', name: 'Dr.B. Sasirekha' },
              { label: '3.Executive members', name: 'Dr. Sai Sadan' },
              { label: '4.', name: 'Dr. Santhosh' },
              { label: '5.', name: 'Dr. Dhinesh Kumar.T' },
              { label: '6.', name: 'Dr. Karkuzhali' },
              { label: '7.', name: 'Dr. Venilla' },
            ].map(({ label, name }) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#7cb983] uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-[#002309] font-bold text-sm">{name}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
