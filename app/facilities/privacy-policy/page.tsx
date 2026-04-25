import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { User, FileText, Share2, ShieldCheck, Clock, CheckCircle, RefreshCw, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - JKKN Dental Data Protection & Security',
  description: 'JKKN Dental College privacy policy outlines personal data collection, usage, protection, and your rights regarding information security and confidentiality.',
  keywords: 'privacy policy JKKN, data protection dental college, personal information security, JKKN privacy statement, data confidentiality, user privacy rights',
  openGraph: {
    title: 'Privacy Policy - JKKN Dental Data Protection & Security',
    description: 'JKKN Dental College privacy policy outlines personal data collection, usage, protection, and your rights regarding information security and confidentiality.',
    url: 'https://dental.jkkn.ac.in/facilities/privacy-policy/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function PrivacyPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/privacy-policy');
  const webPageSchema = generateWebPageSchema({
    title: 'Privacy Policy - JKKN Dental Data Protection & Security',
    description: 'JKKN Dental College privacy policy outlines personal data collection, usage, protection, and your rights regarding information security and confidentiality.',
    url: 'https://dental.jkkn.ac.in/facilities/privacy-policy/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Privacy Policy - JKKN Dental Data Protection & Security',
    description: 'JKKN Dental College privacy policy outlines personal data collection, usage, protection, and your rights regarding information security and confidentiality.',
    url: 'https://dental.jkkn.ac.in/facilities/privacy-policy/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            PRIVACY POLICY
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            At JKKN Dental College &amp; Hospital, we respect the privacy of our website visitors and are committed to protecting the personal information you share with us. This Privacy Policy outlines our practices with respect to the collection, use, and disclosure of personal information on our website.
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Personal Information We Collect */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <User className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Personal Information We Collect</h2>
            <p className="text-gray-600 text-sm leading-relaxed">We may collect the following personal information from you when you visit our website:</p>
            <ul className="flex flex-col gap-2">
              {[
                'Name, email address, postal address, and phone number',
                'Academic qualifications and work experience',
                'Any other information you voluntarily provide to us through our website, such as when you fill out a contact form or send us an email',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7cb983] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Use of Personal Information */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <FileText className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Use of Personal Information</h2>
            <p className="text-gray-600 text-sm leading-relaxed">We may use your personal information for the following purposes:</p>
            <ul className="flex flex-col gap-2">
              {[
                'To respond to your inquiries and provide you with information about our programs, services, and events',
                'To process and evaluate your application for admission to our college or for employment',
                'To communicate with you about news, events, and other updates related to JKK Nattraja Dental College & Hospital',
                "To improve the content and functionality of our website and to better understand our website visitors' interests and preferences",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7cb983] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Disclosure of Personal Information */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Share2 className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Disclosure of Personal Information</h2>
            <p className="text-gray-600 text-sm leading-relaxed">We do not disclose your personal information to third parties without your consent, except in the following circumstances:</p>
            <ul className="flex flex-col gap-2">
              {[
                'When required by law or legal process',
                'To protect the rights or property of JKK Nattraja Dental College & Hospital or our website users',
                'To contractors or service providers who assist us in the operation of our website or in the provision of our programs, services, or events',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7cb983] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Security of Personal Information */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Security of Personal Information</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your personal information.
            </p>
          </div>

          {/* Retention of Personal Information */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Clock className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Retention of Personal Information</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law or regulation.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Your Rights</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              You have the right to access and correct your personal information, and to request that we delete your personal information. To exercise these rights, please contact us using the contact information below.
            </p>
          </div>

          {/* Updates to Privacy Policy */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <RefreshCw className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Updates to Privacy Policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes to this Privacy Policy will be posted on our website with the updated effective date.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Phone className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Contact Us</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at JKKN Dental College &amp; Hospital
            </p>
            <div className="text-sm leading-relaxed text-gray-600 flex flex-col gap-1">
              <p>Call: +91 93458 55001</p>
              <p>Email: info@jkkn.ac.in</p>
              <p>Address: JKKN Dental College &amp; Hospital , Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
