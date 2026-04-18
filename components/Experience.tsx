import type { ProfileData } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { Tag } from "./Tag";

export function Experience({ data }: { data: ProfileData }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked."
        id="experience"
      />
      <ol className="flex flex-col gap-10">
        {data.experience.map((item, i) => (
          <FadeIn key={item.company + item.dates} delay={i * 0.05}>
            <li className="grid gap-6 border-l border-rule pl-6 md:grid-cols-[220px_1fr] md:gap-10 md:border-l-0 md:pl-0">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-accent">
                  {item.dates}
                </span>
                <span className="text-xs text-muted">{item.location}</span>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="font-serif text-xl text-fg">{item.company}</h3>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
                {item.blurb && (
                  <p className="max-w-prose text-sm italic text-muted/80">{item.blurb}</p>
                )}
                <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-fg/85">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {item.tech && item.tech.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
