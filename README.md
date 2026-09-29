# Moon Walk Fundings

Next.js (App Router) + TypeScript + Tailwind v4.

```bash
npm install
npm run dev    # http://localhost:3000
npm test       # calculator math checks
npm run build  # production build
```

## Editing content

All copy lives in `/content`. No component changes needed.

| To change… | Edit | Result |
|---|---|---|
| Phone, email, stats, pillars, tagline | `content/site.ts` | Updates header, footer, home, about |
| **Add a loan program** | add an entry to `loans` in `content/loans.ts` | New page at `/loans/<slug>`, added to nav, footer, home, learn hub, sitemap. Add a matching icon in `components/icons.tsx` (keyed by slug). |
| **Add a comparison page** | add an entry to `comparisons` in `content/comparisons.ts` | New page at `/learn/compare/<slug>`, added to nav, learn hub, sitemap. `sequence` (step diagram) is optional. `related` slugs that don't exist yet show as "Coming soon". |
| **Add / edit an FAQ** | the `faqs` array on any loan or comparison entry | FAQ accordion + FAQPage schema update automatically |
| Testimonials | `content/testimonials.ts` | Set `PLACEHOLDER = false` once reviews are real |
| Legal text | `content/legal.ts` | `/legal/privacy`, `/legal/terms`, `/legal/disclosures` |
| Quote form options | `content/quote.ts` | Form and server validation both read from here |

**Rule:** describe loans in qualitative terms only. Never publish rates, points, LTV %, or credit minimums.

## Hosting (GitHub Pages)

The site is a static export (`npm run build` → `/out`). Pushing to `main` runs `.github/workflows/deploy.yml`, which tests, builds, and publishes to GitHub Pages. `public/CNAME` sets the custom domain `moonwalkfundings.com`.

One-time repo setup:
1. Settings → Pages → Source: **GitHub Actions**
2. Settings → Pages → Custom domain: `moonwalkfundings.com`, then tick **Enforce HTTPS** once the certificate is ready

DNS (Namecheap → Advanced DNS): four `A` records on `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and `CNAME` `www` → `sj5809.github.io.` Leave the Mail Settings section alone.

## Leads

GitHub Pages can't send email, so the quote form posts to [FormSubmit](https://formsubmit.co), a free service that emails each request to janson@moonwalkfundings.com. No account needed.

**One-time activation:** the first time someone submits the form, FormSubmit emails janson@moonwalkfundings.com an activation link. Click it once; every request after that arrives as an email. (The first submission itself isn't delivered — submit a test request after activating.)

To use a different service (e.g. Formspree), set a repo variable `LEAD_ENDPOINT` (Settings → Secrets and variables → Actions → Variables) to its URL and re-run the deploy workflow.

## Before launch: placeholders and TODOs

Run `grep -rn "TODO" app components content` for the live list.

- [ ] **Lead delivery:** submit a test quote, click FormSubmit's activation email at janson@moonwalkfundings.com, then submit again to confirm
- [ ] **Testimonials:** replace the sample reviews with real ones and set `PLACEHOLDER = false`
- [ ] **Legal:** attorney review of Privacy, Terms, Disclosures, the footer disclaimer, and the SMS consent text
- [ ] **Licensing:** confirm any state-specific restrictions before advertising all 50 states, and add any required licensing disclosures
- [ ] **Logo:** optional designer polish of the wordmark and mark (`components/ui.tsx`, `public/brand/moon-mark.svg`)
- [ ] **Hero image:** high-res (2400px+) version of `public/brand/hero-scene.jpg`
- [ ] **Social share image:** 1200×630 `public/og.png`, referenced in `app/layout.tsx`
