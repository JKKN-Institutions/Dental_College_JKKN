import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Check, Building2, Car, Megaphone, Stethoscope, Wrench, Pin, Phone } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/facilities/accessibility-and-inclusion-at-jkkndch/' },
  title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free',
  description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
  keywords: 'accessibility JKKN dental college, inclusive dental hospital, barrier-free environment, RPWD Act 2016, UGC accessibility guidelines, disability accommodations, wheelchair access dental college',
  openGraph: {
    title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free',
    description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
    url: 'https://dental.jkkn.ac.in/facilities/accessibility-and-inclusion-at-jkkndch/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function AccessibilityInclusion() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/accessibility-and-inclusion-at-jkkndch');
  const webPageSchema = generateWebPageSchema({
    title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free',
    description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
    url: 'https://dental.jkkn.ac.in/facilities/accessibility-and-inclusion-at-jkkndch/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Accessibility & Inclusion at JKKNDCH - Barrier-Free',
    description: 'JKKN Dental College ensures accessibility for all with wheelchair access, Braille signage, priority services, and inclusive facilities for patients and visitors.',
    url: 'https://dental.jkkn.ac.in/facilities/accessibility-and-inclusion-at-jkkndch/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ACCESSIBILITY &amp; INCLUSION AT JKKNDCH
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-200">
            Accessibility &amp; Inclusion at JKKN Dental College &amp; Hospital
          </h2>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6">
            Commitment to a Barrier-Free and Inclusive Environment
          </h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="hero-description text-gray-700 text-base leading-relaxed mb-6">
              At JKKN Dental College &amp; Hospital, we recognize our responsibility to create a welcoming, inclusive, and accessible environment for all individuals—including patients, visitors, and the public. Although there are currently no learners with disabilities enrolled, we actively implement accessibility measures across our healthcare and administrative services in accordance with:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed"><strong>Rights of Persons with Disabilities (RPWD) Act, 2016</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed"><strong>UGC Accessibility Guidelines for Higher Education Institutions (2022)</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed"><strong>National Education Policy (NEP) 2020</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Measures */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 bg-[#5CB85C] rounded flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#006837]">
              Accessibility Measures in Place (For Patients and Visitors)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Physical Infrastructure */}
            <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[#006837]" />
                </div>
                <h4 className="text-lg font-bold text-[#006837]">Physical Infrastructure</h4>
              </div>
              <div className="space-y-3">
                {[
                  'Barrier-free wheelchair access to hospital entrances, OPD, and treatment areas.',
                  'Accessible ramps, wide corridors, and non-slip flooring in patient areas.',
                  'Separate accessible washrooms in public areas.',
                  'Clear Braille and high-contrast signage for navigation.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed"><strong>{item}</strong></p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobility and Transportation */}
            <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-[#006837]" />
                </div>
                <h4 className="text-lg font-bold text-[#006837]">Mobility and Transportation</h4>
              </div>
              <div className="space-y-3">
                {[
                  'Dedicated accessible parking slots near hospital entrances.',
                  'Availability of wheelchairs and assistive mobility devices on request.',
                  'Battery-operated cart for internal transport (on-call basis).',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed"><strong>{item}</strong></p>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication & Support */}
            <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Megaphone className="w-5 h-5 text-[#006837]" />
                </div>
                <h4 className="text-lg font-bold text-[#006837]">Communication &amp; Support</h4>
              </div>
              <div className="space-y-3">
                {[
                  'Priority registration and queue system for patients with disabilities.',
                  'Screen-reading software installed in the reception.',
                  'Printed materials available in large font or digital formats upon request.',
                  'Team members trained in basic inclusive communication practices.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed"><strong>{item}</strong></p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical and Therapeutic Services */}
            <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5 text-[#006837]" />
                </div>
                <h4 className="text-lg font-bold text-[#006837]">Clinical and Therapeutic Services</h4>
              </div>
              <div className="space-y-3">
                {[
                  'Dental chairs and equipment designed to accommodate diverse mobility needs.',
                  'Assistance team members available to support patients with special needs.',
                  'Mental health counselling and psycho-social support services available.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed"><strong>{item}</strong></p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ongoing Improvements */}
            <div className="bg-[#FBFBEE] rounded-xl p-6 border border-green-100 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-[#006837]" />
                </div>
                <h4 className="text-lg font-bold text-[#006837]">Ongoing Improvements</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  'Periodic accessibility audits of physical and digital infrastructure.',
                  'Inclusion of accessibility standards in hospital upgrades and expansions.',
                  'Team member sensitization on inclusion and disability awareness.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed"><strong>{item}</strong></p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
                <Pin className="w-5 h-5 text-[#006837]" />
              </div>
              <h4 className="text-xl font-bold text-[#006837]">Note</h4>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              JKKN Dental College remains committed to supporting any future learners with disabilities by providing the necessary academic, infrastructural, and technological accommodations as outlined in our official Accessibility &amp; Inclusion Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact for Accessibility Support */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Contact for Accessibility Support
            </h3>
          </div>
          <p className="text-green-100 text-base mb-6">
            For queries or requests related to accessibility or disability accommodations, please contact:
          </p>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-8 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-300 mt-1.5 flex-shrink-0" />
              <p className="text-green-100 text-sm leading-relaxed"><strong className="text-white">Email:</strong> dental@jkkn.ac.in</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-300 mt-1.5 flex-shrink-0" />
              <p className="text-green-100 text-sm leading-relaxed"><strong className="text-white">Phone:</strong> +91 93458 55001</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-300 mt-1.5 flex-shrink-0" />
              <p className="text-green-100 text-sm leading-relaxed"><strong className="text-white">Office:</strong> Principal&apos;s Office / Patient Support Desk</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/pdf/Guidelines-Accessibility-Guidelines-and-Standards-for-Higher-Education-Institutions-and-Universities.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm text-center"
            >
              Accessibility Guidelines and Standards for Higher Education Institutions and Universities
            </a>
            <a
              href="/pdf/DIVYANJAN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-base text-center"
            >
              DIVYANJAN
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
