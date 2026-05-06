"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectScreenshotSlider({ images, projectName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2600);

    return () => clearInterval(intervalId);
  }, [images]);

  if (!images?.length) return null;

  return (
    <section className="rounded-3xl border border-[#F2C5BE] bg-white p-4 md:p-6">
      <div className="relative overflow-hidden rounded-2xl border border-[#f6ddd8] bg-[#fff7f5]">
        <Image
          src={images[activeIndex]}
          alt={`${projectName} screenshot ${activeIndex + 1}`}
          className="w-full h-[240px] sm:h-[320px] lg:h-[460px] object-contain"
          priority
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to screenshot ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-[#FB6557]"
                : "w-2.5 bg-[#E8C8C2] hover:bg-[#dcaea5]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
