'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

type SkipReason =
  | 'not_in_allow_list'
  | 'status_not_published'
  | 'missing_email'
  | 'missing_name';

type SyncResult = {
  ok: true;
  fetched: number;
  eligible: number;
  created: number;
  updated: number;
  skipped: Record<SkipReason, number>;
  errors: string[];
  missing_from_myjkkn: string[];
};

const SKIP_LABEL: Record<SkipReason, string> = {
  not_in_allow_list: 'not in roster',
  status_not_published: 'still draft in MyJKKN',
  missing_email: 'no email',
  missing_name: 'no name',
};

function totalSkipped(s: SyncResult['skipped']): number {
  return Object.values(s).reduce((acc, n) => acc + n, 0);
}

export default function SyncMyJKKNButton() {
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function handleSync() {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch('/api/admin/faculty/sync-myjkkn', { method: 'POST' });
      const body = (await res.json().catch(() => ({}))) as
        | (Partial<SyncResult> & { error?: string; detail?: string })
        | Record<string, unknown>;
      if (!res.ok) {
        const err = (body as { error?: string }).error ?? `HTTP ${res.status}`;
        toast.error(`Sync failed: ${err}`, { duration: 8000 });
        return;
      }
      const r = body as SyncResult;
      const skipTotal = totalSkipped(r.skipped);
      const skipBreakdown = (Object.entries(r.skipped) as [SkipReason, number][])
        .filter(([, n]) => n > 0)
        .map(([k, n]) => `${n} ${SKIP_LABEL[k]}`)
        .join(', ');

      toast.success(
        `MyJKKN sync done — ${r.created} added, ${r.updated} updated of ${r.eligible} eligible (${r.fetched} fetched, ${skipTotal} skipped${skipBreakdown ? `: ${skipBreakdown}` : ''})`,
        { duration: 8000 },
      );

      if (r.errors.length > 0) {
        console.error('[MyJKKN sync] errors:', r.errors);
        toast.error(
          `${r.errors.length} row(s) failed to write — see browser console for detail`,
          { duration: 8000 },
        );
      }
      if (r.missing_from_myjkkn?.length > 0) {
        console.warn('[MyJKKN sync] allow-list emails NOT found in MyJKKN:', r.missing_from_myjkkn);
      }
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Sync failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSync}
      disabled={busy}
      className="flex items-center gap-2 bg-white border border-[#006837] text-[#006837] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-green-50 transition disabled:opacity-50 disabled:cursor-wait"
    >
      {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
      {busy ? 'Syncing…' : 'Sync from MyJKKN'}
    </button>
  );
}
