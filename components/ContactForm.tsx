"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `👋 *New Callback Request*`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      message ? `*Message:* ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const encodedText = encodeURIComponent(text);

    // ✅ Replace with your actual WhatsApp number
    const whatsappNumber = "919999982787";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-400/70 focus:ring-4 focus:ring-blue-500/10"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">
          Submitting will open WhatsApp with your details pre-filled —{" "}
          <span className="font-semibold">just hit send.</span>
        </p>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-(--brand-900) px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-(--brand-800) focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          Send
        </button>
      </div>
    </form>
  );
}