import { check, clientKey, consume } from "@/lib/inquiry/rateLimit";
import { InquiryNotConfiguredError, sendInquiry } from "@/lib/inquiry/send";
import type { InquiryResult } from "@/lib/inquiry/types";
import { validateInquiry } from "@/lib/inquiry/validate";

/** Resend's SDK needs Node APIs, so this route cannot run on the edge. */
export const runtime = "nodejs";

function json(body: InquiryResult, status: number, headers?: HeadersInit) {
  return Response.json(body, { status, headers });
}

/**
 * The single endpoint behind every form on the site — the homepage contact
 * block, the contact page and the per-product enquiry form.
 *
 * Order matters here: the enquiry is logged *before* the send is attempted, so
 * that a mail outage or a missing API key degrades to "recoverable from the
 * logs" rather than "lead silently lost", which is what the previous
 * `setTimeout` placeholders did.
 */
export async function POST(request: Request) {
  const key = clientKey(request);

  const limit = check(key);
  if (!limit.allowed) {
    return json(
      { ok: false, message: "Too many enquiries from this connection. Please try again shortly." },
      429,
      { "Retry-After": String(limit.retryAfterSeconds) },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, message: "Could not read the submitted form." }, 400);
  }

  const result = validateInquiry(payload);
  if (!result.ok) {
    return json({ ok: false, message: "Please check the highlighted fields.", errors: result.errors }, 400);
  }

  const { data } = result;

  // Honeypot: a human never sees this field. Answer 200 so bots learn nothing
  // from the response, but send nothing.
  if (data.website) {
    console.warn("[inquiry] honeypot triggered, discarded", { email: data.email });
    return json({ ok: true }, 200);
  }

  // Past this point a send will be attempted, so the request spends quota.
  consume(key);

  console.info("[inquiry] received", {
    name: data.name,
    email: data.email,
    company: data.company,
    phone: data.phone,
    product: data.product,
    source: data.source,
    message: data.message,
  });

  try {
    await sendInquiry(data);
  } catch (error) {
    if (error instanceof InquiryNotConfiguredError) {
      console.error("[inquiry] not configured —", error.message);
      return json(
        {
          ok: false,
          message:
            "We could not send your enquiry just now. Please email us directly and we will pick it up.",
        },
        503,
      );
    }

    console.error("[inquiry] send failed", error);
    return json(
      {
        ok: false,
        message: "Something went wrong sending your enquiry. Please try again, or email us directly.",
      },
      502,
    );
  }

  return json({ ok: true }, 200);
}
