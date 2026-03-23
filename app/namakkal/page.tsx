'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronUp, ChevronDown, Hospital, Stethoscope, Microscope, TrendingUp, Users, Bus, Route, Train, Plane, Home, MapPin, BookOpen, Award, Wifi, GraduationCap, Target, Sparkles, Shield } from 'lucide-react';
import { ScrollToTop } from '@/components/ScrollToTop';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Namakkal Dental College", "item": "https://dental.jkkn.ac.in/namakkal/" },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Namakkal Dental College | JKKN Dental College & Hospital",
  "url": "https://dental.jkkn.ac.in/namakkal/",
  "dateModified": "2026-03-23",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".text-lg", ".text-base"],
  },
};


export default function NamakkalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Which is the best Namakkal dental college?',
      a: 'JKKN Dental College & Hospital, located just 5-10 km from Namakkal on NH-544, is widely regarded as one of the top dental colleges accessible from Namakkal. Approved by DCI, NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.',
    },
    {
      q: 'How far is JKKN Dental from Namakkal?',
      a: 'JKKN Dental is approximately 5-10 km from Namakkal city centre, which takes about 15-20 minutes by road via NH-544 (Salem-Coimbatore Highway). Frequent local buses and auto-rickshaws are available from Namakkal town to Komarapalayam throughout the day.',
    },
    {
      q: 'What is the NEET cut-off for BDS at JKKN Dental?',
      a: 'The NEET cut-off for BDS admission at JKKN Dental College & Hospital varies each year based on counselling rounds. Contact the admission office for the latest cut-off information and seat availability for the current admission cycle.',
    },
    {
      q: 'Does JKKN Dental have its own hospital?',
      a: 'Yes, JKKN Dental College & Hospital has its own attached dental hospital on campus. This hospital serves patients from the surrounding community and provides BDS students with extensive hands-on clinical training from the early years of the programme.',
    },
    {
      q: 'What MDS specialisations are available?',
      a: 'JKKN Dental College & Hospital offers MDS in multiple specialisations including Orthodontics, Prosthodontics, Oral Surgery, Conservative Dentistry, Periodontics, and more. Admission is through NEET MDS counselling. Contact the admission office for the full list of available specialisations.',
    },
    {
      q: 'Does JKKN Dental provide hostel for Namakkal students?',
      a: 'Yes, JKKN Dental provides separate hostel facilities for boys and girls. Students from Namakkal can also opt for daily commute as the campus is just 5-10 km away — just 15-20 minutes. College transport services are also available.',
    },
    {
      q: 'How can I apply for admission at JKKN Dental?',
      a: 'You can apply online through the official website at https://dental.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.',
    },
  ];

  const whyFeatures = [
    { icon: <Hospital className="w-6 h-6 text-[#006837]" />, title: 'Own Hospital', desc: 'DCI-approved dental college with attached hospital for hands-on clinical training' },
    { icon: <Stethoscope className="w-6 h-6 text-[#006837]" />, title: 'Real Patient Exposure', desc: 'Own dental hospital on campus — students get real patient exposure from Year 1' },
    { icon: <Microscope className="w-6 h-6 text-[#006837]" />, title: 'Advanced Labs', desc: 'Advanced dental labs, simulation equipment, and digital dentistry training' },
    { icon: <TrendingUp className="w-6 h-6 text-[#006837]" />, title: 'NEET MDS Results', desc: 'Strong track record in NEET MDS results and higher education' },
    { icon: <Users className="w-6 h-6 text-[#006837]" />, title: 'Community Service', desc: 'Hospital serves the community — builds trust and clinical experience' },
    { icon: <Bus className="w-6 h-6 text-[#006837]" />, title: 'Easy Commute', desc: 'Just 5-10 km from Namakkal. Daily commute or comfortable hostel — your choice.' },
  ];

  const programmes = [
    { title: 'BDS (Bachelor of Dental Surgery)', duration: '4 years + 1 year internship', level: 'UG', intake: '100 seats', eligibility: '10+2 with Physics, Chemistry, Biology; NEET qualified' },
    { title: 'MDS (Master of Dental Surgery)', duration: '3 years', level: 'PG', intake: '30 seats', eligibility: 'BDS degree; NEET MDS qualified' },
  ];

  const placementStats = [
    { value: '90%+', label: 'PLACEMENT RATE' },
    { value: '8-10', label: 'LPA HIGHEST' },
    { value: '3-5', label: 'LPA AVERAGE' },
    { value: '5+', label: 'TOP RECRUITERS' },
  ];

  const companies = ['Clove Dental', 'MyDentist', 'Sabka Dentist', 'Apollo Hospitals', 'Fortis Healthcare'];

  const transportRows = [
    { icon: <Route className="w-6 h-6 text-[#006837]" />, label: 'ROUTE', text: 'NH-544 (Salem-Coimbatore Highway)' },
    { icon: <Bus className="w-6 h-6 text-[#006837]" />, label: 'BY BUS', text: 'Frequent local buses and auto-rickshaws available from Namakkal town to Komarapalayam' },
    { icon: <Train className="w-6 h-6 text-[#006837]" />, label: 'NEAREST RAILWAY STATION', text: 'Tiruchengode Railway Station (~15 km) | Salem Junction (~40 km from campus)' },
    { icon: <Plane className="w-6 h-6 text-[#006837]" />, label: 'NEAREST AIRPORT', text: 'Coimbatore International Airport (Code: CJB) (~110 km)' },
    { icon: <MapPin className="w-6 h-6 text-[#006837]" />, label: 'CAMPUS ADDRESS', text: 'JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183' },
  ];

  const facilities = [
    { icon: <Microscope className="w-6 h-6 text-[#006837]" />, title: 'Modern Labs', desc: 'State-of-the-art laboratories and smart classrooms' },
    { icon: <BookOpen className="w-6 h-6 text-[#006837]" />, title: 'Digital Library', desc: 'Well-stocked library with digital access and journals' },
    { icon: <Home className="w-6 h-6 text-[#006837]" />, title: 'Hostel', desc: 'Separate hostels for boys and girls with mess facility' },
    { icon: <Bus className="w-6 h-6 text-[#006837]" />, title: 'Transport', desc: 'College buses connecting to Namakkal and surrounding areas' },
    { icon: <Award className="w-6 h-6 text-[#006837]" />, title: 'Sports', desc: 'Playground, indoor games, gym, and annual sports events' },
    { icon: <Wifi className="w-6 h-6 text-[#006837]" />, title: 'WiFi Campus', desc: 'High-speed internet across the entire campus' },
  ];

  const cities = [
    { icon: <Bus className="w-6 h-6 text-[#006837]" />, name: 'Salem', dist: '40-50 km', href: '/salem/' },
    { icon: <Route className="w-6 h-6 text-[#006837]" />, name: 'Erode', dist: '30-40 km', href: '/erode/' },
    { icon: <Target className="w-6 h-6 text-[#006837]" />, name: 'Tiruppur', dist: '80-90 km', href: '/tiruppur/' },
    { icon: <Sparkles className="w-6 h-6 text-[#006837]" />, name: 'Coimbatore', dist: '100-110 km', href: '/coimbatore/' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <main className="overflow-x-hidden w-full">

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
        <h1 className="text-white font-extrabold leading-tight mb-6 max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw + 0.5rem, 3.5rem)' }}>
          <span className="text-[#7cb983]">Namakkal</span> Dental College
        </h1>
        <p className="text-white/80 max-w-2xl mb-10 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1vw + 0.5rem, 1.1rem)' }}>
          Namakkal is home — and so are we. JKKN Dental College &amp; Hospital offers top-tier dental programmes with
          90%+ placement support — located right in your home district.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 w-full max-w-2xl">
          {[
            { value: '90%+', label: 'PLACEMENTS' },
            { value: '8-10', label: 'LPA HIGHEST' },
            { value: '10km', label: 'FROM NAMAKKAL' },
            { value: '2', label: 'PROGRAMMES' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-4 text-white">
              <div className="font-extrabold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{stat.value}</div>
              <div className="text-xs font-semibold tracking-widest text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" target="_blank" rel="nofollow noopener noreferrer" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
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

      {/* ── Distance Card ── */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div className="flex items-start gap-5">
              <div className="text-[#006837] font-extrabold leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}>
                10<span className="text-xl sm:text-2xl font-bold">km</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base sm:text-lg">From Namakkal to JKKN Dental</p>
                <p className="text-gray-500 text-sm mt-1">15-20 minutes via NH-544 (Salem-Coimbatore Highway)</p>
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
            Why Namakkal Students Choose JKKN Dental
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.4rem, 1.05rem)' }}>
            Being in the home district of JKKN, Namakkal students enjoy the closest proximity to the campus. There is no need for hostel accommodation — daily commute is easy and convenient. Students can stay at home and still access world-class education.
          </p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyFeatures.map((item) => (
              <div key={item.title} className="bg-[#FBFBEE] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes Offered ── */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Programmes Offered
          </h2>
          <p className="text-gray-500 text-base mb-4">Choose the right programme for your career goals</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programmes.map((prog) => (
              <div key={prog.title} className="bg-white rounded-2xl p-6 sm:p-8 text-left shadow-sm">
                <div className="mb-4"><GraduationCap className="w-8 h-8 text-[#006837]" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-5">{prog.title}</h3>
                <div className="space-y-3 mb-4">
                  {[
                    { label: 'Duration', value: prog.duration },
                    { label: 'Level', value: prog.level },
                    { label: 'Intake', value: prog.intake },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-[#7cb983] text-sm">{row.label}</span>
                      <span className="text-gray-900 text-sm font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-6">{prog.eligibility}</p>
                <a href="tel:+919345855001" className="block text-center bg-[#FBFBEE] hover:bg-[#e8f5e9] text-[#006837] font-semibold py-3 rounded-xl transition-colors text-sm">
                  Enquire About This Course
                </a>
              </div>
            ))}
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
          <p className="text-xs font-semibold tracking-widest text-gray-400 mb-5 uppercase">Companies That Hire From Us</p>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((company) => (
              <span key={company} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-700 bg-white">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Reach ── */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            How to Reach from Namakkal
          </h2>
          <p className="text-gray-500 text-base mb-4">Multiple transport options to get to campus easily</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-10" />
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm text-left">
            <div className="bg-[#006837] text-white px-6 py-5 flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="font-bold text-lg">Namakkal → JKKN Dental Campus</p>
                <p className="text-white/80 text-sm">5-10 km • 15-20 minutes</p>
              </div>
            </div>
            {transportRows.map((row, i) => (
              <div key={row.label} className={`flex items-start gap-4 px-6 py-5 ${i < transportRows.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-[#FBFBEE] flex items-center justify-center text-xl flex-shrink-0">{row.icon}</div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-gray-400 mb-1">{row.label}</p>
                  <p className="text-gray-800 text-sm leading-relaxed">{row.text}</p>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-[#FBFBEE] rounded-2xl p-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Students from Namakkal Love JKKN Dental
          </h2>
          <p className="text-gray-500 text-base mb-4">Hear from students who made the right choice</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-left shadow-sm">
              <div className="text-5xl text-gray-200 font-serif leading-none mb-3 select-none">&quot;</div>
              <p className="text-gray-500 text-sm leading-relaxed italic mb-6">
                [Student testimonial from Namakkal to be added here. Include their experience at JKKN Dental, what they liked about the campus, and their career outcomes.]
              </p>
              <div>
                <p className="font-bold text-gray-900 text-sm">[Student Name]</p>
                <p className="text-gray-400 text-xs mt-0.5">[Course], Batch of [Year] • Now at [Company]</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-left shadow-sm">
              <div className="text-5xl text-gray-200 font-serif leading-none mb-3 select-none">&quot;</div>
              <p className="text-gray-500 text-sm leading-relaxed italic mb-6">
                [Second student testimonial from Namakkal to be added here. Focus on the ease of commute/hostel life and the quality of education.]
              </p>
              <div>
                <p className="font-bold text-gray-900 text-sm">[Student Name]</p>
                <p className="text-gray-400 text-xs mt-0.5">[Course], Batch of [Year]</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-[#7cb983] bg-[#FBFBEE] rounded-2xl p-6 flex items-center justify-center text-center">
              <p className="text-[#7cb983] text-sm font-medium leading-relaxed">
                Add 2-3 real student testimonials from Namakkal or nearby areas before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base mb-4">Namakkal Dental College — Your Questions Answered</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-12" />
          <div className="text-left space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden border transition-colors ${openFaq === i ? 'border-[#7cb983]' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 text-sm sm:text-base bg-white hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-[#006837]">
                    {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-[#7cb983]/20 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore More Cities ── */}
      <section className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Explore More Cities
          </h2>
          <p className="text-gray-500 text-base mb-4">Find the best dental college near your city</p>
          <div className="w-14 h-1 bg-[#7cb983] rounded mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {cities.slice(0, 3).map((city) => (
              <Link href={city.href} key={city.name} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <span className="flex-shrink-0">{city.icon}</span>
                <span className="font-bold text-gray-900 text-base flex-1 text-left">{city.name}</span>
                <span className="text-gray-400 text-sm">{city.dist}</span>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {cities.slice(3).map((city) => (
              <Link href={city.href} key={city.name} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer sm:col-span-1">
                <span className="flex-shrink-0">{city.icon}</span>
                <span className="font-bold text-gray-900 text-base flex-1 text-left">{city.name}</span>
                <span className="text-gray-400 text-sm">{city.dist}</span>
              </Link>
            ))}
          </div>
          <a href="/academics/" className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
            View All Programmes
          </a>
        </div>
      </section>

      <ScrollToTop />

      </main>
    </>
  );
}
