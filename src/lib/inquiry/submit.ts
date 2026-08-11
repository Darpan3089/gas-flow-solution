import type { InquiryPayload, InquiryResult } from "./types";

/**
 * Client-side helper every form uses to post to `/api/inquiry`.
 *
 * Always resolves — never throws — so a form only has to branch on `ok`.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const body = (await response.json().catch(() => null)) as InquiryResult | null;

    if (body) return body;

    return response.ok
      ? { ok: true }
      : { ok: false, message: "Something went wrong sending your enquiry. Please try again." };
  } catch {
    return {
      ok: false,
      message: "We could not reach the server. Please check your connection and try again.",
    };
  }
}
