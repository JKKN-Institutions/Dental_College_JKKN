'use client';

import MdsClusterPage from '@/components/mds/MdsClusterPage';
import { TN_MDS_SPECIALITIES, TN_MDS_TOTALS } from '@/data/tnMdsSeatMatrix';

export default function MdsSeatsInTamilNadu() {
  const faqs = [
    {
      question: 'How many MDS seats are there in Tamil Nadu?',
      answer:
        'There are 435 sanctioned MDS seats in Tamil Nadu for the academic year 2025-26, spread across 19 dental colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University. Two of those colleges are government institutions holding 79 seats between them; the other 17 are self-financing colleges holding 356 seats.',
    },
    {
      question: 'Does the 435 figure include Saveetha, SRM and Sri Ramachandra?',
      answer:
        'No. Saveetha, SRM, Sri Ramachandra, Meenakshi Ammal, Sathyabama, Bharath and similar institutions are deemed-to-be universities. They award their own degrees and are not affiliated to The Tamil Nadu Dr. M.G.R. Medical University, so their seats are not in this matrix. Any page quoting a single all-Tamil-Nadu MDS total without saying which set it counts is mixing two different lists.',
    },
    {
      question: 'Which speciality has the most MDS seats in Tamil Nadu?',
      answer:
        'Conservative Dentistry and Endodontics has the most, with 74 of the 435 seats, followed by Orthodontics and Dentofacial Orthopaedics with 72 and Prosthodontics and Crown & Bridge with 63. Public Health Dentistry has the fewest at 18 seats.',
    },
    {
      question: 'Which Tamil Nadu college has the most MDS seats?',
      answer:
        'Tamil Nadu Government Dental College and Hospital, Chennai has the most at 42 seats, followed by Chettinad Dental College and Research Institute with 38 and Government Dental College & Hospital, Cuddalore with 37.',
    },
    {
      question: 'How many MDS seats does JKKN Dental College have?',
      answer:
        'JKKN Dental College & Hospital, Komarapalayam holds 18 MDS seats across five specialities: Conservative Dentistry and Endodontics 5, Orthodontics and Dentofacial Orthopaedics 5, Prosthodontics and Crown & Bridge 3, Oral Medicine & Radiology 3, and Periodontology 2.',
    },
    {
      question: 'How are MDS seats in Tamil Nadu allotted?',
      answer:
        'Allotment is through NEET MDS. Candidates qualify the national entrance exam, then take part in Tamil Nadu state counselling for government-quota seats or institutional counselling for management-quota seats. Seats are allotted on NEET MDS rank, category and availability in the chosen speciality.',
    },
  ];

  const top = [...TN_MDS_SPECIALITIES].sort((a, b) => b.seats - a.seats);

  return (
    <MdsClusterPage
      slug="seats-in-tamil-nadu"
      kicker="MDS seats"
      h1="MDS Seats in Tamil Nadu 2025-26 — All 435 Seats, College by College"
      answer="Tamil Nadu has 435 sanctioned MDS seats for 2025-26, across 19 dental colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University and nine specialities. Two government colleges hold 79 seats; 17 self-financing colleges hold 356. Deemed universities are separate and are not counted here."
      intro="The table below is the university's own sanctioned-intake matrix, reproduced in full. It shows every affiliated college, where it is, whether it is government or self-financing, and how its seats split across the nine MDS specialities. Sort it by seat count or by name, or filter it to government colleges only."
      faqs={faqs}
      showSpecialities
    >
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
          How the 435 seats split across the nine specialities
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#006837] text-white text-left">
                <th scope="col" className="px-4 py-3 font-semibold">
                  Speciality
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">
                  Seats
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">
                  Share of 435
                </th>
              </tr>
            </thead>
            <tbody>
              {top.map((s) => (
                <tr key={s.key} className="odd:bg-white even:bg-gray-50">
                  <th scope="row" className="px-4 py-2.5 text-left font-medium text-gray-900">
                    {s.label}
                  </th>
                  <td className="px-4 py-2.5 text-right tabular-nums font-semibold text-[#006837]">
                    {s.seats}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-gray-600">
                    {((s.seats / TN_MDS_TOTALS.seats) * 100).toFixed(1)}%
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
