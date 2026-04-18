import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-[11px] uppercase tracking-[0.25em] text-muted">404</span>
      <h1 className="font-serif text-5xl text-fg sm:text-6xl">Nothing here.</h1>
      <p className="max-w-md text-muted">
        This site hosts two separate portfolios. Pick one:
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Link
          href="/ayush"
          className="rounded-full border border-rule px-5 py-2.5 text-sm text-fg transition-colors hover:border-[#F5A623] hover:text-[#F5A623]"
        >
          /ayush
        </Link>
        <Link
          href="/sambhav"
          className="rounded-full border border-rule px-5 py-2.5 text-sm text-fg transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8]"
        >
          /sambhav
        </Link>
      </div>
    </main>
  );
}
