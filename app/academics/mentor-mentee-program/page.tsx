import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Mentor-Mentee Program at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mentor-Mentee Program at JKKN Dental College is a structured initiative where experienced faculty mentors guide and empower students across various disciplines to excel academically and professionally. It fosters a supportive learning environment, strengthens faculty-student relationships, and helps students develop discipline, communication, and professional skills.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the objectives of the Mentor-Mentee Program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mentor-Mentee Program at JKKN Dental College aims to cultivate a sense of belonging among students, enhance academic discipline and punctuality, provide personalized guidance for professional development, and support students in navigating challenges during their dental education journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who participates in the Mentor-Mentee Program at JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The program is designed for all students enrolled in the BDS and MDS programs at JKKN Dental College. Experienced faculty members serve as mentors, providing guidance on academic, clinical, and professional development matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Mentor-Mentee Program benefit dental students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The program provides dental students with personalized academic support, career guidance, and mentorship from experienced faculty. It helps students build confidence, develop professionalism, and improve both their clinical and interpersonal skills, contributing to a 92%+ placement rate for JKKN graduates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Mentor-Mentee Program available for both BDS and MDS students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Mentor-Mentee Program at JKKN Dental College is available to all students — both BDS (100 seats, 5-year program) and MDS (postgraduate, 3-year specializations). The program is designed to support students at every stage of their dental education.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Mentor-Mentee Program - JKKN Dental College',
  description: 'Discover our supportive mentor-mentee program at JKKN Dental College. Personalized guidance for academic and professional excellence. Join now.',
  keywords: 'mentor-mentee program, student mentorship, academic guidance, professional development, student support, JKKN mentoring, faculty-student relationship',
  openGraph: {
    title: 'Mentor-Mentee Program - JKKN Dental College',
    description: 'Discover our supportive mentor-mentee program at JKKN Dental College. Personalized guidance for academic and professional excellence. Join now.',
    url: 'https://dental.jkkn.ac.in/academics/mentor-mentee-program/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function MentorMenteeProgram() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/mentor-mentee-program/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Mentor-Mentee Program - JKKN Dental College',
    description: 'Discover our supportive mentor-mentee program at JKKN Dental College. Personalized guidance for academic and professional excellence. Join now.',
    url: 'https://dental.jkkn.ac.in/academics/mentor-mentee-program/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'Mentor Mentee Program', url: 'https://dental.jkkn.ac.in/academics/mentor-mentee-program/' },
      ]} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Hero Section */}
      <div className="bg-[#006837] pt-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide">
            MENTOR-MENTEE PROGRAM
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
          </div>
        </div>
        <div className="overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-16 block"
            fill="#FBFBEE"
          >
            <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-[#FBFBEE] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto pt-2">
          <div className="space-y-8">

            {/* Program Vision Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <h2 className="text-lg md:text-xl font-bold text-[#006837] mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-[#006837] rounded-full inline-block flex-shrink-0" />
                  Program Vision:
                </h2>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  Our vision for the Mentor-Mentee Program is to nurture a culture of mentorship and support that empowers learners across diverse fields to achieve excellence in their respective domains. We firmly believe that mentorship is an integral part of the educational journey, facilitating both mentees&apos; growth and mentors&apos; professional development.
                </p>
              </div>
            </div>

            {/* Program Overview Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <h2 className="text-lg md:text-xl font-bold text-[#006837] mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-[#006837] rounded-full inline-block flex-shrink-0" />
                  Program Overview:
                </h2>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  The Mentor-Mentee Program at JKKN Educational Institution is designed to foster a supportive learning environment where experienced mentors guide and empower learners (mentees) across various disciplines to excel academically and professionally. This program reflects our institution&apos;s commitment to providing holistic education and nurturing future leaders and professionals.
                </p>
              </div>
            </div>

            {/* Mentorship Objectives Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8">
                <h2 className="text-lg md:text-xl font-bold text-[#006837] mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-[#006837] rounded-full inline-block flex-shrink-0" />
                  Mentorship Objectives:
                </h2>
                <div className="space-y-4">
                  <div className="rounded-xl bg-[#FBFBEE] border-l-4 border-[#7cb983] p-4">
                    <p className="text-base text-gray-700 text-justify">
                      • Cultivate a Sense of Belonging: Create an inclusive atmosphere where mentees feel an integral part of the JKKN educational community, enhancing senior learner-learner relationships.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#FBFBEE] border-l-4 border-[#7cb983] p-4">
                    <p className="text-base text-gray-700 text-justify">
                      • Enhance Discipline and Excellence: Conduct mentoring sessions to install discipline, punctuality, and commitment to academic and personal growth among learners.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#FBFBEE] border-l-4 border-[#7cb983] p-4">
                    <p className="text-base text-gray-700 text-justify">
                      • Customized Learning: Tailor mentorship to learners based on their academic performance and individual needs, fostering optimal learning outcomes.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#FBFBEE] border-l-4 border-[#7cb983] p-4">
                    <p className="text-base text-gray-700 text-justify">
                      • Personalized Growth: Identify and leverage the strengths and weaknesses of each learner, assisting them in setting career goals and strategies for achievement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
