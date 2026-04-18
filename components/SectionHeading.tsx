import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  id,
  children,
}: {
  eyebrow?: string;
  title: string;
  id?: string;
  children?: ReactNode;
}) {
  return (
    <div id={id} className="mb-12 flex flex-col gap-3 border-t border-rule pt-10">
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-normal tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {children && <div className="max-w-prose text-muted">{children}</div>}
    </div>
  );
}
