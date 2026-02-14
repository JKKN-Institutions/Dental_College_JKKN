import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Privacy Policy - JKKN Dental College Data Protection & Security',
  description: 'JKKN Dental College privacy policy outlines personal data collection, usage, protection, and your rights regarding information security and confidentiality.',
  keywords: 'privacy policy JKKN, data protection dental college, personal information security, JKKN privacy statement, data confidentiality, user privacy rights',
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            PRIVACY POLICY
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
            At JKKN Dental College & Hospital, we respect the privacy of our website visitors and are committed to protecting the personal information you share with us. This Privacy Policy outlines our practices with respect to the collection, use, and disclosure of personal information on our website.
          </p>

          {/* Personal Information We Collect */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Personal Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              We may collect the following personal information from you when you visit our website:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-base text-gray-600">
              <li>Name, email address, postal address, and phone number</li>
              <li>Academic qualifications and work experience</li>
              <li>Any other information you voluntarily provide to us through our website, such as when you fill out a contact form or send us an email</li>
            </ul>
          </div>

          {/* Use of Personal Information */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Use of Personal Information
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-base text-gray-600">
              <li>To respond to your inquiries and provide you with information about our programs, services, and events</li>
              <li>To process and evaluate your application for admission to our college or for employment</li>
              <li>To communicate with you about news, events, and other updates related to JKK Nattraja Dental College & Hospital</li>
              <li>To improve the content and functionality of our website and to better understand our website visitors' interests and preferences</li>
            </ul>
          </div>

          {/* Disclosure of Personal Information */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Disclosure of Personal Information
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              We do not disclose your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-base text-gray-600">
              <li>When required by law or legal process</li>
              <li>To protect the rights or property of JKK Nattraja Dental College & Hospital or our website users</li>
              <li>To contractors or service providers who assist us in the operation of our website or in the provision of our programs, services, or events</li>
            </ul>
          </div>

          {/* Security of Personal Information */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Security of Personal Information
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your personal information.
            </p>
          </div>

          {/* Retention of Personal Information */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Retention of Personal Information
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law or regulation.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Your Rights
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              You have the right to access and correct your personal information, and to request that we delete your personal information. To exercise these rights, please contact us using the contact information below.
            </p>
          </div>

          {/* Updates to Privacy Policy */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Updates to Privacy Policy
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              We may update this Privacy Policy from time to time. Any changes to this Privacy Policy will be posted on our website with the updated effective date.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-12">
            <h2 className="text-base md:text-lg font-bold text-gray-600 mb-4">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at JKKN Dental College & Hospital
            </p>
            <div className="text-base leading-relaxed text-gray-600">
              <p className="mb-2">Call: +91 93458 55001</p>
              <p className="mb-2">Email: info@jkkn.ac.in</p>
              <p>Address: JKKN Dental College & Hospital , Nattrajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
