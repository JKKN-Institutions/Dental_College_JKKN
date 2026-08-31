import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { BookOpen, GraduationCap, Monitor, Search, Calendar, Users, Clock, Star } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/facilities/library/' },
  title: 'Library Facilities | Digital Library | JKKN Dental College',
  description: 'JKKN Dental College library: extensive dental textbooks, journals, research papers, e-resources, and digital library facilities for students and faculty.',
  keywords: 'dental library, digital library, dental textbooks, research journals, e-library, dental resources',
  openGraph: {
    title: 'Library Facilities | Digital Library | JKKN Dental College',
    description: 'JKKN Dental College library: extensive dental textbooks, journals, research papers, e-resources, and digital library facilities for students and faculty.',
    url: 'https://dental.jkkn.ac.in/facilities/library/',
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
      "name": "What are the library timings at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The library at JKKN Dental College is generally open during regular college hours, Monday to Saturday. Extended hours are available during examination periods. For exact current library timings, contact the library at +91 93458 55001 or visit the library in person on the JKKN campus, Komarapalayam, Namakkal, Tamil Nadu."
      }
    },
    {
      "@type": "Question",
      "name": "Does the JKKN Dental College library have access to international journals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the JKKN Dental College library provides access to international dental journals and research publications. The library has an extensive collection of textbooks, journals, and research papers covering all dental specialties. Digital access to e-journals, e-books, and online databases is also available through the library's digital portal, keeping students and faculty updated on the latest developments in dental science."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a digital library facility at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College has a digital library facility. Students and faculty can access e-books, e-journals, and multimedia materials through the library's online portal. The digital library complements the physical collection and allows access to the latest dental research and advancements. High-speed internet connectivity on campus supports seamless access to digital library resources."
      }
    },
    {
      "@type": "Question",
      "name": "How many books are available in the JKKN Dental College library?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The JKKN Dental College library maintains an extensive collection of dental textbooks, reference books, journals, and research papers covering all dental disciplines including BDS subjects, MDS specialization topics, and interdisciplinary medical sciences. For the exact and current count of library holdings, please contact the library directly at +91 93458 55001."
      }
    },
    {
      "@type": "Question",
      "name": "Can students access the JKKN Dental College library during exam periods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College library extends its access during examination periods to support students' study needs. The library provides both quiet reading spaces and collaboration zones to suit different study preferences. Students can also access digital library resources and e-learning materials online. Contact the library or admissions office at +91 93458 55001 for the specific extended exam-period timings."
      }
    }
  ]
};

const features = [
  {
    icon: BookOpen,
    title: 'Explore our Comprehensive Dental Collection:',
    description: 'Boasting an extensive array of textbooks, journals, and research papers, our learning commons serves as a treasure trove for dental knowledge. Dive into our collection to enrich your understanding of dental science.',
  },
  {
    icon: GraduationCap,
    title: 'Study Spaces Tailored for Success:',
    description: 'From quiet reading corners to collaboration zones, we provide a conducive learning environment. Find the perfect space to suit your study needs.',
  },
  {
    icon: Monitor,
    title: 'Stay Ahead with Digital Dexterity:',
    description: 'Access state-of-the-art digital resources through our online portal. E-books, e-journals, and multimedia materials keep you abreast of the latest dental advancements.',
  },
  {
    icon: Search,
    title: 'Expert Assistance & Research Hub:',
    description: 'Our librarians stand ready to support your academic journey. Embark on research projects with literature reviews, data analysis, and citation management.',
  },
  {
    icon: Calendar,
    title: 'Engage with Workshops, Seminars & Dental News:',
    description: 'Participate in educational workshops and seminars from renowned dental experts. Stay informed with curated news on the latest developments in dentistry.',
  },
  {
    icon: Users,
    title: 'Community, Collaboration & Personalized Learning:',
    description: 'Connect with like-minded dental enthusiasts and explore personalized learning resources. From visual aids to interactive modules, we make learning engaging.',
  },
  {
    icon: Clock,
    title: 'Relaxation, Reflection & History Exhibit:',
    description: "Find solace in our relaxation zone, or explore the evolution of dentistry through our historical exhibit. Appreciate the profession's rich heritage.",
  },
  {
    icon: Star,
    title: 'Learning Commons Membership Benefits:',
    description: 'Become a member to enjoy exclusive access to resources, borrowing privileges, and priority registration for workshops.',
  },
];

export default function Library() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/library');
  const webPageSchema = generateWebPageSchema({
    title: 'Library Facilities | Digital Library | JKKN Dental College',
    description: 'JKKN Dental College library: extensive dental textbooks, journals, research papers, e-resources, and digital library facilities for students and faculty.',
    url: 'https://dental.jkkn.ac.in/facilities/library/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Library Facilities | Digital Library | JKKN Dental College',
    description: 'JKKN Dental College library: extensive dental textbooks, journals, research papers, e-resources, and digital library facilities for students and faculty.',
    url: 'https://dental.jkkn.ac.in/facilities/library/',
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
            Library
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/library-1.webp"
                alt="JKKN Dental College library study area with students reading at study desks"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/library-2.webp"
                alt="Dental students browsing textbooks at JKKN library bookshelves"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/library-3.webp"
                alt="Students exploring journals and periodicals section at JKKN Dental College library"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            Dental College Learning Commons – Your Partner in Dental Excellence
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                <Icon className="text-white w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#006837]">{title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed"><strong>{description}</strong></p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            <strong>At the Dental College Learning Commons, we are committed to your growth in dental excellence. Explore, learn, collaborate, and contribute to the future of dentistry with us.</strong>
          </p>
        </div>
      </section>

      <FaqAccordion schema={faqSchema} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
