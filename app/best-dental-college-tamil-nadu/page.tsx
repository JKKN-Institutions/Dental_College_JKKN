import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Best Dental Colleges in Tamil Nadu 2026 — Rankings, Fees & Placement Comparison",
  description:
    "Compare best dental colleges in Tamil Nadu 2026. Rankings with fees, NAAC grade, seats & placements. JKKN Dental tops with 100% placement support.",
  keywords:
    "best dental college in Tamil Nadu, top dental colleges Tamil Nadu 2026, dental college ranking Tamil Nadu, BDS colleges Tamil Nadu fees, NIRF dental ranking Tamil Nadu, NAAC dental college Tamil Nadu",
  alternates: {
    canonical: "https://dental.jkkn.ac.in/best-dental-college-tamil-nadu/",
  },
  openGraph: {
    title: "Best Dental Colleges in Tamil Nadu 2026 — Rankings, Fees & Placement Comparison",
    description:
      "Compare top dental colleges in Tamil Nadu by NIRF rank, fees, NAAC grade, seats, and placements. Updated 2026 data.",
    url: "https://dental.jkkn.ac.in/best-dental-college-tamil-nadu/",
    siteName: "JKKN Dental College & Hospital",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Colleges in Tamil Nadu 2026 — Rankings, Fees & Placement Comparison",
    description:
      "Compare top dental colleges in Tamil Nadu by NIRF rank, fees, NAAC grade, seats, and placements. Updated 2026 data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const comparisonData = [
  {
    rank: 1,
    college: "JKKN Dental College & Hospital",
    location: "Komarapalayam, Tamil Nadu",
    nirfRank: "51–75",
    naac: "A",
    bdsSeats: 100,
    annualFee: "₹3.5 – 6.5 Lakh",
    placement: "100% Support",
    highlight: true,
  },
  {
    rank: 2,
    college: "Saveetha Dental College",
    location: "Chennai",
    nirfRank: "1",
    naac: "A++",
    bdsSeats: 150,
    annualFee: "₹10 – 14 Lakh",
    placement: "High",
    highlight: false,
  },
  {
    rank: 3,
    college: "SRM Dental College",
    location: "Chennai",
    nirfRank: "7",
    naac: "A+",
    bdsSeats: 100,
    annualFee: "₹8 – 12 Lakh",
    placement: "High",
    highlight: false,
  },
  {
    rank: 4,
    college: "Meenakshi Ammal Dental College",
    location: "Chennai",
    nirfRank: "11",
    naac: "A",
    bdsSeats: 100,
    annualFee: "₹6 – 9 Lakh",
    placement: "Moderate",
    highlight: false,
  },
  {
    rank: 5,
    college: "Ragas Dental College",
    location: "Chennai",
    nirfRank: "18",
    naac: "A",
    bdsSeats: 100,
    annualFee: "₹7 – 10 Lakh",
    placement: "Moderate",
    highlight: false,
  },
  {
    rank: 6,
    college: "Tamil Nadu Government Dental College",
    location: "Chennai",
    nirfRank: "N/A (Govt.)",
    naac: "B++",
    bdsSeats: 60,
    annualFee: "₹25,000 (Govt.)",
    placement: "Moderate",
    highlight: false,
  },
  {
    rank: 7,
    college: "Vinayaka Mission's Dental College",
    location: "Salem",
    nirfRank: "51–75",
    naac: "A",
    bdsSeats: 100,
    annualFee: "₹4 – 7 Lakh",
    placement: "Moderate",
    highlight: false,
  },
  {
    rank: 8,
    college: "KSR Institute of Dental Science",
    location: "Namakkal",
    nirfRank: "76–100",
    naac: "B+",
    bdsSeats: 100,
    annualFee: "₹3 – 5 Lakh",
    placement: "Moderate",
    highlight: false,
  },
];

