"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/data/projects";
import { Rocket, CheckCircle2, FileText } from "lucide-react";
import { useTilt } from "@/lib/use-tilt";
import { TiltGlow } from "@/components/motion/tilt-glow";

const statusMeta: Record<Project["status"], { label: string; icon: typeof Rocket }> = {
  "devam-ediyor": { label: "Devam Ediyor", icon: Rocket },
  tamamlandi: { label: "Tamamlandı", icon: CheckCircle2 },
  basvuru: { label: "Başvuru Aşamasında", icon: FileText },
};

export function ProjectCard({ project }: { project: Project }) {
  const meta = statusMeta[project.status];
  const Icon = meta.icon;
  const { ref, reduced, hovering, tiltStyle, glowBackground, handlers } = useTilt(6);

  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      {...handlers}
      style={tiltStyle}
      whileHover={reduced ? undefined : { scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl"
    >
      {!reduced && <TiltGlow background={glowBackground} visible={hovering} />}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-gold-300">
          {project.tag}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600">
          <Icon size={14} aria-hidden="true" />
          {meta.label}
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold text-navy-950">{project.title}</h3>
      <p className="text-xs font-medium text-muted-foreground">{project.period}</p>

      <p className="text-sm leading-relaxed text-navy-700">{project.summary}</p>

      <div className="mt-1 space-y-2 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
        {project.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </motion.article>
  );
}
