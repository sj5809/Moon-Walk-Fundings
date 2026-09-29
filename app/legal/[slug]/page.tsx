import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LAST_UPDATED, legal } from "@/content/legal";
import { CtaBand, PageHero } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return legal.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const doc = legal.find((l) => l.slug === slug);
  return doc ? { title: doc.title, alternates: { canonical: `/legal/${doc.slug}` } } : {};
}

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const doc = legal.find((l) => l.slug === slug);
  if (!doc) notFound();
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} lead={`Last updated ${LAST_UPDATED}`} ctas={false} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {/* TODO(legal): placeholder text — attorney review required before launch. */}
        <p className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-sm text-amber-200">
          Draft placeholder text pending attorney review.
        </p>
        {doc.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-display text-xl font-bold">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}
      </article>
      <CtaBand />
    </>
  );
}
