# Portfolio — Ayush & Sambhav

Two separate portfolio websites, one codebase.

- **/ayush** — Ayush Amarnath Bhakat — warm amber accent
- **/sambhav** — Sambhav Nath Jain — cool cyan accent
- **/** — returns 404 (by design — there is no combined/landing view)

Built with **Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion**. Minimal dark aesthetic, fully responsive, subtle on-scroll animations.

---

## Local development

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000/ayush
- http://localhost:3000/sambhav
- http://localhost:3000/ → 404 (expected)

Build check:

```bash
npm run build
```

---

## Project structure

```
app/
  layout.tsx              # Root layout + Inter / Instrument Serif fonts
  page.tsx                # / → notFound()
  not-found.tsx           # 404 page with links to both profiles
  ayush/page.tsx          # /ayush
  sambhav/page.tsx        # /sambhav
  api/contact/route.ts    # POST /api/contact — STUBBED (logs only)
components/               # Reusable sections (Hero, About, Experience, …)
data/
  ayush.ts                # Ayush's resume content — typed ProfileData
  sambhav.ts              # Sambhav's resume content — typed ProfileData
lib/types.ts              # Shared TS interfaces
public/
  ayush.svg, sambhav.svg  # Placeholder monograms — replace with real photos
  ayush-resume.pdf        # Downloadable resume
  sambhav-resume.pdf
```

Each route imports **only its own** data file. Nothing is shared or blended.

---

## Replacing placeholder photos

Drop real photos into `/public/` as `ayush.jpg` and `sambhav.jpg`, then change the `photo` field in `data/ayush.ts` and `data/sambhav.ts` from `/ayush.svg` → `/ayush.jpg` (and similar). Push — Vercel auto-redeploys.

---

## Contact form — currently stubbed

The form posts to `/api/contact`, which **logs the payload server-side and returns `{ ok: true }`**. No email is actually sent yet.

To enable real delivery (takes ~5 min with Resend):

1. `npm install resend`
2. Create an account at <https://resend.com>, verify a sender domain (or use the `onboarding@resend.dev` sandbox), and copy your API key.
3. Add `RESEND_API_KEY` to Vercel → Settings → Environment Variables.
4. In `app/api/contact/route.ts`, replace the `console.log(...)` block with:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = to === "ayush" ? "bhakat2004@gmail.com" : "sambhavjain1404@gmail.com";
await resend.emails.send({
  from: "portfolio@yourdomain.com",
  to: recipient,
  replyTo: email,
  subject: `New message from ${name}`,
  text: message,
});
```

---

## Deploy to Vercel

### Option A — Git import (recommended, nothing for anyone to share)

1. Create a free account at <https://vercel.com> (sign in with GitHub).
2. **Add New → Project** → import the `snjain22/yc-website-resume` repo.
3. Select branch `claude/portfolio-website-ayush-sambhav-HFtpr` (or merge to `main` first).
4. Leave all build settings default — Next.js is auto-detected.
5. Click **Deploy**. You get a `*.vercel.app` URL in ~60s.

No env vars are required for the first deploy (the contact form is stubbed).

### Option B — CLI deploy

```bash
npx vercel --prod
```

You'll need to log in via the CLI once (or supply a Vercel token via `--token=...`).

### Custom domain (optional)

Add a domain in **Vercel → Project → Settings → Domains** and follow the DNS instructions. Options you might consider:

- Two separate domains — `ayush.yourdomain.com` + `sambhav.yourdomain.com` (requires rewrites or two separate deployments)
- One domain with paths — `yourdomain.com/ayush` + `yourdomain.com/sambhav` (works out of the box)

---

## Tweaking the design

- **Accent colors** live in `app/globals.css` (`.theme-amber` / `.theme-cyan`). Change the RGB values to swap palettes.
- **Fonts** are loaded in `app/layout.tsx` via `next/font/google`.
- **Section order** is composed in `components/ProfilePage.tsx` — reorder freely.
- **Content** is edited in `data/ayush.ts` and `data/sambhav.ts` — fully typed, so TS will flag anything you break.
