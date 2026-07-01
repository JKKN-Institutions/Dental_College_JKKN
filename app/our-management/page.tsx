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

      {/* Decorative page topper */}
      <div className="bg-[#006837] pt-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
            <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide mt-8">
            Our Management
          </h1>
        </div>
        <div className="overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-16 block"
            fill="#FBFBEE"
          >
            <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* Management Section */}
      <section className="bg-[#FBFBEE] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Chairperson Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8 flex flex-col items-center">

                {/* Portrait */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-2xl border border-[#7cb983] opacity-40" />
                  <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-xl overflow-hidden border-2 border-[#7cb983] shadow-md">
                    <Image
                      src="/images/Our_Management-1.webp"
                      alt="Smt.N.Sendamaraai"
                      width={260}
                      height={260}
                      className="w-full h-full object-contain bg-[#FBFBEE]"
                      priority
                    />
                  </div>
                </div>

                {/* Name */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#006837] mb-3">
                  SMT.N.SENDAMARAAI
                </h2>

                {/* Position Badge */}
                <span className="inline-block bg-[#006837] text-white text-sm font-medium px-5 py-1.5 rounded-full mb-6">
                  Chairperson - JKKN Institutions
                </span>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-6" />

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                    As the Chairperson of JKKN Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in our exceptional progress. We have earned the status of one of the most prestigious colleges in the region. &quot;Leadership and Excellence&quot; is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure and the exceptional quality of our community.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                    Our institution provides the necessary infrastructure along with a team of qualified and highly motivated senior learners all under one roof for the benefit of our learners. Beyond offering world-class education, we instil a progressive attitude, fostering innovation for the betterment of society. The synergy of academic excellence and industrial relevance distinguishes JKKN Institutions, setting us apart. I warmly welcome you to our lush, green campus!
                  </p>
                </div>
              </div>
            </div>

            {/* Director Card */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-8 flex flex-col items-center">

                {/* Portrait */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-2xl border border-[#7cb983] opacity-40" />
                  <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-xl overflow-hidden border-2 border-[#7cb983] shadow-md">
                    <Image
                      src="/images/Our_Management-2.webp"
                      alt="Mr.S.Ommsharravana"
                      width={260}
                      height={260}
                      className="w-full h-full object-contain bg-[#FBFBEE]"
                      priority
                    />
                  </div>
                </div>

                {/* Name */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#006837] mb-3">
                  MR.S.OMMSHARRAVANA
                </h2>

                {/* Position Badge */}
                <span className="inline-block bg-[#006837] text-white text-sm font-medium px-5 py-1.5 rounded-full mb-6">
                  Director - JKKN Institutions
                </span>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-6" />

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                    I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, we are committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. Our mission empowers learners to contribute their best to society and the nation.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                    Together, we strive to make JKKN a premier temple of learning, guiding and inspiring learners in their unique paths. Our aim is to cultivate top-notch professionals who excel in their fields, with their flags of success flying high in this vibrant world of competition.
                  </p>
                </div>
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
