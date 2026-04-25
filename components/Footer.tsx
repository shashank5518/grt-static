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
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <a
                href="tel:+910000000000"
                className="block hover:text-slate-900"
              >
                +91 99999 82787
              </a>
              <a
                href="mailto:hello@example.com"
                className="block hover:text-slate-900"
              >
                hello@example.com
              </a>
              <p className="text-slate-600">
                Mapsko Casa Bella, Sector-82, Gurgaon
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

