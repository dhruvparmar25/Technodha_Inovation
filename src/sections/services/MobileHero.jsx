import CommonHeroSection from "@/components/common/CommonHeroSection";
import HeroBg from "@/assets/images/sections/services/mobile-bg.png";

// Assets
import MobileIllustration from "@/assets/images/sections/services/mobile-hero.png";

export default function MobileHero() {
  return (
    <CommonHeroSection
      theme="light"
            herobg={HeroBg}
      
      illustration={MobileIllustration}
      sectionTitle="MOBILE APP DEVELOPMENT"
      heading={
        <h1 className="heading-primary-dark text-[32px]!">
          Mobile apps built for{" "}
          <span className="italic text-primary">speed</span>,{" "}
          <span className="italic text-secondary">stability</span>, and scale
        </h1>
      }
      description="We develop mobile apps that feel smooth, load fast, and perform reliably across devices—ready for real users and real growth."
      buttonText="Start a Project With Us"
    />
  );
}
