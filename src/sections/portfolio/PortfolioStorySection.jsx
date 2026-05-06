"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function PortfolioStorySection({ project }) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={project.image} // You might want a different image here
                alt={`${project.name} feature showcase`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="max-w-xl">
              <h2 className="heading-primary">The Story Behind {project.name}</h2>
              <p className="text-support mt-4 mb-6">
                {project.shortDescription} Our team collaborated closely with the client to understand their vision and challenges. We crafted a bespoke solution focusing on user experience, performance, and scalability, delivering a product that exceeded expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Icon icon="ph:strategy-bold" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Strategic Planning</h3>
                    <p className="text-support mt-1">
                      Defined project goals, user personas, and a comprehensive roadmap for development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Icon icon="ph:desktop-tower-bold" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Design & Development</h3>
                    <p className="text-support mt-1">
                      Executed an iterative design and development process with continuous feedback and refinement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}