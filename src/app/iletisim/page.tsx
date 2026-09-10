import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  MessageCircleQuestion,
  UserPlus,
  CalendarCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { XIcon } from "@/components/icons/x-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { Pressable } from "@/components/motion/pressable";
import { TiltCard } from "@/components/motion/tilt-card";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "AIDATA'ya nasıl üye olunur, bize nasıl ulaşılır? İletişim bilgileri ve sosyal medya hesaplarımız.",
};

const steps = [
  {
    icon: MessageCircleQuestion,
    title: "Bize Ulaş",
    description:
      "E-posta veya Instagram üzerinden bize mesaj gönder, aklındaki soruları sor.",
  },
  {
    icon: UserPlus,
    title: "Üyelik Formunu Doldur",
    description:
      "Üyelik formunu doldurman İstiklal Bilim ve Teknoloji Üniversitesi öğrenci topluluğu ailesine katılman için yeterli — ayrıca bizimle iletişime geçmene gerek yok.",
    href: site.membershipFormUrl,
  },
  {
    icon: CalendarCheck,
    title: "Etkinliklere Katıl",
    description:
      "Seminer, atölye ve hackathonlarımızda yerini al; projelerde aktif rol üstlen.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            İletişim
          </span>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
            Aramıza katılmak ister misin?
          </h1>
          <p className="max-w-2xl text-balance text-lg text-navy-200">
            {site.university}&apos;nde okuyan her öğrenci topluluğumuza
            katılabilir. Sorularının olması hiç sorun değil — bize her
            zaman ulaşabilirsin.
          </p>
        </Container>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-background py-16 sm:py-20">
        <StaggerGrid className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <TiltCard className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl">
            <a
              href={`mailto:${site.email}`}
              className="flex h-full w-full flex-col items-center gap-3 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950">
                <Mail className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <span className="font-heading text-sm font-bold text-navy-950">E-posta</span>
              <span className="break-all text-xs text-muted-foreground">{site.email}</span>
            </a>
          </TiltCard>

          <TiltCard className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-full w-full flex-col items-center gap-3 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950">
                <InstagramIcon size={20} className="text-gold-400" />
              </span>
              <span className="font-heading text-sm font-bold text-navy-950">Instagram</span>
              <span className="text-xs text-muted-foreground">@kiu.aidata</span>
            </a>
          </TiltCard>

          <TiltCard className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl">
            <a
              href={site.social.x}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-full w-full flex-col items-center gap-3 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950">
                <XIcon size={18} className="text-gold-400" />
              </span>
              <span className="font-heading text-sm font-bold text-navy-950">X (Twitter)</span>
              <span className="text-xs text-muted-foreground">@aidata_istiklal</span>
            </a>
          </TiltCard>

          <TiltCard className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-shadow hover:shadow-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950">
              <MapPin className="h-5 w-5 text-gold-400" aria-hidden="true" />
            </span>
            <span className="font-heading text-sm font-bold text-navy-950">Kampüs</span>
            <span className="text-xs text-muted-foreground">
              {site.faculty}, {site.address}
            </span>
          </TiltCard>
        </StaggerGrid>
      </section>

      {/* HOW TO JOIN */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Nasıl Üye Olunur?"
              title="Üç adımda topluluğumuzun bir parçası ol"
              description="Yapay zeka ve veri bilimine meraklı her İstiklal Bilim ve Teknoloji Üniversitesi öğrencisini bekliyoruz."
            />
          </Reveal>
          <StaggerGrid className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => {
              const content = (
                <>
                  <step.icon className="mt-2 h-7 w-7 text-sky-400" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-200">{step.description}</p>
                  {step.href && (
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                      Formu Aç
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  )}
                </>
              );

              return (
                <TiltCard
                  key={step.title}
                  className="flex flex-col gap-4 rounded-2xl border border-navy-800 bg-navy-900/60 p-7"
                >
                  <span className="absolute -top-4 left-7 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-950">
                    {i + 1}
                  </span>
                  {step.href ? (
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-col gap-4 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </TiltCard>
              );
            })}
          </StaggerGrid>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-background py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl">
            <TiltCard className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-12 text-center shadow-sm transition-shadow hover:shadow-xl">
              <Sparkles className="h-9 w-9 text-gold-500" aria-hidden="true" />
              <h2 className="max-w-xl text-balance font-heading text-2xl font-bold text-navy-950 sm:text-3xl">
                Sorun ne olursa olsun, bize yazmaktan çekinme
              </h2>
              <Pressable>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                >
                  <Mail size={16} aria-hidden="true" />
                  {site.email}
                </a>
              </Pressable>
            </TiltCard>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
