'use client';

import { useMemo, useState } from 'react';
import {
  TN_MDS_COLLEGES,
  TN_MDS_SPECIALITIES,
  TN_MDS_TOTALS,
  TN_MDS_SOURCE,
  JKKN_MDS_CODE,
} from '@/data/tnMdsSeatMatrix';

/**
 * The official Tamil Nadu MDS seat matrix, rendered from data/tnMdsSeatMatrix.ts.
 *
 * Why this component exists rather than hand-written markup: the same 19 rows appear on the
 * seats page, the colleges page and the downloadable PDF. One source means the three can never
 * disagree, and a re-generated data file updates all of them at once.
 *
 * The source line is not decoration. Every competing page for these queries publishes a seat
 * count with no citation and no date; the citation is the differentiator, so it renders with
 * the table and not in a footer somebody can crop.
 */

type SortKey = 'total' | 'name';

export default function TnMdsSeatMatrixTable({
  compact = false,
  showSpecialities = true,
}: {
  compact?: boolean;
  showSpecialities?: boolean;
}) {
  const [sort, setSort] = useState<SortKey>('total');
  const [onlyGovt, setOnlyGovt] = useState<'all' | 'Government' | 'Self-financing'>('all');

  const rows = useMemo(() => {
    const r = TN_MDS_COLLEGES.filter((c) => onlyGovt === 'all' || c.kind === onlyGovt);
    return [...r].sort((a, b) =>
      sort === 'total' ? b.total - a.total : a.name.localeCompare(b.name),
    );
  }, [sort, onlyGovt]);

  const shown = compact ? rows.slice(0, 10) : rows;

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Filter
        </span>
        {(['all', 'Government', 'Self-financing'] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setOnlyGovt(k)}
            className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-colors ${
              onlyGovt === k
                ? 'bg-[#006837] text-white border-[#006837]'
                : 'bg-white text-[#006837] border-[#006837]/30 hover:border-[#006837]'
            }`}
          >
            {k === 'all' ? 'All colleges' : k}
          </button>
        ))}
        <span className="ml-auto text-xs font-semibold uppercase tracking-wide text-gray-500">
          Sort
        </span>
        <button
          type="button"
          onClick={() => setSort(sort === 'total' ? 'name' : 'total')}
          className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-[#006837]/30 text-[#006837] hover:border-[#006837]"
        >
          {sort === 'total' ? 'By seats' : 'By name'}
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm">
          <caption className="sr-only">
            Sanctioned MDS intake for the academic year {TN_MDS_SOURCE.academicYear} in dental
            colleges affiliated to {TN_MDS_SOURCE.authority}
          </caption>
          <thead>
            <tr className="bg-[#006837] text-white text-left">
              <th scope="col" className="px-3 py-3 font-semibold whitespace-nowrap">
                College
              </th>
              <th scope="col" className="px-3 py-3 font-semibold whitespace-nowrap">
                Location
              </th>
              <th scope="col" className="px-3 py-3 font-semibold whitespace-nowrap">
                Type
              </th>
              {showSpecialities &&
                TN_MDS_SPECIALITIES.map((s) => (
                  <th
                    key={s.key}
                    scope="col"
                    className="px-2 py-3 font-semibold text-center whitespace-nowrap"
                    title={s.label}
                  >
                    {s.label.split(' ')[0]}
                  </th>
                ))}
              <th scope="col" className="px-3 py-3 font-semibold text-right whitespace-nowrap">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {shown.map((c) => {
              const isJkkn = c.code === JKKN_MDS_CODE;
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
                  <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">
                    {c.location || '—'}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">{c.kind}</td>
                  {showSpecialities &&
                    TN_MDS_SPECIALITIES.map((s) => (
                      <td key={s.key} className="px-2 py-2.5 text-center tabular-nums text-gray-700">
                        {c.seats[s.key as keyof typeof c.seats]}
                      </td>
                    ))}
                  <td className="px-3 py-2.5 text-right tabular-nums font-bold text-[#006837]">
                    {c.total}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-[#FBFBEE] font-bold border-t-2 border-[#006837]">
              <th scope="row" className="px-3 py-3 text-left">
                Tamil Nadu total
              </th>
              <td className="px-3 py-3" />
              <td className="px-3 py-3 text-gray-600">
                {TN_MDS_TOTALS.governmentColleges} government + {TN_MDS_TOTALS.selfFinancingColleges}{' '}
                self-financing
              </td>
              {showSpecialities &&
                TN_MDS_SPECIALITIES.map((s) => (
                  <td key={s.key} className="px-2 py-3 text-center tabular-nums">
                    {s.seats}
                  </td>
                ))}
              <td className="px-3 py-3 text-right tabular-nums text-[#006837]">
                {TN_MDS_TOTALS.seats}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
        <strong>Source:</strong> {TN_MDS_SOURCE.authority} —{' '}
        <a
          href={TN_MDS_SOURCE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#006837] underline hover:no-underline"
        >
          {TN_MDS_SOURCE.document}
        </a>
        . Retrieved {TN_MDS_SOURCE.retrieved}. {TN_MDS_SOURCE.scopeNote}
      </p>
    </div>
  );
}
