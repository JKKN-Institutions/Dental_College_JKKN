import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Education Department | JKKN Dental College',
  description: 'Enhancing quality dental education through curriculum development, research integration, and modern teaching methodologies at JKKN.',
  keywords: 'dental education department, curriculum development, dental faculty, educational quality, teaching methodology, JKKN dental college',
  openGraph: {
    title: 'Dental Education Department | JKKN Dental College',
    description: 'Enhancing quality dental education through curriculum development, research integration, and modern teaching methodologies at JKKN.',
    url: 'https://dental.jkkn.ac.in/committee/dental-education-department/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function DentalEducationDepartment() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/dental-education-department');
  const webPageSchema = generateWebPageSchema({
    title: 'Dental Education Department - JKKN Dental College',
    description: 'Enhancing quality dental education through curriculum development, research integration, and modern teaching methodologies at JKKN.',
    url: 'https://dental.jkkn.ac.in/committee/dental-education-department/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Dental Education Department | JKKN Dental College',
    description: 'Enhancing quality dental education through curriculum development, research integration, and modern teaching methodologies at JKKN.',
    url: 'https://dental.jkkn.ac.in/committee/dental-education-department/',
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
            DENTAL EDUCATION DEPARTMENT
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983] mb-10">
            <p className="hero-description text-gray-700 text-base leading-relaxed text-justify">
              The Dental Education Department is a vital entity within dental schools or institutions dedicated to overseeing and enhancing the quality of dental education. Comprising dental senior learners, administrators, and sometimes external experts, the committee collaborates to ensure the learning framework aligns with industry standards and educational objectives. It assesses and updates the dental program regularly, integrating advancements in dental research and technology. The committee also reviews teaching methodologies, assessment strategies, and clinical training to promote effective learning and skill development among dental learners. By fostering a supportive learning environment and continuously improving the educational experience, the Dental Education Committee aims to produce competent and compassionate dental professionals prepared to meet the challenges of the dental field.
            </p>
          </div>

          {/* Committee Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: 'Chairman', name: 'Dr. B . Dhanasekar' },
              { label: 'Co-Chairman', name: 'Dr.B. Sasirekha' },
              { label: 'Secretary', name: 'Dr.N.S.Naveenraj' },
              { label: 'Coordinator', name: 'Dr. SaiSadan' },
              { label: 'Joint Coordinator', name: 'Dr. Vinod Thangasamy' },
            ].map(({ label, name }) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#7cb983] uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-[#002309] font-bold text-sm">{name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Executive Members */}
          <p className="text-base text-[#006837] font-bold mt-10 mb-5">
            Executive members :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Dr. Kumaran',
              'Dr. Linda Christabel',
              'Dr. Swathiraman',
              'Dr. Radhika',
            ].map((name) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#006837]" />
                </div>
                <p className="text-[#002309] font-bold text-sm">{name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
