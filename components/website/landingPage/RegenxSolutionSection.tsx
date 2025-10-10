import React from "react";

// Regenx Solution Section — TSX + TailwindCSS
// Matches the layout in the provided slide: left washed image, right content with title and bullets.
// Plug into any page; Tailwind required.

export type SolutionItem = { text: string };

type RegenxSolutionProps = {
  bgImage?: string; // large grayscale photo on the left
  logoImage?: string; // small logo on the top-right
  items?: SolutionItem[]; // bullet list
};

export default function RegenxSolutionSection({
  bgImage = "/images/p11.jpg",
  logoImage,
  items = [
    { text: "One-stop destination for advanced therapies." },
    { text: "Integrated wellness & recovery journeys." },
    { text: "White-label model leveraging trusted labs." },
    { text: "Medical tourism integration." },
    { text: "RegenX Innovate: education & research." },
    { text: "Patient awareness via podcasts, workshops, digital." },
  ],
}: RegenxSolutionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Left photo (fills left half on large screens; full-width banner on small) */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-[42vh] w-full bg-slate-200/50 sm:h-[48vh] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 [mask-image:linear-gradient(to_right,black,black,transparent)]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) opacity(0.25)",
          }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-16">
        <div className="lg:col-span-6" /> {/* spacer for the image on large screens */}

        <div className="lg:col-span-6">
          {/* Logo top-right (absolute within content column on lg) */}
          {logoImage && (
            <img
              src={logoImage}
              alt="Logo"
              className="absolute right-6 top-6 h-8 w-auto opacity-80"
            />
          )}

          {/* Title */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            <span className="text-sky-400">THE</span>{" "}
            <span className="font-black text-slate-800">REGENX</span>{" "}
            <span className="text-sky-400">SOLUTION</span>
          </h2>

          {/* Bullets */}
          <ul className="mt-6 space-y-4 text-slate-700">
            {items.map((it, idx) => (
              <li key={idx} className="flex items-start gap-3 leading-relaxed">
                <span className="mt-2 inline-block h-2.5 w-2.5 flex-none rounded-full bg-sky-400/90" />
                <span>{it.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
