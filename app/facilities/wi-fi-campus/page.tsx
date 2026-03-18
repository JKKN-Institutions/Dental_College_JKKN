import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

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

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            WI-FI CAMPUS
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/wifi-1.png"
                alt="Laptop on campus with WiFi"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/wifi-2.png"
                alt="Campus outdoor WiFi connectivity"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/wifi-3.png"
                alt="Campus corridor with WiFi access"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
            At JKKN Institutions, we recognize the indispensable role of robust internet connectivity in modern education and lifestyle. That's why we've gone beyond merely offering WiFi access; we provide a seamless, high-speed, and secure internet experience throughout our sprawling campus.
          </p>

          {/* High-Speed Access */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              High-Speed Access:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Enjoy blazing-fast internet speeds that allow for effortless streaming of educational videos, quick downloads of academic resources, and smooth video conferencing.
            </p>
          </div>

          {/* All-encompassing Coverage */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              All-encompassing Coverage:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our strategically placed routers ensure WiFi coverage in lecture halls, libraries, labs, common areas, and even outdoor spaces.
            </p>
          </div>

          {/* Secure and Reliable */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Secure and Reliable:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Multi-layered security protocols protect your data and privacy, making our network not just fast but also secure.
            </p>
          </div>

          {/* Resourceful Connectivity */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Resourceful Connectivity:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our WiFi network serves as a backbone for academic resources, enabling quick access to course materials, research databases, and collaboration tools.
            </p>
          </div>

          {/* Beyond Academics */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Beyond Academics:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Whether you're streaming your favorite playlist or gaming during breaks, our network supports your recreational needs without compromising speed and performance.
            </p>
          </div>

          {/* Data Savings */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Data Savings:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Utilize our campus-wide WiFi to save on your personal data consumption.
            </p>
          </div>

          {/* Eco-Friendly */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Eco-Friendly:
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              Our WiFi network is part of our sustainable tech infrastructure, reducing the need for paper and facilitating digital forms of communication and data storage.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              At JKKN Institutions, we offer a holistic digital experience that aligns perfectly with our educational vision and lifestyle aspirations. It's not just WiFi; it's your gateway to accessing and fulfilling campus life.
            </p>
          </div>

          {/* Ambulance Services Section */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Ready to Respond, Ready to Serve: 24/7 Ambulance Services at JKKN Institutions
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              At JKKN Institutions, our commitment to the health and well-being of our community is unwavering. Our 24/7 ambulance services are an embodiment of this pledge, designed to provide rapid, professional, and advanced medical care during emergencies.
            </p>
          </div>

          {/* Swift and Efficient */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Swift and Efficient:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our round-the-clock ambulance services guarantee that emergency medical care is just a call away, reducing response time in critical situations.
            </p>
          </div>

          {/* Highly-Skilled Emergency Medical Technicians */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Highly-Skilled Emergency Medical Technicians:
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-3">
              Staffed by certified and experienced EMTs, our ambulances ensure that you are in capable hands from the moment you board.
            </p>
            <p className="text-base leading-relaxed text-gray-600 font-bold mb-2">
              Advanced Medical Facilities On-the-Go:
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              Equipped with state-of-the-art medical equipment, our ambulances are essentially mobile ICUs, ready to deliver critical care when every second counts.
            </p>
          </div>

          {/* Seamless Integration with Dental Hospital */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Seamless Integration with Dental Hospital:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our ambulance services are closely integrated with our on-campus dental hospital, allowing for quick patient transfer and ensuring that medical records and care plans are immediately accessible to healthcare providers.
            </p>
          </div>

          {/* Highway Proximity for Extended Reach */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Highway Proximity for Extended Reach:
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Conveniently located near national highways, our ambulance services can swiftly reach neighboring healthcare facilities for specialized treatments.
            </p>
          </div>

          {/* Future-Forward */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Future-Forward:
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              In line with our commitment to Bioconvergence and technological advancements, we are continuously upgrading our ambulance services with cutting-edge technologies and AI capabilities for diagnostics and telemedicine.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              Our ambulance services are more than a safety measure; they are a cornerstone of our institutional healthcare infrastructure, designed to provide swift, comprehensive, and cutting-edge medical care to our community.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
