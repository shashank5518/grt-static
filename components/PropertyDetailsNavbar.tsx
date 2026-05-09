"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    id: "highlights",
    label: "Highlights",
  },
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

  const [active, setActive] =
    useState("highlights");

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
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {

      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });

    };

  }, []);

  return (
    <div
      className="
        sticky top-0 z-40
        border-b border-slate-200/70
        bg-white/80
        backdrop-blur-xl
      "
    >

      <div className="mx-auto max-w-6xl container-px">

        <nav
          className="
            flex h-16 items-center
            gap-8 overflow-x-auto
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
                  relative whitespace-nowrap
                  text-sm font-semibold
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }
                `}
              >

                {item.label}

                <span
                  className={`
                    absolute left-0 -bottom-[21px]
                    h-0.5 w-full
                    origin-left
                    bg-(--brand-900)
                    transition-transform duration-300
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0"
                    }
                  `}
                />

              </button>
            );
          })}

        </nav>
      </div>
    </div>
  );
}