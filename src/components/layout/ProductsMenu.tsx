"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { productMenu, categoryHref, productHref } from "@/data/productMenu";

/** Desktop-only Products dropdown with a right-hand flyout for sub-ranges. */
export function ProductsMenu() {
  // The pathname is stored alongside the open flag so that a route change
  // implicitly closes the panel — no effect syncing state to navigation.
  const [menu, setMenu] = useState({ open: false, path: "" });
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isActive = pathname === "/products";
  const isOpen = menu.open && menu.path === pathname;

  const activeCategory = productMenu.find((c) => c.slug === activeSlug);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const open = () => setMenu({ open: true, path: pathname });

  const close = useCallback(() => {
    setMenu({ open: false, path: pathname });
    setActiveSlug(null);
  }, [pathname]);

  // Small grace period so a diagonal cursor path to the panel doesn't close it.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(close, 150);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        open();
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => (isOpen ? close() : open())}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="relative flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-brand-green"
      >
        <span className={isActive || isOpen ? "text-brand-green" : "text-brand-muted"}>
          Products
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-brand-green" : "text-brand-subtle"
          }`}
        />
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-green rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            /* pt-4 bridges the gap under the button so hover survives the trip. */
            className="absolute left-0 top-full pt-4 z-50"
          >
            <div className="relative">
              <div className="w-80 bg-white border border-brand-border rounded-xl shadow-xl shadow-brand-ink/5 py-3">
                {/* Accent rail echoing the active-tab underline */}
                <div className="absolute -top-px left-6 w-16 h-0.5 bg-brand-green rounded-full" />

                {productMenu.map((category) => {
                  const hasItems = Boolean(category.items?.length);
                  const isHighlighted = activeSlug === category.slug;

                  return (
                    <Link
                      key={category.slug}
                      href={categoryHref(category.slug)}
                      onMouseEnter={() => setActiveSlug(hasItems ? category.slug : null)}
                      onClick={close}
                      className={`flex items-center justify-between gap-4 px-6 py-2.5 text-sm font-medium transition-colors ${
                        isHighlighted
                          ? "bg-brand-green-soft text-brand-green"
                          : "text-brand-muted hover:bg-brand-green-soft hover:text-brand-green"
                      }`}
                    >
                      <span>{category.name}</span>
                      {hasItems && <ChevronRight className="w-4 h-4 shrink-0" />}
                    </Link>
                  );
                })}
              </div>

              {/* Flyout: anchored to the panel top so long lists never run off-screen */}
              <AnimatePresence>
                {activeCategory?.items && (
                  <motion.div
                    key={activeCategory.slug}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-full top-0 pl-2 w-84"
                  >
                    <div className="bg-white border border-brand-border rounded-xl shadow-xl shadow-brand-ink/5 py-3 max-h-[26rem] overflow-y-auto">
                      <p className="px-6 pb-2 mb-1 text-xs font-bold uppercase tracking-widest text-brand-subtle border-b border-brand-border">
                        {activeCategory.name}
                      </p>
                      {activeCategory.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={productHref(activeCategory.slug, item.slug)}
                          onClick={close}
                          className="block px-6 py-2.5 text-sm text-brand-muted hover:bg-brand-green-soft hover:text-brand-green transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
