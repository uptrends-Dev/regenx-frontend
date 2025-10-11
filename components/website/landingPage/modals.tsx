"use client";
import React from "react";
import { motion } from "framer-motion";
// Our Model section — TSX + TailwindCSS (Hover-enhanced)
// Drop this component anywhere in your app. Tailwind required.
// Uses "group" and transitions only (no JS libs) for silky hover effects.

const NumberBadge: React.FC<{ index: number }> = ({ index }) => (
  <div className="relative flex items-center gap-3">
    {/* Badge */}
    <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-sky-100 shadow-sm ring-1 ring-sky-200 transition-all duration-300 group-hover/card:shadow-xl group-hover/card:ring-sky-300">
      {/* Shine sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full rounded-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover/card:translate-x-full group-hover/card:opacity-70"
      />
      <span className="text-4xl font-extrabold leading-none text-sky-600 transition-transform duration-300 group-hover/card:scale-110">
        {index}.
      </span>
    </div>

    {/* Decorative dashes */}
    <div className="flex items-center gap-1">
      <span className="h-1 w-8 rounded bg-sky-400/80 transition-all duration-300 group-hover/card:w-10" />
      <span className="h-1 w-5 rounded bg-sky-400/60 transition-all duration-300 group-hover/card:w-7" />
    </div>
  </div>
);

const PillarCard: React.FC<{
  index: number;
  title: string;
  items: { label: string; text: string }[];
}> = ({ index, title, items }) => (
  <motion.div className="group/card relative rounded-3xl bg-white p-8  py-12  shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-sky-300/60">
    {/* Subtle gradient frame on hover */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(56,189,248,0)_35%)] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
    />

    {/* Top-right accent */}
    <span
      aria-hidden
      className="absolute -right-2 -top-2 h-10 w-10 rounded-full bg-sky-200/40 blur-xl transition-opacity duration-300 group-hover/card:opacity-70"
    />

    <NumberBadge index={index} />

    <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
      <span className="bg-gradient-to-r from-slate-900 to-sky-600 bg-clip-text text-transparent transition-colors duration-300 group-hover/card:from-sky-900 group-hover/card:to-sky-600">
        {title}
      </span>
    </h3>

    <div className="mt-6 space-y-6 text-slate-700">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-xl p-2 transition-all duration-200 hover:translate-x-1 hover:bg-sky-50/60"
        >
          <p className="font-semibold uppercase tracking-wide text-darkGray transition-colors duration-200 group-hover/card:text-slate-500">
            {it.label}:
          </p>
          <p className="mt-1 leading-relaxed">{it.text}</p>
        </div>
      ))}
    </div>

    {/* Bottom glow on hover */}
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-6 bottom-3 h-1 rounded-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover/card:opacity-100"
    />
  </motion.div>
);

export default function OurModelSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50/40 py-16">
      {/* Soft background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-full text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            OUR MODEL
          </h2>
          <p className="mt-2 text-base font-medium text-slate-600">
            3 Synergistic Pillars with Sub‑Brands
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <PillarCard
              index={1}
              title="REGENX ADVANCED LABS"
              items={[
                {
                  label: "BIOCORE",
                  text: "disease treatment journeys (PRP, stem cells, exosomes).",
                },
                {
                  label: "LIFESCAN",
                  text: "lifestyle & rehabilitation (diagnostics, IV drips, preventive care).",
                },
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <PillarCard
              index={2}
              title="SYNATRIA"
              items={[
                {
                  label: "RECHARGE",
                  text: "Lifestyle optimization (nutrition, diagnostics, prevention).",
                },
                {
                  label: "RECOVER",
                  text: "Structured recovery (infertility, diabetes, ortho, chronic).",
                },
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <PillarCard
              index={3}
              title="REGENX INNOVATE"
              items={[
                {
                  label: "COMMUNITY",
                  text: "podcasts, public awareness, networking.",
                },
                {
                  label: "RESEARCH & EDUCATION",
                  text: "doctor training, workshops, academic collaborations.",
                },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
