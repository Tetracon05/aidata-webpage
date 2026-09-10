"use client";

import { motion } from "motion/react";
import type { BoardMember } from "@/lib/data/board";
import { useTilt } from "@/lib/use-tilt";
import { TiltGlow } from "@/components/motion/tilt-glow";

const ringByGroup: Record<BoardMember["roleGroup"], string> = {
  danisman: "from-gold-400 to-gold-600",
  yonetim: "from-sky-400 to-navy-500",
  denetim: "from-navy-400 to-navy-600",
};

export function BoardCard({ member }: { member: BoardMember }) {
  const { ref, reduced, hovering, tiltStyle, glowBackground, handlers } = useTilt(10);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      {...handlers}
      style={tiltStyle}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
    >
      {!reduced && <TiltGlow background={glowBackground} visible={hovering} />}

      <motion.div
        className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white ${ringByGroup[member.roleGroup]}`}
        aria-hidden="true"
        animate={reduced ? undefined : { y: hovering ? -4 : 0 }}
        style={reduced ? undefined : { transform: "translateZ(30px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        {member.initials}
      </motion.div>
      <div style={reduced ? undefined : { transform: "translateZ(20px)" }}>
        <p className="font-heading text-base font-bold text-navy-950">{member.name}</p>
        <p className="mt-1 text-sm font-semibold text-gold-600">{member.role}</p>
        {member.department && (
          <p className="mt-1 text-xs text-muted-foreground">{member.department}</p>
        )}
      </div>
    </motion.div>
  );
}
