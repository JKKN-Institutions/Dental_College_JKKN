import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Finance Committee | JKKN Dental College',
  description: 'Managing financial operations and oversight at JKKN Dental College. View committee members and their responsibilities.',
  keywords: 'finance committee, financial management, budget oversight, college finance, committee members, JKKN dental college, financial operations',
  openGraph: {
    title: 'Finance Committee | JKKN Dental College',
    description: 'Managing financial operations and oversight at JKKN Dental College. View committee members and their responsibilities.',
    url: 'https://dental.jkkn.ac.in/committee/finance-committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function FinanceCommittee() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/finance-committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Finance Committee - JKKN Dental College',
    description: 'Managing financial operations and oversight at JKKN Dental College. View committee members and their responsibilities.',
    url: 'https://dental.jkkn.ac.in/committee/finance-committee/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Finance Committee | JKKN Dental College',
    description: 'Managing financial operations and oversight at JKKN Dental College. View committee members and their responsibilities.',
    url: 'https://dental.jkkn.ac.in/committee/finance-committee/',
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
            FINANCE COMMITTEE
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-green-200 mb-1">
            JKKN DENTAL COLLEGE AND HOSPITAL
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-green-300">
            FINANCE COMMITTEE
          </h3>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="hero-description text-gray-700 text-base leading-relaxed">
              The Finance Committee of JKKN DENTAL COLELGE AND HOSPITAL is constituted with the following members
            </p>
          </div>
        </div>
      </section>

      {/* Committee Members Table */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto rounded-xl shadow-sm border border-green-100">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#006837]">
                  <th className="px-6 py-4 text-left font-bold text-white uppercase text-sm">
                    S.NO
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white uppercase text-sm">
                    NAME
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white uppercase text-sm">
                    DESIGNATION
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white uppercase text-sm">
                    RESPONISIBILITY
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">1</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">DR B DHANASEKAR</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">PRINCIPAL</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">CHAIRMAN</td>
                </tr>
                <tr className="bg-[#f9fdf9]">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">2</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">MRS. ISVARYALAKSHMI O</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">TREASURER</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">MEMBER</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">3</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">DR J. V. KARUNAKARAN</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">HEAD OF THE DEPARTMENT</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">MEMBER</td>
                </tr>
                <tr className="bg-[#f9fdf9]">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">4</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">MR. VELAYUDHAM</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">FINANCE OFFICER</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">MEMBER</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
