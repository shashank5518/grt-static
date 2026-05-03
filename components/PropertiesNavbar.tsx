// components/PropertiesNavbar.tsx
import Image from "next/image";
import Link from "next/link";

export function PropertiesNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/70">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="relative flex h-17.5 md:h-20 items-center justify-between">

          {/* Left — Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            aria-label="Growth Realtech home"
          >
            <Image
              src="/images/new-logo-transparent.png"
              alt="Growth Realtech"
              width={400}
              height={110}
              className="h-13.75 md:h-16.25 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right — Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>

        </div>
      </div>
    </header>
  );
}