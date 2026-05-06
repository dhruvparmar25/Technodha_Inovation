import ProjectsHero from "@/sections/projects/ProjectsHero";
import ProjectsOverview from "@/sections/projects/ProjectsOverview";
import ProjectsCaseStudies from "@/sections/projects/ProjectsCaseStudies";
import ProjectCTASection from "@/sections/about/ProjectCTASection";
import TechStackSection from "@/sections/home/TechStackSection";

export const metadata = {
  title: "Our Projects | Technodha",
};

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsHero />
      <ProjectsOverview />
            <section data-theme="dark">

      <TechStackSection />
</section>
      <ProjectsCaseStudies />
      <ProjectCTASection />
    </div>
  );
}
