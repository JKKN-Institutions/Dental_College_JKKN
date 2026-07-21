import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";
import { MetaPixel } from "@/components/MetaPixel";
import { GAPageTracker } from "@/components/GAPageTracker";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dental.jkkn.ac.in'),
  title: {
    default: "JKKN Dental College & Hospital | DCI Approved",
    template: "%s | JKKN Dental College"
  },
  description: "JKKN Dental College & Hospital, Komarapalayam — DCI approved, NAAC A accredited. BDS & MDS programs with 200+ chair hospital training. Since 1987.",
  keywords: "JKKN Dental College, AI dental campus, dental college Tamil Nadu, BDS course, MDS specializations, AI in dentistry, ChatGPT dental education, DCI approved dental college, NAAC accredited, digital dentistry, CAD/CAM dentistry, Komarapalayam dental college",
  authors: [{ name: "JKKN Dental College Editorial Team" }],
  // NOTE: do NOT put `alternates.canonical` here. Next.js metadata is inherited
  // by every child route, so an absolute canonical in the root layout made all
  // 124 routes that don't override it emit <link rel="canonical" href=".../">
  // — i.e. every one of them told Google it was a duplicate of the homepage.
  // Each route now declares its own self-referencing canonical; the homepage's
  // lives in app/page.tsx. `languages` was removed with it: it emitted no
  // hreflang in the rendered output (verified across all 169 prerendered pages)
  // and this is a single-language site.
  icons: {
    icon: "/images/dental-logo.png",
    apple: "/images/dental-logo.png",
  },
  openGraph: {
    title: "JKKN Dental College & Hospital | DCI Approved",
    description: "JKKN Dental College & Hospital, Komarapalayam — DCI approved, NAAC A accredited. BDS & MDS programs with 200+ chair hospital training. Since 1987.",
    url: "https://dental.jkkn.ac.in/",
    siteName: "JKKN Dental College & Hospital",
    images: [
      {
        url: "/images/BDS-hero-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN Dental College & Hospital - Best Dental College in Tamil Nadu"
      }
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "JKKN Dental College & Hospital | DCI Approved",
    description: "JKKN Dental College & Hospital, Komarapalayam — DCI approved, NAAC A accredited. BDS & MDS programs with 200+ chair hospital training. Since 1987.",
    images: ["/images/BDS-hero-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google verification handled via public/googlee5e5c9d47bc383e1.html
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://supabase.co" />
      </head>
      <body className={`${poppins.className} antialiased pt-16 xs:pt-18 sm:pt-20 lg:pt-24 xl:pt-28`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-primary focus:font-semibold focus:outline-none"
        >
          Skip to main content
        </a>
        <MetaPixel />
        <GAPageTracker />
        <ClientLayoutWrapper>
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
        </ClientLayoutWrapper>
      </body>
      <GoogleAnalytics gaId="G-RWVNW1RWMG" />
    </html>
  );
}
