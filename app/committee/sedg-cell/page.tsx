import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { BookOpen, Target, Users, Settings2, GraduationCap, Phone } from 'lucide-react';

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

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            SEDG CELL
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-200">
            Socio-Economically Disadvantaged Groups (SEDG) Cell
          </h2>
        </div>
      </section>

      {/* About the Cell */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6" /> About the Cell
          </h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="hero-description text-gray-700 text-base leading-relaxed">
              The Socio-Economically Disadvantaged Groups (SEDG) Cell at JKK N Dental College &amp; Hospital is committed to fostering an inclusive academic and social environment for learners from marginalized, underprivileged, and economically weaker sections. Guided by the principles of equity and inclusion under NEP 2020 and UGC Guidelines, the Cell strives to ensure that every learner has equal access to academic resources, support services, and growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <Target className="w-6 h-6" /> Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">To identify learners from SEDGs and assess their academic and non-academic support needs.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">To implement initiatives that improve access, equity, and outcomes for disadvantaged learners.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">To promote inclusive practices in teaching, learning, and evaluation.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">To monitor and evaluate welfare schemes such as scholarships, mentoring, and skill development.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">To address grievances related to access, discrimination, or equity gaps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <Users className="w-6 h-6" /> Committee Members
          </h3>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-green-100">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#006837]">
                  <th className="px-6 py-4 text-left font-bold text-white uppercase text-sm">
                    NAME
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white uppercase text-sm">
                    DESIGNATION
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white uppercase text-sm">
                    ROLE IN THE CELL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">DR./PROF. DHANASEKAR</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">PRINCIPAL</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">CHAIRPERSON</td>
                </tr>
                <tr className="bg-[#f9fdf9]">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">DR./PROF. RAMYA</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">HEAD OF THE DEPARTMENT - ORTHODONTICS</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">CONVENOR</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">DR. KARKUZHALI</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">FACULTY - MICROBIOLOGY</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">MEMBER</td>
                </tr>
                <tr className="bg-[#f9fdf9]">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">DR. K.M. RAJENDRAN</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">ADMINISTRATIVE STAFF - CAO</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">MEMBER</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">MR./MS. GAYATHRI.P</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">STUDENT REPRESENTATIVE (UG - CRRI)</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-green-100">MEMBER</td>
                </tr>
                <tr className="bg-[#f9fdf9]">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">MR./MS. KRISHNIKA.S</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">STUDENT REPRESENTATIVE (UG - SECOND YEAR)</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">MEMBER</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic mt-4">
            (Constituted as per UGC Guidelines for Equitable Opportunity to SEDGs in HEIs)
          </p>
        </div>
      </section>

      {/* Functions */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <Settings2 className="w-6 h-6" /> Functions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Organize orientation and sensitization programs on inclusion and equity.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Coordinate with departments to track academic performance and offer remedial support.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Facilitate access to scholarships, internships, and funding opportunities.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Act as a nodal point for addressing concerns and feedback from SEDG learners.</p>
            </div>
            <div className="flex items-start gap-3 bg-[#FBFBEE] rounded-lg p-4 border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Collaborate with other institutional bodies like Equal Opportunity Cell, SC/ST Cell, and Women&apos;s Cell.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6" /> Support Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Remedial Coaching</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Career Guidance and Skill Development</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Access to Digital Learning Resources</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Scholarship and Financial Aid Support</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">Mentorship Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Phone className="w-6 h-6" /> Contact Us
          </h3>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20">
            <p className="text-white font-bold text-base mb-3">
              Dr Ramya
            </p>
            <p className="text-green-100 text-base mb-1">
              SEDG Cell,
            </p>
            <p className="text-green-100 font-bold text-base mb-4">
              JKKN Dental College &amp; Hospital, Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu. 638183.
            </p>
            <p className="text-green-100 text-base mb-1">
              Email: dental@jkkn.ac.in
            </p>
            <p className="text-green-100 text-base mb-1">
              Phone: <span className="font-bold text-white">+91 93458 55001</span>
            </p>
            <p className="text-green-100 text-base">
              Website: https://dental.jkkn.ac.in/sedg-cell/
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
