'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function NamakkalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: 'Namakkal',
    programme: '',
    question: '',
  });

  const faqs = [
    {
      q: 'What is the best dental college in Namakkal?',
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
    { icon: '🏥', title: 'Own Hospital', desc: 'DCI-approved dental college with attached hospital for hands-on clinical training' },
    { icon: '👨‍⚕️', title: 'Real Patient Exposure', desc: 'Own dental hospital on campus — students get real patient exposure from Year 1' },
    { icon: '🔬', title: 'Advanced Labs', desc: 'Advanced dental labs, simulation equipment, and digital dentistry training' },
    { icon: '📈', title: 'NEET MDS Results', desc: 'Strong track record in NEET MDS results and higher education' },
    { icon: '🤝', title: 'Community Service', desc: 'Hospital serves the community — builds trust and clinical experience' },
    { icon: '🚌', title: 'Easy Commute', desc: 'Just 5-10 km from Namakkal. Daily commute or comfortable hostel — your choice.' },
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
    { icon: '🛣️', label: 'ROUTE', text: 'NH-544 (Salem-Coimbatore Highway)' },
    { icon: '🚌', label: 'BY BUS', text: 'Frequent local buses and auto-rickshaws available from Namakkal town to Komarapalayam' },
    { icon: '🚆', label: 'NEAREST RAILWAY STATION', text: 'Salem Junction (~40 km from campus)' },
    { icon: '✈️', label: 'NEAREST AIRPORT', text: 'Coimbatore International Airport (Code: CJB) (~110 km)' },
    { icon: '🏠', label: 'CAMPUS ADDRESS', text: 'JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183' },
  ];

  const facilities = [
    { icon: '🔬', title: 'Modern Labs', desc: 'State-of-the-art laboratories and smart classrooms' },
    { icon: '📚', title: 'Digital Library', desc: 'Well-stocked library with digital access and journals' },
    { icon: '🏠', title: 'Hostel', desc: 'Separate hostels for boys and girls with mess facility' },
    { icon: '🚌', title: 'Transport', desc: 'College buses connecting to Namakkal and surrounding areas' },
    { icon: '🏅', title: 'Sports', desc: 'Playground, indoor games, gym, and annual sports events' },
    { icon: '📶', title: 'WiFi Campus', desc: 'High-speed internet across the entire campus' },
  ];

  const cities = [
    { icon: '🚌', name: 'Salem', dist: '40-50 km' },
    { icon: '🛣️', name: 'Erode', dist: '30-40 km' },
    { icon: '🎯', name: 'Tiruppur', dist: '80-90 km' },
    { icon: '✨', name: 'Coimbatore', dist: '100-110 km' },
  ];

  const quickLinks = ['All Programmes', 'Admissions', 'Placements', 'Campus Life', 'Fee Structure', 'Contact Us'];
  const institutions = ['JKKN Group', 'Dental', 'Pharmacy', 'Nursing', 'Engineering', 'Arts & Science', 'Allied Health Sciences'];

  return (
    <main className="overflow-x-hidden w-full">

      {/* ── Top Announcement Bar ── */}
      <div className="bg-[#1a3060] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <span className="flex items-center gap-2 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
            Admissions Open 2026-27
          </span>
          <a href="tel:+919345855001" className="bg-[#2a4080] hover:bg-[#324b99] text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20 transition-colors">
            Call Now
          </a>
          <a href="https://wa.me/919345855001" target="_blank" rel="nofollow noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors">
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24"
        style={{ background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 45%, #0f172a 100%)', minHeight: '88vh' }}
      >
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full">
          🦷 DCI, NAAC Approved • Admissions Open
        </div>
        <h1 className="text-white font-extrabold leading-tight mb-6 max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw + 0.5rem, 3.5rem)' }}>
          Best Dental College Near <span className="text-orange-500">Namakkal</span>
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
          <a href="https://wa.me/919345855001" target="_blank" rel="nofollow noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
            Apply Now — 2026-27
          </a>
          <a href="https://wa.me/919345855001" target="_blank" rel="nofollow noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg text-base">
            {WA_ICON} WhatsApp Us
          </a>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full">✓ DCI</span>
            <span className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full">✓ NAAC</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <p className="text-gray-500 text-sm text-center">Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai</p>
        </div>
      </div>

      {/* ── Distance Card ── */}
      <section className="bg-[#eef2ff] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div className="flex items-start gap-5">
              <div className="text-[#1a3a8a] font-extrabold leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}>
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
              className="flex-shrink-0 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-xl flex flex-col items-center gap-1 transition-colors min-w-[110px] text-center"
            >
              <span className="text-xl">📍</span>
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
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyFeatures.map((item) => (
              <div key={item.title} className="bg-[#f0f4ff] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes Offered ── */}
      <section className="bg-[#f0f4ff] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Programmes Offered
          </h2>
          <p className="text-gray-500 text-base mb-4">Choose the right programme for your career goals</p>
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programmes.map((prog) => (
              <div key={prog.title} className="bg-white rounded-2xl p-6 sm:p-8 text-left shadow-sm">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-lg font-bold text-gray-900 mb-5">{prog.title}</h3>
                <div className="space-y-3 mb-4">
                  {[
                    { label: 'Duration', value: prog.duration },
                    { label: 'Level', value: prog.level },
                    { label: 'Intake', value: prog.intake },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-blue-400 text-sm">{row.label}</span>
                      <span className="text-gray-900 text-sm font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-6">{prog.eligibility}</p>
                <a href="https://wa.me/919345855001" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 rounded-xl transition-colors text-sm">
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
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {placementStats.map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="font-extrabold text-blue-700" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>{stat.value}</div>
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
      <section className="bg-[#f0f4ff] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            How to Reach from Namakkal
          </h2>
          <p className="text-gray-500 text-base mb-4">Multiple transport options to get to campus easily</p>
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-10" />
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm text-left">
            <div className="bg-blue-700 text-white px-6 py-5 flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-bold text-lg">Namakkal → JKKN Dental Campus</p>
                <p className="text-white/80 text-sm">5-10 km • 15-20 minutes</p>
              </div>
            </div>
            {transportRows.map((row, i) => (
              <div key={row.label} className={`flex items-start gap-4 px-6 py-5 ${i < transportRows.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">{row.icon}</div>
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
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-[#f0f4ff] rounded-2xl p-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
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
      <section className="bg-[#f0f4ff] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Students from Namakkal Love JKKN Dental
          </h2>
          <p className="text-gray-500 text-base mb-4">Hear from students who made the right choice</p>
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-12" />
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
            <div className="border-2 border-dashed border-orange-300 bg-orange-50 rounded-2xl p-6 flex items-center justify-center text-center">
              <p className="text-orange-500 text-sm font-medium leading-relaxed">
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
          <p className="text-gray-500 text-base mb-4">Dental College in Namakkal — Your Questions Answered</p>
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-12" />
          <div className="text-left space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden border transition-colors ${openFaq === i ? 'border-blue-300' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 text-sm sm:text-base bg-white hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-blue-600">
                    {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-2 text-gray-500 text-sm leading-relaxed border-t border-blue-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interested? Let's Talk! ── */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2952cc 50%, #1e3a8a 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold text-white mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Interested? Let&apos;s Talk!
          </h2>
          <p className="text-white/80 text-base mb-4">Fill in your details and our admission team will contact you within 24 hours</p>
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-10" />
          <form
            className="text-left space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `https://wa.me/919345855001?text=Name: ${formData.name}%0AMobile: ${formData.mobile}%0ACity: ${formData.city}%0AProgramme: ${formData.programme}%0AQuestion: ${formData.question}`;
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/15 border border-white/30 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full bg-white/15 border border-white/30 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Your City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white/15 border border-white/30 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Programme Interested In</label>
                <select
                  value={formData.programme}
                  onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                  className="w-full bg-white/15 border border-white/30 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors appearance-none"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" className="text-gray-900 bg-white">Select a Programme</option>
                  <option value="BDS" className="text-gray-900 bg-white">BDS (Bachelor of Dental Surgery)</option>
                  <option value="MDS" className="text-gray-900 bg-white">MDS (Master of Dental Surgery)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Any Questions?</label>
              <textarea
                placeholder="e.g., What is the fee for BDS (Bachelor of Dental Surgery)?"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                rows={3}
                className="w-full bg-white/15 border border-white/30 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full transition-all transform hover:scale-[1.02] shadow-lg text-base"
            >
              Submit Enquiry — Get a Call Back
            </button>
            <p className="text-center text-white/70 text-sm">
              Or call us directly:{' '}
              <a href="tel:+919345855001" className="text-white underline hover:text-white/90">+91-XXXXXXXXXX</a>
              {' '}•{' '}
              <a href="https://wa.me/919345855001" target="_blank" rel="nofollow noopener noreferrer" className="text-white underline hover:text-white/90">WhatsApp</a>
            </p>
          </form>
        </div>
      </section>

      {/* ── Explore More Cities ── */}
      <section className="bg-[#eef2ff] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw + 0.5rem, 2.4rem)' }}>
            Explore More Cities
          </h2>
          <p className="text-gray-500 text-base mb-4">Find the best dental college near your city</p>
          <div className="w-14 h-1 bg-orange-500 rounded mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {cities.slice(0, 3).map((city) => (
              <div key={city.name} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl">{city.icon}</span>
                <span className="font-bold text-gray-900 text-base flex-1 text-left">{city.name}</span>
                <span className="text-gray-400 text-sm">{city.dist}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {cities.slice(3).map((city) => (
              <div key={city.name} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer sm:col-span-1">
                <span className="text-2xl">{city.icon}</span>
                <span className="font-bold text-gray-900 text-base flex-1 text-left">{city.name}</span>
                <span className="text-gray-400 text-sm">{city.dist}</span>
              </div>
            ))}
          </div>
          <a href="https://dental.jkkn.ac.in" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
            View All Programmes
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1e3a8a] text-white pt-14 pb-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Col 1 */}
            <div>
              <h3 className="font-bold text-base mb-4">JKKN Dental College &amp; Hospital</h3>
              <p className="text-white/70 text-sm mb-3">Part of JKKN Institutions</p>
              <p className="text-white/70 text-sm mb-3 leading-relaxed">
                Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183, India
              </p>
              <p className="text-white/70 text-sm mb-1">Phone: +91-XXXXXXXXXX</p>
              <p className="text-white/70 text-sm mb-1">WhatsApp: +91-XXXXXXXXXX</p>
              <p className="text-white/70 text-sm">Email: admissions@dental.jkkn.ac.in</p>
            </div>
            {/* Col 2 */}
            <div>
              <h3 className="font-bold text-base mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="https://dental.jkkn.ac.in" className="text-white/70 hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Col 3 */}
            <div>
              <h3 className="font-bold text-base mb-4">JKKN Institutions</h3>
              <ul className="space-y-2">
                {institutions.map((inst) => (
                  <li key={inst}>
                    <a href="https://dental.jkkn.ac.in" className="text-white/70 hover:text-white text-sm transition-colors">{inst}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/50 text-xs text-center leading-relaxed">
              © 2026 JKKN Dental College &amp; Hospital | Part of JKKN Institutions | All institution names follow the JKKN Official Name Registry | Page optimised for SEO, AEO, and GEO
            </p>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/919345855001"
        target="_blank" rel="nofollow noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow-xl transition-all transform hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        {WA_ICON} Chat with Us
      </a>

    </main>
  );
}
