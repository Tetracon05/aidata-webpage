import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BoardCard } from "@/components/board-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { advisor, boardMembers, auditBoard } from "@/lib/data/board";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description:
    "AIDATA yönetim kurulu, denetim kurulu ve topluluk danışmanı — İstiklal Bilim ve Teknoloji Üniversitesi Yapay Zeka ve Veri Bilimi Öğrenci Topluluğu.",
};

export default function BoardPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            Yönetim Kurulu
          </span>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
            Topluluğumuzu yönetenler
          </h1>
          <p className="max-w-2xl text-balance text-lg text-navy-200">
            14 Ekim 2025 tarihli Genel Kurul ile göreve gelen yönetim ve
            denetim kurulumuz.
          </p>
        </Container>
      </section>

      {/* ADVISOR */}
      <section className="bg-background py-16">
        <Container>
          <Reveal className="mx-auto max-w-xs">
            <BoardCard member={advisor} />
          </Reveal>
        </Container>
      </section>

      {/* BOARD */}
      <section className="bg-background pb-20 sm:pb-24">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading eyebrow="Yönetim Kurulu" title="Yürütme Ekibimiz" tone="dark" align="center" />
          </Reveal>
          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <BoardCard key={member.name} member={member} />
            ))}
          </StaggerGrid>
        </Container>
      </section>

      {/* AUDIT BOARD */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading eyebrow="Denetim Kurulu" title="Şeffaflığımızın Güvencesi" align="center" />
          </Reveal>
          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {auditBoard.map((member) => (
              <BoardCard key={member.name} member={member} />
            ))}
          </StaggerGrid>
        </Container>
      </section>
    </>
  );
}
