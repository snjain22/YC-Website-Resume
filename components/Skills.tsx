import type { ProfileData } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { Tag } from "./Tag";

export function Skills({ data }: { data: ProfileData }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Skills" title="Tools I work with." id="skills" />
      <FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          {data.skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
