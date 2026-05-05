import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolioProjects";
import PortfolioHero from "@/sections/portfolio/PortfolioHero";
import ProjectDetail from "@/sections/portfolio/ProjectDetail";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.name} | Portfolio | Technodha` : "Project | Technodha",
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <div>
      <PortfolioHero />
      <ProjectDetail project={project} />
    </div>
  );
}
