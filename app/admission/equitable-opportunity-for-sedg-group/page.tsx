import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Equitable Opportunity for SEDG Group - JKKN Dental College',
  description: 'JKKN Dental College\'s commitment to inclusive education through equitable access for Socio-Economically Disadvantaged Groups per UGC 2024.',
  keywords: 'SEDG group, inclusive education, UGC guidelines, reservation policy, SC ST OBC EWS, JKKN Dental College admission, equitable access, NEP 2020',
};

export default function EquitableOpportunityForSEDGGroup() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>EQUITABLE OPPORTUNITY FOR SEDG GROUP</span>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            EQUITABLE OPPORTUNITY FOR SEDG GROUP
          </h1>

          {/* Introduction */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            JKKN Dental College is committed to inclusive education by providing equitable access to students from Socio-Economically Disadvantaged Groups (SEDGs). The following initiatives reflect our alignment with the UGC's 2024 guidelines:
          </p>

          {/* 1. Inclusive Admission Policy */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            1 . Inclusive Admission Policy
          </p>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Adheres to government-mandated reservation policies for SC, ST, OBC, and EWS categories.
            </li>
            <li className="font-semibold">
              Ensures transparency through published admission lists and submission of data to government monitoring bodies.
            </li>
          </ul>

          {/* 2. Documentation and Monitoring */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            2 . Documentation and Monitoring
          </p>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Maintains comprehensive admission records, government directives, and certified institutional reports.
            </li>
            <li className="font-semibold">
              Tracks seat utilization under reserved categories over the past five years for continual assessment.
            </li>
          </ul>

          {/* 3. Transparency and Governance */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            3. Transparency and Governance
          </p>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Submits annual reports and extracts to state and central social justice departments.
            </li>
            <li className="font-semibold">
              Displays strong institutional governance through compliance documentation and audit trails.
            </li>
          </ul>

          {/* 4. Institutional Commitment to Equity */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            4 . Institutional Commitment to Equity
          </p>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Supports underprivileged students through accessible admission processes and policy implementation.
            </li>
            <li className="font-semibold">
              Focuses on long-term inclusivity aligned with NEP 2020 and NAAC criteria.
            </li>
          </ul>

          {/* Conclusion */}
          <p className="text-gray-700 mb-12 leading-relaxed text-justify">
            This integrated approach ensures JKKN Dental College's alignment with UGC's vision for empowering disadvantaged students and promoting inclusive education in higher education institutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/equitable-opportunity-for-sedgs"
              className="inline-block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-8 rounded transition-all duration-300 uppercase text-sm text-center"
            >
              EQUITABLE OPPORTUNITY FOR SEDGs
            </a>
            <a
              href="/ugc-guidelines"
              className="inline-block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-8 rounded transition-all duration-300 uppercase text-sm text-center"
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
