"use client";

import Link from "next/link";
import Image from "next/image"
import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#area", label: "Area" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
  { href: "#master-plan", label: "Master Plan" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5">
      <span
        className={[
          "absolute left-0 top-[2px] h-0.5 w-5 rounded bg-slate-900 transition",
          open ? "translate-y-[8px] rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[9px] h-0.5 w-5 rounded bg-slate-900 transition",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[16px] h-0.5 w-5 rounded bg-slate-900 transition",
          open ? "-translate-y-[8px] -rotate-45" : "",
        ].join(" ")}
      />
    </span>
  );
}

export function Navbar({
  brand = "Growth Realtech",
}: {
  brand?: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [indicatorStyle, setIndicatorStyle] = useState({
  left: 0,
  width: 0,
});

  const close = useMemo(() => () => setOpen(false), []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);
  // 1. Scroll detection
  useEffect(() => {
  const sections = navLinks
    .map((l) => document.querySelector(l.href))
    .filter((el): el is Element => el !== null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    },
    {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
    observer.unobserve(section);
    });
  };
}, []);


// 2. Indicator movement (SEPARATE hook)
useEffect(() => {
  const sections = navLinks
    .map((l) => document.querySelector(l.href))
    .filter((el): el is Element => el !== null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    },
    {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  };
}, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-6xl container-px">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#home"
            className="flex items-center gap-2 ml-6 md:ml-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            onClick={close}
            aria-label={`${brand} home`}
          >
            <Image 
  src="/images/new-logo-transparent.png"
  alt="Company Logo"
  width={400}
  height={110}
  className="h-[65px] md:h-[75px] w-auto object-contain"
  priority
/>
          </Link>

          <nav className="relative hidden items-center gap-7 md:flex">
  {/* Sliding indicator */}
  <span
  className="absolute bottom-0 h-[2px] bg-[color:var(--brand-900)] transition-all duration-300 ease-in-out"
  style={{
    left: indicatorStyle.left,
    width: indicatorStyle.width,
  }}
/>

  {navLinks.map((l) => (
    <Link
      key={l.href}
      href={l.href}
      className={[
        "relative text-sm font-medium transition-colors rounded focus:outline-none focus:ring-2 focus:ring-blue-500/30",
        active === l.href
          ? "text-slate-900"
          : "text-slate-600 hover:text-slate-900",
      ].join(" ")}
    >
      <span className="relative">
        {l.label}
        <span
          className={[
            "absolute left-0 -bottom-1 h-[2px] w-full bg-[color:var(--brand-900)] transition-transform duration-300 origin-left",
            active === l.href ? "scale-x-100" : "scale-x-0",
          ].join(" ")}
        />
      </span>
    </Link>
  ))}
</nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+910000000000"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Call
            </a>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-900)] px-4 py-2 text-sm font-semibold text-white hover:bg-[color:var(--brand-800)] transition shadow-sm"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-6xl container-px py-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={[
  "rounded-lg px-3 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30", active === l.href
    ? "text-slate-900 bg-slate-50"
    : "text-slate-800 hover:bg-slate-50",
].join(" ")}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="tel:+910000000000"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-900)] px-4 py-3 text-sm font-semibold text-white hover:bg-[color:var(--brand-800)] transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

