import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Stethoscope, Building2, Cross, ShieldCheck, Zap, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Health Facilities - Medical Care at JKKN Dental Campus',
  description: 'JKKN offers comprehensive health facilities including on-duty doctors, multidisciplinary dental hospital, and upcoming 100-bed multi-specialty hospital.',
  keywords: 'health facilities JKKN, campus medical care, dental emergency services, multi-specialty hospital, on-campus healthcare, student health services, medical emergency preparedness',
  openGraph: {
    title: 'Health Facilities - Medical Care at JKKN Dental Campus',
    description: 'JKKN offers comprehensive health facilities including on-duty doctors, multidisciplinary dental hospital, and upcoming 100-bed multi-specialty hospital.',
    url: 'https://dental.jkkn.ac.in/facilities/health-facilities/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const features = [
  {
    icon: Stethoscope,
    title: 'Immediate Medical Attention:',
    content: (
      <>
        <p>On-duty Doctors: Highly-trained medical professionals are available to provide first aid and preliminary care.</p>
        <p>Connectivity:</p>
        <p>Strategic Location: Our campus is strategically located near national highways, providing rapid access to specialized care at nearby hospitals.</p>
      </>
    ),
  },
  {
    icon: Building2,
    title: 'Upcoming Facilities:',
    content: (
      <p>In-Construction Multi-Speciality Hospital: We are currently building a state-of-the-art, 100-bed multi-speciality hospital to offer comprehensive healthcare services on campus.</p>
    ),
  },
  {
    icon: Cross,
    title: 'Dental Emergency:',
    content: (
      <p>Multidisciplinary Dental Hospital: An advanced facility for all kinds of dental emergencies, staffed by specialized dentists and oral healthcare experts.</p>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Preparedness:',
    content: (
      <p>Training and Drills: Regular training for staff and students to handle various kinds of medical emergencies efficiently.</p>
    ),
  },
  {
    icon: Zap,
    title: 'Future-Ready:',
    content: (
      <p>Investment in Advanced Medical Technologies: As part of our commitment to healthcare excellence, our upcoming hospital will feature the latest medical technologies.</p>
    ),
  },
  {
    icon: Heart,
    title: 'Comfort and Care:',
    content: (
      <p>Soothing Environment: Our existing and upcoming healthcare facilities aim to offer a comforting environment to ease stress during medical situations.</p>
    ),
  },
  {
    icon: Users,
    title: 'Accessibility:',
    content: (
      <p>Affordable Care: Upholding our commitment to community service, we strive to make healthcare accessible to all.</p>
    ),
  },
];

export default function HealthFacilities() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/health-facilities');
  const webPageSchema = generateWebPageSchema({
    title: 'Health Facilities - Medical Care at JKKN Dental Campus',
    description: 'JKKN offers comprehensive health facilities including on-duty doctors, multidisciplinary dental hospital, and upcoming 100-bed multi-specialty hospital.',
    url: 'https://dental.jkkn.ac.in/facilities/health-facilities/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Health Facilities - Medical Care at JKKN Dental Campus',
    description: 'JKKN offers comprehensive health facilities including on-duty doctors, multidisciplinary dental hospital, and upcoming 100-bed multi-specialty hospital.',
    url: 'https://dental.jkkn.ac.in/facilities/health-facilities/',
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
            HEALTH FACILITIES
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            At JKKN Institutions, the safety and well-being of our community are of paramount importance. While our on-campus facilities are centered around our multidisciplinary dental hospital, we are well-prepared for various emergency situations through a multi-tiered approach.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, content }) => (
            <div
              key={title}
              className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                <Icon className="text-white w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#006837]">{title}</h2>
              <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">
                {content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            At JKKN Institutions, we are diligently working to create a holistic healthcare ecosystem that aligns with our institutional values and vision. As we construct our new hospital, we continue to enhance our existing medical preparedness to ensure the safety and well-being of our community.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
