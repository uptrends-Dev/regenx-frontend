import React from "react";

type Props = {
  backgroundUrl?: string;
  onExploreClick?: () => void;
  onInvestClick?: () => void;
};

export default function Hero({
  backgroundUrl =
    "/images/p2.jpg", // DNA-looking abstract
  onExploreClick,
  onInvestClick,
}: Props) {
  return (
    <section
      aria-label="RegenX hero"
      className="relative isolate w-full h-[95vh] overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />

      {/* Gradient & vignette overlays for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_70%_20%,rgba(99,102,241,0.28),transparent)]" />

      {/* Content container */}
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center md:px-6">
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Advancing Regenerative Medicine & Wellness in the Region
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-200 sm:text-lg">
          Unified. Scalable. Visionary.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#treatments"
            onClick={onExploreClick}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Explore Treatments
          </a>
          <a
            href="#invest"
            onClick={onInvestClick}
            className="inline-flex items-center justify-center rounded-full border border-blue bg-emerald-300/10 px-6 py-3 text-sm font-semibold text-blue-200 backdrop-blur-sm transition hover:bg-blue-300/20 focus:outline-none focus:ring-2 focus:ring-blue-300/50"
          >
            Invest in RegenX
          </a>
        </div>

        {/* Optional tiny caption */}
        <p className="mt-6 text-sm text-lightGray">
          Pioneering therapies, ethical science, and measurable outcomes.
        </p>
      </div>

    </section>
  );
}
