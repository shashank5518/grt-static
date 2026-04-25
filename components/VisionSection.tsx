import { SectionWrapper } from "./SectionWrapper";

const items = [
  {
    title: "Vision",
    desc: "Become the most trusted premium property advisor in Gurgaon, known for clarity, integrity, and results.",
  },
  {
    title: "Mission",
    desc: "Help clients choose the right property with curated options, honest guidance, and end-to-end support.",
  },
  {
    title: "Core values",
    desc: "Transparency, client-first thinking, and long-term relationships over short-term wins.",
  },
] as const;

export function VisionSection() {
  return (
    <SectionWrapper
      id="vision"
      eyebrow="Vision & goals"
      title="Built on trust, driven by outcomes"
      description="A clear process, premium experience, and guidance you can rely on."
      className="bg-slate-50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
              {i.title}
            </p>
            <p className="mt-3 text-base font-semibold text-slate-900">
              {i.desc}
            </p>
            <div className="mt-5 h-px w-full bg-slate-200/70" />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Helping you with hassle-free transactions whenever you need.
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

