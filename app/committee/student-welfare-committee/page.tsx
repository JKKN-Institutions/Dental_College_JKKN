import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learner Welfare Committee | JKKN Dental College',
  description: 'Dedicated to learner well-being, academic support, and overall welfare. View committee members committed to learner success.',
  keywords: 'learner welfare committee, learner wellbeing, academic support, learner care, welfare programs, JKKN dental college, learner services',
  openGraph: {
    title: 'Learner Welfare Committee | JKKN Dental College',
    description: 'Dedicated to learner well-being, academic support, and overall welfare. View committee members committed to learner success.',
    url: 'https://dental.jkkn.ac.in/committee/student-welfare-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function StudentWelfareCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/student-welfare-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Learner Welfare Committee - JKKN Dental College',
    description: 'Dedicated to learner well-being, academic support, and overall welfare. View committee members committed to learner success.',
    url: 'https://dental.jkkn.ac.in/committee/student-welfare-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Learner Welfare Committee | JKKN Dental College',
    description: 'Dedicated to learner well-being, academic support, and overall welfare. View committee members committed to learner success.',
    url: 'https://dental.jkkn.ac.in/committee/student-welfare-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  const members = [
    '1 .Managing Director-Mr.Ommsharravana (Chair)',
    '2. C hief Administrative Offi cer- Mr. K. M. Raj endiran',
    '3. Principal-Prof. Dr. Dhanasekar B-( Member secretary)',
    '4. Prof.Dr.Sasirekha',
    '5. Prof.Sai Sadan',
    '6.Dr. Jagadeesh',
    'T.Dr.Chris Susan',
  ];

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
            LEARNER WELFARE COMMITTEE
          </h1>
        </div>
      </section>

      {/* Members */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member) => (
              <div key={member} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-semibold text-sm leading-relaxed">{member}</p>
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
