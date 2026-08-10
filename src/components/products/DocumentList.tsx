import Link from "next/link";
import { Download, FileText, Lock } from "lucide-react";
import type { TechnicalDocument } from "@/data/catalog";

interface DocumentListProps {
  documents: TechnicalDocument[];
  productName: string;
}

/**
 * Technical documents panel.
 *
 * PLACEHOLDER: entries have no `href` until real PDFs are hosted, so they
 * render as "on request" rows pointing at contact rather than as dead
 * downloads. Add `href` in the catalog and the row becomes a real link.
 */
export function DocumentList({ documents, productName }: DocumentListProps) {
  return (
    <div className="rounded-xl border border-brand-border bg-brand-surface">
      <ul className="divide-y divide-brand-border">
        {documents.map((doc) => (
          <li key={doc.title}>
            {doc.href ? (
              <a
                href={doc.href}
                download
                className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-brand-navy-soft"
              >
                <FileText className="w-5 h-5 shrink-0 text-brand-navy" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-brand-ink transition-colors group-hover:text-brand-navy">
                    {doc.title}
                  </span>
                  <span className="block text-xs text-brand-subtle">
                    {doc.kind} · {doc.meta}
                  </span>
                </span>
                <Download className="w-4 h-4 shrink-0 text-brand-subtle transition-colors group-hover:text-brand-navy" aria-hidden="true" />
              </a>
            ) : (
              <div className="flex items-center gap-4 px-5 py-4">
                <FileText className="w-5 h-5 shrink-0 text-brand-subtle" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-brand-ink">{doc.title}</span>
                  <span className="block text-xs text-brand-subtle">
                    {doc.kind} · {doc.meta}
                  </span>
                </span>
                <Lock className="w-4 h-4 shrink-0 text-brand-subtle" aria-hidden="true" />
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="border-t border-brand-border bg-brand-surface-alt px-5 py-4">
        <p className="text-xs leading-relaxed text-brand-muted">
          Documentation for {productName} is issued on request against the confirmed
          specification.{" "}
          <Link href="/contact" className="font-semibold text-brand-navy hover:text-brand-navy-dark">
            Request the document pack
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
