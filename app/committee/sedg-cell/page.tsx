import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'SEDG Cell | JKKN Dental College',
  description: 'Supporting marginalized and economically weaker students with scholarships, mentoring, and inclusive academic opportunities as per NEP 2020.',
  keywords: 'SEDG cell, socio-economic support, disadvantaged groups, scholarships, inclusive education, NEP 2020, UGC guidelines, JKKN dental',
  openGraph: {
    title: 'SEDG Cell | JKKN Dental College',
    description: 'Supporting marginalized and economically weaker students with scholarships, mentoring, and inclusive academic opportunities as per NEP 2020.',
    url: 'https://dental.jkkn.ac.in/committee/sedg-cell/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function SEDGCell() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee/sedg-cell');
  const webPageSchema = generateWebPageSchema({
    title: 'SEDG Cell | JKKN Dental College',
    description: 'Supporting marginalized and economically weaker students with scholarships, mentoring, and inclusive academic opportunities as per NEP 2020.',
    url: 'https://dental.jkkn.ac.in/committee/sedg-cell/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'SEDG Cell | JKKN Dental College',
    description: 'Supporting marginalized and economically weaker students with scholarships, mentoring, and inclusive academic opportunities as per NEP 2020.',
    url: 'https://dental.jkkn.ac.in/committee/sedg-cell/',
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

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12">
            SEDG CELL
          </h1>

          {/* Main Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D7C66] mb-8">
            Socio-Economically Disadvantaged Groups (SEDG) Cell
          </h2>

          {/* About the Cell */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-6">
            About the Cell
          </h3>

          <p className="text-base text-black mb-8 leading-relaxed text-justify">
            The Socio-Economically Disadvantaged Groups (SEDG) Cell at JKK N Dental College &amp; Hospital is committed to fostering an inclusive academic and social environment for students from marginalized, underprivileged, and economically weaker sections. Guided by the principles of equity and inclusion under NEP 2020 and UGC Guidelines, the Cell strives to ensure that every student has equal access to academic resources, support services, and growth opportunities.
          </p>

          {/* Objectives */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-6">
            Objectives
          </h3>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              To identify students from SEDGs and assess their academic and non-academic support needs.
            </li>
            <li className="font-semibold">
              To implement initiatives that improve access, equity, and outcomes for disadvantaged students.
            </li>
            <li className="font-semibold">
              To promote inclusive practices in teaching, learning, and evaluation.
            </li>
            <li className="font-semibold">
              To monitor and evaluate welfare schemes such as scholarships, mentoring, and skill development.
            </li>
            <li className="font-semibold">
              To address grievances related to access, discrimination, or equity gaps.
            </li>
          </ul>

          {/* Committee Members Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 px-4 py-3 text-left font-bold text-gray-700 uppercase">
                    NAME
                  </th>
                  <th className="border border-gray-400 px-4 py-3 text-left font-bold text-gray-700 uppercase">
                    DESIGNATION
                  </th>
                  <th className="border border-gray-400 px-4 py-3 text-left font-bold text-gray-700 uppercase">
                    ROLE IN THE CELL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    DR./PROF. DHANASEKAR
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    PRINCIPAL
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    CHAIRPERSON
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    DR./PROF. RAMYA
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    HEAD OF THE DEPARTMENT - ORTHODONTICS
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    CONVENOR
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    DR. KARKUZHALI
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    FACULTY - MICROBIOLOGY
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    MEMBER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    DR. K.M. RAJENDRAN
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    ADMINISTRATIVE STAFF - CAO
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    MEMBER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    MR./MS. GAYATHRI.P
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    STUDENT REPRESENTATIVE (UG - CRRI)
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    MEMBER
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    MR./MS. KRISHNIKA.S
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    STUDENT REPRESENTATIVE (UG - SECOND YEAR)
                  </td>
                  <td className="border border-gray-400 px-4 py-3 font-semibold text-gray-700">
                    MEMBER
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-base text-black italic mb-12 leading-relaxed">
            (Constituted as per UGC Guidelines for Equitable Opportunity to SEDGs in HEIs)
          </p>

          {/* Functions */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-6">
            Functions
          </h3>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Organize orientation and sensitization programs on inclusion and equity.
            </li>
            <li className="font-semibold">
              Coordinate with departments to track academic performance and offer remedial support.
            </li>
            <li className="font-semibold">
              Facilitate access to scholarships, internships, and funding opportunities.
            </li>
            <li className="font-semibold">
              Act as a nodal point for addressing concerns and feedback from SEDG students.
            </li>
            <li className="font-semibold">
              Collaborate with other institutional bodies like Equal Opportunity Cell, SC/ST Cell, and Women&apos;s Cell.
            </li>
          </ul>

          {/* Support Services */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-6">
            Support Services
          </h3>

          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700 ml-4">
            <li className="font-semibold">
              Remedial Coaching
            </li>
            <li className="font-semibold">
              Career Guidance and Skill Development
            </li>
            <li className="font-semibold">
              Access to Digital Learning Resources
            </li>
            <li className="font-semibold">
              Scholarship and Financial Aid Support
            </li>
            <li className="font-semibold">
              Mentorship Programs
            </li>
          </ul>

          {/* Contact Us */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0D7C66] mb-6">
            Contact Us
          </h3>

          <p className="text-base text-black font-bold mb-4">
            Dr Ramya
          </p>

          <p className="text-base text-black mb-2">
            SEDG Cell,
          </p>
          <p className="text-base text-black mb-4 font-bold">
            JKKN Dental College &amp; Hospital, Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu. 638183.
          </p>

          <p className="text-base text-black mb-2">
            Email: dental@jkkn.ac.in
          </p>
          <p className="text-base text-black mb-2">
            Phone: <span className="font-bold">+91 93458 55001</span>
          </p>
          <p className="text-base text-black mb-12">
            Website: https://dental.jkkn.ac.in/sedg-cell/
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
