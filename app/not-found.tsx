import Link from "next/link";

export default function NotFound() {
  return (
    <section className="starfield">
      <div className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">Lost in space.</h1>
        <p className="mt-4 text-muted">That page drifted out of orbit.</p>
        <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
