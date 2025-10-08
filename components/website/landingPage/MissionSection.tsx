import React from "react";
import { Lightbulb, Globe, Heart } from "lucide-react";

export default function MissionSection() {
  type card = {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
   const cards: card[] = [
    {
      title: "Mission",
      description:
        "Empowering people with transformative therapies for a brighter tomorrow.",
      icon: <Lightbulb className="h-12 w-12 text-emerald-300" />,
    },
    {
      title: "Vision",
      description:
        "A global leader in regenerative healthcare, revolutionizing wellness for all.",
      icon: <Globe className="h-12 w-12 text-blue-300" />,
    },
    {
      title: "Tagline",
      description: "Revitalizing health, one innovation at a time.",
      icon: <Heart className="h-12 w-12 text-red-300" />,
    },
  ];

  function cardsDisplay() {
    return cards.map((card, index) => (
      <div key={index} className="flex flex-col items-center gap-4">
        {card.icon}
        <h3 className="text-xl font-semibold text-white">{card.title}</h3>
        <p className="text-sm text-zinc-400">{card.description}</p>
      </div>
    ));
  }
  return (
    <section className="bg-[#0b0e14] py-12 px-6 text-center text-white">
      <h2 className="text-2xl font-semibold sm:text-3xl">
        Our Mission, Vision & Tagline
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-base text-zinc-400">
        At RegenX, we are committed to advancing regenerative medicine and
        wellness through innovative therapies, empowering a healthier future
        with cutting-edge science and ethical practices.
      </p>

      {/* Icons Section */}
      <div className="mt-10 grid gap-12 sm:grid-cols-3">
        {/* Mission */}
        {cardsDisplay()}
      </div>
    </section>
  );
}
