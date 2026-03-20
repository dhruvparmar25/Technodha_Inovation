import AboutCompany from "@/sections/about/AboutCompany";
import AboutExist from "@/sections/about/AboutExist";
import AboutHero from "@/sections/about/AboutHero";
import CollaborationSection from "@/sections/about/CollaborationSection";
import ExpectationsSection from "@/sections/about/ExpectationsSection";
import HoverCardsSection from "@/sections/about/HoverCardsSection";
import PrinciplesSection from "@/sections/about/PrinciplesSection";
import ProjectCTASection from "@/sections/about/ProjectCTASection";

export const metadata = {
    title: "About Us | Technodha",
};

export default function AboutPage() {
    return <div>
        <AboutHero />
        <AboutCompany />
        <HoverCardsSection/>
        <AboutExist/>
        <PrinciplesSection/>
        <CollaborationSection/>
        <ExpectationsSection/>
        <ProjectCTASection/>
    </div>;
}
