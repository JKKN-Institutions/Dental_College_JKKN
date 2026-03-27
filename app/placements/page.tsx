import Link from 'next/link';
import { GraduationCap, Briefcase, Hospital, Globe, Microscope, Users, Phone, Mail, MapPin, Building2 } from 'lucide-react';
import { ScrollToTop } from '@/components/ScrollToTop';
import { collegeFacts } from '@/data/collegeFacts';

export default function PlacementsPage() {

  const heroStats = [
    { value: `${collegeFacts.placementRate}%`, label: 'PLACEMENT RATE' },
    { value: `${collegeFacts.alumniCount.toLocaleString()}+`, label: 'ALUMNI' },
    { value: `${collegeFacts.partnerships}+`, label: 'PARTNERS' },
    { value: '38+', label: 'BATCHES' },
  ];

  const highlightStats = [
    { value: `${collegeFacts.placementRate}%`, label: 'PLACEMENT RATE', desc: 'Consistent placement assistance across BDS & MDS batches' },
    { value: `${collegeFacts.alumniCount.toLocaleString()}+`, label: 'ALUMNI WORLDWIDE', desc: 'Graduates serving across India and internationally' },
    { value: `${collegeFacts.partnerships}+`, label: 'RECRUITING PARTNERS', desc: 'Corporate chains, hospitals, and government institutions' },
    { value: '8-10', label: 'LPA HIGHEST', desc: 'Top packages from corporate dental chains [UPDATE]' },
  ];

  const processSteps = [
    { step: 1, title: 'Registration & Profile Building', desc: 'Students register with the CDC and build professional profiles including academic records, clinical experience, and career preferences.' },
    { step: 2, title: 'Resume Workshop & Skill Development', desc: 'CDC conducts resume writing workshops, soft skills training, and professional development sessions to prepare students for the job market.' },
    { step: 3, title: 'Company Connect & Campus Drives', desc: 'CDC organises campus recruitment drives, industry interactions, and connects students with 25+ recruiting partners including corporate dental chains and hospitals.' },
    { step: 4, title: 'Interview Preparation & Mock Sessions', desc: 'Dedicated interview preparation with mock interviews, group discussions, and clinical case presentations to build confidence and readiness.' },
    { step: 5, title: 'Offer Facilitation & Joining Support', desc: 'CDC facilitates offer letters, salary negotiations, and provides joining support including relocation guidance for outstation and international placements.' },
  ];

  const nationalRecruiters = [
    { name: 'Apollo Dental', sector: 'Corporate Dental Chain' },
    { name: 'Clove Dental', sector: 'Corporate Dental Chain' },
    { name: 'Sabka Dentist', sector: 'Corporate Dental Chain' },
    { name: 'MyDentist', sector: 'Corporate Dental Chain' },
    { name: 'Govt. PHCs', sector: 'Government Healthcare' },
    { name: 'District Hospitals', sector: 'Government Healthcare' },
    { name: 'Manipal Hospitals', sector: 'Multi-Specialty Hospital' },
    { name: 'Fortis Healthcare', sector: 'Multi-Specialty Hospital' },
    { name: 'Apollo Hospitals', sector: 'Multi-Specialty Hospital' },
    { name: 'ESIC Hospitals', sector: 'Government Healthcare' },
  ];

  const internationalRecruiters = [
    { name: 'NHS UK', sector: 'National Health Service, United Kingdom' },
    { name: 'Cleveland Clinic Abu Dhabi', sector: 'Multi-Specialty Hospital, UAE' },
    { name: 'Saudi Ministry of Health', sector: 'Government Healthcare, Saudi Arabia' },
    { name: 'Singapore Dental Clinics', sector: 'Private Practice, Singapore' },
  ];

  const trendData = [
    { batch: '2022-23', rate: '90%+', recruiters: 'Apollo Dental, Clove Dental, Govt. PHCs', international: '3 placed in NHS UK', higherStudies: '15+ cleared NEET MDS' },
    { batch: '2023-24', rate: '91%+', recruiters: 'Apollo, Fortis, Sabka Dentist, ESIC', international: '5 placed internationally', higherStudies: '18+ cleared NEET MDS' },
    { batch: '2024-25', rate: '92%+', recruiters: 'Clove Dental, Manipal, District Hospitals', international: '4 placed in UAE & UK', higherStudies: '20+ cleared NEET MDS' },
  ];

  const careerPathways = [
    { icon: <Briefcase className="w-7 h-7 text-[#006837]" />, title: 'Private Practice', desc: 'Start your own dental clinic or join an established practice. JKKN alumni run successful clinics across Tamil Nadu and beyond.' },
    { icon: <Hospital className="w-7 h-7 text-[#006837]" />, title: 'Hospital Dentistry', desc: 'Work in multi-specialty hospitals, corporate dental chains, or government hospitals as a dental surgeon or specialist.' },
    { icon: <GraduationCap className="w-7 h-7 text-[#006837]" />, title: 'Higher Studies (MDS)', desc: 'Pursue MDS in 5 specialisations at JKKN or other top institutions. Strong NEET MDS coaching support provided.' },
    { icon: <Globe className="w-7 h-7 text-[#006837]" />, title: 'International Opportunities', desc: 'Work in the UK (NHS), UAE, Saudi Arabia, or Singapore. CDC assists with licensing exam preparation and placement.' },
    { icon: <Microscope className="w-7 h-7 text-[#006837]" />, title: 'Research & Academia', desc: 'Join dental research institutions or teaching colleges. 50+ faculty publications provide a strong research foundation.' },
    { icon: <Users className="w-7 h-7 text-[#006837]" />, title: 'Public Health Dentistry', desc: 'Serve communities through government PHCs, public health programmes, and dental outreach initiatives across India.' },
  ];

  const testimonials = [
    { quote: 'The CDC at JKKN connected me with Apollo Dental during my final year. The placement process was smooth — from resume building to interview prep, every step was guided. I started my career with confidence.', name: 'Priya Dharshini S.', role: 'BDS 2024 \u2022 Apollo Dental, Chennai [UPDATE \u2014 verify]' },
    { quote: 'After completing MDS in Orthodontics at JKKN, the research exposure and clinical training made me stand out. I was placed at a leading hospital within weeks of completing my programme.', name: 'Karthik Raja M.', role: 'MDS Orthodontics 2023 \u2022 Fortis Healthcare [UPDATE \u2014 verify]' },
    { quote: 'JKKN\u2019s international placement support helped me prepare for the UK licensing exam. Today, I work at NHS and credit my foundation to the clinical exposure I received at JKKN\u2019s 200+ chair hospital.', name: 'Sangeetha R.', role: 'BDS 2022 \u2022 NHS UK [UPDATE \u2014 verify]' },
  ];

  const faqs = [
    { q: 'What is the placement rate at JKKN Dental College?', a: `JKKN Dental College achieves a ${collegeFacts.placementRate}%+ placement assistance rate. The Career Development Centre (CDC) provides comprehensive support including resume building, interview preparation, and direct company connections for BDS and MDS graduates.` },
    { q: 'Which companies hire from JKKN Dental College?', a: 'Top recruiters include Apollo Dental, Clove Dental, Sabka Dentist, MyDentist, Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, and government PHCs & district hospitals. International recruiters include NHS UK, Cleveland Clinic Abu Dhabi, and Saudi MOH.' },
    { q: 'What is the salary after BDS from JKKN Dental College?', a: 'BDS graduates from JKKN Dental College typically receive packages ranging from 3-5 LPA for entry-level positions. Top performers and those placed in corporate dental chains or international positions can earn 8-10 LPA or higher. [UPDATE \u2014 verify from CDC records]' },
    { q: 'Does JKKN Dental College offer international placements?', a: 'Yes, JKKN Dental College alumni work internationally at NHS UK, Cleveland Clinic Abu Dhabi, Saudi Ministry of Health, and dental clinics in Singapore. The CDC supports international licensing exam preparation and placement assistance.' },
    { q: 'What career options are available after BDS?', a: 'After BDS from JKKN, graduates can pursue private practice, hospital dentistry, higher studies (MDS), international opportunities, dental research, or public health dentistry. The CDC provides guidance for all career pathways.' },
    { q: 'How does the JKKN Dental Placement Cell work?', a: `The CDC operates a structured 5-step process: Registration & Profile Building, Resume Workshop & Skill Development, Company Connect & Campus Drives, Interview Preparation & Mock Sessions, and Offer Facilitation & Joining Support. With ${collegeFacts.partnerships}+ recruiting partners, the CDC ensures comprehensive placement support.` },
    { q: 'What is the highest package from JKKN Dental College?', a: 'The highest package offered to JKKN Dental graduates is in the range of 8-10 LPA, typically from corporate dental chains and international healthcare organisations. [UPDATE \u2014 verify from CDC records]' },
    { q: 'Can JKKN Dental students get government jobs?', a: 'Yes, many JKKN Dental alumni serve in government Primary Health Centres (PHCs), district hospitals, and dental departments across Tamil Nadu. The college provides guidance for TNPSC and other government dental recruitment exams.' },
    { q: 'How many alumni does JKKN Dental College have?', a: `JKKN Dental College has a strong alumni network of ${collegeFacts.alumniCount.toLocaleString()}+ graduates spread across India and internationally. Alumni work in leading hospitals, corporate dental chains, government services, and private practice.` },
    { q: 'Is JKKN Dental College good for higher studies after BDS?', a: `Yes, JKKN Dental College has a strong track record of students clearing NEET MDS and pursuing postgraduate specialisations. The college offers MDS in ${collegeFacts.mdsSpecialisations} specialisations and provides dedicated coaching and mentoring for competitive exams.` },
    { q: 'Does JKKN have placement for MDS students?', a: `Yes, MDS graduates from JKKN receive dedicated placement support. With advanced clinical training across ${collegeFacts.mdsSpecialisations} specialisations and ${collegeFacts.publications}+ faculty publications, MDS graduates are placed in teaching institutions, specialty hospitals, and research organisations.` },
  ];

  return (
    <main className="overflow-x-hidden w-full">

      {/* -- Breadcrumb -- */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#006837] transition-colors">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Placements</li>
          </ol>
        </div>
      </nav>

      {/* -- Top Announcement Bar -- */}
      <div className="bg-[#002309] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <span className="flex items-center gap-2 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
            Admissions Open {collegeFacts.currentAdmissionYear}
          </span>
          <a href="tel:+919345855001" className="bg-[#006837] hover:bg-[#005a30] text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 transition-colors">
            Call Us
          </a>
        </div>
      </div>

      {/* -- Hero Section -- */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24"
        style={{ background: 'linear-gradient(135deg, #006837 0%, #002309 100%)', minHeight: '88vh' }}
      >
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full">
          <GraduationCap className="w-4 h-4" /> DCI Approved | {collegeFacts.placementRate}% Placement Assistance
        </div>
        <h1 className="text-white font-extrabold leading-tight mb-6 max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw + 0.5rem, 3.5rem)' }}>
          BDS &amp; MDS Placements at <span className="text-[#7cb983]">JKKN Dental College</span>
        </h1>
        <p className="hero-description text-white/80 max-w-2xl mb-10 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1vw + 0.5rem, 1.1rem)' }}>
          With {collegeFacts.placementRate}% placement assistance, {collegeFacts.alumniCount.toLocaleString()}+ alumni worldwide, and {collegeFacts.partnerships}+ recruiting partners,
          JKKN Dental College&apos;s Career Development Centre connects graduates with leading dental healthcare organisations across India and internationally.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 w-full max-w-2xl list-none p-0 m-0">
          {heroStats.map((stat) => (
            <li key={stat.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-4 text-white">
              <div className="font-extrabold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{stat.value}</div>
              <div className="text-xs font-semibold tracking-widest text-white/70 mt-1">{stat.label}</div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" target="_blank" rel="nofollow noopener noreferrer" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
            Enquire About Placements
          </a>
          <a href="tel:+919345855001" className="bg-[#006837] hover:bg-[#002309] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
            Call Placement Cell
          </a>
        </div>
      </section>

      {/* -- Trust Bar -- */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-[#FBFBEE] border border-[#7cb983] text-[#006837] text-sm font-semibold px-3 py-1.5 rounded-full">{'\u2713'} DCI</span>
            <span className="flex items-center gap-1.5 bg-[#FBFBEE] border border-[#7cb983] text-[#006837] text-sm font-semibold px-3 py-1.5 rounded-full">{'\u2713'} NAAC</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <p className="text-gray-500 text-sm text-center">Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai</p>
        </div>
      </div>

      {/* -- Placement Highlights -- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Placement Highlights
          </h2>
          <p className="text-gray-500 text-base mb-4">Career Development Centre — connecting graduates with India&apos;s top dental employers</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {highlightStats.map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="font-extrabold text-[#006837]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>{stat.value}</div>
                <div className="text-xs font-semibold tracking-widest text-gray-400 mt-1">{stat.label}</div>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
            The Career Development Centre (CDC) at JKKN Dental College provides end-to-end placement support — from resume building and interview coaching
            to campus drives and international placement facilitation. Our {collegeFacts.partnerships}+ recruiting partners ensure diverse career opportunities for every graduate.
          </p>
        </div>
      </section>

      {/* -- Placement Process Timeline -- */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            How the Placement Process Works
          </h2>
          <p className="text-gray-500 text-base mb-4">A structured 5-step process by the Career Development Centre</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="relative text-left max-w-2xl mx-auto">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#7cb983]" />
            {processSteps.map((step) => (
              <div key={step.step} className="relative pl-14 pb-10 last:pb-0">
                <div className="absolute left-2 top-0 w-7 h-7 rounded-full bg-[#006837] text-white text-xs font-bold flex items-center justify-center z-10">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Top Recruiters -- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Top Recruiters &amp; Hiring Partners
          </h2>
          <p className="text-gray-500 text-base mb-4">Leading dental healthcare organisations that hire from JKKN</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />

          {/* National Recruiters */}
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5 text-[#006837]" /> National Recruiters
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 list-none p-0 m-0">
            {nationalRecruiters.map((company) => (
              <li key={company.name} className="bg-[#FBFBEE] rounded-2xl p-4 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#006837] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {company.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{company.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{company.sector}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* International Recruiters */}
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
            <Globe className="w-5 h-5 text-[#006837]" /> International Opportunities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
            {internationalRecruiters.map((company) => (
              <li key={company.name} className="bg-[#FBFBEE] rounded-2xl p-4 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#006837] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {company.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{company.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{company.sector}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -- Year-Wise Placement Trends -- */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Year-Wise Placement Trends
          </h2>
          <p className="text-gray-500 text-base mb-4">Consistent growth in placements across batches [UPDATE — verify from CDC records]</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="px-4 py-3 font-semibold rounded-tl-xl">Batch Year</th>
                  <th className="px-4 py-3 font-semibold">Placement Rate</th>
                  <th className="px-4 py-3 font-semibold">Key Recruiters</th>
                  <th className="px-4 py-3 font-semibold">International</th>
                  <th className="px-4 py-3 font-semibold rounded-tr-xl">Higher Studies</th>
                </tr>
              </thead>
              <tbody>
                {trendData.map((row, i) => (
                  <tr key={row.batch} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FBFBEE]'}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.batch}</td>
                    <td className="px-4 py-3 text-[#006837] font-bold">{row.rate}</td>
                    <td className="px-4 py-3 text-gray-600">{row.recruiters}</td>
                    <td className="px-4 py-3 text-gray-600">{row.international}</td>
                    <td className="px-4 py-3 text-gray-600">{row.higherStudies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -- Career Pathways -- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Career Pathways for Dental Graduates
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.4rem, 1.05rem)' }}>
            A BDS or MDS degree from JKKN opens doors to diverse career opportunities. The CDC provides guidance for every pathway.
          </p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
            {careerPathways.map((item) => (
              <li key={item.title} className="bg-[#FBFBEE] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -- Student Testimonials -- */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            What Our Placed Alumni Say
          </h2>
          <p className="text-gray-500 text-base mb-4">Hear from graduates who built their careers through JKKN</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 text-left shadow-sm">
                <div className="text-5xl text-gray-200 font-serif leading-none mb-3 select-none">&ldquo;</div>
                <p className="text-gray-500 text-sm leading-relaxed italic mb-6">{t.quote}</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Frequently Asked Questions — Placements
          </h2>
          <p className="text-gray-500 text-base mb-4">Your placement queries answered</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="text-left space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="rounded-xl overflow-hidden border border-gray-200 group open:border-[#7cb983]">
                <summary className="flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 text-sm sm:text-base bg-white hover:bg-gray-50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-[#006837] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="faq-answer px-5 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-[#7cb983]/20 bg-white">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white font-extrabold mb-6" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Ready to Start Your Dental Career?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1vw + 0.5rem, 1.05rem)' }}>
            Connect with the Career Development Centre to learn about placement opportunities, campus drives, and career guidance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <a href="tel:+919345855001" className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 text-white hover:bg-white/20 transition-colors">
              <Phone className="w-6 h-6 mx-auto mb-2" />
              <p className="font-bold text-sm">Call Us</p>
              <p className="text-white/70 text-xs mt-1">{collegeFacts.phone}</p>
            </a>
            <a href={`mailto:${collegeFacts.email}`} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 text-white hover:bg-white/20 transition-colors">
              <Mail className="w-6 h-6 mx-auto mb-2" />
              <p className="font-bold text-sm">Email Us</p>
              <p className="text-white/70 text-xs mt-1">{collegeFacts.email}</p>
            </a>
            <a href="https://maps.google.com/?q=JKKN+Dental+College+Komarapalayam" target="_blank" rel="nofollow noopener noreferrer" className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 text-white hover:bg-white/20 transition-colors">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <p className="font-bold text-sm">Visit Campus</p>
              <p className="text-white/70 text-xs mt-1">Komarapalayam, Namakkal</p>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" target="_blank" rel="nofollow noopener noreferrer" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
              Apply Now — {collegeFacts.currentAdmissionYear}
            </a>
            <Link href="/committee/placement-cell-cdc/" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 text-base">
              Visit Placement Cell Page
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919345855001?text=Hi%2C%20I%27m%20interested%20in%20JKKN%20Dental%20placements%20and%20career%20opportunities.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      <ScrollToTop />

    </main>
  );
}
