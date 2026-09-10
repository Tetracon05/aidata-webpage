import Link from "next/link";
import { ArrowRight, GraduationCap, Users, CalendarDays, Rocket, BrainCog, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EventCard } from "@/components/event-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { CountUp } from "@/components/motion/count-up";
import { TiltCard } from "@/components/motion/tilt-card";
import { Pressable } from "@/components/motion/pressable";
import { Hero } from "@/components/home/hero";
import { site, whatWeDo } from "@/lib/data/site";
import { pastEvents } from "@/lib/data/events";
import { projects } from "@/lib/data/projects";

const stats = [
  { label: "Kuruluş", value: "Şubat 2025", icon: CalendarDays },
  { label: "Üye Sayısı", value: site.memberCount, icon: Users },
  { label: "Düzenlenen Etkinlik", value: `${pastEvents.length}+`, icon: GraduationCap },
  { label: "Aktif Proje", value: `${projects.length}`, icon: Rocket },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <Container className="py-10 sm:py-12">
          <StaggerGrid className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <stat.icon className="h-6 w-6 text-gold-500" aria-hidden="true" />
                <span className="font-heading text-2xl font-bold text-navy-950 sm:text-3xl">
                  <CountUp value={stat.value} />
                </span>
                <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </StaggerGrid>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-background py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Neler Yapıyoruz"
              title="Akademik bilgiyi uygulamalı deneyimle buluşturuyoruz"
              description="Eğitimlerden hackathonlara, seminerlerden araştırma çalışmalarına kadar geniş bir yelpazede etkinlik düzenliyoruz."
              tone="dark"
            />
          </Reveal>
          <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item) => (
              <TiltCard
                key={item.title}
                className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6">
                  <Layers size={20} className="text-gold-400" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </TiltCard>
            ))}
          </StaggerGrid>
        </Container>
      </section>

      {/* RECENT EVENTS */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionHeading
                eyebrow="Etkinliklerimiz"
                title="Son etkinliklerimizden kareler"
                description="Kuruluşumuzdan bu yana düzenlediğimiz seminer ve tanıtım etkinliklerinden bazıları."
              />
            </Reveal>
            <Pressable>
              <Link
                href="/etkinlikler"
                className="inline-flex items-center gap-2 rounded-full border border-navy-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              >
                Tüm Etkinlikler
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Pressable>
          </div>

          <StaggerGrid className="grid gap-6 lg:grid-cols-3">
            {pastEvents.slice(0, 3).map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </StaggerGrid>
        </Container>
      </section>

      {/* PROJECTS TEASER */}
      <section className="bg-background py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-600">
                <BrainCog size={14} aria-hidden="true" />
                Projelerimiz
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
                Kampüsten ulusal sahneye taşıdığımız fikirler
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                TÜBİTAK desteğiyle yürüttüğümüz eğitim serisinden millî işletim
                sistemi Pardus&apos;a katkı sunmayı hedeflediğimiz TEKNOFEST
                başvurumuza kadar; öğrendiklerimizi somut projelere
                dönüştürüyoruz.
              </p>
              <Pressable>
                <Link
                  href="/projelerimiz"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                >
                  Projelerimizi İncele
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Pressable>
            </Reveal>

            <StaggerGrid className="grid gap-4">
              {projects.slice(0, 2).map((project) => (
                <TiltCard
                  key={project.slug}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-gold-300">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy-950">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </TiltCard>
              ))}
            </StaggerGrid>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
              Yapay zeka ve veri bilimine ilgi duyuyor musun?
            </h2>
            <p className="max-w-xl text-navy-200">
              {site.universityShort}&apos;nde okuyan her öğrenci topluluğumuza
              katılabilir. Aramıza katılmak veya iş birliği yapmak için bize
              ulaş.
            </p>
            <Pressable>
              <a
                href={site.membershipFormUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-200"
              >
                Hemen Katıl
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Pressable>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
