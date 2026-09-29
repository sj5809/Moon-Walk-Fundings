import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, getComparison } from "@/content/comparisons";
import { site } from "@/content/site";
import { CheckIcon, CtaBand, Faq, faqSchema, JsonLd, PhoneIcon } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/learn/compare/[slug]">): Promise<Metadata> {
  const c = getComparison((await params).slug);
  if (!c) return {};
  const path = `/learn/compare/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url: path, type: "article" },
  };
}

const container = "mx-auto max-w-6xl px-4 sm:px-6";
const h2 = "font-display text-2xl font-extrabold sm:text-3xl";

export default async function ComparePage({ params }: PageProps<"/learn/compare/[slug]">) {
  const c = getComparison((await params).slug);
  if (!c) notFound();
  const loanName = (k?: "a" | "b") => (k ? c[k].name : null);

  return (
    <>
      <JsonLd data={faqSchema(c.faqs)} />

      {/* Hero */}
      <section className="starfield border-b border-space-700">
        <div className={`${container} py-16 sm:py-24`}>
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex gap-2">
              <li><Link href="/learn" className="hover:text-cyan">Learn</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">Compare</li>
            </ol>
          </nav>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Loan comparison</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">{c.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{c.takeaway}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/get-a-quote" className="btn btn-primary">Get a Quote</Link>
            <a href={site.tel} className="btn btn-outline"><PhoneIcon /> Talk to a Lender</a>
          </div>
        </div>
      </section>

      {/* Side-by-side */}
      <section className={`${container} py-16 sm:py-20`} aria-labelledby="glance">
        <h2 id="glance" className={h2}>Side-by-side</h2>
        <p className="mt-3 max-w-2xl text-muted">
          General comparison only — terms vary by deal. <a href={site.tel} className="font-semibold text-cyan hover:underline">Call for current terms.</a>
        </p>

        {/* Desktop table: sticky column headers under the site header. overflow-clip keeps rounded corners without breaking sticky. */}
        <table className="mt-8 hidden w-full border-separate border-spacing-0 overflow-clip rounded-2xl border border-space-700 text-left md:table">
          <thead>
            <tr>
              <th scope="col" className="sticky top-18 z-10 w-1/5 border-b border-space-700 bg-space-800 px-6 py-4 text-sm font-semibold text-muted">
                <span className="sr-only">Feature</span>
              </th>
              {[c.a, c.b].map((l) => (
                <th key={l.name} scope="col" className="sticky top-18 z-10 border-b border-space-700 bg-space-800 px-6 py-4 font-display text-lg font-bold">
                  {l.href ? <Link href={l.href} className="hover:text-cyan">{l.name}</Link> : l.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r, i) => (
              <tr key={r.label} className={i % 2 ? "bg-space-900" : "bg-space-950"}>
                <th scope="row" className="border-b border-space-700 px-6 py-5 align-top font-display text-sm font-bold text-ink">{r.label}</th>
                <td className="border-b border-l border-space-700 px-6 py-5 align-top leading-relaxed text-muted">{r.a}</td>
                <td className="border-b border-l border-space-700 px-6 py-5 align-top leading-relaxed text-muted">{r.b}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile: one stacked card per row */}
        <dl className="mt-8 space-y-4 md:hidden">
          {c.rows.map((r) => (
            <div key={r.label} className="rounded-2xl border border-space-700 bg-space-900 p-5">
              <dt className="font-display font-bold">{r.label}</dt>
              <dd className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                <p><span className="block text-xs font-semibold uppercase tracking-wider text-cyan">{c.a.name}</span>{r.a}</p>
                <p className="border-t border-space-700 pt-3"><span className="block text-xs font-semibold uppercase tracking-wider text-cyan">{c.b.name}</span>{r.b}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Choose X if… */}
      <section className="border-y border-space-700 bg-space-900">
        <div className={`${container} grid gap-6 py-16 sm:py-20 md:grid-cols-2`}>
          {([["a", c.chooseA], ["b", c.chooseB]] as const).map(([k, points]) => (
            <div key={k} className="reveal rounded-2xl border border-space-700 bg-space-950 p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold sm:text-2xl">
                Choose a <span className="text-electric">{c[k].name}</span> if…
              </h2>
              <ul className="mt-6 space-y-4">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-ink"><CheckIcon />{p}</li>
                ))}
              </ul>
              {c[k].href && (
                <Link href={c[k].href} className="mt-8 inline-block font-semibold text-cyan hover:underline">
                  Learn about {c[k].name}s →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sequence diagram */}
      {c.sequence && (
        <section className={`${container} py-16 sm:py-20`} aria-labelledby="sequence">
          <h2 id="sequence" className={h2}>{c.sequence.title}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{c.sequence.intro}</p>
          <ol className="relative mt-10 grid gap-8 md:grid-cols-5 md:gap-4">
            {/* connector line: vertical on mobile, horizontal on desktop */}
            <span aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-electric to-cyan md:bottom-auto md:left-[10%] md:right-[10%] md:top-6 md:h-px md:w-auto md:bg-gradient-to-r" />
            {c.sequence.steps.map((s, i) => (
              <li key={s.name} className="reveal relative flex gap-4 md:flex-col md:items-center md:text-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-electric bg-space-950 font-display text-lg font-extrabold text-cyan shadow-[var(--shadow-glow-sm)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.detail}</p>
                  {s.loan && (
                    <span className="mt-3 inline-block rounded-full border border-space-700 bg-space-800 px-3 py-1 text-xs font-semibold text-cyan">
                      {loanName(s.loan)}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-space-700 bg-space-900">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className={h2}>Frequently asked questions</h2>
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      {/* Related */}
      {c.related.length > 0 && (
        <section className={`${container} py-16`} aria-labelledby="related">
          <h2 id="related" className="font-display text-xl font-extrabold">Related comparisons</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.related.map((r) =>
              getComparison(r.slug) ? (
                <li key={r.slug}>
                  <Link href={`/learn/compare/${r.slug}`} className="block rounded-2xl border border-space-700 bg-space-900 p-5 font-semibold hover:border-electric">
                    {r.title} <span className="text-cyan">→</span>
                  </Link>
                </li>
              ) : (
                <li key={r.slug} className="rounded-2xl border border-dashed border-space-700 p-5 text-muted">
                  {r.title} <span className="ml-2 text-xs uppercase tracking-wider">Coming soon</span>
                </li>
              ),
            )}
          </ul>
        </section>
      )}

      <CtaBand title={`Not sure which loan fits? Let's talk it through.`} />
    </>
  );
}
