'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  ExternalLink,
  Pencil,
  Search,
} from 'lucide-react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type Column,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type FilterFn,
} from '@tanstack/react-table';
import DeleteFacultyButton from './DeleteFacultyButton';

export type FacultyRow = {
  id: string;
  name: string;
  designation: string | null;
  department: string | null;
  qualification: string | null;
  experience_years: number | null;
  photo_url: string | null;
  email: string | null;
  display_order: number | null;
  is_active: boolean;
  source?: string | null;
  last_synced_at?: string | null;
  role?: string | null;
  slug?: string | null;
  myjkkn_staff_id?: string | null;
};

// Stable colored avatar palette — pick deterministically from the name so the
// same person always gets the same colour across renders/sessions.
const AVATAR_PALETTE = [
  'bg-emerald-600',
  'bg-blue-600',
  'bg-violet-600',
  'bg-amber-600',
  'bg-rose-600',
  'bg-teal-600',
  'bg-indigo-600',
  'bg-pink-600',
];

function hashIndex(value: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < value.length; i++) h = (h * 31 + value.charCodeAt(i)) >>> 0;
  return h % mod;
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

// MyJKKN's role_key is authoritative when set, but many HODs in the dental
// roster are only labelled via designation ("Professor & HOD", "Reader & HOD",
// "Professor and HOD") — check both so the badge catches everyone.
function isPrincipal(row: FacultyRow): boolean {
  if ((row.role ?? '').toLowerCase() === 'principal') return true;
  return /\bprincipal\b/i.test(row.designation ?? '');
}
function isHod(row: FacultyRow): boolean {
  if ((row.role ?? '').toLowerCase() === 'hod') return true;
  return /\b(hod|head of department)\b/i.test(row.designation ?? '');
}

const statusFilter: FilterFn<FacultyRow> = (row, _columnId, value) => {
  if (!value || value === 'all') return true;
  const active = row.original.is_active;
  return value === 'active' ? active : !active;
};

