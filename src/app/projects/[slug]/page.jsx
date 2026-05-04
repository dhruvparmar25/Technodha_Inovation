import { notFound } from "next/navigation";
import ProjectDetailPage from "@/sections/projects/ProjectDetailPage";
import { projectDetails } from "@/data/projects";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    return { title: "Project Not Found | Technodha" };
  }

  return {
    title: `${project.title} | Technodha`,
  };
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
