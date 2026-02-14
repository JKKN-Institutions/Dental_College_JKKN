import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Institutional Development Plan | JKKN Dental College IDP',
  description: 'View JKKN Dental College IDP aligned with NEP 2020, UGC guidelines & SDGs. Strategic goals for academic excellence, research & community health. Download IDP document.',
  keywords: 'institutional development plan, IDP, NEP 2020, UGC guidelines, strategic planning',
};

export default function InstitutionalDevelopmentPlan() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 uppercase">
            INSTITUTIONAL DEVELOPMENT PLAN
          </h1>

          {/* Institutional Development Plan (IDP) */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6">
            Institutional Development Plan (IDP)
          </h2>

          {/* Commitment Section */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1B5E20] mb-6">
            Commitment to Academic Excellence and National Educational Goals
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            At <strong>JKKN Dental College & Hospital</strong>, we are deeply committed to holistic institutional growth guided by the University Grants Commission (UGC) framework for Institutional Development Plans (IDPs). Our IDP is designed to reflect the principles of NEP 2020, ensuring academic innovation, community engagement, digital transformation, and sustainable development.
          </p>

          <p className="text-gray-700 font-bold mb-4">
            We affirm that our Institutional Development Plan:
          </p>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700">
            <li>Adheres to the UGC Guidelines for IDPs for Higher Educational Institutions (HEIs).</li>
            <li>Aligns with National Education Policy (NEP) 2020, Sustainable Development Goals (SDGs), and the National Credit Framework (NCrF).</li>
            <li>Is tailored to our vision of producing competent, ethical dental professionals while contributing meaningfully to society and global healthcare.</li>
          </ul>

          {/* Our Vision */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1B5E20] mb-4">
            Our Vision
          </h3>

          <p className="text-gray-700 mb-10 italic">
            "To be a Leading Global Innovative Solution Provider for the Ever-Changing Needs of Society."
          </p>

          {/* Institutional Documents */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1B5E20] mb-4">
            Institutional Documents
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We are proud to share our strategic development plans and UGC regulatory framework as a part of our commitment to transparency and quality.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="/pdf/Download-UGC-IDP-Guidelines.pdf"
              className="bg-[#1B5E20] hover:bg-[#0d3d13] text-white font-bold py-3 px-8 rounded transition-all duration-300 text-center uppercase text-sm"
            >
              DOWNLOAD UGC IDP GUIDELINES
            </a>
            <a
              href="/pdf/Download-JKKN-IDP-Document.pdf"
              className="bg-[#1B5E20] hover:bg-[#0d3d13] text-white font-bold py-3 px-8 rounded transition-all duration-300 text-center uppercase text-sm"
            >
              DOWNLOAD JKKN IDP DOCUMENT
            </a>
          </div>

          {/* Highlights of JKKN IDP */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1B5E20] mb-4">
            Highlights of JKKN IDP
          </h3>

          <ul className="list-disc list-inside mb-10 space-y-3 text-gray-700">
            <li>Strategic goals focused on academic excellence, research, community health, and financial sustainability.</li>
            <li>Robust faculty development and interdisciplinary learning initiatives.</li>
            <li>Comprehensive community engagement through dental camps and outreach programs.</li>
            <li>Integration of digital technologies in learning and administration.</li>
            <li>Environmentally responsible infrastructure upgrades with green campus initiatives.</li>
          </ul>

          {/* In Alignment With */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1B5E20] mb-4">
            In Alignment With
          </h3>

          <ul className="list-disc list-inside mb-10 space-y-3 text-gray-700">
            <li>University Grants Commission (UGC)</li>
            <li>Dental Council of India (DCI)</li>
            <li>Tamil Nadu Dr. M.G.R. Medical University</li>
            <li>National Education Policy 2020 (NEP)</li>
            <li>NAAC Accreditation Framework</li>
          </ul>

          {/* Contact for More Information */}
          <h3 className="text-xl md:text-2xl font-bold text-[#1B5E20] mb-4">
            Contact for More Information
          </h3>

          <p className="text-gray-700 mb-2">
            For queries related to the Institutional Development Plan, please contact:
          </p>

          <div className="text-gray-700 space-y-1 mb-6">
            <p><strong>Email:</strong> dental@jkkn.ac.in</p>
            <p><strong>Phone:</strong> +91 93458 55001</p>
            <p><strong>Office:</strong> Principal's Office, JKKN Dental College & Hospital</p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
