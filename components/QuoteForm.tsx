"use client";

import { useRef, useState } from "react";
import { consentText, entity, experience, loanTypes, propertyTypes, states, timelines, transactions } from "@/content/quote";
import { site } from "@/content/site";

const steps = ["Loan type", "Property", "Experience", "Contact"];
const input = "mt-2 w-full rounded-xl border border-space-700 bg-space-950 px-3 py-3 text-ink outline-none focus:border-electric focus:ring-2 focus:ring-electric/30";
const label = "block text-sm font-semibold";

function Choices({ name, options, required = true }: { name: string; options: string[]; required?: boolean }) {
  return (
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      {options.map((o) => (
        <label key={o} className="flex cursor-pointer items-center gap-3 rounded-xl border border-space-700 bg-space-950 p-4 has-[:checked]:border-electric has-[:checked]:bg-electric/10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-cyan">
          <input type="radio" name={name} value={o} required={required} className="accent-[#1e90ff]" />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );
}

function Select({ name, text, options, required = true }: { name: string; text: string; options: string[]; required?: boolean }) {
  return (
    <label className={label}>
      {text}
      <select name={name} required={required} defaultValue="" className={input}>
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const form = useRef<HTMLFormElement>(null);

  // Native validation, one step at a time: report the first invalid field in the visible fieldset.
  const stepValid = () =>
    Array.from(form.current!.querySelectorAll<HTMLFieldSetElement>("fieldset")[step].elements).every(
      (el) => !("reportValidity" in el) || (el as HTMLInputElement).reportValidity(),
    );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!stepValid()) return;
    if (step < steps.length - 1) return setStep(step + 1);
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        access_key: site.web3formsKey,
        subject: `New quote request: ${data.loanType} — ${data.firstName} ${data.lastName}`,
        from_name: site.name,
        replyto: data.email,
      }),
    }).catch(() => null);
    const json = res ? await res.json().catch(() => null) : null;
    setStatus(json?.success ? "done" : "error");
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-electric/40 bg-space-900 p-8 text-center shadow-[var(--shadow-glow-sm)]">
        <h2 className="font-display text-2xl font-extrabold">Thanks — we&apos;ve got your deal.</h2>
        <p className="mt-3 text-muted">
          {site.owner} will reach out shortly. Need to talk sooner? Call{" "}
          <a href={site.tel} className="font-semibold text-cyan hover:underline">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={onSubmit} noValidate className="rounded-2xl border border-space-700 bg-space-900 p-6 sm:p-8">
      <ol className="flex gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s} className="flex-1" aria-current={i === step ? "step" : undefined}>
            <span className={`block h-1.5 rounded-full ${i <= step ? "bg-gradient-to-r from-electric to-cyan" : "bg-space-700"}`} />
            <span className={`mt-2 hidden text-xs sm:block ${i === step ? "text-ink" : "text-muted"}`}>{s}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-muted sm:hidden">Step {step + 1} of {steps.length}: {steps[step]}</p>

      {/* All steps stay mounted (hidden) so FormData collects every answer on submit. */}
      <fieldset hidden={step !== 0} className="mt-6">
        <legend className="font-display text-xl font-bold">What kind of loan are you looking for?</legend>
        <Choices name="loanType" options={loanTypes} />
      </fieldset>

      <fieldset hidden={step !== 1} className="mt-6 grid gap-5 sm:grid-cols-2">
        <legend className="mb-2 font-display text-xl font-bold">Tell us about the property</legend>
        <Select name="transaction" text="Purchase or refinance?" options={transactions} />
        <Select name="propertyType" text="Property type" options={propertyTypes} />
        <Select name="state" text="Property state" options={states} />
        <label className={label}>City <span className="font-normal text-muted">(optional)</span><input name="city" autoComplete="off" className={input} /></label>
        <label className={label}>Purchase price or estimated value<input name="value" type="number" min="0" inputMode="numeric" required className={input} /></label>
        <label className={label}>Rehab / construction budget <span className="font-normal text-muted">(optional)</span><input name="budget" type="number" min="0" inputMode="numeric" className={input} /></label>
        <Select name="timeline" text="Timeline" options={timelines} />
      </fieldset>

      <fieldset hidden={step !== 2} className="mt-6">
        <legend className="font-display text-xl font-bold">Your investing experience</legend>
        <p className="mt-4 text-sm font-semibold">Deals completed in the last few years</p>
        <Choices name="experience" options={experience} />
        <p className="mt-6 text-sm font-semibold">Will you borrow in an LLC or other entity?</p>
        <Choices name="entity" options={entity} />
      </fieldset>

      <fieldset hidden={step !== 3} className="mt-6 grid gap-5 sm:grid-cols-2">
        <legend className="mb-2 font-display text-xl font-bold">How can we reach you?</legend>
        <label className={label}>First name<input name="firstName" autoComplete="given-name" required maxLength={80} className={input} /></label>
        <label className={label}>Last name<input name="lastName" autoComplete="family-name" required maxLength={80} className={input} /></label>
        <label className={label}>Email<input name="email" type="email" autoComplete="email" required maxLength={200} className={input} /></label>
        <label className={label}>Phone<input name="phone" type="tel" autoComplete="tel" required pattern="[0-9()+\-. ]{10,20}" title="Enter a 10-digit phone number" className={input} /></label>
        <label className={`${label} sm:col-span-2`}>Anything else about the deal? <span className="font-normal text-muted">(optional)</span><textarea name="notes" rows={3} maxLength={2000} className={input} /></label>
        <label className="flex gap-3 text-xs leading-relaxed text-muted sm:col-span-2">
          <input type="checkbox" name="consent" value="yes" className="mt-0.5 h-4 w-4 shrink-0 accent-[#1e90ff]" />
          {consentText}
        </label>
        {/* Honeypot (Web3Forms' botcheck): hidden from people, bots tick it. */}
        <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden className="hidden" />
      </fieldset>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">
          Something went wrong sending your request. Please call {site.phone} or email {site.email}.
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="btn btn-outline">← Back</button>
        ) : <span />}
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {step < steps.length - 1 ? "Next →" : status === "sending" ? "Sending…" : "Get My Quote"}
        </button>
      </div>
    </form>
  );
}
