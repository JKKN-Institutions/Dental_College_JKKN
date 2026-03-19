import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Girls Hostel | JKKN Dental Campus',
  description: 'JKKN girls hostel features 24/7 security, CCTV surveillance, attached bathrooms, gym, yoga room, and on-campus convenience for female dental students.',
  keywords: 'girls hostel JKKN, safe hostel for girls, women hostel dental college, secure accommodation, female students housing, on-campus girls hostel, CCTV hostel',
  openGraph: {
    title: 'Girls Hostel | JKKN Dental Campus',
    description: 'JKKN girls hostel features 24/7 security, CCTV surveillance, attached bathrooms, gym, yoga room, and on-campus convenience for female dental students.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/girls-hostel/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the girls hostel at JKKN Dental College safe and secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the Girls Hostel at JKKN Dental College maintains the highest security standards. The hostel features 24/7 security personnel, comprehensive CCTV surveillance, and access control systems. A strict no-visitor policy is enforced for added safety. The hostel is located within the JKKN campus itself, providing an additional layer of security and peace of mind for both students and parents."
      }
    },
    {
      "@type": "Question",
      "name": "What facilities are available in the girls hostel at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Girls Hostel at JKKN Dental College offers on-campus accommodation with rooms featuring comfortable beds, study tables, and ample storage. Air-conditioned rooms are available upon request. Each room has an attached bathroom for privacy. Additional facilities include high-speed internet connectivity, 24/7 electricity and water supply, a well-equipped gymnasium, a yoga room, a sports complex, and round-the-clock staff support."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a separate mess for the girls hostel at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College provides dining facilities for girls hostel residents. For specific details about mess arrangements, meal timings, and whether food is included in the hostel fee, please contact the hostel or admissions office at +91 93458 55001 or email dental@jkkn.ac.in."
      }
    },
    {
      "@type": "Question",
      "name": "Are visitors allowed in the JKKN Dental College girls hostel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The JKKN Dental College Girls Hostel enforces a strict no-visitor policy to ensure the safety and security of all residents. This policy is part of the hostel's comprehensive security measures, which also include 24/7 CCTV surveillance and access control systems. Parents may be permitted to visit during designated hours — contact the hostel warden for current visitor guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What is the girls hostel fee at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Girls hostel fees at JKKN Dental College vary based on room type and selected amenities (including AC or non-AC options). Hostel accommodation is optional and charged separately from tuition fees. For the current fee structure, contact the admissions office at +91 93458 55001 or email dental@jkkn.ac.in."
      }
    }
  ]
};

export default function GirlsHostel() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/hostel/girls-hostel');
  const webPageSchema = generateWebPageSchema({
    title: 'Girls Hostel | JKKN Dental Campus',
    description: 'JKKN girls hostel features 24/7 security, CCTV surveillance, attached bathrooms, gym, yoga room, and on-campus convenience for female dental students.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/girls-hostel/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Girls Hostel | JKKN Dental Campus',
    description: 'JKKN girls hostel features 24/7 security, CCTV surveillance, attached bathrooms, gym, yoga room, and on-campus convenience for female dental students.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/girls-hostel/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
           {/* Main Heading */}
           <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            Girls Hostel
          </h1>
          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/girls-hostel-1.jpg"
                alt="Girls hostel building exterior"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/girls-hostel-2.jpg"
                alt="Girls hostel campus view"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/girls-hostel-3.jpg"
                alt="Girls hostel dining area"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            <strong>Nestled within the vibrant JKKN campus, our Girls Hostel offers an inviting and secure environment that is meticulously designed to support the unique needs of our female students. Equipped with modern amenities, the hostel serves as a sanctuary where academic dreams and personal well-being flourish in harmony.</strong>
          </p>

          {/* Location and Facilities */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Location and Facilities:
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              <strong>On-Campus Convenience:</strong> Located within the JKKN campus, the hostel ensures that students have immediate access to educational and recreational facilities.
            </p>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              <strong>Choice and Comfort:</strong> Rooms come with essential furnishings—comfortable beds, study tables, and ample storage. Air-conditioned rooms are available upon request.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Self-Contained Living:</strong> Each room boasts an attached bathroom, providing a personal space that respects privacy.
            </p>
          </div>

          {/* Academic and Personal Support */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Academic and Personal Support:
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              <strong>Round-the-Clock Utilities:</strong> Continuous electricity and water supply mean you're never left without essential services.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Internet Connectivity:</strong> Robust high-speed internet aids in uninterrupted research and study, aligning with our mission of academic excellence.
            </p>
          </div>

          {/* Security and Wellness */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Security and Wellness:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Impenetrable Security:</strong> The hostel features 24/7 security, CCTV surveillance, and access control systems. A strict no-visitor policy is enforced for added safety.
            </p>
          </div>

          {/* Holistic Wellness */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Holistic Wellness:
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              <strong>Committed to promoting a balanced lifestyle, we offer a well-equipped gymnasium, yoga room, and sports complex within the hostel premises.</strong>
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Step into our Girls Hostel and become part of a growing community of empowered female students who embody JKKN's values of academic rigor, personal growth, and mutual respect.</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
