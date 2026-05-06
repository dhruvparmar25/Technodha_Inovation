"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function ProjectDetail({ project }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section data-theme="light" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* Left Column: Details & Features */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">{project.name}</h1>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">{project.fullDescription}</p>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon icon={feature.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg">{feature.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Image & Tech Stack */}
            <div className="lg:col-span-1 space-y-8 sticky top-24">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200/80">
                <div className="relative aspect-[16/10]">
                  <Image src={project.image} alt={project.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" priority />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-md bg-gray-200 text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12" delay={80}>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c2c2c] mb-5">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#f2c5be] bg-white p-5">
                <Icon icon={item.icon} className="w-6 h-6 text-[#fb6557] mb-3" />
                <p className="text-2xl font-bold text-[#2c2c2c]">{item.value}</p>
                <p className="text-sm text-[#5f5f6b] mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12" delay={160}>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c2c2c] mb-5">Screenshots</h2>
          <div className="relative overflow-hidden rounded-2xl border border-[#f2c5be] bg-white py-3">
            <div className="screenshot-marquee group overflow-x-auto no-scrollbar">
              <div className="screenshot-marquee-track group-hover:[animation-play-state:paused]">
                {[...project.screenshots, ...project.screenshots].map((shot, index) => {
                  const actualIndex = index % project.screenshots.length;
                  return (
                    <button
                      key={`${project.id}-shot-${index}`}
                      type="button"
                      onClick={() => setActiveImage(actualIndex)}
                      className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] aspect-[16/10] rounded-xl overflow-hidden border border-[#f2c5be] bg-white group/item shadow-[0_12px_30px_rgba(44,44,44,0.08)]"
                    >
                      <Image
                        src={shot}
                        alt={`${project.name} screenshot ${actualIndex + 1}`}
                        fill
                        loading="lazy"
                        className="object-cover rounded-2xl transition-transform duration-500 group-hover/item:scale-105 p-1  "
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 380px"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-14" delay={220}>
          <div className="rounded-3xl border border-[#f2c5be] bg-white p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c2c2c]">Have a project in mind?</h2>
            <p className="text-support mt-3 mb-6">Let&apos;s build a scalable digital solution tailored to your business goals.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold transition-transform duration-300 hover:-translate-y-0.5">
              Start Your Project
              <Icon icon="fa6-solid:arrow-right" className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      {activeImage !== null && (
        <div className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center p-4" onClick={() => setActiveImage(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white bg-white/20 rounded-full p-2"
            >
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/30 bg-black">
              <Image
                src={project.screenshots[activeImage]}
                alt={`${project.name} preview ${activeImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}