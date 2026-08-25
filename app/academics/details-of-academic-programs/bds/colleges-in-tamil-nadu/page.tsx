'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import Breadcrumb from '@/components/Breadcrumb';
import DentalEnquiryForm from '@/components/lead/DentalEnquiryForm';
import { generateFAQSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import {
  TN_BDS_COLLEGES,
  TN_BDS_SOURCE,
  TN_BDS_TOTALS,
  JKKN_BDS_CODE,
} from '@/data/tnBdsSeatMatrix';

/**
 * "Dental colleges in Tamil Nadu" - the highest-impression money keyword in the dental
 * register (329 GSC mobile impressions over 90 days, measured 2026-08-25).
 *
 * WHY THIS IS A CODE PAGE AND NOT A BLOG POST. It was planned for /blog/campus/. Measured on
 * 2026-08-25 before writing a word: of the 57 dental pages that earned ANY GSC mobile
 * impression in 90 days, ZERO are /blog/ pages - 0 impressions and 0 clicks against 29,689
 * site-wide, from 165 blog URLs in the sitemap. A near-identical 3,112-word post already exists
 * at /blog/campus/how-to-choose-a-dental-college-in-tamil-nadu-complete-checklist/ and has
 * earned zero of everything. Putting the register's biggest keyword in that container would
 * have been writing into a hole.
 *
 * WHAT BEATS THE PAGE CURRENTLY AT #1. collegedekh.in holds position 1 on real Google for this
 * query (measured 2026-08-24). Its title is the site-wide boilerplate "Best Medical
 * college|Top Engineering College|College Dekh", it carries NO canonical, ZERO schema blocks
 * and 985 words. It ranks on topic match, not on quality. What it does not have is a sourced,
 * dated, complete table - so that is what this page is.
 */

type SortKey = 'intake' | 'name';

export default function DentalCollegesInTamilNadu() {
  const [sort, setSort] = useState<SortKey>('intake');
  const [filter, setFilter] = useState<'all' | 'Government' | 'Self-financing' | 'minority'>('all');

  const rows = useMemo(() => {
    const r = TN_BDS_COLLEGES.filter((c) =>
      filter === 'all' ? true : filter === 'minority' ? c.minority : c.kind === filter,
    );
    return [...r].sort((a, b) =>
      sort === 'intake' ? b.intake - a.intake || a.name.localeCompare(b.name)
        : a.name.localeCompare(b.name),
    );
  }, [sort, filter]);

  const url =
    'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/colleges-in-tamil-nadu/';

  const answer =
    `Tamil Nadu has ${TN_BDS_TOTALS.colleges} dental colleges affiliated to The Tamil Nadu Dr. ` +
    `M.G.R. Medical University, with ${TN_BDS_TOTALS.seats.toLocaleString('en-IN')} sanctioned ` +
    `BDS seats for 2025-26. Three are government colleges holding ${TN_BDS_TOTALS.governmentSeats} ` +
    `seats; ${TN_BDS_TOTALS.selfFinancingColleges} are self-financing holding ` +
    `${TN_BDS_TOTALS.selfFinancingSeats.toLocaleString('en-IN')}. Deemed universities award ` +
    `their own degrees and are counted separately.`;

  const faqs = [
    {
      question: 'How many dental colleges are there in Tamil Nadu?',
      answer:
        'Twenty-three dental colleges in Tamil Nadu are affiliated to The Tamil Nadu Dr. M.G.R. Medical University for 2025-26, holding 2,200 sanctioned BDS seats between them. Three are government colleges with 250 seats and twenty are self-financing with 1,950. Deemed-to-be universities such as Saveetha and SRM award their own degrees and are not in the university matrix, so a larger number quoted elsewhere is usually counting both sets without saying so.',
    },
    {
      question: 'Which are the government dental colleges in Tamil Nadu?',
      answer:
        'Three: Tamil Nadu Government Dental College, Chennai with 100 BDS seats; Government Dental College & Hospital, Cuddalore with 100; and Government Dental College, Pudukottai with 50. Together they hold 250 of the 2,200 sanctioned BDS seats, which is why government-quota cutoffs are so much higher than private ones.',
    },
    {
      question: 'How many BDS seats are there in Tamil Nadu?',
      answer:
        'There are 2,200 sanctioned BDS seats across the 23 affiliated colleges for the 2025-26 academic year. Most colleges are sanctioned 100 seats each; Government Dental College Pudukottai and Sree Mookambika Institute of Dental Sciences are sanctioned 50 each.',
    },
    {
      question: 'Which dental colleges are near Erode, Salem and Namakkal?',
      answer:
        'Four of the 23 affiliated colleges sit in the Kongu belt: JKKN Dental College & Hospital at Komarapalayam in Namakkal district, K.S.R. Institute of Dental Science & Research at Tiruchengode, Vivekanandha Dental College for Women at Elayampalayam, and Nandha Dental College & Hospital at Erode. Each is sanctioned 100 BDS seats.',
    },
    {
      question: 'What does minority status mean on this list?',
      answer:
        'A minority institution reserves a share of its seats for the community it was founded to serve, which changes how its management quota is filled. Eight of the 23 affiliated colleges carry minority status in the university document, including JKKN. It does not affect the sanctioned intake or the NEET requirement.',
    },
    {
      question: 'How do I get admission to a dental college in Tamil Nadu?',
      answer:
        'Through NEET UG. Candidates qualify the national entrance exam, then take part in Tamil Nadu state counselling for government-quota seats or institutional counselling for management-quota seats. Seats are allotted on NEET rank, category and availability, and the BDS course runs five years including a compulsory rotatory internship.',
    },
  ];

  const speakable = generateSpeakableWebPageSchema({
    title: 'Dental Colleges in Tamil Nadu — All 23 BDS Colleges and 2,200 Seats',
    description: answer,
    url,
    dateModified: TN_BDS_SOURCE.retrieved,
    speakableCssSelectors: ['h1', '.answer-capsule', '.faq-answer'],
  });

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Dental colleges in Tamil Nadu affiliated to ${TN_BDS_SOURCE.authority}, ${TN_BDS_SOURCE.academicYear}`,
    description: answer,
    url,
    numberOfItems: TN_BDS_TOTALS.colleges,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [...TN_BDS_COLLEGES]
      .sort((a, b) => b.intake - a.intake || a.name.localeCompare(b.name))
      .map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CollegeOrUniversity',
          name: c.name,
          address: { '@type': 'PostalAddress', addressLocality: c.location, addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
        },
      })),
  };

  const jkkn = TN_BDS_COLLEGES.find((c) => c.code === JKKN_BDS_CODE)!;

  return (
    <main className="overflow-x-hidden bg-[#FBFBEE]">
      <StructuredData data={speakable} />
      <StructuredData data={generateFAQSchema(faqs)} />
      <StructuredData data={itemListSchema} />
      <Header />

      <section className="bg-[#006837] text-white pt-10 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            items={[
              { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
              { name: 'Academics', url: 'https://dental.jkkn.ac.in/academics/' },
              { name: 'BDS', url: 'https://dental.jkkn.ac.in/academics/details-of-academic-programs/bds/' },
              { name: 'Colleges in Tamil Nadu', url },
            ]}
          />
          <p className="mt-6 text-[#7cb983] font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Dental colleges &middot; Academic year {TN_BDS_SOURCE.academicYear}
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Dental Colleges in Tamil Nadu &mdash; All {TN_BDS_TOTALS.colleges} Affiliated Colleges
            and {TN_BDS_TOTALS.seats.toLocaleString('en-IN')} BDS Seats
          </h1>
          <p className="answer-capsule hero-description mt-5 max-w-3xl text-base sm:text-lg text-gray-100 leading-relaxed">
            {answer}
          </p>
          <p className="mt-4 text-xs sm:text-sm text-[#d4f1e4]">
            Every figure here is read from {TN_BDS_SOURCE.authority}&rsquo;s own sanctioned-intake
            document, retrieved {TN_BDS_SOURCE.retrieved}. {TN_BDS_SOURCE.scopeNote}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            This is the complete affiliated list, not a shortlist and not a ranking. Sort it by
            seat count or by name, or filter it to the three government colleges. Where a page
            elsewhere quotes &ldquo;30+ dental colleges in Tamil Nadu&rdquo;, it is usually adding
            the deemed universities to this list without saying so &mdash; both counts are below.
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Filter
            </span>
            {([
              ['all', 'All 23'],
              ['Government', 'Government only'],
              ['Self-financing', 'Self-financing'],
              ['minority', 'Minority status'],
            ] as const).map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setFilter(k)}
                className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-colors ${
                  filter === k
                    ? 'bg-[#006837] text-white border-[#006837]'
                    : 'bg-white text-[#006837] border-[#006837]/30 hover:border-[#006837]'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSort(sort === 'intake' ? 'name' : 'intake')}
              className="ml-auto text-xs sm:text-sm px-3 py-1.5 rounded-full border border-[#006837]/30 text-[#006837] hover:border-[#006837]"
            >
              {sort === 'intake' ? 'Sorted by seats' : 'Sorted by name'}
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm">
              <caption className="sr-only">
                Sanctioned BDS intake for {TN_BDS_SOURCE.academicYear} in dental colleges
                affiliated to {TN_BDS_SOURCE.authority}
              </caption>
              <thead>
                <tr className="bg-[#006837] text-white text-left">
                  <th scope="col" className="px-3 py-3 font-semibold">College</th>
                  <th scope="col" className="px-3 py-3 font-semibold">Location</th>
                  <th scope="col" className="px-3 py-3 font-semibold">Type</th>
                  <th scope="col" className="px-3 py-3 font-semibold">Minority status</th>
                  <th scope="col" className="px-3 py-3 font-semibold text-right">BDS seats</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => {
                  const isJkkn = c.code === JKKN_BDS_CODE;
                  return (
                    <tr
                      key={c.code}
                      className={
                        isJkkn
                          ? 'bg-[#d4f1e4] font-semibold'
                          : 'odd:bg-white even:bg-gray-50 hover:bg-[#FBFBEE]'
                      }
                    >
                      <th scope="row" className="px-3 py-2.5 text-left font-medium text-gray-900">
                        {c.name}
                      </th>
                      <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">{c.location}</td>
                      <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">{c.kind}</td>
                      <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">
                        {c.minority ? 'Minority' : 'Non-minority'}
                      </td>
                      <td className="px-3 py-2.5 text-right tabular-nums font-bold text-[#006837]">
                        {c.intake}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-[#FBFBEE] font-bold border-t-2 border-[#006837]">
                  <th scope="row" className="px-3 py-3 text-left">Tamil Nadu total</th>
                  <td className="px-3 py-3" />
                  <td className="px-3 py-3 text-gray-600">
                    {TN_BDS_TOTALS.governmentColleges} government +{' '}
                    {TN_BDS_TOTALS.selfFinancingColleges} self-financing
                  </td>
                  <td className="px-3 py-3 text-gray-600">
                    {TN_BDS_TOTALS.minorityColleges} minority
                  </td>
                  <td className="px-3 py-3 text-right tabular-nums text-[#006837]">
                    {TN_BDS_TOTALS.seats.toLocaleString('en-IN')}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <strong>Source:</strong> {TN_BDS_SOURCE.authority} &mdash;{' '}
            <a
              href={TN_BDS_SOURCE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006837] underline hover:no-underline"
            >
              {TN_BDS_SOURCE.document}
            </a>
            . Retrieved {TN_BDS_SOURCE.retrieved}. {TN_BDS_SOURCE.scopeNote}
          </p>

          {/* The deemed universities. They are NOT in the university's matrix, so no seat count
              is published for them here - inventing one to look complete is the exact failure
              this page exists to correct. */}
          <div className="mt-10 rounded-xl border border-[#d4af37]/40 bg-white p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              The deemed universities, and why they are not in the table
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              Several well-known Tamil Nadu dental institutions are deemed-to-be universities.
              They award their own degrees rather than the university&rsquo;s, so they do not
              appear in its sanctioned-intake document at all &mdash; among them Saveetha,
              SRM, Sri Ramachandra, Meenakshi Ammal, Sathyabama, Bharath, Sree Balaji and
              Vinayaka Mission&rsquo;s.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong>No seat count is given for them on this page.</strong> The university
              document does not carry one, and quoting an unsourced figure beside sourced ones
              would make the whole table less trustworthy. That is also why the totals above say
              &ldquo;affiliated&rdquo; rather than &ldquo;all of Tamil Nadu&rdquo; &mdash; a
              distinction most pages on this query skip.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link
              href="/academics/details-of-academic-programs/bds/"
              className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-[#006837] hover:shadow-sm transition-all"
            >
              <span className="font-semibold text-[#006837] text-sm sm:text-base">
                BDS admission 2026-27 at JKKN
              </span>
              <span className="block mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Fees, seats, eligibility and the NEET counselling route for the {jkkn.intake}-seat
                programme at Komarapalayam.
              </span>
            </Link>
            <Link
              href="/academics/details-of-academic-programs/mds/colleges-in-tamil-nadu/"
              className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-[#006837] hover:shadow-sm transition-all"
            >
              <span className="font-semibold text-[#006837] text-sm sm:text-base">
                Looking for MDS instead?
              </span>
              <span className="block mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                The postgraduate list is a separate matrix &mdash; 19 affiliated colleges and 435
                MDS seats across nine specialities.
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-6">
            Questions parents and NEET candidates ask
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

      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#d4f1e4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2">
            BDS admission 2026-27 at JKKN Dental College
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            JKKN holds {jkkn.intake} of the {TN_BDS_TOTALS.seats.toLocaleString('en-IN')} sanctioned
            BDS seats in the university&rsquo;s matrix, at Komarapalayam in Namakkal district. Send
            an enquiry and the admissions office will call back with the current fee structure and
            counselling dates.
          </p>
          <DentalEnquiryForm sourcePage="bds-colleges-in-tamil-nadu" />
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
