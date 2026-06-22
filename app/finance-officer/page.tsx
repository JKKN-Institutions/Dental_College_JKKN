import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Finance Officer | JKKN Dental College',
  description: 'Meet Mr. K. Velayutham, MBA, Finance Officer at JKKN Dental College, managing financial planning, budgeting, and institutional growth.',
  keywords: 'Finance Officer, JKKN Dental College, K. Velayutham, financial management, budgeting, financial planning, institutional finance',
  openGraph: {
    title: 'Finance Officer | JKKN Dental College',
    description: 'Meet Mr. K. Velayutham, MBA, Finance Officer at JKKN Dental College, managing financial planning, budgeting, and institutional growth.',
    url: 'https://dental.jkkn.ac.in/finance-officer/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/finance-officer/');
const speakableSchema = generateSpeakableWebPageSchema({
  title: 'Finance Officer | JKKN Dental College',
  description: 'Meet Mr. K. Velayutham, MBA, Finance Officer at JKKN Dental College, managing financial planning, budgeting, and institutional growth.',
  url: 'https://dental.jkkn.ac.in/finance-officer/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function FinanceOfficer() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <main className="overflow-x-hidden w-full">
        <Header />

        {/* Hero Section */}
        <div className="bg-[#006837] pt-16 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
              <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide">
              FINANCE OFFICER
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
              <div className="w-2 h-2 rounded-full bg-[#7cb983]" />
              <div className="h-px w-16 sm:w-32 bg-[#7cb983] opacity-60" />
            </div>
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

        {/* Profile Card */}
        <section className="bg-[#FBFBEE] pt-2 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="flex flex-col md:flex-row items-center gap-8 p-8">

                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-2xl border border-[#7cb983] opacity-40" />
                    <div className="w-[200px] rounded-xl overflow-hidden border-2 border-[#7cb983] shadow-md">
                      <img
                        src="/images/finance-officer-image.jpg"
                        alt="Mr. K. Velayutham"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                  <p className="text-sm font-semibold text-[#7cb983] uppercase tracking-widest">
                    Finance Officer
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#006837]">
                    Mr. K. Velayutham, MBA
                  </h2>
                  <span className="inline-block bg-[#006837] text-white text-sm font-medium px-5 py-1.5 rounded-full">
                    JKKN Institutions, Komarapalayam
                  </span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Description & Contact */}
        <section className="bg-[#FBFBEE] pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-8 bg-[#006837] rounded-full" />
              <div className="w-1 h-5 bg-[#7cb983] rounded-full" />
            </div>

            <div className="space-y-6 text-gray-700 text-justify leading-relaxed">
              <p>
                Mr. K. Velayutham, MBA, serves as the Finance Officer of JKKN Institutions, overseeing financial planning, budgeting, and resource allocation to ensure the institution&apos;s financial stability and growth. With his extensive expertise in financial management, he plays a crucial role in optimizing financial operations, ensuring compliance with regulations, and supporting the institution&apos;s mission of academic excellence.
              </p>
            </div>

            {/* Contact Card */}
            <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#006837] to-[#7cb983]" />
              <div className="p-6">
                <p className="text-[#006837] font-bold mb-4">
                  For any financial queries or assistance, please contact:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-pink-500 text-lg">📱</span>
                    <span className="font-semibold text-gray-700">Mobile:</span>
                    <a href="tel:+919788285818" className="text-gray-700 hover:text-[#006837] transition-colors">
                      +91 97882 85818
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-lg">📧</span>
                    <span className="font-semibold text-gray-700">Email:</span>
                    <a href="mailto:velayutham.k@jkkn.ac.in" className="text-gray-700 hover:text-[#006837] transition-colors">
                      velayutham.k@jkkn.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