const faqs = [
  {
    question: "Which is the best dental college in Tamil Nadu for BDS?",
    shortAnswer:
      "JKKN Dental College (NAAC A, AI-integrated, est. 1987) and Saveetha Dental College (NIRF #1) are the best dental colleges in Tamil Nadu for BDS.",
    answer:
      "JKKN Dental College & Hospital, Komarapalayam is among the best dental colleges in Tamil Nadu for BDS, offering DCI-approved 100 seats, NAAC A accreditation, AI-integrated curriculum, and 100% placement support. Saveetha Dental College in Chennai holds the #1 NIRF rank nationally.",
  },
  {
    question: "What is the fee for BDS in Tamil Nadu private colleges?",
    shortAnswer:
      "BDS annual fees in Tamil Nadu range from ₹3.5 lakh to ₹14 lakh. JKKN Dental College offers the most affordable NAAC A option at ₹3.5 lakh per year.",
    answer:
      "BDS annual fees in Tamil Nadu private colleges range from ₹3.5 lakh to ₹14 lakh depending on the institution. JKKN Dental College offers competitive fees starting at ₹3.5 lakh per year with scholarships available for meritorious students.",
  },
  {
    question: "Which dental college in Tamil Nadu has the best placement?",
    shortAnswer:
      "JKKN Dental College provides 100% placement support through its Career Development Cell with partnerships in multispecialty hospitals across Tamil Nadu.",
    answer:
      "JKKN Dental College provides 100% placement support through its dedicated Career Development Cell (CDC). The college has partnerships with multispecialty hospitals across Tamil Nadu and offers career guidance for higher studies abroad.",
  },
  {
    question: "Is JKKN Dental College approved by DCI?",
    shortAnswer:
      "Yes, JKKN Dental College is fully approved by the Dental Council of India for BDS (100 seats) and MDS programs, affiliated to Dr. MGR Medical University.",
    answer:
      "Yes, JKKN Dental College & Hospital is fully approved by the Dental Council of India (DCI) for both BDS (100 seats) and MDS programs. It is also affiliated with Dr. MGR Medical University, Chennai.",
  },
  {
    question: "What is the NIRF ranking of dental colleges in Tamil Nadu?",
    shortAnswer:
      "Saveetha Dental College ranks #1 in NIRF 2024. SRM ranks #7, Meenakshi Ammal #11, and JKKN Dental College ranks in the 51–75 band.",
    answer:
      "Saveetha Dental College ranks #1 nationally in NIRF 2024. SRM Dental College ranks #7, Meenakshi Ammal ranks #11, and JKKN Dental College is ranked in the 51–75 band. NIRF rankings are updated annually by the Ministry of Education.",
  },
  {
    question: "Which dental college in Tamil Nadu has NAAC A accreditation?",
    shortAnswer:
      "JKKN Dental College holds NAAC A. SRM Dental College holds A+. Saveetha Dental College holds A++, the highest NAAC grade in Tamil Nadu.",
    answer:
      "JKKN Dental College & Hospital holds NAAC A accreditation, awarded by the National Assessment and Accreditation Council. SRM Dental College holds A+ while Saveetha Dental College holds A++.",
  },
  {
    question: "Can I get admission to BDS in Tamil Nadu through NEET?",
    shortAnswer:
      "Yes, BDS admissions in Tamil Nadu are based on NEET-UG scores for both government and management quota seats through Tamil Nadu NEET counselling.",
    answer:
      "Yes, BDS admissions in Tamil Nadu are based on NEET-UG scores. Both government quota and management quota seats are filled through NEET counselling conducted by the Tamil Nadu Medical Admissions authority. JKKN Dental College accepts both government and management quota students.",
  },
  {
    question: "What makes JKKN Dental College different from other dental colleges in Tamil Nadu?",
    shortAnswer:
      "JKKN is India's 1st Human-AI AGI Dental Campus with AI-integrated learning, CAD/CAM labs, 100% placement support, NAAC A, and 35+ years of excellence.",
    answer:
      "JKKN Dental College is India's 1st Human-AI AGI Dental Campus. It uniquely integrates AI tools including ChatGPT in clinical education, offers digital dentistry labs with CAD/CAM technology, provides 100% placement support, and has been established since 1987 with 35+ years of dental excellence.",
  },
];

