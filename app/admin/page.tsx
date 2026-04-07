import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function AdminRoot() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/admin/login');
  }

  const { data: profile } = await supabase
    .from('staff_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  if (profile?.role === 'staff') {
    redirect('/admin/events');
  }

  redirect('/admin/dashboard');
}
