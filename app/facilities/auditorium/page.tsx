import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Auditorium | JKKN Dental Campus',
  description: 'JKKN auditorium features advanced AV technology, superior acoustics, unobstructed seating, and customized lighting for lectures and cultural performances.',
  keywords: 'JKKN auditorium, dental college auditorium, campus auditorium facility, state-of-the-art auditorium, event venue JKKN, cultural performances, academic lectures',
  openGraph: {
    title: 'Auditorium | JKKN Dental Campus',
    description: 'JKKN auditorium features advanced AV technology, superior acoustics, unobstructed seating, and customized lighting for lectures and cultural performances.',
    url: 'https://dental.jkkn.ac.in/facilities/auditorium/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function Auditorium() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/auditorium');
  const webPageSchema = generateWebPageSchema({
    title: 'Auditorium | JKKN Dental Campus',
    description: 'JKKN auditorium features advanced AV technology, superior acoustics, unobstructed seating, and customized lighting for lectures and cultural performances.',
    url: 'https://dental.jkkn.ac.in/facilities/auditorium/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Auditorium | JKKN Dental Campus',
    description: 'JKKN auditorium features advanced AV technology, superior acoustics, unobstructed seating, and customized lighting for lectures and cultural performances.',
    url: 'https://dental.jkkn.ac.in/facilities/auditorium/',
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
            Auditorium
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Auditorium-1.webp"
                alt="Auditorium decorated for event"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Auditorium-2.webp"
                alt="Auditorium event ceremony"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Auditorium-3.webp"
                alt="Cultural performance in auditorium"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            <strong>Our auditorium is not just a venue—it's a testament to JKKN Institutions' commitment to fostering a rich educational and cultural landscape. Here's why this space sets new standards:</strong>
          </p>

          {/* Uncompromising Viewing Experience */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Uncompromising Viewing Experience:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Thoughtfully designed seating configurations provide an unobstructed view from every angle, thereby enriching the attendee experience.</strong>
            </p>
          </div>

          {/* Sound Quality, Elevated */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Sound Quality, Elevated:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>State-of-the-art acoustics amplify clarity and depth, ensuring that each word or note resonates with the audience.</strong>
            </p>
          </div>

          {/* Advanced Technical Capabilities */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Advanced Technical Capabilities:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Featuring cutting-edge audio-visual technologies, the stage is versatile enough for both academic lectures and high-octane cultural performances.</strong>
            </p>
          </div>

          {/* Distinctive Atmosphere */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Distinctive Atmosphere:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>The interior fuses contemporary and classic design elements, creating a harmonious yet dynamic atmosphere. Customized lighting schemes further elevate the ambience for different events.</strong>
            </p>
          </div>

          {/* Resourceful & Adaptable */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Resourceful & Adaptable:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Beyond performances and lectures, the auditorium serves as a communal asset for various campus activities, from workshops to ceremonies.</strong>
            </p>
          </div>

          {/* Commitment to Excellence */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Commitment to Excellence:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Regular maintenance by our dedicated team assures optimal functionality, reflecting JKKN Institutions' overarching standards of excellence.</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
