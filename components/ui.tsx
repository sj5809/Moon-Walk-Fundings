import Link from "next/link";
import { useId } from "react";
import { site } from "@/content/site";

// TODO(launch): replace with the final logo SVG from the designer.
export function Logo() {
  const id = useId();
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG, no optimization needed */}
      <img src="/brand/astronaut-mark.svg" alt="" width={40} height={40} className="h-10 w-10 drop-shadow-[0_0_8px_rgb(30_144_255/0.45)]" />
      <span className="inline-flex flex-col items-center leading-none">
      <span className="font-display text-2xl font-extrabold tracking-tight" aria-hidden>
        <span className="text-moon">MO</span>
        <svg viewBox="0 0 24 24" className="mx-[0.03em] inline-block h-[0.8em] w-[0.8em] -translate-y-[0.04em]">
          <defs>
            <linearGradient id={`${id}g`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#aeb7c6" />
            </linearGradient>
            <mask id={`${id}m`}>
              <rect width="24" height="24" fill="#fff" />
              <circle cx="4.5" cy="11" r="10" fill="#000" />
            </mask>
          </defs>
          <circle cx="12" cy="12" r="10.5" fill="none" stroke="#aeb7c6" strokeOpacity=".35" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="11" fill={`url(#${id}g)`} mask={`url(#${id}m)`} />
        </svg>
        <span className="text-moon">N</span>
        <span className="ml-[0.2em] text-electric">WALK</span>
      </span>
      <span className="mt-1 flex items-center gap-1.5 text-[0.55rem] font-semibold tracking-[0.55em] text-ink" aria-hidden>
        <span className="h-px w-4 bg-ink/50" />
        FUNDINGS
        <span className="-ml-[0.55em] h-px w-4 bg-ink/50" />
      </span>
      </span>
    </Link>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`shrink-0 text-cyan ${className}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="10" cy="10" r="8.5" strokeWidth="1.25" className="opacity-50" />
      <path d="m6.5 10.2 2.3 2.3 4.7-4.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" strokeLinejoin="round" />
    </svg>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-space-700 rounded-2xl border border-space-700 bg-space-900">
      {items.map((f) => (
        <details key={f.q} className="group px-5 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display font-semibold text-ink marker:hidden focus-visible:outline-2 focus-visible:outline-cyan [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-space-700 text-cyan transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="pb-5 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to fund your next deal?",
  body = `Talk to ${site.owner} directly. No call centers, no runaround — just a real conversation about your deal and current terms.`,
}: { title?: string; body?: string }) {
  return (
    <section className="starfield border-y border-space-700">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/get-a-quote" className="btn btn-primary">{site.primaryCta}</Link>
          <a href={site.tel} className="btn btn-outline">
            <PhoneIcon /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  ctas = true,
  children,
}: { eyebrow: string; title: string; lead?: string; ctas?: boolean; children?: React.ReactNode }) {
  return (
    <section className="starfield border-b border-space-700">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>}
        {ctas && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/get-a-quote" className="btn btn-primary">Get a Quote</Link>
            <a href={site.tel} className="btn btn-outline"><PhoneIcon /> Talk to a Lender</a>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
