import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Seminar Hall - Conference Facility at JKKN Dental College',
  description: 'JKKN seminar hall features high-tech AV equipment, air conditioning, ergonomic seating, high-speed WiFi, and expert technical support for presentations.',
  keywords: 'seminar hall JKKN, conference facility dental college, presentation hall, academic seminars, workshop venue, AV equipment, event space',
  openGraph: {
    title: 'Seminar Hall - Conference Facility at JKKN Dental College',
    description: 'JKKN seminar hall features high-tech AV equipment, air conditioning, ergonomic seating, high-speed WiFi, and expert technical support for presentations.',
    url: 'https://dental.jkkn.ac.in/facilities/seminar-hall/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function SeminarHall() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/seminar-hall');
  const webPageSchema = generateWebPageSchema({
    title: 'Seminar Hall - Conference Facility at JKKN Dental College',
    description: 'JKKN seminar hall features high-tech AV equipment, air conditioning, ergonomic seating, high-speed WiFi, and expert technical support for presentations.',
    url: 'https://dental.jkkn.ac.in/facilities/seminar-hall/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Seminar Hall - Conference Facility at JKKN Dental College',
    description: 'JKKN seminar hall features high-tech AV equipment, air conditioning, ergonomic seating, high-speed WiFi, and expert technical support for presentations.',
    url: 'https://dental.jkkn.ac.in/facilities/seminar-hall/',
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
            Seminar Hall
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[320px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/seminar-hall-1.png"
                alt="Seminar hall with audience"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[320px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/seminar-hall-2.png"
                alt="JKKN Dental College seminar hall interior with ergonomic seating and AV equipment"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[320px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/seminar-hall-3.png"
                alt="JKKN Dental College air-conditioned seminar hall set up for academic workshop"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            <strong>Our Seminar Hall is designed as an inviting environment equipped for both learning and networking. We blend modern technology with thoughtful amenities to make every event a success.</strong>
          </p>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
              Features:
            </h2>

            <div className="space-y-4 text-base text-gray-700">
              <p>
                <strong>High-Tech Infrastructure:</strong> The hall includes top-notch audio-visual equipment and a dedicated stage, perfect for any presentation.
              </p>
              <p>
                <strong>Comfort:</strong> Air-conditioned and designed with ergonomic seating to ensure a relaxed atmosphere for attendees.
              </p>
              <p>
                <strong>Connectivity:</strong> High-speed Wi-Fi supports seamless digital engagement during events.
              </p>
              <p>
                <strong>Expert Support:</strong> Our skilled technicians are readily available to ensure smooth event execution.
              </p>
              <p>
                <strong>Safety & Hygiene:</strong> Maintaining strict standards, we prioritize the well-being of each participant.
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-gray-700">
              <strong>JKKN Institutions takes pride in offering a Seminar Hall that combines functionality, comfort, and cutting-edge technology to create an enriching experience for all.</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
