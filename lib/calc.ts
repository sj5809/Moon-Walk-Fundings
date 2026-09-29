// Pure calculator math. Kept free of TS-only syntax so `node --test` can run it directly.

/** Monthly principal + interest on a fully amortizing loan. */
export function monthlyPayment(loan: number, annualRatePct: number, years: number): number {
  const n = years * 12;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return loan / n;
  return (loan * r) / (1 - Math.pow(1 + r, -n));
}

export function dscr(i: { rent: number; taxesYr: number; insuranceYr: number; hoaMo: number; loan: number; ratePct: number; years: number }) {
  const pi = monthlyPayment(i.loan, i.ratePct, i.years);
  const pitia = pi + i.taxesYr / 12 + i.insuranceYr / 12 + i.hoaMo;
  return { pi, pitia, ratio: i.rent / pitia, cashFlow: i.rent - pitia };
}

export function fixAndFlip(i: {
  purchase: number; rehab: number; arv: number; loan: number; ratePct: number; pointsPct: number;
  months: number; holdingMo: number; buyClosing: number; sellPct: number;
}) {
  const interest = i.loan * (i.ratePct / 100 / 12) * i.months; // interest-only
  const points = i.loan * (i.pointsPct / 100);
  const holding = i.holdingMo * i.months;
  const selling = i.arv * (i.sellPct / 100);
  const totalCost = i.purchase + i.rehab + i.buyClosing + interest + points + holding + selling;
  const profit = i.arv - totalCost;
  const cashIn = Math.max(totalCost - selling - i.loan, 0); // out of pocket before sale
  return { interest, points, holding, selling, totalCost, profit, cashIn, roiPct: cashIn ? (profit / cashIn) * 100 : 0 };
}
