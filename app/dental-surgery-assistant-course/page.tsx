import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FloatingWhatsAppClient from "@/components/FloatingWhatsAppClient";
import {
  DSAStyles,
  ScrollProgress,
  RevealOnScroll,
  ScaleOnScroll,
  MarqueeTrustBar,
  AnimatedCounter,
  FAQAccordion,
  MobileStickyBarCTA,
  WhatsAppFloat,
} from "@/components/DSACourse/DSAClientSections";

// ===== SEO METADATA =====
export const metadata: Metadata = {
  title:
    "Dental Surgery Assistant Course | 6-Month Certificate | JKKN Dental College",
  description:
    "Become a Certified Dental Surgery Assistant in 6 months at JKKN Dental College, Namakkal. Hands-on training in 250+ chair hospital. \u20B925,000 fee. Apply before April 28, 2026.",
  keywords:
    "dental surgery assistant course, dental assistant certificate, DSA course Tamil Nadu, dental assistant training Namakkal, JKKN dental college courses, 6 month dental course",
  alternates: {
    canonical: "https://dental.jkkn.ac.in/dental-surgery-assistant-course/",
  },
  openGraph: {
    title: "6-Month Dental Surgery Assistant Course | JKKN Dental College",
    description:
      "Hands-on training in 250+ chair hospital. Start earning \u20B98,000\u201312,000/month. Limited seats. Apply now!",
    url: "https://dental.jkkn.ac.in/dental-surgery-assistant-course/",
    siteName: "JKKN Dental College & Hospital",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "6-Month Dental Surgery Assistant Course | JKKN Dental College",
    description:
      "Hands-on training in 250+ chair hospital. Start earning \u20B98,000\u201312,000/month. Limited seats. Apply now!",
  },
  robots: { index: true, follow: true },
};

// ===== CONSTANTS =====
const PHONE = "6381111621";
const WHATSAPP_URL =
  "https://wa.me/916381111621?text=Hi%2C%20I%20am%20interested%20in%20the%20Dental%20Surgery%20Assistant%20course.%20Please%20share%20details.";

// ===== INLINE DATA =====
const heroStats = [
  { value: "6 Months", label: "Full-Time Program" },
  { value: "\u20B925,000", label: "Total Course Fee" },
  { value: "\u20B98K\u201312K", label: "Starting Salary / Month" },
  { value: "250+", label: "Dental Chairs" },
];

const trustItems = [
  { emoji: "\uD83C\uDF93", text: "NAAC 'A' Accredited" },
  { emoji: "\u23F1\uFE0F", text: "74+ Years Legacy" },
  { emoji: "\uD83E\uDDB7", text: "250+ Dental Chairs" },
  { emoji: "\uD83D\uDC65", text: "500+ Daily Patients" },
  { emoji: "\uD83D\uDCBC", text: "Placement Support" },
  { emoji: "\uD83C\uDFE5", text: "100+ Hospital Beds" },
  { emoji: "\uD83D\uDCDA", text: "50+ Publications" },
];

const bentoCards = [
  {
    emoji: "\uD83C\uDFE5",
    bigNum: "250+",
    title: "Chair Multi-Specialty Dental Hospital",
    desc: "Train in one of Tamil Nadu\u2019s largest dental facilities with 500+ daily patients and hands-on experience across all major specialties.",
    variant: "featured" as const,
  },
  {
    emoji: "\uD83D\uDCB0",
    bigNum: "\u20B925K",
    title: "Total Course Fee",
    desc: "The most affordable dental career program \u2014 no hidden charges, everything included.",
    variant: "gold" as const,
  },
  {
    emoji: "\uD83D\uDCC5",
    bigNum: "",
    title: "6 Months Full-Time",
    desc: "Monday\u2013Saturday, 9 AM\u20134 PM. Structured curriculum combining theory and hands-on practice.",
    variant: "normal" as const,
  },
  {
    emoji: "\uD83D\uDCB5",
    bigNum: "",
    title: "\u20B98K\u201312K Starting Salary",
    desc: "Start earning immediately after completion. Salary grows with experience and performance.",
    variant: "normal" as const,
  },
  {
    emoji: "\uD83D\uDCBC",
    bigNum: "",
    title: "Placement Guidance",
    desc: "Dedicated placement support connecting you to dental clinics, hospitals, and corporate chains.",
    variant: "normal" as const,
  },
];

