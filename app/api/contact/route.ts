import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  to?: "ayush" | "sambhav";
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { to, name, email, message } = body;

  if (!to || (to !== "ayush" && to !== "sambhav")) {
    return NextResponse.json({ error: "Missing or invalid recipient" }, { status: 400 });
  }
  if (!name || name.length < 1 || name.length > 200) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (!message || message.length < 1 || message.length > 5000) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  // TODO: wire up real email delivery (Resend / Formspree / Web3Forms).
  // For now we just log server-side and pretend-succeed so the UI works end-to-end.
  // When you're ready: pick a provider, add the SDK + env var, and replace the
  // console.log below with an actual send call that routes by `to`.
  console.log("[contact] new message", {
    to,
    name,
    email,
    messageLength: message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
