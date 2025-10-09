"use client";
import React, { JSX, useState } from "react";
import { TestimonialCard } from "./TestimonialsOrPartners"; // ← fix import path

type Position = "front" | "middle" | "back";

type Testimonial = {
  id: number;
  testimonial: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    testimonial:
      "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
    author: "Jenn F. - Marketing Director @ Square",
  },
  {
    id: 2,
    testimonial:
      "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.",
    author: "Adrian Y. - Product Marketing @ Meta",
  },
  {
    id: 3,
    testimonial:
      "Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.",
    author: "Devin R. - Growth Marketing Lead @ OpenAI",
  },
];

function rotateRight<T>(arr: T[]): T[] {
  if (arr.length === 0) return arr;
  const last = arr[arr.length - 1]!;
  return [last, ...arr.slice(0, -1)];
}
function TestimonialsOrPartners(): JSX.Element {
  const [positions, setPositions] = useState<Position[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleShuffle = () => {
    setPositions((prev) => rotateRight(prev));
  };

  return (
    <div className="grid min-h-screen w-full place-content-center overflow-hidden bg-slate-900 px-8 py-24 text-slate-50">
      {/* Container sized to the card; the cards internally shift via framer-motion */}
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={t.id}
            id={t.id}
            testimonial={t.testimonial}
            author={t.author}
            handleShuffle={handleShuffle}
            position={positions[index % positions.length]} // safe cyclic mapping
          />
        ))}
      </div>
    </div>
  );
}

export { TestimonialsOrPartners };
