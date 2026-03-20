import ContactSection from "@/sections/home/ContactSection";
import TechStackSection from "@/sections/home/TechStackSection";
import Matters from "@/sections/home/Matters";

import WebProcess from "@/sections/services/WebProcess";
import WebDevelopmentHero from "@/sections/services/WebDevelopmentHero";
import WebSolutionsSection from "@/sections/services/WebSolutionsSection";

export const metadata = {
    title: "WebDevelopment | Technodha",
};

export default function WebDevelopmentPage() {
    return <div>
        <WebDevelopmentHero/>
        <WebSolutionsSection/>
        <Matters/>
        <WebProcess/>
        <TechStackSection/>
        <ContactSection/>
    </div>;
}
