import type { Metadata } from "next";
import { FlipCalculator } from "@/components/Calculators";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fix & Flip Calculator",
  description: "Estimate total project cost, profit, and ROI on a fix and flip. Enter your own numbers — results are estimates only.",
  alternates: { canonical: "/calculators/fix-and-flip" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Calculator" title="Fix & Flip Calculator" lead="Run the numbers on a flip before you make an offer: total cost, estimated profit, and return on the cash you put in." ctas={false} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FlipCalculator />
        <p className="mt-8 text-sm text-muted">How it works: Profit = after-repair value − purchase, rehab, financing, holding, closing, and selling costs.</p>
      </section>
      <CtaBand title="Like the numbers? Let's get you real terms." />
    </>
  );
}
