import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Tv, LayoutGrid, Wifi, Palette, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Classrooms - Smart Technology at JKKN Dental College',
  description: 'JKKN digital classrooms feature smart TVs, AI tools, design thinking integration, high-speed connectivity, and interactive learning for enhanced dental education.',
  keywords: 'digital classroom JKKN, smart classroom dental college, AI-powered education, interactive learning, multimedia projectors, educational technology, modern classroom facilities',
  openGraph: {
    title: 'Digital Classrooms - Smart Technology at JKKN Dental College',
    description: 'JKKN digital classrooms feature smart TVs, AI tools, design thinking integration, high-speed connectivity, and interactive learning for enhanced dental education.',
    url: 'https://dental.jkkn.ac.in/facilities/digital-class-room/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function DigitalClassRoom() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/digital-class-room');
  const webPageSchema = generateWebPageSchema({
    title: 'Digital Classrooms - Smart Technology at JKKN Dental College',
    description: 'JKKN digital classrooms feature smart TVs, AI tools, design thinking integration, high-speed connectivity, and interactive learning for enhanced dental education.',
    url: 'https://dental.jkkn.ac.in/facilities/digital-class-room/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Digital Classrooms - Smart Technology at JKKN Dental College',
    description: 'JKKN digital classrooms feature smart TVs, AI tools, design thinking integration, high-speed connectivity, and interactive learning for enhanced dental education.',
    url: 'https://dental.jkkn.ac.in/facilities/digital-class-room/',
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
            DIGITAL CLASS ROOM
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery — 3 images */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/class_room-1.webp"
                alt="JKKN Dental College classroom session with students attentively listening to faculty"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/class_room-2.webp"
                alt="Wide view of JKKN Dental College classroom with students during a lecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/class_room-3.webp"
                alt="JKKN Dental College digital classroom with smart technology and modern facilities"
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
            <strong>Digital Classrooms at JKKN Institutions: Where Technology Meets Excellence At JKKN Institutions, we redefine the classroom experience by integrating cutting-edge technology and design thinking into our learning spaces. Every detail is meticulously planned to inspire innovation, encourage collaborative learning, and cater to the diverse needs of our student body.</strong>
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Smart Technology */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Tv className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Smart Technology:</h2>
            <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">
              <p><strong>Smart TVs and Multimedia Projectors: Tailor-made for interactive and dynamic learning experiences.</strong></p>
              <p><strong>Portable Microphones and Speakers: For crystal-clear audio in larger classrooms, ensuring that every word is heard.</strong></p>
              <p><strong>Seamless Integration:</strong></p>
              <p><strong>AI Tools: Embedded in daily lectures, discussions, and problem-solving sessions to elevate the learning experience.</strong></p>
              <p><strong>Design Thinking: Integrated into classroom activities to foster innovation and critical thinking.</strong></p>
            </div>
          </div>

          {/* Customizable Learning Spaces */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <LayoutGrid className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Customizable Learning Spaces:</h2>
            <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">
              <p><strong>Multiple Classroom Settings: From traditional lecture halls to collaborative workspaces, we have a layout for every learning style.</strong></p>
              <p><strong>Comfortable Seating: Ergonomically designed for optimum focus and minimal distraction.</strong></p>
            </div>
          </div>

          {/* High-Speed Connectivity */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Wifi className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">High-Speed Connectivity:</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Uninterrupted Internet Access: Because the flow of information shouldn&apos;t have to wait.</strong>
            </p>
          </div>

          {/* Inspiring Aesthetics */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Palette className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Inspiring Aesthetics:</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Vibrant Colors and Motivational Posters: Creating an ambiance that stimulates creativity and enthusiasm.</strong>
            </p>
          </div>

          {/* Clean and Hygienic */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Clean and Hygienic:</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Regular Maintenance: To offer a safe and hygienic environment conducive to focused learning.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            <strong>Experience the future of learning today, only at JKKN Institutions.</strong>
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
