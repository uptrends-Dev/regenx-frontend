'use client'
import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

// Contact Section — TSX + TailwindCSS
// Matches the reference: dark city background, left contact info, right white card form.
// Drop-in component; Tailwind required. Icons via lucide-react.

export type ContactDetails = {
  addressLines?: string[];
  phone?: string;
  email?: string;
  website?: string;
};

type ContactSectionProps = {
  bgImage?: string;
  title?: string;
  getInTouchTitle?: string;
  details?: ContactDetails;
  onSubmit?: (data: { name: string; email: string; subject: string; message: string }) => void | Promise<void>;
};

export default function ContactSection({
  bgImage = "/images/p7.jpg",
  title = "Contact Form #10",
  getInTouchTitle = "Get in touch",
  details = {
    addressLines: ["198 West 21th Street, Suite 721 New York NY", "10016"],
    phone: "+1235 2355 98",
    email: "info@yoursite.com",
    website: "yoursite.com",
  },
  onSubmit,
}: ContactSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSent(null);
    try {
      if (onSubmit) {
        await onSubmit(form);
      } else {
        // demo fallback
        await new Promise((r) => setTimeout(r, 600));
      }
      setSent("ok");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setSent("err");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-slate-900">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-slate-900/70" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
  

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left: contact info */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-white">Contact us</h3>

            <ul className="mt-6 space-y-6 text-white/80">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-none opacity-80" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Address</p>
                  {details.addressLines?.map((l, i) => (
                    <p key={i} className="leading-relaxed">
                      {l}
                    </p>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-none opacity-80" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Phone</p>
                  <p className="leading-relaxed">{details.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 flex-none opacity-80" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Email</p>
                  <p className="leading-relaxed">{details.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Globe className="mt-1 h-5 w-5 flex-none opacity-80" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Website</p>
                  <p className="leading-relaxed">{details.website}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-sky-900/10 ring-1 ring-slate-200 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900">{getInTouchTitle}</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Name"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-400/0 transition focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="Email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-400/0 transition focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    placeholder="Subject"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-400/0 transition focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Message"
                    className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-400/0 transition focus:ring-2"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-600/30 transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:opacity-70"
                  >
                    {sending ? "Sending…" : "Send Message"}
                  </button>
                </div>
                {sent === "ok" && (
                  <p className="text-sm font-medium text-emerald-600">Thanks! We’ll be in touch.</p>
                )}
                {sent === "err" && (
                  <p className="text-sm font-medium text-rose-600">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
