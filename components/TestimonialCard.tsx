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
        <p className="text-xs text-slate-500">Verified Client</p>
      </div>
    </article>
  );
}