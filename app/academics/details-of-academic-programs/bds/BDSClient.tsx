'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';

export default function BDSClient() {
  const [activeYear, setActiveYear] = useState('first');

  // Course Schema for BDS
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bachelor of Dental Surgery (BDS)",
    "description": "5-year undergraduate dental program including 1-year compulsory rotatory internship at JKKN Dental College & Hospital, approved by DCI with hands-on clinical training and world-class infrastructure.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": "JKKN Dental College & Hospital",
      "url": "https://dental.jkkn.ac.in/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
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
      "url": "https://admission.jkkn.ac.in/"
    }
  };

  // FAQ Schema for BDS
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of the BDS course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Bachelor of Dental Surgery (BDS) program is a 5-year course. This includes 4 years of academic study covering pre-clinical, para-clinical, and clinical subjects, followed by 1 year of compulsory rotating internship where Learners gain hands-on experience in various departments."
        }
      },
      {
        "@type": "Question",
        "name": "What is the eligibility criteria for BDS admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Candidates must have completed 10+2 with Physics, Chemistry, and Biology as mandatory subjects with a minimum of 50% aggregate marks (40% for reserved categories). Additionally, candidates must qualify NEET-UG and be at least 17 years old as on 31st December of the admission year."
        }
      },
      {
        "@type": "Question",
        "name": "Is the BDS program at JKKN Dental College & Hospital DCI approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our BDS program is fully approved by the Dental Council of India (DCI). The college is also recognized by the Government of Tamil Nadu and is affiliated with the Tamil Nadu Dr. M.G.R. Medical University. Our institution maintains all standards required by regulatory bodies."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career opportunities after completing BDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BDS graduates have numerous career options including private practice, government dental hospitals, corporate dental chains, research institutions, and academic positions. Graduates can also pursue MDS for specialization in Orthodontics, Oral Surgery, Prosthodontics, Periodontics, and more."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities are available for BDS Learners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our campus offers comprehensive facilities including a 100+ bedded attached dental hospital, advanced simulation laboratories, digital radiology department with OPG and CBCT, well-equipped Learning Studios, central library with digital resources, separate hostel accommodation, sports facilities, and Wi-Fi enabled campus."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pursue MDS after BDS from this college?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, after completing BDS, graduates can pursue MDS by qualifying NEET-MDS examination. JKKN Dental College & Hospital also offers MDS programs in various specializations. Our BDS curriculum is designed to provide a strong foundation for postgraduate studies."
        }
      }
    ]
  };

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={courseSchema} />
      <StructuredData data={faqSchema} />
      <BreadcrumbSchema items={[
        { name: 'JKKN Institutions', url: 'https://jkkn.ac.in/' },
        { name: 'Dental College', url: 'https://dental.jkkn.ac.in/' },
        { name: 'BDS Program', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/' },
      ]} />
      <Header />
      <Breadcrumb items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in' },
        { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics' },
        { name: 'Academic Programs', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs' },
        { name: 'BDS', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds' },
      ]} />

      {/* Hero Section */}
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
              {/* DCI Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#7cb983] font-semibold text-sm">DCI Approved Program</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Bachelor of Dental Surgery <span className="text-[#7cb983]">(BDS)</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Embark on a transformative journey in dental education at JKKN Dental College. Our comprehensive 5-year program prepares Learners for successful careers in dentistry through hands-on clinical training and world-class infrastructure.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">5</div>
                  <div className="text-[10px] sm:text-sm text-gray-200">Years Duration</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">100</div>
                  <div className="text-[10px] sm:text-sm text-gray-200">Seats Available</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">92%</div>
                  <div className="text-[10px] sm:text-sm text-gray-200">Placement Rate</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
                  Apply Now
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-block"
                >
                  Explore Curriculum
                </button>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div className="relative">
              <div className="relative rounded-2xl border-4 border-white/20 overflow-hidden aspect-video">
                <Image
                  src="/images/BDS-hero-image.webp"
                  alt="BDS students receiving dental education at JKKN Dental College, Komarapalayam"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                />
              </div>

              {/* NAAC Badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-4 bg-white rounded-lg sm:rounded-xl shadow-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 scale-75 sm:scale-100 origin-bottom-right">
                <div className="bg-[#7cb983] rounded-lg p-2 sm:p-3">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-xs sm:text-base">NAAC Accredited</div>
                  <div className="text-[10px] sm:text-sm text-gray-600">Excellence in Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
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
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-6">
                Shape Your Future in Dental Healthcare
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                The Bachelor of Dental Surgery (BDS) at JKKN Dental College is a prestigious undergraduate program designed to produce competent dental professionals. Approved by the Dental Council of India (DCI) and recognized by the Government of Tamil Nadu, the program combines rigorous academic training with extensive clinical exposure.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                JKKN Dental College learners receive comprehensive training in all aspects of dentistry, from basic oral sciences to advanced clinical procedures. With a focus on progressive education and holistic development, the institution prepares future dental practitioners who are skilled, ethical, and committed to community health.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#006837] mb-1 text-base">DCI Approved</h3>
                    <p className="text-sm text-gray-600">Fully recognized by the Dental Council of India</p>
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
                    <h3 className="font-bold text-[#006837] mb-1 text-base">200+ Dental Chairs & 100+ Hospital Beds</h3>
                    <p className="text-sm text-gray-600">Comprehensive hospital facility for clinical training</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#006837] mb-1 text-base">Expert Learning Facilitators</h3>
                    <p className="text-sm text-gray-600">Highly qualified and experienced faculty</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#006837] mb-1 text-base">Modern Curriculum</h3>
                    <p className="text-sm text-gray-600">Updated syllabus aligned with DCI guidelines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative rounded-2xl h-64 overflow-hidden shadow-lg">
                <Image
                  src="/images/BDS-Modern-Dental-Lab.webp"
                  alt="Modern dental laboratory with advanced equipment at JKKN Dental College"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">Modern Dental Lab</h3>
                </div>
              </div>
              <div className="relative rounded-2xl h-48 overflow-hidden shadow-lg">
                <Image
                  src="/images/BDS-Clinical-Training.webp"
                  alt="BDS students undergoing clinical training at JKKN Dental Hospital, Komarapalayam"
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
                <Image
                  src="/images/BDS-Campus-Life.webp"
                  alt="BDS students enjoying campus life at JKKN Dental College, Tamil Nadu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                  <h3 className="text-2xl font-bold text-white text-center">Campus Life</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="text-cyan-900 font-semibold text-sm">QUICK FACTS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] text-center mb-4">
            BDS Program at a Glance
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Essential information about the Bachelor of Dental Surgery program
          </p>

          {/* Facts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Program Duration */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Program Duration</h3>
              <div className="text-3xl font-bold text-[#7cb983] mb-2">5 Years</div>
              <p className="text-sm text-gray-600">Including 1-year Internship</p>
            </div>

            {/* Annual Intake */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Annual Intake</h3>
              <div className="text-3xl font-bold text-[#7cb983] mb-2">100 Seats</div>
              <p className="text-sm text-gray-600">As per DCI Norms</p>
            </div>

            {/* Fee Structure */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Fee Structure</h3>
              <div className="text-3xl font-bold text-[#7cb983] mb-2">Affordable</div>
              <p className="text-sm text-gray-600">Contact Admissions</p>
            </div>

            {/* Accreditation */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#006837] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Accreditation</h3>
              <div className="text-3xl font-bold text-[#7cb983] mb-2">DCI & NAAC</div>
              <p className="text-sm text-gray-600">Nationally Recognized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-cyan-900 font-semibold text-sm">ADMISSIONS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] text-center mb-4">
            Eligibility & Admission Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your pathway to becoming a dental professional starts here
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Must have completed 10+2 or equivalent examination from a recognized board</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Physics, Chemistry, and Biology as mandatory subjects in Class 12</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Minimum 50% aggregate marks in PCB (40% for reserved categories)</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Must have appeared and qualified in NEET-UG examination</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Age limit: 17 years as on 31st December of the admission year</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Indian nationals and NRI/Foreign nationals as per DCI guidelines</p>
                </div>
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7cb983] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#006837]">Admission Process</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">NEET-UG Qualification</h4>
                    <p className="text-gray-600">Appear and qualify in the National Eligibility cum Entrance Test (UG)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Counselling Registration</h4>
                    <p className="text-gray-600">Register for state/central counselling as per your category</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Choice Filling</h4>
                    <p className="text-gray-600">Select JKKN Dental College as your preferred institution</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#7cb983] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Seat Allotment</h4>
                    <p className="text-gray-600">Receive seat allotment based on NEET rank and preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Curriculum */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-[#7cb983] font-semibold text-sm">ACADEMIC STRUCTURE</span>
            </div>
          </div>

          <h2 id='curriculum' className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Comprehensive BDS Curriculum
          </h2>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            A well-structured program covering all aspects of dental science and clinical practice
          </p>

          {/* Year Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveYear('first')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeYear === 'first'
                  ? 'bg-[#7cb983] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              First Year
            </button>
            <button
              onClick={() => setActiveYear('second')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeYear === 'second'
                  ? 'bg-[#7cb983] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              Second Year
            </button>
            <button
              onClick={() => setActiveYear('third')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeYear === 'third'
                  ? 'bg-[#7cb983] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              Third Year
            </button>
            <button
              onClick={() => setActiveYear('final')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeYear === 'final'
                  ? 'bg-[#7cb983] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              Final Year
            </button>
            <button
              onClick={() => setActiveYear('internship')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeYear === 'internship'
                  ? 'bg-[#7cb983] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              Internship
            </button>
          </div>

          {/* Course Cards - First Year */}
          {activeYear === 'first' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">General Human Anatomy</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Study of human body structure including gross anatomy, histology, and embryology with emphasis on head and neck.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Pre-Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">General Human Physiology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Understanding body functions, organ systems, and their coordination essential for dental practice.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Pre-Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Biochemistry</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Molecular basis of life processes, metabolism, and clinical applications in dentistry.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Pre-Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Dental Anatomy & Histology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Detailed study of tooth morphology, dental tissues, and oral structures.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Core Dental
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Dental Materials</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Introduction to materials used in dentistry, their properties, and applications.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Core Dental
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Pre-Clinical Prosthodontics</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Foundation course for artificial teeth and prosthetic devices.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Core Dental
                </span>
              </div>
            </div>
          )}

          {/* Course Cards - Second Year */}
          {activeYear === 'second' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">General Pathology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Study of disease mechanisms, cellular pathology, and systemic pathological conditions.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Para-Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">General Microbiology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Bacteria, viruses, fungi, and their role in oral and systemic diseases.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Para-Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Pharmacology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Drug actions, therapeutic applications, and prescription writing for dental practice.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Para-Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Dental Pharmacology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Drugs specific to dentistry including local anesthetics, analgesics, and antibiotics.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Core Dental
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Pre-Clinical Conservative</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Foundation for tooth restoration and cavity preparation techniques.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Core Dental
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Pre-Clinical Endodontics</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Basics of root canal treatment procedures and techniques.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Core Dental
                </span>
              </div>
            </div>
          )}

          {/* Course Cards - Third Year */}
          {activeYear === 'third' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Oral Pathology & Microbiology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Diseases affecting oral cavity, diagnostic pathology, and oral microbiome.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Oral Medicine & Radiology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Diagnosis of oral diseases, radiographic techniques, and interpretation.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">General Surgery</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Surgical principles, emergency management, and minor surgical procedures.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Allied Medical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">General Medicine</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Systemic diseases and their oral manifestations, patient assessment.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Allied Medical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Public Health Dentistry</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Community oral health, epidemiology, and preventive dentistry.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Periodontology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Gum diseases, periodontal treatment, and maintenance therapy.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>
            </div>
          )}

          {/* Course Cards - Final Year */}
          {activeYear === 'final' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Conservative & Endodontics</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Advanced restorative procedures, root canal therapy, and aesthetic dentistry.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Oral & Maxillofacial Surgery</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Extractions, minor oral surgeries, trauma management, and implantology basics.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Prosthodontics</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Complete dentures, removable partial dentures, fixed prosthesis.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Orthodontics</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Malocclusion diagnosis, treatment planning, and orthodontic appliances.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Pediatric Dentistry</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Child dental care, behavior management, and preventive treatments.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Clinical
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Forensic Odontology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Dental identification, age estimation, and medico-legal aspects.
                </p>
                <span className="inline-block bg-[#A78BFA]/20 text-[#A78BFA] px-3 py-1 rounded-md text-sm font-medium">
                  Specialized
                </span>
              </div>
            </div>
          )}

          {/* Course Cards - Internship */}
          {activeYear === 'internship' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Comprehensive Clinical Training</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Rotational posting across all dental departments with supervised patient care.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  12 Months
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Community Dental Camps</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Rural and urban outreach programs for community oral health promotion.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Outreach
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Emergency Dental Care</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Training in dental emergencies, trauma management, and acute pain relief.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Essential
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Research Methodology</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Introduction to dental research, evidence-based dentistry, and scientific writing.
                </p>
                <span className="inline-block bg-[#FCD34D]/20 text-[#FCD34D] px-3 py-1 rounded-md text-sm font-medium">
                  Academic
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Practice Management</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Clinic setup, patient management, ethics, and professional development.
                </p>
                <span className="inline-block bg-[#22D3EE]/20 text-[#22D3EE] px-3 py-1 rounded-md text-sm font-medium">
                  Professional
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#7cb983] rounded-full mt-2"></div>
                  <h3 className="text-xl font-bold text-white">Case Documentation</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Maintaining complete case records, treatment planning, and follow-up protocols.
                </p>
                <span className="inline-block bg-[#FB7185]/20 text-[#FB7185] px-3 py-1 rounded-md text-sm font-medium">
                  Administrative
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* World-Class Facilities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-cyan-900 font-semibold text-sm">INFRASTRUCTURE</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] text-center mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed for excellence in dental education
          </p>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dental Hospital */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-[#7cb983] p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Dental Hospital</h3>
              <h4 className="text-xl font-semibold mb-3">100+ Bedded Dental Hospital</h4>
              <p className="text-gray-200">Fully equipped hospital for comprehensive clinical training</p>
            </div>

            {/* Simulation Lab */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Simulation Lab</h3>
              <h4 className="text-xl font-semibold mb-3">Simulation Laboratory</h4>
              <p className="text-gray-100">Phantom head units for pre-clinical skill development</p>
            </div>

            {/* Digital Radiology */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Digital Radiology</h3>
              <h4 className="text-xl font-semibold mb-3">Digital Radiology</h4>
              <p className="text-gray-100">OPG, CBCT, and digital X-ray for accurate diagnosis</p>
            </div>

            {/* Research Center */}
            <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-[#7cb983] p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Research Center</h3>
              <h4 className="text-xl font-semibold mb-3">Research Center</h4>
              <p className="text-gray-200">Advanced research facilities for academic excellence</p>
            </div>

            {/* Digital Library */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Digital Library</h3>
              <h4 className="text-xl font-semibold mb-3">Digital Library</h4>
              <p className="text-gray-100">Extensive collection of books, journals, and e-resources</p>
            </div>

            {/* Hostel Facilities */}
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Hostel Facilities</h3>
              <h4 className="text-xl font-semibold mb-3">Hostel Accommodation</h4>
              <p className="text-gray-100">Separate hostels for boys and girls with modern amenities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 px-4 bg-[#FBFBEE]">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-cyan-900 font-semibold text-sm">CAREER PROSPECTS</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] text-center mb-4">
            Bright Career Opportunities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            A BDS degree opens doors to diverse career paths in the healthcare sector. Our graduates are well-prepared for both clinical practice and academic pursuits, with strong placement records in leading dental institutions and hospitals across India and abroad.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Card - Dental Career Stats */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-12 text-center relative overflow-hidden shadow-2xl">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Dental Career</h3>

                <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6 scale-75 sm:scale-100 origin-bottom-right">
                  <div className="text-3xl sm:text-5xl font-bold text-[#7cb983] mb-1 sm:mb-2">95%</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold">Placement Rate</div>
                </div>
              </div>
            </div>

            {/* Right Grid - Career Options */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {/* Private Practice */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Private Practice</h3>
                  </div>
                </div>
              </div>

              {/* Government Hospitals */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Government Hospitals</h3>
                  </div>
                </div>
              </div>

              {/* Corporate Dental Chains */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Corporate Dental Chains</h3>
                  </div>
                </div>
              </div>

              {/* MDS Specialization */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">MDS Specialization</h3>
                  </div>
                </div>
              </div>

              {/* Research & Academics */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Research & Academics</h3>
                  </div>
                </div>
              </div>

              {/* Armed Forces Dental Corps */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Armed Forces Dental Corps</h3>
                  </div>
                </div>
              </div>

              {/* Dental Product Industry */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Dental Product Industry</h3>
                  </div>
                </div>
              </div>

              {/* Public Health Dentistry */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Public Health Dentistry</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-cyan-900 font-semibold text-sm">HAVE QUESTIONS?</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Find answers to common queries about our BDS program
          </p>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-green-50 transition-colors duration-300">
                What is the duration of the BDS course?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-2 border-green-200 pt-4">
                The Bachelor of Dental Surgery (BDS) program is a 5-year course. This includes 4 years of academic study covering pre-clinical, para-clinical, and clinical subjects, followed by 1 year of compulsory rotating internship where Learners gain hands-on experience in various departments.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-green-50 transition-colors duration-300">
                What is the eligibility criteria for BDS admission?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-2 border-green-200 pt-4">
                Candidates must have completed 10+2 with Physics, Chemistry, and Biology as mandatory subjects with a minimum of 50% aggregate marks (40% for reserved categories). Additionally, candidates must qualify NEET-UG and be at least 17 years old as on 31st December of the admission year.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-green-50 transition-colors duration-300">
                Is the BDS program at JKKN Dental College & Hospital DCI approved?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-2 border-green-200 pt-4">
                Yes, our BDS program is fully approved by the Dental Council of India (DCI). The college is also recognized by the Government of Tamil Nadu and is affiliated with the Tamil Nadu Dr. M.G.R. Medical University. Our institution maintains all standards required by regulatory bodies.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-green-50 transition-colors duration-300">
                What are the career opportunities after completing BDS?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-2 border-green-200 pt-4">
                BDS graduates have numerous career options including private practice, government dental hospitals, corporate dental chains, research institutions, and academic positions. Graduates can also pursue MDS for specialization in Orthodontics, Oral Surgery, Prosthodontics, Periodontics, and more.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-green-50 transition-colors duration-300">
                What facilities are available for BDS Learners?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-2 border-green-200 pt-4">
                Our campus offers comprehensive facilities including a 100+ bedded attached dental hospital, advanced simulation laboratories, digital radiology department with OPG and CBCT, well-equipped Learning Studios, central library with digital resources, separate hostel accommodation, sports facilities, and Wi-Fi enabled campus.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group border-2 border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#006837] text-lg hover:bg-green-50 transition-colors duration-300">
                Can I pursue MDS after BDS from this college?
                <svg className="w-5 h-5 text-[#7cb983] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-2 border-green-200 pt-4">
                Yes, after completing BDS, graduates can pursue MDS by qualifying NEET-MDS examination. JKKN Dental College & Hospital also offers MDS programs in various specializations. Our BDS curriculum is designed to provide a strong foundation for postgraduate studies.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#006837] to-[#002309] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Journey in Dental Excellence
          </h2>
          <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            Join JKKN Dental College & Hospital and transform your passion for dentistry into a fulfilling career. Our comprehensive BDS program prepares you for success in the healthcare industry.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              Apply for Admission
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
