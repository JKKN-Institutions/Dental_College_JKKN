import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Right to Information (RTI) - JKKN Dental College',
  description: 'Access RTI information at JKKN Dental College & Hospital. Learn how to file RTI applications and contact CPIO for transparency and accountability.',
  keywords: 'RTI JKKN dental, right to information, RTI Act 2005, CPIO contact, RTI application, transparency, public information officer, UGC guidelines, RTI online, information access',
  openGraph: {
    title: 'Right to Information (RTI) - JKKN Dental College',
    description: 'Access RTI information at JKKN Dental College & Hospital. Learn how to file RTI applications and contact CPIO for transparency and accountability.',
    url: 'https://dental.jkkn.ac.in/information-center/right-to-information-rti/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function RightToInformation() {
  const breadcrumbSchema = generateBreadcrumbSchema('/information-center/right-to-information-rti');
  const webPageSchema = generateWebPageSchema({
    title: 'Right to Information (RTI) - JKKN Dental College',
    description: 'Access RTI information at JKKN Dental College & Hospital. Learn how to file RTI applications and contact CPIO for transparency and accountability.',
    url: 'https://dental.jkkn.ac.in/information-center/right-to-information-rti/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Right to Information (RTI) - JKKN Dental College',
    description: 'Access RTI information at JKKN Dental College & Hospital. Learn how to file RTI applications and contact CPIO for transparency and accountability.',
    url: 'https://dental.jkkn.ac.in/information-center/right-to-information-rti/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Information Center', url: 'https://dental.jkkn.ac.in/information-center/' },
        { name: 'Right to Information', url: 'https://dental.jkkn.ac.in/information-center/right-to-information-rti/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            RIGHT TO INFORMATION (RTI)
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-6 rounded-full" />
          <h2 className="text-lg md:text-xl font-semibold text-white/90">
            Right to Information (RTI) – JKKN Dental College &  Hospital
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Ensuring Transparency & Accountability */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Ensuring Transparency & Accountability
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                At JKKN Dental College &  Hospital, we are committed to maintaining transparency, accountability, and openness in accordance with the Right to Information (RTI) Act, 2005, as per the University Grants Commission (UGC) guidelines. We ensure that all stakeholders, including learners, senior learners, and the public, have access to information about our institution&apos;s administration, policies, and functioning.
              </p>
            </div>
          </div>

          {/* About the RTI Act, 2005 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                About the RTI Act, 2005
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The Right to Information (RTI) Act, 2005, empowers citizens to seek information from public institutions to promote transparency and good governance. As a higher education institution, JKKN Dental College &amp; Hospital complies with this act by providing timely and relevant information to the public.
              </p>
            </div>
          </div>

          {/* Information Available Under RTI */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Information Available Under RTI
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                As per UGC guidelines, the following information is accessible under RTI:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Institutional Details – Vision, mission, organizational structure, and accreditation status.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Academic Information – Courses offered, senior learner details, admission procedures, and academic regulations.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Financial Transparency – Fees structure, scholarships, grants, and financial statements.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Administrative Policies – Rules, regulations, recruitment policies, and decision-making processes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Research &amp; Development – Ongoing projects, publications, and collaborations.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">Hospital Services – Healthcare facilities, patient services, and public health initiatives.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to File an RTI Application? */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                How to File an RTI Application?
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Individuals seeking information under the RTI Act can submit a formal request in writing to the Central Public Information Officer (CPIO) of JKKN Dental College & Hospital.
              </p>
            </div>
          </div>

          {/* RTI Application Process */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                RTI Application Process:
              </h3>
            </div>
            <div className="px-6 py-5 space-y-3">
              <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Step 1: Draft a request mentioning the specific information required.</p>
              </div>
              <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Step 2: Address the application to the Central Public Information Officer (CPIO).</p>
              </div>
              <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Step 3: Pay the prescribed RTI fee as per government norms.</p>
              </div>
              <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Step 4: Submit the application in person, via post, or email (if applicable).</p>
              </div>
              <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg px-4 py-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Step 5: Await a response within 30 days, as mandated by the RTI Act.</p>
              </div>
            </div>
          </div>

          {/* RTI Contact Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                RTI Contact Details
              </h3>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <p className="text-gray-900 font-bold text-sm md:text-base mb-2">
                  <strong>CENTRE:</strong>
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                  Central Public Information Officer (CPIO) <span className="text-[#1B5E20] font-bold">CPIO DETAILS</span>
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  RTI ONLINE <span className="text-[#1B5E20] font-bold">RTI Online :: Home | Submit RTI Request | Submit RTI First Appeal | View RTI Status | RTI FAQ</span>
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-900 font-bold text-sm md:text-base mb-2">
                  <strong>STATE, TAMILNADU:</strong>
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                  <span className="text-[#1B5E20] font-bold">RTI Online :: Online RTI Information System</span>
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                  Public Information Officers & Appellate Authorities
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  <span className="text-[#1B5E20] font-bold">Public Information Officers and Appellate Authorities – Right to Information Act, Tamil Nadu</span>
                </p>
                <p className="text-gray-700 font-semibold text-sm md:text-base mb-3">
                  Health and Family Welfare Department
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-gray-700 text-sm md:text-base">
                    Public Information Officers of Health and Family Welfare Department, Secretariat  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    Appellate Authorities of Health and Family Welfare Department, Secretariat  [English Version] [Tamil Version]
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    PIOs and Appellate Authorities of Directorate of Public Health and Preventive Medicine  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    PIOs and Appellate Authorities of Directorate of Medical Education
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    PIOs and Appellate Authorities in the Government Medical Institutions under the control of Director of Medical and Rural Health Services
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    PIOs and Appellate Authorities of Directorate of Family Welfare  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    PIOs and Appellate Authorities of Department of Drug Control Administration  <span className="text-[#1B5E20] font-bold">[English Version] [Tamil Version]</span>
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    <span className="text-[#1B5E20] font-bold">PIOs and Appellate Authorities of Tamil Nadu Health Systems Project</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemptions Under RTI */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Exemptions Under RTI
              </h3>
            </div>
            <div className="px-6 py-5 space-y-3">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                As per the RTI Act, certain information is exempt from disclosure, including:
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Personal and confidential information of learners, senior learners, or patients.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base ml-4">
                Information that affects national security, public safety, or ongoing legal proceedings.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base ml-4">
                Intellectual property, research data, and internal deliberations.
              </p>
            </div>
          </div>

          {/* Commitment to Transparency */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">
                Commitment to Transparency
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                At JKKN Dental College & Hospital, we uphold the principles of good governance, transparency, and public accountability. Through the RTI framework, we ensure that relevant information is accessible, accurate, and timely to all stakeholders.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-4">
            <a
              href="/pdf/RTI-guide-for-cpio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-10 rounded-xl transition-colors duration-200 shadow-sm uppercase text-sm tracking-wide"
            >
              RTI-guide-for-cpio
            </a>
            <a
              href="/pdf/RTI-Act-2005-Amended-English-Version.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006837] hover:bg-[#005a2f] text-white font-bold py-3 px-10 rounded-xl transition-colors duration-200 shadow-sm uppercase text-sm tracking-wide"
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
