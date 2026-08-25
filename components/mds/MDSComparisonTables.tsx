"use client";

import { TN_MDS_FEES, TN_MDS_FEE_SOURCE } from '@/data/tnMdsFees';

/**
 * MDS Comparison Tables — SEO + AEO featured snippet bait
 *
 * Includes 2 tables:
 * 1. MDS Specializations & Seat Matrix at JKKN
 * 2. MDS Fees Breakdown (Year-wise)
 *
 * FEE DATA IS NO LONGER FROM AGGREGATORS. Table 2 reads data/tnMdsFees.ts, which is
 * GENERATED from the Tamil Nadu Selection Committee's own MDS prospectuses for
 * 2026-2027. The previous table came from aggregator benchmarks (Shiksha,
 * CollegeDunia, Careers360) and was measurably wrong: it published Rs 50,000 to
 * Rs 1,00,000 as government MDS tuition where the prospectus says Rs 30,000, and its
 * prose claimed private fees reach Rs 52 lakh a year against its own table's
 * Rs 18,00,000 maximum. Table 1, JKKN's own seat matrix, is unchanged.
 */

export default function MDSComparisonTables() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="mds-comparison-heading">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#7cb983] rounded-full px-6 py-2">
            <span className="text-white font-semibold text-sm uppercase">MDS Tamil Nadu Data</span>
          </div>
        </div>

        <h2
          id="mds-comparison-heading"
          className="text-3xl md:text-4xl font-bold text-[#006837] text-center mb-4"
        >
          How JKKN&rsquo;s MDS Seats and Fees Compare
        </h2>
        <p className="text-gray-600 text-center mb-6 max-w-4xl mx-auto leading-relaxed">
          JKKN&rsquo;s own seats, speciality by speciality, and what an MDS costs by quota
          across Tamil Nadu. Updated for MDS admissions 2026-27.
        </p>
        {/* The full Tamil Nadu list lives on its own page. This heading deliberately does NOT
            say "MDS colleges in Tamil Nadu" - that phrase belongs to the child page, and the
            hub was bidding against it (A-03, redefined 2026-08-24). */}
        <p className="text-center mb-12">
          <a
            href="/academics/details-of-academic-programs/mds/colleges-in-tamil-nadu/"
            className="inline-flex items-center gap-2 text-[#006837] font-semibold underline hover:no-underline"
          >
            See the full list of all 19 MDS colleges in Tamil Nadu &rarr;
          </a>
        </p>

        {/* Table 1: MDS Seat Matrix at JKKN */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#006837] mb-4">
            JKKN&rsquo;s 18 MDS Seats, Speciality by Speciality
          </h3>
          <p className="text-gray-600 mb-6">
            JKKN Dental College offers 18 MDS seats across 5 DCI-approved
            specializations. All programs are 3 years, full-time, and affiliated
            to The Tamil Nadu Dr. M.G.R. Medical University.
          </p>
          <div className="overflow-x-auto rounded-xl border-2 border-[#7cb983]">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="p-4 font-bold">Specialization</th>
                  <th className="p-4 font-bold">Seats</th>
                  <th className="p-4 font-bold">Duration</th>
                  <th className="p-4 font-bold">Degree Awarded</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="p-4 font-semibold">
                    Conservative Dentistry &amp; Endodontics
                  </td>
                  <td className="p-4">5</td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4">MDS</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">
                    Prosthodontics, Crown &amp; Bridge
                  </td>
                  <td className="p-4">3</td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4">MDS</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="p-4 font-semibold">
                    Periodontics &amp; Oral Implantology
                  </td>
                  <td className="p-4">2</td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4">MDS</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">
                    Oral Medicine &amp; Radiology
                  </td>
                  <td className="p-4">3</td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4">MDS</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="p-4 font-semibold">
                    Orthodontics &amp; Dentofacial Orthopedics
                  </td>
                  <td className="p-4">5</td>
                  <td className="p-4">3 Years</td>
                  <td className="p-4">MDS</td>
                </tr>
                <tr className="bg-[#006837] text-white font-bold">
                  <td className="p-4">Total MDS Seats</td>
                  <td className="p-4">18</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: MDS Fees Breakdown */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#006837] mb-4">
            MDS Course Fees Structure in Tamil Nadu
          </h3>
          <p className="text-gray-600 mb-4">
            Tamil Nadu&rsquo;s MDS admission prospectuses set exactly one tuition
            amount &mdash; {TN_MDS_FEES[0].tuitionPerYear} a year for Government
            Institutions. For every self-financing seat, government quota and
            management or NRI alike, both prospectuses say the tuition is
            &ldquo;as prescribed by the {TN_MDS_FEE_SOURCE.committee}&rdquo; and
            publish no figure at all. The table below therefore carries the
            government&rsquo;s own numbers and nothing else.
          </p>
          <div className="overflow-x-auto rounded-xl border-2 border-[#7cb983]">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="p-4 font-bold">Seat Type</th>
                  <th className="p-4 font-bold">Annual Tuition</th>
                  <th className="p-4 font-bold">Security Deposit</th>
                  <th className="p-4 font-bold">Application Fee</th>
                </tr>
              </thead>
              <tbody>
                {TN_MDS_FEES.map((r, i) => (
                  <tr
                    key={r.id}
                    className={`border-b border-gray-200 ${
                      i % 2 === 0 ? 'bg-[#FBFBEE]' : ''
                    }`}
                  >
                    <td className="p-4 font-semibold">
                      {r.category}
                      <span className="block mt-0.5 text-xs font-normal text-gray-500">
                        {r.seatCategory}
                      </span>
                    </td>
                    <td className="p-4">
                      {r.tuitionIsOfficial ? (
                        <span className="font-semibold">{r.tuitionPerYear}</span>
                      ) : (
                        <span className="text-gray-600">{r.tuitionPerYear}</span>
                      )}
                      <span className="block mt-0.5 text-xs text-gray-500">
                        {r.clause}
                      </span>
                    </td>
                    <td className="p-4">{r.securityDeposit}</td>
                    <td className="p-4">
                      {r.applicationFee}
                      <span className="block mt-0.5 text-xs text-gray-500">
                        plus {r.registrationFee} at counselling registration
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            <strong>Source:</strong> {TN_MDS_FEE_SOURCE.authority} &mdash;{' '}
            {TN_MDS_FEE_SOURCE.gq.label} ({TN_MDS_FEE_SOURCE.gq.order}) and{' '}
            {TN_MDS_FEE_SOURCE.mq.label} ({TN_MDS_FEE_SOURCE.mq.order}).
            Retrieved {TN_MDS_FEE_SOURCE.retrieved} from{' '}
            {TN_MDS_FEE_SOURCE.site}. Security deposit is refundable to
            candidates who get no seat, per the prospectus.
          </p>
          <p className="text-sm text-gray-500 mt-3 italic">
            No per-college private tuition figure is quoted here because none is
            published in these orders &mdash; the {TN_MDS_FEE_SOURCE.committee}{' '}
            fixes it for each year. For JKKN&rsquo;s own MDS fees, ask admissions
            on +91 9345855001 or dental@jkkn.ac.in.
          </p>
        </div>
      </div>
    </section>
  );
}