const timelineMonths = [
  {
    month: "M1",
    label: "Month 1",
    title: "Foundation & Orientation",
    desc: "Introduction to dental science, anatomy of teeth, infection control basics, dental terminology, and hospital orientation.",
  },
  {
    month: "M2",
    label: "Month 2",
    title: "Sterilization & Instrument Handling",
    desc: "Sterilization protocols, dental instrument identification, tray setup, and autoclave operation. Hands-on lab practice begins.",
  },
  {
    month: "M3",
    label: "Month 3",
    title: "Chairside Assisting \u2014 Core Skills",
    desc: "Four-handed dentistry techniques, suction handling, material mixing, patient positioning, and assisting in basic procedures.",
  },
  {
    month: "M4",
    label: "Month 4",
    title: "Radiography & Dental Imaging",
    desc: "Dental X-ray techniques, digital radiography, radiation safety, and image processing. Supervised clinical practice.",
  },
  {
    month: "M5",
    label: "Month 5",
    title: "Specialty Clinic Rotations",
    desc: "Rotate through Orthodontics, Endodontics, Prosthodontics, Oral Surgery, and Periodontics. Real patient exposure in all specialties.",
  },
  {
    month: "M6",
    label: "Month 6",
    title: "Clinic Management & Placement Prep",
    desc: "Appointment scheduling, patient records, billing basics, communication skills, resume building, and placement interviews.",
  },
];

const whyCards = [
  {
    num: 1,
    title: "250+ Chair Dental Hospital",
    desc: "One of Tamil Nadu\u2019s largest dental facilities with 500+ daily patients and 100+ hospital beds.",
  },
  {
    num: 2,
    title: "Expert Faculty Mentorship",
    desc: "Learn from qualified dental surgeons and specialists with decades of clinical experience.",
  },
  {
    num: 3,
    title: "Real Clinical Exposure",
    desc: "Hands-on chairside assisting from Day 1 across all major dental specialties.",
  },
  {
    num: 4,
    title: "NAAC \u2018A\u2019 Accredited",
    desc: "Nationally recognized accreditation \u2014 your certification carries real industry credibility.",
  },
  {
    num: 5,
    title: "Industry-Ready Curriculum",
    desc: "Radiography, sterilization, chairside assisting, and clinic management \u2014 everything employers want.",
  },
  {
    num: 6,
    title: "Strong Placement Network",
    desc: "Connections to dental clinics, hospitals, corporate chains, and specialty centers across India.",
  },
];

const alumniStats = [
  { value: 3000, suffix: "+", label: "Alumni Network Across India" },
  { value: 92, suffix: "%", label: "Placement Assistance Rate" },
  { value: 39, suffix: "+", label: "Years of Dental College Excellence" },
];

const careerPaths = [
  { emoji: "\uD83C\uDFEB", title: "Dental Colleges" },
  { emoji: "\uD83E\uDDB7", title: "Private Dental Clinics" },
  { emoji: "\uD83C\uDFE5", title: "Multi-Specialty Hospitals" },
  { emoji: "\uD83D\uDCBC", title: "Corporate Dental Chains" },
  { emoji: "\u2695\uFE0F", title: "Implant & Specialty Centers" },
];

