import type { SpecRow } from "@/data/catalog";
import { cn } from "@/lib/cn";

interface SpecTableProps {
  rows: SpecRow[];
  caption?: string;
  className?: string;
}

/**
 * Two-column specification table. Wrapped in its own overflow container so a
 * long value scrolls the table rather than the page on narrow viewports.
 */
export function SpecTable({ rows, caption, className }: SpecTableProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-xl border border-brand-border bg-brand-surface",
        className,
      )}
    >
      <table className="w-full text-left border-collapse">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-brand-surface-alt">
            <th
              scope="col"
              className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-brand-subtle"
            >
              Parameter
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-brand-subtle"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-brand-border align-top">
              <th
                scope="row"
                className="px-5 py-3.5 text-sm font-semibold text-brand-ink whitespace-nowrap"
              >
                {row.label}
              </th>
              <td className="px-5 py-3.5 text-sm text-brand-muted">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
