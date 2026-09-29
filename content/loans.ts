// Loan programs live at /loans/[slug]. Add an entry here to publish a new one.
// Rule: qualitative language only — never publish rates, points, LTV %, or credit minimums.
import type { Faq } from "./comparisons";

export type Loan = {
  slug: string; // also picks the icon in components/icons.tsx
  name: string;
  blurb: string; // short line used on cards
  metaTitle: string;
  metaDescription: string;
  headline: string;
  overview: string;
  whoFor: string[];
  expect: { label: string; text: string }[];
  requirements: string[];
  faqs: Faq[];
  compareSlug?: string; // featured comparison page
};

export const loans: Loan[] = [
  {
    slug: "dscr",
    name: "DSCR Loans",
    blurb: "Investment property financing",
    metaTitle: "DSCR Loans for Rental Property Investors",
    metaDescription:
      "Long-term rental property financing that qualifies on the property's income, not your tax returns. DSCR loans for investors in all 50 states from Moon Walk Fundings.",
    headline: "Rental financing that qualifies on the property, not your paycheck.",
    overview:
      "A DSCR (Debt Service Coverage Ratio) loan is long-term financing for investment property. Instead of digging through your tax returns and pay stubs, we look mainly at whether the property's rent covers its monthly payment. That makes it a natural fit for self-employed investors, growing portfolios, and anyone refinancing a finished rehab into a long-term hold.",
    whoFor: [
      "Investors buying single-family or small multifamily rentals",
      "Self-employed borrowers whose tax returns don't tell the full story",
      "BRRRR investors refinancing out of a short-term rehab loan",
      "Portfolio builders who have outgrown conventional lending",
      "Investors who want to close in an LLC or other entity",
    ],
    expect: [
      { label: "Typical use", text: "Purchase or refinance — including cash-out — of rent-ready investment properties." },
      { label: "Term style", text: "Long-term financing with regular monthly payments and fixed or adjustable options." },
      { label: "What's evaluated", text: "The property's rent compared to its payment, the appraised value, your credit history, and your reserves." },
      { label: "Documentation", text: "A lease or market-rent estimate and entity documents. Personal income documents typically aren't required." },
    ],
    requirements: [
      "A rent-ready, non-owner-occupied investment property",
      "A current lease or a market-rent estimate from the appraisal",
      "Government-issued ID and authorization to review credit",
      "Entity documents if closing in an LLC or corporation",
      "Proof of funds for down payment, closing costs, and reserves",
      "Property insurance",
    ],
    faqs: [
      {
        q: "Do I need to show tax returns or pay stubs?",
        a: "Typically not. DSCR loans qualify primarily on the property's rental income compared to its monthly payment, so personal income documentation usually isn't part of the process.",
      },
      {
        q: "Can I do a cash-out refinance with a DSCR loan?",
        a: "Yes. Many investors use a DSCR cash-out refinance to pull equity from a stabilized rental and put it toward the next deal. Call us to talk through current terms.",
      },
      {
        q: "What if the property isn't rented yet?",
        a: "The appraisal can include a market-rent estimate that's used in place of a signed lease. If the property still needs work, a Fix & Flip loan may be the better first step.",
      },
      {
        q: "Can I close in my LLC?",
        a: "Yes. DSCR loans are business-purpose loans, and closing in an LLC or other entity is common.",
      },
    ],
    compareSlug: "dscr-vs-fix-and-flip",
  },
  {
    slug: "fix-and-flip",
    name: "Fix & Flip Loans",
    blurb: "Fast capital for investors",
    metaTitle: "Fix & Flip Loans for Real Estate Investors",
    metaDescription:
      "Short-term, interest-only financing for purchase and rehab. Fix & Flip loans built for speed, with renovation funds released in draws. Nationwide from Moon Walk Fundings.",
    headline: "Fast capital to buy it, fix it, and move on to the next one.",
    overview:
      "A Fix & Flip loan is short-term, interest-only financing for purchase plus rehab. It's built around the deal itself — what you're paying, what you're fixing, and what it'll be worth when you're done — so you can move quickly on distressed and off-market properties. Renovation funds are typically released in draws as the work gets completed.",
    whoFor: [
      "Investors buying properties to renovate and resell",
      "BRRRR investors who need to rehab before refinancing",
      "Buyers competing for time-sensitive or off-market deals",
      "Newer investors with a solid deal and a realistic plan",
      "Experienced operators running multiple projects at once",
    ],
    expect: [
      { label: "Typical use", text: "Purchase and renovation of properties that need work, or rehab of a property you already own." },
      { label: "Term style", text: "Short-term and interest-only, repaid in full when you sell or refinance." },
      { label: "Rehab funds", text: "Released in draws as work is completed and verified." },
      { label: "What's evaluated", text: "Purchase price, scope of work and budget, after-repair value, your experience, and your exit plan." },
    ],
    requirements: [
      "Signed purchase contract (or deed, for properties you own)",
      "Scope of work with a line-item rehab budget",
      "Comparable sales supporting the after-repair value",
      "Your track record, if you have one — first deals are welcome",
      "Entity documents if closing in an LLC or corporation",
      "Proof of funds for down payment, closing, and carrying costs",
      "Property insurance (builder's risk where applicable)",
    ],
    faqs: [
      {
        q: "How fast can a Fix & Flip loan close?",
        a: "These loans are built for speed. Timing depends on the property, appraisal, and how quickly documents come in — call us with your deadline and we'll tell you honestly what's realistic.",
      },
      {
        q: "How do rehab draws work?",
        a: "You complete a portion of the work, request a draw, and after the work is verified the funds for that portion are released. It keeps the project on budget and on schedule.",
      },
      {
        q: "Can first-time investors qualify?",
        a: "Often, yes. A strong deal, a realistic budget, and a clear exit plan go a long way. Experience can affect terms, so let's talk through your situation.",
      },
      {
        q: "What happens at the end of the loan term?",
        a: "The loan is repaid when you sell the property or refinance it — often into a long-term DSCR loan if you decide to keep it as a rental.",
      },
    ],
    compareSlug: "dscr-vs-fix-and-flip",
  },
  {
    slug: "ground-up-construction",
    name: "Ground-Up Construction",
    blurb: "Fund your vision from the ground up",
    metaTitle: "Ground-Up Construction Loans for Investors",
    metaDescription:
      "Construction financing for spec homes, build-to-rent, and small multifamily projects, with funds released in draws as you build. Nationwide from Moon Walk Fundings.",
    headline: "Fund your vision from the ground up.",
    overview:
      "Ground-Up Construction loans finance new builds for investors and builders — spec homes, build-to-rent projects, and small multifamily. Funds are released in draws as construction milestones are reached, and the loan is repaid when you sell the finished property or refinance it into long-term financing.",
    whoFor: [
      "Builders and developers putting up spec homes",
      "Investors building rentals to hold long term",
      "Infill builders working with vacant or teardown lots",
      "Small multifamily developers",
      "Investors who already own land and are ready to build",
    ],
    expect: [
      { label: "Typical use", text: "New construction of investment properties, from permitted plans to certificate of occupancy." },
      { label: "Term style", text: "Short-term and interest-only during construction, with funds drawn as milestones are hit." },
      { label: "What's evaluated", text: "Plans, permits, budget, timeline, builder experience, the projected completed value, and your exit." },
      { label: "Exit", text: "Sell the finished property or refinance into long-term financing such as a DSCR loan." },
    ],
    requirements: [
      "Architectural plans and specifications",
      "Building permits, or a clear path to approval",
      "Line-item construction budget and timeline",
      "General contractor information, license, and insurance",
      "Land purchase contract or deed",
      "Entity documents if closing in an LLC or corporation",
      "Proof of funds for your equity contribution and reserves",
      "Builder's risk insurance",
    ],
    faqs: [
      {
        q: "Can the loan include the land purchase?",
        a: "In many cases, yes — or the land you already own can count toward your equity in the project. Call us to talk through your specific deal.",
      },
      {
        q: "Do I need building experience?",
        a: "Experience matters on construction loans. If you're newer, working with an experienced, licensed general contractor strengthens your application.",
      },
      {
        q: "How are construction draws released?",
        a: "Draws follow the budget and schedule. As each stage of work is completed and verified, funds for that stage are released.",
      },
      {
        q: "What happens when construction is finished?",
        a: "You sell the property or refinance into long-term financing. If you're keeping it as a rental, we can talk about a DSCR loan for the hold.",
      },
    ],
    compareSlug: "fix-and-flip-vs-ground-up-construction",
  },
];

export const getLoan = (slug: string) => loans.find((l) => l.slug === slug);
