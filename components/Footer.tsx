import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl container-px py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Growth Realtech
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A premium property advisor for investors and end-users in{" "}
              <span className="font-semibold">Gurgaon</span>.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <a
                href="tel:+919999982787"
                className="flex items-center gap-2 hover:text-slate-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 99999 82787
              </a>
              <a
                href="mailto:sales.growthrealtech@gmail.com?subject=Property%20Inquiry&body=Hello%20Growth%20Realtech,%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20properties.%20Please%20share%20additional%20details,%20pricing,%20availability,%20and%20any%20relevant%20information.%0A%0AName:%20%0APhone:%20%0ACity:%20%0AProperty%20of%20Interest:%20%0A%0AThank%20you."
                className="flex items-center gap-2 hover:text-slate-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                sales.growthrealtech@gmail.com
              </a>
              <p className="flex items-start gap-2 text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                AB2-104, Mapsko Casa Bella, Sector-82, Gurgaon
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Social</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/70 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Growth Realtech.</p>
          <p>Designed for Speed • Clarity • Conversions</p>
          <p>Designed and maintained by Shashank Garg</p>
        </div>
      </div>
    </footer>
  );
}