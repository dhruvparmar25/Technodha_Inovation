import PortfolioPage from "@/sections/portfolio/PortfolioPage";
import { portfolioProjects } from "@/data/projects";

export const metadata = {
  title: "Portfolio | Technodha",
};

export default function Portfolio() {
  return <PortfolioPage projects={portfolioProjects} />;
}
