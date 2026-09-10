"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function StaggerGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? (
          <motion.div key={child.key} variants={staggerItem} className="h-full">
            {child}
          </motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
