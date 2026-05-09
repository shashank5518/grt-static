// components/PropertyCard.tsx
"use client";

import { useState } from "react";
import type { Property } from "./properties-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export function PropertyCard({ property }: { property: Property }) {
  const [selectedBhk, setSelectedBhk] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const selectedConfig = property.configurations.find(
    (c) => c.bhk === selectedBhk
  );

const selectedOption = selectedConfig?.options.find(
  (o) => o.size === selectedSize
);

const priceToShow =
  selectedOption?.price ||
  selectedConfig?.options[0]?.price ||
  property.startingPrice;
  const handleBhkChange = (bhk: string) => {
  setSelectedBhk(bhk);

  const config = property.configurations.find((c) => c.bhk === bhk);

  if (!config) {
    setSelectedSize("");
    return;
  }

  // Auto-select if only one size exists
  if (config.options.length === 1) {
  setSelectedSize(config.options[0].size);
  } else {
    setSelectedSize("");
  }
};

  const whatsappMessage = `Hi, I'm interested in ${property.name}${selectedBhk ? ` - ${selectedBhk}` : ""}${selectedSize ? ` (${selectedSize})` : ""}`;
  const whatsappHref = `https://wa.me/919999982787?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="relative h-52 overflow-hidden shrink-0">

  {/* Property image */}
  <Image
    src={property.image}
    alt={property.name}
    fill
    className="
      object-cover
      transition-transform duration-700
      group-hover:scale-105
    "
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/10" />
  {/* Brokerage logo */}
<div className="absolute top-3 right-3">
  <div className="
    relative flex h-11 w-11 items-center justify-center
    rounded-2xl border border-white/10
    bg-white/10
    backdrop-blur-xl
    shadow-lg
  ">
    <Image
      src="/images/new-logo-white-transparent.png"
      alt="Company Logo"
      width={28}
      height={28}
      className="object-contain"
    />
  </div>
</div>
  {/* Status tag */}
  <span
    className={`absolute top-3 left-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md ${property.tagColor}`}
  >
    {property.tag}
  </span>

  {/* Price chip */}
  <div className="absolute bottom-3 left-3">
    <div className="inline-flex items-baseline gap-1.5 rounded-2xl bg-black/40 px-3 py-1.5 backdrop-blur-md border border-white/10">
      <span className="text-xs text-white/70">
        From
      </span>

      <span className="text-sm font-bold text-white">
        {priceToShow}
      </span>
    </div>
  </div>
</div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-4 p-5">

        {/* Property info */}
        <div>
          <h3 className="text-base font-semibold leading-tight text-slate-900">
            {property.name}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-slate-500">{property.developer}</p>
          <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1Z" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            {property.location}
          </div>
        </div>

        {/* Highlight tags */}
        <div className="flex flex-wrap gap-1.5">
          {property.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="h-px w-full bg-slate-100" />

        {/* Configuration selectors */}
        <div className="space-y-3">

        {/* Step 1 — BHK */}
<div>
  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-slate-400">
    STEP 1 · SELECT CONFIGURATION
  </label>

  <Select
    value={selectedBhk}
    onValueChange={handleBhkChange}
  >
    <SelectTrigger
      className="
        h-14 rounded-2xl border border-slate-200/80
        bg-white/90 px-4 text-sm font-semibold
        text-slate-800 shadow-sm
        transition-all duration-200
        hover:border-slate-300
        focus:ring-4 focus:ring-(--brand-900)/10
        data-[state=open]:border-(--brand-700)
      "
    >
      <SelectValue placeholder="Choose BHK type" />
    </SelectTrigger>

    <SelectContent
      className="
        rounded-2xl border border-slate-200
        bg-white/95 backdrop-blur-xl
        shadow-2xl
      "
    >
      {property.configurations.map((c) => (
        <SelectItem
          key={c.bhk}
          value={c.bhk}
          className="
            rounded-xl text-sm font-medium
            focus:bg-slate-100
          "
        >
          {c.bhk}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

          {/* Step 2 — Size */}
{selectedConfig && selectedConfig.options.length > 1 && (
  <div>
    <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-slate-400">
      STEP 2 · SELECT SIZE
    </label>

    <Select
      value={selectedSize}
      onValueChange={setSelectedSize}
    >
      <SelectTrigger
        className="
          h-14 rounded-2xl border border-slate-200/80
          bg-white/90 px-4 text-sm font-semibold
          text-slate-800 shadow-sm
          transition-all duration-200
          hover:border-slate-300
          focus:ring-4 focus:ring-(--brand-900)/10
          data-[state=open]:border-(--brand-700)
        "
      >
        <SelectValue placeholder="Choose apartment size" />
      </SelectTrigger>

      <SelectContent
        className="
          rounded-2xl border border-slate-200
          bg-white/95 backdrop-blur-xl
          shadow-2xl
        "
      >
        {selectedConfig.options.map((s) => (
  <SelectItem
    key={s.size}
    value={s.size}
    className="
      rounded-xl text-sm font-medium
      focus:bg-slate-100
    "
  >
    {s.size}
  </SelectItem>
))}
      </SelectContent>
    </Select>
  </div>
)}

          {/* Price display */}
          <div
            className={`rounded-2xl p-3 transition-all duration-200 ${
              selectedBhk
                ? "bg-(--brand-900)"
                : "border border-slate-200 bg-slate-50"
            }`}
          >
            <p className={`text-xs font-semibold ${selectedBhk ? "text-white/60" : "text-slate-400"}`}>
              {selectedBhk
                ? selectedSize
                  ? `${selectedBhk} · ${selectedSize}`
                  : `${selectedBhk} · all sizes`
                : "Starting price"}
            </p>
            <p className={`mt-0.5 text-sm font-bold ${selectedBhk ? "text-white" : "text-slate-700"}`}>
              {priceToShow}
            </p>
          </div>
        </div>
        <Link href={`/properties/${property.slug}`}
  className="
    inline-flex h-11 items-center justify-center
    rounded-full border border-slate-200
    px-5 text-sm font-semibold text-slate-900
    transition hover:bg-slate-50
  "
>
  View Details
</Link>
        {/* WhatsApp CTA */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-full bg-(--brand-900) px-5 text-sm font-semibold text-white transition hover:bg-(--brand-800) focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}