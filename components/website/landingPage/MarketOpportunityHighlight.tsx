import React from "react";
import { ArrowRight } from "lucide-react";

export default function MarketOpportunityHighlight() {
  return (
    <section className="py-16 px-6 bg-[#0b0e14] text-center text-white">
      <h2 className="text-3xl font-semibold sm:text-4xl">
        Market Opportunity Highlight
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-base text-zinc-400">
        The global market for regenerative medicine is expanding rapidly, with an increase from $36B to $55B.
        Egypt is currently experiencing the fastest growth in the sector.
      </p>

      {/* Infographic block */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-zinc-800 p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-semibold text-emerald-400">
            $36B → $55B
          </h3>
          <p className="mt-2 text-sm text-zinc-300">
            Global market growth (Regenerative Medicine)
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-semibold text-emerald-300">
            Egypt
          </h3>
          <p className="mt-2 text-sm text-zinc-300">
            Fastest growth in the market
          </p>
        </div>
      </div>

      {/* CTA: See Investor Insights */}
      <div className="mt-8">
        <a
          href="#investor-insights"
          className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          See Investor Insights
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
