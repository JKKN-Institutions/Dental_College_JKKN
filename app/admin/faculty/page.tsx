import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, UserCircle2 } from 'lucide-react';
import DownloadDirectoryButton from './DownloadDirectoryButton';
import SyncMyJKKNButton from './SyncMyJKKNButton';
import FacultyTable, { type FacultyRow } from './FacultyTable';

export default async function AdminFaculty() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();

  const { data: { session } } = await supabase.auth.getSession();
  const { data: profile } = await supabase
    .from('staff_profiles')
    .select('role')
    .eq('id', session?.user?.id ?? '')
    .single();
  const isStaff = profile?.role === 'staff';
  // Falls back to the legacy projection if the MyJKKN migration in
  // docs/migrations/2026-05-17-myjkkn-sync-columns.sql has not been applied yet.
  const rich = await supabase
    .from('faculty')
    .select('id, name, designation, department, qualification, experience_years, photo_url, email, display_order, is_active, source, last_synced_at, role, slug, myjkkn_staff_id')
    .eq('college_id', collegeId)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  let members: FacultyRow[] | null = (rich.data as FacultyRow[] | null) ?? null;
  if (rich.error) {
    const legacy = await supabase
      .from('faculty')
      .select('id, name, designation, department, qualification, experience_years, photo_url, email, display_order, is_active, slug')
      .eq('college_id', collegeId)
      .order('display_order', { ascending: true })
      .order('name', { ascending: true });
    members = (legacy.data as FacultyRow[] | null) ?? null;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Faculty</h1>
          <p className="text-gray-500 text-sm mt-0.5">{members?.length ?? 0} total members</p>
        </div>
        <div className="flex items-center gap-2">
          <SyncMyJKKNButton />
          <DownloadDirectoryButton />
          <Link
            href="/admin/faculty/new"
            className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
          >
            <Plus className="w-4 h-4" />
            Add Faculty
          </Link>
        </div>
      </div>

      {/* Table */}
      {members && members.length > 0 ? (
        <FacultyTable data={members} isStaff={isStaff} />
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-4">
            <UserCircle2 className="w-7 h-7 text-rose-400" />
          </div>
          <p className="font-semibold text-gray-700 mb-1">No faculty members yet</p>
          <p className="text-sm text-gray-400 mb-5">Add faculty members to display on the site.</p>
          <Link
            href="/admin/faculty/new"
            className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
          >
            <Plus className="w-4 h-4" />
            Add Faculty
          </Link>
        </div>
      )}
    </div>
  );
}
