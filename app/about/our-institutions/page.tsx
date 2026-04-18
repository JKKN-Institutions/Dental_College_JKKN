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

      {/* Hero Section — image with gradient overlay + H1 */}
      <section className="relative bg-[#FBFBEE] pt-16">
        <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
          <Image
            src="/images/Our_Institution.webp"
            alt="Our Institution Campus"
            width={1400}
            height={350}
            className="w-full h-full object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          {/* H1 positioned over image */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 md:pb-10">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
                Our Institutions
              </h1>
              <div className="mt-3 w-16 h-[3px] bg-[#7cb983] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb strip */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-[#006837] transition-colors">Home</a>
            </li>
            <li className="text-gray-300 select-none">/</li>
            <li>
              <span className="text-gray-500">About</span>
            </li>
            <li className="text-gray-300 select-none">/</li>
            <li className="text-[#006837] font-medium" aria-current="page">Our Institutions</li>
          </ol>
        </div>
      </nav>

      {/* Content Section */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Paragraph 1 — lead card with left accent border */}
          <div className="border-l-4 border-[#7cb983] bg-white rounded-r-xl px-6 py-5 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              At JKKN Institutions, our core teaching objective is to empower students with technical knowledge and essential skills to meet the growing challenges of today&apos;s competitive world. We implement cutting-edge teaching <span className="font-semibold">practice, laying a robust foundation for holistic education.</span>
            </p>
          </div>

          {/* Paragraphs 2–5 — grouped card */}
          <div className="bg-white rounded-xl shadow-sm px-6 py-8 md:px-10 space-y-6">

            {/* Paragraph 2 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              Our state-of-the-art campus features meticulously designed academic blocks, advanced laboratory facilities, operation centres, knowledge-rich libraries, and comprehensive sports infrastructure. We also provide separate accommodations for boys and girls, as well as general and dental hospitals for healthcare services and practices. Our proactive Placement Cell ensures <span className="font-semibold">successful placement opportunities for all our students.</span>
            </p>

            <hr className="border-gray-100" />

            {/* Paragraph 3 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              With contemporary facilities designed for the continuous enhancement of both students and faculty, we maintain tie-ups with leading manufacturing and commercial enterprises. These connections facilitate valuable industrial and corporate exposure, aligning our educational experiences with real-world applications.
            </p>

            <hr className="border-gray-100" />

            {/* Paragraph 4 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              Situated in Komarapalayam, just 15 km from Erode City in Tamil Nadu, India, we are easily accessible via Erode railway station and Salem/Coimbatore airports.
            </p>

            <hr className="border-gray-100" />

            {/* Paragraph 5 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              JKKN Institutions are home to some of the region&apos;s leading institutes of higher learning. We foster a culture that emphasises commitment, transparency, and teamwork. Our continuing success is marked by our reputation as a knowledge centre, generating and nurturing exceptional levels of opportunity and initiative.
            </p>

          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
