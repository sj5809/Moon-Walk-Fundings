import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Real Estate Investor Loans`, template: `%s | ${site.name}` },
  description: `DSCR, Fix & Flip, and Ground-Up Construction loans for real estate investors in all 50 states. ${site.tagline}`,
  icons: { icon: "/brand/moon-mark.svg" },
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
  // TODO(launch): add a 1200x630 /public/og.png (could be built from /brand/draft-hero.webp).
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-electric focus:px-4 focus:py-2 focus:text-space-950">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            telephone: "+1-859-750-9333",
            email: site.email,
            slogan: site.tagline,
            areaServed: "US",
            founder: { "@type": "Person", name: site.owner },
          }}
        />
      </body>
    </html>
  );
}
