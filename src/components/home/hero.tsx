"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/data/site";
import { easeOut } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <motion.div
        className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden="true"
        animate={
          reduced
            ? undefined
            : { scale: [1, 1.15, 1], opacity: [0.55, 0.85, 0.55] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] h-[380px] w-[380px] rounded-full bg-sky-500/20 blur-3xl"
        aria-hidden="true"
        animate={
          reduced
            ? undefined
            : { scale: [1.1, 1, 1.1], opacity: [0.6, 0.9, 0.6] }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <Container className="relative flex flex-col items-center gap-10 pt-36 pb-20 text-center sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32">
        <motion.div
          variants={container}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "show"}
          className="flex flex-col items-center gap-10"
        >
          <motion.div variants={item}>
            <Image
              src="/brand/logo.png"
              alt="AIDATA logosu"
              width={112}
              height={112}
              priority
              className="h-24 w-24 drop-shadow-[0_0_40px_rgba(240,160,32,0.25)] sm:h-28 sm:w-28"
            />
          </motion.div>

          <div className="flex flex-col items-center gap-5">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300"
            >
              {site.university}
            </motion.span>
            <motion.h1
              variants={item}
              className="max-w-3xl text-balance font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Yapay Zeka ve Veri Bilimi
              <span className="block text-gold-400">Öğrenci Topluluğu</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="max-w-xl text-balance text-lg leading-relaxed text-navy-200"
            >
              {site.taglineTr}. Seminerler, hackathonlar ve gerçek dünya
              projeleriyle geleceği birlikte kodluyoruz.
            </motion.p>
          </div>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={site.membershipFormUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-200"
              >
                Topluluğa Katıl
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/etkinlikler"
                className="inline-flex items-center gap-2 rounded-full border border-navy-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              >
                Etkinliklerimizi Gör
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            variants={item}
            className="font-heading text-sm font-medium uppercase tracking-[0.25em] text-navy-400"
          >
            “{site.tagline}”
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
