'use client'
import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  backgroundUrl?: string;
  onExploreClick?: () => void;
  onInvestClick?: () => void;
};

export default function Hero({
  backgroundUrl = "/images/p7.jpg", // DNA-looking abstract
  onExploreClick,
  onInvestClick,
}: Props) {
  const { scrollY } = useScroll();
  const shouldReduce = useReducedMotion();

  // Parallax for background & vignette
  const bgY = useTransform(scrollY, [0, 400], ["0%", shouldReduce ? "0%" : "12%"]);
  const bgScale = useTransform(scrollY, [0, 400], [1.05, shouldReduce ? 1.05 : 1.12]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  } as const;

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  return (
    <section aria-label="RegenX hero" className="relative isolate h-[95vh] w-full overflow-hidden">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})`, y: bgY, scale: bgScale }}
        aria-hidden
      />

      {/* Gradient & vignette overlays for legibility */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_70%_20%,rgba(99,102,241,0.28),transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        aria-hidden
      />

      {/* Content container */}
      <motion.div
        className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center md:px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
          variants={fadeUp}
        >
          Advancing Regenerative Medicine & Wellness in the Region
        </motion.h1>
        <motion.p className="mt-4 max-w-2xl text-base text-zinc-200 sm:text-lg" variants={fadeUp}>
          Unified. Scalable. Visionary.
        </motion.p>

        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
          <motion.a
            href="#treatments"
            onClick={onExploreClick}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/60"
            whileHover={shouldReduce ? undefined : { y: -2 }}
            whileTap={shouldReduce ? undefined : { y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <span className="relative">
              Explore Treatments
              
              <motion.span
                aria-hidden
                // className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)]"
                initial={false}
                whileHover={shouldReduce ? undefined : { translateX: "100%" }}
                transition={{ duration: 0.7 }}
              />
            </span>
          </motion.a>

          <motion.a
            href="#invest"
            onClick={onInvestClick}
            className="inline-flex items-center justify-center rounded-full border border-blue bg-emerald-300/10 px-6 py-3 text-sm font-semibold text-blue-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300/50"
            whileHover={shouldReduce ? undefined : { y: -2 }}
            whileTap={shouldReduce ? undefined : { y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            Invest in RegenX
          </motion.a>
        </motion.div>

        {/* Optional tiny caption */}
        <motion.p className="mt-6 text-sm text-lightGray" variants={fadeUp}>
          Pioneering therapies, ethical science, and measurable outcomes.
        </motion.p>
      </motion.div>

      {/* Decorative floating particles (subtle) */}
      {!shouldReduce && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-indigo-300/50"
              style={{ left: `${(i * 13) % 100}%`, top: `${(i * 23) % 100}%` }}
              animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
