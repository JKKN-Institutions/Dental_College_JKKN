import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/research/institutional-ethical-committee/' },
  title: 'Institutional Ethics Committee (IEC) | JKKN Dental College',
  description: 'JKKN IEC ensures ethical research standards, protecting participant rights and promoting responsible biomedical research practices.',
  keywords: 'institutional ethics committee, IEC, research ethics, biomedical research, participant protection, DHR registration, JKKN Dental College',
  openGraph: {
    title: 'Institutional Ethics Committee (IEC) | JKKN Dental College',
    description: 'JKKN IEC ensures ethical research standards, protecting participant rights and promoting responsible biomedical research practices.',
    url: 'https://dental.jkkn.ac.in/research/institutional-ethical-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const responsibilities = [
  {
    label: 'Reviews & Approves Research Proposals –',
    text: 'Evaluates research studies to ensure they adhere to ethical principles, scientific validity, and participant welfare.',
  },
  {
    label: 'Protects Participant Rights & Well-being –',
    text: 'Ensures informed consent, confidentiality, and risk minimization in all research activities.',
  },
  {
    label: 'Monitors Ongoing Research –',
    text: 'Conducts periodic reviews and audits to ensure ethical compliance throughout the research process.',
  },
  {
    label: 'Guides Researchers on Ethical Conduct –',
    text: 'Provides support and training on ethical guidelines, regulatory requirements, and best practices.',
  },
  {
    label: 'Upholds Institutional & National Research Ethics –',
    text: 'Ensures that all research conducted at JKKN adheres to the regulations set forth by the Indian Council of Medical Research (ICMR) and other governing bodies.',
  },
];

export default function InstitutionalEthicalCommittee() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Institutional Ethics Committee (IEC) | JKKN Dental College',
    description: 'JKKN IEC ensures ethical research standards, protecting participant rights and promoting responsible biomedical research practices.',
    url: 'https://dental.jkkn.ac.in/research/institutional-ethical-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Institutional Ethical Committee', url: 'https://dental.jkkn.ac.in/research/institutional-ethical-committee/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 uppercase tracking-wide">
            INSTITUTIONAL ETHICAL COMMITTEE
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-6 rounded-full" />
          <p className="hero-description text-white/85 text-base leading-relaxed max-w-3xl">
            The JKKN Institutional Ethics Committee (IEC) is dedicated to ensuring the highest ethical standards in research involving human participants. As a multidisciplinary committee, the IEC plays a critical role in safeguarding the rights, safety, and well-being of research participants while promoting ethical and responsible research practices within JKKN.
          </p>
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Official Recognition & Compliance */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">
                Official Recognition &amp; Compliance
              </h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The JKKN IEC is registered with the Department of Health Research (DHR), Government of India, in compliance with the National Ethical Guidelines for Biomedical and Health Research Involving Human Participants. This registration underscores our commitment to ethical research practices, aligning with national and international standards to ensure research integrity and participant protection.
              </p>
            </div>
          </div>

          {/* Role & Responsibilities */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">
                Role &amp; Responsibilities
              </h2>
            </div>
            <div className="px-6 pt-5 pb-2">
              <p className="text-sm md:text-base font-bold text-[#002309] mb-4">
                The IEC serves as an independent body that:
              </p>
            </div>
            <ul className="px-6 pb-5 space-y-4">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006837] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="font-bold text-[#006837]">{item.label}</span>{' '}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Commitment to Ethical Research */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">
                Commitment to Ethical Research
              </h2>
            </div>
            <div className="px-6 py-5 space-y-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                By fostering a culture of ethical research, the JKKN IEC strengthens public trust, promotes academic excellence, and ensures that scientific advancements are conducted with integrity and accountability. Our institution remains committed to upholding ethical research practices that contribute to societal well-being while respecting participant dignity and rights. For inquiries or research proposal submissions, please contact
              </p>

              {/* Contact Box */}
              <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 space-y-1">
                <p className="font-bold text-[#002309] text-sm md:text-base">Dr T Dinesh Kumar</p>
                <p className="font-bold text-[#002309] text-sm md:text-base">Member Secretary</p>
                <p className="font-bold text-[#002309] text-sm md:text-base">JKKN Institutional Ethics Committee</p>
                <p className="font-bold text-[#002309] text-sm md:text-base">E mail Id: iec@jkkn.ac.in</p>
                <p className="font-bold text-[#002309] text-sm md:text-base">Contact No. 8610365007</p>
              </div>
            </div>
          </div>

          {/* PDF Button */}
          <div>
            <a
              href="/pdf/INSTITUTIONAL-ETHICS-COMMITTEE-Provisional-Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-12 rounded-xl transition-colors duration-200 uppercase text-sm shadow-sm"
            >
              PROVISIONAL CERTIFICATE
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
