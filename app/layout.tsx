import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { LeadPopup } from "@/components/LeadPopup";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// ✅ When you have your domain, replace this with: "https://growthrealtech.com"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://grt-static.vercel.app";

const siteName = "Growth Realtech";
const siteDescription =
  "Premium property advisory in Gurgaon. Site visits, investment guidance, and end-to-end support.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Premium Properties in Gurgaon`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteName} | Premium Properties in Gurgaon`,
    description: siteDescription,
    type: "website",
    url: SITE_URL,
    siteName: siteName,
    images: [
      {
        url: "/images/new-logo-white-transparent.png",
        width: 1200,
        height: 630,
        alt: "Growth Realtech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Properties in Gurgaon`,
    description: siteDescription,
    images: ["/images/new-logo-white-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}
    data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
        <LeadPopup />

        {/* Fixed watermark — bottom-left, non-interactive */}
        <div
          className="pointer-events-none fixed bottom-5 left-5 z-40 select-none"
          aria-hidden="true"
        >
          <Image
            src="/images/new-logo-transparent.png"
            alt="Growth Realtech"
            width={64}
            height={64}
            className="opacity-[0.15] mix-blend-multiply"
          />
        </div>
              <Footer />

      </body>
    </html>
  );
}