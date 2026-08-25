import Link from 'next/link';

/**
 * A-11. The five MDS speciality pages each run to 1,100-1,300 words and NONE of them linked back
 * to /mds/ or across to a sibling - measured live on all five, 2026-08-25, zero in both
 * directions. The hub links DOWN to all five; nothing pointed back up. A child page with no
 * parent link is the defect this estate keeps repeating, and it is the only item of A-11's spec
 * that survived being measured: the pages are not thin, their FAQ schema is already visible, and
 * the cluster carries 465 impressions rather than the 48 the spec assumed.
 *
 * Seat counts are read off JKKN's own live /mds/ page table, which totals 18 - the same figure
 * the official TN Dr M.G.R. MDS matrix carries for this college.
 */

const SPECIALITIES = [
  {
    slug: 'conservative-dentistry-and-endodontics',
    name: 'Conservative Dentistry & Endodontics',
    seats: 5,
  },
  {
    slug: 'orthodontics-and-dentofacial-orthopedics',
    name: 'Orthodontics & Dentofacial Orthopedics',
    seats: 5,
  },
  { slug: 'oral-medicine', name: 'Oral Medicine & Radiology', seats: 3 },
  { slug: 'prosthodontics-crown-and-bridge', name: 'Prosthodontics, Crown & Bridge', seats: 3 },
  { slug: 'periodontics', name: 'Periodontics & Oral Implantology', seats: 2 },
];

const MDS_HUB = '/academics/details-of-academic-programs/mds/';

interface Props {
  /** slug of the page this renders on, so it is not listed as a link to itself */
  current: string;
}

export default function MdsSpecialityNav({ current }: Props) {
  const others = SPECIALITIES.filter((s) => s.slug !== current);
  const total = SPECIALITIES.reduce((n, s) => n + s.seats, 0);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FBFBEE]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#006837] mb-2">
          The other MDS specialities at JKKN
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-8 max-w-3xl">
          JKKN Dental College is sanctioned {total} MDS seats across {SPECIALITIES.length}{' '}
          DCI-approved specialities, each a three-year full-time programme affiliated to The Tamil
          Nadu Dr. M.G.R. Medical University.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`${MDS_HUB}${s.slug}/`}
              className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-[#006837] hover:shadow-sm transition-all"
            >
              <span className="block font-semibold text-[#006837] text-sm sm:text-base leading-snug">
                {s.name}
              </span>
              <span className="block mt-2 text-xs sm:text-sm text-gray-600">
                {s.seats} {s.seats === 1 ? 'seat' : 'seats'} &middot; 3 years
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base">
          <Link href={MDS_HUB} className="text-[#006837] font-semibold hover:underline">
            All MDS programmes, seats and fees &rarr;
          </Link>
          <Link
            href={`${MDS_HUB}colleges-in-tamil-nadu/`}
            className="text-[#006837] font-semibold hover:underline"
          >
            Every MDS college in Tamil Nadu &rarr;
          </Link>
          <Link
            href={`${MDS_HUB}seats-in-tamil-nadu/`}
            className="text-[#006837] font-semibold hover:underline"
          >
            MDS seats in Tamil Nadu &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
