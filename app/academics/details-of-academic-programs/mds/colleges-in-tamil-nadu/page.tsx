'use client';

import MdsClusterPage from '@/components/mds/MdsClusterPage';
import { TN_MDS_COLLEGES, TN_MDS_TOTALS } from '@/data/tnMdsSeatMatrix';

export default function MdsCollegesInTamilNadu() {
  const faqs = [
    {
      question: 'How many MDS colleges are there in Tamil Nadu?',
      answer:
        'There are 19 MDS colleges in Tamil Nadu affiliated to The Tamil Nadu Dr. M.G.R. Medical University for 2025-26 — two government and 17 self-financing — holding 435 sanctioned seats between them. Deemed-to-be universities such as Saveetha and SRM are separate and are not part of this list.',
    },
    {
      question: 'Which are the government MDS colleges in Tamil Nadu?',
      answer:
        'Two: Tamil Nadu Government Dental College and Hospital, Chennai with 42 seats, and Government Dental College & Hospital, Cuddalore with 37 seats. Together they hold 79 of the 435 sanctioned MDS seats.',
    },
    {
      question: 'Which MDS colleges are in the Kongu belt near Erode and Salem?',
      answer:
        'Three of the 19 affiliated colleges sit in Namakkal district: JKKN Dental College & Hospital at Komarapalayam with 18 seats, K.S.R. Institute of Dental Science & Research at Tiruchengode with 20 seats, and Vivekanandha Dental College for Women at Elayampalayam, Tiruchengode with 29 seats.',
    },
    {
      question: 'How do I choose between MDS colleges in Tamil Nadu?',
      answer:
        'Start with the speciality you want, because not every college offers all nine. Then check seat count in that speciality, whether the seat is government or management quota, the distance from home for a three-year full-time course, and the patient load of the attached teaching hospital, since MDS is a clinical degree.',
    },
    {
      question: 'Does JKKN Dental College offer MDS?',
      answer:
        'Yes. JKKN Dental College & Hospital, Komarapalayam is one of the 19 affiliated MDS colleges, with 18 sanctioned seats across five specialities — Conservative Dentistry and Endodontics, Orthodontics and Dentofacial Orthopaedics, Prosthodontics and Crown & Bridge, Oral Medicine & Radiology, and Periodontology.',
    },
  ];

  const byDistrictish = [...TN_MDS_COLLEGES]
    .filter((c) => c.location)
    .reduce<Record<string, number>>((acc, c) => {
      const key = c.location.split(',').pop()!.trim();
      acc[key] = (acc[key] || 0) + c.total;
      return acc;
    }, {});
  const areas = Object.entries(byDistrictish).sort((a, b) => b[1] - a[1]);

  return (
    <MdsClusterPage
      slug="colleges-in-tamil-nadu"
      kicker="MDS colleges"
      h1="MDS Colleges in Tamil Nadu — All 19 Affiliated Colleges, 2025-26"
      answer="Nineteen dental colleges in Tamil Nadu are affiliated to The Tamil Nadu Dr. M.G.R. Medical University and sanctioned to run MDS in 2025-26. Two are government colleges with 79 seats; 17 are self-financing with 356. Together they hold 435 seats across nine specialities."
      intro="This is the complete affiliated list, not a shortlist. Each row shows where the college is, whether it is government or self-financing, and how many seats it holds in each of the nine MDS specialities — so a candidate can see at a glance which colleges actually run the branch they want."
      faqs={faqs}
      showSpecialities
    >
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
          Where the {TN_MDS_TOTALS.seats} seats sit
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 max-w-3xl">
          Grouped by the city or district printed in the university&rsquo;s document. One college
          in the matrix carries no address in the source, so it is left out of this grouping
          rather than being placed by guesswork.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#006837] text-white text-left">
                <th scope="col" className="px-4 py-3 font-semibold">
                  Area
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">
                  MDS seats
                </th>
              </tr>
            </thead>
            <tbody>
              {areas.map(([area, seats]) => (
                <tr key={area} className="odd:bg-white even:bg-gray-50">
                  <th scope="row" className="px-4 py-2.5 text-left font-medium text-gray-900">
                    {area}
                  </th>
                  <td className="px-4 py-2.5 text-right tabular-nums font-semibold text-[#006837]">
                    {seats}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MdsClusterPage>
  );
}
