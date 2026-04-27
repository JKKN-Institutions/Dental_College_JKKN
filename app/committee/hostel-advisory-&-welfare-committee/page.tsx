import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hostel Advisory & Welfare Committee | JKKN Dental College',
  description: 'Ensuring safe and conducive living environment for hostel students. View boys and girls hostel staff in-charge and welfare initiatives.',
  keywords: 'hostel advisory committee, hostel welfare, student accommodation, hostel staff, student safety, JKKN dental college, hostel facilities',
  openGraph: {
    title: 'Hostel Advisory & Welfare Committee | JKKN Dental College',
    description: 'Ensuring safe and conducive living environment for hostel students. View boys and girls hostel staff in-charge and welfare initiatives.',
    url: 'https://dental.jkkn.ac.in/committee/hostel-advisory-&-welfare-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function HostelAdvisoryWelfareCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/hostel-advisory-&-welfare-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Hostel Advisory & Welfare Committee - JKKN Dental College',
    description: 'Ensuring safe and conducive living environment for hostel students. View boys and girls hostel staff in-charge and welfare initiatives.',
    url: 'https://dental.jkkn.ac.in/committee/hostel-advisory-&-welfare-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Hostel Advisory & Welfare Committee | JKKN Dental College',
    description: 'Ensuring safe and conducive living environment for hostel students. View boys and girls hostel staff in-charge and welfare initiatives.',
    url: 'https://dental.jkkn.ac.in/committee/hostel-advisory-&-welfare-committee/',
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            HOSTEL ADVISORY &amp; WELFARE COMMITTEE
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="hero-description text-gray-700 text-base leading-relaxed text-justify font-semibold">
              The Hostel Advisory and Welfare Committee is a significant body within educational institutions responsible for overseeing the welfare and well-being of students residing in hostels. Comprising faculty members, hostel wardens, and student representatives, the committee addresses hostel-related concerns and ensures a safe and conducive living environment. It formulates and enforces hostel rules and regulations, promoting discipline and mutual respect. The committee also organizes recreational and cultural activities, fostering a sense of community and camaraderie among hostel residents. In addition, it addresses grievances and provides support to students facing challenges, striving to create a comfortable and supportive home-away-from-home experience for students living in the hostels.
            </p>
          </div>
        </div>
      </section>

      {/* Boys Hostel Staff */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6">
            Boys Hostel Staff Incharge
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Dr. N. Jegadeesan',
              'Dr. P.K. Sasikumar',
              'Dr. J. Vijaythiyagarajan',
              'Dr. N.S. Naveenraj',
              'Dr. S. Sivasuiryan',
            ].map((name) => (
              <div key={name} className="bg-[#FBFBEE] rounded-xl p-6 shadow-sm border border-green-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-bold text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Girls Hostel Staff */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6">
            Girls Hostel Staff Incharge
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Dr. M. Rekha',
              'Dr. K. Sakthisaranyadevi',
              'Dr. Linda Christabel',
              'Dr. R. Dhivya',
              'Dr. N. Kalaranjeni',
            ].map((name) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-bold text-sm">{name}</p>
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
