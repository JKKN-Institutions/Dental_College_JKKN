import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/information-center/careers/' },
  title: 'Careers - Join JKKN Dental College & Hospital',
  description: 'Explore career opportunities at JKKN Dental College & Hospital. Join our team of excellence in dental education, research, and healthcare.',
  keywords: 'JKKN dental careers, dental college jobs, faculty positions, dental teaching jobs, healthcare careers, research positions, Namakkal jobs, dental education careers, hospital jobs, academic positions',
  openGraph: {
    title: 'Careers - Join JKKN Dental College & Hospital',
    description: 'Explore career opportunities at JKKN Dental College & Hospital. Join our team of excellence in dental education, research, and healthcare.',
    url: 'https://dental.jkkn.ac.in/information-center/careers/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function Careers() {
  const breadcrumbSchema = generateBreadcrumbSchema('/information-center/careers');
  const webPageSchema = generateWebPageSchema({
    title: 'Careers - Join JKKN Dental College & Hospital',
    description: 'Explore career opportunities at JKKN Dental College & Hospital. Join our team of excellence in dental education, research, and healthcare.',
    url: 'https://dental.jkkn.ac.in/information-center/careers/',
    dateModified: '2026-06-01',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Careers - Join JKKN Dental College & Hospital',
    description: 'Explore career opportunities at JKKN Dental College & Hospital. Join our team of excellence in dental education, research, and healthcare.',
    url: 'https://dental.jkkn.ac.in/information-center/careers/',
    speakableCssSelectors: ['h1'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            CAREERS
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-4 rounded-full" />
          <p className="text-white/90 text-base md:text-lg font-medium">
            Career Opportunities at JKKN Dental College &amp; Hospital
          </p>
        </div>
      </section>

      {/* Job Portal Embed — at the top */}
      <div className="bg-[#FBFBEE] pt-8 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">
                Current Job Openings
              </h2>
            </div>
            <iframe
              src="https://jobs.cvviz.com/jkkn_institutions"
              title="JKKN Institutions Job Portal"
              className="w-full border-0 block"
              style={{ minHeight: '850px' }}
              loading="lazy"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-[#FBFBEE] pt-4 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                For job-related inquiries, contact us:
              </h3>
            </div>
            <div className="px-6 py-5">
              <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 space-y-2">
                <p className="text-[#002309] font-bold text-sm md:text-base">Mr N. Narayan Rao</p>
                <p className="text-[#002309] font-bold text-sm md:text-base">90923 27666</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
