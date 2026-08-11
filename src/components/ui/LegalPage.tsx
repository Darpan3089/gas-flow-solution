import type { ReactNode } from "react";

/**
 * Shared shell for the policy pages.
 *
 * Server component and deliberately motion-free — these pages are read, not
 * browsed, and they should render instantly with no client bundle.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  /** Human-readable effective date, e.g. "11 August 2026". */
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-brand-bg pt-12 pb-24">
      <div className="container mx-auto max-w-3xl px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-ink mb-3">
          {title}
        </h1>
        <p className="text-sm text-brand-subtle mb-12">Last updated {updated}</p>
        <div className="flex flex-col gap-8 text-brand-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-bold text-brand-ink">{heading}</h2>
      {children}
    </section>
  );
}
