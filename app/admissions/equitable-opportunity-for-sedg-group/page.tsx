import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/admissions/equitable-opportunity-for-sedg-group/' },
  title: 'Equitable Opportunity for SEDG Group - JKKN Dental College',
  description: 'JKKN Dental College\'s commitment to inclusive education through equitable access for Socio-Economically Disadvantaged Groups per UGC 2024.',
  keywords: 'SEDG group, inclusive education, UGC guidelines, reservation policy, SC ST OBC EWS, JKKN Dental College admission, equitable access, NEP 2020',
  openGraph: {
    title: 'Equitable Opportunity for SEDG Group - JKKN Dental College',
    description: 'JKKN Dental College\'s commitment to inclusive education through equitable access for Socio-Economically Disadvantaged Groups per UGC 2024.',
    url: 'https://dental.jkkn.ac.in/admissions/equitable-opportunity-for-sedg-group/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const sections = [
  {
    number: '1',
    title: 'Inclusive Admission Policy',
    points: [
      'Adheres to government-mandated reservation policies for SC, ST, OBC, and EWS categories.',
      'Ensures transparency through published admission lists and submission of data to government monitoring bodies.',
    ],
  },
  {
    number: '2',
    title: 'Documentation and Monitoring',
    points: [
      'Maintains comprehensive admission records, government directives, and certified institutional reports.',
      'Tracks seat utilization under reserved categories over the past five years for continual assessment.',
    ],
  },
  {
    number: '3',
    title: 'Transparency and Governance',
    points: [
      'Submits annual reports and extracts to state and central social justice departments.',
      'Displays strong institutional governance through compliance documentation and audit trails.',
    ],
  },
  {
    number: '4',
    title: 'Institutional Commitment to Equity',
    points: [
      'Supports underprivileged learners through accessible admission processes and policy implementation.',
      'Focuses on long-term inclusivity aligned with NEP 2020 and NAAC criteria.',
    ],
  },
];

export default function EquitableOpportunityForSEDGGroup() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admissions/equitable-opportunity-for-sedg-group');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Equitable Opportunity for SEDG Group - JKKN Dental College',
    description: "JKKN Dental College's commitment to inclusive education through equitable access for Socio-Economically Disadvantaged Groups per UGC 2024.",
    url: 'https://dental.jkkn.ac.in/admissions/equitable-opportunity-for-sedg-group/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-5 text-sm text-white/60 flex items-center gap-2">
            <span>Home</span>
            <span>›</span>
            <span className="text-white/90">EQUITABLE OPPORTUNITY FOR SEDG GROUP</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 uppercase tracking-wide">
            EQUITABLE OPPORTUNITY FOR SEDG GROUP
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-6 rounded-full" />
          <p className="hero-description text-white/85 text-base md:text-lg leading-relaxed max-w-3xl">
            JKKN Dental College is committed to inclusive education by providing equitable access to learners from Socio-Economically Disadvantaged Groups (SEDGs). The following initiatives reflect our alignment with the UGC&apos;s 2024 guidelines:
          </p>
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* 4 Section Cards */}
          {sections.map((section) => (
            <div
              key={section.number}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
                  {section.number}
                </div>
                <h2 className="text-white font-bold text-base md:text-lg">
                  {section.title}
                </h2>
              </div>
              <ul className="px-6 py-5 space-y-3">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7cb983] mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Conclusion */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#7cb983]/30 px-6 py-5">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              This integrated approach ensures JKKN Dental College&apos;s alignment with UGC&apos;s vision for empowering disadvantaged learners and promoting inclusive education in higher education institutions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="/pdf/Equitable-Opportunity-for-SEDG.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-10 rounded-xl transition-colors duration-200 uppercase text-sm text-center shadow-sm"
            >
              EQUITABLE OPPORTUNITY FOR SEDGs
            </a>
            <a
              href="/pdf/EQUITABLE-OPPORTUNITY-FOR-SEDG-UGC-Guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-[#FBFBEE] text-[#006837] font-bold py-3 px-10 rounded-xl border-2 border-[#006837] transition-colors duration-200 uppercase text-sm text-center"
            >
              UGC GUIDELINES
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
