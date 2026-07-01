import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Bus, UserCheck, Banknote, Shield, Clock, Users } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Transport Services - Bus Facility at JKKN Dental College',
  description: 'JKKN Dental College transport: AC buses, GPS tracking, CCTV monitoring, trained drivers, wheelchair accessibility, and affordable distance-based pricing.',
  keywords: 'college bus transport JKKN, student bus service, campus transportation, GPS tracked buses, safe college bus, wheelchair accessible transport, AC buses',
  openGraph: {
    title: 'Transport Services - Bus Facility at JKKN Dental College',
    description: 'JKKN Dental College transport: AC buses, GPS tracking, CCTV monitoring, trained drivers, wheelchair accessibility, and affordable distance-based pricing.',
    url: 'https://dental.jkkn.ac.in/facilities/transport/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function Transport() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/transport');
  const webPageSchema = generateWebPageSchema({
    title: 'Transport Services - Bus Facility at JKKN Dental College',
    description: 'JKKN Dental College transport: AC buses, GPS tracking, CCTV monitoring, trained drivers, wheelchair accessibility, and affordable distance-based pricing.',
    url: 'https://dental.jkkn.ac.in/facilities/transport/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Transport Services - Bus Facility at JKKN Dental College',
    description: 'JKKN Dental College transport: AC buses, GPS tracking, CCTV monitoring, trained drivers, wheelchair accessibility, and affordable distance-based pricing.',
    url: 'https://dental.jkkn.ac.in/facilities/transport/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            TRANSPORT
          </h1>
        </div>
      </section>

      {/* Images + Intro */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/transport-1.webp"
                alt="JKKN college buses"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/transport-2.webp"
                alt="College bus fleet"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/transport-3.webp"
                alt="JKKN buses parked"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="hero-description text-gray-700 text-base leading-relaxed">
              <strong>Navigating your way to academic excellence should be as smooth as possible, and that&apos;s precisely what our transport services at JKKN Institutions aim to provide. From the quality of our fleet to the training of our drivers, every aspect has been carefully curated to offer you not just a ride, but a journey you can count on.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Well-Equipped Fleet */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Bus className="w-5 h-5 text-[#006837]" />
            </div>
            Well-Equipped Fleet:
          </h2>
          <div className="bg-[#FBFBEE] rounded-xl p-8 border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Our vehicles are more than just a means of transport; they&apos;re an extension of the high-quality experience we provide on campus. Regular servicing and cleanliness checks ensure that each bus is in optimal condition. Features like air conditioning, plush seating, and advanced GPS tracking systems redefine the concept of comfortable commuting.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Expert Drivers */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-5 h-5 text-[#006837]" />
            </div>
            Expert Drivers:
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Behind every wheel is a highly trained professional who is well-versed in local routes and traffic conditions. Frequent skill-upgradation sessions make sure our drivers are always equipped to get you safely and efficiently to your destination.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Cost-Efficiency */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Banknote className="w-5 h-5 text-[#006837]" />
            </div>
            Cost-Efficiency:
          </h2>
          <div className="bg-[#FBFBEE] rounded-xl p-8 border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Accessibility and affordability go hand-in-hand at JKKN Institutions. The pricing structure is transparent and is calculated based on the distance from your residence to the campus, making sure that premium service does not come with a premium price tag.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-[#006837]" />
            </div>
            Safety Measures:
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>We have a zero-compromise policy when it comes to safety. Each bus is monitored via CCTV, and designated female attendants are in place to assist female passengers. A stringent set of guidelines ensures a secure commute for everyone aboard.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Timely Operation */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#006837]" />
            </div>
            Timely Operation:
          </h2>
          <div className="bg-[#FBFBEE] rounded-xl p-8 border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Time is of the essence, especially in an academic setting. Our transport services adhere to a strict timetable, facilitating punctuality that allows you to optimize your academic and personal schedules.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Inclusive Accessibility */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-[#006837]" />
            </div>
            Inclusive Accessibility:
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>We believe in inclusivity and offer buses equipped with wheelchair ramps and other assistive features, ensuring that every learner, irrespective of physical capabilities, can easily use our services.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <p className="text-green-100 text-base leading-relaxed">
              <strong>In essence, JKKN Institutions&apos; transport services are an embodiment of our core values—offering a safe, reliable, and comfortable comm</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
