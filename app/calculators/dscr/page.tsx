import type { Metadata } from "next";
import { DscrCalculator } from "@/components/Calculators";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "DSCR Calculator",
  description: "Estimate the monthly payment and debt service coverage ratio (DSCR) on a rental property. Enter your own numbers — results are estimates only.",
  alternates: { canonical: "/calculators/dscr" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Calculator" title="DSCR Calculator" lead="See whether a rental's income covers its monthly payment. Enter rent, expenses, and your own loan assumptions." ctas={false} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <DscrCalculator />
        <p className="mt-8 text-sm text-muted">How it works: Rent ÷ total monthly payment (principal, interest, taxes, insurance, HOA) = DSCR.</p>
      </section>
      <CtaBand title="Like the numbers? Let's get you real terms." />
    </>
  );
}
