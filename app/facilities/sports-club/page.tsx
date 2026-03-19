import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Sports Facilities | JKKN Dental Campus',
  description: 'JKKN sports club features 100m track, multipurpose indoor stadium, basketball, tennis, football, wrestling, kabaddi arenas, and state-of-the-art gym equipment.',
  keywords: 'sports club JKKN, campus sports facilities, athletic center, gym facilities, indoor stadium, basketball court, wrestling arena, kabaddi, student sports',
  openGraph: {
    title: 'Sports Facilities | JKKN Dental Campus',
    description: 'JKKN sports club features 100m track, multipurpose indoor stadium, basketball, tennis, football, wrestling, kabaddi arenas, and state-of-the-art gym equipment.',
    url: 'https://dental.jkkn.ac.in/facilities/sports-club/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function SportsClub() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/sports-club');
  const webPageSchema = generateWebPageSchema({
    title: 'Sports Facilities | JKKN Dental Campus',
    description: 'JKKN sports club features 100m track, multipurpose indoor stadium, basketball, tennis, football, wrestling, kabaddi arenas, and state-of-the-art gym equipment.',
    url: 'https://dental.jkkn.ac.in/facilities/sports-club/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Sports Facilities | JKKN Dental Campus',
    description: 'JKKN sports club features 100m track, multipurpose indoor stadium, basketball, tennis, football, wrestling, kabaddi arenas, and state-of-the-art gym equipment.',
    url: 'https://dental.jkkn.ac.in/facilities/sports-club/',
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
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            Sports club
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/sports-1.webp"
                alt="Student with rugby ball"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/sports-2.webp"
                alt="Student athlete"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/sports-3.webp"
                alt="Sports team"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
            We take sports seriously, making fitness an integral part of life on campus. Our sports facility is where champions are made, friendships are forged, and a healthier you is discovered. Here's what sets our sports club apart:
          </p>

          {/* World-class Amenities */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              World-class Amenities:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              From our 100m track field to the multipurpose indoor stadium, our outdoor and indoor facilities are top-tier. Basketball, tennis, football, and specialized arenas for wrestling and kabaddi are some of the highlights.
            </p>
          </div>

          {/* Championship Legacy */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Championship Legacy:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our sporting arenas frequently host wrestling, kabaddi, badminton, and volleyball championships, allowing students to gain competitive exposure. JKKN Institutions' teams have set benchmarks in various sports categories.
            </p>
          </div>

          {/* Cutting-edge Equipment */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Cutting-edge Equipment:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our facilities are complemented by state-of-the-art gym equipment, ensuring that your fitness regimen is backed by the best available technology.
            </p>
          </div>

          {/* Experienced Instructors */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Experienced Instructors:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our certified instructors bring years of expertise to guide, motivate, and refine your skills. Whether you're a novice or a pro, you're in safe hands.
            </p>
          </div>

          {/* Inclusive Membership */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Inclusive Membership:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Students, staff, and community members are welcomed to join. We believe that quality fitness facilities should be accessible to all, which is why our membership options are flexible and diverse.
            </p>
          </div>

          {/* Community Building */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Community Building:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Sports at JKKN Institutions isn't just about competition; it's about community. Regular events and tournaments provide a platform for healthy competition and foster a spirit of camaraderie.
            </p>
          </div>

          {/* Final Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-gray-600">
              Whether you aim to set a new record, stay fit, or forge lasting friendships, our sports club at JKKN Institutions is the place to be.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
