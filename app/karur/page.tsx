import Link from 'next/link';
import { Hospital, Stethoscope, Microscope, TrendingUp, Users, Bus, Route, Train, Plane, Home, MapPin, BookOpen, Award, Wifi, GraduationCap, Target, Sparkles, Shield } from 'lucide-react';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function KarurPage() {

  const faqs = [
    {
      q: 'Are there any dental colleges in Karur?',
      a: 'Karur district has no dedicated dental college, so BDS and MDS aspirants from Karur travel to neighbouring districts. The nearest established DCI-approved option is JKKN Dental College & Hospital at Komarapalayam, Namakkal — approximately 75 km away via the Erode side. It offers BDS with 100 seats and MDS in 5 specialisations, affiliated to TN Dr. MGR Medical University, Chennai.',
    },
    {
      q: 'Which is the best dental college near Karur?',
      a: 'JKKN Dental College & Hospital at Komarapalayam is one of the most established DCI-approved dental colleges accessible from Karur. Founded in 1952, NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, it operates a 200+ chair teaching hospital treating 500+ patients daily.',
    },
    {
      q: 'How far is JKKN Dental College from Karur?',
      a: 'JKKN Dental is approximately 75 km from Karur — around 1.5 to 2 hours by road via the Erode side. Direct trains also run from Karur Junction to Erode Junction, which is 18 km from the campus.',
    },
    {
      q: 'Can Karur students commute daily or should they stay in the hostel?',
      a: 'Both options work. JKKN Dental provides separate hostels for boys and girls with mess facility, and many Karur learners stay on campus and travel home on weekends via bus or the Karur Junction–Erode Junction train line. Daily commute is possible but a hostel stay is more comfortable for the BDS workload.',
    },
    {
      q: 'What is the NEET cut-off for BDS at JKKN Dental?',
      a: 'The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle.',
    },
    {
      q: 'Does JKKN Dental have its own hospital?',
      a: 'Yes, JKKN Dental College & Hospital has a 200+ chair dental hospital and 100+ bed facility right on campus. Learners gain hands-on clinical training from Year 1 of the BDS programme, treating patients who visit from surrounding districts every day.',
    },
    {
      q: 'What MDS specialisations are available?',
      a: 'JKKN Dental offers MDS in five specialisations: Orthodontics & Dentofacial Orthopaedics, Prosthodontics & Crown and Bridge, Oral & Maxillofacial Surgery, Conservative Dentistry & Endodontics, and Periodontics. Each department has modern learning labs, and the attached hospital ensures ample clinical cases for postgraduate research and training.',
    },
    {
      q: 'How can Karur students apply for admission at JKKN Dental?',
      a: 'Karur learners can apply online at https://dental.jkkn.ac.in/ or visit the campus on NH-544 at Komarapalayam. Admissions for BDS and MDS 2026-27 are currently open. Call +91 9345855001 for personalised guidance on eligibility, fees, and the counselling process.',
    },
    {
      q: 'What is the BDS fee at JKKN Dental College?',
      a: 'At JKKN Dental College & Hospital, BDS tuition fee is As Per Govt Norms under Government Quota and Rs. 4,50,000/year (Dayscholar with Instruments) or Rs. 5,50,000/year (With Hostel & Instruments) under Management Quota. Contact +91 9345855001 for the latest 2026-27 fee structure.',
    },
  ];

  const whyFeatures = [
    { icon: <Hospital className="w-6 h-6 text-[#006837]" />, title: 'Own Hospital', desc: 'DCI-approved dental college with attached hospital for hands-on clinical training' },
    { icon: <Stethoscope className="w-6 h-6 text-[#006837]" />, title: 'Real Patient Exposure', desc: 'Own dental hospital on campus — learners get real patient exposure from Year 1' },
    { icon: <Microscope className="w-6 h-6 text-[#006837]" />, title: 'Advanced Learning Labs', desc: 'Advanced dental learning labs, simulation equipment, and digital dentistry training' },
    { icon: <TrendingUp className="w-6 h-6 text-[#006837]" />, title: 'NEET MDS Results', desc: 'Strong track record in NEET MDS results and higher education' },
    { icon: <Users className="w-6 h-6 text-[#006837]" />, title: 'Community Service', desc: 'Hospital serves the community — builds trust and clinical experience' },
    { icon: <Train className="w-6 h-6 text-[#006837]" />, title: 'Easy Connectivity', desc: 'Direct Karur Junction–Erode Junction trains; hostel or weekend travel — your choice' },
  ];

  const programmes = [
    { title: 'BDS (Bachelor of Dental Surgery)', duration: '4 years + 1 year internship', level: 'UG', intake: '100 seats', eligibility: '10+2 with Physics, Chemistry, Biology; NEET qualified', href: '/academics/details-of-academic-programs/bds/' },
    { title: 'MDS (Master of Dental Surgery)', duration: '3 years', level: 'PG', intake: '30 seats', eligibility: 'BDS degree; NEET MDS qualified', href: '/academics/details-of-academic-programs/mds/' },
  ];

  const placementStats = [
    { value: '92%', label: 'PLACEMENT RATE 2024-25' },
    { value: '8-10', label: 'LPA HIGHEST' },
    { value: '3-5', label: 'LPA AVERAGE' },
    { value: '15+', label: 'RECRUITING PARTNERS' },
  ];

  const companies = ['Clove Dental', 'Apollo Dental', 'MyDentist', 'Sabka Dentist', 'Apollo Hospitals', 'Fortis Healthcare', 'Manipal Hospitals', 'Govt. PHCs & District Hospitals'];

  const transportRows = [
    { icon: <Route className="w-6 h-6 text-[#006837]" />, label: 'ROUTE', text: 'Karur to Erode by road (~65 km), then NH-544 to Komarapalayam (~18 km) — approximately 75 km total via the direct Kodumudi side' },
    { icon: <Bus className="w-6 h-6 text-[#006837]" />, label: 'BY BUS', text: 'Regular government buses from Karur towards Erode; from Erode Central Bus Stand frequent buses reach Komarapalayam throughout the day' },
    { icon: <Train className="w-6 h-6 text-[#006837]" />, label: 'BY TRAIN', text: 'Direct trains from Karur Junction to Erode Junction — Erode Junction is ~18 km from campus' },
    { icon: <Plane className="w-6 h-6 text-[#006837]" />, label: 'NEAREST AIRPORT', text: 'Coimbatore International Airport (Code: CJB) (~108 km from campus); Trichy International Airport (TRZ) serves the Karur side' },
    { icon: <MapPin className="w-6 h-6 text-[#006837]" />, label: 'CAMPUS ADDRESS', text: 'JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183' },
  ];

  const facilities = [
    { icon: <Microscope className="w-6 h-6 text-[#006837]" />, title: 'Modern Learning Labs', desc: 'State-of-the-art learning labs and smart learning studios' },
    { icon: <BookOpen className="w-6 h-6 text-[#006837]" />, title: 'Digital Learning Commons', desc: 'Well-stocked learning commons with digital access and journals' },
    { icon: <Home className="w-6 h-6 text-[#006837]" />, title: 'Hostel', desc: 'Separate hostels for boys and girls with mess facility' },
    { icon: <Bus className="w-6 h-6 text-[#006837]" />, title: 'Transport', desc: 'College buses connecting to Erode, Salem and surrounding areas' },
    { icon: <Award className="w-6 h-6 text-[#006837]" />, title: 'Sports', desc: 'Playground, indoor games, gym, and annual sports events' },
    { icon: <Wifi className="w-6 h-6 text-[#006837]" />, title: 'WiFi Campus', desc: 'High-speed internet across the entire campus' },
  ];

  const cities = [
    { icon: <Home className="w-6 h-6 text-[#006837]" />, name: 'Erode', dist: '~18 km', href: '/erode/' },
    { icon: <Bus className="w-6 h-6 text-[#006837]" />, name: 'Namakkal', dist: '~60 km', href: '/namakkal/' },
    { icon: <Target className="w-6 h-6 text-[#006837]" />, name: 'Trichy', dist: '~145 km', href: '/trichy/' },
    { icon: <Sparkles className="w-6 h-6 text-[#006837]" />, name: 'Madurai', dist: '~215 km', href: '/madurai/' },
  ];

  return (
    <>
      <main className="overflow-x-hidden w-full">

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#006837] transition-colors">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Dental College near Karur</li>
          </ol>
        </div>
      </nav>

      {/* ── Top Announcement Bar ── */}
      <div className="bg-[#002309] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <span className="flex items-center gap-2 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
            Admissions Open 2026-27
          </span>
          <a href="tel:+919345855001" className="bg-[#006837] hover:bg-[#005a30] text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 transition-colors">
            Call Us
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24"
        style={{ background: 'linear-gradient(135deg, #006837 0%, #002309 100%)', minHeight: '88vh' }}
      >
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full">
          <Shield className="w-4 h-4" /> DCI, NAAC Approved • Admissions Open
        </div>
        <h1 className="text-white font-extrabold leading-tight mb-3 max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw + 0.5rem, 3.5rem)' }}>
          Dental College near <span className="text-[#7cb983]">Karur</span>
        </h1>
        <p className="text-white/60 text-sm font-medium tracking-wide mb-6">Nearest DCI-Approved Dental College — JKKN Dental College &amp; Hospital, Komarapalayam</p>
        <p className="text-white/80 max-w-2xl mb-10 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1vw + 0.5rem, 1.1rem)' }}>
          Karur district has no dental college — JKKN Dental College &amp; Hospital at Komarapalayam is the nearest established
          option, approximately 75 km via Erode. BDS with 100 seats, MDS in 5 specialisations, and a 200+ chair teaching hospital.
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 w-full max-w-2xl list-none p-0 m-0">
          {[
            { value: '92%', label: 'PLACEMENTS 2024-25' },
            { value: '8-10', label: 'LPA HIGHEST' },
            { value: '~75km', label: 'FROM KARUR' },
            { value: '2', label: 'PROGRAMMES' },
          ].map((stat) => (
            <li key={stat.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-4 text-white">
              <div className="font-extrabold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{stat.value}</div>
              <div className="text-xs font-semibold tracking-widest text-white/70 mt-1">{stat.label}</div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=dental.jkkn.ac.in&utm_medium=organic&utm_campaign=karur" target="_blank" rel="nofollow noopener noreferrer" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
            Apply Now — 2026-27
          </a>
          <a href="tel:+919345855001" className="bg-[#006837] hover:bg-[#002309] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">Call Us</a>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-[#FBFBEE] border border-[#7cb983] text-[#006837] text-sm font-semibold px-3 py-1.5 rounded-full">✓ DCI</span>
            <span className="flex items-center gap-1.5 bg-[#FBFBEE] border border-[#7cb983] text-[#006837] text-sm font-semibold px-3 py-1.5 rounded-full">✓ NAAC</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <p className="text-gray-500 text-sm text-center">Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai</p>
        </div>
      </div>

      {/* ── Speakable Summary (Voice Search Target) ── */}
      <div className="speakable-summary sr-only" id="speakable-intro">
        JKKN Dental College and Hospital is the nearest established DCI-approved dental college to Karur, located approximately seventy-five kilometres away at Komarapalayam, Namakkal, via Erode. The college offers BDS with one hundred seats and MDS with five specialisations, affiliated to TN Dr. MGR Medical University.
      </div>

      {/* ── Snippet Answer Section (AEO Target) ── */}
      <section className="bg-white py-12 px-4" id="dental-colleges-karur">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.4rem, 2.5vw + 0.5rem, 2rem)' }}>
            Are There Any Dental Colleges in Karur?
          </h2>
          <div className="snippet-answer voice-answer">
            <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: 'clamp(0.95rem, 1vw + 0.4rem, 1.1rem)' }}>
              Karur district has no dedicated dental college, so BDS and MDS aspirants from Karur look to neighbouring districts. The nearest established option is <strong>JKKN Dental College &amp; Hospital</strong> at Komarapalayam, Namakkal — approximately 75 km via Erode, with a direct Karur Junction–Erode Junction train line. Founded in 1952 and affiliated to TN Dr. MGR Medical University, Chennai, it offers BDS with 100 government-sanctioned seats and MDS in 5 specialisations, and operates a 200-chair teaching hospital treating 500+ patients daily.
            </p>
          </div>
          <h3 className="font-bold text-gray-900 mb-3 text-lg">Why Karur Students Choose the Komarapalayam Side</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4" style={{ fontSize: 'clamp(0.9rem, 1vw + 0.4rem, 1.05rem)' }}>
            <li>Closest full BDS + MDS campus to Karur district — approximately 1.5 to 2 hours door to door</li>
            <li>Direct rail link — Karur Junction to Erode Junction, then 18 km to campus</li>
            <li>Hostel or weekend-commute both practical at this distance</li>
          </ul>
          <p className="text-gray-500 text-sm">All DCI-approved dental colleges in Tamil Nadu admit students through NEET UG counselling conducted by DME Tamil Nadu.</p>
        </div>
      </section>

      {/* ── Distance Card ── */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div className="flex items-start gap-5">
              <div className="text-[#006837] font-extrabold leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}>
                75<span className="text-xl sm:text-2xl font-bold">km</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base sm:text-lg">From Karur to JKKN Dental</p>
                <p className="text-gray-500 text-sm mt-1">1.5–2 hours via Erode • direct Karur Jn–Erode Jn trains</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=JKKN+Dental+College+Komarapalayam"
              target="_blank" rel="nofollow noopener noreferrer"
              className="flex-shrink-0 bg-[#006837] hover:bg-[#002309] text-white font-semibold px-5 py-3 rounded-xl flex flex-col items-center gap-1 transition-colors min-w-[110px] text-center"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm">View on Map</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Choose JKKN ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Why Karur Learners Choose JKKN Dental
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-2 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.4rem, 1.05rem)' }}>
            Karur&apos;s strong business families value professional education with practical outcomes. With no dental college in the district, JKKN at Komarapalayam is the closest full BDS + MDS campus — near enough for weekend travel, established enough for serious clinical training.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4 text-sm leading-relaxed">
            Founded in 1952, JKKN Dental College &amp; Hospital brings over 74 years of dental education excellence. Approved by the Dental Council of India (DCI) and affiliated to TN Dr. MGR Medical University, Chennai, the institution operates a 200+ chair teaching hospital treating 500+ patients daily.
          </p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
            {whyFeatures.map((item) => (
              <li key={item.title} className="bg-[#FBFBEE] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BDS and MDS Programs ── */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            BDS and MDS Programs at JKKN Dental College Near Karur
          </h2>
          <p className="text-gray-500 text-base mb-4">Choose the right programme for your career goals</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programmes.map((prog) => (
              <div key={prog.title} className="bg-white rounded-2xl p-6 sm:p-8 text-left shadow-sm">
                <div className="mb-4"><GraduationCap className="w-8 h-8 text-[#006837]" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  <Link href={prog.href} className="hover:text-[#006837] transition-colors">{prog.title}</Link>
                </h3>
                <dl className="space-y-3 mb-4">
                  {[
                    { label: 'Duration', value: prog.duration },
                    { label: 'Level', value: prog.level },
                    { label: 'Intake', value: prog.intake },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <dt className="text-[#7cb983] text-sm">{row.label}</dt>
                      <dd className="text-gray-900 text-sm font-semibold">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-gray-400 text-sm mb-4">{prog.eligibility}</p>
                <Link href={prog.href} className="text-[#006837] hover:underline text-sm font-medium block mb-4">
                  {prog.level === 'UG' ? 'View Bachelor of Dental Surgery (BDS) Details →' : 'View Master of Dental Surgery (MDS) Specializations →'}
                </Link>
                <Link href="/admissions/" className="block text-center bg-[#FBFBEE] hover:bg-[#e8f5e9] text-[#006837] font-semibold py-3 rounded-xl transition-colors text-sm">
                  Enquire About This Course
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fees-structure/" className="inline-block bg-white border border-[#7cb983] hover:bg-[#e8f5e9] text-[#006837] font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              View Fees Structure
            </Link>
            <Link href="/admissions/" className="inline-block bg-[#006837] hover:bg-[#002309] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Admission Process
            </Link>
          </div>
        </div>
      </section>

      {/* ── BDS Admission Guide ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold text-gray-900 mb-3 text-center" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            BDS Admission 2026 — How to Apply from Karur
          </h2>
          <p className="text-gray-500 text-base mb-4 text-center">Step-by-step admission process for Karur learners</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-10" />
          <ol className="space-y-4 list-none p-0 m-0">
            {[
              { step: 'Step 1', title: 'Qualify NEET UG 2026', desc: 'Secure minimum 50th percentile (General) or 40th percentile (Reserved) in NEET UG 2026.' },
              { step: 'Step 2', title: 'Register for TN State Counselling', desc: 'Register on the DME Tamil Nadu portal for Government Quota seat allotment.' },
              { step: 'Step 3', title: 'Apply for Management Quota (Optional)', desc: 'Contact JKKN Dental College directly at +91 9345855001 or apply via www.jkkn.ai/apply/jkkn-admission-2026.' },
              { step: 'Step 4', title: 'Document Verification', desc: 'Submit 10+2 marksheets, NEET scorecard, community certificate, and transfer certificate.' },
              { step: 'Step 5', title: 'Confirm Admission', desc: 'Pay the first year fee and confirm your seat. Hostel registration available separately for learners from Karur.' },
            ].map((item) => (
              <li key={item.step} className="flex gap-4 items-start bg-[#FBFBEE] rounded-xl p-5">
                <span className="bg-[#006837] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=dental.jkkn.ac.in&utm_medium=organic&utm_campaign=karur" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm">
              Apply Now — BDS/MDS 2026-27
            </a>
          </div>
        </div>
      </section>

      {/* ── Placement Highlights ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Placement Highlights
          </h2>
          <p className="text-gray-500 text-base mb-4">Our placement cell connects you with India&apos;s top employers</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {placementStats.map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="font-extrabold text-[#006837]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>{stat.value}</div>
                <div className="text-xs font-semibold tracking-widest text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <ul className="text-left max-w-xl mx-auto space-y-2 mb-8 list-none p-0">
            <li className="flex items-start gap-2 text-sm text-gray-600"><span className="text-[#7cb983] font-bold mt-0.5">✓</span> International placement destinations: UK (NHS), UAE, Saudi Arabia, Singapore</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><span className="text-[#7cb983] font-bold mt-0.5">✓</span> Recruiters include Apollo Hospitals, Clove Dental, Fortis Healthcare, and 15+ partners</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><span className="text-[#7cb983] font-bold mt-0.5">✓</span> Dedicated TNPSC coaching for government dental officer exams</li>
          </ul>
          <p className="text-xs font-semibold tracking-widest text-gray-400 mb-5 uppercase">Companies That Hire From Us</p>
          <ul className="flex flex-wrap justify-center gap-3 list-none p-0 m-0">
            {companies.map((company) => (
              <li key={company} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-700 bg-white">{company}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How to Reach ── */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            How Far Is JKKN Dental College from Karur?
          </h2>
          <p className="snippet-answer text-gray-700 text-base mb-4">JKKN Dental College &amp; Hospital is approximately 75 km from Karur via the Erode side, a journey of approximately 1.5 to 2 hours by road. Direct trains from Karur Junction to Erode Junction bring you within 18 km of the campus.</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-10" />
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm text-left">
            <div className="bg-[#006837] text-white px-6 py-5 flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="font-bold text-lg">Karur → JKKN Dental Campus</p>
                <p className="text-white/80 text-sm">~75 km • 1.5–2 hours via Erode</p>
              </div>
            </div>
            <ul className="list-none p-0 m-0">
              {transportRows.map((row, i) => (
                <li key={row.label} className={`flex items-start gap-4 px-6 py-5 ${i < transportRows.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-[#FBFBEE] flex items-center justify-center text-xl flex-shrink-0">{row.icon}</div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-gray-400 mb-1">{row.label}</p>
                    <p className="text-gray-800 text-sm leading-relaxed">{row.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Campus & Facilities ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Campus &amp; Facilities
          </h2>
          <p className="text-gray-500 text-base mb-4">Everything you need for a world-class education experience</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
            {facilities.map((item) => (
              <li key={item.title} className="flex items-start gap-3 bg-[#FBFBEE] rounded-2xl p-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/facilities/" className="text-[#006837] hover:underline text-sm font-medium">
              Explore campus facilities and hostel at JKKN Dental College →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key Facts (AI Citation Target) ── */}
      <section className="bg-white py-16 px-4" id="about-jkkn-karur">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold text-gray-900 mb-3 text-center" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            JKKN Dental College &amp; Hospital — Key Facts
          </h2>
          <p className="text-gray-500 text-base mb-4 text-center">Essential information for Karur learners considering dental education</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-10" />
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Location', value: 'Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183' },
              { label: 'Distance from Karur', value: 'Approximately 75 km via Erode — 1.5–2 hours by road' },
              { label: 'Founded', value: '1952 (74+ years of educational excellence)' },
              { label: 'Programmes', value: 'BDS (100 seats) + MDS (5 specialisations)' },
              { label: 'Hospital', value: '200+ dental chairs, 100+ beds, 500+ patients daily' },
              { label: 'Approval', value: 'Dental Council of India (DCI)' },
              { label: 'Affiliation', value: 'TN Dr. MGR Medical University, Chennai' },
              { label: 'Contact', value: '+91 9345855001 | info@jkkn.ac.in' },
            ].map((item) => (
              <div key={item.label} className="bg-[#FBFBEE] rounded-xl p-4 border border-gray-100">
                <dt className="text-xs font-semibold tracking-widest text-[#7cb983] uppercase mb-1">{item.label}</dt>
                <dd className="text-gray-800 text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base mb-4">Common questions about dental education options for Karur learners</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="text-left space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden border border-gray-200 group open:border-[#7cb983]"
              >
                <summary className="flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 text-sm sm:text-base bg-white hover:bg-gray-50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-[#006837] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-[#7cb983]/20 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore More Cities ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Explore More Cities
          </h2>
          <p className="text-gray-500 text-base mb-4">Find the best dental college near your city</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-10" />
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 list-none p-0">
            {cities.slice(0, 3).map((city) => (
              <li key={city.name}>
                <Link href={city.href} className="bg-[#FBFBEE] rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="flex-shrink-0">{city.icon}</span>
                  <span className="font-bold text-gray-900 text-base flex-1 text-left">{city.name}</span>
                  <span className="text-gray-400 text-sm">{city.dist}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 list-none p-0">
            {cities.slice(3).map((city) => (
              <li key={city.name} className="sm:col-span-1">
                <Link href={city.href} className="bg-[#FBFBEE] rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="flex-shrink-0">{city.icon}</span>
                  <span className="font-bold text-gray-900 text-base flex-1 text-left">{city.name}</span>
                  <span className="text-gray-400 text-sm">{city.dist}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/academics/" className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
              View All Programmes
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link href="/admissions/" className="text-[#006837] hover:underline text-sm">Admission Process</Link>
            <Link href="/fees-structure/" className="text-[#006837] hover:underline text-sm">Fee Structure</Link>
            <Link href="/contact-us/" className="text-[#006837] hover:underline text-sm">Contact JKKN Dental College &amp; Hospital</Link>
          </div>
        </div>
      </section>


      <ScrollToTop />

      </main>
    </>
  );
}
