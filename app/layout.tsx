import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Growth Realtech";
const siteDescription =
  "Premium property advisory in [AREA NAME]. Site visits, investment guidance, and end-to-end support.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Premium Properties in [AREA NAME]`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteName} | Premium Properties in [AREA NAME]`,
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
      </body>
    </html>
  );
}
