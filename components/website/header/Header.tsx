"use client";
import React, { useState } from "react";
import { Languages } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Header() {
  const navBase =
    "relative px-4 py-2 text-sm font-medium text-lightGray transition hover:text-white";

  const pillBase =
    "hidden lg:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-60";

  const shouldReduce = useReducedMotion();

  // Variants
  const headerV = {
    hidden: { y: -12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  const navV = {
    show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  } as const;

  const navItemV = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  return (
    <motion.header
      variants={headerV}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b0e14]/95 backdrop-blur-xl"
    >
      {/* faint starry gradient highlight on the right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-indigo-500/15 via-purple-500/10 to-transparent blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Brand (optional) */}
        <motion.div className="flex items-center gap-3" variants={navItemV}>
          <motion.div whileHover={shouldReduce ? undefined : { rotate: 2, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <img src="/images/logo222.png" alt="REGENX" className="h-8 w-auto" />
          </motion.div>
          <span className=" text-sm font-semibold tracking-wide text-blue sm:block">REGENX</span>
        </motion.div>

        {/* Center: Nav */}
        <motion.nav className="hidden items-center gap-2 lg:flex" variants={navV} initial="hidden" animate="show">
          {[
            { href: "#", label: "About" },
            { href: "#", label: "Our Pillars" },
            { href: "#", label: "Treatments" },
            { href: "#", label: "Community" },
            { href: "#", label: "Investor Relations" },
          ].map((item) => (
            <motion.div key={item.label} variants={navItemV}>
              <AnimatedNavLink href={item.href} className={navBase}>
                {item.label}
              </AnimatedNavLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right: utilities & CTAs */}
        <motion.div className="flex items-center gap-2" variants={navV} initial="hidden" animate="show">
          <motion.button
            aria-label="Language"
            className=" rounded-full p-2 text-zinc-300 hover:bg-white/5 hover:text-white md:inline-flex"
            whileTap={shouldReduce ? undefined : { scale: 0.95 }}
          >
            <Languages className="h-5 w-5" />
          </motion.button>

          <motion.div variants={navItemV}>
            <Link
              href="#"
              className={`${pillBase}   border border-blue/50 bg-blue/10 text-blue hover:border-indigo-400 hover:bg-blue-500/20 focus:ring-blue-400/50`}
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div variants={navItemV}>
            <Link href="#" className={`${pillBase}  bg-white text-zinc-900 hover:bg-zinc-100 focus:ring-white/60`}>
              Get Started
            </Link>
          </motion.div>

          {/* Mobile menu button (optional) */}
          <MobileMenu />
        </motion.div>
      </div>
    </motion.header>
  );
}

function AnimatedNavLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div whileHover={shouldReduce ? undefined : { y: -1 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Link href={href} className={`${className} inline-block`}>
        <span className="relative">
          {children}
          {/* underline */}
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400"
            initial={false}
            whileHover={shouldReduce ? undefined : { width: "100%" }}
            transition={{ duration: 0.25 }}
          />
        </span>
      </Link>
    </motion.div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <div className="lg:hidden">
      <button
        aria-label="Toggle Menu"
        onClick={() => setOpen((v) => !v)}
        className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
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
      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 top-[64px] z-50 mx-4 rounded-2xl border border-white/10 bg-zinc-900/95 p-3 shadow-2xl ring-1 ring-black/5 backdrop-blur-md"
          >
            <motion.div className="grid gap-1" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
              {[
                "About",
                "Our Pillars",
                "Treatments",
                "Community",
                "Investor Relations",
              ].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
            <div className="mt-3 flex gap-2">
              <motion.a
                href="#"
                whileTap={shouldReduce ? undefined : { scale: 0.98 }}
                className="flex-1 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2 text-center text-sm font-medium text-indigo-200"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="#"
                whileTap={shouldReduce ? undefined : { scale: 0.98 }}
                className="flex-1 rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-zinc-900"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
