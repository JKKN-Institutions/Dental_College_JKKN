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
    url: 'https://dental.jkkn.ac.in/admission/scholarship-policy-for-dental-college/',
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
        "text": "Eligibility for scholarships at JKKN Dental College varies by category. Academic Achievement Scholarships are awarded based on rural area background (villages, tribal areas, underdeveloped towns) and NEET mark percentage. Sports Quota Scholarships are for students who have achieved winner or runner-up positions in state-level tournaments. The Single Parent Scholarship requires documentation of single-parent status. Government scholarships follow standard government eligibility norms for SC/ST, OBC, and minority communities."
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
        "text": "At JKKN Dental College, scholarship amounts are directly reduced from the student's tuition fees — meaning eligible students pay a reduced fee amount rather than receiving a cash award. Scholarship amounts vary by category. Note that scholarships at JKKN Dental are not renewable (one-time benefit). Sports Quota Scholarship recipients must additionally fulfil mandatory conditions including daily practice and participation in all tournaments."
      }
    },
    {
      "@type": "Question",
      "name": "Are there government scholarships for dental students at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College facilitates government scholarships as per government norms. Eligible students from SC/ST, OBC, and minority communities can apply for state and central government scholarship schemes. Students are advised to apply through official government scholarship portals such as the National Scholarship Portal (NSP) and Tamil Nadu state scholarship schemes. The admissions office can guide students on available government scholarship options."
      }
    }
  ]
};

export default function ScholarshipPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema('/admission/scholarship-policy-for-dental-college');
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Scholarships & Aid | JKKN Dental College',
    description: 'Explore JKKN Dental College scholarship programs for academic excellence, sports achievements, and special circumstances. Apply for financial aid.',
    url: 'https://dental.jkkn.ac.in/admission/scholarship-policy-for-dental-college/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>SCHOLARSHIP POLICY FOR DENTAL COLLEGE</span>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            SCHOLARSHIP POLICY FOR DENTAL COLLEGE
          </h1>

          {/* Table of Contents */}
          <ul className="mb-8 space-y-2 text-gray-700">
            <li className="font-semibold">Purpose</li>
            <li className="font-semibold">Academic Achievement Scholarships:</li>
            <li className="font-semibold">Sports Quota Scholarships:</li>
            <li className="ml-6 font-semibold">Important Note</li>
            <li className="font-semibold">Application Process</li>
            <li className="font-semibold">Other Scholarships:</li>
            <li className="ml-6 font-semibold">Single Parent Scholarship</li>
            <li className="ml-6 font-semibold">JKKN Student Scholarship</li>
            <li className="ml-6 font-semibold">Recommendation Letter from Governing Body</li>
            <li className="ml-6 font-semibold">Acquired Gold medal</li>
            <li className="font-semibold">Government scholarship</li>
            <li className="font-semibold">Application Process:</li>
            <li className="ml-6 font-semibold">Steps to Apply</li>
            <li className="ml-6 font-semibold">Academic Achievement Scholarships</li>
            <li className="ml-6 font-semibold">Sports Quota Scholarships</li>
            <li className="ml-6 font-semibold">Single Parent Scholarship</li>
            <li className="ml-6 font-semibold">JKKN Student Scholarship</li>
            <li className="font-semibold">Award Details</li>
            <li className="font-semibold">Renewal and Compliance:</li>
            <li className="ml-6 font-semibold">Scholarship Renewal</li>
            <li className="ml-6 font-semibold">Compliance for Sports Quota Scholarship</li>
            <li className="font-semibold">Policy Review</li>
          </ul>

          {/* 1. Purpose */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            1. Purpose:
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            The Dental College Scholarship Program aims to provide financial assistance to students who exhibit exceptional academic performance, sports achievements, and special circumstances. This policy outlines the eligibility criteria, application process, and award details for various scholarship categories.
          </p>

          {/* 2. Academic Achievement Scholarships */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            2. Academic Achievement Scholarships:
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            The following scholarships will be awarded based on the applicant's rural area ( villages, Tribal areas, underdeveloped towns, hamlets, and farms) and NEET mark percentage
          </p>

          {/* 3. Sports Quota Scholarships */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            3. Sports Quota Scholarships:
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            A tuition fee scholarship will be provided to students who have achieved winner or runner-up positions in state-level tournaments in the following sports: Wrestling, Volleyball, Basketball, Kho Kho, Kabaddi, and Badminton.
          </p>

          {/* Important Note */}
          <p className="text-gray-700 mb-3 leading-relaxed font-bold">
            *Important Note
          </p>
          <p className="text-gray-700 mb-3 leading-relaxed">
            A minimum of two students is required for admission
          </p>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Daily Practice Compulsory
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Participating in All Tournaments is compulsory.
          </p>

          {/* 4. Other Scholarships */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            4. Other Scholarships:
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
            <li className="font-semibold">Single Parent Scholarship:</li>
            <li className="font-semibold">JKKN Student Scholarship:</li>
            <li className="font-semibold">Recommendation Letter from Governing Body</li>
            <li className="font-semibold">Acquired Gold medal</li>
          </ul>

          {/* 5. Government scholarships */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            5.Government scholarships:
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
            <li className="font-semibold">As per Government norms</li>
          </ul>

          {/* 6. Application Process */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            6. Application Process:
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-3 text-gray-700">
            <li className="font-semibold">All applicants must approach the admission officer , who will verify their eligibility and provide the admission form</li>
            <li className="font-semibold">The applicant must fill out the application form and submit to the concerned person with the supporting documents.</li>
            <li className="font-semibold">Sports Quota Scholarships: Applicants must provide documentation of their sports achievements and participation.</li>
            <li className="font-semibold">Single Parent Scholarship: Applicants must provide relevant documentation proving single-parent status.</li>
            <li className="font-semibold">JKKN Student Scholarship: No additional application is required for this category.</li>
            <li className="ml-6 font-semibold">Recommendation Letter from Governing Body:Applicants must provide relevant recommendation letter from governing Body.</li>
            <li className="ml-6 font-semibold">Acquired Gold medal:Applicants must provide documentation of their Gold medals.</li>
          </ul>

          {/* 7. Award Details */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            7. Award Details:
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
            <li className="font-semibold">Scholarship amounts will be directly reduced by the student's tuition fees.</li>
          </ul>

          {/* 8. Renewal and Compliance */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            8. Renewal and Compliance:
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
            <li className="font-semibold">All categories of Scholarships are not renewable.</li>
            <li className="font-semibold">Sports Quota Scholarship recipients must adhere to the mandatory conditions mentioned in the sports quota section.</li>
          </ul>

          {/* 9. Policy Review */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            9. Policy Review:
          </h2>
          <p className="text-gray-700 mb-12 leading-relaxed">
            This scholarship policy will be reviewed quarterly by the relevant Committee to ensure its relevance and effectiveness.
          </p>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
