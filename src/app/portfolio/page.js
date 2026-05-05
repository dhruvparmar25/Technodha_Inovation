import PortfolioHero from "@/sections/portfolio/PortfolioHero";
import PortfolioShowcase from "@/sections/portfolio/PortfolioShowcase";
import { portfolioProjects } from "@/data/portfolioProjects";

export const metadata = {
  title: "Portfolio | Technodha",
};

export default function PortfolioPage() {
  return (
    <div>
      <PortfolioHero />
      <PortfolioShowcase projects={portfolioProjects} />
    </div>
  );
}