const faqItems = [
  {
    question: "What is the eligibility for this course?",
    answer:
      "Candidates who have passed 10th or 12th standard from any recognized board are eligible. Minimum age is 17 years. Basic communication skills in Tamil or English are required.",
  },
  {
    question: "What is the course duration and schedule?",
    answer:
      "The course is 6 months full-time. Classes run Monday to Saturday from 9:00 AM to 4:00 PM. Training includes both classroom theory and hands-on clinical practice in the hospital.",
  },
  {
    question: "What is the total fee? Are there hidden charges?",
    answer:
      "The total course fee is \u20B925,000. There are no hidden charges. This covers training, materials, and certification.",
  },
  {
    question: "Will I get placement assistance?",
    answer:
      "Yes, JKKN provides strong placement guidance. Our placement cell has connections with dental colleges, private clinics, multi-specialty hospitals, and corporate dental chains across India.",
  },
  {
    question: "What salary can I expect after the course?",
    answer:
      "Starting salary ranges from \u20B98,000 to \u20B912,000 per month. With experience and performance, your salary will grow significantly over time.",
  },
  {
    question: "When is the last date to apply?",
    answer:
      "Admission closes on April 28, 2026. Seats are limited and filled on a first-come, first-served basis. We recommend applying early to secure your spot.",
  },
];

// ===== JSON-LD SCHEMAS =====
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Certificate Course in Dental Surgery Assistant",
  description:
    "A 6-month full-time certificate program training students to become professional dental surgery assistants with hands-on clinical experience at a 250+ chair dental hospital.",
  provider: {
    "@type": "EducationalOrganization",
    name: "JKKN Dental College & Hospital",
    url: "https://dental.jkkn.ac.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Natarajapuram, NH-544, Komarapalayam",
      addressLocality: "Namakkal",
      addressRegion: "Tamil Nadu",
      postalCode: "638183",
      addressCountry: "IN",
    },
  },
  timeRequired: "P6M",
  educationalCredentialAwarded: "Certificate in Dental Surgery Assistant",
  occupationalCategory: "Dental Surgery Assistant",
  offers: {
    "@type": "Offer",
    price: "25000",
    priceCurrency: "INR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-04-28",
  },
  coursePrerequisites:
    "10th or 12th standard pass from any recognized board. Minimum age 17 years.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "JKKN Dental College & Hospital",
  url: "https://dental.jkkn.ac.in",
  telephone: "+916381111621",
  email: "aishwarya@jkkn.ac.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Natarajapuram, NH-544, Komarapalayam",
    addressLocality: "Namakkal",
    addressRegion: "Tamil Nadu",
    postalCode: "638183",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.4478,
    longitude: 77.6964,
  },
};

