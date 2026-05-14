import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Fee Structure 2026-27 | BDS & MDS Fees | JKKN Dental College',
  description: 'BDS & MDS fee structure at JKKN Dental College 2026-27. Detailed breakdown of tuition fees, hostel charges, scholarships, and payment information.',
  keywords: 'fee structure, BDS fees, MDS fees, dental college fees, JKKN fees, tuition fees, hostel fees, admission fees, course fees 2026',
  alternates: {
    canonical: '/fees-structure/',
  },
  openGraph: {
    title: 'Fee Structure 2026-27 | BDS & MDS Fees | JKKN Dental College',
    description: 'BDS & MDS fee structure at JKKN Dental College 2026-27. Detailed breakdown of tuition fees, hostel charges, scholarships, and payment information.',
    url: 'https://dental.jkkn.ac.in/fees-structure/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fee Structure 2026-27 | BDS & MDS Fees | JKKN Dental College',
    description: 'BDS & MDS fee structure at JKKN Dental College 2026-27. Detailed breakdown of tuition fees, hostel charges, scholarships, and payment information.',
  },
};

// Structured Data for AI Extraction (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in",
  "offers": [
    {
      "@type": "Course",
      "@id": "https://dental.jkkn.ac.in/bds/#course",
      "name": "Bachelor of Dental Surgery (BDS)",
      "description": "4-year undergraduate dental program plus 1-year internship at JKKN Dental College & Hospital, DCI approved",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "JKKN Dental College & Hospital"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Full-time",
        "duration": "P5Y",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "category": "Tuition Fee per year",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "450000",
            "maxPrice": "550000",
            "unitText": "per year",
            "description": "GQ: As per Govt. Norms. MQ: ₹4,50,000–₹5,50,000/year. Varies by hostel/dayscholar option."
          }
        }
      }
    },
    {
      "@type": "Course",
      "name": "Master of Dental Surgery (MDS)",
      "description": "3-year postgraduate dental specialization programs at JKKN Dental College & Hospital, DCI approved",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "JKKN Dental College & Hospital"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Full-time",
        "duration": "P3Y",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "category": "Tuition Fee per year",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "850000",
            "maxPrice": "850000",
            "unitText": "per year",
            "description": "GQ: As per Govt. Norms. MQ: ₹8,50,000/year. Applicable across all 5 MDS specializations."
          }
        }
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the BDS fee structure at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The BDS (Bachelor of Dental Surgery) tuition fee at JKKN Dental College is: Government Quota (GQ) – As per Govt. Norms. Management Quota (MQ) – ₹5,50,000/year (With Hostel & Instruments) or ₹4,50,000/year (Dayscholar with Instruments). Additional fees include library fee, lab and clinical fee, caution deposit (refundable), and university examination fees. Contact the admissions office at +91 9345855001 or dental@jkkn.ac.in for complete fee details."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hidden charges beyond the tuition fee at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hidden charges are applicable at JKKN Dental College. Beyond tuition fees, the standard fee components include library fee, lab and clinical fee, university examination fee (as per university norms), and caution/library/lab deposits (all refundable upon course completion). Hostel charges are separate and optional. All applicable fees are communicated transparently at the time of admission."
      }
    },
    {
      "@type": "Question",
      "name": "Is fee payment available in installments at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College offers installment-based fee payment options. Semester-wise payment plans and custom payment arrangements are available. No processing fee is charged for installment payments. Students and parents can contact the admissions office at +91 9345855001 or email dental@jkkn.ac.in to discuss available installment plans based on their specific circumstances."
      }
    },
    {
      "@type": "Question",
      "name": "What is the MDS fee structure at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The MDS (Master of Dental Surgery) annual tuition fee at JKKN Dental College is As per Govt. Norms (Government Quota) and ₹8,50,000 per year (Management Quota) across all 5 specializations. MDS programs available include Periodontics (4 seats), Orthodontics (4 seats), Prosthodontics (4 seats), Endodontics (3 seats), and Oral Medicine (3 seats). Additional one-time fees include admission fee, caution deposit, library deposit, and lab deposit (all refundable). Contact admissions for complete fee details."
      }
    }
  ]
};

