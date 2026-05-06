import PortfolioHero from "@/sections/portfolio/PortfolioHero";
import PortfolioShowcase from "@/sections/portfolio/PortfolioShowcase";
import PortfolioStorySection from "@/sections/portfolio/PortfolioStorySection";
import Portfolio3DSection from "@/sections/portfolio/Portfolio3DSection";
import { portfolioProjects } from "@/data/portfolioProjects";

export const metadata = {
  title: "Portfolio | Technodha",
};

export default function PortfolioPage() {
  const featuredProject = portfolioProjects[0];

  return (
    <div>
      <PortfolioHero />
      <Portfolio3DSection project={featuredProject} />
      <PortfolioStorySection project={featuredProject} />
      <PortfolioShowcase projects={portfolioProjects} />
    </div>
  );
}