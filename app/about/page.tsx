import type { Metadata } from "next";
import { site } from "@/content/site";
import { BrandIcon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is run by ${site.owner}: 25+ years in lending, hundreds of loans closed, and investors funded in all 50 states. Talk to a real person.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Real people. Real answers. Real funding." ctas={false} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            <span className="text-ink">{site.name} is run by {site.owner}.</span> With more than 25 years in lending and
            hundreds of loans closed, Janson funds real estate investors in all 50 states — from first rentals to
            ground-up builds.
          </p>
          <p>
            When you call, you talk to the person who actually understands your deal and can move it forward. No call
            centers, no getting passed around, no guessing where your file stands.
          </p>
        </div>
        <dl className="mt-12 grid gap-4 sm:grid-cols-3">
          {site.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse rounded-2xl border border-space-700 bg-space-900 p-5 text-center">
              <dt className="text-sm uppercase tracking-widest text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-electric">{s.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {site.pillars.map((p) => (
            <li key={p} className="flex flex-col items-center gap-3 text-center">
              <BrandIcon name={p} className="h-10 w-10 text-ink" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em]">{p}</span>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title={`Talk to ${site.owner} directly.`} />
    </>
  );
}
