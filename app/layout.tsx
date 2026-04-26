import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Growth Realtech";
const siteDescription =
  "Premium property advisory in Gurgaon. Site visits, investment guidance, and end-to-end support.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Premium Properties in Gurgaon`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteName} | Premium Properties in Gurgaon`,
    description: siteDescription,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}

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
            className="opacity-[0.35] mix-blend-multiply"
          />
        </div>
      </body>
    </html>
  );
}