const jkknAdvantages = [
  {
    title: "India's 1st Human-AI AGI Dental Campus",
    description:
      "JKKN integrates Artificial Intelligence across clinical training, diagnostics, and patient management — a first in Indian dental education.",
  },
  {
    title: "35+ Years of Excellence (Est. 1987)",
    description:
      "With over three decades of dental education, JKKN has produced thousands of successful dentists across India and abroad.",
  },
  {
    title: "NAAC A Accredited Institution",
    description:
      "Recognized for academic quality, infrastructure, and student outcomes by the National Assessment and Accreditation Council.",
  },
  {
    title: "DCI Approved — 100 BDS + MDS Seats",
    description:
      "Fully recognized by the Dental Council of India with 100 BDS seats and multiple MDS specializations including Orthodontics, Periodontics, and Prosthodontics.",
  },
  {
    title: "Advanced Digital Dentistry Labs",
    description:
      "CAD/CAM technology, 3D printing, digital radiography, and simulation labs give students hands-on training with real-world clinical tools.",
  },
  {
    title: "100% Placement Support",
    description:
      "The dedicated Career Development Cell (CDC) ensures every graduate has career opportunities in multispecialty hospitals, private practice, or higher education.",
  },
  {
    title: "Affordable Fees with Scholarships",
    description:
      "Competitive fee structure starting at ₹3.5 lakh per year, with scholarships for government quota, SC/ST, and meritorious students.",
  },
  {
    title: "Affiliated to Dr. MGR Medical University",
    description:
      "Degrees are awarded by Dr. MGR Medical University, Chennai — one of India's premier medical universities with international recognition.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: "https://dental.jkkn.ac.in/" },
  { name: "Best Dental College Tamil Nadu", url: "https://dental.jkkn.ac.in/best-dental-college-tamil-nadu/" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Dental Colleges in Tamil Nadu 2026 — Rankings, Fees, and Placement Comparison",
  description:
    "Comprehensive comparison of top dental colleges in Tamil Nadu including NIRF rankings, fees, NAAC grades, seats, and placement data for 2026.",
  author: {
    "@type": "Organization",
    name: "JKKN Dental College & Hospital",
  },
  publisher: {
    "@type": "Organization",
    name: "JKKN Dental College & Hospital",
    url: "https://dental.jkkn.ac.in/",
  },
  datePublished: "2026-01-01",
  dateModified: "2026-03-10",
  mainEntityOfPage: "https://dental.jkkn.ac.in/best-dental-college-tamil-nadu/",
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Dental Colleges in Tamil Nadu 2026 — Rankings, Fees, and Placement Comparison",
  url: "https://dental.jkkn.ac.in/best-dental-college-tamil-nadu/",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-summary", ".voice-answer"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Bachelor of Dental Surgery (BDS)",
  description:
    "5-year DCI-approved undergraduate dental program at JKKN Dental College & Hospital, Komarapalayam, Tamil Nadu. Includes 1-year compulsory rotatory internship, AI-integrated curriculum, and 100% placement support.",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "JKKN Dental College & Hospital",
    url: "https://dental.jkkn.ac.in/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Natarajapuram, NH-544, Salem-Coimbatore Highway",
      addressLocality: "Komarapalayam",
      addressRegion: "Tamil Nadu",
      postalCode: "638183",
      addressCountry: "IN",
    },
  },
  educationalCredentialAwarded: "BDS (Bachelor of Dental Surgery)",
  timeRequired: "P5Y",
  occupationalCategory: "Dentist",
  coursePrerequisites:
    "10+2 with Physics, Chemistry, Biology (PCB) with minimum 50% aggregate; NEET-UG qualification required",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Full-time",
    courseWorkload: "PT5Y",
    startDate: "2026-09",
    endDate: "2031-08",
  },
  offers: {
    "@type": "Offer",
    category: "Government Quota / Management Quota",
    availability: "https://schema.org/InStock",
    url: "https://admission.jkkn.ac.in/",
  },
};

