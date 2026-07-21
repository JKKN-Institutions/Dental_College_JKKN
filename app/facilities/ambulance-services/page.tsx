import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/facilities/ambulance-services/' },
  title: 'Ambulance Service | JKKN Dental College',
  description: 'JKKN Institutions offers round-the-clock free ambulance services with expert EMTs and advanced medical equipment for emergency medical transportation.',
  keywords: 'free ambulance service JKKN, 24/7 emergency ambulance, dental college ambulance, medical emergency transportation, JKKN institutions ambulance, emergency medical care',
  openGraph: {
    title: 'Ambulance Service | JKKN Dental College',
    description: 'JKKN Institutions offers round-the-clock free ambulance services with expert EMTs and advanced medical equipment for emergency medical transportation.',
    url: 'https://dental.jkkn.ac.in/facilities/ambulance-services/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AmbulanceServices() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/ambulance-services');
  const webPageSchema = generateWebPageSchema({
    title: 'Ambulance Service | JKKN Dental College',
    description: 'JKKN Institutions offers round-the-clock free ambulance services with expert EMTs and advanced medical equipment for emergency medical transportation.',
    url: 'https://dental.jkkn.ac.in/facilities/ambulance-services/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Ambulance Service | JKKN Dental College',
    description: 'JKKN Institutions offers round-the-clock free ambulance services with expert EMTs and advanced medical equipment for emergency medical transportation.',
    url: 'https://dental.jkkn.ac.in/facilities/ambulance-services/',
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
            AMBULANCE SERVICES
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Banner Image */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="/images/ambulance.webp"
              alt="JKKN Free Ambulance Service"
              width={500}
              height={350}
              className="rounded-2xl shadow-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Content Paragraphs */}
      <section className="bg-[#FBFBEE] py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <p className="text-base leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            <strong>JKKN Institutions, we are dedicated to delivering excellent education to our learners, team members, and community. In line with our pledge to the community, we take pride in presenting our exceptional ambulance services, available round-the-clock for emergency responses and medical transportation.</strong>
          </p>
          <p className="text-base leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            <strong>Our ambulance services are managed by expert emergency medical technicians who are certified and experienced in handling diverse medical emergencies. To ensure our patients receive the highest quality of care, our ambulances are equipped with advanced medical equipment and supplies.</strong>
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
