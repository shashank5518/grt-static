import { SectionWrapper } from "./SectionWrapper";

export function AreaSection() {
  return (
    <SectionWrapper
      id="area"
      eyebrow="Area we specialise in"
      title="Gurgaon"
      description="Gurgaon offers strong appreciation and high rental demand, making it a prime investment market."
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-base font-semibold text-slate-900">
            Why investors like this area
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
              <span>
                <span className="font-semibold text-slate-900">
                  Connectivity
                </span>{" "}
                – easy access to key corridors, transit, and major employment
                hubs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
              <span>
                <span className="font-semibold text-slate-900">Growth</span> –
                consistent demand from end-users and long-term investors.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
              <span>
                <span className="font-semibold text-slate-900">
                  Infrastructure
                </span>{" "}
                – upcoming roads, social infrastructure, and premium retail.
              </span>
            </li>
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                Best for
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                End-users + investors
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                Typical demand
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Flat/Villa/Penthouse/Plot
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-4">
            <p className="text-sm font-semibold text-slate-900">
              Location on map
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[color:var(--accent)] hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="aspect-[4/3] w-full">
            <iframe
              title="Google Map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140628.28273213725!2d76.89639408159633!3d28.435552354316112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1776602623728!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

