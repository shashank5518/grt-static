export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/XXXXXXXX"
      method="POST"
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-900">Name *</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400/70 focus:ring-4 focus:ring-blue-500/10"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-900">Phone *</span>
          <input
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 99999 82787"
            className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400/70 focus:ring-4 focus:ring-blue-500/10"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-900">Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us what you're looking for (budget, unit type, timeline)…"
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400/70 focus:ring-4 focus:ring-blue-500/10"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">
          By submitting, you agree to be contacted about property options in{" "}
          <span className="font-semibold">Gurgaon</span>.
        </p>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--brand-900)] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-800)] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          Get a Call Back
        </button>
      </div>
    </form>
  );
}

