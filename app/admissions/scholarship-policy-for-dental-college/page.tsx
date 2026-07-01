import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Scholarships & Aid | JKKN Dental College',
  description: 'Explore JKKN Dental College scholarship programs for academic excellence, sports achievements, and special circumstances. Apply for financial aid.',
  keywords: 'dental college scholarship, JKKN scholarship policy, academic scholarship, sports quota scholarship, single parent scholarship, NEET scholarship, financial aid',
  openGraph: {
    title: 'Scholarships & Aid | JKKN Dental College',
    description: 'Explore JKKN Dental College scholarship programs for academic excellence, sports achievements, and special circumstances. Apply for financial aid.',
    url: 'https://dental.jkkn.ac.in/admissions/scholarship-policy-for-dental-college/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What scholarships are available at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College offers several scholarship categories: Academic Achievement Scholarships (based on rural area background and NEET mark percentage), Sports Quota Scholarships (for state-level winners or runners-up in sports including Wrestling, Volleyball, Basketball, Kho Kho, Kabaddi, and Badminton), Single Parent Scholarship, JKKN Student Scholarship, Recommendation Letter from Governing Body scholarship, Gold Medal achievement scholarship, and Government scholarships as per government norms (SC/ST, OBC, minority categories)."
      }
    },
    {
      "@type": "Question",
      "name": "Who is eligible for scholarships at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligibility for scholarships at JKKN Dental College varies by category. Academic Achievement Scholarships are awarded based on rural area background (villages, tribal areas, underdeveloped towns) and NEET mark percentage. Sports Quota Scholarships are for learners who have achieved winner or runner-up positions in state-level tournaments. The Single Parent Scholarship requires documentation of single-parent status. Government scholarships follow standard government eligibility norms for SC/ST, OBC, and minority communities."
      }
    },
    {
      "@type": "Question",
      "name": "How to apply for a scholarship at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To apply for a scholarship at JKKN Dental College, approach the admission officer who will verify your eligibility and provide the application form. Fill out the form and submit it with required supporting documents. For Sports Quota Scholarships, provide documentation of sports achievements. For the Single Parent Scholarship, submit relevant proof of single-parent status. For government scholarships, apply through the appropriate government scholarship portal. Contact the admissions office at +91 9345855001 for assistance."
      }
    },
    {
      "@type": "Question",
      "name": "How is the scholarship amount awarded at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At JKKN Dental College, scholarship amounts are directly reduced from the learner's tuition fees — meaning eligible learners pay a reduced fee amount rather than receiving a cash award. Scholarship amounts vary by category. Note that scholarships at JKKN Dental are not renewable (one-time benefit). Sports Quota Scholarship recipients must additionally fulfil mandatory conditions including daily practice and participation in all tournaments."
      }
    },
    {
      "@type": "Question",
      "name": "Are there government scholarships for dental learners at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College facilitates government scholarships as per government norms. Eligible learners from SC/ST, OBC, and minority communities can apply for state and central government scholarship schemes. Learners are advised to apply through official government scholarship portals such as the National Scholarship Portal (NSP) and Tamil Nadu state scholarship schemes. The admissions office can guide learners on available government scholarship options."
      }
    }
  ]
};

const tocItems = [
  { label: 'Purpose', indent: false },
  { label: 'Academic Achievement Scholarships:', indent: false },
  { label: 'Sports Quota Scholarships:', indent: false },
  { label: 'Important Note', indent: true },
  { label: 'Application Process', indent: false },
  { label: 'Other Scholarships:', indent: false },
  { label: 'Single Parent Scholarship', indent: true },
  { label: 'JKKN Student Scholarship', indent: true },
  { label: 'Recommendation Letter from Governing Body', indent: true },
  { label: 'Acquired Gold medal', indent: true },
  { label: 'Government scholarship', indent: false },
  { label: 'Application Process:', indent: false },
  { label: 'Steps to Apply', indent: true },
  { label: 'Academic Achievement Scholarships', indent: true },
  { label: 'Sports Quota Scholarships', indent: true },
  { label: 'Single Parent Scholarship', indent: true },
  { label: 'JKKN Student Scholarship', indent: true },
  { label: 'Award Details', indent: false },
  { label: 'Renewal and Compliance:', indent: false },
  { label: 'Scholarship Renewal', indent: true },
  { label: 'Compliance for Sports Quota Scholarship', indent: true },
  { label: 'Policy Review', indent: false },
];

const otherScholarships = [
  'Single Parent Scholarship:',
  'JKKN Student Scholarship:',
  'Recommendation Letter from Governing Body',
  'Acquired Gold medal',
];

const applicationSteps = [
  'All applicants must approach the admission officer , who will verify their eligibility and provide the admission form',
  'The applicant must fill out the application form and submit to the concerned person with the supporting documents.',
  'Sports Quota Scholarships: Applicants must provide documentation of their sports achievements and participation.',
  'Single Parent Scholarship: Applicants must provide relevant documentation proving single-parent status.',
  'JKKN Student Scholarship: No additional application is required for this category.',
  'Recommendation Letter from Governing Body:Applicants must provide relevant recommendation letter from governing Body.',
  'Acquired Gold medal:Applicants must provide documentation of their Gold medals.',
];

const awardDetails = [
  'Scholarship amounts will be directly reduced by the learner\'s tuition fees.',
];

const renewalItems = [
  'All categories of Scholarships are not renewable.',
  'Sports Quota Scholarship recipients must adhere to the mandatory conditions mentioned in the sports quota section.',
];

