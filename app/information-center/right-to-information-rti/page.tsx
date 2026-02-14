import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Right to Information (RTI) - JKKN Dental College',
  description: 'Access RTI information at JKKN Dental College & Hospital. Learn how to file RTI applications and contact CPIO for transparency and accountability.',
  keywords: 'RTI JKKN dental, right to information, RTI Act 2005, CPIO contact, RTI application, transparency, public information officer, UGC guidelines, RTI online, information access',
};

export default function RightToInformation() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            RIGHT TO INFORMATION (RTI)
          </h1>

          {/* Subheading */}
          <h2 className="text-lg md:text-xl font-bold text-black mb-6">
            Right to Information (RTI) – JKKN Dental College &  Hospital
          </h2>

          {/* Ensuring Transparency & Accountability */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              Ensuring Transparency & Accountability
            </h3>
            <p className="text-base leading-relaxed text-black mb-4">
              At JKKN Dental College &  Hospital, we are committed to maintaining transparency, accountability, and openness in accordance with the Right to Information (RTI) Act, 2005, as per the University Grants Commission (UGC) guidelines. We ensure that all stakeholders, including students, faculty, and the public, have access to information about our institution's administration, policies, and functioning.
            </p>
          </div>

          {/* About the RTI Act, 2005 */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              About the RTI Act, 2005
            </h3>
            <p className="text-base leading-relaxed text-black mb-4">
              The Right to Information (RTI) Act, 2005, empowers citizens to seek information from public institutions to promote transparency and good governance. As a higher education institution, JKKN Dental College &amp; Hospital complies with this act by providing timely and relevant information to the public.
            </p>
          </div>

          {/* Information Available Under RTI */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              Information Available Under RTI
            </h3>
            <p className="text-base leading-relaxed text-black mb-3">
              As per UGC guidelines, the following information is accessible under RTI:
            </p>
            <div className="text-base leading-relaxed text-black space-y-2 ml-4">
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Institutional Details – Vision, mission, organizational structure, and accreditation status.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Academic Information – Courses offered, faculty details, admission procedures, and academic regulations.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Financial Transparency – Fees structure, scholarships, grants, and financial statements.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Administrative Policies – Rules, regulations, recruitment policies, and decision-making processes.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Research &amp; Development – Ongoing projects, publications, and collaborations.</p>
              <p className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />Hospital Services – Healthcare facilities, patient services, and public health initiatives.</p>
            </div>
          </div>

          {/* How to File an RTI Application? */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              How to File an RTI Application?
            </h3>
            <p className="text-base leading-relaxed text-black mb-4">
              Individuals seeking information under the RTI Act can submit a formal request in writing to the Central Public Information Officer (CPIO) of JKKN Dental College & Hospital.
            </p>
          </div>

          {/* RTI Application Process */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              RTI Application Process:
            </h3>
            <div className="text-base leading-relaxed text-black space-y-2">
              <p>Step 1: Draft a request mentioning the specific information required.</p>
              <p>Step 2: Address the application to the Central Public Information Officer (CPIO).</p>
              <p>Step 3: Pay the prescribed RTI fee as per government norms.</p>
              <p>Step 4: Submit the application in person, via post, or email (if applicable).</p>
              <p>Step 5: Await a response within 30 days, as mandated by the RTI Act.</p>
            </div>
          </div>

          {/* RTI Contact Details */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              RTI Contact Details
            </h3>
            <p className="text-base leading-relaxed text-black mb-2">
              <strong>CENTRE:</strong>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              Central Public Information Officer (CPIO) <span className="text-[#1B5E20] font-bold">CPIO DETAILS</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-4">
              RTI ONLINE <span className="text-[#1B5E20] font-bold">RTI Online :: Home | Submit RTI Request | Submit RTI First Appeal | View RTI Status | RTI FAQ</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              <strong>STATE, TAMILNADU:</strong>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              <span className="text-[#1B5E20] font-bold">RTI Online :: Online RTI Information System</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              Public Information Officers & Appellate Authorities
            </p>
            <p className="text-base leading-relaxed text-black mb-4">
              <span className="text-[#1B5E20] font-bold">Public Information Officers and Appellate Authorities – Right to Information Act, Tamil Nadu</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              Health and Family Welfare Department
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              Public Information Officers of Health and Family Welfare Department, Secretariat  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              Appellate Authorities of Health and Family Welfare Department, Secretariat  [English Version] [Tamil Version]
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              PIOs and Appellate Authorities of Directorate of Public Health and Preventive Medicine  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              PIOs and Appellate Authorities of Directorate of Medical Education
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              PIOs and Appellate Authorities in the Government Medical Institutions under the control of Director of Medical and Rural Health Services
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              PIOs and Appellate Authorities of Directorate of Family Welfare  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-2">
              PIOs and Appellate Authorities of Department of Drug Control Administration  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
            </p>
            <p className="text-base leading-relaxed text-black mb-4">
              <span className="text-[#1B5E20] font-bold">PIOs and Appellate Authorities of Tamil Nadu Health Systems Project</span>
            </p>
          </div>

          {/* Exemptions Under RTI */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              Exemptions Under RTI
            </h3>
            <p className="text-base leading-relaxed text-black mb-2">
              As per the RTI Act, certain information is exempt from disclosure, including:
            </p>
            <p className="text-base leading-relaxed text-black mb-3">
              Personal and confidential information of students, faculty, or patients.
            </p>
            <p className="text-base leading-relaxed text-black mb-3 ml-4">
              Information that affects national security, public safety, or ongoing legal proceedings.
            </p>
            <p className="text-base leading-relaxed text-black mb-4 ml-4">
              Intellectual property, research data, and internal deliberations.
            </p>
          </div>

          {/* Commitment to Transparency */}
          <div className="mb-8">
            <h3 className="text-base md:text-lg font-bold text-black mb-3">
              Commitment to Transparency
            </h3>
            <p className="text-base leading-relaxed text-black mb-6">
              At JKKN Dental College & Hospital, we uphold the principles of good governance, transparency, and public accountability. Through the RTI framework, we ensure that relevant information is accessible, accurate, and timely to all stakeholders.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
            <a
              href="/pdf/RTI-guide-for-cpio.pdf"
              className="bg-[#5FA866] hover:bg-[#4d8f54] text-white font-bold py-3 px-8 rounded transition-colors"
            >
              RTI-guide-for-cpio
            </a>
            <a
              href="/pdf/RTI-Act-2005-Amended-English-Version.pdf"
              className="bg-[#5FA866] hover:bg-[#4d8f54] text-white font-bold py-3 px-8 rounded transition-colors"
            >
              RTI Act, 2005 (Amended)-English Version
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
