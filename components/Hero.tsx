import Image from "next/image";

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
        <div className="absolute inset-0 bg-[color:var(--brand-900)]/70" />
        <div className="absolute inset-0 brand-gradient opacity-70" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-6xl container-px">
          <div className="py-20 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
                Trusted property consulting • Site visits • Investment guidance
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Premium Properties in{" "}
                <span className="text-white/90">Gurgaon</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                Helping you find the right investment opportunity — with clear
                advice, curated inventory, and end-to-end support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="tel:+910000000000"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[color:var(--brand-900)] shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/910000000000?text=Hi%20I%27m%20interested%20in%20properties%20in%20%5BAREA%20NAME%5D."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  WhatsApp Us
                </a>
              </div>

              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-xs font-semibold tracking-wide text-white/70">
                    Response
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    Under 10 minutes
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-xs font-semibold tracking-wide text-white/70">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    Premium + investment
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <dt className="text-xs font-semibold tracking-wide text-white/70">
                    Support
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    From visit to closing
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

