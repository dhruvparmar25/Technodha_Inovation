import ContactSection from "@/sections/home/ContactSection";
import CloudHero from "@/sections/services/CloudHero";
import CloudPlatform from "@/sections/services/CloudPlatform";
import CloudProcess from "@/sections/services/CloudProcess";
import CloudSolutions from "@/sections/services/CloudSolutions";
import CloudTech from "@/sections/services/CloudTech";

export const metadata = {
    title: "CloudComputing | Technodha",
};

export default function CloudComputingPage() {
    return <div>
        <CloudHero/>
        <CloudSolutions/>
        <CloudProcess/>
        <CloudPlatform/>
        <CloudTech/>
        <ContactSection/>
    </div>;
}
