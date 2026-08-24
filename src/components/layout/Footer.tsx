import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { addressLine, company } from "@/data/company";

/** Only rendered for profiles that actually exist — see `company.social`. */
const SOCIAL_ICONS = {
  linkedin: { Icon: Linkedin, label: "LinkedIn" },
  twitter: { Icon: Twitter, label: "Twitter" },
  facebook: { Icon: Facebook, label: "Facebook" },
  instagram: { Icon: Instagram, label: "Instagram" },
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface-alt pt-20 pb-10 border-t border-brand-border relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Col */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-5">
            <Link href="/" className="flex items-center">
              <Image
                src="/GFS_LOGO.png"
                alt="Gas Flow Solutions"
                width={720}
                height={435}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              Designers and manufacturers of natural gas pressure regulating and metering systems
              for City Gas Distribution, industrial and energy networks — from design and
              manufacture through commissioning and after-sales support.
            </p>
            {Object.keys(company.social).length > 0 && (
              <div className="flex gap-4">
                {(Object.entries(company.social) as Array<[keyof typeof SOCIAL_ICONS, string]>).map(
                  ([platform, href]) => {
                    const { Icon, label } = SOCIAL_ICONS[platform];
                    return (
                      <a
                        key={platform}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white border border-brand-border text-brand-subtle hover:text-brand-navy hover:border-brand-navy/40 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="sr-only">{label}</span>
                      </a>
                    );
                  },
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-brand-ink font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-brand-muted hover:text-brand-navy text-sm transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-brand-muted hover:text-brand-navy text-sm transition-colors">Our Products</Link></li>
              <li><Link href="/contact" className="text-brand-muted hover:text-brand-navy text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-brand-ink font-semibold mb-6">Get in Touch</h3>
            <ul className="flex flex-col gap-4">
              {addressLine() && (
                <li className="flex items-start gap-3 text-brand-muted text-sm">
                  <MapPin className="w-5 h-5 text-brand-navy shrink-0" />
                  <span>{addressLine()}</span>
                </li>
              )}
              {company.phones.map((phone) => (
                <li key={phone.e164} className="flex items-center gap-3 text-brand-muted text-sm">
                  <Phone className="w-5 h-5 text-brand-navy shrink-0" />
                  <a href={`tel:+${phone.e164}`} className="hover:text-brand-navy transition-colors">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-brand-muted text-sm">
                <Mail className="w-5 h-5 text-brand-navy shrink-0" />
                <a href={`mailto:${company.email.sales}`} className="hover:text-brand-navy transition-colors">
                  {company.email.sales}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-subtle text-xs text-center md:text-left">
            &copy; {currentYear} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-subtle">
            <Link href="/privacy" className="hover:text-brand-navy transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-navy transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
