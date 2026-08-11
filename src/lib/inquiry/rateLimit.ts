/**
 * Fixed-window rate limiter, in memory.
 *
 * Scope note: this is per serverless instance, so it is a speed bump against
 * casual abuse rather than a guarantee — a distributed limiter would need Redis
 * or Vercel KV. Combined with the honeypot it is proportionate for a brochure
 * site's contact form. Revisit if enquiry spam actually becomes a problem.
 *
 * Split into `check` and `consume` deliberately. The quota exists to protect the
 * mail transport, so only requests that actually reach a send should spend it —
 * otherwise someone who mistypes their email five times locks themselves out for
 * ten minutes. Malformed and invalid payloads are rejected before they ever cost
 * anything, so letting them through unmetered is safe.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export interface RateLimitVerdict {
  allowed: boolean;
  retryAfterSeconds: number;
}

/** Read-only: is this key currently over its quota? */
export function check(key: string): RateLimitVerdict {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now >= entry.resetAt || entry.count < MAX_PER_WINDOW) {
    return { allowed: true, retryAfterSeconds: 0 };
  }
  return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
}

/** Spend one unit of quota. Call only when a send is about to be attempted. */
export function consume(key: string): void {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now >= entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    // Opportunistic sweep so the map cannot grow without bound.
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (now >= v.resetAt) hits.delete(k);
    }
    return;
  }

  entry.count += 1;
}

/** First hop in `x-forwarded-for` is the client; falls back to a shared bucket. */
export function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
