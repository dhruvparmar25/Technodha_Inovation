import ContactSection from "@/sections/home/ContactSection";
import MobileHero from "@/sections/services/MobileHero";
import MobilePlatform from "@/sections/services/MobilePlatform";
import MobileProcess from "@/sections/services/MobileProcess";
import MobileSolutions from "@/sections/services/MobileSolutions";
import MobileTech from "@/sections/services/MobileTech";

export const metadata = {
    title: "MobileDevelopment | Technodha",
};

export default function MobileDevelopmentPage() {
    return <div>
        <MobileHero/>
        <MobileSolutions/>
        <MobilePlatform/>
        <MobileProcess/>
        <MobileTech/>
        <ContactSection/>
    </div>;
}
