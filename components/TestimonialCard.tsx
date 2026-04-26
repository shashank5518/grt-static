export type Testimonial = {
  name: string;
  feedback: string;
};

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="h-[220px] min-w-[280px] max-w-[280px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
      <p className="text-sm leading-6 text-slate-600 line-clamp-4">
        “{t.feedback}”
      </p>

      <div className="mt-4">
        <p className="text-sm font-semibold text-slate-900">{t.name}</p>
        <div className="flex items-center gap-1 mt-2">
  <p className="text-xs text-slate-500 tracking-wide">
    Verified Client
  </p>
  <span className="flex items-center justify-center h-4 w-4">
    <img
      src="/images/verification-badge.svg"
      alt="verified badge"
      className="h-4 w-4 object-contain"
    />
  </span>
</div>
      </div>
    </article>
  );
}