"use client";

import { useState } from "react";
import type { ProfileData } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return raw;
}

type Status = "idle" | "sending" | "sent" | "error";

export function Contact({ data }: { data: ProfileData }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      to: data.slug,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Failed to send");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Contact" title="Let's talk." id="contact">
        <p>
          The fastest way to reach me is email or phone. Or drop a note with the form
          below — I read everything.
        </p>
      </SectionHeading>

      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <div className="flex flex-col gap-5 text-sm">
            <ContactRow label="Email">
              <a href={`mailto:${data.email}`} className="link-underline text-fg">
                {data.email}
              </a>
            </ContactRow>
            {data.phone && (
              <ContactRow label="Phone">
                <a href={`tel:${data.phone}`} className="link-underline text-fg">
                  {formatPhone(data.phone)}
                </a>
              </ContactRow>
            )}
            {data.socials.linkedin && (
              <ContactRow label="LinkedIn">
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg"
                >
                  {data.socials.linkedin.replace(/^https?:\/\//, "")}
                </a>
              </ContactRow>
            )}
            {data.socials.github && (
              <ContactRow label="GitHub">
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg"
                >
                  {data.socials.github.replace(/^https?:\/\//, "")}
                </a>
              </ContactRow>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 rounded-xl border border-rule bg-card/30 p-6"
          >
            <Field name="name" label="Name" required />
            <Field name="email" type="email" label="Email" required />
            <Field name="message" label="Message" textarea required />

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <span
                className="text-xs text-muted"
                aria-live="polite"
                role="status"
              >
                {status === "sent" && "Thanks — I'll get back soon."}
                {status === "error" && `Error: ${errorMsg}`}
              </span>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[90px_1fr] items-baseline gap-4 border-b border-rule pb-3">
      <span className="text-xs uppercase tracking-[0.18em] text-muted">{label}</span>
      <span>{children}</span>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const shared =
    "w-full rounded-md border border-rule bg-transparent px-3 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none";
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-[0.18em] text-muted">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={shared} />
      ) : (
        <input name={name} type={type} required={required} className={shared} />
      )}
    </label>
  );
}