export default function FacultyTable({
  data,
  isStaff,
}: {
  data: FacultyRow[];
  isStaff: boolean;
}) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columns = useMemo<ColumnDef<FacultyRow>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
          const m = row.original;
          const colour = AVATAR_PALETTE[hashIndex(m.name, AVATAR_PALETTE.length)];
          return (
            <div className="flex items-center gap-3 min-w-[14rem]">
              <div
                className={`w-9 h-9 rounded-full ${colour} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}
              >
                {initialsOf(m.name) || '?'}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{m.name}</p>
                {m.email && (
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{m.email}</p>
                )}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'designation',
        header: 'Designation',
        cell: ({ row }) => {
          const v = row.original.designation;
          const principal = isPrincipal(row.original);
          const hod = isHod(row.original);
          return (
            <div className="flex flex-wrap items-center gap-1.5">
              {v ? (
                <span className="text-sm text-gray-700">{v}</span>
              ) : (
                <span className="text-gray-300">&mdash;</span>
              )}
              {principal && (
                <span
                  title="Principal (from MyJKKN role/designation)"
                  className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200"
                >
                  Principal
                </span>
              )}
              {hod && (
                <span
                  title="Head of Department (from MyJKKN role/designation)"
                  className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200"
                >
                  HOD
                </span>
              )}
            </div>
          );
        },
      },
      {
        accessorKey: 'department',
        header: 'Department',
        cell: ({ getValue }) => {
          const v = getValue<string | null>();
          return v ? (
            <span className="text-sm text-gray-600">{v}</span>
          ) : (
            <span className="text-gray-300">&mdash;</span>
          );
        },
      },
      {
        id: 'source',
        accessorFn: (row) => row.source ?? 'manual',
        header: 'Source',
        cell: ({ row }) => {
          const m = row.original;
          if (m.source === 'myjkkn') {
            return (
              <span
                title={
                  m.last_synced_at
                    ? `Synced ${new Date(m.last_synced_at).toLocaleString()}`
                    : 'Synced from MyJKKN'
                }
                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 whitespace-nowrap"
              >
                <ExternalLink className="w-3 h-3" />
                MyJKKN
              </span>
            );
          }
          return (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200 whitespace-nowrap">
              Manual
            </span>
          );
        },
      },
      {
        id: 'status',
        accessorFn: (row) => (row.is_active ? 'active' : 'inactive'),
        header: 'Status',
        filterFn: statusFilter,
        cell: ({ row }) => (
          <span
            className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
              row.original.is_active
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}
          >
            {row.original.is_active ? 'Published' : 'Draft'}
          </span>
        ),
      },
      {
        id: 'actions',
        header: () => <span className="block text-right">Actions</span>,
        enableSorting: false,
        enableColumnFilter: false,
        cell: ({ row }) => {
          const m = row.original;
          const isMyJKKN = m.source === 'myjkkn' && !!m.myjkkn_staff_id;

          // Mirror the public route's filter (app/faculty/[slug]/page.tsx) so
          // the View affordance never opens a 404. Reasons it stays hidden:
          //   - is_active=false  → public route requires is_active=true
          //   - slug missing or stored as a URL → would build a broken href
          const slugIsUrl = !!m.slug && /^https?:\/\//i.test(m.slug);
          const publicHref =
            m.slug && !slugIsUrl && m.is_active
              ? `/faculty/${m.slug}/`
              : null;

          let hiddenReason: string | null = null;
          if (!publicHref) {
            if (!m.slug) hiddenReason = 'No slug set — public URL cannot be built.';
            else if (slugIsUrl) hiddenReason = 'Slug looks like a URL — fix the slug field to enable the public page.';
            else if (!m.is_active) hiddenReason = 'Draft — toggle Published (or re-publish in MyJKKN and sync) to make this visible.';
          }

          return (
            <div className="flex items-center justify-end gap-1">
              {isMyJKKN ? (
                <a
                  href={`https://www.jkkn.ai/staff/${m.myjkkn_staff_id}/edit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#006837] hover:text-[#005a2e] px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition"
                >
                  Edit in MyJKKN
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <Link
                  href={`/admin/faculty/${m.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#006837] px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  Edit
                </Link>
              )}
              {publicHref ? (
                <a
                  href={publicHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View public profile"
                  aria-label="View public profile"
                  className="inline-flex items-center justify-center w-8 h-8 text-gray-400 hover:text-[#006837] hover:bg-gray-100 rounded-lg transition"
                >
                  <Eye className="w-4 h-4" />
                </a>
              ) : (
                <span
                  title={hiddenReason ?? 'Public profile not available.'}
                  aria-label={hiddenReason ?? 'Public profile not available.'}
                  className="inline-flex items-center justify-center w-8 h-8 text-gray-300 cursor-not-allowed rounded-lg"
                >
                  <Eye className="w-4 h-4" />
                </span>
              )}
              {!isStaff && !isMyJKKN && <DeleteFacultyButton id={m.id} />}
            </div>
          );
        },
      },
    ],
    [isStaff],
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  const totalFiltered = table.getFilteredRowModel().rows.length;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between gap-3 flex-wrap">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search faculty..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
          />
        </div>
        <p className="text-xs text-gray-500">
          Showing {totalFiltered === 0 ? 0 : table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          &ndash;
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            totalFiltered,
          )}{' '}
          of {totalFiltered}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sortDir = header.column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider align-top"
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                            className={`flex items-center gap-1 text-left ${
                              canSort ? 'cursor-pointer hover:text-gray-900' : 'cursor-default'
                            }`}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {canSort && (
                              <span className="text-gray-400">
                                {sortDir === 'asc' ? (
                                  <ArrowUp className="w-3 h-3" />
                                ) : sortDir === 'desc' ? (
                                  <ArrowDown className="w-3 h-3" />
                                ) : (
                                  <ArrowUpDown className="w-3 h-3 opacity-50" />
                                )}
                              </span>
                            )}
                          </button>
                          {header.column.getCanFilter() ? (
                            <ColumnFilter column={header.column} />
                          ) : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-10 text-center text-sm text-gray-400"
                >
                  No faculty members match the current filters.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3 align-middle">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span>Rows per page</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border border-gray-200 rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#006837]/20"
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-600 mr-2">
            Page {table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}
          </span>
          <button
            type="button"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="First page"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="p-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Last page"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ColumnFilter({ column }: { column: Column<FacultyRow, unknown> }) {
  const value = column.getFilterValue();

  if (column.id === 'status') {
    return (
      <select
        value={(value as string) ?? 'all'}
        onChange={(e) => column.setFilterValue(e.target.value)}
        className="w-full text-xs font-normal normal-case border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#006837]/20"
      >
        <option value="all">All</option>
        <option value="active">Published</option>
        <option value="inactive">Draft</option>
      </select>
    );
  }

  if (column.id === 'source') {
    return (
      <select
        value={(value as string) ?? ''}
        onChange={(e) => column.setFilterValue(e.target.value || undefined)}
        className="w-full text-xs font-normal normal-case border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#006837]/20"
      >
        <option value="">All</option>
        <option value="myjkkn">MyJKKN</option>
        <option value="manual">Manual</option>
      </select>
    );
  }

  return (
    <input
      type="text"
      value={(value as string) ?? ''}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder="Filter..."
      className="w-full text-xs font-normal normal-case border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#006837]/20"
    />
  );
}
