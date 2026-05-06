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
              className="px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Our Work
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-transparent bg-white/90 text-gray-800 font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}