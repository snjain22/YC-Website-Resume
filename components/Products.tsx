import type { ProfileData } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { Tag } from "./Tag";

export function Products({ data }: { data: ProfileData }) {
  if (!data.products?.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Products & Ventures"
        title="Things I've shipped."
        id="products"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {data.products.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.05}>
            <article className="group flex h-full flex-col gap-4 rounded-xl border border-rule bg-card/30 p-7 transition-colors hover:border-accent/60">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl text-fg">{p.name}</h3>
                <span className="h-2 w-2 rounded-full bg-accent opacity-60 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-sm text-accent/90">{p.oneLine}</p>
              <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
