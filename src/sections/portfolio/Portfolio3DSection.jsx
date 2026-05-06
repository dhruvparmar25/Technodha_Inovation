"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function Portfolio3DSection({ project }) {
  return (
    <section data-theme="light" className="py-12 md:py-16 lg:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealOnScroll className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="heading-primary">Featured Project Showcase</h2>
              <p className="text-support mt-4 mb-6">
                A look at the {project.name} project, where we combined creative design with robust technology to deliver an exceptional user experience. We focused on clean aesthetics and seamless functionality.
              </p>
              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore The Project
                <Icon icon="fa6-solid:arrow-right" className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="order-1 lg:order-2" delay={100}>
            <div className="relative aspect-video overflow-hidden group">
              <div className="absolute inset-0" />
              <Image
                src="/portfolio.gif"
                alt={`Showcase of ${project.name}`}
                fill
                sizes="(max-width: 1440px) 100vw, 50vw"
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}