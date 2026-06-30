import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Zap, Radio, Lock, BookOpen, Music, Database, Leaf, Clock, Stethoscope, Link2, MapPin, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wi-Fi Campus - High-Speed Internet at JKKN Dental College',
  description: 'JKKN campus offers high-speed WiFi coverage in lecture halls, libraries, labs, and outdoor spaces with multi-layered security and reliable connectivity.',
  keywords: 'WiFi campus JKKN, high-speed internet dental college, campus connectivity, wireless network, secure WiFi, free campus internet, student WiFi access',
  openGraph: {
    title: 'Wi-Fi Campus - High-Speed Internet at JKKN Dental College',
    description: 'JKKN campus offers high-speed WiFi coverage in lecture halls, libraries, labs, and outdoor spaces with multi-layered security and reliable connectivity.',
    url: 'https://dental.jkkn.ac.in/facilities/wi-fi-campus/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const wifiFeatures = [
  {
    icon: Zap,
    title: 'High-Speed Access:',
    content: (
      <p>Enjoy blazing-fast internet speeds that allow for effortless streaming of educational videos, quick downloads of academic resources, and smooth video conferencing.</p>
    ),
  },
  {
    icon: Radio,
    title: 'All-encompassing Coverage:',
    content: (
      <p>Our strategically placed routers ensure WiFi coverage in learning auditoriums, learning commons, learning labs, common areas, and even outdoor spaces.</p>
    ),
  },
  {
    icon: Lock,
    title: 'Secure and Reliable:',
    content: (
      <p>Multi-layered security protocols protect your data and privacy, making our network not just fast but also secure.</p>
    ),
  },
  {
    icon: BookOpen,
    title: 'Resourceful Connectivity:',
    content: (
      <p>Our WiFi network serves as a backbone for academic resources, enabling quick access to course materials, research databases, and collaboration tools.</p>
    ),
  },
  {
    icon: Music,
    title: 'Beyond Academics:',
    content: (
      <p>Whether you&apos;re streaming your favorite playlist or gaming during breaks, our network supports your recreational needs without compromising speed and performance.</p>
    ),
  },
  {
    icon: Database,
    title: 'Data Savings:',
    content: (
      <p>Utilize our campus-wide WiFi to save on your personal data consumption.</p>
    ),
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly:',
    content: (
      <>
        <p>Our WiFi network is part of our sustainable tech infrastructure, reducing the need for paper and facilitating digital forms of communication and data storage.</p>
        <p>At JKKN Institutions, we offer a holistic digital experience that aligns perfectly with our educational vision and lifestyle aspirations. It&apos;s not just WiFi; it&apos;s your gateway to accessing and fulfilling campus life.</p>
      </>
    ),
  },
];

const ambulanceFeatures = [
  {
    icon: Clock,
    title: 'Swift and Efficient:',
    content: (
      <p>Our round-the-clock ambulance services guarantee that emergency medical care is just a call away, reducing response time in critical situations.</p>
    ),
  },
  {
    icon: Stethoscope,
    title: 'Highly-Skilled Emergency Medical Technicians:',
    content: (
      <>
        <p>Staffed by certified and experienced EMTs, our ambulances ensure that you are in capable hands from the moment you board.</p>
        <p className="font-bold">Advanced Medical Facilities On-the-Go:</p>
        <p>Equipped with state-of-the-art medical equipment, our ambulances are essentially mobile ICUs, ready to deliver critical care when every second counts.</p>
      </>
    ),
  },
  {
    icon: Link2,
    title: 'Seamless Integration with Dental Hospital:',
    content: (
      <p>Our ambulance services are closely integrated with our on-campus dental hospital, allowing for quick patient transfer and ensuring that medical records and care plans are immediately accessible to healthcare providers.</p>
    ),
  },
  {
    icon: MapPin,
    title: 'Highway Proximity for Extended Reach:',
    content: (
      <p>Conveniently located near national highways, our ambulance services can swiftly reach neighboring healthcare facilities for specialized treatments.</p>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Future-Forward:',
    content: (
      <>
        <p>In line with our commitment to Bioconvergence and technological advancements, we are continuously upgrading our ambulance services with cutting-edge technologies and AI capabilities for diagnostics and telemedicine.</p>
        <p>Our ambulance services are more than a safety measure; they are a cornerstone of our institutional healthcare infrastructure, designed to provide swift, comprehensive, and cutting-edge medical care to our community.</p>
      </>
    ),
  },
];

export default function WiFiCampus() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/wi-fi-campus');
  const webPageSchema = generateWebPageSchema({
    title: 'Wi-Fi Campus - High-Speed Internet at JKKN Dental College',
    description: 'JKKN campus offers high-speed WiFi coverage in lecture halls, libraries, labs, and outdoor spaces with multi-layered security and reliable connectivity.',
    url: 'https://dental.jkkn.ac.in/facilities/wi-fi-campus/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Wi-Fi Campus - High-Speed Internet at JKKN Dental College',
    description: 'JKKN campus offers high-speed WiFi coverage in lecture halls, libraries, labs, and outdoor spaces with multi-layered security and reliable connectivity.',
    url: 'https://dental.jkkn.ac.in/facilities/wi-fi-campus/',
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
            WI-FI CAMPUS
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/wifi-1.png"
                alt="Laptop on campus with WiFi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/wifi-2.png"
                alt="Campus outdoor WiFi connectivity"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/wifi-3.png"
                alt="Campus corridor with WiFi access"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Intro */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            At JKKN Institutions, we recognize the indispensable role of robust internet connectivity in modern education and lifestyle. That&apos;s why we&apos;ve gone beyond merely offering WiFi access; we provide a seamless, high-speed, and secure internet experience throughout our sprawling campus.
          </p>
        </div>
      </section>

      {/* WiFi Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wifiFeatures.map(({ icon: Icon, title, content }) => (
            <div
              key={title}
              className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                <Icon className="text-white w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#006837]">{title}</h2>
              <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">{content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ambulance Services Intro */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Ready to Respond, Ready to Serve: 24/7 Ambulance Services at JKKN Institutions
          </h2>
          <p className="text-white/90 text-base leading-relaxed border-l-4 border-[#7cb983] pl-6">
            At JKKN Institutions, our commitment to the health and well-being of our community is unwavering. Our 24/7 ambulance services are an embodiment of this pledge, designed to provide rapid, professional, and advanced medical care during emergencies.
          </p>
        </div>
      </section>

      {/* Ambulance Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ambulanceFeatures.map(({ icon: Icon, title, content }) => (
            <div
              key={title}
              className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                <Icon className="text-white w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#006837]">{title}</h2>
              <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-2">{content}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
