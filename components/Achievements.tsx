import type { ProfileData } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Achievements({ data }: { data: ProfileData }) {
  const hasAch = data.achievements && data.achievements.length > 0;
  const hasLead = data.leadership && data.leadership.length > 0;
  if (!hasAch && !hasLead) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow={hasLead ? "Leadership & Achievements" : "Achievements"}
        title={hasLead ? "Outside the code." : "Notable recognition."}
        id="achievements"
      />
      <FadeIn>
        <div className="grid gap-12 md:grid-cols-2">
          {hasAch && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted">
                Achievements & Certifications
              </h3>
              <ul className="flex flex-col gap-3">
                {data.achievements!.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasLead && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted">
                Leadership & Activities
              </h3>
              <ul className="flex flex-col gap-5">
                {data.leadership!.map((l) => (
                  <li key={l.org} className="border-l border-rule pl-4">
                    <div className="text-fg">{l.role}</div>
                    <div className="text-sm text-muted">{l.org}</div>
                    <div className="text-xs text-muted">{l.dates}</div>
                    <ul className="mt-2 flex flex-col gap-1.5 text-sm text-fg/85">
                      {l.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
