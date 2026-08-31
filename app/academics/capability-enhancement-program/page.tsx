import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
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
        text: 'Dental professionals need more than clinical expertise — effective communication, professional conduct, analytical thinking, and wellness management are critical for patient care and career success. The Capability Enhancement Program at JKKN Dental College ensures graduates are well-rounded professionals, contributing to the college\'s 92% placement rate (2024-25 batch).',
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
        text: 'By developing communication, analytical, and professional skills alongside dental expertise, the Capability Enhancement Program makes JKKN Dental College graduates more competitive in the job market. The college maintains a 92% placement rate (2024-25 batch), with graduates placed in leading hospitals and healthcare organizations across India and internationally.',
      },
    },
  ],
};

export const metadata: Metadata = {
  alternates: { canonical: '/academics/capability-enhancement-program/' },
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

const programs = [
  'Soft skill development',
  'Language and communication skill development',
  'Yoga and wellness',
  'Analytical skill development',
  'Human value development',
  'Personality and professional development',
  'Employability skill development',
];

export default function CapabilityEnhancementProgram() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/capability-enhancement-program/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Capability Enhancement Program - JKKN Dental College',
    description: 'Comprehensive capability enhancement programs at JKKN Dental College. Soft skills, analytical thinking, and professional development for students. Explore now.',
    url: 'https://dental.jkkn.ac.in/academics/capability-enhancement-program/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-white/60 flex items-center gap-2">
            <span>Home</span>
            <span>›</span>
            <span className="text-white/90">Capability enhancement Program</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-wide">
            Capability enhancement Program
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-6 rounded-full" />
          <p className="hero-description text-white/85 text-base md:text-lg leading-relaxed max-w-3xl">
            1.2 Capability enhancement and development schemes employed by the Institution for learners:
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 hover:shadow-md hover:border-[#7cb983]/40 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#006837] text-white flex items-center justify-center font-bold text-base leading-none">
                  {index + 1}
                </div>
                <p className="text-[#002309] font-semibold text-sm md:text-base leading-snug">
                  {program}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/pdf/Capability-Enhancement-Program-ViewDocument.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006837] hover:bg-[#005a2f] text-white font-semibold py-3 px-12 rounded-xl transition-colors duration-200 shadow-sm"
            >
              View Document
            </a>
            <a
              href="/pdf/Capability-Enhancement-Program-NeetQualifiers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-[#FBFBEE] text-[#006837] font-semibold py-3 px-12 rounded-xl border-2 border-[#006837] transition-colors duration-200"
            >
              Neet Qualifiers
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion schema={faqSchema} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
