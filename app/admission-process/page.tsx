import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Process 2025 | Step-by-Step Guide | JKKN Dental College',
  description: 'Complete admission process for BDS & MDS programs at JKKN Dental College. NEET eligibility, counseling steps, document requirements, fee structure, and important dates for 2025 admissions.',
  keywords: 'admission process, how to apply, JKKN admission, BDS admission process, MDS admission process, NEET counseling, admission steps, dental college admission',
};

export default function AdmissionProcess() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#002309] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#7cb983] font-semibold text-sm">Admissions Open 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Admission <span className="text-[#7cb983]">Process</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your complete step-by-step guide to joining JKKN Dental College. Follow these simple steps to begin your journey in dental education.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              How to Apply
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps for successful admission to BDS or MDS programs
            </p>
          </div>

          {/* Step-by-Step Process */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#006837] mb-2">Qualify NEET Examination</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>For BDS:</strong> Appear and qualify NEET-UG with minimum 50% marks in Physics, Chemistry, and Biology (40% for reserved categories).<br/>
                  <strong>For MDS:</strong> Complete BDS with 1-year internship and qualify NEET-MDS examination.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#006837] mb-2">Register for Counseling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Register for Tamil Nadu state counseling or All India Quota counseling based on your NEET rank and preference. Keep all documents ready for verification.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#006837] mb-2">Choice Filling</h3>
                <p className="text-gray-600 leading-relaxed">
                  During counseling, select JKKN Dental College as your preferred choice. Choose your course (BDS or MDS specialization) and fill your preferences carefully.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#006837] mb-2">Seat Allotment</h3>
                <p className="text-gray-600 leading-relaxed">
                  After counseling rounds, if you're allotted a seat at JKKN Dental College, you'll receive an allotment letter. Download and print the allotment letter immediately.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#006837] mb-2">Document Verification</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Visit the college within the specified timeline with original documents for verification. Required documents include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>NEET Score Card and Admit Card</li>
                  <li>Allotment Letter</li>
                  <li>10th & 12th Mark Sheets and Certificates</li>
                  <li>Transfer Certificate and Character Certificate</li>
                  <li>Community Certificate (if applicable)</li>
                  <li>Aadhar Card and Passport Size Photos</li>
                  <li>For MDS: BDS Degree, Internship Completion Certificate, Registration Certificate</li>
                </ul>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#006837] mb-2">Fee Payment</h3>
                <p className="text-gray-600 leading-relaxed">
                  After document verification, pay the admission fee as per the fee structure. Fees can be paid through demand draft, online transfer, or at the college office. Fee receipt will be issued immediately.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg">
                7
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#006837] mb-2">Admission Confirmation</h3>
                <p className="text-gray-600 leading-relaxed">
                  After fee payment, your admission is confirmed! You'll receive your admission letter, student ID, and details about hostel facilities, class schedule, and orientation program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-8 text-center">
            Eligibility Criteria
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BDS Eligibility */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#006837] mb-4">BDS Program</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>10+2 with Physics, Chemistry, Biology</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Minimum 50% aggregate (40% for reserved categories)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Qualified NEET-UG examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Minimum age: 17 years as on 31st December</span>
                </li>
              </ul>
            </div>

            {/* MDS Eligibility */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#006837] mb-4">MDS Programs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BDS degree from DCI recognized college</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Completed 1-year mandatory internship</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Qualified NEET-MDS examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Valid registration with State Dental Council</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates & Deadlines */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-8 text-center">
            Important Dates 2025
          </h2>

          <div className="bg-[#FBFBEE] rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-300">
                <span className="font-semibold text-gray-700">NEET-UG Examination</span>
                <span className="text-[#006837] font-bold">May 2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-300">
                <span className="font-semibold text-gray-700">NEET-UG Result Declaration</span>
                <span className="text-[#006837] font-bold">June 2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-300">
                <span className="font-semibold text-gray-700">Counseling Registration Begins</span>
                <span className="text-[#006837] font-bold">July 2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-300">
                <span className="font-semibold text-gray-700">Document Verification</span>
                <span className="text-[#006837] font-bold">July - August 2025</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-gray-700">Academic Session Begins</span>
                <span className="text-[#006837] font-bold">August 2025</span>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6 italic">
            *Dates are tentative and subject to change as per official notifications
          </p>
        </div>
      </section>

      {/* Contact for Admission Queries */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Admissions?
          </h2>
          <p className="text-lg text-gray-200 mb-10">
            Our admission counselors are here to help you through every step of the process.
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
            <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg inline-block">
              Apply Online Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006837] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-block">
              Contact Admissions Office
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
