import ProjectsHero from "@/sections/projects/ProjectsHero";
import ProjectsOverview from "@/sections/projects/ProjectsOverview";
import ProjectsClosingCTA from "@/sections/projects/ProjectsClosingCTA";
import TechStackSection from "@/sections/home/TechStackSection";

export const metadata = {
  title: "Our Projects | Technodha",
  description:
    "Selected case studies from Technodha — enterprise healthcare platforms, mobile apps, and on-demand service products. See the challenge, approach, stack, and outcomes for each build.",
};

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsHero />
      <ProjectsOverview />
      <section data-theme="dark" className="bg-black">
        <TechStackSection />
      </section>
      <ProjectsClosingCTA />
    </div>
  );
}
