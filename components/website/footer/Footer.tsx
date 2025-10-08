import React from "react";
import { Facebook, Twitter, Instagram, Dribbble } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#0b0e14] text-zinc-300">
      {/* faint top highlight */}
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-12 bg-gradient-to-b from-indigo-500/15 to-transparent blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Newsletter / CTA */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white">
              Subscribe to the
              <span className="ml-2 bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
                REGENX
              </span>{" "}
              newsletter
            </h3>
            <p className="mt-3 max-w-md text-sm text-zinc-400">
              Latest news, announcements and updates direct to your inbox
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {/* Optional email input (hidden by default to match screenshot) */}
              {/* <input type="email" placeholder="you@example.com" className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400/60"/> */}
              <a
                href="#"
                className="inline-flex w-fit items-center justify-center rounded-full bg-blue-400 px-5 py-2.5 text-sm font-medium text-gray-900 shadow-lg shadow-blue-400/20 transition hover:brightness-95"
              >
                Subscribe now
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <FooterColumn
            title="Getting Started"
            links={["Introduction", "Documentation", "Usage", "Global", "API"]}
          />
          <FooterColumn
            title="Platform"
            links={[
              "Plans & Pricing",
              "Personal Manager",
              "AI Business Writer",
              "AI Data Processing",
            ]}
          />
          <FooterColumn
            title="Company"
            links={["About us", "Work With us", "Our Blog", "Press"]}
          />
          <FooterColumn
            title="Legal"
            links={[
              "Terms of Service",
              "Privacy Policy",
              "Cookies Policy",
              "Data Processing",
            ]}
          />
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-zinc-400">
            ©2025 REGENX — All rights reserved
          </p>

          <nav className="flex items-center gap-6 text-xs">
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Social href="#" label="Facebook">
              <Facebook className="h-4 w-4" />
            </Social>
            <Social href="#" label="Twitter">
              <Twitter className="h-4 w-4" />
            </Social>
            <Social href="#" label="Instagram">
              <Instagram className="h-4 w-4" />
            </Social>
            <Social href="#" label="Dribbble">
              <Dribbble className="h-4 w-4" />
            </Social>
          </div>
        </div>
      </div>
    </footer>
  );
}

// component helpers
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white/90">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((label) => (
          <li key={label}>
            <Link href="#" className="text-zinc-400 transition hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: React.PropsWithChildren<{ href: string; label: string }>) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  );
}
