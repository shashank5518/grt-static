import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { properties } from "@/components/properties-data";
import { FloorPlansSection } from "@/components/FloorPlansSection";
import { PropertyDetailsNavbar } from "@/components/PropertyDetailsNavbar";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const property = properties.find(
    (p) => p.slug === slug
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">

        <Image
          src={property.image}
          alt={property.name}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Back Button */}
<div
  className="
    absolute left-6 top-6 z-30
    md:left-10 md:top-8
  "
>

  <Link
    href="/properties"
    className="
      inline-flex items-center gap-2
      rounded-full border border-white/15
      bg-white/10 px-5 py-2.5
      text-sm font-semibold text-white
      backdrop-blur-xl
      transition-all duration-300
      hover:bg-white/20
      hover:shadow-lg
    "
  >

    <span className="text-lg leading-none">
      ←
    </span>

    Back

  </Link>
</div>
        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl container-px pb-12">

            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${property.tagColor}`}
            >
              {property.tag}
            </span>

            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              {property.name}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
              {property.location} · {property.developer}
            </p>

            <div className="mt-6 inline-flex rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-xl border border-white/10">
              <div>
                <p className="text-xs text-white/60">
                  Starting Price
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  {property.startingPrice}
                </p>
              </div>
            </div>
          </div>
          {/* Floating Logo */}
<div
  className="
  absolute right-10 xl:right-20 2xl:right-28 top-1/2 hidden
    -translate-y-1/2 lg:flex
    items-center justify-center
  "
>

  <div
    className="
      rounded-[32px] animate-[float_6s_ease-in-out_infinite]
      border border-white/10
      bg-white/10 p-5
      shadow-[0_10px_40px_rgba(0,0,0,0.18)]
      backdrop-blur-xl
    "
  >

    <Image
      src="/images/new-logo-white-transparent.png"
      alt="Growth Realtech"
      width={220}
      height={220}
      className="
        h-auto w-[180px]
        object-contain
        opacity-95
      "
      priority
    />

  </div>
</div>
        </div>
      </section>
      <PropertyDetailsNavbar />
      {/* Highlights */}
<section
  id="highlights"
  className="mx-auto max-w-6xl container-px pt-8"
>

  <div className="grid gap-4 md:grid-cols-3">

    {property.highlights.map((highlight) => (

  <div
    key={highlight.label}
    className="
      group relative overflow-hidden
      rounded-[28px]
      border border-slate-200/70
      bg-white/70
      p-6
      backdrop-blur-xl
      shadow-[0_10px_35px_rgba(15,23,42,0.04)]
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-lg
    "
  >

    {/* Glow */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-br
        from-(--brand-900)/[0.04]
        to-transparent
        opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
      "
    />

    {/* Label */}
    <p
      className="
        relative z-10
        text-xs font-semibold
        tracking-[0.16em]
        text-slate-400
      "
    >
      {highlight.label}
    </p>

    {/* Value */}
    <h3
      className="
        relative z-10
        mt-4 text-2xl font-bold
        text-slate-900
      "
    >
      {highlight.value}
    </h3>

  </div>

))}

  </div>
</section>

      {/* Content */}
      <section className="mx-auto max-w-6xl container-px py-5">

        {/* Amenities */}
<div id="amenities" className="mt-14">
  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
    AMENITIES
  </p>

  <h2 className="mt-2 text-2xl font-semibold text-slate-900">
    Premium Lifestyle Features
  </h2>

  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

    {property.amenities.map((amenity) => (
      <div
        key={amenity}
        className="
          flex items-center gap-3
          rounded-2xl border border-slate-200
          bg-white px-4 py-4
          shadow-sm transition-all duration-200
          hover:-translate-y-1 hover:shadow-md
        "
      >

        {/* Icon */}
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl bg-(--brand-900)/5
            text-(--brand-900)
          "
        >
          ✦
        </div>

        <p className="text-sm font-semibold text-slate-800">
          {amenity}
        </p>
      </div>
    ))}

  </div>
</div>

        {/* Configurations */}
<div id="configurations" className="mt-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
            CONFIGURATIONS
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {property.configurations.map((config) => (
              <div
                key={config.bhk}
                className="
                  rounded-3xl border border-slate-200
                  bg-white p-6 shadow-sm
                "
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {config.bhk}
                </h3>

                <div className="mt-5 space-y-3">

                  {config.options.map((option) => (
                    <div
                      key={option.size}
                      className="
                        flex items-center justify-between
                        rounded-2xl bg-slate-50 px-4 py-3
                      "
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {option.size}
                        </p>

                        <p className="text-xs text-slate-500">
                          Super Area
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">
                          {option.price}
                        </p>

                        <p className="text-xs text-slate-500">
                          Starting
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>
        <FloorPlansSection
            configurations={property.configurations}
        />
      </section>
    </main>
  );
}