'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function DownloadDirectoryButton() {
  const [busy, setBusy] = useState(false);

  async function handleDownload() {
    setBusy(true);
    try {
      const res = await fetch('/api/admin/faculty/pdf');
      if (!res.ok) {
        const msg = (await res.json().catch(() => ({})))?.error ?? `HTTP ${res.status}`;
        toast.error(`Download failed: ${msg}`);
        return;
      }
      const blob = await res.blob();
      const disposition = res.headers.get('Content-Disposition') ?? '';
      const match = disposition.match(/filename="?([^"]+)"?/);
      const filename = match?.[1] ?? `faculty-directory-${new Date().toISOString().slice(0, 10)}.pdf`;

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success('Faculty directory downloaded');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Download failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={busy}
      className="flex items-center gap-2 bg-white border border-[#006837] text-[#006837] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-green-50 transition disabled:opacity-50 disabled:cursor-wait"
    >
      {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
      {busy ? 'Generating PDF…' : 'Download PDF'}
    </button>
  );
}
