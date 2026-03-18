import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function AdminRoot() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/admin/login');
  }

  redirect('/admin/dashboard');
}
