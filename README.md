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

GitHub Pages can't run server code, so the quote form posts directly to a form service such as [Formspree](https://formspree.io), which emails each request to janson@moonwalkfundings.com.

1. Create a Formspree form that sends to janson@moonwalkfundings.com and copy its URL (`https://formspree.io/f/xxxxxxx`).
2. In GitHub: Settings → Secrets and variables → Actions → **Variables** → add `LEAD_ENDPOINT` with that URL.
3. Re-run the deploy workflow (Actions → Deploy to GitHub Pages → Run workflow).

Until `LEAD_ENDPOINT` is set, the form shows a message asking people to call or email instead. For local testing: `NEXT_PUBLIC_LEAD_ENDPOINT=https://formspree.io/f/xxxxxxx npm run dev`.

## Before launch: placeholders and TODOs

Run `grep -rn "TODO" app components content` for the live list.

- [ ] **Lead delivery:** create the Formspree form and set the `LEAD_ENDPOINT` repo variable (see Leads above)
- [ ] **Testimonials:** replace the sample reviews with real ones and set `PLACEHOLDER = false`
- [ ] **Legal:** attorney review of Privacy, Terms, Disclosures, the footer disclaimer, and the SMS consent text
- [ ] **Licensing:** confirm any state-specific restrictions before advertising all 50 states, and add any required licensing disclosures
- [ ] **Logo:** optional designer polish of the wordmark and mark (`components/ui.tsx`, `public/brand/moon-mark.svg`)
- [ ] **Hero image:** high-res (2400px+) version of `public/brand/hero-scene.jpg`
- [ ] **Social share image:** 1200×630 `public/og.png`, referenced in `app/layout.tsx`
