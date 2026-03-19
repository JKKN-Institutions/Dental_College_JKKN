import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
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

export default function InstitutionalEthicalCommittee() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Institutional Ethics Committee (IEC) | JKKN Dental College',
    description: 'JKKN IEC ensures ethical research standards, protecting participant rights and promoting responsible biomedical research practices.',
    url: 'https://dental.jkkn.ac.in/research/institutional-ethical-committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Institutional Ethical Committee', url: 'https://dental.jkkn.ac.in/research/institutional-ethical-committee/' },
      ]} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            INSTITUTIONAL ETHICAL COMMITTEE
          </h1>

          {/* Introduction */}
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            The JKKN Institutional Ethics Committee (IEC) is dedicated to ensuring the highest ethical standards in research involving human participants. As a multidisciplinary committee, the IEC plays a critical role in safeguarding the rights, safety, and well-being of research participants while promoting ethical and responsible research practices within JKKN.
          </p>

          {/* Official Recognition & Compliance */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Official Recognition & Compliance
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            The JKKN IEC is registered with the Department of Health Research (DHR), Government of India, in compliance with the National Ethical Guidelines for Biomedical and Health Research Involving Human Participants. This registration underscores our commitment to ethical research practices, aligning with national and international standards to ensure research integrity and participant protection.
          </p>

          {/* Role & Responsibilities */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Role & Responsibilities
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed font-bold">
            The IEC serves as an independent body that:
          </p>

          <div className="space-y-3 mb-6 text-gray-700">
            <p className="leading-relaxed">
              <span className="font-bold">Reviews & Approves Research Proposals –</span> Evaluates research studies to ensure they adhere to ethical principles, scientific validity, and participant welfare.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Protects Participant Rights & Well-being –</span> Ensures informed consent, confidentiality, and risk minimization in all research activities.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Monitors Ongoing Research –</span> Conducts periodic reviews and audits to ensure ethical compliance throughout the research process.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Guides Researchers on Ethical Conduct –</span> Provides support and training on ethical guidelines, regulatory requirements, and best practices.
            </p>

            <p className="leading-relaxed">
              <span className="font-bold">Upholds Institutional &amp; National Research Ethics –</span> Ensures that all research conducted at JKKN adheres to the regulations set forth by the Indian Council of Medical Research (ICMR) and other governing bodies.
            </p>
          </div>

          {/* Commitment to Ethical Research */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Commitment to Ethical Research
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            By fostering a culture of ethical research, the JKKN IEC strengthens public trust, promotes academic excellence, and ensures that scientific advancements are conducted with integrity and accountability. Our institution remains committed to upholding ethical research practices that contribute to societal well-being while respecting participant dignity and rights. For inquiries or research proposal submissions, please contact
          </p>

          {/* Contact Information */}
          <div className="text-gray-700 mb-6 space-y-1">
            <p className="font-bold">Dr T Dinesh Kumar</p>
            <p className="font-bold">Member Secretary</p>
            <p className="font-bold">JKKN Institutional Ethics Committee</p>
            <p className="font-bold">E mail Id: iec@jkkn.ac.in</p>
            <p className="font-bold">Contact No. 8610365007</p>
          </div>

          {/* Button */}
          <div className="mb-12">
            <a
              href="/pdf/INSTITUTIONAL-ETHICS-COMMITTEE-Provisional-Certificate.pdf"
              className="inline-block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-8 rounded transition-all duration-300 uppercase text-sm"
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
