import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLoan, loans } from "@/content/loans";
import { getComparison } from "@/content/comparisons";
import { site } from "@/content/site";
import { BrandIcon } from "@/components/icons";
import { CheckIcon, CtaBand, Faq, faqSchema, JsonLd, PageHero, PhoneIcon } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return loans.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/loans/[slug]">): Promise<Metadata> {
  const l = getLoan((await params).slug);
  if (!l) return {};
  const path = `/loans/${l.slug}`;
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: l.metaTitle, description: l.metaDescription, url: path },
  };
}

const container = "mx-auto max-w-6xl px-4 sm:px-6";
const h2 = "font-display text-2xl font-extrabold sm:text-3xl";

export default async function LoanPage({ params }: PageProps<"/loans/[slug]">) {
  const l = getLoan((await params).slug);
  if (!l) notFound();
  const compare = l.compareSlug ? getComparison(l.compareSlug) : undefined;

  return (
    <>
      <JsonLd data={faqSchema(l.faqs)} />
      <PageHero eyebrow={l.name} title={l.headline} lead={l.overview} />

      {/* Who it's for + requirements */}
      <section className={`${container} grid gap-6 py-16 sm:py-20 lg:grid-cols-2`}>
        <div className="reveal rounded-2xl border border-space-700 bg-space-900 p-6 sm:p-8">
          <BrandIcon name={l.slug} className="h-12 w-12 text-cyan" />
          <h2 className={`${h2} mt-4`}>Who it&apos;s for</h2>
          <ul className="mt-6 space-y-4">
            {l.whoFor.map((w) => <li key={w} className="flex gap-3 leading-relaxed"><CheckIcon />{w}</li>)}
          </ul>
        </div>
        <div className="reveal rounded-2xl border border-space-700 bg-space-900 p-6 sm:p-8">
          <h2 className={h2}>What you&apos;ll typically need</h2>
          <ul className="mt-6 space-y-4">
            {l.requirements.map((r) => <li key={r} className="flex gap-3 leading-relaxed"><CheckIcon />{r}</li>)}
          </ul>
          <p className="mt-6 text-sm text-muted">Every deal is different — we&apos;ll tell you exactly what yours needs.</p>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-y border-space-700 bg-space-900">
        <div className={`${container} py-16 sm:py-20`}>
          <h2 className={h2}>What to expect</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {l.expect.map((e) => (
              <div key={e.label} className="rounded-2xl border border-space-700 bg-space-950 p-6">
                <dt className="text-xs font-semibold uppercase tracking-widest text-cyan">{e.label}</dt>
                <dd className="mt-2 leading-relaxed text-ink">{e.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-electric/40 bg-electric/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="leading-relaxed">
              <span className="font-display font-bold">Call for current terms.</span>{" "}
              <span className="text-muted">Terms depend on the property, the deal, and the market — we&apos;ll give you real numbers for your scenario.</span>
            </p>
            <a href={site.tel} className="btn btn-outline shrink-0"><PhoneIcon /> {site.phone}</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className={h2}>{l.name} FAQ</h2>
        <div className="mt-8"><Faq items={l.faqs} /></div>
        {compare && (
          <Link href={`/learn/compare/${compare.slug}`} className="mt-8 block rounded-2xl border border-space-700 bg-space-900 p-5 hover:border-electric">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Compare</span>
            <span className="mt-1 block font-display font-bold">{compare.title} →</span>
          </Link>
        )}
      </section>

      <CtaBand title={`Ready to talk about your ${l.name.replace(/ Loans$/, "")} deal?`} />
    </>
  );
}
