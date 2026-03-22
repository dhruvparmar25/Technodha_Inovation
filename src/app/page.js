import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseSection from "@/sections/home/WhyChooseSection";
import TechStackSection from "@/sections/home/TechStackSection";
import WorkflowSection from "@/sections/home/WorkflowSection";
import ContactSection from "@/sections/home/ContactSection";
import StackCards from "@/sections/home/StackCards";
import Process from "@/sections/home/Process";
import Creativity from "@/sections/home/creativity";
import DirectorSection from "@/sections/home/Director";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StackCards />
      <AboutSection />
      <WhyChooseSection />
      <Creativity />
      <TechStackSection />
      <Process />
      <DirectorSection />
      {/* <WorkflowSection />  */}
      <ContactSection />
    </main>
  );
}
