import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Monitor, Wind, Wifi, Wrench, ShieldCheck } from 'lucide-react';

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

const features = [
  {
    icon: Monitor,
    label: 'High-Tech Infrastructure:',
    description: 'The hall includes top-notch audio-visual equipment and a dedicated stage, perfect for any presentation.',
  },
  {
    icon: Wind,
    label: 'Comfort:',
    description: 'Air-conditioned and designed with ergonomic seating to ensure a relaxed atmosphere for attendees.',
  },
  {
    icon: Wifi,
    label: 'Connectivity:',
    description: 'High-speed Wi-Fi supports seamless digital engagement during events.',
  },
  {
    icon: Wrench,
    label: 'Expert Support:',
    description: 'Our skilled technicians are readily available to ensure smooth event execution.',
  },
  {
    icon: ShieldCheck,
    label: 'Safety & Hygiene:',
    description: 'Maintaining strict standards, we prioritize the well-being of each participant.',
  },
];

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

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Seminar Hall
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/Seminar-hall-1.avif"
                alt="Seminar hall with audience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/Seminar-hall-2.avif"
                alt="JKKN Dental College seminar hall interior with ergonomic seating and AV equipment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/Seminar-hall-3.avif"
                alt="JKKN Dental College air-conditioned seminar hall set up for academic workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            <strong>Our Seminar Hall is designed as an inviting environment equipped for both learning and networking. We blend modern technology with thoughtful amenities to make every event a success.</strong>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-8">Features:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>{label}</strong> {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            <strong>JKKN Institutions takes pride in offering a Seminar Hall that combines functionality, comfort, and cutting-edge technology to create an enriching experience for all.</strong>
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
