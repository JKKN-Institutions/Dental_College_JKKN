import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { BookOpen, Target, Calendar, Trophy, Handshake, Plus, Gem, MessageCircle, LucideIcon } from 'lucide-react';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What academic programs does JKKN Dental College offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College offers two DCI-approved programs: BDS (Bachelor of Dental Surgery) — a 5-year undergraduate program with 100 seats — and MDS (Master of Dental Surgery) — a 3-year postgraduate program with 5 specializations including Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry & Endodontics, and Oral Medicine & Radiology.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seats are available in the BDS program at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The BDS program at JKKN Dental College has 100 seats. The 5-year program includes 4 years of academic and clinical training followed by 1 year of compulsory rotatory internship.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the MDS specializations offered at JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College offers 5 MDS specializations: Periodontics (4 seats), Orthodontics & Dentofacial Orthopedics (4 seats), Prosthodontics Crown & Bridge (4 seats), Conservative Dentistry & Endodontics (3 seats), and Oral Medicine & Radiology (3 seats) — totaling 18 MDS seats.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the eligibility requirement for BDS admission at JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Admission to the BDS program at JKKN Dental College requires a valid NEET-UG score. The college is affiliated to TN Dr. MGR Medical University and follows DCI-prescribed admission norms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the placement rate for dental graduates from JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College maintains a 92%+ placement rate across all programs. Graduates are placed in leading hospitals, dental clinics, and healthcare organizations in India and internationally, including opportunities in the UK (NHS), UAE, and Saudi Arabia.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Academics - JKKN Dental College & Hospital',
  description: 'Explore academic programs at JKKN Dental College. BDS undergraduate program, 5 MDS postgraduate specializations, comprehensive curriculum, and excellence in dental education.',
  keywords: 'JKKN academics, BDS program, MDS specializations, dental education, curriculum, postgraduate dental courses, undergraduate dentistry, DCI approved programs',
  openGraph: {
    title: 'Academics - JKKN Dental College & Hospital',
    description: 'Explore academic programs at JKKN Dental College. BDS undergraduate program, 5 MDS postgraduate specializations, comprehensive curriculum, and excellence in dental education.',
    url: 'https://dental.jkkn.ac.in/academics/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function Academics() {
  const breadcrumbSchema = generateBreadcrumbSchema('/academics/');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Academics - JKKN Dental College & Hospital',
    description: 'Explore academic programs at JKKN Dental College. BDS undergraduate program, 5 MDS postgraduate specializations, comprehensive curriculum, and excellence in dental education.',
    url: 'https://dental.jkkn.ac.in/academics/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
      ]} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#7cb983] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Academic Programs
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive dental education with DCI-approved programs designed to create skilled dental professionals
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 px-4 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* BDS Program */}
            <Link href="/academics/details-of-academic-programs/bds" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#7cb983] h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#7cb983] text-white w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold">
                    BDS
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#006837]">Bachelor of Dental Surgery</h2>
                    <p className="text-gray-600">5-Year Undergraduate Program</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive undergraduate program with 100 seats. Includes 4 years of academic training plus 1-year compulsory rotatory internship. DCI approved curriculum with extensive clinical exposure.
                </p>
                <div className="flex items-center text-[#7cb983] font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More →
                </div>
              </div>
            </Link>

            {/* MDS Programs */}
            <Link href="/academics/details-of-academic-programs/mds" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#7cb983] h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#006837] text-white w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold">
                    MDS
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#006837]">Master of Dental Surgery</h2>
                    <p className="text-gray-600">3-Year Postgraduate Programs</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  5 DCI-approved MDS specializations with 18 total seats. Advanced postgraduate training in specialized fields with research, dissertation, and comprehensive clinical practice.
                </p>
                <div className="flex items-center text-[#7cb983] font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Specializations →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* MDS Specializations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-12 text-center">
            MDS Specializations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Periodontics',
                seats: 4,
                href: '/academics/details-of-academic-programs/mds/periodontics',
                description: 'Gum diseases, dental implants, and periodontal surgery'
              },
              {
                name: 'Orthodontics & Dentofacial Orthopedics',
                seats: 4,
                href: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics',
                description: 'Teeth alignment, malocclusion correction, and facial aesthetics'
              },
              {
                name: 'Prosthodontics Crown & Bridge',
                seats: 4,
                href: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge',
                description: 'Dental prosthetics, crowns, bridges, and implantology'
              },
              {
                name: 'Conservative Dentistry & Endodontics',
                seats: 3,
                href: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics',
                description: 'Root canal treatment, tooth preservation, and aesthetic dentistry'
              },
              {
                name: 'Oral Medicine & Radiology',
                seats: 3,
                href: '/academics/details-of-academic-programs/mds/oral-medicine',
                description: 'Oral diagnosis, dental imaging, and radiology'
              },
            ].map((spec, index) => (
              <Link key={index} href={spec.href} className="group">
                <div className="bg-[#FBF8F3] rounded-xl p-6 hover:bg-[#7cb983] hover:text-white transition-all duration-300 h-full border-2 border-transparent hover:border-[#006837]">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold group-hover:text-white text-[#006837]">
                      {spec.name}
                    </h3>
                    <span className="bg-[#7cb983] group-hover:bg-white group-hover:text-[#006837] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {spec.seats} Seats
                    </span>
                  </div>
                  <p className="text-gray-600 group-hover:text-white text-sm">
                    {spec.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-16 px-4 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-12 text-center">
            Academic Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Curriculum & Syllabus',
                href: '/academics/statutes-pertaining-to-academic-departments/bds-syllabus',
                icon: BookOpen,
                description: 'Comprehensive curriculum details'
              },
              {
                title: 'Learning Outcomes',
                href: '/academics/learning-outcomes',
                icon: Target,
                description: 'Program learning objectives'
              },
              {
                title: 'Academic Calendar',
                href: '/academic-calendar-2023-2024-2024-2025',
                icon: Calendar,
                description: 'Important dates and schedules'
              },
              {
                title: 'Faculty Achievements',
                href: '/academics/faculty-achievements/webinar-conferences-attended',
                icon: Trophy,
                description: 'Faculty recognition and awards'
              },
              {
                title: 'Mentor-Mentee Program',
                href: '/academics/mentor-mentee-program',
                icon: Handshake,
                description: 'Student guidance and support'
              },
              {
                title: 'Add-On Courses',
                href: '/academics/courses/add-on-courses',
                icon: Plus,
                description: 'Additional skill development'
              },
              {
                title: 'Value-Added Courses',
                href: '/academics/courses/value-added-courses',
                icon: Gem,
                description: 'Enhanced learning programs'
              },
              {
                title: 'Curriculum Feedback',
                href: '/academics/curriculum-feedback',
                icon: MessageCircle,
                description: 'Student and stakeholder input'
              },
            ].map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-4"><resource.icon className="w-10 h-10 text-[#006837]" /></div>
                  <h3 className="text-lg font-bold text-[#006837] mb-2 group-hover:text-[#7cb983]">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {resource.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#006837] to-[#7cb983]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Dental Education Journey?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join JKKN Dental College and embark on a rewarding career in dentistry with comprehensive academic programs and excellent clinical training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              className="bg-white hover:bg-gray-100 text-[#006837] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#006837] text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
