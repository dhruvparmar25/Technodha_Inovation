import ContactSection from "@/sections/home/ContactSection";
import ContactHero from "@/sections/contact/ContactHero";
import ContactCTASection from "@/sections/contact/ContactCTASection";
import ContactHeader from "@/sections/contact/ContactHeader";
import MapSection from "@/sections/contact/MapSection";

export const metadata = {
    title: "Contact | Technodha",
};

export default function ContactPage() {
    return <div>
        <ContactHero/>
        <ContactCTASection/>
        <ContactHeader/>
        <ContactSection/>
        <MapSection/>
    </div>;
}

