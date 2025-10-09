import React from "react";

// REGENX INNOVATE – hero/slide block in TSX + Tailwind
// Pass your images via props or replace the default placeholders below.

type InnovateSlideProps = {
  bgImage?: string; // background team/meeting photo
  micImage?: string; // foreground microphone PNG with transparent bg
  logoImage?: string; // small logo in top-right
};

export default function RegenxInnovateSlide({
  bgImage = "/images/p7.jpg",
  micImage = "/images/p6.jpg",
  logoImage,
}: InnovateSlideProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background doctors image, washed out */}
      <div
        className="absolute inset-0 -z-10 bg-slate-200/50 [mask-image:linear-gradient(to_right,black,black,transparent)]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) opacity(0.25)",
        }}
      />

      {/* Foreground mic image on the right */}
      <div className="  pointer-events-none absolute inset-y-0 right-0 -z-0 hidden w-[46%] items-end justify-end lg:flex">
        <img
          src={micImage}
          alt="Podcast microphone"
          className="h-full w-auto object-contain opacity-90 "
        />
      </div>

      {/* Optional logo */}
      {logoImage && (
        <img
          src={logoImage}
          alt="Logo"
          className="absolute right-6 top-6 h-8 w-auto opacity-80"
        />
      )}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-16">
        {/* Title */}
        <div className="z-10 lg:col-span-7 xl:col-span-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-sky-400 sm:text-4xl">
            REGENX INNOVATE
            <span className="ml-3 align-middle text-base font-semibold tracking-normal text-slate-600">
              (COMMUNITY & NETWORK)
            </span>
          </h2>

          {/* Frosted panel */}
          <div className="mt-6 rounded-3xl bg-white/70 p-6 shadow-lg ring-1 ring-slate-200 backdrop-blur">
            <ul className="space-y-6">
              <li>
                <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Education:
                </h3>
                <p className="mt-2 max-w-prose text-slate-700">
                  Training, workshops, and academic collaborations.
                </p>
              </li>

              <li>
                <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Community:
                </h3>
                <p className="mt-2 max-w-prose text-slate-700">
                  Podcast, webinars, and case studies with global experts.
                </p>
              </li>

              <li>
                <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Goals:
                </h3>
                <p className="mt-2 max-w-prose text-slate-700">
                  Advance medical education, build networks, and position Egypt as a regional
                  leader in regenerative medicine.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Spacer for mic on large screens */}
        <div className="lg:col-span-5 xl:col-span-6" />
      </div>
    </section>
  );
}
