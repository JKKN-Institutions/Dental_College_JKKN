'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { BottomNavbar } from '@/components/BottomNav';
import { cn } from '@/lib/utils';
import { EnquiryModalProvider } from '@/components/lead/EnquiryModal';
import WhatsAppButton from '@/components/WhatsAppButton';

// The enquiry modal provider wraps every page (user's choice 2026-10-21), so the header
// "Enquire Now" opens the same 3-box form everywhere, not only on the homepage. Before, every
// other page fell back to the jkkn.ai link (6 boxes, the college picked again).
export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <EnquiryModalProvider>
      <div suppressHydrationWarning>
        {children}
      </div>
      <WhatsAppButton />
      <BottomNavbar />
    </EnquiryModalProvider>
  );
}
