import Image from "next/image";
import { ViewPropertiesButton } from "./ViewPropertiesButton";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-(--brand-900)/70" />
        <div className="absolute inset-0 brand-gradient opacity-70" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-6xl container-px">
          <div className="py-20 sm:py-28 lg:py-32">
            <div className="flex items-center justify-between gap-12">
            <div className="max-w-2xl">
              
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
                CURATED PROPERTIES • GURGAON REAL ESTATE • BUYER ADVISORY
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find the Right Property in {" "}
                <span className="text-white/90">Gurgaon</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                Explore carefully selected homes and investment opportunities across Gurgaon's most sought-after locations, with expert guidance from site visit to possession.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/919999982787?text=Hi%20I%27m%20interested%20in%20properties%20in%20Gurgaon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-(--brand-900) shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  WhatsApp Us
                </a>
                <ViewPropertiesButton />

              </div>

              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-xs font-semibold tracking-wide text-white/70">
                    Local
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    Market Knowledge
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-xs font-semibold tracking-wide text-white/70">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    End-to-End Assistance
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-xs font-semibold tracking-wide text-white/70">
                    Curated
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    Property Options
                  </dd>
                </div>
              </dl>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Hero Logo */}
<div
  className="
    pointer-events-none
    absolute right-10 top-1/2 hidden
    -translate-y-1/2 lg:block
  "
>

  {/* Glow */}
  <div
    className="
      absolute inset-0
      scale-125 rounded-full
      bg-white/10 blur-3xl
    "
  />

  {/* Glass card */}
  <div
    className="
      relative rounded-[40px]
      border border-white/10
      bg-white/[0.03]
      p-8 backdrop-blur-md
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
    "
  >

    <Image
      src="/images/new-logo-white-transparent.png"
      alt="Growth Realtech"
      width={500}
      height={500}
      priority
      className="
        w-[280px] xl:w-[340px]
        object-contain
        opacity-95
        drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]
        animate-[float_6s_ease-in-out_infinite]
      "
    />

  </div>
</div>
    </section>
  );
}