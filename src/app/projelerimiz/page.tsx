import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "AIDATA'nın TÜBİTAK ve TEKNOFEST kapsamında yürüttüğü yapay zeka projeleri.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            Projelerimiz
          </span>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
            Fikirden sahaya: 2025–2026 projelerimiz
          </h1>
          <p className="max-w-2xl text-balance text-lg text-navy-200">
            TÜBİTAK ve TEKNOFEST gibi ulusal programlar kapsamında
            yürüttüğümüz, yapay zekayı gerçek problemlere uygulayan
            projelerimiz.
          </p>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Devam Eden Girişimler"
              title="Kampüsten topluma, teoriden uygulamaya"
              description="Her proje, topluluğumuzun 'yapay zeka herkes için' vizyonunu somut adımlara dönüştürüyor."
              tone="dark"
            />
          </Reveal>
          <StaggerGrid className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </StaggerGrid>
        </Container>
      </section>
    </>
  );
}
