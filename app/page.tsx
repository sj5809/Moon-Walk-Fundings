import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { loans } from "@/content/loans";
import { PLACEHOLDER, testimonials } from "@/content/testimonials";
import { BrandIcon } from "@/components/icons";
import { CheckIcon, CtaBand, PhoneIcon } from "@/components/ui";
import heroScene from "@/public/brand/hero-scene.jpg";

const why = [
  { title: "25+ years in lending", text: "Decades of experience structuring investor loans — and knowing which deals make sense." },
  { title: "Talk directly to the owner", text: `Your call goes to ${site.owner}, not a call center or a loan-officer relay.` },
  { title: "LLC lending", text: "Close in your LLC or other business entity. These are business-purpose loans, built for investors." },
  { title: "Flexible options", text: "DSCR, Fix & Flip, and Ground-Up Construction — the right structure for each stage of a deal." },
  { title: "Streamlined process", text: "Clear checklists, fast answers, and no hoops that don't matter to your deal." },
  { title: "Nationwide", text: "Funding investors in all 50 states, from single-family rentals to new builds." },
];

const steps = [
  { title: "Tell us about your deal", text: "Call or send a quick quote request with the property, the plan, and your timeline." },
  { title: "Get your options", text: "We walk you through the loan that fits, current terms, and exactly what's needed to close." },
  { title: "Close and fund", text: "Send documents, we handle the rest, and you get funded so you can get to work." },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* TODO(launch): swap for a high-res (2400px+) export of the hero scene. Cropped from /brand/draft-hero.webp. */}
        <Image
          src={heroScene}
          alt="An astronaut walks across the lunar surface toward a house under construction, with Earth rising on the horizon"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover object-[35%_center]"
        />
        {/* Scrims keep the HTML text readable over the photo */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-space-950/60 via-space-950/75 to-space-950 md:bg-gradient-to-r md:from-space-950/95 md:via-space-950/55 md:to-space-950/10" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-space-950 to-transparent" />

        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Real estate investor loans · {site.statesServed}</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">
            Funding that takes your deal <span className="text-electric">further.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
            DSCR, Fix &amp; Flip, and Ground-Up Construction loans for investors — backed by 25+ years in lending and a
            real person on the other end of the phone.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/get-a-quote" className="btn btn-primary text-lg">{site.primaryCta} ›</Link>
            <a href={site.tel} className="btn btn-outline text-lg"><PhoneIcon /> Talk to Janson</a>
          </div>
        </div>
      </section>

      {/* Loan programs strip — mirrors the three-column row in the brand art */}
      <section aria-label="Loan programs" className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid divide-y divide-electric/30 md:grid-cols-3 md:divide-x md:divide-y-0">
          {loans.map((l) => (
            <li key={l.slug} className="reveal">
              <Link href={`/loans/${l.slug}`} className="group flex flex-col items-center px-6 py-8 text-center">
                <BrandIcon name={l.slug} className="h-14 w-14 text-cyan transition group-hover:scale-110" />
                <h2 className="mt-4 font-display text-xl font-extrabold uppercase tracking-wide">{l.name}</h2>
                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-muted">{l.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Stats */}
      <section aria-label="By the numbers" className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <dl className="grid gap-4 rounded-2xl border border-space-700 bg-space-900 p-6 sm:grid-cols-3">
          {site.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse text-center">
              <dt className="text-sm uppercase tracking-widest text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-electric">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Brand pillars */}
      <section aria-label="Why investors work with us" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-space-700">
          {site.pillars.map((p) => (
            <li key={p} className="flex flex-col items-center gap-3 text-center">
              <BrandIcon name={p} className="h-10 w-10 text-ink" />
              <span className="text-sm font-semibold uppercase tracking-[0.15em]">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why Moon Walk */}
      <section className="border-y border-space-700 bg-space-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Why investors choose Moon Walk</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <li key={w.title} className="reveal rounded-2xl border border-space-700 bg-space-950 p-6">
                <CheckIcon className="h-7 w-7" />
                <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">How it works</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-electric font-display text-lg font-extrabold text-cyan shadow-[var(--shadow-glow-sm)]">{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials: CSS scroll-snap carousel, swipeable, no JS */}
      <section className="border-t border-space-700 bg-space-900" aria-labelledby="reviews">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 id="reviews" className="font-display text-3xl font-extrabold sm:text-4xl">What investors say</h2>
          <ul className="-mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6" tabIndex={0} aria-label="Reviews — scroll sideways for more">
            {testimonials.map((t, i) => (
              <li key={i} className="w-[85%] shrink-0 snap-start rounded-2xl border border-space-700 bg-space-950 p-6 sm:w-[45%] lg:w-[31%]">
                {PLACEHOLDER && <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-semibold text-amber-300">Sample review — replace before launch</span>}
                <blockquote className="mt-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
