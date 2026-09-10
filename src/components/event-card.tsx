"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Sparkles, ZoomIn } from "lucide-react";
import type { EventItem } from "@/lib/data/events";
import { useTilt } from "@/lib/use-tilt";
import { TiltGlow } from "@/components/motion/tilt-glow";
import { GalleryLightbox } from "@/components/gallery-lightbox";

export function EventCard({ event, featured = false }: { event: EventItem; featured?: boolean }) {
  const cover = event.images?.[0];
  const { ref, reduced, hovering, tiltStyle, glowBackground, handlers } = useTilt(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <motion.article
      ref={ref as React.RefObject<HTMLElement>}
      id={event.slug}
      {...handlers}
      style={tiltStyle}
      whileHover={reduced ? undefined : { scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      {!reduced && <TiltGlow background={glowBackground} visible={hovering} />}

      <div className="relative aspect-16/9 w-full bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950">
        {cover ? (
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="group/cover absolute inset-0 h-full w-full cursor-zoom-in"
            aria-label={`${event.title} fotoğrafını büyüt`}
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes={featured ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 1024px) 400px, 100vw"}
              className="object-cover transition-transform duration-300 group-hover/cover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 opacity-0 transition-all duration-200 group-hover/cover:bg-navy-950/30 group-hover/cover:opacity-100">
              <ZoomIn className="h-8 w-8 text-white drop-shadow" aria-hidden="true" />
            </div>
          </button>
        ) : (
          <div className="bg-grid absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-14 w-14 text-gold-400/70" aria-hidden="true" />
          </div>
        )}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950/85 px-3 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur">
          <Calendar size={14} aria-hidden="true" />
          {event.dateLabel}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-xl font-bold text-navy-950">{event.title}</h3>

        <p className="text-sm leading-relaxed text-muted-foreground">{event.summary}</p>

        <div className="mt-1 flex flex-col gap-1.5 text-sm text-navy-500">
          <span className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            {event.location}
          </span>
          {event.participants && (
            <span className="flex items-center gap-2">
              <Users size={16} className="shrink-0" aria-hidden="true" />
              {event.participants} katılımcı{event.partner ? ` · ${event.partner}` : ""}
            </span>
          )}
        </div>

        <div className="mt-3 space-y-2.5 border-t border-border pt-4 text-sm leading-relaxed text-navy-700">
          {event.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {event.images && event.images.length > 1 && (
          <div className="mt-2 grid grid-cols-2 gap-2">
            {event.images.slice(1).map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i + 1)}
                className="group/thumb relative aspect-4/3 cursor-zoom-in overflow-hidden rounded-lg"
                aria-label={`${event.title} fotoğrafını büyüt`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 opacity-0 transition-all duration-200 group-hover/thumb:bg-navy-950/30 group-hover/thumb:opacity-100">
                  <ZoomIn className="h-5 w-5 text-white drop-shadow" aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {event.images && event.images.length > 0 && (
        <GalleryLightbox
          images={event.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </motion.article>
  );
}
