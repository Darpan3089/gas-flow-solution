"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Minimize2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { IconKey } from "@/data/catalog";
import { ProductImage } from "./ProductImage";
import { cn } from "@/lib/cn";

interface ProductGalleryProps {
  name: string;
  series: string;
  icon: IconKey;
  gallery?: string[];
  slug: string;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

/** Directional slide: entering image comes from the side you navigated toward. */
const slideVariants = {
  enter: (direction: number) => ({ x: direction >= 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction >= 0 ? "-100%" : "100%", opacity: 0 }),
};

/**
 * Large image with a thumbnail strip. Where no photography exists yet, the
 * strip shows three schematic views generated from different seeds so the
 * gallery still reads as a gallery rather than a broken image. Clicking the
 * large image opens a fullscreen lightbox with zoom, pan, fullscreen and
 * download.
 */
export function ProductGallery({ name, series, icon, gallery, slug }: ProductGalleryProps) {
  const views = gallery?.length
    ? [...(gallery ?? [])].filter((src): src is string => Boolean(src)).map((src, i) => ({
        src,
        seed: `${slug}-${i}`,
        label: i === 0 ? "Product view" : `View ${i + 1}`,
      }))
    : [
        { src: undefined, seed: `${slug}-front`, label: "Front elevation" },
        { src: undefined, seed: `${slug}-section`, label: "Sectional view" },
        { src: undefined, seed: `${slug}-detail`, label: "Connection detail" },
      ];

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const current = views[active];

  const lightboxRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<HTMLDivElement>(null);
  const panX = useMotionValue(0);
  const panY = useMotionValue(0);

  const selectView = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
      setZoom(1);
    },
    [active],
  );

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive((i) => (i - 1 + views.length) % views.length);
    setZoom(1);
  }, [views.length]);

  const goNext = useCallback(() => {
    setDirection(1);
    setActive((i) => (i + 1) % views.length);
    setZoom(1);
  }, [views.length]);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(1)));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(1)));
  }, []);

  // Recenter the pan offset whenever zoom returns to 1x (including on image/lightbox change).
  useEffect(() => {
    if (zoom <= MIN_ZOOM) {
      panX.set(0);
      panY.set(0);
    }
  }, [zoom, panX, panY]);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      lightboxRef.current?.requestFullscreen();
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (!current.src) return;
    const link = document.createElement("a");
    link.href = current.src;
    link.download = current.src.split("/").pop() ?? `${slug}-${active + 1}.webp`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [current.src, slug, active]);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Let the browser's own Escape handling close fullscreen first;
        // closing the modal too would otherwise happen in the same keypress.
        if (document.fullscreenElement) return;
        setLightboxOpen(false);
      }
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-") zoomOut();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (document.fullscreenElement) document.exitFullscreen();
    };
  }, [lightboxOpen, goPrev, goNext, zoomIn, zoomOut]);

  return (
    <div>
      <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-brand-border">
        <AnimatePresence initial={false} custom={direction}>
          <motion.button
            key={active}
            type="button"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => {
              setLightboxOpen(true);
              setZoom(1);
            }}
            aria-label={`Expand ${current.label}`}
            className="absolute inset-0 block h-full w-full cursor-zoom-in"
          >
            <ProductImage
              src={current.src}
              alt={`${name} — ${current.label}`}
              icon={icon}
              series={series}
              seed={current.seed}
              priority
              className="h-full w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              fit="contain"
              overlay={false}
            />
          </motion.button>
        </AnimatePresence>

        <span className="glass absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-brand-ink">
          <Maximize2 className="h-4 w-4" aria-hidden="true" />
        </span>

        {views.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="glass absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-brand-ink transition-transform hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="glass absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-brand-ink transition-transform hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {views.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3" role="group" aria-label={`${name} images`}>
          {views.map((view, index) => (
            <button
              key={view.seed}
              type="button"
              onClick={() => selectView(index)}
              aria-pressed={index === active}
              aria-label={`Show ${view.label}`}
              className={cn(
                "overflow-hidden rounded-xl border transition-all",
                index === active
                  ? "border-brand-green ring-2 ring-brand-green/20"
                  : "border-brand-border hover:border-brand-green/40",
              )}
            >
              <ProductImage
                src={view.src}
                alt={`${name} — ${view.label} thumbnail`}
                icon={icon}
                seed={view.seed}
                className="aspect-4/3 w-full"
                sizes="(max-width: 1024px) 30vw, 160px"
                fit="contain"
                overlay={false}
              />
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-xs text-brand-subtle">{current.label}</p>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex flex-col bg-brand-ink/95"
            role="dialog"
            aria-modal="true"
            aria-label={`${name} image viewer`}
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="flex items-center justify-between gap-2 px-4 py-4 text-sm font-medium text-white/80 md:px-8"
              onClick={(event) => event.stopPropagation()}
            >
              <span>
                {active + 1} / {views.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={zoom <= MIN_ZOOM}
                  aria-label="Zoom out"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  <ZoomOut className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="w-11 text-center text-xs tabular-nums text-white/60">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={zoom >= MAX_ZOOM}
                  aria-label="Zoom in"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={!current.src}
                  aria-label="Download image"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  aria-label="Close image viewer"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-16"
              onClick={(event) => event.stopPropagation()}
            >
              {views.length > 1 && (
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
              )}

              <div
                ref={boundsRef}
                className="relative flex h-full max-h-[70vh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-xl"
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      drag={zoom > 1}
                      dragConstraints={boundsRef}
                      dragElastic={0.05}
                      dragMomentum={false}
                      onDragStart={() => setIsPanning(true)}
                      onDragEnd={() => setIsPanning(false)}
                      style={{ x: panX, y: panY, scale: zoom, touchAction: zoom > 1 ? "none" : "auto" }}
                      animate={{ scale: zoom }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        "relative h-full w-full",
                        zoom > 1 && (isPanning ? "cursor-grabbing" : "cursor-grab"),
                      )}
                    >
                      <ProductImage
                        src={current.src}
                        alt={`${name} — ${current.label}`}
                        icon={icon}
                        series={series}
                        seed={current.seed}
                        className="h-full w-full"
                        sizes="90vw"
                        fit="contain"
                        overlay={false}
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {views.length > 1 && (
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>

            {views.length > 1 && (
              <div
                className="flex justify-center gap-3 overflow-x-auto px-4 pb-6"
                onClick={(event) => event.stopPropagation()}
              >
                {views.map((view, index) => (
                  <button
                    key={view.seed}
                    type="button"
                    onClick={() => selectView(index)}
                    aria-pressed={index === active}
                    aria-label={`Show ${view.label}`}
                    className={cn(
                      "h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                      index === active ? "border-brand-green" : "border-white/20 hover:border-white/50",
                    )}
                  >
                    <ProductImage
                      src={view.src}
                      alt={`${name} — ${view.label} thumbnail`}
                      icon={icon}
                      seed={view.seed}
                      className="h-full w-full"
                      sizes="64px"
                      fit="contain"
                      overlay={false}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
