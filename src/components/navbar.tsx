"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/data/site";
import { springy } from "@/lib/motion";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/projelerimiz", label: "Projelerimiz" },
  { href: "/yonetim-kurulu", label: "Yönetim Kurulu" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (open) return;
    const goingDown = y > lastY.current;
    setHidden(goingDown && y > 120);
    lastY.current = y;
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.div
      initial={reduced ? false : { y: -40, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={reduced ? { duration: 0 } : springy}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4"
    >
      <div className="flex w-full max-w-5xl flex-col items-center">
        <div className="flex w-full items-center justify-between gap-2 rounded-full border border-white/10 bg-navy-950/75 px-3 py-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-xl backdrop-saturate-150 sm:px-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            <Image
              src="/brand/logo.png"
              alt="AIDATA logosu"
              width={40}
              height={40}
              priority
              className="h-9 w-9 sm:h-10 sm:w-10"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-base font-bold tracking-tight text-white sm:text-lg">
                {site.shortName}
              </span>
              <span className="hidden text-[10px] text-navy-300 sm:block">
                {site.universityShort}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-navy-800"
                      transition={reduced ? { duration: 0 } : springy}
                    />
                  )}
                  <span
                    className={`relative z-10 ${active ? "text-gold-300" : "text-navy-200/90 hover:text-white"}`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={site.membershipFormUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-200"
              >
                Bize Katıl
              </a>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobil menü"
              initial={reduced ? false : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 w-full origin-top rounded-3xl border border-white/10 bg-navy-950/95 p-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-base font-medium ${
                          active ? "bg-navy-800 text-gold-300" : "text-navy-100 hover:bg-navy-800/70"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a
                href={site.membershipFormUrl}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950"
              >
                Bize Katıl
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
