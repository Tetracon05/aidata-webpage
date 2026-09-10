"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useTilt } from "@/lib/use-tilt";
import { TiltGlow } from "@/components/motion/tilt-glow";

export function TiltCard({
  children,
  className = "",
  range = 8,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const { ref, reduced, hovering, tiltStyle, glowBackground, handlers } = useTilt(range);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      {...handlers}
      style={tiltStyle}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative ${className}`}
    >
      {!reduced && <TiltGlow background={glowBackground} visible={hovering} />}
      {children}
    </motion.div>
  );
}
