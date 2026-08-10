"use client";

import { type MouseEvent as ReactMouseEvent, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { productMenu, categoryHref } from "@/data/productMenu";

/** Category panel and flyout card widths in px — keep in step with their `w-80`. */
const PANEL_WIDTH = 320;
const FLYOUT_WIDTH = 320;
/** The `pl-2` gap between the two cards. */
const FLYOUT_GAP = 8;
/** Breathing room kept between the dropdown and the window edge. */
const VIEWPORT_MARGIN = 16;

/** Desktop-only Products dropdown with a right-hand flyout for sub-ranges. */
export function ProductsMenu() {
  // The pathname is stored alongside the open flag so that a route change
  // implicitly closes the panel — no effect syncing state to navigation.
  const [menu, setMenu] = useState({ open: false, path: "" });
  // `top` aligns the flyout with the row that opened it, so a straight
  // rightward move lands on the card rather than in empty space.
  const [flyout, setFlyout] = useState<{ slug: string; top: number } | null>(null);
  // Negative offset applied to the whole dropdown when the flyout would other-
  // wise reach past the window edge. Measured once per open so the panel never
  // shifts sideways underneath the cursor as submenus come and go.
  const [shift, setShift] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isActive = pathname === "/products";
  const isOpen = menu.open && menu.path === pathname;

  const activeCategory = productMenu.find((c) => c.slug === flyout?.slug);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  /** Room the panel plus its widest possible flyout needs, measured from the button. */
  const measureShift = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const { left } = container.getBoundingClientRect();
    const needed = PANEL_WIDTH + FLYOUT_GAP + FLYOUT_WIDTH + VIEWPORT_MARGIN;
    const overflow = left + needed - window.innerWidth;
    // Never drag the panel past the left edge chasing room it cannot get.
    setShift(overflow > 0 ? -Math.min(overflow, left - VIEWPORT_MARGIN) : 0);
  }, []);

  const open = () => {
    measureShift();
    setMenu({ open: true, path: pathname });
  };

  const close = useCallback(() => {
    setMenu({ open: false, path: pathname });
    setFlyout(null);
  }, [pathname]);

  const openFlyout = (event: ReactMouseEvent<HTMLElement>, slug: string, hasItems: boolean) => {
    if (!hasItems) {
      setFlyout(null);
      return;
    }
    // offsetTop is measured against the panel wrapper, which the flyout is also
    // positioned within, so the two line up without further arithmetic.
    setFlyout({ slug, top: event.currentTarget.offsetTop });
  };

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
    window.addEventListener("resize", measureShift);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", measureShift);
    };
  }, [isOpen, close, measureShift]);

  return (
    <div
      className="relative"
      ref={containerRef}
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
        className="relative flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-brand-navy"
      >
        <span className={isActive || isOpen ? "text-brand-navy" : "text-brand-muted"}>
          Products
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-brand-navy" : "text-brand-subtle"
          }`}
        />
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-navy rounded-full"
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
            style={{ marginLeft: shift }}
            /* pt-4 bridges the gap under the button so hover survives the trip. */
            className="absolute left-0 top-full pt-4 z-50"
          >
            <div className="relative">
              <div className="w-80 bg-white border border-brand-border rounded-xl shadow-xl shadow-brand-ink/5 py-3">
                {/* Accent rail echoing the active-tab underline */}
                <div className="absolute -top-px left-6 w-16 h-0.5 bg-brand-navy rounded-full" />

                {productMenu.map((category) => {
                  const hasItems = Boolean(category.items?.length);
                  const isHighlighted = flyout?.slug === category.slug;

                  return (
                    <Link
                      key={category.slug}
                      href={categoryHref(category.slug)}
                      onMouseEnter={(event) => openFlyout(event, category.slug, hasItems)}
                      onClick={close}
                      className={`flex items-center justify-between gap-4 px-6 py-2.5 text-sm font-medium transition-colors ${
                        isHighlighted
                          ? "bg-brand-navy-soft text-brand-navy"
                          : "text-brand-muted hover:bg-brand-navy-soft hover:text-brand-navy"
                      }`}
                    >
                      <span>{category.name}</span>
                      {hasItems && <ChevronRight className="w-4 h-4 shrink-0" />}
                    </Link>
                  );
                })}
              </div>

              {/* Flyout. The wrapper spans the panel's full height and carries the
                  gap as padding, so it doubles as a hover bridge — the cursor can
                  leave any row horizontally without the close timer firing. */}
              <AnimatePresence>
                {activeCategory?.items && flyout && (
                  <motion.div
                    key={activeCategory.slug}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute inset-y-0 left-full pl-2 w-82"
                  >
                    <div
                      style={{ marginTop: flyout.top }}
                      className="w-80 bg-white border border-brand-border rounded-xl shadow-xl shadow-brand-ink/5 py-3 max-h-104 overflow-y-auto"
                    >
                      <p className="px-6 pb-2 mb-1 text-xs font-bold uppercase tracking-widest text-brand-subtle border-b border-brand-border">
                        {activeCategory.name}
                      </p>
                      {activeCategory.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={close}
                          className="block px-6 py-2.5 text-sm text-brand-muted hover:bg-brand-navy-soft hover:text-brand-navy transition-colors"
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
