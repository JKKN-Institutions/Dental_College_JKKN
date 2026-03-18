import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free Environment',
  description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
  keywords: 'accessibility JKKN dental college, inclusive dental hospital, barrier-free environment, RPWD Act 2016, UGC accessibility guidelines, disability accommodations, wheelchair access dental college',
  openGraph: {
    title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free Environment',
    description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
    url: 'https://dental.jkkn.ac.in/facilities/accessibility-&-inclusion-at-jkkndch/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AccessibilityInclusion() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/accessibility-&-inclusion-at-jkkndch');
  const webPageSchema = generateWebPageSchema({
    title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free Environment',
    description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
    url: 'https://dental.jkkn.ac.in/facilities/accessibility-&-inclusion-at-jkkndch/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free Environment',
    description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
    url: 'https://dental.jkkn.ac.in/facilities/accessibility-&-inclusion-at-jkkndch/',
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
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            ACCESSIBILITY & INCLUSION AT JKKNDCH
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Accessibility & Inclusion at JKKN Dental College & Hospital
          </h2>

          {/* Commitment Section */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Commitment to a Barrier-Free and Inclusive Environment
          </h3>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-black mb-6">
            At JKKN Dental College & Hospital, we recognize our responsibility to create a welcoming, inclusive, and accessible environment for all individuals—including patients, visitors, and the public. Although there are currently no students with disabilities enrolled, we actively implement accessibility measures across our healthcare and administrative services in accordance with:
          </p>

          {/* Guidelines List */}
          <ul className="space-y-2 text-base text-gray-700 mb-8 ml-6">
            <li className="flex items-start">
              <span className="mr-3">■</span>
              <span><strong>Rights of Persons with Disabilities (RPWD) Act, 2016</strong></span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">■</span>
              <span><strong>UGC Accessibility Guidelines for Higher Education Institutions (2022)</strong></span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">■</span>
              <span><strong>National Education Policy (NEP) 2020</strong></span>
            </li>
          </ul>

          {/* Accessibility Measures Heading with Green Checkbox */}
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 w-8 h-8 bg-[#5CB85C] rounded flex items-center justify-center mr-3 mt-1">
              <Check className="w-5 h-5 text-white font-bold" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Accessibility Measures in Place (For Patients and Visitors)
            </h3>
          </div>

          {/* Physical Infrastructure Section */}
          <div className="mb-6">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🏢</span>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Physical Infrastructure
              </h4>
            </div>
            <ul className="space-y-2 text-base text-gray-700 ml-6">
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Barrier-free wheelchair access to hospital entrances, OPD, and treatment areas.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Accessible ramps, wide corridors, and non-slip flooring in patient areas.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Separate accessible washrooms in public areas.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Clear Braille and high-contrast signage for navigation.</strong></span>
              </li>
            </ul>
          </div>

          {/* Mobility and Transportation Section */}
          <div className="mb-6">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🚗</span>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Mobility and Transportation
              </h4>
            </div>
            <ul className="space-y-2 text-base text-gray-700 ml-6">
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Dedicated accessible parking slots near hospital entrances.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Availability of wheelchairs and assistive mobility devices on request.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Battery-operated cart for internal transport (on-call basis).</strong></span>
              </li>
            </ul>
          </div>

          {/* Communication & Support Section */}
          <div className="mb-6">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">📢</span>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Communication & Support
              </h4>
            </div>
            <ul className="space-y-2 text-base text-gray-700 ml-6">
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Priority registration and queue system for patients with disabilities.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Screen-reading software installed in the reception.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Printed materials available in large font or digital formats upon request.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Staff trained in basic inclusive communication practices.</strong></span>
              </li>
            </ul>
          </div>

          {/* Clinical and Therapeutic Services Section */}
          <div className="mb-6">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🧑‍⚕️</span>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Clinical and Therapeutic Services
              </h4>
            </div>
            <ul className="space-y-2 text-base text-gray-700 ml-6">
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Dental chairs and equipment designed to accommodate diverse mobility needs.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Assistance staff available to support patients with special needs.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Mental health counselling and psycho-social support services available.</strong></span>
              </li>
            </ul>
          </div>

          {/* Ongoing Improvements Section */}
          <div className="mb-8">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">🔧</span>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Ongoing Improvements
              </h4>
            </div>
            <ul className="space-y-2 text-base text-gray-700 ml-6">
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Periodic accessibility audits of physical and digital infrastructure.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Inclusion of accessibility standards in hospital upgrades and expansions.</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Staff sensitization on inclusion and disability awareness.</strong></span>
              </li>
            </ul>
          </div>

          {/* Note Section */}
          <div className="mb-8">
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-3">📌</span>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Note
              </h4>
            </div>
            <p className="text-base leading-relaxed text-black">
              JKKN Dental College remains committed to supporting any future students with disabilities by providing the necessary academic, infrastructural, and technological accommodations as outlined in our official Accessibility & Inclusion Policy.
            </p>
          </div>

          {/* Contact for Accessibility Support Section */}
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-3 text-[#E91E63]">📞</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Contact for Accessibility Support
              </h3>
            </div>
            <p className="text-base text-black mb-4">
              For queries or requests related to accessibility or disability accommodations, please contact:
            </p>
            <ul className="space-y-2 text-base text-gray-700 ml-6">
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Email:</strong> dental@jkkn.ac.in</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Phone:</strong> +91 93458 55001</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">■</span>
                <span><strong>Office:</strong> Principal's Office / Patient Support Desk</span>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/pdf/Guidelines-Accessibility-Guidelines-and-Standards-for-Higher-Education-Institutions-and-Universities.pdf"
              className="bg-[#5CB85C] hover:bg-[#4CAF50] text-white font-bold py-3 px-6 rounded transition-colors duration-300 text-sm md:text-base text-center"
            >
              Accessibility Guidelines and Standards for Higher Education Institutions and Universities
            </a>
            <a
              href="/pdf/DIVYANJAN.pdf"
              className="bg-[#5CB85C] hover:bg-[#4CAF50] text-white font-bold py-3 px-6 rounded transition-colors duration-300 text-base md:text-lg text-center"
            >
              DIVYANJAN
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
