import { SectionWrapper } from "./SectionWrapper";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Tell us what you’re looking for"
      description="Share your requirements and we’ll send a curated shortlist or arrange a site visit."
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-base font-semibold text-slate-900">
            Fast ways to reach us
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            For the fastest response, WhatsApp us with your budget and preferred
            unit type.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="tel:+919999982787"
              className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
            >
              <span>Call Us</span>
              <span className="text-slate-500">Tap to call</span>
            </a>
            <a
              href="mailto:sales.growthrealtech@gmail.com"
              className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
            >
              <span>Email Us</span>
              <span className="text-slate-500">Tap to email</span>
            </a>
            <a
              href="https://wa.me/919999982787"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl bg-[color:var(--brand-900)] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-800)]"
            >
              <span>WhatsApp Chat</span>
              <span className="text-white/70">Tap to open</span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              What to share (optional)
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Budget range</li>
              <li>• Unit type (Flat/Villa/Penthouse/Plot)</li>
              <li>• Timeline and purpose (end-use/investment)</li>
            </ul>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}

