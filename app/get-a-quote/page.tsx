import type { Metadata } from "next";
import { site } from "@/content/site";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckIcon, PageHero, PhoneIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: `Request a quote on a DSCR, Fix & Flip, or Ground-Up Construction loan, or call ${site.owner} directly at ${site.phone}.`,
  alternates: { canonical: "/get-a-quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero eyebrow="Get a Quote" title={site.primaryCta} lead="Four quick steps. No credit pull to request a quote — just tell us about the deal." ctas={false} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
        <QuoteForm />
        <aside className="space-y-6">
          <div className="rounded-2xl border border-space-700 bg-space-900 p-6">
            <h2 className="font-display text-lg font-bold">Rather just talk?</h2>
            <p className="mt-2 text-muted">Talk to {site.owner} directly.</p>
            <a href={site.tel} className="btn btn-primary mt-4 w-full"><PhoneIcon /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className="mt-4 block break-all text-center text-sm text-cyan hover:underline">{site.email}</a>
          </div>
          <ul className="space-y-3 rounded-2xl border border-space-700 bg-space-900 p-6 text-sm">
            {["Business-purpose investment loans", "Close in your LLC", "Funding in all 50 states", "A real person reviews every request"].map((t) => (
              <li key={t} className="flex gap-3"><CheckIcon />{t}</li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
