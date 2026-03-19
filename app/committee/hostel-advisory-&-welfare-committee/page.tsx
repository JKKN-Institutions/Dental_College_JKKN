import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

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

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D5E2E] mb-8">
            HOSTEL ADVISORY & WELFARE COMMITTEE
          </h1>

          {/* Description Paragraph */}
          <p className="text-base text-gray-700 mb-8 leading-relaxed text-justify font-semibold">
            The Hostel Advisory and Welfare Committee is a significant body within educational institutions responsible for overseeing the welfare and well-being of students residing in hostels. Comprising faculty members, hostel wardens, and student representatives, the committee addresses hostel-related concerns and ensures a safe and conducive living environment. It formulates and enforces hostel rules and regulations, promoting discipline and mutual respect. The committee also organizes recreational and cultural activities, fostering a sense of community and camaraderie among hostel residents. In addition, it addresses grievances and provides support to students facing challenges, striving to create a comfortable and supportive home-away-from-home experience for students living in the hostels.
          </p>

          {/* Boys Hostel Staff */}
          <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
            Boys Hostel Staff Incharge
          </h3>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. N. Jegadeesan
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. P.K. Sasikumar
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. J. Vijaythiyagarajan
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. N.S. Naveenraj
          </p>
          <p className="text-base text-gray-700 font-semibold mb-8 leading-relaxed">
            Dr. S. Sivasuiryan
          </p>

          {/* Girls Hostel Staff */}
          <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
            Girls Hostel Staff Incharge
          </h3>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. M. Rekha
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. K. Sakthisaranyadevi
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. Linda Christabel
          </p>
          <p className="text-base text-gray-700 font-semibold mb-2 leading-relaxed">
            Dr. R. Dhivya
          </p>
          <p className="text-base text-gray-700 font-semibold mb-12 leading-relaxed">
            Dr. N. Kalaranjeni
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
