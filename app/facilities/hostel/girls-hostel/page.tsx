import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { MapPin, Wifi, ShieldCheck, Heart } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/facilities/hostel/girls-hostel/' },
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
        "text": "Girls hostel fee at JKKN Dental College: AC Room — ₹30,000/Year. Classic Mess and Premium Mess are not applicable for Dental college students. Hostel accommodation is optional and charged separately from tuition fees. For the current fee structure, contact the admissions office at +91 93458 55001 or email dental@jkkn.ac.in."
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

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Girls Hostel
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/girls-hostel-1.jpg"
                alt="Girls hostel building exterior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/girls-hostel-2.jpg"
                alt="Girls hostel campus view"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/girls-hostel-3.jpg"
                alt="Girls hostel dining area"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            <strong>Nestled within the vibrant JKKN campus, our Girls Hostel offers an inviting and secure environment that is meticulously designed to support the unique needs of our female learners. Equipped with modern amenities, the hostel serves as a sanctuary where academic dreams and personal well-being flourish in harmony.</strong>
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Location and Facilities */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Location and Facilities:</h2>
            <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">
              <p><strong>On-Campus Convenience:</strong> Located within the JKKN campus, the hostel ensures that learners have immediate access to educational and recreational facilities.</p>
              <p><strong>Choice and Comfort:</strong> Rooms come with essential furnishings—comfortable beds, study tables, and ample storage. Air-conditioned rooms are available upon request.</p>
              <p><strong>Self-Contained Living:</strong> Each room boasts an attached bathroom, providing a personal space that respects privacy.</p>
            </div>
          </div>

          {/* Academic and Personal Support */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Wifi className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Academic and Personal Support:</h2>
            <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">
              <p><strong>Round-the-Clock Utilities:</strong> Continuous electricity and water supply mean you&apos;re never left without essential services.</p>
              <p><strong>Internet Connectivity:</strong> Robust high-speed internet aids in uninterrupted research and study, aligning with our mission of academic excellence.</p>
            </div>
          </div>

          {/* Security and Wellness */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Security and Wellness:</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Impenetrable Security:</strong> The hostel features 24/7 security, CCTV surveillance, and access control systems. A strict no-visitor policy is enforced for added safety.
            </p>
          </div>

          {/* Holistic Wellness */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Heart className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Holistic Wellness:</h2>
            <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">
              <p><strong>Committed to promoting a balanced lifestyle, we offer a well-equipped gymnasium, yoga room, and sports complex within the hostel premises.</strong></p>
              <p><strong>Step into our Girls Hostel and become part of a growing community of empowered female learners who embody JKKN&apos;s values of academic rigor, personal growth, and mutual respect.</strong></p>
            </div>
          </div>

        </div>
      </section>

      <FaqAccordion schema={faqSchema} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
