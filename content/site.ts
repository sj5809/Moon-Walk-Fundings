// Single source of truth for business info + navigation.
import { comparisons } from "./comparisons";
import { loans } from "./loans";

export const site = {
  name: "Moon Walk Fundings",
  owner: "Janson Wade",
  // TODO(launch): confirm production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://moonwalkfundings.com",
  tagline: "Funding that takes your deal further.",
  primaryCta: "Fund Your Next Deal",
  phone: "(859) 750-9333",
  tel: "tel:+18597509333",
  email: "janson@moonwalkfundings.com",
  // Quote form → Web3Forms, which emails each request to janson@moonwalkfundings.com.
  // The access key is public by design (it only allows sending to that inbox). Manage at web3forms.com.
  web3formsKey: "4d27f7c4-39c4-4132-95a0-7e1d5b04ea7b",
  // TODO(launch): confirm any state-specific licensing restrictions before advertising all 50 states.
  statesServed: "All 50 states",
  stats: [
    { value: "25+", label: "Years in Lending" },
    { value: "Hundreds", label: "of Loans Closed" },
    { value: "All 50", label: "States" },
  ],
  pillars: ["Investor Focused", "Flexible Options", "Streamlined Process", "Real People"],
};

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const loanLinks: NavLink[] = loans.map((l) => ({ label: l.name, href: `/loans/${l.slug}` }));

export const learnLinks: NavLink[] = [
  { label: "Learning Center", href: "/learn" },
  ...comparisons.map((c) => ({ label: c.shortTitle, href: `/learn/compare/${c.slug}` })),
];

export const calculatorLinks: NavLink[] = [
  { label: "DSCR Calculator", href: "/calculators/dscr" },
  { label: "Fix & Flip Calculator", href: "/calculators/fix-and-flip" },
];

export const nav: NavItem[] = [
  { label: "Loan Programs", children: loanLinks },
  { label: "Learn", children: learnLinks },
  { label: "Calculators", children: calculatorLinks },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Disclosures", href: "/legal/disclosures" },
];
