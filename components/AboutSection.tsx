import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About company"
      title="Local expertise. Premium service."
      description="We combine market knowledge with a consultative approach—so you can make confident property decisions."
      className="bg-slate-50"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-base font-semibold text-slate-900">
              What clients trust us for
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <p>
                We’re a property consulting team focused on helping buyers and
                investors in <span className="font-semibold">Gurgaon</span>{" "}
                find the right opportunities—based on your goals, budget, and
                timeline.
              </p>
              <p>
                Expect clear recommendations, transparent pros/cons, and a
                curated shortlist—so you don’t waste time.
              </p>
            </div>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-xs font-semibold tracking-wide text-slate-500">
                  Market knowledge
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  Micro-market insights
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-xs font-semibold tracking-wide text-slate-500">
                  Guidance
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  ROI + end-use fit
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-xs font-semibold tracking-wide text-slate-500">
                  Shortlisting
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  Only quality options
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-xs font-semibold tracking-wide text-slate-500">
                  Support
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  Visits to closing
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="absolute inset-0 brand-gradient opacity-70" />
            <div className="relative aspect-[4/3]">
              <div className="aspect-[4/3] w-full">
            <iframe
              title="Google Map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7019.701601096077!2d76.95765633032283!3d28.393573999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d9f95285b77%3A0xd2a215b5d9ca1df!2sMapsko%20Casa%20Bella!5e0!3m2!1sen!2sin!4v1776581300187!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