export default function ScholarshipPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admissions/scholarship-policy-for-dental-college');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Scholarships & Aid | JKKN Dental College',
    description: 'Explore JKKN Dental College scholarship programs for academic excellence, sports achievements, and special circumstances. Apply for financial aid.',
    url: 'https://dental.jkkn.ac.in/admissions/scholarship-policy-for-dental-college/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-5 text-sm text-white/60 flex items-center gap-2">
            <span>Home</span>
            <span>›</span>
            <span className="text-white/90">SCHOLARSHIP POLICY FOR DENTAL COLLEGE</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 uppercase tracking-wide">
            SCHOLARSHIP POLICY FOR DENTAL COLLEGE
          </h1>
          <div className="w-20 h-1 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <p className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-4">Contents</p>
            <ul className="space-y-2">
              {tocItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-2 text-sm md:text-base font-semibold text-gray-700 ${item.indent ? 'pl-6' : ''}`}
                >
                  <div className={`flex-shrink-0 mt-2 rounded-full bg-[#7cb983] ${item.indent ? 'w-1 h-1' : 'w-1.5 h-1.5'}`} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 1: Purpose */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">1</div>
              <h2 className="text-white font-bold text-base md:text-lg">Purpose:</h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The Dental College Scholarship Program aims to provide financial assistance to learners who exhibit exceptional academic performance, sports achievements, and special circumstances. This policy outlines the eligibility criteria, application process, and award details for various scholarship categories.
              </p>
            </div>
          </div>

          {/* Section 2: Academic Achievement Scholarships */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">2</div>
              <h2 className="text-white font-bold text-base md:text-lg">Academic Achievement Scholarships:</h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The following scholarships will be awarded based on the applicant's rural area ( villages, Tribal areas, underdeveloped towns, hamlets, and farms) and NEET mark percentage
              </p>
            </div>
          </div>

          {/* Section 3: Sports Quota Scholarships */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">3</div>
              <h2 className="text-white font-bold text-base md:text-lg">Sports Quota Scholarships:</h2>
            </div>
            <div className="px-6 py-5 space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                A tuition fee scholarship will be provided to learners who have achieved winner or runner-up positions in state-level tournaments in the following sports: Wrestling, Volleyball, Basketball, Kho Kho, Kabaddi, and Badminton.
              </p>
              {/* Important Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-bold text-amber-800 text-sm md:text-base mb-3">*Important Note</p>
                <ul className="space-y-2">
                  {['A minimum of two learners is required for admission', 'Daily Practice Compulsory', 'Participating in All Tournaments is compulsory.'].map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm md:text-base text-amber-800">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Other Scholarships */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">4</div>
              <h2 className="text-white font-bold text-base md:text-lg">Other Scholarships:</h2>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {otherScholarships.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7cb983] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Government Scholarships */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">5</div>
              <h2 className="text-white font-bold text-base md:text-lg">Government scholarships:</h2>
            </div>
            <div className="px-6 pt-5 pb-2">
              <p className="text-gray-700 text-sm md:text-base mb-4">
                The following government scholarships are available for BDS learners as per eligibility:
              </p>
            </div>
            <div className="overflow-x-auto px-6 pb-6">
              <table className="w-full text-sm text-gray-700 border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-[#006837] text-white">
                  <tr>
                    <th className="border border-[#005a2f] px-4 py-3 text-left font-bold">Category</th>
                    <th className="border border-[#005a2f] px-4 py-3 text-left font-bold">Scholarship</th>
                    <th className="border border-[#005a2f] px-4 py-3 text-center font-bold">GQ</th>
                    <th className="border border-[#005a2f] px-4 py-3 text-center font-bold">MQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FBFBEE]/60">
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#002309]" rowSpan={2}>SC / SCA / ST / BC-CC</td>
                    <td className="border border-gray-200 px-4 py-3">PMSS (Community Scholarship)</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-[#006837]">2.5L / Yr</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-[#006837]">6L / Yr</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]/60">
                    <td className="border border-gray-200 px-4 py-3">Maintainence Scholarship</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-[#006837]">5K &lt; 10K / Yr</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#002309]" rowSpan={3}>BC / MBC / DNC / BCM</td>
                    <td className="border border-gray-200 px-4 py-3">First Graduate</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-[#006837]">40K / Yr</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-3">Community Scholarship</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-[#006837]">5K &lt; 10K / Yr</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-3">Trust Scholarship (Merit Based)</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-400">—</td>
                    <td className="border border-gray-200 px-4 py-3 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]/60">
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#002309]">
                      All Community<br />
                      <span className="font-normal text-xs text-gray-500">(Govt / Govt Aided School 6 to 12 Std, Tamil Medium)</span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Naan Phudulvan Scholarship</td>
                    <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-[#006837]" colSpan={2}>₹1,000 / month (Boys &amp; Girls)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6: Application Process */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">6</div>
              <h2 className="text-white font-bold text-base md:text-lg">Application Process:</h2>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {applicationSteps.map((step, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700 ${i >= 5 ? 'pl-4' : ''}`}>
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7cb983] mt-2" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7: Award Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">7</div>
              <h2 className="text-white font-bold text-base md:text-lg">Award Details:</h2>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {awardDetails.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7cb983] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 8: Renewal and Compliance */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">8</div>
              <h2 className="text-white font-bold text-base md:text-lg">Renewal and Compliance:</h2>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {renewalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7cb983] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 9: Policy Review */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-4 bg-[#006837] px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">9</div>
              <h2 className="text-white font-bold text-base md:text-lg">Policy Review:</h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                This scholarship policy will be reviewed quarterly by the relevant Committee to ensure its relevance and effectiveness.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
