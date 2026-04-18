import type { ProfileData } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { Tag } from "./Tag";

export function Projects({ data }: { data: ProfileData }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Projects" title="Selected work." id="projects" />
      <div className="grid gap-5 md:grid-cols-2">
        {data.projects.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.04}>
            <article className="group flex h-full flex-col gap-3 rounded-xl border border-rule p-6 transition-colors hover:border-accent/60 hover:bg-card/30">
              <h3 className="font-serif text-lg text-fg">{p.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline w-fit text-xs text-accent"
                >
                  View →
                </a>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
