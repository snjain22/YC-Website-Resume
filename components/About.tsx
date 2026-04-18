import type { ProfileData } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function About({ data }: { data: ProfileData }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="About" title="A quick introduction." id="about" />
      <FadeIn>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <p className="max-w-prose text-lg leading-relaxed text-fg/90">{data.bio}</p>
          <div className="flex flex-col gap-5">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
            <ul className="flex flex-col gap-5">
              {data.education.map((e) => (
                <li key={e.school} className="border-l border-rule pl-4">
                  <div className="text-fg">{e.school}</div>
                  <div className="text-sm text-muted">{e.degree}</div>
                  <div className="text-xs text-muted">
                    {e.dates} · {e.location}
                  </div>
                  {e.notes?.map((n) => (
                    <p key={n} className="mt-2 text-xs leading-relaxed text-muted">
                      {n}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
