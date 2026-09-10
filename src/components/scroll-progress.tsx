"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-gold-400 via-gold-500 to-sky-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
