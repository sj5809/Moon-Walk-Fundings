// Comparison pages live at /learn/compare/[slug]. Add an entry here to publish a new one.
// Rule: qualitative language only — never publish rates, points, LTV %, or credit minimums.

export type Faq = { q: string; a: string };

export type Comparison = {
  slug: string;
  title: string; // H1
  shortTitle: string; // nav + cards
  metaTitle: string;
  metaDescription: string;
  a: { name: string; href?: string }; // left column; href only for products we offer
  b: { name: string; href?: string }; // right column
  takeaway: string; // one-line core difference, shown in hero
  rows: { label: string; a: string; b: string }[];
  chooseA: string[];
  chooseB: string[];
  /** Optional "use them together" step diagram. `loan` tags the step with column a or b. */
  sequence?: { title: string; intro: string; steps: { name: string; detail: string; loan?: "a" | "b" }[] };
  faqs: Faq[];
  /** Other comparisons; slugs without an entry here render as "coming soon". */
  related: { slug: string; title: string }[];
};

export const comparisons: Comparison[] = [
  {
    slug: "dscr-vs-fix-and-flip",
    shortTitle: "DSCR vs Fix & Flip",
    title: "DSCR vs Fix & Flip Loans",
    metaTitle: "DSCR vs Fix & Flip Loans: Which Fits Your Deal?",
    metaDescription:
      "Compare DSCR rental loans and Fix & Flip loans side by side — purpose, term, payments, rehab funding, qualifying, and exit strategy — and learn how investors use both with BRRRR.",
    a: { name: "DSCR Loan", href: "/loans/dscr" },
    b: { name: "Fix & Flip Loan", href: "/loans/fix-and-flip" },
    takeaway:
      "A Fix & Flip loan is short-term money to buy and renovate a property; a DSCR loan is long-term financing for a rental that qualifies on the property's income — not your paycheck.",
    rows: [
      {
        label: "Purpose",
        a: "Buy or refinance a rental property you plan to hold for the long run.",
        b: "Buy a property, renovate it, then sell it or refinance it.",
      },
      {
        label: "Loan Term",
        a: "Long-term, similar in length to a traditional mortgage.",
        b: "Short-term — measured in months, not years.",
      },
      {
        label: "Payment Structure",
        a: "Regular monthly payments, typically amortizing, with fixed or adjustable options.",
        b: "Commonly interest-only during the project, with the balance paid off at sale or refinance.",
      },
      {
        label: "Rehab Funding",
        a: "Generally not included — the property should already be in rentable shape.",
        b: "Often built in, with renovation funds released in draws as work is completed.",
      },
      {
        label: "Property Condition",
        a: "Rent-ready or already leased.",
        b: "Distressed, dated, or in need of significant work.",
      },
      {
        label: "How You Qualify",
        a: "Mainly on the property's rental income versus its monthly payment. Personal income documents usually aren't required.",
        b: "Mainly on the deal — purchase price, scope of work, and after-repair value — along with your experience and plan.",
      },
      {
        label: "Speed to Close",
        a: "A steady, well-documented process built around the property's income and appraisal.",
        b: "Built for speed so you can compete for time-sensitive and off-market deals.",
      },
      {
        label: "Exit Strategy",
        a: "None required — hold, collect rent, and sell or refinance on your own timeline.",
        b: "Planned upfront: sell the finished property or refinance into long-term financing, often a DSCR loan.",
      },
    ],
    chooseA: [
      "The property is ready to rent or already has a tenant",
      "You'd rather qualify on rental income than on tax returns",
      "You're building a long-term rental portfolio",
      "You want to close in an LLC or other business entity",
      "You want predictable monthly payments for the long haul",
    ],
    chooseB: [
      "The property needs real work before it can sell or rent",
      "You want renovation costs financed alongside the purchase",
      "You plan to sell or refinance once the rehab is done",
      "Closing quickly is what wins you the deal",
      "You have a clear scope of work and exit plan",
    ],
    sequence: {
      title: "How investors use both: the BRRRR method",
      intro:
        "You don't always have to pick one. Many investors start a property on a Fix & Flip loan, then refinance into a DSCR loan once it's renovated and rented — pulling capital back out to do it again.",
      steps: [
        { name: "Buy", detail: "Acquire a property below its potential value.", loan: "b" },
        { name: "Rehab", detail: "Renovate using draw-based rehab funds.", loan: "b" },
        { name: "Rent", detail: "Place a qualified tenant and stabilize income." },
        { name: "Refinance", detail: "Pay off the short-term loan with long-term DSCR financing.", loan: "a" },
        { name: "Repeat", detail: "Put recovered capital toward the next deal." },
      ],
    },
    faqs: [
      {
        q: "What does DSCR mean?",
        a: "DSCR stands for Debt Service Coverage Ratio. It compares a property's rental income to its monthly debt payment — principal, interest, taxes, insurance, and any HOA dues. Because the loan is qualified on the property's cash flow, you typically don't need to show personal income.",
      },
      {
        q: "Can I use a DSCR loan on a property that needs repairs?",
        a: "DSCR loans are designed for properties that are ready to rent. If a property needs substantial work, a Fix & Flip loan is usually the better starting point — then you can refinance into a DSCR loan once it's renovated and leased.",
      },
      {
        q: "Do I need experience to get a Fix & Flip loan?",
        a: "Experience helps and can affect your terms, but newer investors can still qualify with a solid deal, a realistic budget, and a clear plan. Call us and we'll talk through where you stand.",
      },
      {
        q: "Can I close either loan in an LLC?",
        a: "Yes. Both are business-purpose loans for investment properties, and closing in an LLC or other entity is common.",
      },
      {
        q: "How do I move from a Fix & Flip loan into a DSCR loan?",
        a: "Once the rehab is finished and a tenant is in place, you apply for a DSCR loan based on the property's updated value and rent. The new loan pays off the short-term Fix & Flip loan. It's smoothest when the refinance is planned from day one.",
      },
      {
        q: "Does Moon Walk Fundings offer both?",
        a: "Yes — Fix & Flip for the rehab, DSCR for the hold. You work with one lender and one point of contact from purchase to refinance. Call Janson directly to talk through your deal.",
      },
    ],
    related: [
      { slug: "fix-and-flip-vs-ground-up-construction", title: "Fix & Flip vs Ground-Up Construction" },
      { slug: "dscr-vs-conventional", title: "DSCR vs Conventional Mortgage" },
    ],
  },
  {
    slug: "fix-and-flip-vs-ground-up-construction",
    shortTitle: "Fix & Flip vs Ground-Up",
    title: "Fix & Flip vs Ground-Up Construction Loans",
    metaTitle: "Fix & Flip vs Ground-Up Construction Loans",
    metaDescription:
      "Renovate an existing property or build from scratch? Compare Fix & Flip and Ground-Up Construction loans side by side — term, draws, qualifying, timeline, and exit.",
    a: { name: "Fix & Flip Loan", href: "/loans/fix-and-flip" },
    b: { name: "Construction Loan", href: "/loans/ground-up-construction" },
    takeaway:
      "Both are short-term, draw-based loans — the difference is whether you're improving a building that already exists or putting up a new one from bare ground.",
    rows: [
      { label: "Purpose", a: "Buy an existing property and renovate it.", b: "Build a new property on land you own or are buying." },
      { label: "Loan Term", a: "Short-term — sized to a renovation timeline.", b: "Short-term, but typically longer than a rehab to cover the full build." },
      { label: "Payment Structure", a: "Commonly interest-only, repaid at sale or refinance.", b: "Commonly interest-only on funds drawn, repaid at sale or refinance." },
      { label: "Rehab Funding", a: "Renovation funds released in draws as work is completed.", b: "Construction funds released in draws as build milestones are hit." },
      { label: "Property Condition", a: "An existing structure — distressed, dated, or needing work.", b: "Vacant land, a teardown, or a lot ready for new construction." },
      { label: "How You Qualify", a: "Purchase price, scope of work, after-repair value, experience, and exit plan.", b: "Plans, permits, budget, builder experience, projected completed value, and exit plan." },
      { label: "Speed to Close", a: "Built for speed to win time-sensitive purchases.", b: "Paced by plans and permits being ready — preparation matters most." },
      { label: "Exit Strategy", a: "Sell the finished property or refinance into a long-term loan.", b: "Sell the completed build or refinance into a long-term loan such as DSCR." },
    ],
    chooseA: [
      "You found an existing property priced below its potential",
      "The work is cosmetic to heavy rehab, not a full rebuild",
      "You want the shortest path from purchase to sale or rent",
      "Speed to close is what wins you the deal",
    ],
    chooseB: [
      "You own or are buying land, a lot, or a teardown",
      "You have plans and permits in place — or close to it",
      "You're working with an experienced, licensed general contractor",
      "New construction makes more sense than renovating what's there",
    ],
    faqs: [
      {
        q: "Which one is riskier?",
        a: "Ground-up projects usually carry more moving parts — permits, longer timelines, more trades — which is why lenders look closely at plans, budget, and builder experience. A rehab starts with a structure already standing.",
      },
      {
        q: "What if my rehab turns into a near-rebuild?",
        a: "If the scope involves major structural work or additions, it can start to look more like construction. Call us early and we'll help you figure out which structure fits the project.",
      },
      {
        q: "Do both loans use draws?",
        a: "Yes. In both cases funds for the work are released in stages as completed work is verified.",
      },
      {
        q: "Can I refinance into a rental loan afterward?",
        a: "Yes. Whether you renovated or built, you can refinance a finished, rented property into a long-term DSCR loan.",
      },
      {
        q: "Does Moon Walk Fundings offer both?",
        a: "Yes — Fix & Flip for renovations and Ground-Up Construction for new builds, plus DSCR if you decide to hold. Call Janson directly to talk through your project.",
      },
    ],
    related: [
      { slug: "dscr-vs-fix-and-flip", title: "DSCR vs Fix & Flip" },
      { slug: "dscr-vs-conventional", title: "DSCR vs Conventional Mortgage" },
    ],
  },
  {
    slug: "dscr-vs-conventional",
    shortTitle: "DSCR vs Conventional",
    title: "DSCR Loans vs Conventional Mortgages",
    metaTitle: "DSCR Loan vs Conventional Mortgage for Rental Property",
    metaDescription:
      "Should you finance a rental with a DSCR loan or a conventional mortgage? Compare how you qualify, documentation, entity ownership, portfolio limits, and speed.",
    a: { name: "DSCR Loan", href: "/loans/dscr" },
    b: { name: "Conventional Mortgage" },
    takeaway:
      "A conventional mortgage qualifies you on your personal income; a DSCR loan qualifies the rental on its own income — which is why investors scaling a portfolio often switch.",
    rows: [
      { label: "Purpose", a: "Business-purpose financing built specifically for investment property.", b: "Consumer financing for primary homes, second homes, and some rentals." },
      { label: "Loan Term", a: "Long-term, similar in length to a traditional mortgage.", b: "Long-term, with standardized terms." },
      { label: "Payment Structure", a: "Monthly payments with fixed or adjustable options.", b: "Monthly payments with fixed or adjustable options." },
      { label: "Rehab Funding", a: "Not included — pair with a Fix & Flip loan if the property needs work.", b: "Generally not included outside of specialized renovation programs." },
      { label: "Property Condition", a: "Rent-ready or already leased.", b: "Must meet agency property standards." },
      { label: "How You Qualify", a: "Mainly on the property's rent versus its payment. Personal income documents usually aren't required.", b: "On your personal income, employment, and debt-to-income ratio, with full documentation." },
      { label: "Speed to Close", a: "A streamlined, property-focused process.", b: "Can be slower due to full personal income verification." },
      { label: "Exit Strategy", a: "Hold, sell, or refinance on your timeline. Can close in an LLC.", b: "Hold, sell, or refinance. Usually closed in your personal name, and agency rules cap how many financed properties you can have." },
    ],
    chooseA: [
      "You're self-employed or your tax returns understate your income",
      "You want to close in an LLC or other entity",
      "You're growing past conventional limits on financed properties",
      "You want qualifying to focus on the property's cash flow",
    ],
    chooseB: [
      "You're buying a home you'll live in",
      "You have W-2 income that documents easily",
      "You only plan to own a few financed properties",
      "You're comfortable holding property in your personal name",
    ],
    faqs: [
      {
        q: "Is a DSCR loan harder to get than a conventional mortgage?",
        a: "Not necessarily — it's different. Instead of your personal income and debt-to-income ratio, the focus is the property's rental income compared to its payment, plus your credit and reserves.",
      },
      {
        q: "Can I use a DSCR loan for my primary residence?",
        a: "No. DSCR loans are business-purpose loans for non-owner-occupied investment properties only.",
      },
      {
        q: "Why do investors switch from conventional to DSCR?",
        a: "Common reasons are reaching the cap on conventionally financed properties, wanting to hold rentals in an LLC, or having income that's hard to document on paper.",
      },
      {
        q: "Can I refinance a conventional rental loan into a DSCR loan?",
        a: "Often, yes — for example, to move a property into an LLC or to pull cash out based on the property's income. Call us to talk through your situation.",
      },
      {
        q: "Does Moon Walk Fundings offer both?",
        a: "We focus on business-purpose investor loans — DSCR, Fix & Flip, and Ground-Up Construction. We don't offer conventional owner-occupied mortgages, but we're happy to talk through whether DSCR fits your rental.",
      },
    ],
    related: [
      { slug: "dscr-vs-fix-and-flip", title: "DSCR vs Fix & Flip" },
      { slug: "fix-and-flip-vs-ground-up-construction", title: "Fix & Flip vs Ground-Up Construction" },
    ],
  },
];

export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
