import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projectsData,
} from "@/sections/projects/projectsData";
import ProjectScreenshotSlider from "@/sections/projects/ProjectScreenshotSlider";
import ProjectVisual from "@/sections/projects/ProjectVisual";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Technodha" };
  }

  return {
    title: `${project.name} | Technodha Case Study`,
    description: project.summary || project.short,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  const overviewItems = [
    { label: "Client", value: project.client },
    { label: "Industry", value: project.industry },
    { label: "Platform", value: project.platform },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
  ].filter((item) => Boolean(item.value));

  return (
    <article data-theme="light" className="bg-[#faf9f6]">
      {/* ===== HERO ===== */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 bg-[linear-gradient(180deg,#fff7f5_0%,#faf9f6_100%)] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-[#FB6557]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-[#FE9139]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1230px] px-[15px] m-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#6E5C59] hover:text-[#FB6557] transition-colors"
          >
            <Icon icon="lucide:arrow-left" className="text-[16px]" />
            Back to all projects
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Text side */}
            <div className="lg:col-span-5 lg:pr-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white border border-[#F2C5BE] px-3 py-1 text-[11px] font-medium tracking-[0.08em] uppercase text-[#FB6557]">
                  {project.category}
                </span>
                {project.platform && (
                  <span className="rounded-full bg-[#1A1A1F]/90 px-3 py-1 text-[11px] font-medium text-white">
                    {project.platform}
                  </span>
                )}
              </div>

              <h1 className="text-[#1A1A1F] text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] font-semibold mt-4">
                {project.name}
              </h1>
              {project.tagline && (
                <p className="text-[17px] sm:text-[18px] text-[#1A1A1F]/80 mt-3 font-medium leading-snug">
                  {project.tagline}
                </p>
              )}
              <p className="text-[15px] leading-[1.75] text-[#5F5F6B] mt-4">
                {project.summary}
              </p>

              {/* Overview meta */}
              {overviewItems.length > 0 && (
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#F2C5BE] pt-5">
                  {overviewItems.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#FE9139]">
                        {item.label}
                      </dt>
                      <dd className="text-[13px] text-[#1A1A1F] mt-1 leading-snug font-medium">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {/* Tech stack — in context with project info */}
              {project.techStack?.length > 0 && (
                <div className="mt-6 border-t border-[#F2C5BE] pt-5">
                  <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#FE9139] mb-3">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#F2C5BE] bg-white px-3 py-1 text-[12px] font-medium text-[#1A1A1F]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Visual side */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#F2C5BE] bg-[linear-gradient(135deg,#fff7f5_0%,#ffeae3_100%)] px-5 pt-5 pb-7 sm:px-7 sm:pt-7 sm:pb-9 lg:px-9 lg:pt-9 lg:pb-12 shadow-[0_24px_60px_rgba(34,34,43,0.12)]">
                <ProjectVisual project={project} variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== METRICS STRIP ===== */}
      {project.metrics?.length > 0 && (
        <section className="border-y border-[#F2C5BE] bg-white">
          <div className="max-w-[1230px] px-[15px] m-auto py-7 lg:py-9 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-center sm:text-left">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 justify-center sm:justify-start"
              >
                <p className="text-[34px] sm:text-[38px] font-semibold leading-none bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="text-[13px] text-[#5F5F6B] leading-snug max-w-[200px] mx-auto sm:mx-0">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== CHALLENGE ===== */}
      {project.problem && (
        <section className="py-10 lg:py-14">
          <div className="max-w-[1230px] px-[15px] m-auto grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-14 items-start">
            <div>
              <p className="section-title">THE CHALLENGE</p>
              <h2 className="heading-primary">
                What we were
                <span className="highlight-primary">solving for</span>
              </h2>
              <p className="text-support">
                The problem we set out to solve — and why it mattered to the
                people using the product every day.
              </p>
            </div>
            <div className="space-y-5">
              {(Array.isArray(project.problem)
                ? project.problem
                : project.problem.split(/\n{2,}/)
              ).map((para, i) => (
                <p
                  key={i}
                  className="text-[16px] sm:text-[17px] leading-[1.85] text-[#1A1A1F]/85"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== APPROACH ===== */}
      {project.approach?.length > 0 && (
        <section className="py-10 lg:py-14 bg-[#fff7f5]">
          <div className="max-w-[1230px] px-[15px] m-auto">
            <div className="max-w-2xl">
              <p className="section-title">OUR APPROACH</p>
              <h2 className="heading-primary">
                How we
                <span className="highlight-primary">built it</span>
              </h2>
              <p className="text-support">
                We worked in clear phases — discovery, design, and engineering —
                so the team always knew what was being decided and why.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {project.approach.map((step, idx) => (
                <div
                  key={step.title}
                  className="relative rounded-3xl border border-[#F2C5BE] bg-white p-6 lg:p-7 shadow-[0_10px_30px_rgba(34,34,43,0.06)]"
                >
                  <span className="digit font-[900] text-[32px] leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-semibold text-[#1A1A1F] mt-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-7 text-[#5F5F6B] mt-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURES ===== */}
      {project.features?.length > 0 && (
        <section className="py-10 lg:py-14">
          <div className="max-w-[1230px] px-[15px] m-auto grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-14 items-start">
            <div>
              <p className="section-title">KEY FEATURES</p>
              <h2 className="heading-primary">
                What this product
                <span className="highlight-primary">actually does</span>
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-[#F2C5BE] bg-white p-4"
                >
                  <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] text-white shrink-0">
                    <Icon icon="lucide:check" className="text-[14px]" />
                  </span>
                  <span className="text-[14px] leading-6 text-[#1A1A1F]/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== GALLERY ===== */}
      {project.screenshots?.length > 0 && (
        <section className="py-10 lg:py-14 bg-[#fff7f5]">
          <div className="max-w-[1230px] px-[15px] m-auto">
            <div className="max-w-2xl">
              <p className="section-title">PRODUCT GALLERY</p>
              <h2 className="heading-primary">
                A closer look at the
                <span className="highlight-primary">interface</span>
              </h2>
            </div>
            <div className="mt-8">
              <ProjectScreenshotSlider
                images={project.screenshots}
                projectName={project.name}
                isMobileApp={project.isMobileApp}
              />
            </div>
          </div>
        </section>
      )}

      {/* ===== RESULTS ===== */}
      {project.results?.length > 0 && (
        <section className="py-10 lg:py-14">
          <div className="max-w-[1230px] px-[15px] m-auto">
            <div className="max-w-2xl">
              <p className="section-title">RESULTS &amp; IMPACT</p>
              <h2 className="heading-primary">
                What changed
                <span className="highlight-primary">after launch</span>
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.results.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-3xl border border-[#F2C5BE] bg-white p-6 flex gap-4 items-start"
                >
                  <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#fff7f5] text-[#FB6557] shrink-0">
                    <Icon icon="lucide:trending-up" className="text-[18px]" />
                  </span>
                  <p className="text-[15px] leading-7 text-[#1A1A1F]/90">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA + NEXT PROJECT ===== */}
      <section className="py-10 lg:py-14">
        <div className="max-w-[1230px] px-[15px] m-auto">
          <div className="rounded-3xl border border-[#F2C5BE] bg-[#fff7f5] p-8 sm:p-12 text-center">
            <p className="section-title">LET&apos;S BUILD</p>
            <h2 className="heading-primary">
              Need a product like
              <span className="highlight-primary">{project.name}</span>?
            </h2>
            <p className="text-support max-w-2xl mx-auto">
              We help teams plan, design, and ship reliable digital products
              that are ready for real users from day one.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(251,101,87,0.35)] hover:opacity-95 transition-opacity"
            >
              Start your project
              <Icon icon="lucide:arrow-right" className="text-[16px]" />
            </Link>
          </div>

          {(prev || next) && (
            <nav
              aria-label="Project navigation"
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {prev && (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group rounded-2xl border border-[#F2C5BE] bg-white p-5 flex items-center gap-4 hover:border-[#FB6557] transition-colors"
                >
                  <Icon
                    icon="lucide:arrow-left"
                    className="text-[20px] text-[#FB6557] shrink-0 transition-transform group-hover:-translate-x-1"
                  />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-[#FE9139]">
                      Previous Case Study
                    </p>
                    <p className="text-[15px] font-semibold text-[#1A1A1F] mt-1">
                      {prev.name}
                    </p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group rounded-2xl border border-[#F2C5BE] bg-white p-5 flex items-center justify-end gap-4 hover:border-[#FB6557] transition-colors text-right sm:col-start-2"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-[#FE9139]">
                      Next Case Study
                    </p>
                    <p className="text-[15px] font-semibold text-[#1A1A1F] mt-1">
                      {next.name}
                    </p>
                  </div>
                  <Icon
                    icon="lucide:arrow-right"
                    className="text-[20px] text-[#FB6557] shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </article>
  );
}
