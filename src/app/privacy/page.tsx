import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/ui/LegalPage";
import { company } from "@/data/company";

/**
 * NOTE: written to describe accurately what this site actually does — the three
 * enquiry forms, Resend for delivery, Vercel for hosting, and no analytics or
 * tracking of any kind. It is not a substitute for legal advice; have it
 * reviewed against the DPDP Act before launch, and update it the moment any
 * analytics, chat widget or advertising pixel is added.
 */

export const metadata: Metadata = {
  title: "Privacy Policy | Gas Flow Solutions",
  description: "What information we collect through this website, why, and how to have it removed.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="11 August 2026">
      <p>
        This policy explains what happens to information you give us through this website. It
        covers this site only.
      </p>

      <LegalSection heading="What we collect">
        <p>
          We collect information only when you choose to send it. The enquiry forms on this site
          ask for your name and email address, and optionally your company, phone number and the
          product you are asking about, together with whatever you write in the message field.
        </p>
        <p>
          We do not use analytics, advertising pixels, or tracking cookies. We do not build a
          profile of your visit, and we do not collect anything from you simply for reading these
          pages.
        </p>
      </LegalSection>

      <LegalSection heading="Why we collect it">
        <p>
          Solely to answer your enquiry — to size and quote the equipment you asked about, and to
          follow up on that conversation. We do not sell it, rent it, or share it for marketing.
        </p>
      </LegalSection>

      <LegalSection heading="Where it goes">
        <p>
          Submitting a form sends the contents by email to {company.email.sales}, and records them
          in our server logs so that an enquiry is never lost if mail delivery fails. Two service
          providers are involved: <strong>Resend</strong> delivers the email, and{" "}
          <strong>Vercel</strong> hosts the site and its logs. Both process the data on our behalf.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          Enquiry emails are retained in our mailbox for as long as the commercial relationship or
          our record-keeping obligations require. Server logs are retained for a short period and
          then discarded automatically.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us to delete it.
          Write to {company.email.sales} and we will act on it. If you would rather not use a form
          at all, call us instead — the numbers are in the footer of every page.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy: {company.email.sales}, or{" "}
          {company.phones.map((phone) => phone.display).join(" / ")}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
