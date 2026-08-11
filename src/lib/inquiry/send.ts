import { Resend } from "resend";
import type { InquiryPayload } from "./types";

/**
 * Mail transport for website enquiries.
 *
 * Configuration lives entirely in the environment so no address is hardcoded
 * (see `.env.example`):
 *
 *   RESEND_API_KEY  — from resend.com
 *   INQUIRY_TO      — the mailbox enquiries land in
 *   INQUIRY_FROM    — verified sender; `onboarding@resend.dev` works before
 *                     your own domain is verified with Resend
 *
 * The caller logs the enquiry before calling this, so a transport failure never
 * loses the lead — it is always recoverable from the server logs.
 */

export class InquiryNotConfiguredError extends Error {
  constructor(missing: string[]) {
    super(`Enquiry mail is not configured. Missing: ${missing.join(", ")}`);
    this.name = "InquiryNotConfiguredError";
  }
}

function subjectFor(data: InquiryPayload): string {
  if (data.product) return `Enquiry — ${data.product}`;
  if (data.source) return `Enquiry — ${data.source}`;
  return "Website enquiry";
}

/** Plain text, deliberately: it renders everywhere and never trips a spam filter. */
function bodyFor(data: InquiryPayload, receivedAt: Date): string {
  const rows: Array<[string, string | undefined]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Phone", data.phone],
    ["Product", data.product],
    ["Form", data.source],
    ["Received", receivedAt.toISOString()],
  ];

  const details = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label.padEnd(10)}${value}`)
    .join("\n");

  return `New enquiry from the Gas Flow Solutions website.\n\n${details}\n\n${"-".repeat(52)}\n\n${data.message}\n`;
}

export async function sendInquiry(data: InquiryPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  const from = process.env.INQUIRY_FROM;

  const missing = [
    !apiKey && "RESEND_API_KEY",
    !to && "INQUIRY_TO",
    !from && "INQUIRY_FROM",
  ].filter(Boolean) as string[];

  if (missing.length > 0) throw new InquiryNotConfiguredError(missing);

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: from!,
    to: to!.split(",").map((address) => address.trim()),
    // Replying in the mail client goes straight back to the enquirer.
    replyTo: data.email,
    subject: subjectFor(data),
    text: bodyFor(data, new Date()),
  });

  if (error) {
    throw new Error(`Resend rejected the message: ${error.message}`);
  }
}
