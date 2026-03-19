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

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
            MENTOR-MENTEE PROGRAM
          </h1>

          {/* Program Vision */}
          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-bold text-black mb-3">
              Program Vision:
            </h2>
            <p className="text-base leading-relaxed text-black text-justify">
              Our vision for the Mentor-Mentee Program is to nurture a culture of mentorship and support that empowers students across diverse fields to achieve excellence in their respective domains. We firmly believe that mentorship is an integral part of the educational journey, facilitating both mentees' growth and mentors' professional development.
            </p>
          </div>

          {/* Program Overview */}
          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-bold text-black mb-3">
              Program Overview:
            </h2>
            <p className="text-base leading-relaxed text-black text-justify">
              The Mentor-Mentee Program at JKKN Educational Institution is designed to foster a supportive learning environment where experienced mentors guide and empower students (mentees) across various disciplines to excel academically and professionally. This program reflects our institution's commitment to providing holistic education and nurturing future leaders and professionals.
            </p>
          </div>

          {/* Mentorship Objectives */}
          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-bold text-black mb-3">
              Mentorship Objectives:
            </h2>
            <div className="space-y-3">
              <p className="text-base text-black text-justify">
                • Cultivate a Sense of Belonging: Create an inclusive atmosphere where mentees feel an integral part of the JKKN educational community, enhancing faculty-student relationships.
              </p>
              <p className="text-base text-black text-justify">
                • Enhance Discipline and Excellence: Conduct mentoring sessions to install discipline, punctuality, and commitment to academic and personal growth among students.
              </p>
              <p className="text-base text-black text-justify">
                • Customized Learning: Tailor mentorship to students based on their academic performance and individual needs, fostering optimal learning outcomes.
              </p>
              <p className="text-base text-black text-justify">
                • Personalized Growth: Identify and leverage the strengths and weaknesses of each student, assisting them in setting career goals and strategies for achievement.
              </p>
            </div>
          </div>

         
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
