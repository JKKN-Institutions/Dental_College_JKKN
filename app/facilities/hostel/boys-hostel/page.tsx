import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Boys Hostel - Accommodation at JKKN Dental College',
  description: 'JKKN boys hostel offers spacious rooms, high-speed internet, 24/7 security, study-focused ambiance, and modern amenities just 5 minutes from campus.',
  keywords: 'boys hostel JKKN, dental college hostel, student accommodation, hostel facilities, on-campus housing, AC rooms, safe hostel, boys dormitory',
  openGraph: {
    title: 'Boys Hostel - Accommodation at JKKN Dental College',
    description: 'JKKN boys hostel offers spacious rooms, high-speed internet, 24/7 security, study-focused ambiance, and modern amenities just 5 minutes from campus.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/boys-hostel/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is hostel accommodation mandatory for students at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, hostel accommodation is not mandatory at JKKN Dental College. It is an optional facility available for students who prefer to stay on or near campus. The Boys Hostel is situated just a 5-minute walk from the JKKN campus, offering convenience and easy access to classes and facilities. Students may choose to stay at the hostel or arrange their own accommodation."
      }
    },
    {
      "@type": "Question",
      "name": "What facilities are available in the Boys Hostel at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Boys Hostel at JKKN Dental College offers well-ventilated single and shared rooms, air-conditioned rooms (available on request), high-speed internet connectivity, a study-focused quiet environment, 24/7 committed staff support, and round-the-clock security measures. The hostel fosters a community environment and provides a safe, well-maintained living space designed to support academic focus and personal growth."
      }
    },
    {
      "@type": "Question",
      "name": "Is food included in the boys hostel fee at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mess or dining facilities are available for hostel residents at JKKN Dental College. For specific details on whether food charges are included in the hostel fee or billed separately, and for the current hostel fee breakdown, please contact the admissions or hostel office at +91 93458 55001 or email dental@jkkn.ac.in."
      }
    },
    {
      "@type": "Question",
      "name": "What is the distance from the boys hostel to JKKN Dental College campus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Boys Hostel at JKKN Dental College is situated approximately a 5-minute walk from the heart of the JKKN campus. This close proximity ensures students have quick and easy access to classrooms, clinical labs, the hospital, library, and other campus facilities without the need for transportation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the hostel fees at JKKN Dental College boys hostel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hostel fees at JKKN Dental College vary based on room type (single or shared) and whether air conditioning is requested. For the current hostel fee structure, contact the admissions office at +91 93458 55001 or email dental@jkkn.ac.in. Hostel fees are charged separately from tuition fees and are optional."
      }
    }
  ]
};

export default function BoysHostel() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/hostel/boys-hostel');
  const webPageSchema = generateWebPageSchema({
    title: 'Boys Hostel - Accommodation at JKKN Dental College',
    description: 'JKKN boys hostel offers spacious rooms, high-speed internet, 24/7 security, study-focused ambiance, and modern amenities just 5 minutes from campus.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/boys-hostel/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Boys Hostel - Accommodation at JKKN Dental College',
    description: 'JKKN boys hostel offers spacious rooms, high-speed internet, 24/7 security, study-focused ambiance, and modern amenities just 5 minutes from campus.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/boys-hostel/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
           {/* Main Heading */}
           <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            Boys Hostel
          </h1>
          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/boys-hostel-1.jpg"
                alt="Boys hostel building exterior"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/boys-hostel-2.jpg"
                alt="Boys hostel dining area"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/boys-hostel-3.jpg"
                alt="Boys hostel exterior view"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            <strong>Situated a mere 5-minute walk from the heart of JKKN campus, our Boys Hostel offers a perfect blend of convenience and comfort. Designed to foster both academics and camaraderie, the hostel embodies the holistic approach of JKKN Institutions.</strong>
          </p>

          {/* Convenience and Comfort */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Convenience and Comfort:
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              <strong>Short Commute:</strong> Positioned just a 5-minute walk from the campus, the hostel ensures an easy and quick access to classes and facilities. <strong>Spacious Living:</strong> Choose from well-ventilated single and shared rooms, thoughtfully designed to provide a pleasant living experience. Air conditioned rooms are available upon request.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Well-Maintained Environment:</strong> Enjoy state-of-the-art amenities coupled with continuous upkeep to cater to your daily needs.
            </p>
          </div>

          {/* Academic Support */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Academic Support:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Study-Focused Ambiance:</strong> Our hostel emphasizes a peaceful and quiet atmosphere, facilitating uninterrupted study hours. <strong>High-Speed Internet Connectivity:</strong> Seamlessly access online resources and complete academic tasks with our robust internet service.
            </p>
          </div>

          {/* Community and Safety */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Community and Safety:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Lifelong Connections:</strong> Forge friendships and create cherished memories within a supportive community of peers. <strong>Committed Staff:</strong> Rest assured with our dedicated staff available around the clock to assist and ensure a smooth stay. <strong>Safety First:</strong> Experience peace of mind with security measures that prioritize your well-being. Our Boys Hostel stands as a testament to JKKN's commitment to providing an enriching, safe, and nurturing environment. Join us in this vibrant living space that complements your academic journey and personal growth.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
