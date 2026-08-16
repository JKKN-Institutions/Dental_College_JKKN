'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Breadcrumb from '@/components/Breadcrumb';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';
import { useState } from 'react';
import DentalEnquiryForm from "@/components/lead/DentalEnquiryForm";
import { DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/dental-programmes";

export default function BDSProgram() {
  const [activeYear, setActiveYear] = useState('first');

  // Enhanced Course Schema for BDS
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/#course",
    "name": "Bachelor of Dental Surgery (BDS)",
    "description": "JKKN Dental College & Hospital, established in 1987, offers a 5-year DCI-approved BDS program with 100 seats, 200+ dental chairs, 500+ daily patients, and 92% placement assistance. Affiliated to TN Dr. MGR Medical University, NAAC Accredited, located on NH-544, Komarapalayam, Namakkal, Tamil Nadu.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/",
      "sameAs": [
        "https://www.facebook.com/jkkndental/",
        "https://www.instagram.com/jkkndental/",
        "https://www.linkedin.com/school/jkkndental/",
        "https://maps.app.goo.gl/mXx6rFRqpS9U76BK6"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.445180",
        "longitude": "77.726549"
      }
    },
    "educationalCredentialAwarded": "BDS (Bachelor of Dental Surgery)",
    "timeRequired": "P5Y",
    "occupationalCategory": "Dentist",
    "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) with minimum 50% aggregate; NEET-UG qualification required",
    "numberOfCredits": "240",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Full-time",
      "courseWorkload": "PT5Y",
      "startDate": "2026-09",
      "endDate": "2031-08",
      "instructor": {
        "@type": "Person",
        "name": "Department of Dental Sciences Faculty"
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Government Quota / Management Quota",
      "availability": "https://schema.org/InStock",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026"
    }
  };

  // Expanded FAQ Schema — 15 Questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the BDS course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Bachelor of Dental Surgery (BDS) program at JKKN Dental College is a 5-year course. This includes 4 years of academic study covering pre-clinical, para-clinical, and clinical subjects, followed by 1 year of compulsory rotating internship where students gain hands-on clinical experience across all 9 departments."
        }
      },
      {
        "@type": "Question",
        "name": "What is the eligibility criteria for BDS admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Candidates must have completed 10+2 with Physics, Chemistry, and Biology as mandatory subjects with a minimum of 50% aggregate marks (40% for reserved categories). Additionally, candidates must qualify NEET-UG and be at least 17 years old as on 31st December of the admission year. Indian nationals and NRI/Foreign nationals are eligible as per DCI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "Is the BDS program at JKKN Dental College & Hospital DCI approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the BDS program at JKKN Dental College is fully approved by the Dental Council of India (DCI). The college is recognized by the Government of Tamil Nadu and affiliated with the Tamil Nadu Dr. M.G.R. Medical University, Chennai. JKKN is also NAAC Accredited, ensuring quality standards in dental education."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career opportunities after completing BDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BDS graduates from JKKN have diverse career paths including private dental practice, government dental hospitals, corporate dental chains like Clove Dental and Dental Planet, MDS specialization, research and academics, armed forces dental corps, dental product industry, and public health dentistry. JKKN offers 92% placement assistance with recruiters like Apollo Hospitals, Manipal Hospitals, and international placements in NHS UK, Cleveland Clinic Abu Dhabi, and Singapore."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities are available for BDS students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College offers 200+ dental chairs, 100+ hospital beds, advanced simulation laboratories with phantom head units, digital radiology with OPG and CBCT, 9 specialized departments, central library with digital resources, separate boys and girls hostels with 24/7 security and Wi-Fi, sports facilities, and a Wi-Fi enabled campus on NH-544."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pursue MDS after BDS from this college?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN Dental College offers MDS programs in 5 specializations: Periodontics (2 seats), Orthodontics (5 seats), Prosthodontics (3 seats), Conservative Dentistry & Endodontics (5 seats), and Oral Medicine & Radiology (3 seats) — totaling 18 MDS seats. After completing BDS, graduates can pursue MDS by qualifying NEET-MDS examination."
        }
      },
      {
        "@type": "Question",
        "name": "What is the BDS course fee at JKKN Dental College?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BDS fees at JKKN Dental College are regulated by the Tamil Nadu government. Government Quota and Management Quota fees are determined as per state norms. For the latest 2026-27 fee structure, contact the admissions office at +91 93458 55001 or visit www.jkkn.ai/apply/jkkn-admission-2026. Scholarships are available for meritorious and economically weaker students."
        }
      },
      {
        "@type": "Question",
        "name": "What is the NEET cutoff for BDS admission at JKKN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NEET cutoff scores for BDS admission at JKKN Dental College vary each year based on state counselling results. Cutoffs differ by category (General, OBC, SC, ST). For the latest cutoff information and admission guidance for the 2026-27 academic year, contact the admissions team at +91 93458 55001."
        }
      },
      {
        "@type": "Question",
        "name": "Is JKKN Dental College NAAC accredited?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN Dental College & Hospital is NAAC Accredited with A Grade. The institution is approved by the Dental Council of India (DCI), recognized by the Government of Tamil Nadu, and affiliated with the Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college was established in 1987 under the J.K.K. Nattraja Educational Institutions trust, which has a legacy of 74+ years since 1952."
        }
      },
      {
        "@type": "Question",
        "name": "What is the placement record of JKKN Dental College?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College maintains a 92% placement assistance rate. Top recruiters include Apollo Hospitals, Sun Pharma, Clove Dental, Dental Planet, Manipal Hospitals, and Dr. Agarwal's Healthcare. International placements are available through NHS UK, Cleveland Clinic Abu Dhabi, and dental practices in Singapore and UAE. The college has a strong alumni network of 3,000+ graduates worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "Where is JKKN Dental College located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College is located at Natarajapuram, NH-544 (Salem-Coimbatore National Highway), Komarapalayam, Namakkal District, Tamil Nadu 638183. It is well-connected: ~22 km from Erode (35 min), ~58 km from Salem (1 hr), ~15 km from Tiruchengode, ~67 km from Tiruppur (1.5 hrs), and ~105 km from Coimbatore (2 hrs)."
        }
      },
      {
        "@type": "Question",
        "name": "What hostel facilities are available for BDS students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN provides separate hostels for boys and girls within the campus premises. Hostel amenities include 24/7 security, Wi-Fi connectivity, hygienic mess facility serving vegetarian and non-vegetarian meals, laundry services, hot water supply, indoor recreation areas, and proximity to all academic buildings. The campus on NH-544 ensures safe and convenient student life."
        }
      },
      {
        "@type": "Question",
        "name": "How many dental chairs does JKKN Dental Hospital have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental Hospital has 200+ dental chairs and 100+ hospital beds, making it one of the largest dental clinical facilities in the Namakkal-Erode-Salem region. The hospital serves 500+ patients daily across 9 departments, providing extensive hands-on clinical exposure to BDS students from the very first year of the program."
        }
      },
      {
        "@type": "Question",
        "name": "Can international students apply for BDS at JKKN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, international students and NRI candidates can apply for BDS admission at JKKN Dental College as per DCI guidelines and regulations set by the Tamil Nadu Dr. M.G.R. Medical University. NRI/Foreign national seats are available. Contact the international admissions desk at +91 93458 55001 or email dental@jkkn.ac.in for specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What MDS specializations are available after BDS at JKKN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Dental College offers MDS in 5 specializations: (1) Periodontics — 2 seats, (2) Orthodontics and Dentofacial Orthopedics — 5 seats, (3) Prosthodontics Crown and Bridge — 3 seats, (4) Conservative Dentistry and Endodontics — 5 seats, and (5) Oral Medicine and Radiology — 3 seats. This provides a seamless UG to PG pathway for BDS graduates."
        }
      }
    ]
  };

  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Best BDS College in Tamil Nadu — JKKN Dental College & Hospital',
    description: 'JKKN Dental College, Namakkal offers DCI-approved BDS with 200+ dental chairs, 500+ daily patients, 92% placement assistance, NAAC Accredited. Admission 2026-27 open.',
    url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/',
    dateModified: '2026-04-08',
    speakableCssSelectors: ['h1', '.hero-description', '.answer-capsule', 'article p'],
  });

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={courseSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'JKKN Institutions', url: 'https://jkkn.ac.in/' },
        { name: 'Dental College', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
        { name: 'BDS Program', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/' },
      ]} />
      <Header />
      <Breadcrumb items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics' },
        { name: 'Academic Programs', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs' },
        { name: 'BDS', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds' },
      ]} />

      {/* ============================== */}
      {/* SECTION 1: HERO               */}
      {/* ============================== */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#002309] py-16 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              {/* Badges Row */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#7cb983] font-semibold text-sm">DCI Approved</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#7cb983] font-semibold text-sm">NAAC Accredited</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#7cb983]/20 backdrop-blur-sm border border-[#7cb983]/40 rounded-full px-4 py-2">
                  <span className="text-white font-semibold text-sm">Admission 2026-27 Open</span>
                </div>
              </div>

              {/* H1 — Gap #3 Fixed: Keyword-rich H1 */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Best BDS College in Tamil Nadu{' '}
                <span className="text-[#7cb983]">— JKKN Dental College</span>
              </h1>

              {/* Subtitle with schema keywords */}
              <p className="text-lg md:text-xl text-[#7cb983] font-semibold mb-4">
                Bachelor of Dental Surgery (BDS) Program | DCI Approved | NAAC Accredited
              </p>

              {/* Description — Gap #4, #5: Keywords + content expansion */}
              <p className="hero-description text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
                JKKN Dental College & Hospital, established in 1987, is among the <strong className="text-white">best BDS colleges in Tamil Nadu</strong> offering a comprehensive 5-year dental program with 200+ dental chairs, 500+ daily patients, and 92% placement assistance. Located on NH-544, Komarapalayam, Namakkal — well-connected to Erode, Salem, and Coimbatore.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">5</div>
                  <div className="text-[10px] sm:text-sm text-gray-200">Years Duration</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">100</div>
                  <div className="text-[10px] sm:text-sm text-gray-200">BDS Seats</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">92%</div>
                  <div className="text-[10px] sm:text-sm text-gray-200">Placement Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
                  Apply Now — Admission 2026-27
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-block"
                >
                  Explore Learning Framework
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl border-4 border-white/20 overflow-hidden aspect-video">
                {/* Gap #15: Fixed alt text */}
                <Image
                  src="/images/BDS-hero-clinical.webp"
                  alt="BDS dental education and clinical training at JKKN Dental College, best BDS college in Tamil Nadu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                />
              </div>

              {/* NAAC + Last Updated Badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-4 bg-white rounded-lg sm:rounded-xl shadow-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 scale-75 sm:scale-100 origin-bottom-right">
                <div className="bg-[#7cb983] rounded-lg p-2 sm:p-3">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-xs sm:text-base">NAAC Accredited</div>
                  <div className="text-[10px] sm:text-sm text-gray-600">Updated: April 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 2: ANSWER CAPSULE (GEO) */}
      {/* ============================== */}
      <section className="py-8 px-4 bg-[#FBFBEE] border-b border-green-100">
        <div className="max-w-4xl mx-auto">
          <div className="answer-capsule bg-white border-l-4 border-[#7cb983] rounded-r-xl p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              <strong className="text-[#006837]">JKKN Dental College & Hospital</strong>, established in 1987 under the J.K.K. Nattraja Educational Institutions (since 1952), is a DCI-approved and <a href="/accreditation/" className="text-[#7cb983] underline hover:text-[#6ba872]">NAAC Accredited</a> dental institution located on NH-544, Komarapalayam, Namakkal District, Tamil Nadu 638183. It offers <strong>100 BDS seats</strong> and <strong>18 MDS seats</strong> across 5 specializations, affiliated to the <a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#7cb983] underline hover:text-[#6ba872]">Tamil Nadu Dr. M.G.R. Medical University</a>, Chennai. With 200+ dental chairs, 100+ hospital beds, and 500+ daily patient footfall across 9 departments, JKKN is recognized as one of the best BDS colleges in Tamil Nadu for clinical exposure and <a href="/research/" className="text-[#7cb983] underline hover:text-[#6ba872]">research excellence</a> with 50+ publications and 25+ academic partnerships. The college provides 92% placement assistance including international opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 3: WHY JKKN IS THE BEST */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">TOP 10 REASONS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Why JKKN Is Among the Best BDS Colleges in Tamil Nadu
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover what makes JKKN Dental College a preferred choice for aspiring dental professionals across Tamil Nadu, from <a href="/erode/" className="text-[#7cb983] underline hover:text-[#6ba872]">Erode</a>, <a href="/salem/" className="text-[#7cb983] underline hover:text-[#6ba872]">Salem</a>, <a href="/coimbatore/" className="text-[#7cb983] underline hover:text-[#6ba872]">Coimbatore</a>, and beyond.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: 1, title: 'DCI Approved & NAAC Accredited', desc: 'Fully approved by the Dental Council of India and accredited by NAAC, ensuring nationally recognized standards of dental education and patient care.' },
              { num: 2, title: '200+ Dental Chairs — Largest in the Region', desc: 'One of the largest dental clinical facilities in the Namakkal-Erode-Salem corridor with 200+ operational dental chairs and 100+ hospital beds for comprehensive training.' },
              { num: 3, title: '500+ Daily Patients — Unmatched Clinical Exposure', desc: 'Learners receive hands-on clinical training from Year 1 with 500+ patients visiting daily across 9 specialized departments — a key advantage over many BDS colleges in Tamil Nadu.' },
              { num: 4, title: '92% Placement Assistance — Including International', desc: 'Strong placement record with recruiters like Apollo Hospitals, Clove Dental, NHS UK, and Cleveland Clinic Abu Dhabi. 3,000+ alumni network worldwide.' },
              { num: 5, title: '5 MDS Specializations — Seamless UG to PG Pathway', desc: 'Pursue MDS in Periodontics, Orthodontics, Prosthodontics, Conservative & Endodontics, or Oral Medicine & Radiology — 18 PG seats available right on campus.' },
              { num: 6, title: '74+ Years of Trust Legacy (Since 1952)', desc: 'Part of J.K.K. Nattraja Educational Institutions, one of the oldest educational trusts in Tamil Nadu with a legacy spanning 74+ years across 10 institutions.' },
              { num: 7, title: 'Strategic NH-544 Location — Well-Connected', desc: 'Located on the Salem-Coimbatore National Highway, easily accessible from Erode (~22 km), Salem (~58 km), Tiruchengode (~15 km), and Coimbatore (~105 km).' },
              { num: 8, title: 'AI-Integrated Campus — India\'s First', desc: 'India\'s first AI-integrated dental campus, blending traditional clinical excellence with cutting-edge artificial intelligence tools for diagnostics and education.' },
              { num: 9, title: '50+ Research Publications — Strong Research Culture', desc: 'Active research ecosystem with 50+ published research papers, 25+ academic partnerships, ethical committee approvals, and dedicated R&D facilities.' },
              { num: 10, title: 'Affordable Fee Structure with Scholarships', desc: 'Government-regulated fee structure with scholarship options for meritorious learners and economically weaker sections (BC/MBC/SC/ST categories).' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#006837] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#006837] text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 4: PROGRAM OVERVIEW     */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">PROGRAM OVERVIEW</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-6">
                Shape Your Future in Dental Healthcare at JKKN
              </h2>

              <article>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The Bachelor of Dental Surgery (BDS) at <a href="/about/" className="text-[#7cb983] underline hover:text-[#6ba872]">JKKN Dental College & Hospital</a> is a prestigious 5-year undergraduate program designed to produce competent dental professionals. Approved by the Dental Council of India (DCI), recognized by the Government of Tamil Nadu, and affiliated with the <strong>Tamil Nadu Dr. M.G.R. Medical University, Chennai</strong>, the program combines rigorous academic training with extensive clinical exposure at one of the best dental colleges in Tamil Nadu.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  With 200+ dental chairs and 500+ daily patients across 9 departments, JKKN provides unmatched clinical experience from the very first year. Learners benefit from an <a href="/ai-dental-campus/" className="text-[#7cb983] underline hover:text-[#6ba872]">AI-integrated campus</a>, advanced simulation learning labs, and digital radiology infrastructure. The college is established in 1987 under the J.K.K. Nattraja Educational Institutions trust (since 1952), carrying forward a legacy of 74+ years of educational excellence.
                </p>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Learners searching for the best BDS colleges near <a href="/erode/" className="text-[#7cb983] underline hover:text-[#6ba872]">Erode</a>, <a href="/salem/" className="text-[#7cb983] underline hover:text-[#6ba872]">Salem</a>, <a href="/namakkal/" className="text-[#7cb983] underline hover:text-[#6ba872]">Namakkal</a>, or <a href="/coimbatore/" className="text-[#7cb983] underline hover:text-[#6ba872]">Coimbatore</a> will find JKKN strategically located on NH-544, offering world-class dental education with 92% placement assistance and a strong <a href="/alumni/" className="text-[#7cb983] underline hover:text-[#6ba872]">alumni network</a> of 3,000+ graduates.
                </p>
              </article>

            </div>

            {/* Right Content - Image Boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative rounded-2xl h-64 overflow-hidden shadow-lg">
                {/* Gap #15: Fixed alt text */}
                <Image
                  src="/images/BDS-Modern-Dental-Lab.webp"
                  alt="Advanced dental simulation laboratory with 200+ dental chairs at JKKN Dental College, Namakkal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">Modern Dental Learning Lab</h3>
                </div>
              </div>
              <div className="relative rounded-2xl h-48 overflow-hidden shadow-lg">
                {/* Gap #15: Fixed alt text */}
                <Image
                  src="/images/BDS-Clinical-Training.webp"
                  alt="Hands-on clinical training for BDS students at JKKN Dental Hospital, Tamil Nadu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                  <h3 className="text-2xl font-bold text-white text-center">Clinical Training</h3>
                </div>
              </div>
              <div className="relative rounded-2xl h-48 overflow-hidden shadow-lg">
                {/* Gap #15: Fixed alt text */}
                <Image
                  src="/images/BDS-Campus-Life.webp"
                  alt="JKKN Dental College campus life and facilities on NH-544, Komarapalayam, Tamil Nadu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                  <h3 className="text-2xl font-bold text-white text-center">Campus Life</h3>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#006837] mb-1 text-base">DCI Approved Program</h3>
                  <p className="text-sm text-gray-600">Fully recognized by the Dental Council of India with 100 BDS seats</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#006837] mb-1 text-base">200+ Dental Chairs & 100+ Beds</h3>
                  <p className="text-sm text-gray-600">Comprehensive hospital facility for clinical training with 500+ daily patients</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#006837] mb-1 text-base">Expert Senior Learners</h3>
                  <p className="text-sm text-gray-600">Highly qualified and experienced teaching senior learners across 9 departments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#006837] mb-1 text-base">Modern DCI Learning Framework</h3>
                  <p className="text-sm text-gray-600">Updated learning pathway aligned with latest DCI guidelines and competency-based education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 5: HOSPITAL & CLINICAL  */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-[#7cb983] font-semibold text-sm">CLINICAL INFRASTRUCTURE</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Hospital & Clinical Infrastructure
          </h2>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            One of the most well-equipped dental hospitals among BDS colleges in Tamil Nadu, providing unmatched clinical exposure
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { value: '200+', label: 'Dental Chairs', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { value: '100+', label: 'Hospital Beds', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { value: '500+', label: 'Daily Patients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { value: '9', label: 'Departments', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { value: '50+', label: 'Publications', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { value: '25+', label: 'Partnerships', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#7cb983] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#7cb983] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 9 Departments List */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white text-center mb-6">9 Specialized Departments</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Periodontics',
                'Orthodontics and Dentofacial Orthopedics',
                'Prosthodontics Crown and Bridge',
                'Conservative Dentistry and Endodontics',
                'Oral Medicine and Radiology',
                'Oral and Maxillofacial Surgery',
                'Pediatric and Preventive Dentistry',
                'Oral Pathology and Microbiology',
                'Public Health Dentistry',
              ].map((dept, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-200">
                  <svg className="w-4 h-4 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{dept}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 6: QUICK FACTS          */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">QUICK FACTS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            BDS Program at a Glance — Admission 2026-27
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Essential information about the Bachelor of Dental Surgery program at JKKN Dental College
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-3">Program Duration</h3>
              <div className="text-xl font-bold text-[#7cb983] mb-2">5 Years</div>
              <p className="text-sm text-gray-600">Including 1-year Compulsory Rotatory Internship</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-3">Annual Intake</h3>
              <div className="text-xl font-bold text-[#7cb983] mb-2">100 Seats</div>
              <p className="text-sm text-gray-600">As per DCI Approval (BDS)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-3">Established</h3>
              <div className="text-xl font-bold text-[#7cb983] mb-2">1987</div>
              <p className="text-sm text-gray-600">39 Years of Dental Excellence</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-3">Accreditation</h3>
              <div className="text-xl font-bold text-[#7cb983] mb-2">DCI & NAAC</div>
              <p className="text-sm text-gray-600">Nationally Recognized Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 7: ELIGIBILITY & ADMISSION */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">ADMISSIONS 2026-27</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            BDS Eligibility & Admission Process — 2026-27
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your pathway to becoming a dental professional at one of the best BDS colleges in Tamil Nadu starts here. <a href="/admission/" className="text-[#7cb983] underline hover:text-[#6ba872]">View full admission details</a>.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-[#FBFBEE] rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7cb983] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#006837]">Eligibility Criteria</h3>
              </div>

              <div className="space-y-4">
                {[
                  'Must have completed 10+2 or equivalent examination from a recognized board',
                  'Physics, Chemistry, and Biology as mandatory subjects in Class 12',
                  'Minimum 50% aggregate marks in PCB (40% for reserved categories as per government norms)',
                  'Must have appeared and qualified in NEET-UG examination',
                  'Age limit: 17 years as on 31st December of the admission year',
                  'Indian nationals and NRI/Foreign nationals as per DCI guidelines',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-[#FBFBEE] rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7cb983] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#006837]">Admission Process 2026-27</h3>
              </div>

              <div className="space-y-6">
                {[
                  { step: 1, title: 'NEET-UG Qualification', desc: 'Appear and qualify in the National Eligibility cum Entrance Test (UG) conducted by NTA' },
                  { step: 2, title: 'State Counselling Registration', desc: 'Register for Tamil Nadu state counselling or central counselling as per your category and domicile' },
                  { step: 3, title: 'Choice Filling — Select JKKN', desc: 'Select JKKN Dental College & Hospital as your preferred institution during choice filling process' },
                  { step: 4, title: 'Seat Allotment & Reporting', desc: 'Receive seat allotment based on NEET rank and preferences. Report to college with required documents' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-[#006837]/10 rounded-lg p-4">
                <p className="text-sm text-[#006837] font-semibold">
                  For direct admission enquiries and management quota: <a href="tel:+919345855001" className="underline">+91 93458 55001</a> | <a href="mailto:dental@jkkn.ac.in" className="underline">dental@jkkn.ac.in</a> | <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="underline">www.jkkn.ai/apply/jkkn-admission-2026</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 8: NEET CUTOFF TABLE    */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">NEET CUTOFF DATA</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            NEET Cutoff for BDS at JKKN Dental College
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Historical NEET-UG cutoff marks and ranks for BDS admission at JKKN Dental College through Tamil Nadu state counselling
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="px-4 py-4 text-left text-sm font-semibold">Year</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">Opening Rank</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">Closing Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { year: '2026', category: 'OC', open: '452', close: '448' },
                  { year: '2026', category: 'BC', open: '468', close: '273' },
                  { year: '2026', category: 'BCM', open: '429', close: '299' },
                  { year: '2026', category: 'MBC', open: '474', close: '320' },
                  { year: '2026', category: 'SC', open: '385', close: '320' },
                  { year: '2026', category: 'SCA', open: '350', close: '319' },
                  { year: '2026', category: 'ST', open: '337', close: '247' },
                  { year: '2025', category: 'OC', open: '452', close: '448' },
                  { year: '2025', category: 'BC', open: '468', close: '273' },
                  { year: '2025', category: 'BCM', open: '429', close: '299' },
                  { year: '2025', category: 'MBC', open: '474', close: '320' },
                  { year: '2025', category: 'SC', open: '385', close: '320' },
                  { year: '2025', category: 'SCA', open: '350', close: '319' },
                  { year: '2025', category: 'ST', open: '337', close: '247' },
                  { year: '2024', category: 'OC', open: '543', close: '543' },
                  { year: '2024', category: 'BC', open: '517', close: '224' },
                  { year: '2024', category: 'BCM', open: '502', close: '432' },
                  { year: '2024', category: 'MBC', open: '494', close: '212' },
                  { year: '2024', category: 'SC', open: '427', close: '356' },
                  { year: '2024', category: 'SCA', open: '376', close: '312' },
                  { year: '2024', category: 'ST', open: '338', close: '330' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-green-50/50'}>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-800">{row.year}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.category}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">{row.open}</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">{row.close}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Note: Cutoff ranks are approximate and based on Tamil Nadu state counselling data. Actual cutoffs may vary each year. Contact admissions at <a href="tel:+919345855001" className="text-[#7cb983] underline">+91 93458 55001</a> for the latest information.
          </p>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 9: FEE STRUCTURE        */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M8 8a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2H8zm5 3a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">FEE STRUCTURE</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            BDS Fee Structure at JKKN Dental College — 2026-27
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Affordable dental education with government-regulated fees. <a href="/fees-structure/" className="text-[#7cb983] underline hover:text-[#6ba872]">View complete fee details</a>.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Fee Category</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Annual Fee</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">Government Quota</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-600">As Per Govt Norms</td>
                  <td className="px-6 py-4 text-sm text-gray-600">As per TN Government fixation committee norms</td>
                </tr>
                <tr className="bg-green-50/50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">Management Quota (With Hostel & Instruments)</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-600">₹5,50,000/year</td>
                  <td className="px-6 py-4 text-sm text-gray-600">As per TN Government fixation committee norms</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">Management Quota (Day Scholar with Instruments)</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-600">₹4,50,000/year</td>
                  <td className="px-6 py-4 text-sm text-gray-600">As per TN Government fixation committee norms</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#006837]/5 rounded-xl p-6">
            <h3 className="font-bold text-[#006837] mb-3">Important Fee Information:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#7cb983] mt-1">&#8226;</span>
                Fee structure is regulated by the Tamil Nadu Government Fee Fixation Committee
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7cb983] mt-1">&#8226;</span>
                Hostel fees, learning assessment fees, and other charges are additional
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7cb983] mt-1">&#8226;</span>
                <a href="/admission/" className="text-[#7cb983] underline hover:text-[#6ba872]">Scholarships available</a> for meritorious and economically weaker learners
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7cb983] mt-1">&#8226;</span>
                Contact admissions for current year fees: <a href="tel:+919345855001" className="text-[#7cb983] underline font-semibold">+91 93458 55001</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 10: CURRICULUM          */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-[#7cb983] font-semibold text-sm">ACADEMIC STRUCTURE</span>
            </div>
          </div>

          <h2 id="curriculum" className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Comprehensive BDS Learning Framework — DCI Approved Learning Pathway
          </h2>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            A well-structured 5-year program covering all aspects of dental science and clinical practice as per <a href="/academics/" className="text-[#7cb983] underline hover:text-[#6ba872]">DCI learning framework guidelines</a>
          </p>

          {/* Year Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(['first', 'second', 'third', 'final', 'internship'] as const).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeYear === year
                    ? 'bg-[#7cb983] text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {year === 'first' ? 'First Year' : year === 'second' ? 'Second Year' : year === 'third' ? 'Third Year' : year === 'final' ? 'Final Year' : 'Internship'}
              </button>
            ))}
          </div>

          {/* Gap #17: ALL years rendered in DOM with CSS show/hide instead of conditional rendering */}

          {/* First Year */}
          <div className={activeYear === 'first' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'General Human Anatomy', desc: 'Study of human body structure including gross anatomy, histology, and embryology with emphasis on head and neck.', tag: 'Pre-Clinical' },
                { title: 'General Human Physiology', desc: 'Understanding body functions, organ systems, and their coordination essential for dental practice.', tag: 'Pre-Clinical' },
                { title: 'Biochemistry', desc: 'Molecular basis of life processes, metabolism, and clinical applications in dentistry.', tag: 'Pre-Clinical' },
                { title: 'Dental Anatomy & Histology', desc: 'Detailed study of tooth morphology, dental tissues, and oral structures.', tag: 'Core Dental' },
                { title: 'Dental Materials', desc: 'Introduction to materials used in dentistry, their properties, and applications.', tag: 'Core Dental' },
                { title: 'Pre-Clinical Prosthodontics', desc: 'Foundation course for artificial teeth and prosthetic devices.', tag: 'Core Dental' },
              ].map((course, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{course.desc}</p>
                  <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">{course.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Year */}
          <div className={activeYear === 'second' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'General Pathology', desc: 'Study of disease mechanisms, cellular pathology, and systemic pathological conditions.', tag: 'Para-Clinical' },
                { title: 'General Microbiology', desc: 'Bacteria, viruses, fungi, and their role in oral and systemic diseases.', tag: 'Para-Clinical' },
                { title: 'Pharmacology', desc: 'Drug actions, therapeutic applications, and prescription writing for dental practice.', tag: 'Para-Clinical' },
                { title: 'Dental Pharmacology', desc: 'Drugs specific to dentistry including local anesthetics, analgesics, and antibiotics.', tag: 'Core Dental' },
                { title: 'Pre-Clinical Conservative', desc: 'Foundation for tooth restoration and cavity preparation techniques.', tag: 'Core Dental' },
                { title: 'Pre-Clinical Endodontics', desc: 'Basics of root canal treatment procedures and techniques.', tag: 'Core Dental' },
              ].map((course, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{course.desc}</p>
                  <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">{course.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Third Year */}
          <div className={activeYear === 'third' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Oral Pathology & Microbiology', desc: 'Diseases affecting oral cavity, diagnostic pathology, and oral microbiome.', tag: 'Clinical' },
                { title: 'Oral Medicine & Radiology', desc: 'Diagnosis of oral diseases, radiographic techniques, and interpretation.', tag: 'Clinical' },
                { title: 'General Surgery', desc: 'Surgical principles, emergency management, and minor surgical procedures.', tag: 'Allied Medical' },
                { title: 'General Medicine', desc: 'Systemic diseases and their oral manifestations, patient assessment.', tag: 'Allied Medical' },
                { title: 'Public Health Dentistry', desc: 'Community oral health, epidemiology, and preventive dentistry.', tag: 'Clinical' },
                { title: 'Periodontology', desc: 'Gum diseases, periodontal treatment, and maintenance therapy.', tag: 'Clinical' },
              ].map((course, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{course.desc}</p>
                  <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">{course.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Year */}
          <div className={activeYear === 'final' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Conservative & Endodontics', desc: 'Advanced restorative procedures, root canal therapy, and aesthetic dentistry.', tag: 'Clinical' },
                { title: 'Oral & Maxillofacial Surgery', desc: 'Extractions, minor oral surgeries, trauma management, and implantology basics.', tag: 'Clinical' },
                { title: 'Prosthodontics', desc: 'Complete dentures, removable partial dentures, fixed prosthesis.', tag: 'Clinical' },
                { title: 'Orthodontics', desc: 'Malocclusion diagnosis, treatment planning, and orthodontic appliances.', tag: 'Clinical' },
                { title: 'Pediatric Dentistry', desc: 'Child dental care, behavior management, and preventive treatments.', tag: 'Clinical' },
                { title: 'Forensic Odontology', desc: 'Dental identification, age estimation, and medico-legal aspects.', tag: 'Specialized' },
              ].map((course, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{course.desc}</p>
                  <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${course.tag === 'Specialized' ? 'bg-[#A78BFA]/20 text-[#A78BFA]' : 'bg-[#22D3EE]/20 text-[#22D3EE]'}`}>{course.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div className={activeYear === 'internship' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Comprehensive Clinical Training', desc: 'Rotational posting across all dental departments with supervised patient care.', tag: '12 Months', tagColor: 'bg-[#22D3EE]/20 text-[#22D3EE]' },
                { title: 'Community Dental Camps', desc: 'Rural and urban outreach programs for community oral health promotion.', tag: 'Outreach', tagColor: 'bg-[#22D3EE]/20 text-[#22D3EE]' },
                { title: 'Emergency Dental Care', desc: 'Training in dental emergencies, trauma management, and acute pain relief.', tag: 'Essential', tagColor: 'bg-[#22D3EE]/20 text-[#22D3EE]' },
                { title: 'Research Methodology', desc: 'Introduction to dental research, evidence-based dentistry, and scientific writing.', tag: 'Academic', tagColor: 'bg-[#FCD34D]/20 text-[#FCD34D]' },
                { title: 'Practice Management', desc: 'Clinic setup, patient management, ethics, and professional development.', tag: 'Professional', tagColor: 'bg-[#22D3EE]/20 text-[#22D3EE]' },
                { title: 'Case Documentation', desc: 'Maintaining complete case records, treatment planning, and follow-up protocols.', tag: 'Administrative', tagColor: 'bg-[#FB7185]/20 text-[#FB7185]' },
              ].map((course, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{course.desc}</p>
                  <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${course.tagColor}`}>{course.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 11: FACILITIES          */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">INFRASTRUCTURE</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            World-Class Dental Facilities for BDS Learners
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed for excellence in dental education. <a href="/facilities/" className="text-[#7cb983] underline hover:text-[#6ba872]">View all facilities</a>.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Dental Hospital', subtitle: '200+ Chairs & 100+ Beds', desc: 'Fully equipped multi-specialty dental hospital for comprehensive clinical training with 500+ daily patients', gradient: 'from-[#006837] to-[#002309]', iconBg: 'bg-[#7cb983]' },
              { title: 'Simulation Learning Lab', subtitle: 'Phantom Head Units', desc: 'Advanced simulation learning lab for pre-clinical skill development and practice before patient contact', gradient: 'from-[#7cb983] to-[#6ba872]', iconBg: 'bg-white/20' },
              { title: 'Digital Radiology', subtitle: 'OPG, CBCT & Digital X-Ray', desc: 'Latest digital radiology equipment for accurate diagnosis and treatment planning', gradient: 'from-[#7cb983] to-[#6ba872]', iconBg: 'bg-white/20' },
              { title: 'Research Center', subtitle: 'R&D Facilities', desc: 'Dedicated research infrastructure supporting 50+ publications and evidence-based dentistry', gradient: 'from-[#006837] to-[#002309]', iconBg: 'bg-[#7cb983]' },
              { title: 'Digital Learning Commons', subtitle: 'Books, Journals & E-Resources', desc: 'Central learning commons with extensive collection of dental textbooks, international journals, and online databases', gradient: 'from-[#7cb983] to-[#6ba872]', iconBg: 'bg-white/20' },
              { title: 'AI-Integrated Campus', subtitle: "India's First", desc: 'Cutting-edge AI tools integrated into dental education, diagnostics, and patient management systems', gradient: 'from-[#006837] to-[#002309]', iconBg: 'bg-[#7cb983]' },
            ].map((facility, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${facility.gradient} rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300`}>
                <h3 className="text-3xl font-bold mb-2">{facility.title}</h3>
                <h4 className="text-lg font-semibold mb-3 text-gray-100">{facility.subtitle}</h4>
                <p className={facility.gradient.includes('006837') ? 'text-gray-200' : 'text-gray-100'}>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================== */}
      {/* SECTION 13: DISTINGUISHED FACULTY */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">OUR SENIOR LEARNERS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Distinguished Senior Learners — Experts in Dental Sciences
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our experienced senior learners bring decades of clinical and academic expertise, contributing to 50+ research publications and mentoring the next generation of dental professionals
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: '[UPDATE — HOD Name]', role: 'Principal & Head of Institution', qualification: '[UPDATE — MDS, PhD]', experience: '[UPDATE] years of academic and clinical experience', department: 'Administration' },
              { name: '[UPDATE — Faculty Name]', role: 'Professor & HOD, Periodontics', qualification: '[UPDATE — MDS Periodontics]', experience: '[UPDATE] years of teaching and research experience', department: 'Periodontics' },
              { name: '[UPDATE — Faculty Name]', role: 'Professor & HOD, Orthodontics', qualification: '[UPDATE — MDS Orthodontics]', experience: '[UPDATE] years specializing in orthodontic treatment', department: 'Orthodontics' },
              { name: '[UPDATE — Faculty Name]', role: 'Professor & HOD, Prosthodontics', qualification: '[UPDATE — MDS Prosthodontics]', experience: '[UPDATE] years in prosthetic dentistry', department: 'Prosthodontics' },
              { name: '[UPDATE — Faculty Name]', role: 'Professor & HOD, Conservative & Endodontics', qualification: '[UPDATE — MDS Conservative]', experience: '[UPDATE] years in restorative dentistry', department: 'Conservative & Endodontics' },
              { name: '[UPDATE — Faculty Name]', role: 'Professor & HOD, Oral Surgery', qualification: '[UPDATE — MDS Oral Surgery]', experience: '[UPDATE] years in oral and maxillofacial surgery', department: 'Oral & Maxillofacial Surgery' },
            ].map((faculty, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#006837] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#006837] text-lg mb-1">{faculty.name}</h3>
                <p className="text-[#7cb983] font-semibold text-sm mb-2">{faculty.role}</p>
                <p className="text-gray-600 text-sm mb-1">{faculty.qualification}</p>
                <p className="text-gray-500 text-sm">{faculty.experience}</p>
                <span className="inline-block mt-3 bg-green-50 text-[#006837] px-3 py-1 rounded-full text-xs font-medium">{faculty.department}</span>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-600">
            JKKN Dental College has a team of highly qualified senior learners across all 9 departments. <a href="/academics/" className="text-[#7cb983] underline hover:text-[#6ba872]">View complete senior learners list</a>.
          </p>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 14: CAREER & PLACEMENTS */}
      {/* ============================== */}
      <section className="py-20 px-4 bg-[#FBFBEE] relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#006837] via-[#7cb983] to-[#006837]" />
        {/* Decorative background circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#006837]/5 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#7cb983]/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">PLACEMENTS & CAREERS</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Career Opportunities & Placement Assistance
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            JKKN Dental College provides 92% placement assistance with a strong network of domestic and international recruiters. Our 3,000+ <a href="/alumni/" className="text-[#7cb983] underline hover:text-[#6ba872]">alumni</a> are placed across leading healthcare institutions in India, UK, UAE, and Singapore.
          </p>

          {/* Placement Highlights — Horizontal Stats Strip */}
          <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-6 md:p-8 mb-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white text-center mb-6">Placement Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center bg-white/10 rounded-xl py-5 px-3">
                <div className="text-4xl font-bold text-[#7cb983] mb-1">92%</div>
                <div className="text-xs text-gray-200 font-semibold leading-snug">Placement Assistance Rate</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl py-5 px-3">
                <div className="text-4xl font-bold text-[#7cb983] mb-1">3,000+</div>
                <div className="text-xs text-gray-200 font-semibold leading-snug">Alumni Network</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl py-5 px-3">
                <div className="text-4xl font-bold text-[#7cb983] mb-1">40+</div>
                <div className="text-xs text-gray-200 font-semibold leading-snug">Domestic Recruiters</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl py-5 px-3">
                <div className="text-3xl font-bold text-[#7cb983] mb-1">UK, UAE, SG</div>
                <div className="text-xs text-gray-200 font-semibold leading-snug">International Placements</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left: Career Paths */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#7cb983] rounded-full flex-shrink-0" />
                <h3 className="text-lg font-bold text-[#006837]">Career Paths After BDS</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Private Dental Practice',
                  'Government Dental Hospitals',
                  'Corporate Dental Chains',
                  'MDS Specialization (5 options at JKKN)',
                  'Research & Academics',
                  'Armed Forces Dental Corps',
                  'Dental Product Industry',
                  'Public Health Dentistry',
                ].map((career, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#FBFBEE] rounded-xl px-4 py-3 hover:bg-green-50 hover:shadow-sm transition-all duration-200">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006837] text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-gray-800">{career}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Recruiters + International */}
            <div className="space-y-6">

              {/* Top Recruiters Domestic */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 bg-[#7cb983] rounded-full flex-shrink-0" />
                  <h3 className="text-lg font-bold text-[#006837]">Top Recruiters — Domestic</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Apollo Hospitals', 'Sun Pharma', 'Clove Dental', 'Dental Planet', 'Manipal Hospitals', "Dr. Agarwal's Healthcare"].map((company, idx) => (
                    <span key={idx} className="bg-[#006837]/5 border border-[#006837]/20 px-4 py-2 rounded-full text-sm font-semibold text-[#006837] hover:bg-[#006837]/10 transition-colors duration-200">
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              {/* International Placement Partners */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 bg-[#7cb983] rounded-full flex-shrink-0" />
                  <h3 className="text-lg font-bold text-[#006837]">International Placement Partners</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'NHS UK', region: 'United Kingdom', desc: 'National Health Service dental positions' },
                    { name: 'Cleveland Clinic Abu Dhabi', region: 'UAE', desc: 'Premium healthcare institution' },
                    { name: 'Dental Practices — UAE', region: 'United Arab Emirates', desc: 'Private dental clinics across Dubai, Abu Dhabi' },
                    { name: 'Singapore Dental Groups', region: 'Singapore', desc: 'Multi-specialty dental groups' },
                  ].map((partner, idx) => (
                    <div key={idx} className="bg-[#FBFBEE] rounded-xl p-4 border border-gray-100 hover:border-[#7cb983]/40 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#7cb983] flex-shrink-0" />
                        <span className="font-bold text-gray-800 text-sm">{partner.name}</span>
                      </div>
                      <span className="inline-block text-xs text-[#006837] font-semibold bg-[#006837]/10 px-2 py-0.5 rounded-full mb-2">{partner.region}</span>
                      <p className="text-xs text-gray-500">{partner.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 15: SCHOLARSHIPS        */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">SCHOLARSHIPS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Scholarships & Financial Aid for BDS Learners
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Multiple scholarship options to make quality dental education accessible. <a href="/admission/" className="text-[#7cb983] underline hover:text-[#6ba872]">Learn more about admissions and financial aid</a>.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-[#006837] text-lg mb-3">Government Scholarships</h3>
              <p className="text-gray-600 text-sm leading-relaxed">State government scholarships for BC, MBC, SC, ST category learners as per Tamil Nadu government norms. Includes fee waivers, stipends, and maintenance allowances.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#7cb983] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#006837] text-lg mb-3">Merit Scholarships</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Merit-based scholarships for learners with outstanding NEET scores and academic performance. Partial fee concessions available based on entrance rank and Class 12 marks.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#006837] text-lg mb-3">Management Scholarships</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Institution-level financial aid for deserving learners from economically weaker backgrounds. Contact the admissions office for eligibility criteria and application process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 16: HOSTEL & CAMPUS     */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">CAMPUS LIFE</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            Hostel & Campus Life for BDS Learners
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A safe, comfortable, and enriching residential experience on campus. <a href="/facilities/hostel/" className="text-[#7cb983] underline hover:text-[#6ba872]">View hostel details</a>.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FBFBEE] rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#006837] mb-6">Hostel Facilities</h3>
              <div className="space-y-4">
                {[
                  'Separate hostels for boys and girls within campus premises',
                  '24/7 security with CCTV surveillance and warden on duty',
                  'Wi-Fi connectivity throughout hostel blocks',
                  'Hygienic mess facility — vegetarian and non-vegetarian options',
                  'In-house laundry services',
                  'Hot water supply and power backup',
                  'Indoor recreation and common room facilities',
                  'Proximity to academic buildings — short walking distance',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FBFBEE] rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#006837] mb-6">Campus Amenities</h3>
              <div className="space-y-4">
                {[
                  'Sports facilities — indoor and outdoor games',
                  'Gymnasium and fitness center',
                  'Cafeteria and food court',
                  'ATM and banking facilities nearby',
                  'Medical health center on campus',
                  'Auditorium for events and seminars',
                  'Transport facility for day scholars',
                  'Located on NH-544 — easy access to Erode and Salem cities',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ============================== */}
      {/* SECTION 19: TESTIMONIALS        */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-[#7cb983] font-semibold text-sm">LEARNER VOICES</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What Our BDS Learners Say
          </h2>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            Hear from learners and alumni about their experience at JKKN Dental College
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: '[Student Name — UPDATE]',
                batch: 'BDS Batch [Year — UPDATE]',
                quote: 'The clinical exposure at JKKN is unmatched. With 500+ patients visiting daily, I got hands-on experience from my second year itself. The 200+ dental chair facility means every learner gets ample practice time, which is rare at other colleges.',
              },
              {
                name: '[Student Name — UPDATE]',
                batch: 'BDS Batch [Year — UPDATE]',
                quote: 'The senior learners at JKKN are incredibly supportive. The senior learners bring years of clinical and research experience to the learning studio. The research culture here, with 50+ publications, encouraged me to pursue evidence-based dentistry early in my career.',
              },
              {
                name: '[Student Name — UPDATE]',
                batch: 'BDS Batch [Year — UPDATE]',
                quote: 'JKKN helped me secure an international placement opportunity. The placement cell actively connects learners with recruiters from NHS UK and dental practices in UAE. The 92% placement assistance is backed by genuine support from the institution.',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <svg className="w-8 h-8 text-[#7cb983] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">{testimonial.quote}</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-[#7cb983] text-sm">{testimonial.batch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 20: FAQ (15 Questions)  */}
      {/* ============================== */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-[#006837] font-semibold text-sm">FREQUENTLY ASKED QUESTIONS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4">
            BDS Program — Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Find answers to common queries about the BDS program at JKKN Dental College
          </p>

          <div className="space-y-4">
            {[
              {
                q: 'What is the duration of the BDS course?',
                a: 'The Bachelor of Dental Surgery (BDS) program at JKKN Dental College is a 5-year course. This includes 4 years of academic study covering pre-clinical, para-clinical, and clinical subjects, followed by 1 year of compulsory rotating internship where learners gain hands-on clinical experience across all 9 departments.'
              },
              {
                q: 'What is the eligibility criteria for BDS admission?',
                a: 'Candidates must have completed 10+2 with Physics, Chemistry, and Biology as mandatory subjects with a minimum of 50% aggregate marks (40% for reserved categories). Additionally, candidates must qualify NEET-UG and be at least 17 years old as on 31st December of the admission year. Indian nationals and NRI/Foreign nationals are eligible as per DCI guidelines.'
              },
              {
                q: 'Is the BDS program at JKKN Dental College & Hospital DCI approved?',
                a: 'Yes, the BDS program at JKKN Dental College is fully approved by the Dental Council of India (DCI). The college is recognized by the Government of Tamil Nadu and affiliated with the Tamil Nadu Dr. M.G.R. Medical University, Chennai. JKKN is also NAAC Accredited, ensuring quality standards in dental education.'
              },
              {
                q: 'What are the career opportunities after completing BDS?',
                a: 'BDS graduates from JKKN have diverse career paths including private dental practice, government dental hospitals, corporate dental chains like Clove Dental and Dental Planet, MDS specialization (5 options available at JKKN), research and academics, armed forces dental corps, dental product industry, and public health dentistry. JKKN offers 92% placement assistance with domestic and international opportunities.'
              },
              {
                q: 'What facilities are available for BDS learners?',
                a: 'JKKN offers 200+ dental chairs, 100+ hospital beds, advanced simulation learning labs, digital radiology (OPG, CBCT), 9 specialized departments, central learning commons with digital resources, separate hostels, sports facilities, and a Wi-Fi enabled AI-integrated campus on NH-544.'
              },
              {
                q: 'Can I pursue MDS after BDS from this college?',
                a: 'Yes, JKKN offers MDS in 5 specializations: Periodontics (2 seats), Orthodontics (5 seats), Prosthodontics (3 seats), Conservative Dentistry & Endodontics (5 seats), and Oral Medicine & Radiology (3 seats) — totaling 18 MDS seats. After completing BDS, graduates can pursue MDS by qualifying NEET-MDS.'
              },
              {
                q: 'What is the BDS course fee at JKKN Dental College?',
                a: 'BDS fees at JKKN are regulated by the Tamil Nadu Government Fee Fixation Committee. Both Government Quota and Management Quota fees are determined as per state norms. For the latest 2026-27 fee structure, contact the admissions office at +91 93458 55001 or visit www.jkkn.ai/apply/jkkn-admission-2026. Scholarships are available for meritorious and economically weaker learners.'
              },
              {
                q: 'What is the NEET cutoff for BDS admission at JKKN?',
                a: 'NEET cutoff scores for BDS admission vary each year based on Tamil Nadu state counselling results and differ by category (General, OBC, SC, ST). Contact the admissions team at +91 93458 55001 for the latest cutoff information and admission guidance for the 2026-27 academic year.'
              },
              {
                q: 'Is JKKN Dental College NAAC accredited?',
                a: 'Yes, JKKN Dental College & Hospital is NAAC Accredited with A Grade. The institution is DCI approved, Government of Tamil Nadu recognized, and affiliated with TN Dr. MGR Medical University. Established in 1987 under J.K.K. Nattraja Educational Institutions (since 1952), it carries a legacy of 74+ years.'
              },
              {
                q: 'What is the placement record of JKKN Dental College?',
                a: 'JKKN maintains a 92% placement assistance rate. Top domestic recruiters include Apollo Hospitals, Sun Pharma, Clove Dental, Dental Planet, Manipal Hospitals, and Dr. Agarwal\'s Healthcare. International placements are available through NHS UK, Cleveland Clinic Abu Dhabi, and dental practices in Singapore and UAE. The alumni network spans 3,000+ graduates worldwide.'
              },
              {
                q: 'Where is JKKN Dental College located?',
                a: 'JKKN Dental College is at Natarajapuram, NH-544, Komarapalayam, Namakkal District, Tamil Nadu 638183. Distances: Tiruchengode (~15 km), Erode (~22 km, 35 min), Salem (~58 km, 1 hr), Namakkal town (~66 km), Tiruppur (~67 km), Coimbatore (~105 km, 2 hrs). It is the best BDS college on the Salem-Coimbatore NH-544 corridor.'
              },
              {
                q: 'What hostel facilities are available for BDS learners?',
                a: 'JKKN provides separate boys and girls hostels with 24/7 security, Wi-Fi, hygienic mess (veg and non-veg), laundry services, hot water, indoor recreation, and proximity to academic buildings. The campus location on NH-544 ensures convenient access to Erode and Salem.'
              },
              {
                q: 'How many dental chairs does JKKN Dental Hospital have?',
                a: 'JKKN Dental Hospital has 200+ dental chairs and 100+ hospital beds, making it one of the largest dental facilities in the Namakkal-Erode-Salem region. The hospital serves 500+ patients daily across 9 departments, providing extensive clinical exposure to BDS learners from Year 1.'
              },
              {
                q: 'Can international learners apply for BDS at JKKN?',
                a: 'Yes, international learners and NRI candidates can apply as per DCI guidelines and TN Dr. MGR Medical University regulations. NRI/Foreign national seats are available. Contact the international admissions desk at +91 93458 55001 or email dental@jkkn.ac.in for requirements.'
              },
              {
                q: 'What MDS specializations are available after BDS at JKKN?',
                a: 'JKKN offers MDS in 5 specializations: (1) Periodontics — 2 seats, (2) Orthodontics and Dentofacial Orthopedics — 5 seats, (3) Prosthodontics Crown and Bridge — 3 seats, (4) Conservative Dentistry and Endodontics — 5 seats, and (5) Oral Medicine and Radiology — 3 seats. This provides a seamless UG to PG pathway for BDS graduates.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-green-50 transition-colors duration-300">
                  {faq.q}
                  <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="faq-answer px-6 pb-6 text-gray-600 leading-relaxed border-t-2 border-green-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 21: CTA                 */}
      {/* ============================== */}
      <section className="bg-gradient-to-br from-[#006837] to-[#002309] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#7cb983]/20 backdrop-blur-sm border border-[#7cb983]/40 rounded-full px-4 py-2 mb-6">
            <span className="text-white font-semibold text-sm">BDS Admission 2026-27 Now Open</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Journey at One of the Best BDS Colleges in Tamil Nadu
          </h2>
          <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            Join JKKN Dental College & Hospital — DCI Approved, NAAC Accredited, 200+ dental chairs, 500+ daily patients, 92% placement assistance, and a 74+ year trust legacy. Your career in dentistry starts here.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              Apply for BDS Admission 2026-27
            </a>
            <a href="tel:+919345855001" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 inline-block">
              Call: +91 93458 55001
            </a>
          </div>

          <p className="text-sm text-gray-300 mt-8">
            <a href="/admission-process/" className="underline hover:text-white">Admission Process</a> &nbsp;|&nbsp;
            <a href="/fees-structure/" className="underline hover:text-white">Fee Structure</a> &nbsp;|&nbsp;
            <a href="/facilities/hostel/" className="underline hover:text-white">Hostel Facilities</a> &nbsp;|&nbsp;
            <a href="/best-dental-college-tamil-nadu/" className="underline hover:text-white">Why JKKN</a> &nbsp;|&nbsp;
            <a href="/blog/" className="underline hover:text-white">Blog</a> &nbsp;|&nbsp;
            <a href="/information-center/careers/" className="underline hover:text-white">Careers</a>
          </p>
        </div>
      </section>

      {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser cannot POST there */}
      {/* directly - the endpoint sends no Access-Control-Allow-Origin header. */}
      <section className="bg-gradient-to-br from-[#006837] to-[#0b8f52] py-16">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">Get a Call Back</h2>
              <p className="text-white/80 text-center text-sm mb-8">Leave your details and our admission team will contact you within 24 hours.</p>
              <DentalEnquiryForm sourcePage="bds" defaultProgrammeId={DEFAULT_PROGRAMME_BY_PAGE["bds"]} />
          </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
