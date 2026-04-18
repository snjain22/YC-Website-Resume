import Link from "next/link";

const sections = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ name, resumePdf }: { name: string; resumePdf: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-serif text-lg tracking-tight text-fg"
          aria-label={name}
        >
          {initials}
          <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="link-underline transition-colors hover:text-fg"
            >
              {s.label}
            </a>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent/60 px-3 py-1 text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
