import Link from "next/link";
import GradientButton from "@/components/common/GradientButton";

export default function PortfolioPage({ projects }) {
  return (
    <div data-theme="light" className="pb-16">
      <section className="max-w-[1230px] px-[15px] m-auto pt-20 lg:pt-24 text-center">
        <span className="section-title">OUR WORK</span>
        <h1 className="heading-primary">Portfolio</h1>
        <p className="text-support max-w-3xl m-auto">
          Explore selected product engagements delivered with the same reliable process, clean architecture, and scalable design approach.
        </p>
      </section>

      <section className="max-w-[1230px] px-[15px] m-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="bg-white rounded-xl border border-(--color-border) p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="rounded-xl border border-dashed border-(--color-border) min-h-[200px] bg-[#fff8f6] flex items-center justify-center text-[#6E5C59] text-sm">
                Project Image Placeholder
              </div>
              <h2 className="text-[22px] leading-8 font-medium text-[#1A1A1F] mt-5">{project.title}</h2>
              <p className="text-sm text-[#5F5F6B] leading-6 mt-2 min-h-[72px]">{project.description}</p>
              <Link href={project.detailLink} className="inline-block mt-4">
                <GradientButton text="View Details" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