// ===== PAGE COMPONENT =====
export default function DSACoursePage() {
  return (
    <>
      <DSAStyles />
      <ScrollProgress />
      <Header />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dental.jkkn.ac.in" },
          {
            name: "Dental Surgery Assistant Course",
            url: "https://dental.jkkn.ac.in/dental-surgery-assistant-course/",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main>
        {/* ===== URGENCY BAR ===== */}
        <div
          className="text-white py-2.5 px-5 text-center text-sm font-semibold relative z-10"
          style={{
            background: "linear-gradient(90deg, #dc2626, #ef4444, #dc2626)",
            backgroundSize: "200% 100%",
            animation: "dsa-shimmer 3s ease infinite",
          }}
        >
          <div className="inline-flex items-center gap-5 flex-wrap justify-center">
            <span>
              Admission Closes: <strong>April 28, 2026</strong>
            </span>
            <span className="w-px h-4 bg-white/30 hidden md:block" />
            <span className="inline-flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full bg-amber-400 shrink-0"
                style={{
                  animation: "dsa-urgency-pulse 1.5s ease-in-out infinite",
                }}
              />
              Limited Seats &mdash; First Come, First Served
            </span>
          </div>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="bg-[#002309] text-white py-11 md:py-[80px] relative overflow-hidden text-center">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(0,104,55,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(124,185,131,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(0,104,55,0.15) 0%, transparent 50%)",
            }}
          />
          <div className="relative z-[2] max-w-[780px] mx-auto px-6">
            <RevealOnScroll>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 px-[18px] py-2 rounded-full text-[13px] font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                <span
                  className="w-[7px] h-[7px] bg-[#7CB983] rounded-full"
                  style={{ animation: "dsa-blink 1.5s infinite" }}
                />
                Admission Open 2026
              </div>

              {/* Title */}
              <h1
                className="font-extrabold leading-[1.1] mb-6 tracking-[-1.5px]"
                style={{
                  fontSize: "clamp(38px, 7vw, 68px)",
                  textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                }}
              >
                <span
                  className="block font-semibold tracking-[3px] uppercase text-white/85 mb-2"
                  style={{ fontSize: "0.55em" }}
                >
                  Become a Certified
                </span>
                <span
                  className="bg-clip-text text-transparent inline"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24, #fde68a)",
                    backgroundSize: "300% 300%",
                    animation: "dsa-shimmer 4s ease-in-out infinite",
                  }}
                >
                  Dental Surgery Assistant
                </span>
                <span className="block mt-2">
                  in Just <span className="text-[#fbbf24]">6</span> Months
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-white/70 mb-8 max-w-[620px] mx-auto leading-relaxed"
                style={{ fontSize: "clamp(16px, 2.2vw, 20px)" }}
              >
                Hands-on clinical training at JKKN&apos;s 250+ Chair
                Multi-Specialty Dental Hospital. No degree required &mdash; 10th
                or 12th pass is enough to start your healthcare career.
              </p>

              {/* Stats Ribbon */}
              <div className="flex justify-center flex-wrap gap-3 mb-9">
                {heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] px-6 py-4 rounded-[14px] text-center min-w-[150px] max-sm:min-w-[140px] max-sm:px-4 max-sm:py-3"
                  >
                    <span className="text-[26px] font-extrabold text-yellow-400 block leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs text-white/70 mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={`tel:+91${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold no-underline transition-all text-[#002309] hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, #eab308, #f59e0b)",
                    animation: "dsa-cta-pulse 2.5s ease-in-out infinite",
                  }}
                >
                  Call Now &mdash; {PHONE}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold no-underline transition-all text-white bg-[#25d366] shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(37,211,102,0.4)]"
                >
                  WhatsApp Us
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ===== MARQUEE TRUST BAR ===== */}
        <MarqueeTrustBar items={trustItems} />

        {/* ===== BENTO HIGHLIGHTS ===== */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1180px] mx-auto px-6">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#006837] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Program Highlights
              </span>
              <h2
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                Everything You Need to
                <br />
                Start Your Dental Career
              </h2>
              <p className="text-base text-gray-500 max-w-[580px] mb-11">
                A 6-month intensive program designed to make you job-ready with
                real hospital experience.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bentoCards.map((card, i) => (
                <RevealOnScroll
                  key={i}
                  delay={(i % 3) * 0.1}
                  className={
                    card.variant === "featured"
                      ? "md:col-span-2"
                      : undefined
                  }
                >
                  <div
                    className={`rounded-2xl p-[30px] transition-all relative overflow-hidden border h-full ${
                      card.variant === "featured"
                        ? "text-white border-transparent hover:shadow-[0_8px_32px_rgba(0,104,55,0.25)]"
                        : card.variant === "gold"
                          ? "border-[#fcd34d] hover:bg-[rgba(254,243,199,0.7)] hover:backdrop-blur-2xl hover:-translate-y-[3px] hover:shadow-md"
                          : "bg-[#FBFBEE] border-gray-200 hover:bg-white/65 hover:backdrop-blur-2xl hover:border-[rgba(0,104,55,0.2)] hover:-translate-y-[3px] hover:shadow-md"
                    }`}
                    style={
                      card.variant === "featured"
                        ? {
                            background:
                              "linear-gradient(135deg, #1B5E20, #002309)",
                          }
                        : card.variant === "gold"
                          ? {
                              background:
                                "linear-gradient(135deg, #fef3c7, #fde68a)",
                            }
                          : undefined
                    }
                  >
                    <div
                      className={`w-[50px] h-[50px] rounded-[14px] flex items-center justify-center text-[26px] mb-4 ${
                        card.variant === "featured"
                          ? "bg-white/10"
                          : card.variant === "gold"
                            ? "bg-amber-700/10"
                            : "bg-green-600/10"
                      }`}
                    >
                      {card.emoji}
                    </div>
                    {card.bigNum && (
                      <div
                        className={`text-[44px] font-extrabold leading-none mb-1.5 ${
                          card.variant === "featured"
                            ? "text-yellow-400"
                            : "text-[#1B5E20]"
                        }`}
                      >
                        {card.bigNum}
                      </div>
                    )}
                    <h3 className="text-[17px] font-bold mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-80">
                      {card.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRAINING TIMELINE ===== */}
        <section className="py-14 md:py-20 bg-[#FBFBEE]">
          <div className="max-w-[1180px] mx-auto px-6">
            <RevealOnScroll className="text-center">
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#006837] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Training Roadmap
              </span>
              <h2
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                What You&apos;ll Learn in
                <br />6 Months
              </h2>
              <p className="text-base text-gray-500 max-w-[580px] mx-auto mb-11">
                A structured, progressive curriculum that takes you from basics
                to job-ready professional.
              </p>
            </RevealOnScroll>

            <div className="max-w-[700px] mx-auto relative">
              {/* Timeline line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-[3px] rounded-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, #7CB983, #eab308)",
                }}
              />

              {timelineMonths.map((item, i) => (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="flex gap-6 mb-8 last:mb-0 relative">
                    <div
                      className="shrink-0 w-[50px] h-[50px] rounded-full flex items-center justify-center font-extrabold text-sm text-white z-[2]"
                      style={{
                        background:
                          "linear-gradient(135deg, #006837, #1B5E20)",
                        boxShadow:
                          "0 0 0 6px #FBFBEE, 0 4px 16px rgba(0,0,0,0.08)",
                      }}
                    >
                      {item.month}
                    </div>
                    <div className="flex-1 bg-white border border-gray-200 rounded-xl py-[22px] px-[26px] transition-all hover:border-[#7CB983] hover:shadow-sm">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#4CAF50] mb-1">
                        {item.label}
                      </div>
                      <h3 className="text-base font-bold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COURSE DETAILS + ELIGIBILITY ===== */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1180px] mx-auto px-6">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#006837] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Course Details
              </span>
              <h2
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                Course Information &amp;
                <br />
                Eligibility Criteria
              </h2>
              <p className="text-base text-gray-500 max-w-[580px] mb-11">
                Everything you need to know before applying.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Course Table */}
              <RevealOnScroll>
                <div className="rounded-2xl overflow-hidden shadow-md bg-white">
                  {[
                    {
                      emoji: "\uD83C\uDF93",
                      label: "Course",
                      value: "Certificate in Dental Surgery Assistant",
                    },
                    {
                      emoji: "\u23F1\uFE0F",
                      label: "Duration",
                      value: "6 Months (Full-Time)",
                    },
                    {
                      emoji: "\uD83D\uDCC5",
                      label: "Schedule",
                      value: "Mon\u2013Sat | 9:00 AM \u2013 4:00 PM",
                    },
                    {
                      emoji: "\uD83D\uDCB0",
                      label: "Course Fee",
                      value: "\u20B925,000 (Total \u2014 No Hidden Charges)",
                      bold: true,
                    },
                    {
                      emoji: "\uD83D\uDCCD",
                      label: "Location",
                      value:
                        "JKKN Dental College & Hospital, Kumarapalayam, Namakkal, TN \u2013 638183",
                    },
                    {
                      emoji: "\u26A0\uFE0F",
                      label: "Deadline",
                      value: "April 28, 2026",
                      highlight: true,
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`flex border-b border-[#FBFBEE] last:border-b-0 ${
                        i % 2 === 1 ? "bg-[#FBFBEE]" : ""
                      }`}
                    >
                      <div className="w-[42%] py-4 px-5 font-bold text-sm text-[#1B5E20] flex items-center gap-2 border-r-2 border-green-100">
                        <span>{row.emoji}</span> {row.label}
                      </div>
                      <div
                        className={`flex-1 py-4 px-5 text-sm ${
                          row.highlight
                            ? "text-red-600 font-bold"
                            : "text-gray-600"
                        }`}
                      >
                        {row.bold ? <strong>{row.value}</strong> : row.value}
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Eligibility */}
              <RevealOnScroll delay={0.2}>
                <div className="flex flex-col gap-3.5">
                  <h3 className="text-lg font-extrabold text-gray-800 mb-2">
                    Who Can Apply?
                  </h3>
                  {[
                    {
                      emoji: "\uD83D\uDCDA",
                      title: "Education",
                      desc: "Minimum 10th or 12th pass from any recognized board",
                    },
                    {
                      emoji: "\uD83D\uDC64",
                      title: "Age Requirement",
                      desc: "Minimum 17 years at the time of admission",
                    },
                    {
                      emoji: "\uD83D\uDCAC",
                      title: "Communication",
                      desc: "Basic Tamil or English proficiency for patient interaction",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 transition-all hover:border-[#7CB983] hover:shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-[14px] bg-green-100 flex items-center justify-center text-2xl shrink-0">
                        {card.emoji}
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-gray-800 mb-0.5">
                          {card.title}
                        </h4>
                        <p className="text-[13px] text-gray-500">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ===== WHY JKKN ===== */}
        <section className="py-14 md:py-20 bg-[#FBFBEE]">
          <div className="max-w-[1180px] mx-auto px-6">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#006837] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Why JKKN
              </span>
              <h2
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                Why Students Choose
                <br />
                JKKN Dental College
              </h2>
              <p className="text-base text-gray-500 max-w-[580px] mb-11">
                74+ years of educational excellence in healthcare training.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {whyCards.map((card, i) => (
                <RevealOnScroll key={i} delay={(i % 2) * 0.1}>
                  <div className="p-6 rounded-xl border border-gray-200 flex gap-3.5 items-start transition-all bg-white hover:border-[#7CB983] hover:shadow-md hover:-translate-y-0.5 hover:bg-white/65 hover:backdrop-blur-2xl h-full">
                    <div
                      className="shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center font-extrabold text-sm text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, #006837, #1B5E20)",
                      }}
                    >
                      {card.num}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-gray-800 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ALUMNI STATS ===== */}
        <section className="py-14 md:py-20 bg-[#FBFBEE]">
          <div className="max-w-[1180px] mx-auto px-6">
            <RevealOnScroll className="text-center">
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#006837] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Proven Track Record
              </span>
              <h2
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                Numbers That
                <br />
                Speak for Themselves
              </h2>
              <p className="text-base text-gray-500 max-w-[580px] mx-auto mb-11">
                Verified institutional data &mdash; not claims, but facts you
                can check.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto mb-8">
              {alumniStats.map((stat, i) => (
                <ScaleOnScroll key={i} delay={i * 0.15}>
                  <div className="bg-white border border-gray-200 rounded-xl py-[30px] px-5 text-center transition-all hover:border-[#7CB983] hover:shadow-md hover:-translate-y-[3px]">
                    <div
                      className="font-extrabold text-[#006837] mb-1"
                      style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                    >
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </ScaleOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="text-center p-[30px] rounded-2xl border-2 border-dashed border-[#7CB983] max-w-[700px] mx-auto bg-gradient-to-br from-[#FBFBEE] to-green-100">
                <h3 className="text-xl text-[#002309] font-extrabold mb-2">
                  Want to Talk to Our Past Students?
                </h3>
                <p className="text-gray-500 text-[15px] mb-4">
                  We&apos;ll connect you with our alumni who completed similar
                  programs. Hear their experience directly &mdash; no filters,
                  no scripts.
                </p>
                <a
                  href="https://wa.me/916381111621?text=Hi%2C%20I%20want%20to%20talk%20to%20past%20students%20who%20completed%20the%20Dental%20Surgery%20Assistant%20course."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold no-underline transition-all text-white shadow-[0_4px_16px_rgba(0,104,55,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(22,101,52,0.4)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #7CB983, #006837)",
                  }}
                >
                  Request Alumni Connect via WhatsApp
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ===== SALARY BANNER ===== */}
        <RevealOnScroll>
          <section className="py-[60px] relative overflow-hidden text-center text-white"
            style={{
              background: "linear-gradient(135deg, #002309, #1B5E20)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(234,179,8,0.1) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-[2] max-w-[1180px] mx-auto px-6">
              <p className="text-[13px] font-bold uppercase tracking-[1.5px] text-white/40 mb-2">
                Starting Monthly Salary
              </p>
              <div
                className="font-extrabold mb-2 tracking-tight"
                style={{ fontSize: "clamp(36px, 6vw, 62px)" }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #facc15, #f59e0b)",
                  }}
                >
                  {"\u20B9"}8,000 &ndash; {"\u20B9"}12,000
                </span>
              </div>
              <p className="text-[17px] text-white/60 max-w-[500px] mx-auto">
                Salary grows with experience and performance. Build a stable,
                rewarding career in the growing dental healthcare sector.
              </p>
            </div>
          </section>
        </RevealOnScroll>

        {/* ===== CAREER PATHS ===== */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1180px] mx-auto px-6">
            <RevealOnScroll className="text-center">
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#006837] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Career Paths
              </span>
              <h2
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                Where You Can Work After
                <br />
                This Course
              </h2>
              <p className="text-base text-gray-500 max-w-[580px] mx-auto mb-11">
                Multiple career options across the growing dental healthcare
                industry in India.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-[900px] mx-auto">
              {careerPaths.map((card, i) => (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <div className="bg-[#FBFBEE] border border-gray-200 rounded-xl py-7 px-4 text-center transition-all hover:border-[#7CB983] hover:shadow-md hover:-translate-y-[3px] hover:bg-white/65 hover:backdrop-blur-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-[28px] mx-auto mb-3.5">
                      {card.emoji}
                    </div>
                    <h4 className="text-sm font-bold text-gray-800">
                      {card.title}
                    </h4>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-14 md:py-20 bg-[#FBFBEE]">
          <div className="max-w-[1180px] mx-auto px-6">
            <RevealOnScroll className="text-center">
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-[#006837] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                FAQ
              </span>
              <h2
                className="font-extrabold text-gray-900 mb-2.5 tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-base text-gray-500 max-w-[580px] mx-auto mb-11">
                Got questions? Here are the most common ones answered.
              </p>
            </RevealOnScroll>
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section
          className="py-[70px] text-center text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1B5E20, #002309)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(234,179,8,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-[2] max-w-[1180px] mx-auto px-6">
            <h2
              className="font-extrabold mb-3 tracking-tight"
              style={{ fontSize: "clamp(26px, 4.5vw, 42px)" }}
            >
              Ready to Start Your
              <br />
              Dental Career?
            </h2>
            <p className="text-[17px] text-white/60 mb-8 max-w-[500px] mx-auto">
              Talk to our Program Coordinator for admission guidance, fee
              details, and any questions you have.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-5">
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold no-underline transition-all text-[#002309] hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #eab308, #f59e0b)",
                  animation: "dsa-cta-pulse 2.5s ease-in-out infinite",
                }}
              >
                Call Dr. Aishwarya &mdash; {PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold no-underline transition-all text-white bg-white/[0.08] backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/30"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-sm text-white/50">
              Email:{" "}
              <a
                href="mailto:aishwarya@jkkn.ac.in"
                className="text-yellow-400 no-underline font-semibold hover:underline"
              >
                aishwarya@jkkn.ac.in
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat url={WHATSAPP_URL} />
      <MobileStickyBarCTA phone={PHONE} whatsappUrl={WHATSAPP_URL} />
      <FloatingWhatsAppClient />
    </>
  );
}
