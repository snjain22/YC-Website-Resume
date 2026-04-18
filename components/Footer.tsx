import type { ProfileData } from "@/lib/types";

export function Footer({ data }: { data: ProfileData }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-xs text-muted sm:flex-row sm:items-center">
        <span>
          © {year} {data.name}
        </span>
        <span>
          Built with Next.js & Tailwind · <a href={data.resumePdf} className="link-underline text-fg">Resume PDF</a>
        </span>
      </div>
    </footer>
  );
}
