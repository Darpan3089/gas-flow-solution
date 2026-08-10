"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ProductsMenu } from "@/components/layout/ProductsMenu";
import { productMenu, categoryHref } from "@/data/productMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", hasMenu: true },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
    setOpenMobileCategory(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-border py-3"
          : "bg-white/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/GFS_LOGO.svg"
              alt="Gas Flow Solutions"
              width={241}
              height={142}
              priority
              className="h-12 md:h-14 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasMenu) {
              return <ProductsMenu key={link.name} />;
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold tracking-wide transition-colors hover:text-brand-navy"
              >
                <span className={isActive ? "text-brand-navy" : "text-brand-muted"}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-navy rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-brand-navy text-white text-sm font-bold hover:bg-brand-navy-dark hover:shadow-lg hover:shadow-brand-navy/25 transition-all transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-muted hover:text-brand-navy transition-colors"
          onClick={() => (isMobileMenuOpen ? closeMobileMenu() : setIsMobileMenuOpen(true))}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-brand-border absolute w-full left-0 top-full shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                // Products expands in place — a hover flyout has no touch equivalent.
                if (link.hasMenu) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setIsMobileProductsOpen((open) => !open)}
                        aria-expanded={isMobileProductsOpen}
                        className={`flex items-center justify-between text-lg font-semibold transition-colors ${
                          isActive ? "text-brand-navy" : "text-brand-muted"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileProductsOpen ? "rotate-180 text-brand-navy" : "text-brand-subtle"
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isMobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 pl-4 border-l-2 border-brand-border flex flex-col gap-1">
                              {productMenu.map((category) => {
                                const hasItems = Boolean(category.items?.length);
                                const isCategoryOpen = openMobileCategory === category.slug;

                                if (!hasItems) {
                                  return (
                                    <Link
                                      key={category.slug}
                                      href={categoryHref(category.slug)}
                                      onClick={closeMobileMenu}
                                      className="py-2 text-base text-brand-muted hover:text-brand-navy transition-colors"
                                    >
                                      {category.name}
                                    </Link>
                                  );
                                }

                                return (
                                  <div key={category.slug} className="flex flex-col">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setOpenMobileCategory(isCategoryOpen ? null : category.slug)
                                      }
                                      aria-expanded={isCategoryOpen}
                                      className={`flex items-center justify-between py-2 text-base transition-colors ${
                                        isCategoryOpen ? "text-brand-navy" : "text-brand-muted"
                                      }`}
                                    >
                                      {category.name}
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                          isCategoryOpen ? "rotate-180" : "text-brand-subtle"
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {isCategoryOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="pl-4 pb-2 flex flex-col gap-1">
                                            {category.items?.map((item) => (
                                              <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className="py-1.5 text-sm text-brand-subtle hover:text-brand-navy transition-colors"
                                              >
                                                {item.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`text-lg font-semibold transition-colors ${
                      isActive ? "text-brand-navy" : "text-brand-muted hover:text-brand-navy"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-2 w-full text-center px-6 py-3 rounded-xl bg-brand-navy text-white font-bold hover:bg-brand-navy-dark transition-colors shadow-md shadow-brand-navy/20"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
