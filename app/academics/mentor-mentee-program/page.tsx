import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

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
