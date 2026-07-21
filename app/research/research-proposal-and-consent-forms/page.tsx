import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/research/research-proposal-and-consent-forms/' },
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

const forms = [
  {
    title: 'FORMAT FOR SUBMITTING PG DISSERTATION PROPOSAL',
    href: '/pdf/FORMAT-FOR-SUBMITTING-PG-DISSERTATION-PROPOSAL-RPCF.pdf',
  },
  {
    title: 'Assent form to participate in a clinical research',
    href: '/pdf/Assent-form-to-participate-in-a-clinical-research-RPCF.pdf',
  },
  {
    title: '(For Institute Ethics Committee (IEC)-Human Studies)',
    href: '/pdf/For-Institute-Ethics-Committee-(IEC)-Human Studies-RPCF.pdf',
  },
  {
    title: 'Application form for requesting waiver of consent',
    href: '/pdf/Application-form-for-requesting-waiver-of-consent-RPCF.pdf',
  },
  {
    title: 'INFORMED CONSENT DOCUMENT (ICD) PART-I',
    href: '/pdf/INFORMED-CONSENT-DOCUMENT-(ICD)-PART-I-RPCF.pdf',
  },
  {
    title: 'REVIEW EXEMPTION APPLICATION FORM',
    href: '/pdf/REVIEW-EXEMPTION-APPLICATION-FORM-RPCF.pdf',
  },
  {
    title: 'INFORMED CONSENT DOCUMENT (ICD) PART-2',
    href: '/pdf/INFORMED-CONSENT-DOCUMENT-(ICD)-PART-2-RPCF.pdf',
  },
  {
    title: 'CHECK LIST',
    href: '/pdf/CHECK-LIST-RPCF.pdf',
  },
];

export default function ResearchProposalAndConsentForms() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Research Proposal & Consent Forms | JKKN Dental College',
    description: 'Download research proposal templates, informed consent documents, and ethical committee forms for PG dissertation submissions at JKKN.',
    url: 'https://dental.jkkn.ac.in/research/research-proposal-and-consent-forms/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Research Proposal & Consent Forms', url: 'https://dental.jkkn.ac.in/research/research-proposal-and-consent-forms/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-5 text-sm text-white/60 flex items-center gap-2">
            <span>Home</span>
            <span>›</span>
            <span className="text-white/90">RESEARCH PROPOSAL AND CONSENT FORMS</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 uppercase tracking-wide">
            RESEARCH PROPOSAL AND CONSENT FORMS
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Forms Grid */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {forms.map((form, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4 hover:shadow-md hover:border-[#7cb983]/40 transition-all duration-200"
              >
                <h2 className="text-sm md:text-base font-bold text-[#002309] leading-snug flex-1">
                  {form.title}
                </h2>
                <a
                  href={form.href}
                  download
                  className="inline-flex items-center gap-2 self-start bg-[#006837] hover:bg-[#005a2f] text-white font-semibold py-2 px-5 rounded-xl transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  &quot;Download&quot;
                </a>
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
