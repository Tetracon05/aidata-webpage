"use client";

import { useRef, useState, type MouseEvent } from "react";
import { useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

export function useTilt(range = 8) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [hovering, setHovering] = useState(false);

  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const springConfig = { stiffness: 260, damping: 24, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 100], [range, -range]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 100], [-range, range]), springConfig);
  const glowBackground = useTransform([px, py], (latest) => {
    const [lx, ly] = latest as number[];
    return `radial-gradient(280px circle at ${lx}% ${ly}%, rgba(240,160,32,0.18), transparent 70%)`;
  });

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width) * 100);
    py.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function onMouseEnter() {
    if (!reduced) setHovering(true);
  }

  function onMouseLeave() {
    setHovering(false);
    px.set(50);
    py.set(50);
  }

  return {
    ref,
    reduced,
    hovering,
    tiltStyle: reduced ? undefined : { rotateX, rotateY, transformPerspective: 1000 },
    glowBackground,
    handlers: { onMouseMove, onMouseEnter, onMouseLeave },
  };
}
