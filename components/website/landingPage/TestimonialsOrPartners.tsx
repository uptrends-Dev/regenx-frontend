import React from "react";

export default function TestimonialsOrPartners() {
  return (
    <section className="py-16 px-6 bg-[#0b0e14] text-center text-white">
      <h2 className="text-3xl font-semibold sm:text-4xl">
        Testimonials & Early Partners
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-base text-zinc-400">
        Hear from our partners and supporters as we advance regenerative medicine and wellness.
      </p>

      {/* Testimonials / Quotes Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Placeholder for Testimonials */}
        <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-zinc-400 italic">
            RegenX is at the forefront of innovation, bringing groundbreaking therapies to the market.
          </p>
          <h4 className="mt-4 text-lg font-semibold text-white">
            Dr. Alex Reyes
          </h4>
          <p className="text-sm text-zinc-400">Chief of Regenerative Medicine</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-zinc-400 italic">
            Our partnership with RegenX has enabled us to explore new opportunities in the healthcare space.
          </p>
          <h4 className="mt-4 text-lg font-semibold text-white">
            John Doe
          </h4>
          <p className="text-sm text-zinc-400">CEO, Synatria</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <p className="text-sm text-zinc-400 italic">
            The future of wellness is bright with RegenX at the helm of innovation.
          </p>
          <h4 className="mt-4 text-lg font-semibold text-white">
            Sarah Lee
          </h4>
          <p className="text-sm text-zinc-400">Founder, BioCore</p>
        </div>
      </div>

      {/* Early Partner Logos Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {/* Placeholder for logos */}
        <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
        <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
        <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
        <div className="h-16 w-16 bg-zinc-700 rounded-lg" />
      </div>
    </section>
  );
}
