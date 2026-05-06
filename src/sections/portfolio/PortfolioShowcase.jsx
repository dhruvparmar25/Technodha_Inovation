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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 80}>
              <article className="group relative w-full rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 border border-gray-200/80">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3} // Prioritize loading for the first few images
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="absolute top-4 right-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
                      >
                        <Icon icon="fa6-solid:arrow-right" className="w-5 h-5 text-primary" />
                      </Link>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-gray-500 text-sm leading-6 mt-2 mb-4">{project.shortDescription}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-md bg-gray-100 text-gray-600"
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