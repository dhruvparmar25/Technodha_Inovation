import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectsData } from "@/sections/projects/projectsData";
import ProjectScreenshotSlider from "@/sections/projects/ProjectScreenshotSlider";

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
    title: `${project.name} | Technodha Projects`,
    description: project.short,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const highlightItems = [
    {
      title: "Product Focus",
      value: project.category,
    },
    {
      title: "Delivery Scope",
      value: "UX, frontend engineering, and workflow implementation",
    },
    {
      title: "Core Priority",
      value: "Reliability, clarity, and scalable architecture",
    },
  ];

  return (
    <section data-theme="light" className="pt-34 pb-16">
      <div className="max-w-[1230px] px-[15px] m-auto">
        <Link href="/projects" className="text-[14px] text-[#6E5C59] hover:text-[#FB6557] transition-colors">
          Back to Projects
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#FE9139]">{project.category}</p>
            <h1 className="text-[#1A1A1F] text-[34px] sm:text-[42px] leading-tight font-semibold mt-2">{project.name}</h1>
            <p className="text-support mt-4">{project.description}</p>

            <ul className="mt-6 grid gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="text-[15px] text-[#4E4E58] leading-7">
                  <span className="text-[#FB6557] mr-2">-</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#F2C5BE] bg-white p-3 sm:p-4">
            <Image
              src={project.heroImage}
              alt={project.name}
              className="w-full h-[250px] sm:h-[330px] object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-4">
            <p className="section-title">SCREENSHOTS</p>
            <h2 className="heading-primary">Live UI Flow Slider</h2>
          </div>
          <ProjectScreenshotSlider images={project.screenshots} projectName={project.name} />
        </div>

        <div className="mt-14">
          <p className="section-title">PROJECT SNAPSHOT</p>
          <h2 className="heading-primary">Project Highlights</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {highlightItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#F2C5BE] bg-white p-5 shadow-[0_8px_24px_rgba(34,34,43,0.06)]"
              >
                <p className="text-[12px] uppercase tracking-[0.08em] text-[#FE9139]">{item.title}</p>
                <p className="mt-2 text-[15px] leading-7 text-[#4E4E58]">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-[#F2C5BE] bg-[#fff7f5] p-7 sm:p-10 text-center">
          <p className="section-title">LET'S BUILD</p>
          <h2 className="heading-primary">
            Need a product like <span className="highlight-primary">{project.name}</span>?
          </h2>
          <p className="text-support max-w-2xl mx-auto">
            We help teams plan, design, and build reliable digital products that are ready for real users.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] px-7 py-3 text-[14px] font-semibold text-[#1A1A1F] transition-opacity hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </div>

      <div className="max-w-[1230px] px-[15px] m-auto mt-14">
        <p className="section-title">DELIVERY MODEL</p>
        <h2 className="heading-primary">Execution Phases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.deliveryPhases.map((phase, index) => (
            <article
              key={phase}
              className="rounded-2xl border border-[#F2C5BE] bg-white p-5 shadow-[0_8px_24px_rgba(34,34,43,0.06)]"
            >
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#FE9139]">
                Phase {index + 1}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#4E4E58]">{phase}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="max-w-[1230px] px-[15px] m-auto mt-14">
        <p className="section-title">TECH STACK</p>
        <h2 className="heading-primary">Core Technologies Used</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#F2C5BE] bg-[#fff7f5] px-4 py-2 text-[13px] font-medium text-[#1A1A1F]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1230px] px-[15px] m-auto mt-14">
        <p className="section-title">BUSINESS IMPACT</p>
        <h2 className="heading-primary">Outcome Highlights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.outcomes.map((outcome) => (
            <article
              key={outcome}
              className="rounded-2xl border border-[#F2C5BE] bg-white p-5 shadow-[0_8px_24px_rgba(34,34,43,0.06)]"
            >
              <p className="text-[15px] leading-7 text-[#4E4E58]">{outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
