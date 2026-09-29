import Link from "next/link";
import { calculatorLinks, learnLinks, legalLinks, loanLinks, site, type NavLink } from "@/content/site";
import { Logo } from "./ui";

function Col({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-muted hover:text-cyan">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-space-700 bg-space-900">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{site.tagline}</p>
          </div>
          <Col title="Loan Programs" links={loanLinks} />
          <Col title="Learn" links={[...learnLinks, ...calculatorLinks]} />
          <Col
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Get a Quote", href: "/get-a-quote" },
            ]}
          />
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="text-muted">Talk to {site.owner} directly</li>
              <li><a href={site.tel} className="font-semibold text-ink hover:text-cyan">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="break-all text-muted hover:text-cyan">{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-space-700 pt-8 text-xs leading-relaxed text-muted">
          {/* TODO(legal): have an attorney review this disclaimer. */}
          <p className="max-w-4xl">
            Loans are offered for business-purpose and investment properties only and are not available for
            owner-occupied, personal, family, or household use. All loans are subject to underwriting and approval.
            Information on this site is for general educational purposes and is not a commitment to lend or an offer
            of specific terms.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {site.name}. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-cyan">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
