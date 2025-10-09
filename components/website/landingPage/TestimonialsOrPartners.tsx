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
       {/* اقتباس صحيح بدون أخطاء ESLint */}
       <span className="text-center text-lg italic text-slate-400">
        {`“${testimonial}”`}
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};