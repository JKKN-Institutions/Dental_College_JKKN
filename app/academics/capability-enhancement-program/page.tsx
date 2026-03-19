import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Capability Enhancement Program at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Capability Enhancement Program at JKKN Dental College is a comprehensive development scheme designed to complement dental education with essential life and professional skills. It includes soft skill development, language and communication training, yoga and wellness, analytical skill development, human value development, personality development, and employability skill development.',
      },
    },
    {
      '@type': 'Question',
      name: 'What skills are developed under the Capability Enhancement Program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Capability Enhancement Program at JKKN Dental College develops 7 key areas: (1) Soft skills, (2) Language and communication skills, (3) Yoga and wellness, (4) Analytical thinking, (5) Human values, (6) Personality and professional development, and (7) Employability skills. These complement the core BDS and MDS dental curriculum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the Capability Enhancement Program important for dental students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental professionals need more than clinical expertise — effective communication, professional conduct, analytical thinking, and wellness management are critical for patient care and career success. The Capability Enhancement Program at JKKN Dental College ensures graduates are well-rounded professionals, contributing to the college\'s 92%+ placement rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Capability Enhancement Program mandatory for BDS students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Capability Enhancement Program is integrated into the student development framework at JKKN Dental College. It is designed to support all students enrolled in the BDS (100 seats) and MDS programs, preparing them for both clinical practice and professional careers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Capability Enhancement Program improve employability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By developing communication, analytical, and professional skills alongside dental expertise, the Capability Enhancement Program makes JKKN Dental College graduates more competitive in the job market. The college maintains a 92%+ placement rate, with graduates placed in leading hospitals and healthcare organizations across India and internationally.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Capability Enhancement Program - JKKN Dental College',
  description: 'Comprehensive capability enhancement programs at JKKN Dental College. Soft skills, analytical thinking, and professional development for students. Explore now.',
  keywords: 'capability enhancement, soft skill development, dental student training, professional development, analytical skills, communication skills, employability skills',
  openGraph: {
    title: 'Capability Enhancement Program - JKKN Dental College',
    description: 'Comprehensive capability enhancement programs at JKKN Dental College. Soft skills, analytical thinking, and professional development for students. Explore now.',
    url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function CapabilityEnhancementProgram() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/capability-enhancement-program/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Capability Enhancement Program - JKKN Dental College',
    description: 'Comprehensive capability enhancement programs at JKKN Dental College. Soft skills, analytical thinking, and professional development for students. Explore now.',
    url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Capability enhancement Program</span>
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Capability enhancement Program
          </h1>

          {/* Description */}
          <p className="text-base text-black mb-6">
            1.2 Capability enhancement and development schemes employed by the Institution for students:
          </p>

          {/* List of Programs */}
          <div className="mb-8">
            <p className="text-base text-gray-700 font-semibold mb-3">
              1. Soft skill development
            </p>
            <p className="text-base text-gray-700 font-semibold mb-3">
              2. Language and communication skill development
            </p>
            <p className="text-base text-gray-700 font-semibold mb-3">
              3. Yoga and wellness
            </p>
            <p className="text-base text-gray-700 font-semibold mb-3">
              4. Analytical skill development
            </p>
            <p className="text-base text-gray-700 font-semibold mb-3">
              5. Human value development
            </p>
            <p className="text-base text-gray-700 font-semibold mb-3">
              6. Personality and professional development
            </p>
            <p className="text-base text-gray-700 font-semibold mb-8">
              7. Employability skill development
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/view-capability-enhancement-document"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded transition-colors duration-200"
            >
              View Document
            </a>
            <a
              href="/neet-qualifiers"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded transition-colors duration-200"
            >
              Neet Qualifiers
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
