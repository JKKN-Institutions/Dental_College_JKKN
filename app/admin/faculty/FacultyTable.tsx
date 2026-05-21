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
  Pencil,
  Search,
  UserCircle2,
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
};

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
        id: 'photo',
        header: 'Photo',
        enableSorting: false,
        enableColumnFilter: false,
        cell: ({ row }) => {
          const m = row.original;
          return m.photo_url ? (
            <img
              src={m.photo_url}
              alt={m.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-100"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <UserCircle2 className="w-6 h-6 text-gray-300" />
            </div>
          );
        },
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => (
          <div>
            <p className="font-semibold text-gray-900 text-sm">{row.original.name}</p>
            {row.original.email && (
              <p className="text-xs text-gray-400 mt-0.5">{row.original.email}</p>
            )}
          </div>
        ),
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
                <span className="text-sm text-[#006837] font-medium">{v}</span>
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
        accessorKey: 'qualification',
        header: 'Qualification',
        cell: ({ getValue }) => {
          const v = getValue<string | null>();
          return v ? (
            <span className="text-sm text-gray-600 line-clamp-2 max-w-xs block">{v}</span>
          ) : (
            <span className="text-gray-300">&mdash;</span>
          );
        },
      },
      {
        accessorKey: 'experience_years',
        header: 'Experience',
        cell: ({ getValue }) => {
          const v = getValue<number | null>();
          return v && v > 0 ? (
            <span className="text-sm text-gray-600 whitespace-nowrap">{v} yrs</span>
          ) : (
            <span className="text-gray-300">&mdash;</span>
          );
        },
      },
      {
        id: 'status',
        accessorFn: (row) => (row.is_active ? 'active' : 'inactive'),
        header: 'Status',
        filterFn: statusFilter,
        cell: ({ row }) => (
          <div className="flex flex-col gap-1">
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit whitespace-nowrap ${
                row.original.is_active
                  ? 'bg-green-50 text-green-600'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {row.original.is_active ? 'Active' : 'Inactive'}
            </span>
            {row.original.source === 'myjkkn' && (
              <span
                title={
                  row.original.last_synced_at
                    ? `Synced ${new Date(row.original.last_synced_at).toLocaleString()}`
                    : 'Synced from MyJKKN'
                }
                className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 w-fit"
              >
                MyJKKN
              </span>
            )}
          </div>
        ),
      },
      {
        id: 'actions',
        header: () => <span className="block text-right">Actions</span>,
        enableSorting: false,
        enableColumnFilter: false,
        cell: ({ row }) => (
          <div className="flex items-center justify-end gap-1">
            <Link
              href={`/admin/faculty/${row.original.id}`}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#006837] px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit
            </Link>
            {!isStaff && <DeleteFacultyButton id={row.original.id} />}
          </div>
        ),
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
                <tr
                  key={row.id}
                  className={`hover:bg-gray-50 transition ${
                    row.original.is_active ? '' : 'opacity-60'
                  }`}
                >
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
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
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
