"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function ProjectScreenshotSlider({
  images,
  projectName,
  isMobileApp = false,
}) {
  const [active, setActive] = useState(null);

  // Close lightbox on ESC + lock body scroll while open
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  if (!images?.length) return null;

  const cardWidth = isMobileApp
    ? "w-[150px] sm:w-[170px] lg:w-[190px]"
    : "w-[290px] sm:w-[340px] lg:w-[380px]";

  return (
    <>
      <div className="group relative overflow-hidden rounded-3xl border border-[#F2C5BE] bg-[linear-gradient(135deg,#fff7f5_0%,#ffeae3_100%)] py-6 sm:py-8">
        {/* Auto-scrolling chain */}
        <div className="flex w-max gap-5 sm:gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, idx) => {
            const realIdx = idx % images.length;
            return (
              <button
                key={`${projectName}-${idx}`}
                type="button"
                onClick={() => setActive({ image: img, index: realIdx })}
                aria-label={`View ${projectName} screenshot ${realIdx + 1}`}
                className={`${cardWidth} shrink-0 cursor-zoom-in transition-transform duration-300 hover:-translate-y-1`}
              >
                {isMobileApp ? (
                  <div className="rounded-[22px] overflow-hidden bg-white shadow-[0_14px_32px_rgba(34,34,43,0.18)] ring-1 ring-black/5">
                    <div className="relative aspect-[9/19]">
                      <Image
                        src={img}
                        alt={`${projectName} screen ${realIdx + 1}`}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#F2C5BE] shadow-[0_14px_40px_rgba(34,34,43,0.12)]">
                    <div className="flex items-center gap-1 px-2.5 py-2 bg-[#fff7f5] border-b border-[#F2C5BE]">
                      <span className="w-2 h-2 rounded-full bg-[#FB6557]" />
                      <span className="w-2 h-2 rounded-full bg-[#FE9139]" />
                      <span className="w-2 h-2 rounded-full bg-[#34d399]" />
                    </div>
                    <div className="relative aspect-[16/10] bg-white">
                      <Image
                        src={img}
                        alt={`${projectName} screen ${realIdx + 1}`}
                        fill
                        sizes="400px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Edge fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#fff7f5] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#fff7f5] to-transparent" />
      </div>

      <p className="mt-4 text-center text-[12px] text-[#6E5C59]">
        Hover to pause · Click any screen to expand
      </p>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} screenshot preview`}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close preview"
            className="absolute top-4 right-4 z-10 rounded-full bg-white/95 w-10 h-10 flex items-center justify-center text-[#1A1A1F] hover:bg-white shadow-lg"
          >
            <Icon icon="lucide:x" className="text-[20px]" />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={`${projectName} screenshot ${active.index + 1}`}
              className="w-auto h-auto max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 backdrop-blur text-white px-4 py-1.5 text-[12px] font-medium">
            {active.index + 1} / {images.length} · Press ESC to close
          </p>
        </div>
      )}
    </>
  );
}
