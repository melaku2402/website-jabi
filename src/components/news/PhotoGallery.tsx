

"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { photoGallery } from "@/data/news-content";

const INITIAL_COUNT = 6;
const STEP_COUNT = 6;

export function PhotoGallery() {
  const t = useTranslations("NewsPage.photoGallery");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure portal only mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const displayedImages = photoGallery.slice(0, visibleCount);
  const hasMore = visibleCount < photoGallery.length;
  const isExpanded = visibleCount > INITIAL_COUNT && !hasMore;

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % photoGallery.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prev) => (prev! - 1 + photoGallery.length) % photoGallery.length,
      );
    }
  }, [selectedIndex]);

  // Lock scroll & bind keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <>
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-950">
          {t("heading")}
        </h3>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {displayedImages.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              onClick={() => setSelectedIndex(idx)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all hover:shadow-md"
            >
              <Image
                src={src}
                alt={`Gallery photo ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950/40 p-2 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                <Maximize2 className="h-5 w-5 text-white drop-shadow-md" />
                <span className="mt-1 text-center text-xs font-medium text-white drop-shadow">
                  {t("clickToView")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Pagination Action Controls */}
        <div className="mt-4">
          {hasMore && (
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + STEP_COUNT, photoGallery.length),
                )
              }
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-blue-950 transition-colors hover:bg-gray-50 active:bg-gray-100"
            >
              {t("viewMore")} <ChevronDown className="h-4 w-4" />
            </button>
          )}

          {isExpanded && (
            <button
              onClick={() => setVisibleCount(INITIAL_COUNT)}
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-blue-950 transition-colors hover:bg-gray-50 active:bg-gray-100"
            >
              {t("viewLess")} <ChevronUp className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Render Modal into document.body using React Portal */}
      {mounted &&
        selectedIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-slate-950/80 p-4 pt-24 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex h-[75vh] w-full max-w-5xl flex-col items-center justify-between rounded-2xl bg-white/10 p-4 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white/90 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Main Image View Container */}
              <div className="relative flex h-full w-full max-w-4xl items-center justify-center overflow-hidden">
                <Image
                  src={photoGallery[selectedIndex]}
                  alt={`Photo ${selectedIndex + 1}`}
                  fill
                  className="rounded-xl object-contain"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>

              {/* Bottom Floating Control Bar */}
              <div className="mt-4 flex items-center justify-between gap-6 rounded-full bg-black/60 px-5 py-2 backdrop-blur-md">
                <button
                  onClick={handlePrev}
                  className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                  {photoGallery.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
                        idx === selectedIndex
                          ? "w-5 bg-emerald-400"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}