import React from "react";
import { ArrowRight } from "lucide-react";

function StatCard({
  heading,
  sub,
}: {
  heading: React.ReactNode;
  sub: string;
}) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl bg-darkGray p-6 text-center
        ring-1 ring-white/10 shadow-lg transition
        hover:-translate-y-1 hover:shadow-2xl hover:ring-emerald-400/30
        focus-within:-translate-y-1
      "
      tabIndex={0}
    >
      {/* sweep highlight */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          before:absolute before:-left-1/2 before:top-0 before:h-full before:w-[200%]
          before:-translate-x-1/3 before:rotate-12 before:bg-gradient-to-r
          before:from-transparent before:via-white/10 before:to-transparent
        "
      />
      {/* soft inner border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-emerald-400/20" />
      <div className="relative z-10">
        <h3 className="text-4xl font-semibold text-emerald-300">{heading}</h3>
        <p className="mt-2 text-sm text-zinc-300">{sub}</p>
      </div>
    </div>
  );
}

export default function MarketOpportunityHighlight() {
  return (
    <section className="w-full market">
      <div
        className="
          py-16 px-6 max-w-7xl mx-auto text-center text-white
          opacity-0 translate-y-4 motion-safe:animate-[fadeIn_.6s_ease-out_forwards]
        "
      >
        <h2 className="text-3xl font-semibold sm:text-4xl">Market Opportunity Highlight</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base text-zinc-100">
          The global market for regenerative medicine is expanding rapidly, with an increase from $36B to $55B.
          Egypt is currently experiencing the fastest growth in the sector.
        </p>

        {/* Infographic block */}
        <div
          className="
            mt-10 grid grid-cols-1 gap-8 rounded-2xl bg-darkGray p-6 shadow-lg sm:grid-cols-2
            motion-safe:animate-[rise_.6s_.1s_ease-out_forwards] opacity-0 translate-y-2
          "
        >
          <StatCard
            heading={
              <span className="inline-flex items-center gap-2">
                <span className="text-emerald-400">$36B</span>
                <span className="inline-flex items-center">
                  {/* animated arrow */}
                  <ArrowRight className="h-6 w-6 text-emerald-300 motion-safe:animate-[arrow_.9s_ease-in-out_infinite]" />
                </span>
                <span className="text-emerald-400">$55B</span>
              </span>
            }
            sub="Global market growth (Regenerative Medicine)"
          />

          <StatCard heading="Egypt" sub="Fastest growth in the market" />
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#investor-insights"
            className="
              group inline-flex items-center justify-center gap-2 rounded-full
              bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg
              transition focus:outline-none focus:ring-2 focus:ring-white/60
              hover:bg-emerald-300 hover:shadow-emerald-400/30
            "
          >
            See Investor Insights
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Keyframes (scoped) */}
      <style>{`
        @keyframes fadeIn { to { opacity: 1; transform: none; } }
        @keyframes rise { to { opacity: 1; transform: none; } }
        @keyframes arrow {
          0%,100% { transform: translateX(0); opacity: .9; }
          50% { transform: translateX(4px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
