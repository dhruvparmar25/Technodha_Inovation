import Link from "next/link";
import { Icon } from "@iconify/react";
import { projectsData } from "@/sections/projects/projectsData";
import ProjectVisual from "@/sections/projects/ProjectVisual";

export default function ProjectsOverview() {
  return (
    <section data-theme="light" className="pt-10 pb-14 lg:pt-14 lg:pb-20">
      <div className="max-w-[1230px] px-[15px] m-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="section-title">REAL PRODUCT BUILDS</p>
          <h2 className="heading-primary">
            Case studies that moved from idea to
            <span className="highlight-primary">usable products</span>
          </h2>
          <p className="text-support">
            Every project below was shipped for a real team. We share the
            challenge, the approach, the stack, and what changed for the
            business after launch.
          </p>
        </div>

        {/* Alternating project rows */}
        <div className="mt-12 space-y-14 lg:space-y-20">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={project.slug}
                className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center"
              >
                {/* Visual side */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block rounded-3xl border border-[#F2C5BE] bg-[linear-gradient(135deg,#fff7f5_0%,#ffeae3_100%)] px-6 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-8 lg:pb-12 shadow-[0_18px_50px_rgba(34,34,43,0.08)] hover:shadow-[0_28px_60px_rgba(251,101,87,0.18)] transition-shadow"
                  >
                    {/* Top pills */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white border border-[#F2C5BE] px-3 py-1 text-[11px] font-medium tracking-[0.08em] uppercase text-[#FB6557]">
                          {project.category}
                        </span>
                        {project.platform && (
                          <span className="hidden sm:inline-block rounded-full bg-[#1A1A1F]/90 px-3 py-1 text-[11px] font-medium text-white">
                            {project.platform}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#6E5C59]">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(projectsData.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Layered visual */}
                    <ProjectVisual project={project} variant="card" />
                  </Link>
                </div>

                {/* Content side */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"
                  }`}
                >
                  <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#FE9139]">
                    Case Study · {project.year}
                  </p>
                  <h3 className="text-[#1A1A1F] text-[28px] sm:text-[32px] lg:text-[34px] leading-tight font-semibold mt-2">
                    {project.name}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] text-[#1A1A1F]/85 mt-3 font-medium leading-snug">
                    {project.tagline}
                  </p>
                  <p className="text-support">{project.summary}</p>

                  {/* Metrics */}
                  {project.metrics?.length > 0 && (
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-[#F2C5BE] bg-white px-3 py-3 text-center"
                        >
                          <p className="text-[18px] sm:text-[20px] font-semibold text-[#FB6557] leading-tight">
                            {metric.value}
                          </p>
                          <p className="text-[11px] text-[#5F5F6B] leading-snug mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech preview */}
                  {project.techStack?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#F2C5BE] bg-[#fff7f5] px-3 py-1 text-[12px] font-medium text-[#1A1A1F]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="rounded-full bg-[#fff7f5] px-3 py-1 text-[12px] font-medium text-[#6E5C59]">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#FB6557] hover:text-[#FE9139] transition-colors group"
                  >
                    Read the full case study
                    <Icon
                      icon="lucide:arrow-right"
                      className="text-[18px] transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
