import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Star, Trophy, Dumbbell, Shield, Heart, Users } from 'lucide-react';

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

const features = [
  {
    icon: Star,
    title: 'World-class Amenities:',
    description:
      'From our 100m track field to the multipurpose indoor stadium, our outdoor and indoor facilities are top-tier. Basketball, tennis, football, and specialized arenas for wrestling and kabaddi are some of the highlights.',
  },
  {
    icon: Trophy,
    title: 'Championship Legacy:',
    description:
      "Our sporting arenas frequently host wrestling, kabaddi, badminton, and volleyball championships, allowing learners to gain competitive exposure. JKKN Institutions' teams have set benchmarks in various sports categories.",
  },
  {
    icon: Dumbbell,
    title: 'Cutting-edge Equipment:',
    description:
      'Our facilities are complemented by state-of-the-art gym equipment, ensuring that your fitness regimen is backed by the best available technology.',
  },
  {
    icon: Shield,
    title: 'Experienced Senior Learners:',
    description:
      "Our certified senior learners bring years of expertise to guide, motivate, and refine your skills. Whether you're a novice or a pro, you're in safe hands.",
  },
  {
    icon: Heart,
    title: 'Inclusive Membership:',
    description:
      'Learners, team members, and community members are welcomed to join. We believe that quality fitness facilities should be accessible to all, which is why our membership options are flexible and diverse.',
  },
  {
    icon: Users,
    title: 'Community Building:',
    description:
      "Sports at JKKN Institutions isn't just about competition; it's about community. Regular events and tournaments provide a platform for healthy competition and foster a spirit of camaraderie.",
  },
];

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

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sports club
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
                src="/images/sports-1.avif"
                alt="Student with rugby ball"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/sports-2.avif"
                alt="Student athlete"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/sports-3.avif"
                alt="Sports team"
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
            We take sports seriously, making fitness an integral part of life on campus. Our sports facility is where champions are made, friendships are forged, and a healthier you is discovered. Here&apos;s what sets our sports club apart:
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
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            Whether you aim to set a new record, stay fit, or forge lasting friendships, our sports club at JKKN Institutions is the place to be.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
