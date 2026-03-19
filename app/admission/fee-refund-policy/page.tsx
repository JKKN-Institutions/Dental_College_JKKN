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
    url: 'https://dental.jkkn.ac.in/admission/fee-refund-policy/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function FeeRefundPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admission/fee-refund-policy');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Fee Refund Policy | JKKN Dental College Admission Fee Refund',
    description: 'JKKN Dental College fee refund policy for BDS and MDS admissions. Understand refund rules, timelines, and procedures as per UGC guidelines.',
    url: 'https://dental.jkkn.ac.in/admission/fee-refund-policy/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 uppercase">
            FEE REFUND POLICY
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            Fee Refund Policy - JKKN Dental College & Hospital
          </h2>

          {/* Introduction */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            Introduction
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            At JKKN Dental College & Hospital, we are committed to upholding transparency and fairness in financial transactions. In accordance with the University Grants Commission (UGC) Fee Refund Policy, we have established a structured refund policy to ensure a smooth process for students who wish to withdraw their admission.
          </p>

          {/* Fee Refund Guidelines */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            Fee Refund Guidelines (As per UGC Regulations 2024-25)
          </h3>

          {/* 1. Full Refund */}
          <h4 className="text-base md:text-lg font-bold text-black mb-3">
            1. Full Refund:
          </h4>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Students who withdraw their admission on or before September 30, 2025, will receive a 100% refund, with a maximum deduction of ₹1,000 as a processing fee.
          </p>

          {/* 2. Partial Refunds */}
          <h4 className="text-base md:text-lg font-bold text-black mb-4">
            2. Partial Refunds (Based on Withdrawal Date):
          </h4>

          {/* Refund Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-400 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-700 uppercase">
                    POINT OF TIME WHEN NOTICE OF WITHDRAWAL IS RECEIVED
                  </th>
                  <th className="border border-gray-400 px-4 py-3 text-left text-sm md:text-base font-bold text-gray-700 uppercase">
                    REFUND PERCENTAGE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600">
                    15 DAYS OR MORE BEFORE THE LAST DATE OF ADMISSION
                  </td>
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600 font-semibold">
                    100%
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600">
                    LESS THAN 15 DAYS BEFORE THE LAST DATE OF ADMISSION
                  </td>
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600 font-semibold">
                    90%
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600">
                    WITHIN 15 DAYS AFTER THE LAST DATE OF ADMISSION
                  </td>
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600 font-semibold">
                    80%
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600">
                    BETWEEN 16-30 DAYS AFTER THE LAST DATE OF ADMISSION
                  </td>
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600 font-semibold">
                    50%
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600">
                    MORE THAN 30 DAYS AFTER THE LAST DATE OF ADMISSION
                  </td>
                  <td className="border border-gray-400 px-4 py-3 text-sm md:text-base text-gray-600 font-semibold">
                    NO REFUND
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3. Applicability of the Policy */}
          <h4 className="text-base md:text-lg font-bold text-black mb-4">
            3. Applicability of the Policy:
          </h4>

          <p className="text-gray-700 mb-3 leading-relaxed">
            This policy is applicable to all students enrolling in our programs.
          </p>

          <p className="text-gray-700 mb-3 leading-relaxed">
            The refund will be processed within a reasonable timeframe after the withdrawal request is approved.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Admission cancellation must be officially communicated in writing or via email to the Admissions Office.
          </p>

          {/* Grievance Redressal */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            Grievance Redressal
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Students facing any issues related to the fee refund process may reach out to our Grievance Redressal Committee in accordance with UGC Redressal of Grievances of Students Regulations, 2023.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            For any inquiries or to initiate a refund request, please contact:
          </p>

          {/* Contact Information */}
          <div className="text-gray-700 mb-6 space-y-1">
            <p><strong>Phone: +91 93458 55001</strong></p>
            <p><strong>Email: [dental@jkkn.ac.in]</strong></p>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            JKKN Dental College & Hospital remains committed to ensuring a fair and transparent admission and refund process for all students.
          </p>

          {/* UGC Fee Refund Policy Button */}
          <div className="mb-12">
            <a
              href="/ugc-fee-refund-policy"
              className="inline-block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-8 rounded transition-all duration-300 uppercase text-sm"
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
