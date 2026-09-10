import type { Metadata } from "next";
import {
  Target,
  Eye,
  GraduationCap,
  Presentation,
  Trophy,
  Flag,
  Megaphone,
  Lightbulb,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { TiltCard } from "@/components/motion/tilt-card";
import { Timeline } from "@/components/home/timeline";
import { site, vision, milestones } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "AIDATA'nın kuruluş hikayesi, vizyonu ve misyonu — İstiklal Bilim ve Teknoloji Üniversitesi Yapay Zeka ve Veri Bilimi Öğrenci Topluluğu.",
};

const missionItems = [
  { icon: Presentation, text: "Çevrimiçi ve yüz yüze seminerler düzenlemek" },
  { icon: Trophy, text: "Öğrencilerin gelişimi için yarışmalar ve hackathonlar düzenlemek" },
  { icon: Flag, text: "Çeşitli etkinliklerde üniversitemizi temsil etmek" },
  { icon: Megaphone, text: "Tanıtım programları planlayıp uygulamak" },
  { icon: Lightbulb, text: "Üniversite bünyesinde yapay zekaya olan farkındalığı artırmak" },
  {
    icon: GraduationCap,
    text: "Uzman ve akademisyenlerle eğitim, seminer ve konferanslar düzenlemek",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            Hakkımızda
          </span>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
            Kuruluşumuz, vizyonumuz ve yolculuğumuz
          </h1>
          <p className="max-w-2xl text-balance text-lg text-navy-200">
            {site.name} ({site.fullBrand}), {site.founded} tarihinde{" "}
            {site.department} bünyesinde kuruldu.
          </p>
        </Container>
      </section>

      {/* BİZ KİMİZ */}
      <section className="bg-background py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Biz Kimiz?" title="Veriden anlama, yapay zekayla üretme" tone="dark" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5 text-base leading-relaxed text-navy-700">
            <p>
              {site.shortName}, yapay zeka ve veri bilimi alanlarına ilgi duyan{" "}
              {site.university} öğrencilerini bir araya getirmek amacıyla kuruldu.
              Akademik bilgi ile uygulamalı deneyimi birleştirerek bu dinamik
              alanlara ilgi duyan öğrenciler için kapsamlı bir öğrenme ortamı
              oluşturmayı hedefliyoruz.
            </p>
            <p>
              {site.faculty} {site.department} çatısı altında,
              Dr. Öğr. Üyesi Muhammed Ali Koşan danışmanlığında faaliyet
              gösteriyoruz. Kuruluşumuzdan bu yana üye sayımız hızla artarak{" "}
              {site.memberCount} öğrenciye ulaştı.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* VİZYON */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15">
              <Eye className="h-6 w-6 text-gold-400" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {vision.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5 text-base leading-relaxed text-navy-200">
            {vision.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* MİSYON / AMAÇ */}
      <section className="bg-background py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
              <Target className="h-6 w-6 text-sky-600" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
              Misyonumuz
            </h2>
          </Reveal>
          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {missionItems.map(({ icon: Icon, text }) => (
              <TiltCard
                key={text}
                range={6}
                className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                  <Icon size={18} className="text-sky-600" aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-navy-700">{text}</p>
              </TiltCard>
            ))}
          </StaggerGrid>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Yolculuğumuz"
              title="Kuruluşumuzdan bugüne"
              description="İST-AIDATA'nın kısa ama yoğun geçen tarihinden önemli kilometre taşları."
            />
          </Reveal>
          <Timeline milestones={milestones} />
        </Container>
      </section>

      {/* ADVISOR CALLOUT */}
      <section className="bg-background py-16">
        <Container>
          <Reveal>
            <TiltCard className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center shadow-sm transition-shadow hover:shadow-xl sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-950">
                <GraduationCap className="h-8 w-8 text-gold-400" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-navy-950">
                  Dr. Öğr. Üyesi Muhammed Ali Koşan
                </p>
                <p className="text-sm text-muted-foreground">
                  Topluluk Danışmanı · {site.department}
                </p>
              </div>
            </TiltCard>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
