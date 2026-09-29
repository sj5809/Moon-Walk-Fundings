import { test } from "node:test";
import assert from "node:assert/strict";
import { monthlyPayment, dscr, fixAndFlip } from "./calc.ts";

const near = (a, b) => assert.ok(Math.abs(a - b) < 0.01, `${a} != ${b}`);

test("monthlyPayment matches standard amortization", () => {
  near(monthlyPayment(100000, 6, 30), 599.55);
  near(monthlyPayment(12000, 0, 1), 1000);
});

test("dscr = rent / PITIA", () => {
  const r = dscr({ rent: 2000, taxesYr: 1200, insuranceYr: 1200, hoaMo: 0, loan: 100000, ratePct: 6, years: 30 });
  near(r.pitia, 799.55);
  near(r.ratio, 2000 / 799.55);
});

test("fixAndFlip totals, profit, ROI", () => {
  const r = fixAndFlip({ purchase: 100000, rehab: 50000, arv: 250000, loan: 120000, ratePct: 12, pointsPct: 2, months: 6, holdingMo: 500, buyClosing: 3000, sellPct: 6 });
  near(r.interest, 7200);
  near(r.totalCost, 100000 + 50000 + 3000 + 7200 + 2400 + 3000 + 15000);
  near(r.profit, 250000 - 180600);
  near(r.cashIn, 180600 - 15000 - 120000);
});
