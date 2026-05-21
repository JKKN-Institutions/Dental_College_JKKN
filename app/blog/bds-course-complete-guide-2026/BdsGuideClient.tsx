'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Clock,
  GraduationCap,
  ChevronUp,
  Mail,
  TrendingUp,
  AlignLeft,
} from 'lucide-react';

const tocItems = [
  { id: 'what-is-bds', label: 'What is BDS?' },
  { id: 'eligibility', label: 'Eligibility & NEET Cutoff' },
  { id: 'admission-process', label: 'Admission Process 2026' },
  { id: 'duration-internship', label: 'Duration & Internship' },
  { id: 'syllabus', label: 'BDS Syllabus (Year-Wise)' },
  { id: 'fees', label: 'Fee Structure & Scholarships' },
  { id: 'career', label: 'Career & Salary After BDS' },
  { id: 'why-jkkn', label: 'Why Choose JKKN Dental College' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const popularPosts = [
  {
    category: 'MDS',
    title: 'MDS Orthodontics 2026: Complete Course Guide & Career Scope',
    date: 'May 16, 2026',
  },
  {
    category: 'Career',
    title: 'Top 10 Career Options After BDS in India',
    date: 'Apr 22, 2026',
  },
  {
    category: 'Admission',
    title: 'NEET-UG 2026 Tamil Nadu Counselling: Step-by-Step',
    date: 'Apr 10, 2026',
  },
];

const FIXED_TOP = 104;

interface FAQ {
  question: string;
  answer: string;
}

export default function BdsGuideClient({ faqs }: { faqs: FAQ[] }) {
  const [activeSection, setActiveSection] = useState('what-is-bds');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const gridRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarContentRef = useRef<HTMLDivElement>(null);
  const [sidebarState, setSidebarState] = useState<'normal' | 'fixed' | 'bottom'>('normal');
  const [fixedLeft, setFixedLeft] = useState(0);
  const [fixedWidth, setFixedWidth] = useState(320);

  useEffect(() => {
    let sidebarAbsTop = 0;
    let gridAbsBottom = 0;
    let prevState: 'normal' | 'fixed' | 'bottom' = 'normal';

    const measure = () => {
      if (sidebarRef.current) {
        sidebarAbsTop = sidebarRef.current.getBoundingClientRect().top + window.scrollY;
        setFixedLeft(sidebarRef.current.getBoundingClientRect().left);
        setFixedWidth(sidebarRef.current.offsetWidth);
      }
      if (gridRef.current) {
        gridAbsBottom = gridRef.current.getBoundingClientRect().bottom + window.scrollY;
      }
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY + FIXED_TOP + 20;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
      if (!sidebarRef.current || !sidebarContentRef.current) return;
      const scrollY = window.scrollY;
      const sidebarHeight = sidebarContentRef.current.offsetHeight;
      const threshold1 = sidebarAbsTop - FIXED_TOP;
      const threshold2 = gridAbsBottom - FIXED_TOP - sidebarHeight;
      let next: 'normal' | 'fixed' | 'bottom';
      if (scrollY < threshold1) next = 'normal';
      else if (scrollY >= threshold2) next = 'bottom';
      else {
        next = 'fixed';
        setFixedLeft(sidebarRef.current.getBoundingClientRect().left);
        setFixedWidth(sidebarRef.current.offsetWidth);
      }
      if (next !== prevState) {
        prevState = next;
        setSidebarState(next);
      }
    };

    const handleResize = () => {
      measure();
      handleScroll();
    };

    const raf = requestAnimationFrame(measure);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            BDS Admission
          </span>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>9 min read</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-sm">1,800 words</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          BDS Course 2026: Eligibility, Fees, Syllabus &amp; Career — A Complete Guide
        </h1>

        <p className="hero-description text-lg text-gray-600 leading-relaxed mb-6 max-w-4xl">
          Everything a NEET-UG aspirant and parent needs to know about the Bachelor of Dental
          Surgery (BDS) program in 2026 — eligibility, NEET cutoff, 5-year course breakdown, fee
          structure, scholarships, internship, career options and what makes JKKN Dental College
          &amp; Hospital, Komarapalayam a strong choice.
        </p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
            <span className="text-[#006837] font-bold text-sm">JD</span>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">By JKKN Dental Admissions Team</p>
            <p className="text-gray-400 text-xs">
              Published May 16, 2026 &bull; Updated May 16, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="w-full rounded-2xl bg-gradient-to-br from-[#6ba872] to-[#002309] flex flex-col items-center justify-center py-16 sm:py-20 gap-3">
          <GraduationCap className="w-12 h-12 text-white" strokeWidth={1.5} />
          <p className="text-white font-semibold text-lg">BDS Course Complete Guide 2026</p>
          <p className="text-white/70 text-sm">JKKN Dental College &amp; Hospital</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 relative" ref={gridRef}>

          <main className="min-w-0">

            {/* Quick Answer */}
            <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-5 mb-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#006837] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#006837] font-bold text-[10px] leading-none">i</span>
                </div>
                <span className="text-[#006837] font-bold text-xs uppercase tracking-wider">
                  Quick Answer
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>BDS (Bachelor of Dental Surgery)</strong> is a 5-year undergraduate dental
                program — 4 years of academic study + 1 year of mandatory rotational internship —
                approved by the <strong>Dental Council of India (DCI)</strong>. Eligibility: 10+2
                with PCB (50% aggregate) + valid <strong>NEET-UG 2026</strong> score. At{' '}
                <strong>JKKN Dental College &amp; Hospital, Komarapalayam</strong> (affiliated to TN
                Dr. MGR Medical University), 100 BDS seats are filled through Tamil Nadu state
                counselling. Fees follow <strong>Govt. of Tamil Nadu norms</strong>. BDS graduates
                can practice as dental surgeons, pursue MDS specialisation, or work in hospitals,
                public health and dental industry.
              </p>
            </div>

            {/* Section 1: What is BDS */}
            <section id="what-is-bds" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What is BDS? Course Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Bachelor of Dental Surgery (BDS)</strong> is the only academic dental degree
                recognised across India for clinical dental practice. It is the dentistry equivalent
                of MBBS — graduates earn the title <strong>&ldquo;Doctor&rdquo;</strong> and are
                licensed dental surgeons under the <strong>Dental Council of India (DCI)</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The BDS curriculum covers the entire spectrum of oral and dental healthcare —
                anatomy, physiology, dental materials, oral pathology, conservative dentistry,
                endodontics, orthodontics, periodontics, prosthodontics, oral &amp; maxillofacial
                surgery, oral medicine &amp; radiology, paediatric dentistry and public health
                dentistry. Students learn to diagnose, treat and prevent diseases of the teeth,
                gums, jaws and oral cavity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In India, BDS is regulated by the DCI under the <strong>BDS Course Regulations,
                2007</strong> (with amendments). Across the country there are over 320 DCI-approved
                dental colleges offering approximately 27,000 BDS seats annually — Tamil Nadu being
                one of the strongest hubs with both government and private institutions.
              </p>
            </section>

            {/* Section 2: Eligibility */}
            <section id="eligibility" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                BDS Eligibility &amp; NEET-UG Cutoff 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                BDS admission in India is entirely <strong>NEET-UG based</strong>. There is no
                separate entrance exam. To be eligible for BDS admission in 2026, a candidate must
                satisfy the following:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-44">
                        Criterion
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Qualifying exam', '10+2 / HSC with Physics, Chemistry, Biology (or Biotechnology) and English'],
                      ['Aggregate marks', 'Min. 50% in PCB (General/EWS); 40% for SC/ST/OBC; 45% for PwD'],
                      ['Entrance test', 'Valid NEET-UG 2026 score (NTA-conducted)'],
                      ['Minimum age', '17 years on or before 31 Dec 2026'],
                      ['Nationality', 'Indian citizen / OCI / PIO / NRI as per category'],
                      ['Domicile (TN seats)', 'Tamil Nadu domicile required for State Quota seats'],
                    ].map(([k, v], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{k}</td>
                        <td className="px-4 py-3 text-gray-600">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>NEET-UG qualifying percentile (indicative for BDS):</strong>
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  ['General / EWS:', '50th percentile'],
                  ['SC / ST / OBC:', '40th percentile'],
                  ['PwD (General):', '45th percentile'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Note:</strong> Actual closing ranks vary every
                  year and by category. In recent Tamil Nadu counselling rounds, private dental
                  college closing NEET ranks for Government Quota typically fell in the 4–7 lakh
                  rank range for General category. Always refer to TN Selection Committee&apos;s
                  official cutoffs at <em>tnmedicalselection.net</em>.
                </p>
              </div>
            </section>

            {/* Section 3: Admission Process */}
            <section id="admission-process" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                BDS Admission Process 2026 — Step-by-Step
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Admission to BDS at JKKN Dental College is conducted through the Tamil Nadu state
                counselling process by the <strong>Selection Committee, Directorate of Medical
                Education (DME), Government of Tamil Nadu</strong>. Here is the full pathway:
              </p>
              <div className="space-y-5 mb-5">
                {[
                  { num: 1, title: 'Appear for NEET-UG 2026', desc: 'Apply to NTA, attempt NEET-UG (typically held in May 2026). Result announcement is followed by All India Rank publication.' },
                  { num: 2, title: 'Register for Tamil Nadu Counselling', desc: 'Register on tnmedicalselection.net within the announced window. Pay registration fee, upload NEET scorecard, 10th/12th marksheets, ID proof, community certificate, nativity, and passport-size photo.' },
                  { num: 3, title: 'Choice Filling & Locking', desc: 'Add JKKN Dental College & Hospital (institution code published in counselling handbook) to your preference list along with any other dental colleges of interest. Lock your choices before the deadline.' },
                  { num: 4, title: 'Seat Allotment', desc: 'Allotment is rank-cum-preference based. Round 1, Round 2, Stray Vacancy and Mop-up rounds are conducted. You will receive an allotment order.' },
                  { num: 5, title: 'Document Verification & Reporting', desc: 'Report to JKKN Dental College with the allotment order, original certificates and DD/online payment of first-year fees. Identity, eligibility and document verification is completed at the institution.' },
                  { num: 6, title: 'Admission Confirmation', desc: 'On successful verification and fee payment, your BDS admission is confirmed. Orientation, ID card issue and class commencement follow as per the academic calendar.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {num}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  Apart from State Quota, JKKN also has Management Quota and NRI Quota seats. These
                  are filled through the institution&apos;s direct application process. Parents are
                  encouraged to call the admissions office at <strong>+91 93458 55001</strong> for
                  category-wise eligibility and current vacancy status.
                </p>
              </div>
            </section>

            {/* Section 4: Duration & Internship */}
            <section id="duration-internship" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Course Duration &amp; Rotational Internship
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                BDS is a <strong>5-year program</strong> structured as 4 academic years (8 semesters,
                4 university examinations) followed by a mandatory <strong>1-year rotational paid
                internship</strong>. The internship is a non-negotiable DCI requirement and the
                degree is awarded only after its successful completion.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                During internship at the JKKN Dental Hospital, students rotate through all 9
                clinical departments — Conservative Dentistry &amp; Endodontics, Prosthodontics,
                Periodontics, Orthodontics, Oral &amp; Maxillofacial Surgery, Oral Medicine &amp;
                Radiology, Paediatric Dentistry, Oral Pathology, and Public Health Dentistry — under
                direct faculty supervision, treating real patients across the 200+ dental chair
                facility that records 500+ daily outpatient visits.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Internship also includes outreach camps in rural Namakkal, Erode and Salem
                districts, hospital posting, and case-presentation seminars. A monthly stipend is
                paid throughout the internship year.
              </p>
            </section>

            {/* Section 5: Syllabus */}
            <section id="syllabus" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                BDS Syllabus — Year-Wise Subjects
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The BDS syllabus is set by the Dental Council of India and the affiliating
                university — <strong>The Tamil Nadu Dr. M.G.R. Medical University</strong>. Here is
                the year-wise subject structure:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-32">Year</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Subjects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['I BDS', 'General Human Anatomy & Embryology, General Human Physiology & Biochemistry, Dental Anatomy & Histology, Dental Materials'],
                      ['II BDS', 'General Pathology & Microbiology, General & Dental Pharmacology, Pre-clinical Prosthodontics, Pre-clinical Conservative Dentistry, Dental Materials (continued)'],
                      ['III BDS', 'General Medicine, General Surgery, Oral Pathology & Oral Microbiology, Public Health Dentistry'],
                      ['IV BDS', 'Orthodontics & Dentofacial Orthopedics, Oral Medicine & Radiology, Paediatric & Preventive Dentistry, Periodontology, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, Prosthodontics & Crown & Bridge'],
                      ['V (Internship)', 'Rotational clinical postings across all 9 departments + outreach community service'],
                    ].map(([y, s], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{y}</td>
                        <td className="px-4 py-3 text-gray-600">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                The complete subject-wise syllabus, internal assessment scheme and examination
                pattern is published on the JKKN academics portal under{' '}
                <em>BDS Syllabus &mdash; Statutes Pertaining to Academic Departments</em>.
              </p>
            </section>

            {/* Section 6: Fees */}
            <section id="fees" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                BDS Fee Structure &amp; Scholarships at JKKN
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                JKKN Dental College charges BDS fees as per <strong>Government of Tamil Nadu
                norms</strong> (revised annually). Fees are categorised under three quotas:
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Government Quota:', 'As per Govt. of Tamil Nadu fee fixation committee (most affordable category)'],
                  ['Management Quota:', 'Self-financing seats with fee fixed by the institution under regulatory cap'],
                  ['NRI Quota:', 'For Non-Resident Indian candidates as per DCI/state norms'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The fee covers tuition, university registration, laboratory charges and hospital
                clinical exposure. Hostel, mess, transport and books are charged separately. The
                exact, current-year fee table is published on the official{' '}
                <a href="/fees-structure/" className="text-[#006837] font-semibold hover:underline">JKKN BDS Fee Structure page</a>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Scholarships &amp; financial support:</strong>
              </p>
              <ul className="space-y-2.5">
                {[
                  ['Govt. of Tamil Nadu SC/ST/OBC scholarships:', 'tuition-fee reimbursement for eligible students'],
                  ['Post-Matric Scholarship Scheme:', 'central government scheme for minority and reserved category students'],
                  ['JKKN Merit Scholarships:', 'institution-funded support for top NEET-rankers and academic achievers'],
                  ['First-Graduate Concession:', 'tuition-fee concession under Tamil Nadu First Graduate Scheme (subject to eligibility)'],
                  ['Education loans:', 'tie-ups with nationalised banks for hassle-free education loan processing'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: Career */}
            <section id="career" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Career &amp; Salary After BDS in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A BDS degree opens up clinical, academic, public health and research career
                pathways — both in India and abroad. The dentist-to-population ratio in India is
                still uneven, with rural areas dramatically underserved, making BDS a long-term,
                stable career bet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Career options after BDS:
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Clinical Dentist:', 'practice at private dental clinics, polyclinics or chain dental hospitals'],
                  ['Own Private Practice:', 'set up your own clinic — most popular route after a few years of experience'],
                  ['MDS Specialisation:', '3-year postgraduate degree (Orthodontics, Prosthodontics, Periodontics, Endodontics, Oral Surgery, etc.)'],
                  ['Government Dental Officer:', 'TNPSC dental surgeon recruitment, ESI hospitals, AIIMS, Railways, Defence Dental Corps'],
                  ['Public Health Dentist:', 'community dental health programs, WHO/UNICEF initiatives, NGO oral health camps'],
                  ['Academic Career:', 'tutor/demonstrator → senior lecturer → reader → professor at dental colleges'],
                  ['Dental Industry & Insurance:', 'product specialists, clinical advisors, insurance claims processing, Ed-Tech'],
                  ['Higher Studies Abroad:', 'INBDE / NDEB / ADC pathways for USA, Canada and Australia practice'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Career Path</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Starting Income</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Experienced (5+ yrs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Govt. Dental Surgeon (TNPSC)', '₹55,000 – ₹85,000 / month', '₹1,00,000+ / month'],
                      ['Dental Clinic Associate', '₹25,000 – ₹45,000 / month', '₹60,000 – ₹1,00,000'],
                      ['Own Private Practice', 'Variable (₹30k – 1L)', '₹1.5L – ₹5L+ / month'],
                      ['MDS + Specialist Practice', 'Post-MDS: ₹60k – ₹1L', '₹2L – ₹6L+ / month'],
                      ['Dental Industry / Corporate', '₹35,000 – ₹55,000 / month', '₹70,000 – ₹1.5L'],
                    ].map(([c, s, e], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{c}</td>
                        <td className="px-4 py-3 text-gray-600">{s}</td>
                        <td className="px-4 py-3 text-gray-600">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Note:</strong> Salary figures are realistic
                  Indian-market estimates for 2026 and vary by city, clinic reputation and clinical
                  skill. Private-practice income depends heavily on location, marketing and
                  service mix (cosmetic, implants, ortho all command premium fees).
                </p>
              </div>
            </section>

            {/* Section 8: Why JKKN + CTA */}
            <section id="why-jkkn" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Choose JKKN Dental College &amp; Hospital
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                JKKN Dental College &amp; Hospital, established in 1987, is one of the most
                established private dental colleges in western Tamil Nadu. Here is what students and
                parents look at when comparing options:
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  ['DCI & TNMGRMU recognised:', '100 BDS seats + 18 MDS seats across 5 specialisations'],
                  ['Massive clinical exposure:', '200+ dental chairs, 100+ hospital beds, 500+ daily patient footfall'],
                  ['9 academic + clinical departments:', 'all branches of dentistry under one roof'],
                  ['Modern infrastructure:', 'digital classrooms, simulation lab, CBCT, OPG, RVG, implant centre'],
                  ['Strategic location:', 'on NH-544 between Salem and Coimbatore — easy access from Erode, Namakkal, Tiruppur'],
                  ['Hostel & transport:', 'separate boys/girls hostels, fleet of college buses across 5+ districts'],
                  ['Placement support:', '~92% placement assistance across clinics, hospitals and Indian dental chains'],
                  ['39+ years of legacy:', '3,000+ alumni practising across India, Middle East, UK, Australia and USA'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>

              <div className="relative rounded-2xl bg-gradient-to-br from-[#6ba872] to-[#002309] p-8 text-center overflow-hidden mt-4">
                <div className="absolute top-3 right-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
                <div className="absolute bottom-3 left-4 w-12 h-12 rounded-full bg-white/10 pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  Ready to Apply for BDS 2026?
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  100 DCI-approved BDS seats. Govt. norm fees. NEET-UG ranks accepted through Tamil
                  Nadu state counselling. Speak to our admissions team for personalised guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                  <a href="/admissions/bds/" className="bg-white text-[#006837] font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    BDS Admission Page →
                  </a>
                  <a href="tel:+919345855001" className="border border-white/50 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors">
                    Call +91 93458 55001
                  </a>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-sm pr-4">{faq.question}</span>
                      <div className="w-6 h-6 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                        {openFaq === i ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[#006837]" />
                        ) : (
                          <span className="text-[#006837] text-base font-bold leading-none">&times;</span>
                        )}
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 faq-answer">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Author */}
            <div className="border border-gray-200 rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Written By</p>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#006837] font-bold text-lg">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">JKKN Dental Admissions Team</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    The admissions and academic-advisory team at JKKN Dental College &amp;
                    Hospital, Komarapalayam — DCI-approved and affiliated to The Tamil Nadu Dr.
                    M.G.R. Medical University, Chennai. We publish evidence-based admission and
                    career guidance for BDS and MDS aspirants across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-500 text-sm font-medium">Tags:</span>
                {['BDS', 'Dental Admission', 'NEET-UG 2026', 'Tamil Nadu', 'JKKN Dental'].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block" ref={sidebarRef}>
            <div
              ref={sidebarContentRef}
              className="space-y-5"
              style={
                sidebarState === 'fixed'
                  ? { position: 'fixed', top: FIXED_TOP, left: fixedLeft, width: fixedWidth, zIndex: 10 }
                  : sidebarState === 'bottom'
                  ? { position: 'absolute', bottom: 0, right: 0, width: fixedWidth }
                  : {}
              }
            >
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <AlignLeft className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Table of Contents</span>
                </div>
                <nav className="space-y-0.5">
                  {tocItems.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
                        activeSection === item.id ? 'text-[#006837] font-semibold' : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {i + 1}. {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="bg-[#FBFBEE] border border-[#7cb983]/40 rounded-xl p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-600 text-xs font-bold uppercase tracking-wide">Open</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">BDS Admission 2026</h4>
                <p className="text-gray-500 text-xs mb-4">100 DCI-approved Seats — Govt. norm fees at JKKN Dental College, Komarapalayam</p>
                <a href="/admissions/bds/" className="block w-full bg-[#006837] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#004d28] transition-colors text-center">
                  Apply / Enquire →
                </a>
                <a href="tel:+919345855001" className="block text-center text-[#006837] text-xs font-medium mt-3">+91 93458 55001</a>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-sm">Admission Alerts</span>
                </div>
                <p className="text-gray-400 text-xs mb-4">NEET cutoffs, counselling dates &amp; fee updates delivered to your inbox.</p>
                <input type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:border-[#006837] transition-colors" />
                <button className="w-full bg-gray-900 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-700 transition-colors">Subscribe</button>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Popular Posts</span>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                      <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-2 py-0.5 rounded-full">{post.category}</span>
                      <p className="text-sm font-semibold text-gray-800 mt-1.5 mb-0.5 group-hover:text-[#006837] transition-colors leading-snug">{post.title}</p>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
