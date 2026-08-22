'use client';

import Link from 'next/link';
import MdsClusterPage from '@/components/mds/MdsClusterPage';
import {
  TN_MDS_COLLEGES,
  TN_MDS_SPECIALITIES,
  TN_MDS_TOTALS,
  JKKN_MDS_CODE,
} from '@/data/tnMdsSeatMatrix';

// Where JKKN runs the branch, the speciality page on this site is linked. Branches JKKN does
// not run carry no link rather than a link to a page that does not answer the question.
const JKKN_SPECIALITY_PAGES: Record<string, string> = {
  prosthodontics: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge/',
  periodontology: '/academics/details-of-academic-programs/mds/periodontics/',
  conservative:
    '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics/',
  orthodontics:
    '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics/',
  oralMedicine: '/academics/details-of-academic-programs/mds/oral-medicine/',
};

export default function MdsSpecialitiesInTamilNadu() {
  const jkkn = TN_MDS_COLLEGES.find((c) => c.code === JKKN_MDS_CODE)!;

  const rows = TN_MDS_SPECIALITIES.map((s) => {
    const key = s.key as keyof typeof jkkn.seats;
    const collegesRunning = TN_MDS_COLLEGES.filter((c) => c.seats[key] > 0).length;
    return {
      ...s,
      collegesRunning,
      jkknSeats: jkkn.seats[key],
      href: JKKN_SPECIALITY_PAGES[s.key],
    };
  }).sort((a, b) => b.seats - a.seats);

  const faqs = [
    {
      question: 'How many MDS courses are there in Tamil Nadu?',
      answer:
        'Nine MDS specialities are sanctioned across Tamil Nadu for 2025-26: Conservative Dentistry and Endodontics, Orthodontics and Dentofacial Orthopaedics, Prosthodontics and Crown & Bridge, Periodontology, Oral & Maxillofacial Surgery, Pediatric & Preventive Dentistry, Oral and Maxillofacial Pathology and Oral Microbiology, Oral Medicine & Radiology, and Public Health Dentistry.',
    },
    {
      question: 'Which MDS speciality has the most seats in Tamil Nadu?',
      answer:
        'Conservative Dentistry and Endodontics, with 74 of the 435 sanctioned seats. Orthodontics and Dentofacial Orthopaedics follows with 72, then Prosthodontics and Crown & Bridge with 63. Public Health Dentistry is the smallest branch at 18 seats.',
    },
    {
      question: 'Do all Tamil Nadu MDS colleges offer all nine specialities?',
      answer:
        'No. Only a few of the 19 affiliated colleges run all nine branches. Most run a subset, so the speciality a candidate wants narrows the college list before anything else does. The table on this page shows how many colleges are sanctioned for each branch.',
    },
    {
      question: 'How long is an MDS course in Tamil Nadu?',
      answer:
        'Three years, full-time, for every one of the nine specialities. The programme combines coursework, supervised clinical practice in the attached teaching hospital and a dissertation that must be completed before the degree is awarded.',
    },
    {
      question: 'Which MDS specialities does JKKN Dental College run?',
      answer:
        'Five of the nine: Conservative Dentistry and Endodontics with 5 seats, Orthodontics and Dentofacial Orthopaedics with 5, Prosthodontics and Crown & Bridge with 3, Oral Medicine & Radiology with 3, and Periodontology with 2 — 18 seats in total.',
    },
  ];

  return (
    <MdsClusterPage
      slug="specialities-in-tamil-nadu"
      kicker="MDS specialities"
      h1="MDS Courses in Tamil Nadu — All Nine Specialities and Their Seats"
      answer="Tamil Nadu runs nine MDS specialities in 2025-26, sharing 435 sanctioned seats across 19 affiliated dental colleges. Conservative Dentistry and Endodontics is the largest branch with 74 seats and Public Health Dentistry the smallest with 18. Every MDS course is three years, full-time."
      intro="Which speciality a candidate wants narrows the college list before rank or fees do, because most colleges run only a subset of the nine branches. The table below shows each speciality, how many of the 435 seats it holds, and how many of the 19 affiliated colleges are sanctioned to run it."
      faqs={faqs}
      showSpecialities={false}
    >
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
          The nine specialities, by seat count
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#006837] text-white text-left">
                <th scope="col" className="px-4 py-3 font-semibold">
                  Speciality
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">
                  Seats in Tamil Nadu
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">
                  Colleges running it
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">
                  At JKKN
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key} className="odd:bg-white even:bg-gray-50">
                  <th scope="row" className="px-4 py-2.5 text-left font-medium text-gray-900">
                    {r.href ? (
                      <Link href={r.href} className="text-[#006837] underline hover:no-underline">
                        {r.label}
                      </Link>
                    ) : (
                      r.label
                    )}
                  </th>
                  <td className="px-4 py-2.5 text-right tabular-nums font-semibold text-[#006837]">
                    {r.seats}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-gray-600">
                    {r.collegesRunning} of {TN_MDS_TOTALS.colleges}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-gray-700">
                    {r.jkknSeats > 0 ? r.jkknSeats : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-[#FBFBEE] font-bold border-t-2 border-[#006837]">
                <th scope="row" className="px-4 py-3 text-left">
                  All nine specialities
                </th>
                <td className="px-4 py-3 text-right tabular-nums text-[#006837]">
                  {TN_MDS_TOTALS.seats}
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-gray-600">
                  {TN_MDS_TOTALS.colleges} colleges
                </td>
                <td className="px-4 py-3 text-right tabular-nums text-[#006837]">{jkkn.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </MdsClusterPage>
  );
}
