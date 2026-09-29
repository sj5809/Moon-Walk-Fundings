import { site } from "./site";

// TODO(legal): ALL text below is placeholder and must be reviewed/replaced by an attorney before launch.
export const LAST_UPDATED = "September 29, 2026";

export const legal: { slug: string; title: string; sections: { heading: string; body: string }[] }[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    sections: [
      { heading: "Information we collect", body: "When you request a quote or contact us, we collect the information you provide, such as your name, email, phone number, and details about your property and investing experience. Our website may also collect basic technical data such as browser type and pages visited." },
      { heading: "How we use it", body: "We use your information to respond to your inquiry, evaluate and service loan requests, communicate with you, and improve our website. We do not sell your personal information." },
      { heading: "Sharing", body: "We may share information with service providers and funding partners as needed to evaluate or process your loan request, or when required by law." },
      { heading: "Text messages", body: "If you consent to receive text messages, message frequency varies and message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of any loan. Mobile numbers and SMS consent are not shared with third parties for marketing purposes." },
      { heading: "Cookies and analytics", body: "We may use cookies and similar technologies to understand how visitors use the site. You can control cookies through your browser settings." },
      { heading: "Contact", body: `Questions about this policy? Email ${site.email} or call ${site.phone}.` },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    sections: [
      { heading: "Use of this site", body: "This website provides general information about business-purpose real estate investment loans. By using it, you agree to these terms." },
      { heading: "No commitment to lend", body: "Nothing on this site is an offer, commitment to lend, or guarantee of any rate or term. All loans are subject to underwriting, verification, and approval." },
      { heading: "Business-purpose only", body: "Loans are offered only for business-purpose and investment properties, not for personal, family, household, or owner-occupied use." },
      { heading: "Calculators", body: "Calculator results are estimates based solely on information you enter and are provided for educational purposes only." },
      { heading: "Limitation of liability", body: "The site is provided “as is.” To the extent permitted by law, Moon Walk Fundings is not liable for decisions made based on information on this site." },
      { heading: "Changes", body: "We may update these terms at any time. Continued use of the site means you accept the updated terms." },
    ],
  },
  {
    slug: "disclosures",
    title: "Disclosures",
    sections: [
      { heading: "Business-purpose loans", body: "Moon Walk Fundings offers loans for business-purpose and investment real estate only. We do not offer consumer or owner-occupied mortgage loans." },
      { heading: "Not a commitment to lend", body: "Information on this site is for general educational purposes and is not a commitment to lend. All loans are subject to credit review, property evaluation, underwriting, and approval. Terms and program availability may change without notice." },
      { heading: "Licensing", body: "TODO(legal): Insert any required licensing information and state-specific disclosures. Confirm any state restrictions before advertising in all 50 states." },
      { heading: "Equal credit opportunity", body: "We do not discriminate on the basis of race, color, religion, national origin, sex, marital status, age, or any other basis prohibited by law." },
    ],
  },
];
