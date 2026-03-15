import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fee Structure 2026-27 | BDS & MDS Fees | JKKN Dental College',
  description: 'Complete fee structure for BDS and MDS programs at JKKN Dental College for 2026-27. Detailed breakdown of tuition fees, hostel charges, and all payment information.',
  keywords: 'fee structure, BDS fees, MDS fees, dental college fees, JKKN fees, tuition fees, hostel fees, admission fees, course fees 2026',
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
            "minPrice": "300000",
            "maxPrice": "500000",
            "unitText": "per year",
            "description": "Approximate annual tuition fee. Actual fees may vary."
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
            "minPrice": "800000",
            "maxPrice": "1500000",
            "unitText": "per year",
            "description": "Approximate annual tuition fee. Actual fees may vary by specialization."
          }
        }
      }
    }
  ]
};

export default function FeesStructure() {
  return (
    <main className="overflow-x-hidden">
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
                  <th className="px-6 py-4 text-left font-bold">Fee Component</th>
                  <th className="px-6 py-4 text-right font-bold">Amount (₹)</th>
                  <th className="px-6 py-4 text-left font-bold">Payment Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Tuition Fee</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;3,00,000 - &#8377;5,00,000*</td>
                  <td className="px-6 py-4 text-gray-600">Per Year</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Hostel Fee (Optional)</td>
                  <td className="px-6 py-4 text-right text-gray-800">Contact College</td>
                  <td className="px-6 py-4 text-gray-600">Per Year</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Caution Deposit (Refundable)</td>
                  <td className="px-6 py-4 text-right text-gray-800">Contact College</td>
                  <td className="px-6 py-4 text-gray-600">One-time</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Library Fee</td>
                  <td className="px-6 py-4 text-right text-gray-800">Contact College</td>
                  <td className="px-6 py-4 text-gray-600">Per Year</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Lab & Clinical Fee</td>
                  <td className="px-6 py-4 text-right text-gray-800">Contact College</td>
                  <td className="px-6 py-4 text-gray-600">Per Year</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">University Exam Fee</td>
                  <td className="px-6 py-4 text-right text-gray-800">As per University</td>
                  <td className="px-6 py-4 text-gray-600">Per Exam</td>
                </tr>
                <tr className="bg-[#006837] text-white font-bold">
                  <td className="px-6 py-4">Total Approximate Annual Fee</td>
                  <td className="px-6 py-4 text-right">&#8377;3,00,000 - &#8377;5,00,000*</td>
                  <td className="px-6 py-4">Per Year</td>
                </tr>
              </tbody>
            </table>
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
                  <th className="px-6 py-4 text-right font-bold">Annual Fee (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Periodontics</td>
                  <td className="px-6 py-4 text-center text-gray-800">4</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,00,000 - &#8377;15,00,000*</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Orthodontics and Dentofacial Orthopedics</td>
                  <td className="px-6 py-4 text-center text-gray-800">4</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,00,000 - &#8377;15,00,000*</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Prosthodontics Crown and Bridge</td>
                  <td className="px-6 py-4 text-center text-gray-800">4</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,00,000 - &#8377;15,00,000*</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Conservative Dentistry and Endodontics</td>
                  <td className="px-6 py-4 text-center text-gray-800">3</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,00,000 - &#8377;15,00,000*</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">Oral Medicine and Radiology</td>
                  <td className="px-6 py-4 text-center text-gray-800">3</td>
                  <td className="px-6 py-4 text-right text-gray-800">&#8377;8,00,000 - &#8377;15,00,000*</td>
                </tr>
                <tr className="bg-[#006837] text-white font-bold">
                  <td className="px-6 py-4">Total MDS Seats</td>
                  <td className="px-6 py-4 text-center">18</td>
                  <td className="px-6 py-4 text-right">—</td>
                </tr>
              </tbody>
            </table>
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

      {/* Scholarships & Financial Aid */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-8 text-center">
            Scholarships & Financial Aid
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Merit Scholarships */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#7cb983]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Merit-Based Scholarships</h3>
              <p className="text-sm text-gray-600">
                Scholarships for students with excellent NEET scores and academic performance.
              </p>
            </div>

            {/* Government Scholarships */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#7cb983]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Government Scholarships</h3>
              <p className="text-sm text-gray-600">
                SC/ST, OBC, minority scholarships as per government norms and eligibility.
              </p>
            </div>

            {/* Need-Based Aid */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#7cb983]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Need-Based Financial Aid</h3>
              <p className="text-sm text-gray-600">
                Financial assistance for economically weaker sections. Contact admission office for details.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/admission/scholarship-policy-for-dental-college" className="inline-flex items-center gap-2 bg-[#006837] hover:bg-[#005028] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              View Scholarship Policy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Fee Refund Policy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#006837] to-[#002309] rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Fee Refund Policy</h2>
            <p className="text-gray-200 mb-6">
              In case of withdrawal, fee refund will be processed as per UGC and college refund policy guidelines.
            </p>
            <Link href="/admission/fee-refund-policy" className="inline-flex items-center gap-2 bg-white text-[#006837] hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Read Full Refund Policy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
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
