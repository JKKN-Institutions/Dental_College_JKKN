import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquirySection from '@/components/lead/EnquirySection';
import collegeFacts from '@/data/collegeFacts';

export const metadata: Metadata = {
  title: 'About JKKN Dental College | Vision & Overview',
  description: 'Learn about JKKN Dental College & Hospital — NDC approved, NAAC A accredited, affiliated to TN Dr. MGR Medical University, Komarapalayam, Namakkal.',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About JKKN Dental College | Vision & Overview',
    description: 'Learn about JKKN Dental College & Hospital — NDC approved, NAAC A accredited, affiliated to TN Dr. MGR Medical University, Komarapalayam, Namakkal.',
    url: 'https://dental.jkkn.ac.in/about/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About JKKN Dental College | Vision & Overview',
    description: 'Learn about JKKN Dental College & Hospital — NDC approved, NAAC A accredited, affiliated to TN Dr. MGR Medical University, Komarapalayam, Namakkal.',
  },
};

// Schema #4d: BreadcrumbList – /about Page
const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://dental.jkkn.ac.in/about/" }
  ]
};

export default function AboutPage() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'About Us | JKKN Dental College & Hospital',
    description: 'Learn about JKKN Dental College & Hospital — founded 1987, affiliated to TN Dr. MGR Medical University, offering BDS and MDS programs in Komarapalayam, Namakkal.',
    url: 'https://dental.jkkn.ac.in/about/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <>
      <StructuredData data={aboutBreadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />
      <main className="min-h-screen bg-[#fbfbee]">
        {/* Until 2026-10-21 this page rendered nothing but schema - a blank screen from the main menu
            (marketing audit L7). Every figure below comes from data/collegeFacts.ts, which records
            the source of each one. */}
        <section className="bg-[#0b6d41] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#ffde59] text-xs font-semibold tracking-widest uppercase mb-2">About Us</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">About JKKN Dental College &amp; Hospital</h1>
            <p className="hero-description text-gray-100 mt-4 text-base sm:text-lg leading-relaxed max-w-3xl">
              JKKN Dental College &amp; Hospital was established in {collegeFacts.foundedYear} at Komarapalayam,
              Namakkal District, and is part of JKKN Institutions, founded in {collegeFacts.trustFoundedYear}. It is
              approved by the National Dental Commission (formerly the Dental Council of India), affiliated to The
              Tamil Nadu Dr. M.G.R. Medical University and accredited by NAAC with an &lsquo;{collegeFacts.naacGrade}&rsquo; Grade.
            </p>
          </div>
        </section>

        <article className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#0b6d41] mb-6">JKKN Dental College at a glance</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{f.label}</dt>
                <dd className="mt-1 text-base font-semibold text-gray-900">{f.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl font-bold text-[#0b6d41] mt-12 mb-6">Explore</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block h-full rounded-xl bg-white border border-gray-100 p-4 shadow-sm hover:border-[#0b6d41] transition-colors"
                >
                  <span className="block font-semibold text-[#0b6d41]">{l.label}</span>
                  <span className="block mt-1 text-sm text-gray-600">{l.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </article>

        <EnquirySection sourcePage="about" />
      </main>
      <Footer />
    </>
  );
}

const facts = [
  { label: 'Established', value: `${collegeFacts.foundedYear}, Komarapalayam, Namakkal District (NH-544)` },
  { label: 'Approval', value: 'National Dental Commission (formerly Dental Council of India)' },
  { label: 'University', value: collegeFacts.affiliatedUniversity },
  { label: 'Accreditation', value: `NAAC '${collegeFacts.naacGrade}' Grade, CGPA ${collegeFacts.naacScore}, valid up to 26 February 2030` },
  { label: 'Seats', value: `${collegeFacts.bdsSeatCount} BDS · ${collegeFacts.mdsSeatCount} MDS in ${collegeFacts.mdsSpecialisations} specialities` },
  { label: 'Hospital', value: `${collegeFacts.dentalChairs}+ dental chairs, ${collegeFacts.hospitalBeds}+ beds, about ${collegeFacts.dailyPatients} patients a day (confirmed by the college office, 2026)` },
  { label: 'BDS outcome 2024-25', value: `${collegeFacts.placementBds.placed} placed and ${collegeFacts.placementBds.higherStudies} in higher studies of ${collegeFacts.placementBds.graduated} (NIRF 2026 filing)` },
  { label: 'MDS outcome 2024-25', value: `${collegeFacts.placementMds.placed} of ${collegeFacts.placementMds.graduated} placed (NIRF 2026 filing)` },
];

const links = [
  { href: '/about/vision-and-mission/', label: 'Vision & Mission', desc: 'What the college stands for.' },
  { href: '/our-management/', label: 'Our Management', desc: 'Messages from the management.' },
  { href: '/principals-message/', label: "Principal's Message", desc: 'From the Principal of the college.' },
  { href: '/our-trust/', label: 'Our Trust', desc: 'J.K.K. Nattraja Educational Institutions.' },
  { href: '/governing-body/', label: 'Governing Body', desc: 'Members of the governing body.' },
  { href: '/about/approvals-and-affiliation/dci-bds/', label: 'BDS Permission Letter', desc: 'National Dental Commission (formerly DCI) letter, PDF.' },
  { href: '/about/approvals-and-affiliation/dci-mds/', label: 'MDS Permission Letter', desc: 'National Dental Commission (formerly DCI) letter, PDF.' },
  { href: '/about/approvals-and-affiliation/affiliation-bds/', label: 'University Affiliation', desc: 'The Tamil Nadu Dr. M.G.R. Medical University letters, PDF.' },
  { href: '/accreditation/naac/', label: 'NAAC Accreditation', desc: "Grade 'A', CGPA 3.01, and the NAAC documents." },
  { href: '/accreditation/nirf/nirf-2026/dental/', label: 'NIRF 2026', desc: 'The data the college filed with NIRF.' },
  { href: '/about/annual-report/', label: 'Annual Report', desc: 'Yearly report of the college.' },
  { href: '/about/our-institutions/', label: 'Our Institutions', desc: 'The other JKKN colleges and schools.' },
];
