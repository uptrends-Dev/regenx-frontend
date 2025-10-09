import React from "react";
import { Check } from "lucide-react";

/**
 * ABC-style welcome section
 * Matches the reference: stacked images on the left, heading + paragraph + checklist on the right.
 * Tailwind only; swap images/text via props.
 */

type Props = {
  primaryImage?: string;
  secondaryImage?: string;
  heading?: string;
  intro?: string;
  bullets?: string[];
};

export default function MissionSection({
  primaryImage = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  secondaryImage = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  heading = "Welcome to REGENX  Hospital",
  intro = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti ratione, sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti ratione, sit, nostrum quod! Libero, deleniti praesentium. Quas, voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti ratione, sit adipisci nesciunt amet! Tempore reiciendis nam laboriosam inventore quae ratione et, nostrum quod! Libero, deleniti praesentium. Quas, voluptatibus. ",
  bullets = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti ratione, sit adipisci nesciunt amet! Tempore reiciendis nam laboriosam inventore quae ratione et, nostrum quod! Libero, deleniti praesentium. Quas, voluptatibus.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti ratione, sit adipisci nesciunt amet! Tempore reiciendis nam laboriosam ratione, sit adipisci nesciunt amet! Tempore reiciendis nam laboriosam .",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti ratione,ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti ratione sit adipisci nesciunt amet! Tempore reiciendis nam laboriosam inventore quae ratione et.",
  ],
}: Props) {
  return (
    <section className="w-full bg-white">
      
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 md:items-start lg:gap-16 place-items-center ">
        {/* Left: stacked images */}
        <div className="relative order-2 md:order-1">
          {/* back image */}
          <div className="relative left-16 top-[-12px] hidden w-[76%] overflow-hidden rounded-md shadow-xl ring-1 ring-black/10 lg:block">
            <img
              src={secondaryImage}
              alt="Hospital interior"
              className="h-full w-full object-cover"
            />
          </div>
          {/* front image */}
          <div className="relative z-10 w-[100%] lg:w-[78%] overflow-hidden rounded-md shadow-2xl ring-1 ring-black/100">
            <img
              src={primaryImage}
              alt="Hospital exterior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: heading + copy + checklist */}
        <div className="order-1 md:order-2">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-10 rounded bg-amber-500" />
            <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
              {heading}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-darkGray">{intro}</p>

          <ul className="mt-8 space-y-5">
            {bullets.map((line, i) => (
              <li key={i} className="flex max-w-xl items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-200">
                  <Check className="h-5 w-5 text-amber-600" />
                </span>
                <p className="text-zinc-700">{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
