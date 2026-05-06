"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function PortfolioShowcase({ projects }) {
  return (
    <section id="projects" data-theme="light" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="heading-primary">Explore our latest work and innovative solutions</h2>
          <p className="text-support mt-4">
            We craft scalable digital products focused on performance, usability, and long-term business value.
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center items-center xl:justify-center gap-7">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 80}>
              <article className="group relative w-full sm:w-[420px] rounded-2xl border border-[#f2c5be] bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_45px_rgba(251,101,87,0.16)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 p-2 rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-white text-[#2c2c2c] text-sm font-semibold px-4 py-2 transition-transform duration-300 hover:translate-x-1"
                      >
                        View Details
                        <Icon icon="fa6-solid:arrow-right" className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2c2c2c]">{project.name}</h3>
                  <p className="text-support text-sm leading-6 mt-3 mb-4">{project.shortDescription}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#fff1ed] text-[#fb6557] border border-[#f2c5be]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </RevealOnScroll>
            
          ))}
        </div>

        <RevealOnScroll className="mt-14" delay={180}>
          <div className="rounded-3xl border border-[#f2c5be] bg-white p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2c2c2c]">Have a project in mind?</h2>
            <p className="text-support mt-3 mb-6">
              Partner with Technodha to turn your product vision into a high-performing digital solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
              <Icon icon="fa6-solid:arrow-right" className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}