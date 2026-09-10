import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/data/site";
import { XIcon } from "@/components/icons/x-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";

const links = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/projelerimiz", label: "Projelerimiz" },
  { href: "/yonetim-kurulu", label: "Yönetim Kurulu" },
  { href: "/iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="AIDATA logosu"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-heading text-lg font-bold text-white">
              {site.shortName}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
            {site.name}
          </p>
          <p className="mt-3 text-sm italic text-gold-300/90">“{site.tagline}”</p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-300">
            Site Haritası
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-navy-200 transition hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-300">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
              <span>
                {site.faculty}
                <br />
                {site.address}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="shrink-0 text-sky-400" aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                className="break-all transition hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              >
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram'da AIDATA"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-100 transition hover:bg-gold-500 hover:text-navy-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={site.social.x}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="X'te (Twitter) AIDATA"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-100 transition hover:bg-gold-500 hover:text-navy-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <XIcon size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-900 py-6 text-center text-xs text-navy-300">
        © {new Date().getFullYear()} {site.shortName} · {site.university}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
