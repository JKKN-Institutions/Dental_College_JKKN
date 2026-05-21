'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Clock,
  Smile,
  ChevronUp,
  Mail,
  TrendingUp,
  AlignLeft,
} from 'lucide-react';

const tocItems = [
  { id: 'what-is-mds-ortho', label: 'What is MDS Orthodontics?' },
  { id: 'eligibility', label: 'Eligibility & NEET-MDS Cutoff' },
  { id: 'admission-process', label: 'Admission Process 2026' },
  { id: 'duration-structure', label: 'Duration & Course Structure' },
  { id: 'syllabus', label: 'MDS Orthodontics Syllabus' },
  { id: 'fees', label: 'Fee Structure & Scholarships' },
  { id: 'career', label: 'Career & Salary Scope' },
  { id: 'why-jkkn', label: 'Why JKKN for MDS Ortho' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const popularPosts = [
  {
    category: 'BDS',
    title: 'BDS Course 2026: Eligibility, Fees, Syllabus & Career — Complete Guide',
    date: 'May 16, 2026',
  },
  {
    category: 'MDS',
    title: 'NEET-MDS 2026: Tamil Nadu Counselling Process Explained',
    date: 'May 02, 2026',
  },
  {
    category: 'Career',
    title: 'Clear Aligners vs Braces: Career Outlook for Indian Orthodontists',
    date: 'Apr 28, 2026',
  },
];

const FIXED_TOP = 104;

interface FAQ {
  question: string;
  answer: string;
}

export default function MdsOrthodonticsClient({ faqs }: { faqs: FAQ[] }) {
  const [activeSection, setActiveSection] = useState('what-is-mds-ortho');
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
            MDS Specialisation
          </span>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>10 min read</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-sm">1,950 words</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          MDS Orthodontics 2026: Eligibility, Fees, Syllabus &amp; Career Guide
        </h1>

        <p className="hero-description text-lg text-gray-600 leading-relaxed mb-6 max-w-4xl">
          A complete, structured guide to MDS Orthodontics &amp; Dentofacial Orthopedics — for BDS
          graduates, working dentists planning specialisation and parents helping their child choose
          the right PG. Eligibility, NEET-MDS cutoff, 3-year course structure, fees, scholarships,
          career scope, salary and what makes JKKN Dental College &amp; Hospital, Komarapalayam a
          strong pick.
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
          <Smile className="w-12 h-12 text-white" strokeWidth={1.5} />
          <p className="text-white font-semibold text-lg">MDS Orthodontics &amp; Dentofacial Orthopedics</p>
          <p className="text-white/70 text-sm">JKKN Dental College &amp; Hospital — 4 PG Seats</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 relative" ref={gridRef}>
          <main className="min-w-0">

            <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-5 mb-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#006837] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#006837] font-bold text-[10px] leading-none">i</span>
                </div>
                <span className="text-[#006837] font-bold text-xs uppercase tracking-wider">Quick Answer</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>MDS Orthodontics &amp; Dentofacial Orthopedics</strong> is a 3-year
                postgraduate dental specialisation focused on diagnosis, prevention and correction
                of malocclusion, misaligned teeth and dentofacial deformities using braces, clear
                aligners, functional appliances and orthognathic-surgery coordination. Eligibility:
                BDS + completed internship + valid <strong>NEET-MDS</strong> score. JKKN Dental
                College offers <strong>4 DCI-approved MDS Ortho seats</strong> annually, affiliated
                to <strong>TN Dr. MGR Medical University</strong>. Among all dental
                specialisations, MDS Ortho is consistently the highest-paying and most-in-demand
                career in 2026.
              </p>
            </div>

            <section id="what-is-mds-ortho" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What is MDS Orthodontics &amp; Dentofacial Orthopedics?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Orthodontics</strong> is the dental specialisation that diagnoses, prevents,
                intercepts and corrects malocclusion — abnormal alignment of teeth and jaws.
                <strong> Dentofacial Orthopedics</strong> extends the same scope to growing
                children and adolescents, where appliances guide jaw growth and craniofacial
                development. Together they form one of the <strong>9 specialty branches</strong>{' '}
                recognised by the Dental Council of India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A practising orthodontist works with: fixed appliances (metal/ceramic braces,
                self-ligating systems), removable appliances, functional appliances (Twin Block,
                Frankel), clear aligner therapy (Invisalign, ClearPath, 3M Clarity), Temporary
                Anchorage Devices (TADs/mini-implants), and surgical orthodontics in coordination
                with maxillofacial surgeons.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With rising awareness of facial aesthetics, social-media-driven demand for
                &ldquo;smile makeovers&rdquo;, and a fast-growing adult-orthodontics market (clear
                aligners alone are projected to be a multi-thousand-crore segment in India by 2030),
                MDS Orthodontics is widely considered the most lucrative dental specialisation in
                2026.
              </p>
            </section>

            <section id="eligibility" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Eligibility &amp; NEET-MDS Cutoff 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                MDS admission across India is conducted entirely through <strong>NEET-MDS</strong>,
                the single national entrance exam for postgraduate dental admission. JKKN Dental
                College follows the eligibility framework set by DCI and the Selection Committee,
                DME, Tamil Nadu.
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-44">Criterion</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Qualifying degree', 'BDS from a DCI-recognised institution'],
                      ['Internship', '1-year compulsory rotational internship completed before 31 Mar 2026'],
                      ['Dental Council registration', 'Permanent registration with State Dental Council mandatory at admission'],
                      ['Entrance test', 'Valid NEET-MDS 2026 score (NBE-conducted)'],
                      ['Qualifying percentile', '50th — General/EWS; 40th — SC/ST/OBC; 45th — PwD (General)'],
                      ['Nationality', 'Indian / NRI / OCI as per category'],
                    ].map(([k, v], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{k}</td>
                        <td className="px-4 py-3 text-gray-600">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Reality check:</strong> Although the qualifying
                  percentile is 50th, Orthodontics is one of the most competitive MDS branches.
                  Closing ranks at private Tamil Nadu dental colleges for Government Quota Ortho
                  seats are typically within the <strong>top 5,000 NEET-MDS All-India ranks</strong>.
                  Management and NRI seats accept higher ranks. Always verify against the latest
                  TN Selection Committee bulletin at <em>tnmedicalselection.net</em>.
                </p>
              </div>
            </section>

            <section id="admission-process" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                MDS Orthodontics Admission Process 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Admission for the 4 MDS Ortho seats at JKKN is conducted through Tamil Nadu PG
                Dental counselling. Step-by-step:
              </p>
              <div className="space-y-5 mb-5">
                {[
                  { num: 1, title: 'Appear for NEET-MDS 2026', desc: 'Apply on the NBE portal and attempt NEET-MDS. The result publishes the percentile and All India Rank used for state allotment.' },
                  { num: 2, title: 'Register for TN PG Counselling', desc: 'Register on tnmedicalselection.net within the announced window. Upload BDS marksheet, internship completion certificate, DCI registration, NEET-MDS scorecard, ID, community and nativity proofs.' },
                  { num: 3, title: 'Choice Filling — Lock JKKN MDS Orthodontics', desc: 'Add JKKN Dental College & Hospital under MDS Orthodontics & Dentofacial Orthopedics in your preference order. Lock choices before the deadline.' },
                  { num: 4, title: 'Allotment Rounds', desc: 'Round 1, Round 2, Mop-up and Stray Vacancy. Allotment is purely rank-cum-preference. Allotment order downloaded online.' },
                  { num: 5, title: 'Document Verification at Institution', desc: 'Report to JKKN with originals (BDS, internship, DCI registration), demand draft / online fee for first year, and category documents (if applicable).' },
                  { num: 6, title: 'Admission Confirmation', desc: 'Verification + fee acknowledgement confirms PG admission. Departmental orientation and clinical posting begin per the academic calendar.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">{num}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="duration-structure" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Course Duration &amp; Structure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MDS Orthodontics is a <strong>3-year full-time postgraduate program</strong>
                governed by the <strong>DCI PG Regulations</strong> and the syllabus of The Tamil
                Nadu Dr. M.G.R. Medical University. The course blends pre-clinical training,
                clinical case management, library dissertation work and academic teaching.
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Year 1 — Pre-clinical & foundational:', 'wire bending, typodont exercises, growth & development, cephalometrics, biomechanics, applied anatomy'],
                  ['Year 2 — Clinical practice & dissertation work:', 'fixed appliance therapy on patients, retention, removable appliances, library + clinical dissertation initiation'],
                  ['Year 3 — Advanced clinical & exit examination:', 'complex case finishing, dentofacial orthopedics, surgical ortho cases, dissertation submission, MDS final exam (theory, clinical, viva, OSCE)'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed text-sm">
                PG students participate in journal clubs, seminars, monthly case-presentations,
                interdepartmental rotations (Maxillofacial Surgery, Periodontics, Prosthodontics)
                and rural outreach orthodontic screening camps.
              </p>
            </section>

            <section id="syllabus" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                MDS Orthodontics Syllabus — Core Topics
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The MDS Ortho syllabus is structured around four examination papers (per TNMGRMU):
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-32">Paper</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Major Topics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Paper I', 'Applied basic sciences: anatomy of head & neck, embryology, growth & development of face, genetics, biostatistics, research methodology'],
                      ['Paper II', 'Aetiology of malocclusion, classification, diagnosis, cephalometrics, model analysis, treatment planning, biomechanics, anchorage'],
                      ['Paper III', 'Appliance therapy: removable, fixed (Begg, Edgewise, MBT, Roth, self-ligating), functional, dentofacial orthopedics, retention'],
                      ['Paper IV (Essay)', 'Recent advances: clear aligners, TADs/mini-implants, lingual orthodontics, surgical orthodontics, 3D imaging/CBCT, digital ortho workflow, AI in orthodontics'],
                      ['Practical & Clinical', 'Pre-clinical wirebending, typodont, cephalometric tracing, model analysis, clinical case presentation, dissertation defence, viva'],
                    ].map(([p, t], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{p}</td>
                        <td className="px-4 py-3 text-gray-600">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                The complete subject-wise syllabus is published on the JKKN academics portal under{' '}
                <em>MDS Orthodontics Syllabus &mdash; Statutes Pertaining to Academic Departments</em>.
              </p>
            </section>

            <section id="fees" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                MDS Orthodontics Fee Structure &amp; Scholarships
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MDS fees at JKKN Dental College are levied as per <strong>Government of Tamil Nadu
                norms</strong>, with annual revisions. PG dental fees are notably higher than BDS
                because of the specialised clinical training and faculty intensity. The three
                categories:
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Government Quota:', 'most affordable; allotted through TN PG dental counselling — top-rank candidates'],
                  ['Management Quota:', 'self-financing seats; fee fixed by institution within DCI/state regulatory cap'],
                  ['NRI Quota:', 'Non-Resident Indian seats — separate fee category as per DCI'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hostel, mess and transport are charged separately. Current-year exact figures are
                published on the official{' '}
                <a href="/fees-structure/" className="text-[#006837] font-semibold hover:underline">
                  JKKN Fee Structure page
                </a>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Financial support options:</strong></p>
              <ul className="space-y-2.5">
                {[
                  ['PG Stipend:', 'Tamil Nadu government MDS stipend (revised periodically) — typically ₹35,000–₹55,000/month range as per latest GO'],
                  ['SC/ST/OBC scholarships:', 'central + state tuition fee reimbursement schemes for eligible PG candidates'],
                  ['Education loans:', 'tie-ups with nationalised banks for collateral-friendly PG education loans'],
                  ['JKKN merit incentives:', 'institution-level academic excellence support for top-ranking PGs'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="career" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Career &amp; Salary After MDS Orthodontics 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Orthodontics is widely regarded as the most lucrative dental specialisation. A
                qualified MDS Orthodontist treats children, adolescents and adults — and the
                explosion of adult clear-aligner therapy in metros and Tier-2 cities has tripled
                demand over the last decade.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">Career options:</p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Independent Ortho Practice:', 'open your own orthodontic clinic or a smile-design centre — highest long-term earning potential'],
                  ['Consultant Orthodontist:', 'visiting consultant at multiple multi-specialty clinics, hospitals and dental chains'],
                  ['Corporate Dental Chains:', 'Clove Dental, Apollo White Dental, FMS Dental, Sabka Dentist — full-time / per-case orthodontist roles'],
                  ['Aligner-Tech Companies:', 'Invisalign (Align Technology), ClearPath, 3M Clarity, SmileDirectClub-type platforms hire MDS Ortho consultants and clinical advisors'],
                  ['Dental College Faculty:', 'Senior Lecturer → Reader → Professor in DCI-approved colleges; UGC pay scales applicable'],
                  ['Public Sector:', 'TNPSC Dental Assistant Surgeon / Dental Surgeon (Specialist) posts; defence dental corps; Railways; ESI'],
                  ['Overseas Practice:', 'after credential exams — Middle East (DHA, MOH, HAAD/DOH), UK (ORE), Australia (ADC), USA pathway'],
                  ['Academics & Research:', 'PhD in Orthodontics, research positions, dental product development for ortho biomaterials & AI ortho software'],
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
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Role</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Starting Income</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Experienced (5+ yrs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Consultant Orthodontist (clinic)', '₹80,000 – ₹1.5L / month', '₹3L – ₹6L+ / month'],
                      ['Corporate Dental Chain Ortho', '₹70,000 – ₹1.2L / month', '₹2L – ₹4L / month'],
                      ['Own Ortho Practice (urban)', 'Variable', '₹4L – ₹10L+ / month'],
                      ['Dental College Faculty (Sr. Lecturer)', '₹57,700 – ₹75,000 + DA/HRA', '₹1.5L – ₹2.5L'],
                      ['Aligner-Tech Consultant', '₹90,000 – ₹1.5L', '₹2.5L – ₹5L'],
                      ['Govt. Dental Surgeon (Specialist)', '₹85,000 – ₹1.1L', '₹1.5L – ₹2L+'],
                    ].map(([r, s, e], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{r}</td>
                        <td className="px-4 py-3 text-gray-600">{s}</td>
                        <td className="px-4 py-3 text-gray-600">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Note:</strong> Figures are realistic
                  Indian-market estimates for MDS Orthodontists in 2026. Private practice income
                  depends on city, location, case mix (aligners and complex cases command premium
                  fees) and practice maturity.
                </p>
              </div>
            </section>

            <section id="why-jkkn" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Choose JKKN for MDS Orthodontics
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                JKKN Dental College &amp; Hospital, Komarapalayam houses one of Tamil Nadu&apos;s
                established Department of Orthodontics &amp; Dentofacial Orthopedics. What PG
                candidates and parents look for:
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  ['DCI-approved 4 PG seats:', 'in Orthodontics & Dentofacial Orthopedics, affiliated to TN Dr. MGR Medical University'],
                  ['High-volume clinical exposure:', '200+ dental chairs, 500+ daily patients — strong ortho-case pipeline including paediatric, adolescent and adult cases'],
                  ['Multi-disciplinary integration:', 'rotation with Maxillofacial Surgery, Prosthodontics, Periodontics for surgical ortho and full-mouth rehabilitation cases'],
                  ['Modern technology:', 'CBCT, OPG, lateral cephalogram, digital model scanner, indirect bonding setup, aligner workflow training'],
                  ['Research & dissertation support:', 'institutional ethics committee, research methodology training, publication mentorship'],
                  ['Strategic west-TN location:', 'NH-544 corridor — patient catchment from Erode, Salem, Namakkal, Tiruppur, Coimbatore'],
                  ['Career placement support:', 'alumni network across India, UAE, UK, Australia for clinical & academic opportunities'],
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
                  Apply for MDS Orthodontics 2026
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  4 DCI-approved seats. NEET-MDS based through TN Selection Committee. Speak to our
                  PG admissions team for category-wise eligibility, fee categories and dissertation
                  ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                  <a href="/admissions/mds/" className="bg-white text-[#006837] font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    MDS Admission Page →
                  </a>
                  <a href="tel:+919345855001" className="border border-white/50 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors">
                    Call +91 93458 55001
                  </a>
                </div>
              </div>
            </section>

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

            <div className="border border-gray-200 rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Written By</p>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#006837] font-bold text-lg">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">JKKN Dental Admissions Team</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    The PG admissions and academic-advisory team at JKKN Dental College &amp;
                    Hospital, Komarapalayam — DCI-approved, affiliated to The Tamil Nadu Dr. M.G.R.
                    Medical University, Chennai. We publish evidence-based admission and career
                    guidance for BDS and MDS aspirants across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-500 text-sm font-medium">Tags:</span>
                {['MDS', 'Orthodontics', 'NEET-MDS', 'PG Dental', 'JKKN Dental'].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </main>

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
                <h4 className="font-bold text-gray-900 text-sm mb-1">MDS Orthodontics 2026</h4>
                <p className="text-gray-500 text-xs mb-4">4 DCI-approved PG seats — TN Govt. norm fees at JKKN Dental College</p>
                <a href="/admissions/mds/" className="block w-full bg-[#006837] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#004d28] transition-colors text-center">
                  Apply / Enquire →
                </a>
                <a href="tel:+919345855001" className="block text-center text-[#006837] text-xs font-medium mt-3">+91 93458 55001</a>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-sm">PG Admission Alerts</span>
                </div>
                <p className="text-gray-400 text-xs mb-4">NEET-MDS cutoffs, counselling dates &amp; PG fee updates delivered to your inbox.</p>
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
