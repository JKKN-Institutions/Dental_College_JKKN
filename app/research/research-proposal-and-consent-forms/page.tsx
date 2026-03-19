import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Research Proposal & Consent Forms | JKKN Dental College',
  description: 'Download research proposal templates, informed consent documents, and ethical committee forms for PG dissertation submissions at JKKN.',
  keywords: 'research proposal forms, informed consent, IEC forms, dissertation proposal, clinical research forms, ethics committee, JKKN research',
  openGraph: {
    title: 'Research Proposal & Consent Forms | JKKN Dental College',
    description: 'Download research proposal templates, informed consent documents, and ethical committee forms for PG dissertation submissions at JKKN.',
    url: 'https://dental.jkkn.ac.in/research/research-proposal-and-consent-forms/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function ResearchProposalAndConsentForms() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Research Proposal & Consent Forms | JKKN Dental College',
    description: 'Download research proposal templates, informed consent documents, and ethical committee forms for PG dissertation submissions at JKKN.',
    url: 'https://dental.jkkn.ac.in/research/research-proposal-and-consent-forms/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Research Proposal & Consent Forms', url: 'https://dental.jkkn.ac.in/research/research-proposal-and-consent-forms/' },
      ]} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>RESEARCH PROPOSAL AND CONSENT FORMS</span>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12">
            RESEARCH PROPOSAL AND CONSENT FORMS
          </h1>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left Column */}
            <div className="space-y-8">

              {/* FORMAT FOR SUBMITTING PG DISSERTATION PROPOSAL */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  FORMAT FOR SUBMITTING PG DISSERTATION PROPOSAL
                </h2>
                <a
                  href="/pdf/FORMAT-FOR-SUBMITTING-PG-DISSERTATION-PROPOSAL-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
              </div>

              {/* (For Institute Ethics Committee (IEC)-Human Studies) */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  (For Institute Ethics Committee (IEC)-Human Studies)
                </h2>
                <a
                  href="/pdf/For-Institute-Ethics-Committee-(IEC)-Human Studies-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
              </div>

              {/* INFORMED CONSENT DOCUMENT (ICD) PART-I */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  INFORMED CONSENT DOCUMENT (ICD) PART-I
                </h2>
                <a
                  href="/pdf/INFORMED-CONSENT-DOCUMENT-(ICD)-PART-I-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
              </div>

              {/* INFORMED CONSENT DOCUMENT (ICD) PART-2 */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  INFORMED CONSENT DOCUMENT (ICD) PART-2
                </h2>
                <a
                  href="/pdf/INFORMED-CONSENT-DOCUMENT-(ICD)-PART-2-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-8">

              {/* Assent form to participate in a clinical research */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  Assent form to participate in a clinical research
                </h2>
                <a
                  href="/pdf/Assent-form-to-participate-in-a-clinical-research-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
              </div>

              {/* Application form for requesting waiver of consent */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  Application form for requesting waiver of consent
                </h2>
                <a
                  href="/pdf/Application-form-for-requesting-waiver-of-consent-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
              </div>

              {/* REVIEW EXEMPTION APPLICATION FORM */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  REVIEW EXEMPTION APPLICATION FORM
                </h2>
                <a
                  href="/pdf/REVIEW-EXEMPTION-APPLICATION-FORM-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
              </div>

              {/* CHECK LIST */}
              <div>
                <h2 className="text-base md:text-lg font-bold text-black mb-3">
                  CHECK LIST
                </h2>
                <a
                  href="/pdf/CHECK-LIST-RPCF.pdf"
                  className="inline-block bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563] font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  "Download"
                </a>
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
