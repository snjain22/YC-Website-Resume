"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProfileData } from "@/lib/types";

function formatPhone(raw: string) {
  // e.g. +919173319289 -> +91 91733 19289
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return raw;
}

export function Hero({ data }: { data: ProfileData }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 sm:pt-24 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16 md:pb-28 md:pt-32">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.25em] text-accent"
          >
            {data.location ?? "Portfolio"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-display text-fg"
          >
            {data.name.split(" ").slice(0, -1).join(" ")}
            <br />
            <span className="text-accent">{data.name.split(" ").slice(-1)}</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
          >
            <a href={`mailto:${data.email}`} className="link-underline hover:text-fg">
              {data.email}
            </a>
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className="link-underline hover:text-fg"
                aria-label={`Call ${data.name}`}
              >
                {formatPhone(data.phone)}
              </a>
            )}
            {data.socials.github && (
              <a
                href={data.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-fg"
              >
                GitHub
              </a>
            )}
            {data.socials.linkedin && (
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-fg"
              >
                LinkedIn
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
            >
              View work
            </a>
            <a
              href={data.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="rounded-full border border-rule px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Download resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-rule"
        >
          <Image
            src={data.photo}
            alt={data.name}
            fill
            priority
            sizes="(max-width: 768px) 80vw, 400px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "rgb(var(--accent-rgb) / 0.25)" }}
      />
    </section>
  );
}
