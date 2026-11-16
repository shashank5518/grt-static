"use client";

import Link from "next/link";

import {
  sectorPins,
  sectorProperties,
} from "./master-plan-data";

import { MapPin } from "./MapPin";
import { useRef, useState, useCallback, useEffect } from "react";
import { SectionWrapper } from "./SectionWrapper";

type Point = { x: number; y: number };

export function MasterPlanSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [activeSector, setActiveSector] =
  useState<string | null>(null);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<Point>({ x: 0, y: 0 });
  const offsetAtDragStart = useRef<Point>({ x: 0, y: 0 });

  const MIN_SCALE = 1;
  const MAX_SCALE = 6;

  const clampOffset = useCallback(
    (newOffset: Point, newScale: number): Point => {
      const container = containerRef.current;
      if (!container) return newOffset;
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const maxX = (cw * (newScale - 1)) / 2;
      const maxY = (ch * (newScale - 1)) / 2;
      return {
        x: Math.min(maxX, Math.max(-maxX, newOffset.x)),
        y: Math.min(maxY, Math.max(-maxY, newOffset.y)),
      };
    },
    []
  );

  // Wheel zoom — zoom toward cursor position
  const handleWheel = useCallback(
    (e: WheelEvent) => {
            if (
        e.target instanceof HTMLElement &&
        e.target.closest("[data-map-popup]")
      ) {
        return;
      }
      e.preventDefault();
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      const zoomFactor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * zoomFactor));
      const scaleChange = newScale / scale;

      const newOffset = {
        x: mouseX - scaleChange * (mouseX - offset.x),
        y: mouseY - scaleChange * (mouseY - offset.y),
      };

      setScale(newScale);
      setOffset(clampOffset(newOffset, newScale));
    },
    [scale, offset, clampOffset]
  );

  // Attach wheel with passive:false so we can preventDefault
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    offsetAtDragStart.current = { ...offset };
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      const newOffset = {
        x: offsetAtDragStart.current.x + dx,
        y: offsetAtDragStart.current.y + dy,
      };
      setOffset(clampOffset(newOffset, scale));
    },
    [isDragging, scale, clampOffset]
  );

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Touch pinch-zoom + drag
  const lastTouchDist = useRef<number | null>(null);
  const lastTouchMid = useRef<Point | null>(null);
  const offsetAtTouchStart = useRef<Point>({ x: 0, y: 0 });
  const scaleAtTouchStart = useRef(1);

  const getTouchDist = (touches: React.TouchList) =>
    Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );

  const getTouchMid = (touches: React.TouchList): Point => ({
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2,
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.closest("[data-map-popup]")
    ) {
      return;
    }
    if (e.touches.length === 2) {
      lastTouchDist.current = getTouchDist(e.touches);
      lastTouchMid.current = getTouchMid(e.touches);
      scaleAtTouchStart.current = scale;
      offsetAtTouchStart.current = { ...offset };
    } else if (e.touches.length === 1 && scale > 1) {
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      offsetAtDragStart.current = { ...offset };
      setIsDragging(true);
    }
  };

  
  const handleTouchMove = (e: React.TouchEvent) => {
        if (
      e.target instanceof HTMLElement &&
      e.target.closest("[data-map-popup]")
    ) {
      return;
    }
    if (e.touches.length === 2) {
      e.preventDefault();
    } else if (e.touches.length === 1 && isDragging) {
      e.preventDefault();
    }

    if (e.touches.length === 2 && lastTouchDist.current && lastTouchMid.current) {

      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const newDist = getTouchDist(e.touches);
      const newMid = getTouchMid(e.touches);
      const pinchScale = newDist / lastTouchDist.current;
      const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scaleAtTouchStart.current * pinchScale));
      const midX = lastTouchMid.current.x - rect.left - rect.width / 2;
      const midY = lastTouchMid.current.y - rect.top - rect.height / 2;
      const scaleChange = newScale / scaleAtTouchStart.current;
      const panDx = newMid.x - lastTouchMid.current.x;
      const panDy = newMid.y - lastTouchMid.current.y;
      const newOffset = {
        x: midX - scaleChange * (midX - offsetAtTouchStart.current.x) + panDx,
        y: midY - scaleChange * (midY - offsetAtTouchStart.current.y) + panDy,
      };
      setScale(newScale);
      setOffset(clampOffset(newOffset, newScale));
    } else if (e.touches.length === 1 && isDragging) {
      const dx = e.touches[0].clientX - dragStart.current.x;
      const dy = e.touches[0].clientY - dragStart.current.y;
      const newOffset = {
        x: offsetAtDragStart.current.x + dx,
        y: offsetAtDragStart.current.y + dy,
      };
      setOffset(clampOffset(newOffset, scale));
    }
  };

  const handleTouchEnd = () => {
    lastTouchDist.current = null;
    lastTouchMid.current = null;
    setIsDragging(false);
  };

  const handleReset = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    const newScale = Math.min(MAX_SCALE, scale * 1.4);
    setScale(newScale);
    setOffset(clampOffset(offset, newScale));
  };

  const handleZoomOut = () => {
    const newScale = Math.max(MIN_SCALE, scale / 1.4);
    setScale(newScale);
    setOffset(clampOffset(offset, newScale));
  };

  const zoomPercent = Math.round(scale * 100);
  const activePin =
  sectorPins.find(
    pin => pin.sector === activeSector
  );

  return (
    <SectionWrapper
      id="new-gurgaon"
      eyebrow="Explore the Location"
      title="Discover New Gurgaon"
      description="Explore residential developments and available properties across New Gurgaon's key sectors, from Sector 76 to Sector 95."
      className="bg-slate-50"
    >
      <div className="flex flex-col items-center gap-4">

        {/* Controls */}
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
          <button
            onClick={handleZoomOut}
            disabled={scale <= MIN_SCALE}
            className="flex h-7 w-7 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 disabled:opacity-30"
            aria-label="Zoom out"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </button>

          <span className="w-14 text-center text-xs font-semibold tabular-nums text-slate-500">
            {zoomPercent}%
          </span>

          <button
            onClick={handleZoomIn}
            disabled={scale >= MAX_SCALE}
            className="flex h-7 w-7 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 disabled:opacity-30"
            aria-label="Zoom in"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </button>

          <div className="mx-1 h-4 w-px bg-slate-200" />

          <button
            onClick={handleReset}
            disabled={scale === 1 && offset.x === 0 && offset.y === 0}
            className="flex h-7 items-center gap-1 rounded-full px-2 text-xs font-medium text-slate-500 transition hover:bg-slate-100 disabled:opacity-30"
            aria-label="Reset zoom"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M10 6A4 4 0 1 1 6 2a4 4 0 0 1 3.5 2.06" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M10 2v2.5H7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Reset
          </button>
        </div>

        {/* Hint */}
        <p className="text-xs text-slate-400">
          {scale > 1 ? "Drag to pan • scroll or pinch to zoom" : "Scroll or pinch to zoom in"}
        </p>

        {/* Image Container */}
        <div
          ref={containerRef}
          className="mx-auto w-[92%] max-w-[460px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
        
          {/* Portrait map container */}
          <div className="relative w-full">
            <div
              className="relative w-full"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.15s ease-out",
                willChange: "transform",
                userSelect: "none",
              }}
            >
              <img
                src="/images/masterPlan.webp"
                alt="New Gurgaon sector map covering Sectors 76 to 95"
                className="block h-auto w-full"
                draggable={false}
              />
              {sectorPins.map((pin) => (
  <button
    key={pin.sector}
    aria-label={`Show properties in ${pin.sector}`}
aria-pressed={activeSector === pin.sector}
title={pin.sector}
    onClick={(e) => {
  e.stopPropagation();
  setActiveSector(pin.sector);
}}
    className={`
  absolute
  z-20

  transition-opacity
  duration-200

  ${
    activeSector && activeSector !== pin.sector
      ? "opacity-40"
      : "opacity-100"
  }

  md:hover:-translate-y-1
  md:hover:scale-125
`}
    style={{
      left: `${pin.x}%`,
      top: `${pin.y}%`,
      transform: "translate(-50%, -100%)",
    }}
  >
  <div className="scale-75 md:scale-100">
    <MapPin />
  </div>
  </button>
))}

            </div>

            {/* Smoothly expanding sector details */}
            <div
              aria-hidden={!activeSector || !activePin}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                activeSector && activePin
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                {activeSector && activePin && (
                  <section
                  data-map-popup
                    aria-label={`Properties in ${activeSector}`}
                    className="m-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    {/* Popup header */}
                    <div className="flex min-h-[68px] items-center justify-between gap-3 px-4 py-3.5 border-b border-slate-100">
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-semibold tracking-tight text-[var(--brand-900)]">
                          {activeSector}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                          {sectorProperties[activeSector]?.length} properties available
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveSector(null)}
                        aria-label="Close sector properties"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-700)]"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <path d="m5 5 10 10M15 5 5 15" />
                        </svg>
                      </button>
                    </div>

                    {/* Property list */}
                    <div className="max-h-[240px] divide-y divide-slate-100 overflow-y-auto overscroll-contain">
                      {sectorProperties[activeSector]?.map((property) => (
                        <Link
                          key={property.slug}
                          href={`/properties/${property.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 px-3.5 py-3 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-5 text-slate-800 transition-colors group-hover:text-[var(--brand-900)]">
                              {property.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {property.startingPrice}
                            </p>
                          </div>

                          <svg
                            viewBox="0 0 20 20"
                            className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M4 10h12M10 4l6 6-6 6" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}