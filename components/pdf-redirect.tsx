'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PdfRedirectProps {
  pdfUrl: string;
  heading?: string;
}

/**
 * A component that redirects to a PDF file while properly handling browser back navigation.
 *
 * Problem: When using window.location.replace() to redirect to a PDF, clicking the browser's
 * back button returns the user to the redirect page, which shows a blank page and tries to
 * redirect again, creating a loop.
 *
 * Solution: This component uses sessionStorage to detect if the user is returning from a PDF.
 * If so, it navigates them back to the previous page in their history instead of redirecting again.
 */
export function PdfRedirect({ pdfUrl, heading }: PdfRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const returningFromKey = 'pdf-redirect-path';
    const storedPath = sessionStorage.getItem(returningFromKey);

    // Check if user is returning from a PDF (back button was pressed)
    if (storedPath === currentPath) {
      // User pressed back from PDF, navigate them to the previous page
      sessionStorage.removeItem(returningFromKey);

      // Use history.go(-1) to go back to the page before this redirect page
      // If there's no history, go to home
      if (window.history.length > 1) {
        window.history.go(-1);
      } else {
        router.replace('/');
      }
      return;
    }

    // Store the current path so we can detect if user comes back
    sessionStorage.setItem(returningFromKey, currentPath);

    // Redirect to the PDF
    window.location.replace(pdfUrl);
  }, [pdfUrl, router]);

  // Return a loading page with H1 for SEO while redirecting.
  // The visible link is the fallback (marketing audit T6, 2026-10-21): where a browser downloads the
  // PDF instead of showing it - many Android phones, and headless browsers - the page used to sit on
  // "Loading document..." with nothing to tap. The link is in the server HTML, so it works before
  // and without JavaScript too.
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfbee] px-4">
      <div className="text-center">
        {heading && <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">{heading}</h1>}
        <p className="text-gray-600">Loading document...</p>
        <p className="mt-4">
          <a href={pdfUrl} className="inline-block rounded-full bg-[#0b6d41] px-6 py-3 font-semibold text-white">
            Open the document (PDF)
          </a>
        </p>
      </div>
    </div>
  );
}
