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

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            FINANCE COMMITTEE
          </h1>

          {/* Subheadings */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-2">
            JKKN DENTAL COLLEGE AND HOSPITAL
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-black mb-6">
            FINANCE COMMITTEE
          </h3>

          {/* Description */}
          <p className="text-base text-black mb-8 leading-relaxed">
            The Finance Committee of JKKN DENTAL COLELGE AND HOSPITAL is constituted with the following members
          </p>

          {/* Committee Members Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                    S.NO
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                    NAME
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                    DESIGNATION
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-700">
                    RESPONISIBILITY
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    1
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    DR B DHANASEKAR
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    PRINCIPAL
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    CHAIRMAN
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    2
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    MRS. ISVARYALAKSHMI O
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    TREASURER
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    MEMBER
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    3
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    DR J. V. KARUNAKARAN
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    HEAD OF THE DEPARTMENT
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    MEMBER
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    4
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    MR. VELAYUDHAM
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    FINANCE OFFICER
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    MEMBER
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
