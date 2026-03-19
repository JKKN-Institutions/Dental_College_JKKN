'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export default function OurInstitutions() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/our-institutions');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Our Institutions | JKKN Group of Institutions',
    description: 'Explore JKKN Group of Institutions at Komarapalayam, Namakkal. State-of-the-art campus with advanced labs, hospitals, hostels and placement support for holistic education.',
    url: 'https://dental.jkkn.ac.in/about/our-institutions/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Image Section */}
      <section className="bg-[#FBF8F3] pt-16 px-4">
        <div className="max-w-7xl mx-auto">
               {/* Page Heading */}
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            Our Institutions
          </h1>
          <div className="w-full h-[300px] md:h-[350px] overflow-hidden">
            <Image
              src="/images/Our_Institution.webp"
              alt="Our Institution Campus"
              width={1400}
              height={350}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FBF8F3] pb-16 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
     

          <div className="space-y-6">
            {/* Paragraph 1 */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              At JKKN Institutions, our core teaching objective is to empower students with technical knowledge and essential skills to meet the growing challenges of today's competitive world. We implement cutting-edge teaching <span className="font-semibold">practice, laying a robust foundation for holistic education.</span>
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Our state-of-the-art campus features meticulously designed academic blocks, advanced laboratory facilities, operation centres, knowledge-rich libraries, and comprehensive sports infrastructure. We also provide separate accommodations for boys and girls, as well as general and dental hospitals for healthcare services and practices. Our proactive Placement Cell ensures <span className="font-semibold">successful placement opportunities for all our students.</span>
            </p>

            {/* Paragraph 3 */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              With contemporary facilities designed for the continuous enhancement of both students and faculty, we maintain tie-ups with leading manufacturing and commercial enterprises. These connections facilitate valuable industrial and corporate exposure, aligning our educational experiences with real-world applications.
            </p>

            {/* Paragraph 4 */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Situated in Komarapalayam, just 15 km from Erode City in Tamil Nadu, India, we are easily accessible via Erode railway station and Salem/Coimbatore airports.
            </p>

            {/* Paragraph 5 */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              JKKN Institutions are home to some of the region's leading institutes of higher learning. We foster a culture that emphasises commitment, transparency, and teamwork. Our continuing success is marked by our reputation as a knowledge centre, generating and nurturing exceptional levels of opportunity and initiative.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
