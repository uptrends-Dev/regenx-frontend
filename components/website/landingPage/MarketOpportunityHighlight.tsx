'use client'
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function StatCard({
  heading,
  sub,
}: {
  heading: React.ReactNode;
  sub: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-darkGray p-6 text-center ring-1 ring-white/10 shadow-lg transition  focus-within:-translate-y-1"
      initial={ { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      {/* sweep highlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 before:absolute before:-left-1/2 before:top-0 before:h-full before:w-[200%] before:-translate-x-1/3 before:rotate-12 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
        whileHover={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {/* soft inner border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-emerald-400/20" />
      <div className="relative z-10">
        <h3 className="text-4xl font-semibold text-blue">{heading}</h3>
        <p className="mt-2 text-sm text-zinc-300">{sub}</p>
      </div>
    </motion.div>
  );
}

export default function MarketOpportunityHighlight() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  const gridV = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
    },
  } as const;

  const itemV = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  return (
    <section className="w-full market">
      <motion.div
        className="py-16 px-6 max-w-7xl mx-auto text-center text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-900">Market Opportunity Highlight</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base text-darkGray">
          The global market for regenerative medicine is expanding rapidly, with an increase from $36B to $55B.
          Egypt is currently experiencing the fastest growth in the sector.
        </p>

        {/* Infographic block */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-8 rounded-2xl bg-blue p-6 shadow-lg sm:grid-cols-2"
          variants={gridV}
        >
          <motion.div variants={itemV}>
            <StatCard
              heading={
                <span className="inline-flex items-center gap-2">
                  <span className="text-blue">$36B</span>
                  <span className="inline-flex items-center">
                    {/* animated arrow */}
                    <motion.span
                      aria-hidden
                      animate={reduce ? undefined : { x: [0, 4, 0], opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-flex"
                    >
                      <ArrowRight className="h-6 w-6 text-blue" />
                    </motion.span>
                  </span>
                  <span className="text-blue">$55B</span>
                </span>
              }
              sub="Global market growth (Regenerative Medicine)"
            />
          </motion.div>

          <motion.div variants={itemV}>
            <StatCard heading="Egypt" sub="Fastest growth in the market" />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div className="mt-8" initial={reduce ? undefined : { opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <a
            href="#investor-insights"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-900 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-white/60 hover:bg-blue-200 hover:shadow-emerald-400/30"
          >
            See Investor Insights
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
