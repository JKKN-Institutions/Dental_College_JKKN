import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Eye, Volume2, Monitor, Lightbulb, Layers, Award } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/facilities/auditorium/' },
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

const features = [
  {
    icon: Eye,
    title: 'Uncompromising Viewing Experience:',
    description: 'Thoughtfully designed seating configurations provide an unobstructed view from every angle, thereby enriching the attendee experience.',
  },
  {
    icon: Volume2,
    title: 'Sound Quality, Elevated:',
    description: 'State-of-the-art acoustics amplify clarity and depth, ensuring that each word or note resonates with the audience.',
  },
  {
    icon: Monitor,
    title: 'Advanced Technical Capabilities:',
    description: 'Featuring cutting-edge audio-visual technologies, the stage is versatile enough for both academic learning sessions and high-octane cultural performances.',
  },
  {
    icon: Lightbulb,
    title: 'Distinctive Atmosphere:',
    description: 'The interior fuses contemporary and classic design elements, creating a harmonious yet dynamic atmosphere. Customized lighting schemes further elevate the ambience for different events.',
  },
  {
    icon: Layers,
    title: 'Resourceful & Adaptable:',
    description: 'Beyond performances and learning sessions, the auditorium serves as a communal asset for various campus activities, from workshops to ceremonies.',
  },
  {
    icon: Award,
    title: 'Commitment to Excellence:',
    description: "Regular maintenance by our dedicated team assures optimal functionality, reflecting JKKN Institutions' overarching standards of excellence.",
  },
];

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

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Auditorium
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/Auditorium-1.webp"
                alt="Auditorium decorated for event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/Auditorium-2.webp"
                alt="Auditorium event ceremony"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/Auditorium-3.webp"
                alt="Cultural performance in auditorium"
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
            <strong>Our auditorium is not just a venue—it&apos;s a testament to JKKN Institutions&apos; commitment to fostering a rich educational and cultural landscape. Here&apos;s why this space sets new standards:</strong>
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

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
