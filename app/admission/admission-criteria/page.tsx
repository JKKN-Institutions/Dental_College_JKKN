import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Admission Criteria | BDS & MDS Eligibility | JKKN Dental',
  description: 'JKKN Dental College admission criteria for BDS and MDS programs. Learn about NEET eligibility, qualifying marks, age limits, and selection process for dental courses.',
  keywords: 'admission criteria, eligibility, NEET requirements, BDS eligibility, MDS eligibility, admission requirements',
  openGraph: {
    title: 'Admission Criteria | BDS & MDS Eligibility | JKKN Dental',
    description: 'JKKN Dental College admission criteria for BDS and MDS programs. Learn about NEET eligibility, qualifying marks, age limits, and selection process for dental courses.',
    url: 'https://dental.jkkn.ac.in/admission/admission-criteria/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema('/admission/admission-criteria/');

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the eligibility criteria for BDS admission at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To be eligible for BDS admission at JKKN Dental College, candidates must have passed 10+2 (Class 12) with Physics, Chemistry, and Biology, securing a minimum of 50% marks in these subjects taken together. Candidates must also have qualified in the NEET-UG examination. The BDS program is a 5-year course (4 years academic + 1 year CRRI internship) with 100 seats affiliated to TN Dr. MGR Medical University and approved by the Dental Council of India (DCI)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the NEET cutoff for JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College admission for BDS is based on NEET-UG scores. The exact cutoff varies each year depending on the number of applicants, seat availability (35 government quota + 65 management quota), and state counseling rank lists. For the most current cutoff information, contact the admissions office at +91 9345855001 or visit the Tamil Nadu state dental counseling authority."
      }
    },
    {
      "@type": "Question",
      "name": "Is there management quota admission at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Dental College has both government quota (35 seats) and management quota (65 seats) for BDS admissions. Management quota admissions are conducted by the college through the official admission portal after NEET-UG qualification. Candidates must still qualify in NEET-UG to be eligible for management quota seats."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for BDS admission at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates seeking BDS admission at JKKN Dental College typically need to submit the following documents: NEET-UG scorecard and rank letter, Class 10 and Class 12 mark sheets and pass certificates, transfer certificate from last institution, community/caste certificate (if applicable), nativity certificate, conduct and character certificate, passport-size photographs, Aadhaar card or government-issued photo ID, and medical fitness certificate. Contact the admissions office for the complete and most current document checklist."
      }
    },
    {
      "@type": "Question",
      "name": "How to apply for MDS admission at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For MDS admission at JKKN Dental College, candidates must hold a BDS degree from a DCI-recognized dental college and have completed a 1-year mandatory internship. Admission is based on NEET-MDS (NEET-PG) scores. JKKN Dental College offers MDS in specializations including Prosthodontics & Oral Implantology, Conservative Dentistry & Endodontics, Orthodontics & Dentofacial Orthopedics, Periodontics, and Oral Medicine & Radiology. Apply through the state counseling process or contact the admissions office at +91 9345855001."
      }
    }
  ]
};

const speakableSchema = generateSpeakableWebPageSchema({
  title: 'Admission Criteria | BDS & MDS Eligibility | JKKN Dental',
  description: 'JKKN Dental College admission criteria for BDS and MDS programs. Learn about NEET eligibility, qualifying marks, age limits, and selection process for dental courses.',
  url: 'https://dental.jkkn.ac.in/admission/admission-criteria/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default function AdmissionCriteria() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-8">
            ADMISSION CRITERIA
          </h1>

          {/* Content */}
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p className="font-semibold">
              Candidate must have obtained 50% marks in Physics, Chemistry and Biology taken together also should have compulsorily qualified from NEET-UG examination.
            </p>

            <p className="font-semibold">
              The minimum eligibility for MDS is a BDS degree with a one year mandatory internship from a dental college recognized by the Dental Council of India.
            </p>

            <p className="font-semibold">
              The score in the NEET- MDS will be the basis of selection in MDS course.
            </p>

            <p className="font-bold">
              BDS ADMISSION
            </p>

            <p className="font-bold">
              PROGRAM -BDS
            </p>

            <p className="font-bold">
              ELIGIBILITY CRITERIA-50% marks taken together in 12th physics, chemistry, biology with NEET-UG qualified
            </p>

            <p className="font-bold">
              DURATION-5 years (4 years +1 year CRRI)
            </p>

            <p className="font-bold">
              SEAT METRIX-GOVERNMENT:35
            </p>

            <p className="font-bold">
              MANAGEMENT:65
            </p>

            <p className="font-bold">
              MDS ADMISSION
            </p>

            <p className="font-bold">
              PROGRAM-MDS
            </p>

            <p className="font-bold">
              ELIGIBILITY CRITERIA-BDS degree from DCI recognized dental college + NEET-PG qualified
            </p>

            <p className="font-bold">
              SPECIALIZATION AND DURATION-
            </p>

            <p className="font-bold">
              PROSTHODONTICS & ORAL IMPLANTOLOGY-3 years
            </p>

            <p className="font-bold">
              CONSERVATIVE DENTISTRY & ENDODONTICS-3 years
            </p>

            <p className="font-bold">
              ORTHODONTICS & DENTOFACIAL ORTHOPEDICS-3 years
            </p>

            <p className="font-bold">
              PERIODONTICS-3 years
            </p>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
    </>
  );
}