export default function FeesStructure() {
  const breadcrumbSchema = generateBreadcrumbSchema('/fees-structure');
  const webPageSchema = generateWebPageSchema({
    title: 'Fee Structure 2026-27 | BDS & MDS Fees | JKKN Dental College',
    description: 'BDS & MDS fee structure at JKKN Dental College 2026-27. Detailed breakdown of tuition fees, hostel charges, scholarships, and payment information.',
    url: 'https://dental.jkkn.ac.in/fees-structure/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Fee Structure 2026-27 | BDS & MDS Fees | JKKN Dental College',
    description: 'BDS & MDS fee structure at JKKN Dental College 2026-27. Detailed breakdown of tuition fees, hostel charges, scholarships, and payment information.',
    url: 'https://dental.jkkn.ac.in/fees-structure/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      {/* Add JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#002309] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <span className="text-[#7cb983] font-semibold text-sm">Academic Year 2026-27</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fee <span className="text-[#7cb983]">Structure</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transparent and comprehensive fee breakdown for BDS and MDS programs. All fees are subject to regulatory approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-6 px-4 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm md:text-base text-gray-800 font-semibold mb-1">
                <AlertTriangle className="w-5 h-5 inline-block mr-2" /> Important: Fee Verification Required
              </p>
              <p className="text-sm text-gray-700">
                *Fee amounts shown are approximate ranges and subject to change based on government regulations, fee fixation committee decisions, and annual revisions.
                Contact the admissions office for exact, current fee details at <a href="tel:+919345855001" className="text-[#006837] font-semibold hover:underline">+91 93458 55001</a> or
                email <a href="mailto:dental@jkkn.ac.in" className="text-[#006837] font-semibold hover:underline">dental@jkkn.ac.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BDS Fee Structure */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              BDS Fee Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bachelor of Dental Surgery (BDS) - 4 Years + 1 Year Internship
            </p>
          </div>

          {/* BDS Fee Table */}
          <div className="overflow-x-auto bg-[#FBFBEE] rounded-xl shadow-lg">
            <table className="w-full">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Program</th>
                  <th className="px-6 py-4 text-left font-bold">GQ</th>
                  <th className="px-6 py-4 text-right font-bold">MQ (&#8377;)</th>
                  <th className="px-6 py-4 text-left font-bold">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">BDS</td>
                  <td className="px-6 py-4 text-left text-gray-600 italic">As per Govt. Norms</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;5,50,000</td>
                  <td className="px-6 py-4 text-gray-600">With Hostel &amp; Instruments</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">BDS</td>
                  <td className="px-6 py-4 text-left text-gray-600 italic">As per Govt. Norms</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;4,50,000</td>
                  <td className="px-6 py-4 text-gray-600">Dayscholar with Instruments</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 px-6 py-3">* Fees are per year. GQ = Government Quota &nbsp;|&nbsp; MQ = Management Quota</p>
          </div>

          {/* BDS Additional Information */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Additional Notes for BDS:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 ml-7 list-disc">
              <li>Duration: 4 years academic program + 1 year compulsory rotating internship</li>
              <li>Total Seats: 100 seats per year (subject to DCI approval)</li>
              <li>Admission: Through NEET-UG and state counseling</li>
              <li>Hostel facility available for boys and girls (charges separate)</li>
              <li>Fees are regulated by fee fixation committee and may change annually</li>
              <li>Payment can be made in installments (contact admission office for details)</li>
              <li>Scholarships available for eligible students (merit-based and need-based)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MDS Fee Structure */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              MDS Fee Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master of Dental Surgery (MDS) - 3 Years Postgraduate Programs
            </p>
          </div>

          {/* MDS Fee Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="w-full">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Specialization</th>
                  <th className="px-6 py-4 text-center font-bold">Seats</th>
                  <th className="px-6 py-4 text-left font-bold">GQ</th>
                  <th className="px-6 py-4 text-right font-bold">MQ (&#8377;)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Orthodontics</td>
                  <td className="px-6 py-4 text-center text-gray-800">4</td>
                  <td className="px-6 py-4 text-left text-gray-600 italic">As per Govt. Norms</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,50,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Endodontics</td>
                  <td className="px-6 py-4 text-center text-gray-800">3</td>
                  <td className="px-6 py-4 text-left text-gray-600 italic">As per Govt. Norms</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,50,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Prosthodontics</td>
                  <td className="px-6 py-4 text-center text-gray-800">4</td>
                  <td className="px-6 py-4 text-left text-gray-600 italic">As per Govt. Norms</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,50,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Periodontics</td>
                  <td className="px-6 py-4 text-center text-gray-800">4</td>
                  <td className="px-6 py-4 text-left text-gray-600 italic">As per Govt. Norms</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,50,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Oral Medicine</td>
                  <td className="px-6 py-4 text-center text-gray-800">3</td>
                  <td className="px-6 py-4 text-left text-gray-600 italic">As per Govt. Norms</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,50,000</td>
                </tr>
                <tr className="bg-[#006837] text-white font-bold">
                  <td className="px-6 py-4">Total MDS Seats</td>
                  <td className="px-6 py-4 text-center">18</td>
                  <td className="px-6 py-4 text-right">—</td>
                  <td className="px-6 py-4 text-right">—</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 px-6 py-3">* Fees are per year. GQ = Government Quota &nbsp;|&nbsp; MQ = Management Quota</p>
          </div>

          {/* MDS Additional Components */}
          <div className="mt-8 bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#006837] mb-4">Additional Fee Components (MDS)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">One-Time Fees:</h4>
                <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                  <li>Admission Fee</li>
                  <li>Caution Deposit (Refundable)</li>
                  <li>Library Deposit (Refundable)</li>
                  <li>Lab Deposit (Refundable)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Annual/Recurring Fees:</h4>
                <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                  <li>Library Fee</li>
                  <li>Lab & Clinical Fee</li>
                  <li>University Exam Fee (as applicable)</li>
                  <li>Hostel Fee (if availing)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* MDS Additional Information */}
          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Additional Notes for MDS:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 ml-7 list-disc">
              <li>Duration: 3 years full-time postgraduate program</li>
              <li>Admission: Through NEET-MDS and state counseling</li>
              <li>Eligibility: BDS degree + 1 year internship completion required</li>
              <li>All specializations are DCI approved</li>
              <li>Stipend may be provided to MDS students as per norms</li>
              <li>Excellent clinical exposure with 200+ dental chairs</li>
              <li>Research facilities and dissertation support available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-8 text-center">
            Payment Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Modes */}
            <div className="bg-[#FBFBEE] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#006837] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Accepted Payment Modes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Demand Draft (DD) in favor of "JKKN Dental College"</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Online Bank Transfer (NEFT/RTGS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Payment at College Office (Cash/Card)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>UPI and Digital Payment Options</span>
                </li>
              </ul>
            </div>

            {/* Installment Options */}
            <div className="bg-[#FBFBEE] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#006837] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Installment Facility
              </h3>
              <p className="text-gray-700 mb-4">
                Fee payment can be made in installments. Contact the admission office for available installment plans:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Semester-wise payment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom payment plans available</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No hidden charges or processing fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Fee Queries */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Fees?
          </h2>
          <p className="text-lg text-gray-200 mb-10">
            Our admission office is here to provide accurate fee information and answer all your queries.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <svg className="w-10 h-10 text-[#7cb983] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-gray-200">+91 93458 55001</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <svg className="w-10 h-10 text-[#7cb983] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-gray-200">dental@jkkn.ac.in</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <svg className="w-10 h-10 text-[#7cb983] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-gray-200">Komarapalayam, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admission-process" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg inline-block">
              View Admission Process
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006837] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-block">
              Contact Admission Office
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
