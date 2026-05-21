import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { renderFacultyDirectoryPdf, type FacultyRow } from './FacultyDirectoryDocument';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const collegeId = await getAdminCollegeId();

  const { data: members, error } = await supabase
    .from('faculty')
    .select(
      'id, name, designation, department, qualification, experience_years, photo_url, email, summary, ' +
      'research_papers_count, phd_scholars_count, awards_won_count, ' +
      'pg_dissertations_guided, ug_projects_guided, mentoring_description, ' +
      'google_scholar_url, researchgate_url, orcid_url, ' +
      'academic_qualifications, areas_of_specialisation, experience, ' +
      'research_focus, publications, funded_research, ' +
      'certifications, awards, memberships, phd_scholars, badges'
    )
    .eq('college_id', collegeId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rows = (members ?? []) as unknown as FacultyRow[];

  const pdfBuffer = await renderFacultyDirectoryPdf({
    collegeName: process.env.NEXT_PUBLIC_COLLEGE_NAME ?? 'JKKN Dental College & Hospital',
    generatedAt: new Date(),
    members: rows,
  });

  const filename = `faculty-directory-${new Date().toISOString().slice(0, 10)}.pdf`;

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-store',
    },
  });
}
