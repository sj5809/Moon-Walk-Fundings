import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/content/comparisons";
import { loans } from "@/content/loans";
import { calculatorLinks } from "@/content/site";
import { BrandIcon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Learning Center: Investor Loan Guides & Comparisons",
  description: "Plain-English guides to DSCR, Fix & Flip, and Ground-Up Construction loans, side-by-side loan comparisons, and free investor calculators.",
  alternates: { canonical: "/learn" },
};

const card = "block h-full rounded-2xl border border-space-700 bg-space-900 p-6 transition hover:border-electric";
const h2 = "font-display text-2xl font-extrabold sm:text-3xl";

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Center"
        title="Know your options before you make an offer."
        lead="Straightforward guides to the loans investors use most — what they're for, how they compare, and how to run the numbers."
        ctas={false}
      />
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-20">
        <section aria-labelledby="compare">
          <h2 id="compare" className={h2}>Loan comparisons</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {comparisons.map((c) => (
              <li key={c.slug} className="reveal">
                <Link href={`/learn/compare/${c.slug}`} className={card}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Compare</span>
                  <h3 className="mt-2 font-display text-lg font-bold">{c.shortTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.takeaway}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="guides">
          <h2 id="guides" className={h2}>Loan program guides</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {loans.map((l) => (
              <li key={l.slug} className="reveal">
                <Link href={`/loans/${l.slug}`} className={card}>
                  <BrandIcon name={l.slug} className="h-10 w-10 text-cyan" />
                  <h3 className="mt-4 font-display text-lg font-bold">{l.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{l.headline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="calcs">
          <h2 id="calcs" className={h2}>Calculators</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {calculatorLinks.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={card}>
                  <h3 className="font-display text-lg font-bold">{c.label} →</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
