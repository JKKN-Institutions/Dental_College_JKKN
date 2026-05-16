'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Clock, Wrench, ChevronUp, Mail, TrendingUp, AlignLeft } from 'lucide-react';

const tocItems = [
  { id: 'what-is-prostho', label: 'What is MDS Prosthodontics?' },
  { id: 'eligibility', label: 'Eligibility & NEET-MDS Cutoff' },
  { id: 'admission-process', label: 'Admission Process 2026' },
  { id: 'duration-structure', label: 'Duration & Course Structure' },
  { id: 'syllabus', label: 'Syllabus — Core Topics' },
  { id: 'fees', label: 'Fee Structure & Stipend' },
  { id: 'career', label: 'Career & Salary Scope' },
  { id: 'why-jkkn', label: 'Why JKKN for Prosthodontics' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const popularPosts = [
  { category: 'MDS', title: 'MDS Orthodontics 2026: Complete Guide & Career Scope', date: 'May 16, 2026' },
  { category: 'BDS', title: 'BDS Course 2026: Eligibility, Fees, Syllabus & Career', date: 'May 16, 2026' },
  { category: 'Career', title: 'Dental Implants: India Market Outlook for Prosthodontists', date: 'Apr 18, 2026' },
];

const FIXED_TOP = 104;

interface FAQ { question: string; answer: string; }

export default function MdsProsthodonticsClient({ faqs }: { faqs: FAQ[] }) {
  const [activeSection, setActiveSection] = useState('what-is-prostho');
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
      if (gridRef.current) gridAbsBottom = gridRef.current.getBoundingClientRect().bottom + window.scrollY;
    };
    const handleScroll = () => {
      const scrollPos = window.scrollY + FIXED_TOP + 20;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollPos) { setActiveSection(tocItems[i].id); break; }
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
      if (next !== prevState) { prevState = next; setSidebarState(next); }
    };
    const handleResize = () => { measure(); handleScroll(); };
    const raf = requestAnimationFrame(measure);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleResize); };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">MDS Specialisation</span>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm"><Clock className="w-4 h-4" /><span>9 min read</span></div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-sm">1,800 words</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          MDS Prosthodontics 2026: Eligibility, Fees &amp; Career Guide
        </h1>
        <p className="hero-description text-lg text-gray-600 leading-relaxed mb-6 max-w-4xl">
          A complete guide to MDS Prosthodontics &amp; Crown and Bridge — for BDS graduates planning
          a high-impact PG specialisation. Eligibility, NEET-MDS cutoff, 3-year syllabus, fees,
          implant &amp; smile-design career scope, salary and JKKN-specific details.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
            <span className="text-[#006837] font-bold text-sm">JD</span>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">By JKKN Dental Admissions Team</p>
            <p className="text-gray-400 text-xs">Published May 16, 2026 &bull; Updated May 16, 2026</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="w-full rounded-2xl bg-gradient-to-br from-[#6ba872] to-[#002309] flex flex-col items-center justify-center py-16 sm:py-20 gap-3">
          <Wrench className="w-12 h-12 text-white" strokeWidth={1.5} />
          <p className="text-white font-semibold text-lg">MDS Prosthodontics &amp; Crown and Bridge</p>
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
                <strong>MDS Prosthodontics &amp; Crown and Bridge</strong> is a 3-year PG dental
                specialisation focused on replacement and restoration of missing teeth using
                crowns, bridges, dentures, implants and maxillofacial prostheses. Eligibility: BDS
                + completed internship + valid <strong>NEET-MDS</strong> score. JKKN Dental College
                offers <strong>4 DCI-approved seats</strong> per year. Career drivers in 2026:
                dental implants boom, full-mouth rehabilitation, digital smile design and CAD/CAM
                workflows.
              </p>
            </div>

            <section id="what-is-prostho" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is MDS Prosthodontics &amp; Crown and Bridge?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Prosthodontics</strong> is the dental specialisation that focuses on
                diagnosis, treatment planning, rehabilitation and maintenance of oral function,
                comfort, appearance and health of patients with clinical conditions associated with
                missing or deficient teeth and/or oral &amp; maxillofacial tissues — using
                biocompatible prosthetic substitutes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A practising prosthodontist works with: <strong>fixed prostheses</strong> (crowns,
                bridges, veneers, inlays/onlays), <strong>removable prostheses</strong> (partial
                dentures, complete dentures, overdentures), <strong>implant-supported
                prostheses</strong> (single tooth implants, all-on-4, all-on-6, implant
                overdentures), and <strong>maxillofacial prostheses</strong> (obturators, facial
                prostheses for cancer rehab patients). Modern practice increasingly relies on{' '}
                <strong>CAD/CAM digital workflows</strong>, intraoral scanners, milling machines
                and 3D-printed restorations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With India&apos;s ageing population and the explosive growth of dental implants and
                aesthetic dentistry, prosthodontics is consistently ranked among the
                <strong> highest-earning dental specialisations</strong>.
              </p>
            </section>

            <section id="eligibility" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Eligibility &amp; NEET-MDS Cutoff 2026</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                MDS admission across India is conducted entirely through <strong>NEET-MDS</strong>.
                JKKN follows the eligibility framework set by DCI and the Selection Committee,
                Directorate of Medical Education, Tamil Nadu.
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-44">Criterion</th>
                    <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Requirement</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Qualifying degree', 'BDS from a DCI-recognised institution'],
                      ['Internship', '1-year compulsory rotational internship before 31 Mar 2026'],
                      ['Dental Council registration', 'Permanent State Dental Council registration mandatory'],
                      ['Entrance test', 'Valid NEET-MDS 2026 score (NBE-conducted)'],
                      ['Qualifying percentile', '50th — General/EWS; 40th — SC/ST/OBC; 45th — PwD'],
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
                  <strong className="text-amber-700">Note:</strong> Prosthodontics is among the
                  most sought-after MDS branches in Tamil Nadu — closing Government Quota ranks
                  typically fall in the top 6,000–10,000 NEET-MDS All-India ranks. Management and
                  NRI seats accept higher ranks. Always refer to <em>tnmedicalselection.net</em>{' '}
                  for current-year cutoffs.
                </p>
              </div>
            </section>

            <section id="admission-process" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Admission Process 2026 — Step-by-Step</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Admission to the 4 MDS Prosthodontics seats at JKKN is conducted through Tamil Nadu
                PG dental counselling:
              </p>
              <div className="space-y-5 mb-5">
                {[
                  { num: 1, title: 'Appear for NEET-MDS 2026', desc: 'Apply on the NBE portal and attempt NEET-MDS. Result publishes percentile and All India Rank for state allotment.' },
                  { num: 2, title: 'Register for TN PG Counselling', desc: 'Register on tnmedicalselection.net. Upload BDS marksheet, internship certificate, DCI registration, NEET-MDS scorecard, ID, community and nativity proofs.' },
                  { num: 3, title: 'Choice Filling — Lock JKKN', desc: 'Add JKKN Dental College & Hospital under MDS Prosthodontics, Crown and Bridge in your preference list and lock before deadline.' },
                  { num: 4, title: 'Allotment Rounds', desc: 'Round 1, Round 2, Mop-up and Stray Vacancy. Rank-cum-preference allotment. Download allotment order online.' },
                  { num: 5, title: 'Document Verification at Institution', desc: 'Report to JKKN with originals + first-year fee (DD/online).' },
                  { num: 6, title: 'Admission Confirmation', desc: 'Verification + fee acknowledgement confirms PG admission. Department orientation begins.' },
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Course Duration &amp; Structure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MDS Prosthodontics is a <strong>3-year full-time program</strong> governed by DCI
                PG Regulations and the TNMGRMU syllabus.
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Year 1 — Pre-clinical & basic sciences:', 'tooth preparation exercises, occlusion, biomaterials, applied anatomy, removable & fixed prosthodontics fundamentals'],
                  ['Year 2 — Clinical practice & dissertation:', 'complete denture, crown & bridge, RPD, implant prosthodontics, library + clinical dissertation initiation'],
                  ['Year 3 — Advanced cases & exit exam:', 'full-mouth rehabilitation, all-on-4, maxillofacial prosthetics, dissertation defence, final MDS exam'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="syllabus" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Syllabus — Core Topics</h2>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-32">Paper</th>
                    <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Major Topics</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Paper I', 'Applied basic sciences: anatomy of head & neck, oral physiology, occlusion, biomaterials, biostatistics, research methodology'],
                      ['Paper II', 'Removable prosthodontics: complete dentures, partial dentures, overdentures, geriatric prosthodontics'],
                      ['Paper III', 'Fixed prosthodontics: crowns, bridges, veneers, inlays/onlays, aesthetic dentistry, maxillofacial prosthetics'],
                      ['Paper IV (Essay)', 'Recent advances: implant prosthodontics, CAD/CAM, digital workflow, all-on-4/6, 3D printing in dentistry, AI in smile design'],
                      ['Practical & Clinical', 'Tooth preparation, impression techniques, model analysis, clinical case presentation, dissertation defence, viva'],
                    ].map(([p, t], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{p}</td>
                        <td className="px-4 py-3 text-gray-600">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="fees" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fee Structure &amp; Stipend</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MDS Prosthodontics fees at JKKN are levied as per <strong>Government of Tamil Nadu
                norms</strong>, revised annually. Three quotas:
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Government Quota:', 'most affordable; allotted through TN PG counselling'],
                  ['Management Quota:', 'self-financing seats under regulatory cap'],
                  ['NRI Quota:', 'Non-Resident Indian seats — separate category'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Current exact fees published at{' '}
                <a href="/fee-structure/" className="text-[#006837] font-semibold hover:underline">JKKN Fee Structure page</a>.
                PG students receive a <strong>Tamil Nadu government stipend</strong> (revised
                periodically) and are eligible for SC/ST/OBC scholarship schemes plus education
                loans through bank tie-ups.
              </p>
            </section>

            <section id="career" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Career &amp; Salary After MDS Prosthodontics 2026</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prosthodontists are in high demand — driven by India&apos;s ageing population,
                rising disposable income, dental tourism and rapid implant adoption (estimated 30%+
                annual growth in implant procedures across urban and Tier-2 India).
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Implant Prosthodontist:', 'specialise in dental implants — single tooth to full-arch rehabilitation, all-on-4/6'],
                  ['Smile Design / Aesthetic Practice:', 'veneers, full-mouth rehab, digital smile design, dental tourism segment'],
                  ['Maxillofacial Prosthodontist:', 'oncology rehabilitation, obturators, facial prostheses (high-impact hospital roles)'],
                  ['Corporate Dental Chains:', 'Clove Dental, Apollo White, FMS, Sabka Dentist — consultant prosthodontist roles'],
                  ['Dental College Faculty:', 'Senior Lecturer → Reader → Professor pathway'],
                  ['CAD/CAM & Digital Dentistry:', 'milling-centre consultancy, intraoral-scanner workflow training, dental software companies'],
                  ['Dental Industry:', 'product specialists at implant companies (Nobel Biocare, Straumann, Adin, Osstem), clinical advisors'],
                  ['Overseas Practice:', 'after credential exams — Middle East (DHA/MOH/HAAD), UK (ORE), Australia (ADC)'],
                ].map(([k, v]) => (
                  <li key={k as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{k}</strong> {v}</span>
                  </li>
                ))}
              </ul>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead><tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Role</th>
                    <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Starting Income</th>
                    <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Experienced (5+ yrs)</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Consultant Prosthodontist (clinic)', '₹70,000 – ₹1.3L / month', '₹2.5L – ₹5L+ / month'],
                      ['Implant Prosthodontist (premium)', '₹1L – ₹1.5L / month', '₹3L – ₹8L+ / month'],
                      ['Own Specialty Practice (urban)', 'Variable', '₹4L – ₹10L+ / month'],
                      ['Corporate Dental Chain', '₹65,000 – ₹1.1L / month', '₹1.8L – ₹3.5L'],
                      ['Dental College Faculty (Sr. Lecturer)', '₹57,700 – ₹75,000 + DA/HRA', '₹1.5L – ₹2.5L'],
                      ['Implant Industry Consultant', '₹80,000 – ₹1.3L', '₹2L – ₹4L'],
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
            </section>

            <section id="why-jkkn" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose JKKN for MDS Prosthodontics</h2>
              <ul className="space-y-2.5 mb-6">
                {[
                  ['DCI-approved 4 PG seats:', 'in Prosthodontics, Crown and Bridge — affiliated to TN Dr. MGR Medical University'],
                  ['High clinical case volume:', '200+ dental chairs, 500+ daily patients with strong prostho case mix — denture, bridge, implant rehab'],
                  ['Implant centre exposure:', 'in-house implant placement workflow + multi-disciplinary collaboration with Periodontics & Oral Surgery'],
                  ['Digital dentistry training:', 'CAD/CAM, intraoral scanner workflow exposure, 3D imaging integration'],
                  ['Maxillofacial cases:', 'cancer-rehab obturator and facial prostheses cases through hospital referral network'],
                  ['Research support:', 'institutional ethics committee, dissertation mentorship, publication support'],
                  ['Strategic location:', 'NH-544 corridor — patients from Erode, Salem, Namakkal, Tiruppur, Coimbatore'],
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
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Apply for MDS Prosthodontics 2026</h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">4 DCI-approved seats. NEET-MDS through TN counselling. Talk to our PG admissions team.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                  <a href="/admissions/mds/" className="bg-white text-[#006837] font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">MDS Admission Page →</a>
                  <a href="tel:+919345855001" className="border border-white/50 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors">Call +91 93458 55001</a>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-800 text-sm pr-4">{faq.question}</span>
                      <div className="w-6 h-6 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                        {openFaq === i ? <ChevronUp className="w-3.5 h-3.5 text-[#006837]" /> : <span className="text-[#006837] text-base font-bold leading-none">&times;</span>}
                      </div>
                    </button>
                    {openFaq === i && <div className="px-5 pb-4 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 faq-answer">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </section>

            <div className="border border-gray-200 rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Written By</p>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#FBFBEE] flex items-center justify-center flex-shrink-0"><span className="text-[#006837] font-bold text-lg">JD</span></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">JKKN Dental Admissions Team</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">PG admissions and academic-advisory team at JKKN Dental College &amp; Hospital, Komarapalayam — DCI-approved, affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-500 text-sm font-medium">Tags:</span>
                {['MDS', 'Prosthodontics', 'NEET-MDS', 'Implant Dentistry', 'JKKN Dental'].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </main>

          <aside className="hidden lg:block" ref={sidebarRef}>
            <div ref={sidebarContentRef} className="space-y-5" style={
              sidebarState === 'fixed' ? { position: 'fixed', top: FIXED_TOP, left: fixedLeft, width: fixedWidth, zIndex: 10 }
              : sidebarState === 'bottom' ? { position: 'absolute', bottom: 0, right: 0, width: fixedWidth } : {}
            }>
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4"><AlignLeft className="w-4 h-4 text-[#006837]" /><span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Table of Contents</span></div>
                <nav className="space-y-0.5">
                  {tocItems.map((item, i) => (
                    <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${activeSection === item.id ? 'text-[#006837] font-semibold' : 'text-gray-500 hover:text-gray-800'}`}>
                      {i + 1}. {item.label}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="bg-[#FBFBEE] border border-[#7cb983]/40 rounded-xl p-5">
                <div className="flex items-center gap-1.5 mb-2"><span className="w-2 h-2 rounded-full bg-green-500" /><span className="text-green-600 text-xs font-bold uppercase tracking-wide">Open</span></div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">MDS Prosthodontics 2026</h4>
                <p className="text-gray-500 text-xs mb-4">4 DCI-approved PG seats at JKKN Dental College, Komarapalayam</p>
                <a href="/admissions/mds/" className="block w-full bg-[#006837] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#004d28] transition-colors text-center">Apply / Enquire →</a>
                <a href="tel:+919345855001" className="block text-center text-[#006837] text-xs font-medium mt-3">+91 93458 55001</a>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1"><Mail className="w-4 h-4 text-[#006837]" /><span className="font-bold text-gray-800 text-sm">PG Admission Alerts</span></div>
                <p className="text-gray-400 text-xs mb-4">NEET-MDS cutoffs, counselling dates &amp; PG fee updates.</p>
                <input type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:border-[#006837] transition-colors" />
                <button className="w-full bg-gray-900 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-700 transition-colors">Subscribe</button>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4"><TrendingUp className="w-4 h-4 text-[#006837]" /><span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Popular Posts</span></div>
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
