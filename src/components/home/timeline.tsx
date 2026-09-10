"use client";

import { motion, useReducedMotion } from "motion/react";
import { staggerContainer, staggerItem, easeOut } from "@/lib/motion";
import type { milestones as milestonesType } from "@/lib/data/site";

export function Timeline({ milestones }: { milestones: typeof milestonesType }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative pl-8">
      <motion.span
        className="absolute left-0 top-1 w-px origin-top bg-navy-700"
        style={{ height: "calc(100% - 0.25rem)" }}
        initial={reduced ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.1, ease: easeOut }}
        aria-hidden="true"
      />
      <motion.ol
        className="flex flex-col gap-10"
        variants={staggerContainer}
        initial={reduced ? undefined : "hidden"}
        whileInView={reduced ? undefined : "show"}
        viewport={{ once: true, margin: "-10% 0px" }}
      >
        {milestones.map((m) => (
          <motion.li key={m.title} variants={staggerItem} className="relative">
            <span
              className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 ring-4 ring-navy-950"
              aria-hidden="true"
            />
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-300">
              {m.date}
            </p>
            <h3 className="mt-1 font-heading text-xl font-bold text-white">{m.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-200">
              {m.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
