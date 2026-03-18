"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3" 
          : "bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
            className="p-1.5 bg-gradient-to-tr from-green-400 via-yellow-300 to-sky-400 rounded-lg shadow-sm"
          >
            <div className="bg-white dark:bg-slate-900 rounded-md p-1">
              <Flame className="w-5 h-5 text-sky-500" strokeWidth={2.5} />
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white group-hover:text-sky-500 transition-colors">
              Gas Flow Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold tracking-wide transition-colors hover:text-sky-500"
              >
                <span className={isActive ? "text-sky-500" : "text-slate-600 dark:text-slate-300"}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 transition-all transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 absolute w-full left-0 top-full shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-semibold transition-colors ${
                      isActive ? "text-sky-500" : "text-slate-600 dark:text-slate-300 hover:text-sky-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full text-center px-6 py-3 rounded-xl bg-sky-500 text-white font-bold hover:bg-sky-600 transition-colors shadow-md shadow-sky-500/20"
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
