// import React from "react";

// export default function TestimonialsOrPartners() {
//   return (
//     <section className="py-16 px-6 bg-[#0b0e14] text-center text-white">
//       <h2 className="text-3xl font-semibold sm:text-4xl">
//         Testimonials & Early Partners
//       </h2>
//       <p className="mt-4 max-w-3xl mx-auto text-base text-zinc-400">
//         Hear from our partners and supporters as we advance regenerative medicine and wellness.
//       </p>

//       {/* Testimonials / Quotes Section */}
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {/* Placeholder for Testimonials */}
//         <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
//           <p className="text-sm text-zinc-400 italic">
//             RegenX is at the forefront of innovation, bringing groundbreaking therapies to the market.
//           </p>
//           <h4 className="mt-4 text-lg font-semibold text-white">
//             Dr. Alex Reyes
//           </h4>
//           <p className="text-sm text-zinc-400">Chief of Regenerative Medicine</p>
//         </div>

//         <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
//           <p className="text-sm text-zinc-400 italic">
//             Our partnership with RegenX has enabled us to explore new opportunities in the healthcare space.
//           </p>
//           <h4 className="mt-4 text-lg font-semibold text-white">
//             John Doe
//           </h4>
//           <p className="text-sm text-zinc-400">CEO, Synatria</p>
//         </div>

//         <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
//           <p className="text-sm text-zinc-400 italic">
//             The future of wellness is bright with RegenX at the helm of innovation.
//           </p>
//           <h4 className="mt-4 text-lg font-semibold text-white">
//             Sarah Lee
//           </h4>
//           <p className="text-sm text-zinc-400">Founder, BioCore</p>
//         </div>
//       </div>

//       {/* Early Partner Logos Section */}
//       <div className="mt-16 flex flex-wrap justify-center gap-8">
//         {/* Placeholder for logos */}
//         <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
//         <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
//         <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
//         <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
//       </div>
//     </section>
//   );
// }
"use client";

import * as React from "react";
import { motion, PanInfo } from "framer-motion";

type Position = "front" | "middle" | "back";

export interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: Position;
  id: number | string;
  author: string;
}

function getClientX(
  event: MouseEvent | TouchEvent | PointerEvent
): number {
  if ("clientX" in event) return event.clientX;
  if ("changedTouches" in event && event.changedTouches.length > 0) {
    return event.changedTouches[0].clientX;
  }
  return 0;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
}) => {
  const dragRef = React.useRef<number>(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      animate={{
        rotate:
          position === "front"
            ? "-6deg"
            : position === "middle"
            ? "0deg"
            : "6deg",
        x:
          position === "front"
            ? "0%"
            : position === "middle"
            ? "33%"
            : "66%",
      }}
      drag
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(
        e: MouseEvent | TouchEvent | PointerEvent,
        _info: PanInfo
      ) => {
        dragRef.current = getClientX(e);
      }}
      onDragEnd={(
        e: MouseEvent | TouchEvent | PointerEvent,
        _info: PanInfo
      ) => {
        if (dragRef.current - getClientX(e) > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};
