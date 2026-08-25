'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import Breadcrumb from '@/components/Breadcrumb';
import TnMdsSeatMatrixTable from '@/components/mds/TnMdsSeatMatrixTable';
import DentalEnquiryForm from '@/components/lead/DentalEnquiryForm';
import { generateFAQSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { TN_MDS_SOURCE, TN_MDS_TOTALS } from '@/data/tnMdsSeatMatrix';

/**
 * Shared shell for the three MDS cluster pages - seats, colleges, specialities.
 *
 * The cluster exists because one page was trying to answer four different questions and
 * therefore ranked mid-page-one for all of them and first for none. Each child page answers
 * exactly one question, and the hub keeps the fees question it already ranks for.
 *
 * The answer capsule at the top is deliberately 40-55 words and self-contained: that is the
 * shape an answer engine can lift whole, and it is the first thing on the page for a parent
 * reading on a phone.
 */

export interface MdsFaq {
  question: string;
  answer: string;
}

export interface MdsClusterPageProps {
  slug: string;
  h1: string;
  kicker: string;
  /** 40-55 words, self-contained, no pronouns pointing outside itself. */
  answer: string;
  intro: string;
  faqs: MdsFaq[];
  showSpecialities?: boolean;
  children?: React.ReactNode;
}

const SIBLINGS = [
  {
    href: '/academics/details-of-academic-programs/mds/',
    label: 'MDS fees in Tamil Nadu',
    blurb: 'Government quota, management quota and the total three-year cost.',
    slug: '',
  },
  {
    href: '/academics/details-of-academic-programs/mds/seats-in-tamil-nadu/',
    label: 'MDS seats in Tamil Nadu',
    blurb: 'All 435 sanctioned seats, college by college and speciality by speciality.',
    slug: 'seats-in-tamil-nadu',
  },
  {
    href: '/academics/details-of-academic-programs/mds/colleges-in-tamil-nadu/',
    label: 'MDS colleges in Tamil Nadu',
    blurb: 'Every affiliated MDS college, where it is and how many seats it holds.',
    slug: 'colleges-in-tamil-nadu',
  },
  {
    href: '/academics/details-of-academic-programs/mds/specialities-in-tamil-nadu/',
    label: 'MDS specialities in Tamil Nadu',
    blurb: 'All nine branches and how the 435 seats split between them.',
    slug: 'specialities-in-tamil-nadu',
  },
];

export default function MdsClusterPage({
  slug,
  h1,
  kicker,
  answer,
  intro,
  faqs,
  showSpecialities = true,
  children,
}: MdsClusterPageProps) {
  const url = `https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/${slug}/`;

  const speakable = generateSpeakableWebPageSchema({
    title: h1,
    description: answer,
    url,
    dateModified: TN_MDS_SOURCE.retrieved,
    speakableCssSelectors: ['h1', '.answer-capsule', '.faq-answer'],
  });

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `MDS sanctioned intake ${TN_MDS_SOURCE.academicYear}, Tamil Nadu`,
    description: `Seat-wise sanctioned MDS intake for the academic year ${TN_MDS_SOURCE.academicYear} across ${TN_MDS_TOTALS.colleges} dental colleges affiliated to ${TN_MDS_SOURCE.authority}, covering ${TN_MDS_TOTALS.specialities} specialities and ${TN_MDS_TOTALS.seats} seats.`,
    url,
    isBasedOn: TN_MDS_SOURCE.url,
    creator: { '@type': 'Organization', name: TN_MDS_SOURCE.authority },
    dateModified: TN_MDS_SOURCE.retrieved,
    license: 'https://dental.jkkn.ac.in/',
  };

  const others = SIBLINGS.filter((s) => s.slug !== slug);

  return (
    <main className="overflow-x-hidden bg-[#FBFBEE]">
      <StructuredData data={speakable} />
      <StructuredData data={generateFAQSchema(faqs)} />
      <StructuredData data={datasetSchema} />
      <Header />

      <section className="bg-[#006837] text-white pt-10 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb variant="onDark"
            items={[
              { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
              { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
              {
                name: 'MDS',
                url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/mds/',
              },
              { name: kicker, url },
            ]}
          />
          <p className="mt-6 text-[#d4f1e4] font-semibold uppercase tracking-wider text-xs sm:text-sm">
            {kicker} &middot; Academic year {TN_MDS_SOURCE.academicYear}
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {h1}
          </h1>
          <p className="answer-capsule hero-description mt-5 max-w-3xl text-base sm:text-lg text-gray-100 leading-relaxed">
            {answer}
          </p>
          <p className="mt-4 text-xs sm:text-sm text-[#d4f1e4]">
            Figures on this page are read from {TN_MDS_SOURCE.authority}&rsquo;s own sanctioned-intake
            document, retrieved {TN_MDS_SOURCE.retrieved}. {TN_MDS_SOURCE.scopeNote}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            {intro}
          </p>

          <TnMdsSeatMatrixTable showSpecialities={showSpecialities} />

          <div className="mt-8 rounded-xl border border-[#006837]/20 bg-white p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              Download the full seat matrix
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              The same {TN_MDS_TOTALS.colleges}-college table as a single PDF, with the source
              document and retrieval date printed on it, so it can be checked against the
              university&rsquo;s own copy.
            </p>
            <a
              href="/pdf/TN-MDS-Seat-Matrix-2025-26.pdf"
              className="inline-flex items-center gap-2 bg-[#006837] hover:bg-[#00552d] text-white font-semibold px-5 py-3 rounded-full text-sm sm:text-base transition-colors"
              download
            >
              Tamil Nadu MDS seat matrix 2025-26 (PDF)
            </a>
          </div>

          {children}
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-6">
            Questions parents and NEET MDS candidates ask
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.question} className="border-l-4 border-[#7cb983] pl-4">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1.5">
                  {f.question}
                </h3>
                <p className="faq-answer text-gray-700 text-sm sm:text-base leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-6">
            More on MDS in Tamil Nadu
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-[#006837] hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-[#006837] text-sm sm:text-base">
                  {s.label}
                </span>
                <span className="block mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {s.blurb}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#d4f1e4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2">
            MDS admission 2026-27 at JKKN Dental College
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            JKKN holds 18 of the {TN_MDS_TOTALS.seats} sanctioned MDS seats in the university&rsquo;s
            matrix, across five specialities, at Komarapalayam in Namakkal district. Send an
            enquiry and the admissions office will call back with the current fee structure and
            counselling dates.
          </p>
          <DentalEnquiryForm sourcePage={`mds-${slug || 'fees'}`} />
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
