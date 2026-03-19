'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Management | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/our-management/",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".hero-description", "article p"],
  },
};

export default function OurManagement() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Our Management', url: 'https://dental.jkkn.ac.in/our-management/' },
      ]} />
      <Header />

      {/* Management Section */}
      <section className="bg-[#FBF8F3] pt-16 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
      

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Chairperson */}
            <div className="flex flex-col items-center">
              {/* Framed Portrait */}
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] mb-8">
                <Image
                  src="/images/Our_Management-1.webp"
                  alt="Smt.N.Sendamaraai"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Name */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#006838]">
                SMT.N.SENDAMARAAI
              </h2>

              {/* Position */}
              <h3 className="text-lg md:text-xl font-bold text-center mb-6 text-[#006838]">
                Chairperson - JKKN Institutions
              </h3>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  As the Chairperson of JKKN Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in our exceptional progress. We have earned the status of one of the most prestigious colleges in the region. "Leadership and Excellence" is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure and the exceptional quality of our community.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  Our institution provides the necessary infrastructure along with a team of qualified and highly motivated faculty all under one roof for the benefit of our students. Beyond offering world-class education, we instil a progressive attitude, fostering innovation for the betterment of society. The synergy of academic excellence and industrial relevance distinguishes JKKN Institutions, setting us apart. I warmly welcome you to our lush, green campus!
                </p>
              </div>
            </div>

            {/* Director */}
            <div className="flex flex-col items-center">
              {/* Framed Portrait */}
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] mb-8">
                <Image
                  src="/images/Our_Management-2.webp"
                  alt="Mr.S.Ommsharravana"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Name */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#006838]">
                MR.S.OMMSHARRAVANA
              </h2>

              {/* Position */}
              <h3 className="text-lg md:text-xl font-bold text-center mb-6 text-[#006838]">
                Director - JKKN Institutions
              </h3>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, we are committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. Our mission empowers students to contribute their best to society and the nation.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  Together, we strive to make JKKN a premier temple of learning, guiding and inspiring students in their unique paths. Our aim is to cultivate top-notch professionals who excel in their fields, with their flags of success flying high in this vibrant world of competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
