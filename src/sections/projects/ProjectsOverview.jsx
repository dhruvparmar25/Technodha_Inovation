import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/common/GradientButton";
import { projectsData } from "@/sections/projects/projectsData";

export default function ProjectsOverview() {
  return (
    <section data-theme="light" className="py-16">
      <div className="max-w-[1230px] px-[15px] m-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="section-title">REAL PRODUCT BUILDS</p>
          <h2 className="heading-primary">
            Case studies that moved from idea to
            <span className="highlight-primary">usable products</span>
          </h2>
          <p className="text-support">
            Each project focuses on UI clarity, business workflows, and scalable architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projectsData.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-[#F2C5BE] bg-white p-5 md:p-6 shadow-[0_10px_35px_rgba(34,34,43,0.07)]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#FCE6E1] bg-[#fff7f5]">
                <Image
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-[220px] md:h-[240px] object-cover"
                />
              </div>
              <div className="mt-5">
                <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#FE9139]">{project.category}</p>
                <h3 className="text-[#1A1A1F] text-[22px] font-semibold mt-2">{project.name}</h3>
                <p className="text-support mt-3">{project.short}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 inline-block text-[14px] font-medium text-[#FB6557] hover:text-[#fe9139] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact">
            <GradientButton text="Discuss Your Project" className="text-[#1A1A1F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
