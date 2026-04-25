import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
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
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Careers - Join JKKN Dental College & Hospital',
    description: 'Explore career opportunities at JKKN Dental College & Hospital. Join our team of excellence in dental education, research, and healthcare.',
    url: 'https://dental.jkkn.ac.in/information-center/careers/',
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
            CAREERS
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-6 rounded-full" />
          <h2 className="text-lg md:text-xl font-semibold text-white/90 mb-1">
            Career Opportunities at JKKN Dental College & Hospital
          </h2>
          <h3 className="text-base md:text-lg font-semibold text-white/80">
            Join Our Team of Excellence in Dental Education& Healthcare
          </h3>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                About Careers at JKKN
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                At JKKN Dental College &amp; Hospital, we are committed to fostering a dynamic and innovative work environment where passionate professionals can thrive. As a premier institution dedicated to dental education, research, and patient care, we are always looking for talented individuals to join our team.
              </p>
            </div>
          </div>

          {/* Why Work with Us */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Why Work with Us?
              </h3>
            </div>
            <div className="px-6 py-5 space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Opportunities for Career Growth – Be part of a leading dental institution with access to cutting- edge research and academic excellence.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">State-of-the-Art Facilities – Work in a technologically advanced environment that supports innovation and excellence in dental healthcare.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Collaborative Work Culture – Engage in a vibrant community of educators, researchers, and healthcare professionals.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Commitment to Research &amp; Innovation – Contribute to groundbreaking dental research and clinical advancements.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Competitive Benefits &amp; Professional Development – Enjoy a rewarding career with ongoing learning opportunities.</p>
              </div>
            </div>
          </div>

          {/* Current Job Openings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Current Job Openings
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                We are looking for highly motivated professionals in the following categories:
              </p>
              <div className="space-y-3">
                <div className="bg-[#FBFBEE] rounded-lg px-4 py-3">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    <strong>Faculty Positions –</strong> Professors, Associate Professors, and Assistant Professors in various dental and allied health sciences departments.
                  </p>
                </div>
                <div className="bg-[#FBFBEE] rounded-lg px-4 py-3">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    <strong>Research & Development Roles –</strong> Researchers and innovators in oral healthcare technologies.
                  </p>
                </div>
                <div className="bg-[#FBFBEE] rounded-lg px-4 py-3">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Administrative & Support Staff – Roles in hospital management, academic administration, and technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                How to Apply?
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-3">
                Explore our latest job openings and submit your application online through our CVVIZ recruitment portal.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                <strong>Apply Now:</strong> <a href="https://jobs.cvviz.com/jkkn_institutions" className="text-[#16A085] hover:underline" target="_blank" rel="noopener noreferrer">https://jobs.cvviz.com/jkkn_institutions</a>
              </p>
            </div>
          </div>

          {/* Be a Part of Our Mission */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Be a Part of Our Mission
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                At JKKN Dental College & Hospital, we are shaping the future of dental education and healthcare. If you are passionate about making a difference, we invite you to join our team and grow with us!
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                For job-related inquiries, contact us:
              </h3>
            </div>
            <div className="px-6 py-5">
              <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 space-y-2">
                <p className="text-[#002309] font-bold text-sm md:text-base">
                  <strong>Mr N. Narayan Rao</strong>
                </p>
                <p className="text-[#002309] font-bold text-sm md:text-base">
                  <strong>90923 27666</strong>
                </p>
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
