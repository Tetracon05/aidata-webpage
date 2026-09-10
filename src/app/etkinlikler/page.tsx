import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EventCard } from "@/components/event-card";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { pastEvents, upcomingEvents } from "@/lib/data/events";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description:
    "AIDATA'nın düzenlediği geçmiş ve planlanan seminer, oryantasyon ve etkinliklerin tam listesi.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            Etkinlikler
          </span>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
            Geçmişten bugüne düzenlediğimiz etkinlikler
          </h1>
          <p className="max-w-2xl text-balance text-lg text-navy-200">
            Seminerlerden oryantasyon standlarına, düzenlediğimiz her etkinlik
            topluluğumuzun büyüme hikayesinin bir parçası.
          </p>
        </Container>
      </section>

      {/* UPCOMING */}
      <section className="bg-background py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading eyebrow="Yaklaşan" title="Yaklaşan Etkinlikler" tone="dark" />
          </Reveal>

          {upcomingEvents.length > 0 ? (
            <StaggerGrid className="grid gap-6 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </StaggerGrid>
          ) : (
            <Reveal delay={0.1} className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <CalendarClock className="h-10 w-10 text-sky-500" aria-hidden="true" />
              <p className="max-w-md text-base text-muted-foreground">
                Şu anda planlanan bir etkinlik tarihi henüz duyurulmadı. Yeni
                etkinliklerden ilk sen haberdar olmak için Instagram
                hesabımızı takip et.
              </p>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              >
                <InstagramIcon size={16} />
                Instagram&apos;da Takip Et
              </a>
            </Reveal>
          )}
        </Container>
      </section>

      {/* PAST */}
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading eyebrow="Arşiv" title="Geçmiş Etkinlikler" />
          </Reveal>
          <StaggerGrid className="grid gap-6 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </StaggerGrid>
        </Container>
      </section>
    </>
  );
}
