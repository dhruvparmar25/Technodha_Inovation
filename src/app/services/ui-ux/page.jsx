import ContactSection from "@/sections/home/ContactSection";
import UIUXHero from "@/sections/services/UIUXHero";
import UIUXProcess from "@/sections/services/UIUXProcess";
import UIUXSolutions from "@/sections/services/UIUXSolutions";
import UIUXTools from "@/sections/services/UIUXTech";
import UXFlow from "@/sections/services/UXFlow";

export const metadata = {
    title: "UiuxDesign | Technodha",
};

export default function UiuxDesignPage() {
    return <div>
        <UIUXHero/>
        <UIUXSolutions/>
        <UIUXProcess/>
        <UXFlow/>
        <UIUXTools/>
        <ContactSection/>
    </div>;
}
