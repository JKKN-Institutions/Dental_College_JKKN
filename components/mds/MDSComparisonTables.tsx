"use client";

/**
 * MDS Comparison Tables — SEO + AEO featured snippet bait
 *
 * Includes 2 tables:
 * 1. MDS Specializations & Seat Matrix at JKKN
 * 2. MDS Fees Breakdown (Year-wise)
 *
 * Data sourced from aggregator benchmarks (Shiksha, CollegeDunia, Careers360)
 * and official JKKN records. Aggregated data flagged [UPDATE] where unverified.
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
          MDS Colleges in Tamil Nadu — Complete Comparison
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Compare top MDS dental colleges in Tamil Nadu, view seat matrix, fee
          structure, and benchmark JKKN Dental College against other leading
          institutions. Data updated for MDS Admissions 2026.
        </p>

        {/* Table 1: MDS Seat Matrix at JKKN */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#006837] mb-4">
            MDS Specializations &amp; Seat Matrix at JKKN Dental College
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
          <p className="text-gray-600 mb-6">
            MDS fees in Tamil Nadu vary significantly between government and
            private dental colleges. Government MDS seats start from ₹50,000
            per year, while private MDS fees range from ₹4.5 lakh to ₹52 lakh
            annually depending on the specialization and institution.
          </p>
          <div className="overflow-x-auto rounded-xl border-2 border-[#7cb983]">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="p-4 font-bold">College Type</th>
                  <th className="p-4 font-bold">Annual Tuition Fees</th>
                  <th className="p-4 font-bold">Total MDS Fees (3 Years)</th>
                  <th className="p-4 font-bold">Seat Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="p-4 font-semibold">Government Dental Colleges</td>
                  <td className="p-4">₹50,000 – ₹1,00,000</td>
                  <td className="p-4">₹1.5 – ₹3 lakh</td>
                  <td className="p-4">Merit (NEET MDS)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Private — Government Quota</td>
                  <td className="p-4">₹4,50,000 – ₹7,00,000</td>
                  <td className="p-4">₹13.5 – ₹21 lakh</td>
                  <td className="p-4">Merit (NEET MDS)</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="p-4 font-semibold">Private — Management Quota</td>
                  <td className="p-4">₹9,00,000 – ₹18,00,000</td>
                  <td className="p-4">₹27 – ₹54 lakh</td>
                  <td className="p-4">Management</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Private — NRI Quota</td>
                  <td className="p-4">$15,000 – $25,000</td>
                  <td className="p-4">$45,000 – $75,000</td>
                  <td className="p-4">NRI</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3 italic">
            For exact MDS fees at JKKN Dental College, contact admissions at
            +91 9345855001 or email dental@jkkn.ac.in. Fees are revised annually
            as per TN Fee Committee orders.
          </p>
        </div>
      </div>
    </section>
  );
}
