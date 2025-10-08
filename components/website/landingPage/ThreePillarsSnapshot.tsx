import React from "react";
import { Cpu, HeartPulse , Microscope } from "lucide-react";

export default function ThreePillarsSnapshot() {
  return (
    <section className="py-12 px-6 bg-[#0b0e14] text-center text-white">
      <h2 className="text-3xl font-semibold sm:text-4xl">
        Our Three Pillars
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-base text-zinc-400">
        At RegenX, our strength lies in three core pillars that drive innovation in healthcare.
      </p>

      {/* Cards for the three pillars */}
      <div className="mt-10 grid gap-12 sm:grid-cols-1 md:grid-cols-3">
        {/* Advanced Labs */}
        <div className="flex flex-col items-center bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <Cpu className="h-12 w-12 text-emerald-300" />
          <h3 className="text-xl font-semibold text-white mt-4">Advanced Labs</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>BioCore</li>
            <li>LifeScan</li>
          </ul>
        </div>

        {/* Synatria */}
        <div className="flex flex-col items-center bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <HeartPulse className="h-12 w-12 text-red-300" />
          <h3 className="text-xl font-semibold text-white mt-4">Synatria</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>Recharge</li>
            <li>Recover</li>
          </ul>
        </div>

        {/* Innovate */}
        <div className="flex flex-col items-center bg-zinc-800 rounded-2xl p-6 shadow-lg">
          <Microscope className="h-12 w-12 text-blue-300" />
          <h3 className="text-xl font-semibold text-white mt-4">Innovate</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>Community</li>
            <li>Research</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
