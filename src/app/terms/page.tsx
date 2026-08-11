import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/ui/LegalPage";
import { company } from "@/data/company";

/**
 * NOTE: a plain-language baseline so the footer link is not a 404. Have it
 * reviewed by a lawyer before launch — in particular the governing-law clause,
 * which needs the correct jurisdiction once the registered address is confirmed.
 */

export const metadata: Metadata = {
  title: "Terms of Use | Gas Flow Solutions",
  description: "The terms on which this website and the information on it are provided.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Use" updated="11 August 2026">
      <p>
        These terms cover your use of this website. They do not govern the sale of goods — supply
        is subject to our written quotation and order acknowledgement, which take precedence over
        anything published here.
      </p>

      <LegalSection heading="The information on this site">
        <p>
          This website is a product catalogue and general information resource. Technical
          specifications, pressure ratings, capacities and dimensions are indicative and describe a
          typical configuration of a range.
        </p>
        <p>
          <strong>
            Do not rely on this website alone to select equipment for a live installation.
          </strong>{" "}
          Every selection must be confirmed against your actual operating conditions — inlet and
          outlet pressure, flow, gas composition, ambient temperature and applicable local code —
          in writing, at order stage. Send us the duty and we will verify it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          Products, specifications and these terms may change without notice. We correct errors when
          we find them, but we do not warrant that everything here is complete or current at any
          given moment.
        </p>
      </LegalSection>

      <LegalSection heading="Enquiries you send us">
        <p>
          An enquiry submitted through this site is a request for information. It does not create a
          contract, reserve stock, or oblige either of us to proceed. A binding agreement arises
          only on our written acceptance of an order.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The text, images, drawings and design of this site belong to {company.legalName} or to the
          manufacturers whose equipment we represent. You may read, print and share pages for the
          purpose of evaluating or specifying our equipment. Republishing them commercially, or
          presenting them as your own, is not permitted.
        </p>
      </LegalSection>

      <LegalSection heading="Links to other sites">
        <p>
          Where we link to a manufacturer or third party, we do so for convenience. We do not
          control those sites and are not responsible for their content.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of India, and the courts of India have exclusive
          jurisdiction over any dispute arising from your use of this website.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms: {company.email.sales}, or{" "}
          {company.phones.map((phone) => phone.display).join(" / ")}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
