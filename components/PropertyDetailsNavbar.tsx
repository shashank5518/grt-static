"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    id: "amenities",
    label: "Amenities",
  },
  {
    id: "configurations",
    label: "Configurations",
  },
  {
    id: "floorplans",
    label: "Floor Plans",
  },
];

export function PropertyDetailsNavbar() {

  const [active, setActive] = useState("amenities");

  useEffect(() => {

    const sections = navItems
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };

  }, []);

  return (
    <div
      className="
        sticky top-20 z-40
        mx-auto mt-8 mb-10
        w-fit
      "
    >

      <div
        className="
          flex items-center gap-2
          rounded-full border border-slate-200/70
          bg-white/75 p-2
          shadow-[0_8px_30px_rgba(15,23,42,0.06)]
          backdrop-blur-xl
        "
      >

        {navItems.map((item) => {

          const isActive =
            active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className={`
                rounded-full px-5 py-2.5
                text-sm font-semibold
                transition-all duration-300
                ${
                  isActive
                    ? "bg-(--brand-900) text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}

      </div>
    </div>
  );
}