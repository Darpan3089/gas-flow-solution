import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Factory, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1121] pt-20 pb-10 border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-brand-orange rounded-lg text-white">
                <Factory className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                GasFlow <span className="font-light">Solutions</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering the future of gas plants and industrial machinery with precision, safety, and scalable innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-brand-orange hover:bg-gray-700 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-brand-orange hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-brand-orange hover:bg-gray-700 transition-colors">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-brand-orange hover:bg-gray-700 transition-colors">
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">Our Products</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">Engineering Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Specialties</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-400 text-sm">Gas Plant Setup</li>
              <li className="text-gray-400 text-sm">Pipeline Architecture</li>
              <li className="text-gray-400 text-sm">Safety Audits & Maintenance</li>
              <li className="text-gray-400 text-sm">Custom Machinery Fabrication</li>
              <li className="text-gray-400 text-sm">24/7 Emergency Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span>123 Industrial Ave, Tech District, CityCorp, 90210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>+1 (800) 555-FLOW</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>engineering@gasflow.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} GasFlow Solutions Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
