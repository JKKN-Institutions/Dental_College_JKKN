import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/about/institutional-development-plan/' },
  title: 'Institutional Development Plan | JKKN Dental College IDP',
  description: 'JKKN Dental College IDP aligned with NEP 2020, UGC guidelines & SDGs. Strategic goals for academic excellence, research & community health.',
  keywords: 'institutional development plan, IDP, NEP 2020, UGC guidelines, strategic planning',
  openGraph: {
    title: 'Institutional Development Plan | JKKN Dental College IDP',
    description: 'JKKN Dental College IDP aligned with NEP 2020, UGC guidelines & SDGs. Strategic goals for academic excellence, research & community health.',
    url: 'https://dental.jkkn.ac.in/about/institutional-development-plan/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function InstitutionalDevelopmentPlan() {
  const breadcrumbSchema = generateBreadcrumbSchema('/about/institutional-development-plan');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Institutional Development Plan | JKKN Dental College IDP',
    description: 'JKKN Dental College IDP aligned with NEP 2020, UGC guidelines & SDGs. Strategic goals for academic excellence, research & community health.',
    url: 'https://dental.jkkn.ac.in/about/institutional-development-plan/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] to-[#002309] pt-16">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            INSTITUTIONAL DEVELOPMENT PLAN
          </h1>
          <div className="mt-4 w-20 h-[3px] bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Breadcrumb strip */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            <li><a href="/" className="text-gray-500 hover:text-[#006837] transition-colors">Home</a></li>
            <li className="text-gray-300 select-none">/</li>
            <li><span className="text-gray-500">About</span></li>
            <li className="text-gray-300 select-none">/</li>
            <li className="text-[#006837] font-medium" aria-current="page">Institutional Development Plan</li>
          </ol>
        </div>
      </nav>

      {/* Content Section */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* H2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#006837]">
            Institutional Development Plan (IDP)
          </h2>

          {/* Commitment card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#006837] px-8 py-4">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Commitment to Academic Excellence and National Educational Goals
              </h3>
            </div>
            <div className="px-8 py-8 space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                At <strong>JKKN Dental College & Hospital</strong>, we are deeply committed to holistic institutional growth guided by the University Grants Commission (UGC) framework for Institutional Development Plans (IDPs). Our IDP is designed to reflect the principles of NEP 2020, ensuring academic innovation, community engagement, digital transformation, and sustainable development.
              </p>
              <div>
                <p className="text-gray-700 font-bold mb-4">
                  We affirm that our Institutional Development Plan:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray-700">
                    <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                    Adheres to the UGC Guidelines for IDPs for Higher Educational Institutions (HEIs).
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                    Aligns with National Education Policy (NEP) 2020, Sustainable Development Goals (SDGs), and the National Credit Framework (NCrF).
                  </li>
                  <li className="flex gap-3 text-gray-700">
                    <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                    Is tailored to our vision of producing competent, ethical dental professionals while contributing meaningfully to society and global healthcare.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision quote card */}
          <div className="border-l-4 border-[#7cb983] bg-white rounded-r-2xl px-8 py-6 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-[#006837] mb-3">Our Vision</h3>
            <p className="text-gray-700 italic text-lg">
              &ldquo;To be a Leading Global Innovative Solution Provider for the Ever-Changing Needs of Society.&rdquo;
            </p>
          </div>

          {/* Institutional Documents card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#7cb983] px-8 py-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Institutional Documents</h3>
            </div>
            <div className="px-8 py-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We are proud to share our strategic development plans and UGC regulatory framework as a part of our commitment to transparency and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/pdf/Download-UGC-IDP-Guidelines.pdf"
                  download
                  className="bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center uppercase text-sm"
                >
                  DOWNLOAD UGC IDP GUIDELINES
                </a>
                <a
                  href="/pdf/Download-JKKN-IDP-Document.pdf"
                  download
                  className="bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center uppercase text-sm"
                >
                  DOWNLOAD JKKN IDP DOCUMENT
                </a>
              </div>
            </div>
          </div>

          {/* Highlights card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#006837] px-8 py-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Highlights of JKKN IDP</h3>
            </div>
            <ul className="px-8 py-8 space-y-3">
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                Strategic goals focused on academic excellence, research, community health, and financial sustainability.
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                Robust senior learner development and interdisciplinary learning initiatives.
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                Comprehensive community engagement through dental camps and outreach programs.
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                Integration of digital technologies in learning and administration.
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#7cb983]" />
                Environmentally responsible infrastructure upgrades with green campus initiatives.
              </li>
            </ul>
          </div>

          {/* In Alignment With card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#7cb983] px-8 py-4">
              <h3 className="text-lg md:text-xl font-bold text-white">In Alignment With</h3>
            </div>
            <ul className="px-8 py-8 space-y-3">
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#006837]" />
                University Grants Commission (UGC)
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#006837]" />
                Dental Council of India (DCI)
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#006837]" />
                Tamil Nadu Dr. M.G.R. Medical University
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#006837]" />
                National Education Policy 2020 (NEP)
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#006837]" />
                NAAC Accreditation Framework
              </li>
            </ul>
          </div>

          {/* Contact card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#006837] px-8 py-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Contact for More Information</h3>
            </div>
            <div className="px-8 py-8 space-y-4">
              <p className="text-gray-700">
                For queries related to the Institutional Development Plan, please contact:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> dental@jkkn.ac.in</p>
                <p><strong>Phone:</strong> +91 93458 55001</p>
                <p><strong>Office:</strong> Principal&apos;s Office, JKKN Dental College &amp; Hospital</p>
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
