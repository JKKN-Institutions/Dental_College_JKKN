'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Trust | JKKN Dental College",
  "url": "https://dental.jkkn.ac.in/our-trust/",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".hero-description", "article p"],
  },
};

export default function OurTrust() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Our Trust', url: 'https://dental.jkkn.ac.in/our-trust/' },
      ]} />
      <Header />

      {/* Hero Section */}
      <section className="bg-[#006837] pt-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">

          {/* Decorative top ornament */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-16 sm:w-24 bg-[#7cb983] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
            <div className="h-px w-16 sm:w-24 bg-[#7cb983] opacity-60" />
          </div>

          {/* Portrait with decorative frame rings */}
          <div className="relative mb-10">
            <div className="absolute -inset-3 rounded-2xl border border-[#7cb983] opacity-30" />
            <div className="absolute -inset-6 rounded-2xl border border-[#7cb983] opacity-15" />
            <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden border-2 border-[#7cb983] shadow-2xl">
              <Image
                src="/images/Our_Trust.webp"
                alt="Shri. J.K.K. Nattraja"
                width={300}
                height={300}
                className="w-full h-full object-contain bg-[#FBFBEE]"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white tracking-wide mb-3">
            SHRI. J.K.K. NATTRAJA
          </h1>

          {/* Subtitle */}
          <h2 className="text-base md:text-lg font-medium text-center text-[#7cb983] mb-10 tracking-wider">
            Founder J.K.K. Rangammal Charitable Trust
          </h2>

          {/* Decorative bottom ornament */}
          <div className="flex items-center gap-4">
            <div className="h-px w-16 sm:w-24 bg-[#7cb983] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
            <div className="h-px w-16 sm:w-24 bg-[#7cb983] opacity-60" />
          </div>
        </div>

        {/* Wave divider into content section */}
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
      </section>

      {/* Content Section */}
      <section className="bg-[#FBFBEE] pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Section accent bar */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-1 h-8 bg-[#006837] rounded-full" />
            <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
          </div>

          <article className="space-y-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              In the 1960s, female children in Komarapalayam had to walk 2.5 km to the nearby town of Bhavani for schooling. Some parents hesitated to send their daughters, while others ceased their children&apos;s education altogether, resulting in them staying at home or working in handlooms and dyeing industries. Recognizing the need for women&apos;s education, Shri J.K.K. Nattraja, a visionary philanthropist of the area, initiated a girls&apos; school in the town in 1965, four years before the inception of the trust.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify pl-5 border-l-4 border-[#7cb983]">
              The Trust, J.K.K. Rangammal Charitable Trust (Reg No: 33), was established in 1969 with the mission of providing literacy and empowering women, aiming to upgrade the socio-economic status of the community. Following in her father&apos;s footsteps, Smt. N. Sendamaraai, Managing Trustee, expanded the service to offer multi-disciplinary education to both genders. Now, under the umbrella of the Trust, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges, as well as a Government-Aided Girls&apos; School and Matriculation schools.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              The Trust actively engages in various social service activities, including health-oriented services like free dental camps, treatments, surgeries, blood donation drives, and motivational and entrepreneurship awareness camps. It also extends its charitable efforts to provide medical support to the impoverished, assist the destitute, offer natural calamity support, grant educational scholarships to underprivileged students, and foster cultural enrichment. A pioneering establishment of the region since its inception, the Trust&apos;s grand service to society remains immense, not only in terms of education but also in community welfare.
            </p>
          </article>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
