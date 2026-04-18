import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rule px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-muted transition-colors hover:border-accent/50 hover:text-fg">
      {children}
    </span>
  );
}
