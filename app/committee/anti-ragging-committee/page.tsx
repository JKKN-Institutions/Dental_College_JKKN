import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { BookOpen, Phone, FileText } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/committee/anti-ragging-committee/' },
  title: 'Anti Ragging Committee | JKKN Dental College',
  description: 'JKKN Dental College maintains zero-tolerance towards ragging. View committee members, UGC guidelines, and helpline for a safe campus.',
  keywords: 'anti ragging committee, ragging free campus, student safety, UGC guidelines, zero tolerance policy, JKKN dental college, anti ragging helpline',
  openGraph: {
    title: 'Anti Ragging Committee | JKKN Dental College',
    description: 'JKKN Dental College maintains zero-tolerance towards ragging. View committee members, UGC guidelines, and helpline for a safe campus.',
    url: 'https://dental.jkkn.ac.in/committee/anti-ragging-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AntiRaggingCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/anti-ragging-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Anti Ragging Committee - JKKN Dental College',
    description: 'JKKN Dental College maintains zero-tolerance towards ragging. View committee members, UGC guidelines, and helpline for a safe campus.',
    url: 'https://dental.jkkn.ac.in/committee/anti-ragging-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Anti Ragging Committee | JKKN Dental College',
    description: 'JKKN Dental College maintains zero-tolerance towards ragging. View committee members, UGC guidelines, and helpline for a safe campus.',
    url: 'https://dental.jkkn.ac.in/committee/anti-ragging-committee/',
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ANTI RAGGING COMMITTEE
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-200 mb-2">
            Anti-Ragging Committee
          </h2>
          <p className="text-green-100 text-base md:text-lg font-medium">
            Creating a Safe, Respectful, and Inclusive Campus for All
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="hero-description text-gray-700 text-base leading-relaxed mb-4">
              At <span className="font-bold">JKKN Dental College &amp; Hospital</span>, we uphold the highest standards of learner welfare, dignity, and discipline. In line with the directives of the University Grants Commission (UGC) and Dental Council of India, our college maintains a strict zero-tolerance policy towards ragging in any form.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              The Anti-Ragging Committee has been constituted to ensure a ragging-free environment on campus, actively monitor learner interactions, and take swift action in case of any violations. We are committed to maintaining a culture of respect, safety, and academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FBFBEE] rounded-xl p-8 border border-green-100">
            <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4 flex items-center gap-3">
              <span className="text-2xl">👥</span> Members of the Anti-Ragging Committee
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Click the link below to view the current members of the Anti-Ragging Committee:
            </p>
            <a
              href="/pdf/ANTI-RAGGING-COMMITTEE-ViewCommitteeMembers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-sm uppercase"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              VIEW COMMITTEE MEMBERS
            </a>
          </div>
        </div>
      </section>

      {/* Public Disclosure */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4 flex items-center gap-3">
            <span className="text-2xl">📢</span> Public Disclosure as per UGC Guidelines
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            In compliance with UGC regulations, the following measures are in place to prevent and address ragging:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Display of anti-ragging posters across campus and hostels.',
              'Mandatory anti-ragging undertakings by all learners and learning partners at the time of admission.',
              'Orientation programs sensitizing learners about ragging and its consequences.',
              'Round-the-clock availability of anti-ragging helpline numbers and email.',
              'Immediate disciplinary action against offenders, including suspension or expulsion as per UGC rules.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="/pdf/ANTI-RAGGING-COMMITTEE-PublicDisclosures.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-sm uppercase"
          >
            <FileText className="w-4 h-4 flex-shrink-0" />
            DOWNLOAD UGC PUBLIC DISCLOSURE
          </a>
        </div>
      </section>

      {/* UGC Guidelines */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4 flex items-center gap-3">
            <BookOpen className="w-6 h-6" /> UGC Guidelines on Ragging
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            The UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 provide a comprehensive framework to prevent and penalize ragging. Highlights include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Definition and forms of ragging.',
              'Preventive measures for institutions.',
              'Role and responsibilities of the Anti-Ragging Committee and Squad.',
              'Procedures for lodging and addressing complaints.',
              'Punishments ranging from warning to rustication and legal prosecution.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="/pdf/ANTI-RAGGING-COMMITTEE-UGC-Guideliness.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-sm uppercase"
          >
            <FileText className="w-4 h-4 flex-shrink-0" />
            READ FULL UGC GUIDELINES
          </a>
        </div>
      </section>

      {/* Helpline */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <Phone className="w-6 h-6" /> Anti-Ragging Helpline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'College Helpline:', value: '' },
              { label: 'UGC National Anti-Ragging Helpline:', value: '1800-180-5522' },
              { label: 'Email:', value: 'helpline@antiragging.in' },
              { label: 'Website:', value: 'www.antiragging.in' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                  {label}{value && <span className="text-black"> {value}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Ragging */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-2xl">📣</span> Report Ragging
          </h3>
          <p className="text-green-100 text-base leading-relaxed max-w-3xl">
            If you or someone you know is experiencing ragging, do not stay silent. Report immediately using the helpline or contact any senior learner member of the Anti-Ragging Committee. All reports will be handled with strict confidentiality and urgency.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
