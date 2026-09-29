"use client";

import { useState } from "react";
import { dscr, fixAndFlip } from "@/lib/calc";

type Field = { key: string; label: string; unit: "$" | "%" | "yrs" | "mo"; optional?: boolean; hint?: string };

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Renders inputs for `fields` and passes parsed numbers to `children` once every required field is filled. */
function Calculator({ fields, children }: { fields: Field[]; children: (v: Record<string, number>) => React.ReactNode }) {
  const [raw, setRaw] = useState<Record<string, string>>({});
  const values = Object.fromEntries(fields.map((f) => [f.key, Number(raw[f.key] || 0)]));
  const ready = fields.every((f) => f.optional || (raw[f.key] ?? "") !== "");

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <form className="grid gap-5 rounded-2xl border border-space-700 bg-space-900 p-6 sm:grid-cols-2 sm:p-8" onSubmit={(e) => e.preventDefault()}>
        {fields.map((f) => (
          <label key={f.key} className="block">
            <span className="text-sm font-semibold">
              {f.label} {f.optional && <span className="font-normal text-muted">(optional)</span>}
            </span>
            <span className="mt-2 flex items-center rounded-xl border border-space-700 bg-space-950 focus-within:border-electric focus-within:ring-2 focus-within:ring-electric/30">
              {f.unit === "$" && <span className="pl-3 text-muted" aria-hidden>$</span>}
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                value={raw[f.key] ?? ""}
                onChange={(e) => setRaw({ ...raw, [f.key]: e.target.value })}
                className="w-full bg-transparent px-3 py-3 text-ink outline-none [appearance:textfield]"
              />
              {f.unit !== "$" && <span className="pr-3 text-sm text-muted" aria-hidden>{f.unit}</span>}
            </span>
            {f.hint && <span className="mt-1 block text-xs text-muted">{f.hint}</span>}
          </label>
        ))}
      </form>
      <div className="lg:sticky lg:top-24 lg:self-start" aria-live="polite">
        <div className="rounded-2xl border border-electric/40 bg-space-900 p-6 shadow-[var(--shadow-glow-sm)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">Estimated results</p>
          {ready ? children(values) : <p className="mt-4 text-muted">Fill in the required fields to see your estimate.</p>}
          <p className="mt-6 border-t border-space-700 pt-4 text-xs leading-relaxed text-muted">
            Estimates only, based entirely on the numbers you enter. Not a loan offer, rate quote, or commitment to lend.
            Call for current terms on your deal.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 py-2 ${strong ? "text-lg" : "text-sm"}`}>
      <dt className={strong ? "font-semibold" : "text-muted"}>{label}</dt>
      <dd className={`font-display font-bold tabular-nums ${strong ? "text-2xl text-electric" : ""}`}>{value}</dd>
    </div>
  );
}

export function DscrCalculator() {
  return (
    <Calculator
      fields={[
        { key: "rent", label: "Monthly rent", unit: "$" },
        { key: "taxesYr", label: "Annual property taxes", unit: "$" },
        { key: "insuranceYr", label: "Annual insurance", unit: "$" },
        { key: "hoaMo", label: "Monthly HOA", unit: "$", optional: true },
        { key: "loan", label: "Loan amount", unit: "$" },
        { key: "ratePct", label: "Interest rate", unit: "%", hint: "Enter your own rate — call us for current terms." },
        { key: "years", label: "Loan term", unit: "yrs" },
      ]}
    >
      {(v) => {
        if (v.years <= 0) return <p className="mt-4 text-muted">Loan term must be greater than zero.</p>;
        const r = dscr({ rent: v.rent, taxesYr: v.taxesYr, insuranceYr: v.insuranceYr, hoaMo: v.hoaMo, loan: v.loan, ratePct: v.ratePct, years: v.years });
        return (
          <>
            <dl className="mt-4 divide-y divide-space-700">
              <Row label="DSCR" value={Number.isFinite(r.ratio) ? r.ratio.toFixed(2) : "—"} strong />
              <Row label="Principal & interest" value={usd.format(r.pi)} />
              <Row label="Total monthly payment (PITIA)" value={usd.format(r.pitia)} />
              <Row label="Monthly cash flow" value={usd.format(r.cashFlow)} />
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {r.ratio >= 1
                ? "Above 1.00: the rent covers the full monthly payment."
                : "Below 1.00: the rent doesn't fully cover the monthly payment."}
            </p>
          </>
        );
      }}
    </Calculator>
  );
}

export function FlipCalculator() {
  return (
    <Calculator
      fields={[
        { key: "purchase", label: "Purchase price", unit: "$" },
        { key: "rehab", label: "Rehab budget", unit: "$" },
        { key: "arv", label: "After-repair value (ARV)", unit: "$" },
        { key: "loan", label: "Loan amount", unit: "$" },
        { key: "ratePct", label: "Interest rate", unit: "%", hint: "Interest-only. Enter your own rate." },
        { key: "pointsPct", label: "Lender points / fees", unit: "%", optional: true, hint: "As a % of the loan amount." },
        { key: "months", label: "Holding period", unit: "mo" },
        { key: "holdingMo", label: "Monthly holding costs", unit: "$", optional: true, hint: "Taxes, insurance, utilities." },
        { key: "buyClosing", label: "Closing costs (purchase)", unit: "$", optional: true },
        { key: "sellPct", label: "Selling costs", unit: "%", optional: true, hint: "Commissions and seller closing costs, as a % of ARV." },
      ]}
    >
      {(v) => {
        const r = fixAndFlip({ purchase: v.purchase, rehab: v.rehab, arv: v.arv, loan: v.loan, ratePct: v.ratePct, pointsPct: v.pointsPct, months: v.months, holdingMo: v.holdingMo, buyClosing: v.buyClosing, sellPct: v.sellPct });
        return (
          <dl className="mt-4 divide-y divide-space-700">
            <Row label="Estimated profit" value={usd.format(r.profit)} strong />
            <Row label="ROI on cash invested" value={r.cashIn ? `${r.roiPct.toFixed(1)}%` : "—"} />
            <Row label="Total project cost" value={usd.format(r.totalCost)} />
            <Row label="Cash invested (est.)" value={usd.format(r.cashIn)} />
            <Row label="Interest cost" value={usd.format(r.interest)} />
            <Row label="Points / fees" value={usd.format(r.points)} />
            <Row label="Holding costs" value={usd.format(r.holding)} />
            <Row label="Selling costs" value={usd.format(r.selling)} />
          </dl>
        );
      }}
    </Calculator>
  );
}
