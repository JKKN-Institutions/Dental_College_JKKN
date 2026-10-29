import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import EnquirySection from '@/components/lead/EnquirySection';

// Approvals & Official Data (added 2026-10-29). Until then this URL answered 404 while its four
// child pages worked. Every value below was read live on the official portal named next to it on
// 2026-10-29 (report: Desktop/dental-official-data-for-site-2026-10-29.html). Wording rule: the NDC
// portal has separate "Approved", "Recognised" and "Permitted" columns - use the column it shows.
// No date is given for the DCI -> NDC change: no official page read that day shows one.

const TITLE = 'Approvals & Official Data | JKKN Dental College & Hospital';
const DESCRIPTION =
  'JKKN Dental College approvals from official sources: NDC seats (BDS 100, MDS 18), TN Dr. M.G.R. Medical University affiliation, NAAC A, AISHE C-45823.';
const URL = 'https://dental.jkkn.ac.in/about/approvals-and-affiliation/';

export const metadata: Metadata = {
  // The root layout template adds " | JKKN Dental College".
  title: 'Approvals & Official Data',
  description: DESCRIPTION,
  alternates: { canonical: '/about/approvals-and-affiliation/' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'website', siteName: 'JKKN Dental College & Hospital' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

type SourceKey = 'ndc' | 'uni' | 'naac' | 'aishe' | 'nirf' | 'tnsc' | 'prospectus';

const SOURCES: Record<SourceKey, { body: string; label: string; url: string; asOn: string }> = {
  ndc: {
    body: 'National Dental Commission',
    label: 'College Search > College Details',
    url: 'https://dciindia.gov.in/',
    asOn: 'read 29-10-2026',
  },
  uni: {
    body: 'The Tamil Nadu Dr. M.G.R. Medical University',
    label: 'Seat Matrix 2025-26 (BDS and MDS)',
    url: 'https://www.tnmgrmu.ac.in/affiliation/affiliated-institutions/seat-matrix-for-the-academic-year-2025-26/',
    asOn: 'read 29-10-2026',
  },
  naac: {
    body: 'NAAC',
    label: 'Institutions with valid accreditation as on 14-08-2025',
    url: 'https://naac.gov.in/index.php/en/2-uncategorised/32-accreditation-status',
    asOn: 'read 29-10-2026',
  },
  aishe: {
    body: 'AISHE (Ministry of Education)',
    label: 'Higher Education Institution Directory',
    url: 'https://dashboard.aishe.gov.in/hedirectory/',
    asOn: 'read 29-10-2026',
  },
  nirf: {
    body: 'NIRF (Ministry of Education)',
    label: 'India Rankings 2025 - Dental, participated institutes',
    url: 'https://www.nirfindia.org/Rankings/2025/DentalRankingALL.html',
    asOn: 'read 29-10-2026',
  },
  tnsc: {
    body: 'Selection Committee, DME&R, Government of Tamil Nadu',
    label: 'Notifications 2026-27',
    url: 'https://tnmedicalselection.net/Notification.aspx',
    asOn: 'as on 28-10-2026',
  },
  prospectus: {
    body: 'Selection Committee, DME&R, Government of Tamil Nadu',
    label: 'Prospectus MBBS/BDS 2025-26, pages 53 and 146',
    url: 'https://tnmedicalselection.net/archives/21052026022251051.pdf',
    asOn: 'read 29-10-2026',
  },
};

const MDS_SEATS = [
  { name: 'Conservative Dentistry & Endodontics', seats: 5 },
  { name: 'Orthodontics & Dentofacial Orthopedics', seats: 5 },
  { name: 'Prosthodontics and Crown & Bridge', seats: 3 },
  { name: 'Oral Medicine & Radiology', seats: 3 },
  { name: 'Periodontology', seats: 2 },
];

const FACTS: { label: string; value: string; src: SourceKey[] }[] = [
  { label: 'Regulator', value: 'Listed by the National Dental Commission (formerly the Dental Council of India)', src: ['ndc'] },
  { label: 'BDS seats 2026-27', value: '100 - recognised 100, permitted 100', src: ['ndc'] },
  { label: 'MDS seats 2026-27', value: '18 permitted in 5 specialities - 7 recognised, 11 approved', src: ['ndc'] },
  { label: 'Name on the NDC record', value: 'JKK Nattraja Dental College & Hospital', src: ['ndc'] },
  { label: 'Established', value: '1987 (NDC record: 1987-88)', src: ['ndc'] },
  { label: 'University', value: 'Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai - institution code 022', src: ['uni'] },
  { label: 'NAAC', value: "Grade 'A', CGPA 3.01, first cycle, declared 27 February 2025", src: ['naac'] },
  { label: 'AISHE code', value: 'C-45823 - Private Un-Aided, affiliated college', src: ['aishe'] },
  { label: 'Minority status', value: "Minority institution, as shown in the university's BDS seat matrix 2025-26", src: ['uni'] },
  { label: 'Seat split', value: 'Minority self-financing college: 50:50 between government quota and management quota', src: ['prospectus'] },
  { label: 'Counselling', value: 'Government-quota and management-quota seats (including minority and NRI seats) are allotted by the Tamil Nadu Selection Committee', src: ['tnsc'] },
  { label: 'NIRF', value: 'Took part in NIRF India Rankings 2025, Dental category', src: ['nirf'] },
];

const DOCUMENTS = [
  { href: '/about/approvals-and-affiliation/dci-bds/', label: 'BDS permission letter and recognition order', desc: 'Dental Council of India permission (27 May 1987) and the Ministry of Health and Family Welfare recognition order (18 January 2013), PDF.' },
  { href: '/about/approvals-and-affiliation/dci-mds/', label: 'MDS letters of permission', desc: 'Ministry of Health and Family Welfare letters, including Oral Medicine & Radiology, PDF.' },
  { href: '/about/approvals-and-affiliation/affiliation-bds/', label: 'University affiliation - BDS', desc: 'The Tamil Nadu Dr. M.G.R. Medical University letters, PDF.' },
  { href: '/about/approvals-and-affiliation/affiliation-mds/', label: 'University affiliation - MDS', desc: 'The Tamil Nadu Dr. M.G.R. Medical University letters, PDF.' },
  { href: '/accreditation/naac/', label: 'NAAC accreditation', desc: "Grade 'A', CGPA 3.01, the certificate and the NAAC documents." },
  { href: '/accreditation/nirf/nirf-2025/dental/', label: 'NIRF 2025 data - Dental', desc: 'The data the college submitted to NIRF, PDF.' },
  { href: '/accreditation/nirf/nirf-2026/dental/', label: 'NIRF 2026 data submitted - Dental', desc: 'The data the college submitted to NIRF, PDF.' },
];

const FAQS: { q: string; a: string; voice: string; src: SourceKey[] }[] = [
  {
    q: 'Is JKKN Dental College approved by the National Dental Commission?',
    a: "Yes. JKKN Dental College & Hospital, Komarapalayam, is listed on the National Dental Commission's college search with 100 BDS seats and 18 MDS seats permitted for 2026-27. The college is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    voice: 'JKKN dental college NDC approval iruka?',
    src: ['ndc'],
  },
  {
    q: 'How many BDS and MDS seats does JKKN Dental College have?',
    a: 'JKKN Dental College has 100 BDS seats and 18 MDS seats for 2026-27, as shown on the National Dental Commission portal. The MDS seats are Conservative Dentistry & Endodontics 5, Orthodontics 5, Prosthodontics 3, Oral Medicine & Radiology 3 and Periodontology 2.',
    voice: 'JKKN la BDS evlo seat, MDS evlo seat?',
    src: ['ndc'],
  },
  {
    q: 'What is the NAAC grade of JKKN Dental College?',
    a: "JKKN Dental College & Hospital holds NAAC Grade 'A' with a CGPA of 3.01 in its first cycle, declared on 27 February 2025. The college appears under the name J K K Nattraja Dental College and Hospital on NAAC's list of accredited institutions.",
    voice: 'JKKN dental NAAC grade enna?',
    src: ['naac'],
  },
  {
    q: 'Which university is JKKN Dental College affiliated to?',
    a: 'JKKN Dental College & Hospital is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The university lists the college under institution code 022 in its BDS and MDS seat matrix for 2025-26, with 100 BDS seats and 18 MDS seats.',
    voice: 'JKKN dental endha university kooda affiliate?',
    src: ['uni'],
  },
  {
    q: 'How are management-quota BDS seats at JKKN filled?',
    a: 'In Tamil Nadu, management-quota seats in self-financing dental colleges, including minority and NRI seats, are filled through the Selection Committee of the Directorate of Medical Education and Research. JKKN is a minority institution, so its BDS seats are split 50:50 between government and management quota.',
    voice: 'JKKN la management quota seat epdi kidaikum?',
    src: ['tnsc', 'prospectus'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function SourceLine({ keys }: { keys: SourceKey[] }) {
  return (
    <p className="mt-2 text-xs text-gray-600 leading-relaxed">
      Source:{' '}
      {keys.map((k, i) => (
        <span key={k}>
          {i > 0 && '; '}
          {SOURCES[k].body},{' '}
          <a href={SOURCES[k].url} target="_blank" rel="noopener noreferrer" className="underline text-[#0b6d41] break-words">
            {SOURCES[k].label}
          </a>
          , {SOURCES[k].asOn}
        </span>
      ))}
    </p>
  );
}

export default function ApprovalsAndAffiliationPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'About Us', url: 'https://dental.jkkn.ac.in/about/' },
          { name: 'Approvals & Official Data', url: URL },
        ]}
      />
      <Header />
      <main className="min-h-screen bg-[#fbfbee]">
        <section className="bg-[#0b6d41] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-gray-200 mb-3">
              <Link href="/" className="underline">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>About Us</span>
              <span aria-hidden="true"> / </span>
              <span>Approvals &amp; Official Data</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Approvals, Affiliation and Official Data</h1>
            <p className="hero-description text-gray-100 mt-4 text-base sm:text-lg leading-relaxed max-w-3xl">
              JKKN Dental College &amp; Hospital, Komarapalayam, is listed by the National Dental Commission with 100
              BDS and 18 MDS seats permitted for 2026-27. It is affiliated to The Tamil Nadu Dr. M.G.R. Medical
              University, Chennai (institution code 022), holds NAAC Grade A (CGPA 3.01) and carries AISHE code C-45823.
            </p>
          </div>
        </section>

        <article className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#0b6d41] mb-2">Key facts from official sources</h2>
          <p className="text-sm text-gray-700 mb-6">
            Each value is copied as the official portal shows it, with the portal and the date it was read.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FACTS.map((f) => (
              <div key={f.label} className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{f.label}</dt>
                <dd className="mt-1 text-base font-semibold text-gray-900">{f.value}</dd>
                <dd>
                  <SourceLine keys={f.src} />
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl font-bold text-[#0b6d41] mt-12 mb-4">MDS seats by speciality, 2026-27</h2>
          <ul className="rounded-xl bg-white border border-gray-100 shadow-sm divide-y divide-gray-100 list-none p-0 m-0">
            {MDS_SEATS.map((s) => (
              <li key={s.name} className="flex items-center justify-between gap-4 px-4 py-3">
                <span className="text-gray-900">{s.name}</span>
                <span className="font-bold text-[#0b6d41] whitespace-nowrap">{s.seats} seats</span>
              </li>
            ))}
          </ul>
          <SourceLine keys={['ndc', 'uni']} />

          <h2 className="text-2xl font-bold text-[#0b6d41] mt-12 mb-6">Documents</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
            {DOCUMENTS.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="block h-full rounded-xl bg-white border border-gray-100 p-4 shadow-sm hover:border-[#0b6d41] transition-colors"
                >
                  <span className="block font-semibold text-[#0b6d41]">{d.label}</span>
                  <span className="block mt-1 text-sm text-gray-600">{d.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-gray-600">Dates as printed on each letter.</p>

          <h2 className="text-2xl font-bold text-[#0b6d41] mt-12 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <section key={f.q} className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{f.q}</h3>
                <p className="mt-1 text-xs italic text-gray-500">Also asked: {f.voice}</p>
                <p className="mt-3 text-gray-800 leading-relaxed">{f.a}</p>
                <SourceLine keys={f.src} />
              </section>
            ))}
          </div>
        </article>

        <EnquirySection sourcePage="approvals" />
      </main>
      <Footer />
    </>
  );
}
