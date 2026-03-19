import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";
import { MetaPixel } from "@/components/MetaPixel";

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
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/',
    languages: {
      'en-IN': 'https://dental.jkkn.ac.in/',
    },
  },
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
        url: "/images/BDS-hero-image.png",
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
    images: ["/images/BDS-hero-image.png"],
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
    <html lang="en">
      <body className={`${poppins.className} antialiased pt-16 xs:pt-18 sm:pt-20 lg:pt-24 xl:pt-28`} suppressHydrationWarning>
        <MetaPixel />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-primary focus:font-semibold focus:outline-none"
        >
          Skip to main content
        </a>
        <ClientLayoutWrapper>
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
