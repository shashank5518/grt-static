
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting Growth Realtech. Our property advisory team will get in touch with you shortly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-white px-4 py-16 sm:px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">

        {/* Success icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-(--brand-900)"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Growth Realtech
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-(--brand-900) sm:text-4xl">
          Thank You for Reaching Out!
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600">
          We have successfully received your enquiry. Our property advisory
          team will review your requirements and get in touch with you shortly.
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          A free consultation call will be scheduled at the earliest
          convenience.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-(--brand-900) px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-(--brand-800) hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900/20"
        >
          Return to Homepage
        </Link>

        <p className="mt-8 text-xs text-slate-400">
          We appreciate your interest in Growth Realtech.
        </p>
      </div>
    </main>
  );
}
