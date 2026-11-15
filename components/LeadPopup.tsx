
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SESSION_KEY = "grt-lead-popup-dismissed";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://grt-static.vercel.app";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closePopup = useCallback(() => {
  try {
    sessionStorage.setItem(SESSION_KEY, "true");
  } catch {
    // Popup can still close if session storage is unavailable.
  }

  setIsOpen(false);
}, []);

  // Show popup after 7 seconds, once per browser session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Continue without session persistence if storage is unavailable.
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, []);

  // Keyboard accessibility, focus management and scroll locking.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      dialogRef.current
        ?.querySelector<HTMLInputElement>('[name="name"]')
        ?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements =
        dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"])'
        );

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, closePopup]);

  function handleSubmit() {
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Native form submission should continue.
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm transition-opacity duration-300 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        aria-describedby="lead-popup-description"
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Header */}
        <div className="relative bg-(--brand-900) px-6 py-8 text-white sm:px-9 sm:py-9">
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close consultation form"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              ×
            </span>
          </button>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
            Growth Realtech
          </p>

          <h2
            id="lead-popup-title"
            className="max-w-sm text-2xl font-semibold leading-tight sm:text-3xl"
          >
            Let&apos;s Find Your Perfect Property
          </h2>

          <p
            id="lead-popup-description"
            className="mt-3 max-w-md text-sm leading-6 text-white/75"
          >
            Get personalized property recommendations and expert guidance
            from our real estate advisors.
          </p>
        </div>

        {/* Form */}
        <div className="max-h-[65dvh] overflow-y-auto overscroll-contain px-6 py-7 sm:px-9 sm:py-8">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
              Free consultation
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
              No obligation
            </span>
          </div>

          <form
            action={`https://formsubmit.co/sales.growthrealtech@gmail.com`}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Property Consultation Enquiry - Growth Realtech"
            />

            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting Growth Realtech! We have successfully received your enquiry. Our property advisory team will review your requirements and get in touch with you shortly. A free consultation call will be scheduled at the earliest convenience. Warm regards, Team Growth Realtech."
            />

            <input
              type="hidden"
              name="_next"
              value={`${SITE_URL}/thank-you`}
            />

            {/* Honeypot spam protection */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px"
            />

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">
                Full Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                maxLength={100}
                placeholder="Enter your full name"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-(--brand-700) focus:ring-4 focus:ring-slate-900/5"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">
                Phone Number <span className="text-red-500">*</span>
              </span>
              <input
                type="tel"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                maxLength={20}
                pattern="[0-9+() -]{7,20}"
                title="Enter a valid phone number"
                placeholder="+91 99999 99999"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-(--brand-700) focus:ring-4 focus:ring-slate-900/5"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">
                Email Address <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                maxLength={254}
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-(--brand-700) focus:ring-4 focus:ring-slate-900/5"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">
                What are you looking for?
              </span>
              <select
                name="property_interest"
                defaultValue=""
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-700 shadow-sm outline-none transition focus:border-(--brand-700) focus:ring-4 focus:ring-slate-900/5"
              >
                <option value="" disabled>
                  Select your requirement
                </option>
                <option value="Residential Property">
                  Residential Property
                </option>
                <option value="Commercial Property">
                  Commercial Property
                </option>
                <option value="Plots / Land">Plots / Land</option>
                <option value="Rental Property">Rental Property</option>
                <option value="Real Estate Investment">
                  Real Estate Investment
                </option>
                <option value="General Consultation">
                  General Consultation
                </option>
              </select>
            </label>

            <label className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                name="contact_consent"
                value="Agreed"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-slate-900"
              />
              <span className="text-xs leading-5 text-slate-500">
                I agree to be contacted by Growth Realtech regarding my
                enquiry and consultation request.
              </span>
            </label>

            <button
              type="submit"
              className="flex h-13 w-full items-center justify-center rounded-full bg-(--brand-900) px-6 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-(--brand-800) hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900/20 active:scale-[0.99]"
            >
              Get Free Consultation
            </button>

            <p className="text-center text-xs leading-5 text-slate-400">
              Your information will only be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
