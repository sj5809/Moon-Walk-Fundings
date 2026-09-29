"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { Logo, PhoneIcon } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-space-700 bg-space-950/85 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        {/* Desktop nav: dropdowns open on hover or keyboard focus (CSS only). */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              "children" in item ? (
                <li key={item.label} className="group relative">
                  <button type="button" aria-haspopup="true" className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan">
                    {item.label}
                    <svg viewBox="0 0 12 12" className="h-3 w-3 transition group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden>
                      <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <ul className="invisible absolute left-0 top-full min-w-56 translate-y-1 rounded-xl border border-space-700 bg-space-900 p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-space-800 hover:text-ink focus-visible:bg-space-800 focus-visible:text-ink focus-visible:outline-none">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-ink hover:text-cyan">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.tel} className="hidden items-center gap-2 text-sm font-semibold text-ink hover:text-cyan md:flex">
            <PhoneIcon /> {site.phone}
          </a>
          <Link href="/get-a-quote" className="btn btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex">
            Get a Quote
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-space-700 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-space-700 bg-space-950 lg:hidden">
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6">
            {nav.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">{item.label}</p>
                  <ul className="mt-2 space-y-1">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={close} className="block py-1.5 text-lg text-ink">{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={close} className="block text-lg font-semibold text-ink">
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/get-a-quote" onClick={close} className="btn btn-primary">Get a Quote</Link>
              <a href={site.tel} className="btn btn-outline"><PhoneIcon /> {site.phone}</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
