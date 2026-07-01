import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Fee Refund Policy | JKKN Dental College Admission Fee Refund',
  description: 'JKKN Dental College fee refund policy for BDS and MDS admissions. Understand refund rules, timelines, and procedures as per UGC guidelines.',
  keywords: 'fee refund policy, admission refund, fee structure, refund rules, UGC refund policy',
  openGraph: {
    title: 'Fee Refund Policy | JKKN Dental College Admission Fee Refund',
    description: 'JKKN Dental College fee refund policy for BDS and MDS admissions. Understand refund rules, timelines, and procedures as per UGC guidelines.',
    url: 'https://dental.jkkn.ac.in/admissions/fee-refund-policy/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const partialRefundRows = [
  {
    condition: '15 DAYS OR MORE BEFORE THE LAST DATE OF ADMISSION',
    percentage: '100%',
  },
  {
    condition: 'LESS THAN 15 DAYS BEFORE THE LAST DATE OF ADMISSION',
    percentage: '90%',
  },
  {
    condition: 'WITHIN 15 DAYS AFTER THE LAST DATE OF ADMISSION',
    percentage: '80%',
  },
  {
    condition: 'BETWEEN 16-30 DAYS AFTER THE LAST DATE OF ADMISSION',
    percentage: '50%',
  },
  {
    condition: 'MORE THAN 30 DAYS AFTER THE LAST DATE OF ADMISSION',
    percentage: 'NO REFUND',
  },
];

const applicabilityPoints = [
  'This policy is applicable to all learners enrolling in our programs.',
  'The refund will be processed within a reasonable timeframe after the withdrawal request is approved.',
  'Admission cancellation must be officially communicated in writing or via email to the Admissions Office.',
];

export default function FeeRefundPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admissions/fee-refund-policy');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Fee Refund Policy | JKKN Dental College Admission Fee Refund',
    description: 'JKKN Dental College fee refund policy for BDS and MDS admissions. Understand refund rules, timelines, and procedures as per UGC guidelines.',
    url: 'https://dental.jkkn.ac.in/admissions/fee-refund-policy/',
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 uppercase tracking-wide">
            FEE REFUND POLICY
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-6 rounded-full" />
          <h2 className="text-lg md:text-xl font-semibold text-white/90 mb-5">
            Fee Refund Policy - JKKN Dental College &amp; Hospital
          </h2>
          <div className="bg-white/10 rounded-2xl p-6 max-w-3xl">
            <p className="text-sm font-bold text-[#7cb983] uppercase tracking-wide mb-2">Introduction</p>
            <p className="hero-description text-white/85 text-base leading-relaxed">
              At JKKN Dental College &amp; Hospital, we are committed to upholding transparency and fairness in financial transactions. In accordance with the University Grants Commission (UGC) Fee Refund Policy, we have established a structured refund policy to ensure a smooth process for learners who wish to withdraw their admission.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Guidelines Header */}
          <h3 className="text-xl md:text-2xl font-bold text-[#006837]">
            Fee Refund Guidelines (As per UGC Regulations 2024-25)
          </h3>

          {/* 1. Full Refund */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
                1
              </div>
              <h4 className="text-white font-bold text-base md:text-lg">Full Refund:</h4>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Learners who withdraw their admission on or before September 30, 2025, will receive a 100% refund, with a maximum deduction of ₹1,000 as a processing fee.
              </p>
            </div>
          </div>

          {/* 2. Partial Refunds */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
                2
              </div>
              <h4 className="text-white font-bold text-base md:text-lg">Partial Refunds (Based on Withdrawal Date):</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FBFBEE] border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs md:text-sm font-bold text-[#006837] uppercase tracking-wide w-3/4">
                      POINT OF TIME WHEN NOTICE OF WITHDRAWAL IS RECEIVED
                    </th>
                    <th className="px-6 py-4 text-left text-xs md:text-sm font-bold text-[#006837] uppercase tracking-wide">
                      REFUND PERCENTAGE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {partialRefundRows.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FBFBEE]/60'}`}
                    >
                      <td className="px-6 py-4 text-sm md:text-base text-gray-600">
                        {row.condition}
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base font-bold text-[#006837]">
                        {row.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Applicability */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
                3
              </div>
              <h4 className="text-white font-bold text-base md:text-lg">Applicability of the Policy:</h4>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {applicabilityPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7cb983] mt-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Grievance Redressal */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
              Grievance Redressal
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
              Learners facing any issues related to the fee refund process may reach out to our Grievance Redressal Committee in accordance with UGC Redressal of Grievances of Students Regulations, 2023.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-5">
              For any inquiries or to initiate a refund request, please contact:
            </p>

            {/* Contact Info Box */}
            <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 space-y-2 mb-6">
              <p className="text-[#002309] font-bold text-sm md:text-base">
                Phone: +91 93458 55001
              </p>
              <p className="text-[#002309] font-bold text-sm md:text-base">
                Email: [dental@jkkn.ac.in]
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              JKKN Dental College &amp; Hospital remains committed to ensuring a fair and transparent admission and refund process for all learners.
            </p>
          </div>

          {/* PDF Button */}
          <div>
            <a
              href="/pdf/UGC-Fee-Refund-Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-12 rounded-xl transition-colors duration-200 shadow-sm uppercase text-sm tracking-wide"
            >
              UGC FEE REFUND POLICY
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
