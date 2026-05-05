"use client";

import Link from "next/link";
import CommonPageHero from "@/components/common/CommonPageHero";
import heroBg from "@/assets/images/common/hero-bg.png";

export default function PortfolioHero() {
  return (
    <section className="relative" data-theme="light">
      <CommonPageHero bgImage={heroBg} title="Our" highlight="Portfolio" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-12 right-12 h-44 w-44 rounded-full bg-secondary/25 blur-3xl animate-pulse" />
      </div>

      <div className="absolute inset-x-0 bottom-10 z-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
        

          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Our Work
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full border border-[#f2c5be] bg-white/80 text-[#2c2c2c] text-sm font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
