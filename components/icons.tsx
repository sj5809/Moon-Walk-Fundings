// Thin-line brand icons (24px grid). Color comes from currentColor.
const paths: Record<string, React.ReactNode> = {
  dscr: <><path d="M3 11 12 3l9 8" /><path d="M5 9.5V21h14V9.5" /><path d="M14 12.5c-.4-.9-1.2-1.3-2-1.3-1.2 0-2 .6-2 1.5 0 2 4 1 4 3 0 .9-.9 1.6-2 1.6-.9 0-1.7-.4-2.1-1.3M12 10v1.2M12 17.3v1.2" /></>,
  "fix-and-flip": <><path d="M11 4.5 13.5 2l5 5-2.5 2.5z" /><path d="m13 7-9 9 2.5 2.5 9-9" /><path d="m14 14 4.3 4.3" /><path d="M20.5 16.2a2.2 2.2 0 0 1-2.9 3.3l1.2-2.4-1.1-1.1-2.4 1.2a2.2 2.2 0 0 1 3.3-2.9" /><path d="M5.5 3.5a2.2 2.2 0 0 1 2.9 2.9L10 8" /><path d="M3.6 8.3a2.2 2.2 0 0 0 2.8-1.9" /></>,
  "ground-up-construction": <><path d="M2 11 12 4l10 7" /><path d="M4 9.7V21h16V9.7" /><path d="M4 14h16M4 17.5h16M8 7v14M12 4v17M16 7v14" /></>,
  "Investor Focused": <><circle cx="11" cy="13" r="8" /><circle cx="11" cy="13" r="4.5" /><circle cx="11" cy="13" r="1" /><path d="m11 13 9-9M17 4h3v3" /></>,
  "Flexible Options": <><path d="M4 17a8 8 0 1 1 16 0" /><path d="m12 17 4-5" /><path d="M6.5 11.5l1 .8M12 7v1.3M17.5 11.5l-1 .8" /></>,
  "Streamlined Process": <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 11h6M9 14h6M9 17h4" /></>,
  "Real People": <><circle cx="12" cy="7" r="2.5" /><circle cx="5.5" cy="9" r="2" /><circle cx="18.5" cy="9" r="2" /><path d="M7.5 20v-3a4.5 4.5 0 0 1 9 0v3zM2.5 20v-2a3 3 0 0 1 4-2.8M21.5 20v-2a3 3 0 0 0-4-2.8" /></>,
};

export function BrandIcon({ name, className = "h-10 w-10 text-cyan" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`drop-shadow-[0_0_6px_rgb(30_144_255/0.6)] ${className}`} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name]}
    </svg>
  );
}
