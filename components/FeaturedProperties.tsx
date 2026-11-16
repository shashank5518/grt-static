
import Image from "next/image";
import Link from "next/link";
import { properties, type Property } from "./properties-data";

const featuredSlugs = [
  "mapsko-casa-bella",
  "mapsko-royale-ville",
  "mapsko-paradise",
  "mapsko-mount-ville",
  "ss-coralwood",
  "spaze-privy-at4",
];

const featuredProperties = featuredSlugs
  .map((slug) => properties.find((property) => property.slug === slug))
  .filter((property): property is Property => property !== undefined);

function FeaturedPropertyCard({ property }: { property: Property }) {
  const whatsappMessage = `Hi, I'm interested in ${property.name}. Please share more details.`;

  const whatsappHref = `https://wa.me/919999982787?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Property image */}
      <div className="relative h-48 shrink-0 overflow-hidden">

        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />

        {/* GRT watermark */}
        <div className="absolute right-3 top-3 flex h-[58px] w-[58px] flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur-xl">

          <Image
  src="/images/new-logo-white-transparent.png"
  alt="Growth Realtech"
  width={29}
  height={29}
  className="object-contain"
/>

        </div>

        {/* Property status */}
        <span
          className={`absolute left-3 top-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${property.tagColor}`}
        >
          {property.tag}
        </span>

      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col gap-3 p-4">

        {/* Property information */}
        <div>
          <h3 className="text-base font-semibold leading-tight text-slate-900">
            {property.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-slate-500">
            {property.developer}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {property.location}
          </p>
        </div>

        {/* Starting price */}
        <div className="rounded-xl bg-slate-50 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Starting Price
          </p>

          <p className="mt-0.5 text-base font-bold text-(--brand-900)">
            {property.startingPrice}
          </p>
        </div>

        {/* Available configurations */}
        <div className="min-h-[76px]">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Available Configurations
          </p>

          <div className="flex flex-wrap gap-1.5">
            {property.configurations.map((configuration) => (
              <span
                key={configuration.bhk}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-medium text-slate-600"
              >
                {configuration.bhk}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-2 pt-2">

          <Link
            href={`/properties/${property.slug}`}
            className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            View Details
          </Link>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-(--brand-900) px-4 text-sm font-semibold text-white transition hover:bg-(--brand-800) focus:outline-none focus:ring-4 focus:ring-(--brand-900)/20"
          >
            Enquire on WhatsApp
          </a>

        </div>
      </div>
    </article>
  );
}

export function FeaturedProperties() {
  return (
        <section
  id="featured-properties"
  className="bg-white py-16 sm:py-20"
>

      <div className="mx-auto max-w-6xl container-px">

        {/* Section heading */}
        <div className="mb-9 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-(--brand-700)">
              EXPLORE OUR SELECTION
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Featured Properties
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Explore carefully selected residential properties across
              Gurgaon, with transparent pricing and expert guidance.
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--brand-900) transition hover:text-(--brand-700)"
          >
            View All Properties
            <span aria-hidden="true">→</span>
          </Link>

        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <FeaturedPropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
