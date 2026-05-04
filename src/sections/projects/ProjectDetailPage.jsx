import Link from "next/link";
import GradientButton from "@/components/common/GradientButton";

export default function ProjectDetailPage({ project }) {
  return (
    <div data-theme="light" className="pb-16">
      <section className="max-w-[1230px] px-[15px] m-auto pt-20 lg:pt-24">
        <div className="bg-white rounded-2xl border border-(--color-border) p-8 lg:p-12 shadow-sm">
          <span className="section-title">CASE STUDY</span>
          <h1 className="heading-primary mt-2">{project.title}</h1>
          <p className="text-support max-w-4xl">{project.shortDescription}</p>
          <Link href="/contact" className="inline-block mt-6">
            <GradientButton text={project.ctaLabel} />
          </Link>
        </div>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-16">
        <div className="bg-white rounded-xl border border-(--color-border) p-7 lg:p-8 shadow-sm">
          <h2 className="heading-primary">Overview</h2>
          <p className="text-support">{project.overview}</p>
        </div>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-16">
        <div className="bg-white rounded-xl border border-(--color-border) p-7 lg:p-8 shadow-sm">
          <h2 className="heading-primary">The Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {project.problem.map((point) => (
              <div key={point} className="rounded-xl border border-(--color-border) bg-[#fff9f8] p-5">
                <p className="text-[#5F5F6B] text-sm leading-6">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-16">
        <div className="bg-white rounded-xl border border-(--color-border) p-7 lg:p-8 shadow-sm">
          <h2 className="heading-primary">The Solution</h2>
          <p className="text-support">{project.solution}</p>
        </div>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-16">
        <h2 className="heading-primary text-center">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {project.keyFeatures.map((feature) => (
            <article key={feature.title} className="bg-white rounded-xl border border-(--color-border) p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[18px] font-medium text-[#1A1A1F]">{feature.title}</h3>
              <p className="text-sm text-[#5F5F6B] leading-6 mt-2">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-16">
        <h2 className="heading-primary text-center">Screens / Preview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-2 bg-white border border-(--color-border) rounded-xl min-h-[320px] flex items-center justify-center text-[#6E5C59] text-sm shadow-sm">
            Primary UI Preview Placeholder
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white border border-(--color-border) rounded-xl min-h-[147px] flex items-center justify-center text-[#6E5C59] text-sm shadow-sm">
              Screen Placeholder 1
            </div>
            <div className="bg-white border border-(--color-border) rounded-xl min-h-[147px] flex items-center justify-center text-[#6E5C59] text-sm shadow-sm">
              Screen Placeholder 2
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-16">
        <div className="bg-white rounded-xl border border-(--color-border) p-7 lg:p-8 shadow-sm">
          <h2 className="heading-primary">Outcomes / Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {project.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-xl border border-(--color-border) p-5 bg-[#fffdfc]">
                <p className="text-[#1A1A1F] text-sm leading-6 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-16">
        <div className="bg-white rounded-2xl border border-(--color-border) p-8 lg:p-10 text-center shadow-sm">
          <span className="section-title">READY TO BUILD</span>
          <h2 className="heading-primary">Let us design your next scalable product system</h2>
          <p className="text-support max-w-3xl m-auto">Share your scope and we will suggest the best execution path based on your product stage and business goals.</p>
          <Link href="/contact" className="inline-block mt-6">
            <GradientButton text="Start Your Project" className="m-auto" />
          </Link>
        </div>
      </section>
    </div>
  );
}