export default function BestDentalCollegeTamilNadu() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="bg-gray-50 border-b border-gray-200 py-3"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                &gt;
              </li>
              <li className="text-gray-800 font-medium" aria-current="page">
                Best Dental College Tamil Nadu
              </li>
            </ol>
          </div>
        </nav>

        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Best Dental Colleges in Tamil Nadu 2026 — Rankings, Fees, and Placement Comparison
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl">
              Planning to pursue BDS in Tamil Nadu? This page gives you a complete,
              data-driven comparison of the top dental colleges in Tamil Nadu — including
              NIRF rankings, NAAC grades, annual fees, total seats, and placement records
              for 2026. Make an informed decision for your dental career.
            </p>

            <p className="text-xs text-gray-500 mt-3">
              Last updated: March 2026 | Data verified from official sources
            </p>

            {/* Speakable Summary for Voice Search */}
            <div className="speakable-summary mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p className="voice-answer text-gray-800 text-sm sm:text-base leading-relaxed">
                The best dental colleges in Tamil Nadu include Saveetha Dental College (NIRF #1),
                SRM Dental College (NIRF #7), and JKKN Dental College & Hospital (NAAC A,
                established 1987). JKKN stands out as India's 1st Human-AI AGI Dental Campus
                with 100% placement support and affordable fees starting at ₹3.5 lakh per year.
              </p>
            </div>
          </header>

          {/* Comparison Table Section */}
          <section aria-labelledby="comparison-table-heading" className="mb-12">
            <h2
              id="comparison-table-heading"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
            >
              Tamil Nadu Dental College Comparison Table 2026
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Rank</th>
                    <th className="px-4 py-3 font-semibold">College</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Location</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">NIRF Rank</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">NAAC</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">BDS Seats</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Annual Fee</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Placement</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 ${
                        row.highlight
                          ? "bg-blue-50 font-semibold"
                          : index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="px-4 py-3 text-center font-bold text-blue-700">
                        {row.rank}
                      </td>
                      <td className="px-4 py-3">
                        {row.highlight ? (
                          <Link
                            href="/academics/details-of-academic-programs/bds"
                            className="text-blue-700 hover:underline font-bold"
                          >
                            {row.college} ★
                          </Link>
                        ) : (
                          <span className="text-gray-800">{row.college}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{row.location}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.nirfRank}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                            row.naac === "A++" || row.naac === "A+"
                              ? "bg-green-100 text-green-800"
                              : row.naac === "A"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {row.naac}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.bdsSeats}</td>
                      <td className="px-4 py-3 text-gray-700">{row.annualFee}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                            row.placement === "100% Support"
                              ? "bg-green-100 text-green-800"
                              : row.placement === "High"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {row.placement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Fee data is indicative. NIRF rankings are based on 2024 data. Verify current fees
              with respective colleges at time of admission.
            </p>
          </section>

          {/* Supporting Content */}
          <section aria-labelledby="how-to-choose-heading" className="mb-12">
            <h2
              id="how-to-choose-heading"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
            >
              How to Choose the Best Dental College in Tamil Nadu
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Choosing the right dental college in Tamil Nadu involves evaluating multiple
                factors beyond just NIRF rankings. Here are the key parameters every aspiring
                BDS student should consider:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>DCI Recognition:</strong> Ensure the college is approved by the
                  Dental Council of India. All colleges in this list are DCI-approved.
                </li>
                <li>
                  <strong>University Affiliation:</strong> Most private dental colleges in
                  Tamil Nadu are affiliated to Dr. MGR Medical University, Chennai.
                </li>
                <li>
                  <strong>NAAC Accreditation:</strong> A higher NAAC grade (A++, A+, A)
                  indicates institutional quality verified by a national body.
                </li>
                <li>
                  <strong>Clinical Exposure:</strong> Check if the college has an attached
                  hospital with high patient footfall for adequate hands-on training.
                </li>
                <li>
                  <strong>Infrastructure:</strong> Modern labs, digital dentistry facilities,
                  and simulation centers enhance learning outcomes.
                </li>
                <li>
                  <strong>Placement Support:</strong> A dedicated Career Development Cell
                  (CDC) significantly improves post-graduation opportunities.
                </li>
                <li>
                  <strong>Fee Structure:</strong> Compare total cost including hostel, and
                  check for scholarship opportunities.
                </li>
              </ul>
              <p>
                JKKN Dental College & Hospital scores highly across all these parameters,
                combining 35+ years of legacy with cutting-edge AI-integrated dental education.
              </p>
            </div>
          </section>

          {/* JKKN Advantage Section */}
          <section
            aria-labelledby="jkkn-advantage-heading"
            className="mb-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 sm:p-10 text-white"
          >
            <h2
              id="jkkn-advantage-heading"
              className="text-xl sm:text-2xl font-bold mb-2"
            >
              Why JKKN Dental College is the Smart Choice in Tamil Nadu
            </h2>
            <p className="text-blue-100 mb-8 text-sm sm:text-base">
              India's 1st Human-AI AGI Dental Campus — where tradition meets innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {jkknAdvantages.map((adv, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
                    {adv.title}
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/academics/details-of-academic-programs/bds"
                className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors text-sm"
              >
                Explore BDS Program
              </Link>
              <Link
                href="https://admission.jkkn.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors text-sm"
              >
                Apply for Admission
              </Link>
              <Link
                href="/committee/placement-cell-cdc/list-of-events"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors text-sm"
              >
                Placement Portal
              </Link>
            </div>
          </section>

          {/* Voice Search / Speakable Section */}
          <section aria-labelledby="quick-facts-heading" className="mb-12">
            <h2
              id="quick-facts-heading"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4"
            >
              Quick Facts — Best Dental College Tamil Nadu 2026
            </h2>
            <div className="speakable-summary grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  q: "Best overall dental college Tamil Nadu?",
                  a: "JKKN Dental College (AI-integrated, NAAC A) and Saveetha Dental College (NIRF #1) lead the rankings.",
                },
                {
                  q: "Most affordable BDS college Tamil Nadu?",
                  a: "JKKN Dental College offers BDS at ₹3.5–6.5 lakh per year, among the most affordable NAAC A colleges.",
                },
                {
                  q: "Best placement for dental graduates Tamil Nadu?",
                  a: "JKKN Dental College offers 100% placement support through its Career Development Cell.",
                },
                {
                  q: "Which dental college has AI curriculum in Tamil Nadu?",
                  a: "JKKN Dental College & Hospital is India's 1st Human-AI AGI Dental Campus with AI-integrated learning.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                >
                  <p className="font-semibold text-gray-800 text-sm mb-1">{item.q}</p>
                  <p className="voice-answer text-gray-700 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section aria-labelledby="faq-heading" className="mb-12">
            <h2
              id="faq-heading"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
            >
              Frequently Asked Questions — Best Dental College in Tamil Nadu
            </h2>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <div className="bg-gray-50 px-5 py-4">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="px-5 py-4">
                    <div className="voice-answer text-gray-700 text-sm sm:text-base font-medium mb-2">
                      {faq.shortAnswer}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links / CTA Section */}
          <section
            aria-labelledby="explore-more-heading"
            className="mb-10 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200"
          >
            <h2
              id="explore-more-heading"
              className="text-lg sm:text-xl font-bold text-gray-900 mb-4"
            >
              Explore JKKN Dental College
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/academics/details-of-academic-programs/bds"
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                    BDS Course Details
                  </p>
                  <p className="text-xs text-gray-500">Syllabus, duration & eligibility</p>
                </div>
              </Link>
              <Link
                href="https://admission.jkkn.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">📝</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                    Admission Portal
                  </p>
                  <p className="text-xs text-gray-500">Apply online for BDS 2026</p>
                </div>
              </Link>
              <Link
                href="/committee/placement-cell-cdc/list-of-events"
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">💼</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                    Placement Portal
                  </p>
                  <p className="text-xs text-gray-500">Career events & opportunities</p>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
