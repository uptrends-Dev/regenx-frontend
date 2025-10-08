"use client";
import React from "react";
import { Languages } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const navBase =
    "relative px-4 py-2 text-sm font-medium text-zinc-300 transition hover:text-white";

  const pillBase =
    "hidden lg:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-60";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b0e14] backdrop-blur-xl">
      {/* faint starry gradient highlight on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-indigo-500/15 via-purple-500/10 to-transparent blur-2xl" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Brand (optional) */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg shadow-indigo-900/30" />
          <span className="hidden text-sm font-semibold tracking-wide text-zinc-200 sm:block">
            REGENX
          </span>
        </div>

        {/* Center: Nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {/* Features (dropdown) */}
          {/* <div className="group relative">
            <button className={`${navBase} flex items-center gap-1`}>
              Features <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full z-40 mt-2 w-56 translate-y-2 rounded-2xl border border-white/10 bg-zinc-900/95 p-2 opacity-0 shadow-2xl ring-1 ring-black/5 backdrop-blur-md transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {[
                { label: "AI Automations", href: "#" },
                { label: "Analytics", href: "#" },
                { label: "Integrations", href: "#" },
                { label: "Security", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div> */}

          {/* Features */}
          <Link href="#" className={navBase}>
            About
          </Link>
          {/* Pricing */}
          <Link href="#" className={navBase}>
            Our Pillars
          </Link>

          {/* Treatments */}
          <Link href="#" className={navBase}>
            Treatments
          </Link>
          {/* Community */}
          <Link href="#" className={navBase}>
            Community
          </Link>
          {/* Investor Relations */}
          <Link href="#" className={navBase}>
            Investor Relations
          </Link>
        </nav>

        {/* Right: utilities & CTAs */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Language"
            className=" rounded-full p-2 text-zinc-300 hover:bg-white/5 hover:text-white md:inline-flex"
          >
            <Languages className="h-5 w-5" />
          </button>

          {/* Contact Us (outline glowing) */}
          <Link
            href="#"
            className={`${pillBase}   border border-indigo-400/40 bg-indigo-500/10 text-indigo-200 hover:border-indigo-400 hover:bg-indigo-500/20 focus:ring-indigo-400/50`}
          >
            Contact Us
          </Link>

          {/* Get Started (white pill) */}
          <Link
            href="#"
            className={`${pillBase}  bg-white text-zinc-900 hover:bg-zinc-100 focus:ring-white/60`}
          >
            Get Started
          </Link>

          {/* Mobile menu button (optional) */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Toggle Menu"
        onClick={() => setOpen((v) => !v)}
        className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"
      >
        <svg
          //   xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          {open ? (
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          ) : (
            <path d="M4 6.75A.75.75 0 014.75 6h14.5a.75.75 0 010 1.5H4.75A.75.75 0 014 6.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75z" />
          )}
        </svg>
      </button>

      {/* Sheet */}
      {open && (
        <div className="absolute left-0 right-0 top-[64px] z-50 mx-4 rounded-2xl border border-white/10 bg-zinc-900/95 p-3 shadow-2xl ring-1 ring-black/5 backdrop-blur-md">
          <div className="grid gap-1">
            {/* <DropdownGroup
              title="Features"
              items={[
                "AI Automations",
                "Analytics",
                "Integrations",
                "Security",
              ]}
            /> */}
            <Link
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              href="#"
            >
              About
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              href="#"
            >
              Our Pillars
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              href="#"
            >
              Treatments
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              href="#"
            >
              Community
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              href="#"
            >
              Investor Relations
            </Link>
          </div>
          <div className="mt-3 flex gap-2">
            <a
              href="#"
              className="flex-1 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2 text-center text-sm font-medium text-indigo-200"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="flex-1 rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-zinc-900"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// function DropdownGroup({ title, items }: { title: string; items: string[] }) {
//   return (
//     <details className="group rounded-xl p-1 open:bg-white/5">
//       <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-2 text-sm text-zinc-300 hover:text-white">
//         <span>{title}</span>
//         <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
//       </summary>
//       <div className="mt-1 grid gap-1 p-1">
//         {items.map((x) => (
//           <a
//             key={x}
//             href="#"
//             className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
//           >
//             {x}
//           </a>
//         ))}
//       </div>
//     </details>
//   );
// }
