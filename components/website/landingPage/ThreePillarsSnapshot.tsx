import React from "react";
import { Cpu, HeartPulse, Microscope } from "lucide-react";

function PillarCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl bg-darkGray p-6 text-center
        shadow-lg ring-1 ring-white/5 transition
        hover:-translate-y-1 hover:shadow-2xl hover:ring-emerald-400/30
        focus-within:-translate-y-1 focus-within:shadow-2xl focus-within:ring-emerald-400/30 duration-300
      "
      // tabIndex={0}
    >
      {/* gradient sweep on hover */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 transition-opacity
          before:absolute before:-left-1/2 before:top-0 before:h-full before:w-[200%]
          before:translate-x-[-30%] before:rotate-12 before:bg-gradient-to-r
          before:from-white/0 before:via-white/10 before:to-white/0
          group-hover:opacity-100
        "
      />
      {/* subtle border shimmer */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-emerald-400/20" />

      <div className="relative z-10 flex flex-col items-center">
        <div
          className="
            mb-3 rounded-xl bg-white/5 p-3 transition-transform
            group-hover:scale-110 group-hover:rotate-3
          "
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <ul className="mt-4 space-y-2 text-sm text-lightGray/90">
          {items.map((t) => (
            <li key={t} className="transition group-hover:text-white/90">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ThreePillarsSnapshot() {
  return (
    <section className="w-full bg-lightGray/20">
      <div className="py-12 px-6 max-w-7xl mx-auto text-center text-black">
        <h2 className="text-3xl font-semibold sm:text-4xl">Our Three Pillars</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base text-darkGray">
          At RegenX, our strength lies in three core pillars that drive innovation in healthcare.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-3">
          <PillarCard
            icon={<Cpu className="h-12 w-12 text-emerald-300" />}
            title="Advanced Labs"
            items={["BioCore", "LifeScan"]}
          />
          <PillarCard
            icon={<HeartPulse className="h-12 w-12 text-red-300" />}
            title="Synatria"
            items={["Recharge", "Recover"]}
          />
          <PillarCard
            icon={<Microscope className="h-12 w-12 text-blue-300" />}
            title="Innovate"
            items={["Community", "Research"]}
          />
        </div>
      </div>
    </section>
  );
}
