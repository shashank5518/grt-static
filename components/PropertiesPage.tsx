// components/PropertiesPage.tsx
"use client";

import { useState } from "react";
import { PropertiesNavbar } from "./PropertiesNavbar";
import { PropertyCard } from "./PropertyCard";
import { properties } from "./properties-data";

const ALL = "All";

const bhkOptions = [
  ALL,
  ...Array.from(
    new Set(properties.flatMap((p) => p.configurations.map((c) => c.bhk)))
  ),
];

const tagOptions = ["All", "Ready to Move", "New Launch", "Under Construction"];

export function PropertiesPage() {
  const [activeBhk, setActiveBhk] = useState(ALL);
  const [activeTag, setActiveTag] = useState(ALL);

  const filtered = properties.filter((p) => {
    const bhkMatch =
      activeBhk === ALL || p.configurations.some((c) => c.bhk === activeBhk);
    const tagMatch = activeTag === ALL || p.tag === activeTag;
    return bhkMatch && tagMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <PropertiesNavbar />

      {/* Hero bar */}
      <div className="bg-[color:var(--brand-900)]">
        <div className="mx-auto max-w-6xl container-px py-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/40">
            GURGAON · PREMIUM INVENTORY
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Available Properties
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
            Curated selection of premium residential properties across Gurgaon's
            top sectors — with transparent pricing and direct expert guidance.
          </p>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* BHK pills */}
            <div className="flex flex-wrap gap-2">
              {bhkOptions.map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => setActiveBhk(bhk)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition focus:outline-none ${
                    activeBhk === bhk
                      ? "bg-white text-[color:var(--brand-900)]"
                      : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {bhk}
                </button>
              ))}
            </div>

            <div className="hidden h-5 w-px bg-white/20 sm:block" />

            {/* Status pills */}
            <div className="flex flex-wrap gap-2">
              {tagOptions.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition focus:outline-none ${
                    activeTag === tag
                      ? "bg-white text-[color:var(--brand-900)]"
                      : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mx-auto max-w-6xl container-px py-5">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-900">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "property" : "properties"}
          {activeBhk !== ALL && (
            <>
              {" "}·{" "}
              <span className="font-semibold text-slate-900">{activeBhk}</span>
            </>
          )}
          {activeTag !== ALL && (
            <>
              {" "}·{" "}
              <span className="font-semibold text-slate-900">{activeTag}</span>
            </>
          )}
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl container-px pb-20">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-4xl mb-4">🏠</p>
            <p className="font-semibold text-slate-900">
              No properties match your filters
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Try a different configuration or status
            </p>
            <button
              onClick={() => {
                setActiveBhk(ALL);
                setActiveTag(ALL);
              }}
              className="mt-4 rounded-full bg-[color:var(--brand-900)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-800)]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl container-px flex flex-col items-center py-12 text-center gap-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
            NEED HELP CHOOSING?
          </p>
          <h2 className="text-xl font-semibold text-slate-900">
            Talk to our property experts
          </h2>
          <p className="max-w-md text-sm text-slate-500">
            We'll shortlist the best options based on your budget, timeline, and
            investment goals.
          </p>
          <div className="flex gap-3">
            <a
              href="tel:+919999982787"
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/919999982787"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--brand-900)] px-5 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-800)]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}