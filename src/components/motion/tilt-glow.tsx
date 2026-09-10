"use client";

import { motion, type MotionValue } from "motion/react";

export function TiltGlow({
  background,
  visible,
}: {
  background: MotionValue<string>;
  visible: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
      style={{ background }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
    />
  );
}
