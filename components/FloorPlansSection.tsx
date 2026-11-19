// components/FloorPlansSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  size: string;
  price: string;
  floorPlan: string;
};

type Config = {
  bhk: string;
  options: Option[];
};

export function FloorPlansSection({
  configurations,
}: {
  configurations: Config[];
}) {
  const [activeBhk, setActiveBhk] = useState(
    configurations[0]?.bhk || ""
  );

  const currentConfig = configurations.find((c) => c.bhk === activeBhk);

  const [activePlan, setActivePlan] = useState(
    currentConfig?.options[0]?.size || ""
  );

  const selectedPlan = currentConfig?.options.find(
    (o) => o.size === activePlan
  );

  return (
    <div id="floorplans" className="mt-16">
      <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
        FLOOR PLANS
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900">
        Explore Layouts &amp; Configurations
      </h2>

      {/* Floor plan card */}
      {selectedPlan && (
        <div className="mt-8 mx-auto max-w-3xl overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.07)]">
          {/* Top controls */}
<div
  className="
  grid grid-cols-1 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]
  gap-4
  border-b border-slate-100
  px-6 py-5
"
>

  {/* Configuration */}
<div className="min-w-0 w-full">
    <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-slate-400">
      CONFIGURATION
    </p>

    <Select
      value={activeBhk}
      onValueChange={(value) => {
        setActiveBhk(value);

        const sel = configurations.find(
          (c) => c.bhk === value
        );

        if (sel) {
          setActivePlan(sel.options[0].size);
        }
      }}
    >

      <SelectTrigger className="flex h-12 w-full min-w-0 overflow-hidden
  rounded-2xl border border-slate-200
  bg-white px-4 text-sm font-semibold
  shadow-sm transition-all
  hover:border-slate-300
  focus:ring-2 focus:ring-slate-200">
        <SelectValue placeholder="Choose configuration" className="truncate" />
      </SelectTrigger>

      <SelectContent className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl">
        {configurations.map((config) => (
          <SelectItem
            key={config.bhk}
            value={config.bhk}
            className="rounded-xl text-sm font-medium focus:bg-slate-100"
          >
            {config.bhk}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

  {/* Size */}
  <div className="min-w-0 w-full">

    <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-slate-400">
      SIZE
    </p>

    <Select
      value={activePlan}
      onValueChange={setActivePlan}
    >

      <SelectTrigger className="flex h-12 w-full min-w-0 overflow-hidden
  rounded-2xl border border-slate-200
  bg-white px-4 text-sm font-semibold
  shadow-sm transition-all
  hover:border-slate-300
  focus:ring-2 focus:ring-slate-200">
        <SelectValue placeholder="Choose size" className="truncate" />
      </SelectTrigger>

      <SelectContent className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl">
        {currentConfig?.options.map((option) => (
          <SelectItem
            key={option.size}
            value={option.size}
            className="rounded-xl text-sm font-medium focus:bg-slate-100"
          >
            {option.size}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

</div>
          {/* Info bar */}
          <div className="flex flex-col gap-3 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-slate-400">
                SELECTED FLOOR PLAN
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-900">
                {activeBhk}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-lg font-bold text-slate-900">
                {selectedPlan.size}
              </p>
              <p className="text-sm font-medium text-slate-500">
                {selectedPlan.price}
              </p>
            </div>
          </div>

          {/* Image — fills card width, no side whitespace */}
          <div className="relative w-full bg-[#e8f0f7]">

            {/* Floor plan image — full width, natural aspect ratio */}
            <div className="relative mx-auto w-full max-w-2xl">
              <Image
                src={selectedPlan.floorPlan}
                alt={`${activeBhk} - ${selectedPlan.size} floor plan`}
                width={850}
                height={1100}
                className="h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                priority
              />
            </div>

            {/* Floating logo — top right over the image */}
            <div className="absolute top-4 right-4">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-lg">
                <Image
                  src="/images/new-logo-transparent.png"
                  alt="Growth Realtech"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}