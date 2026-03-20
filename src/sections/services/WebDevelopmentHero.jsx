import CommonHeroSection from "@/components/common/CommonHeroSection";
import HeroBg from "@/assets/images/sections/services/web-bg.jpg";

// Assets
import HeroIllustration from "@/assets/images/sections/services/web-hero.png";

export default function WebDevelopmentHero() {
  return (
    <CommonHeroSection
      theme="light"
      herobg={HeroBg}
      illustration={HeroIllustration}
      sectionTitle="WEB DEVELOPMENT"
      heading={
        <h1 className="heading-primary-dark text-[32px]!">
          <span className="italic text-primary">Web platforms</span>{" "}
          engineered for performance,{" "}
          <span className="italic text-secondary">scale</span>, and reliability
        </h1>
      }
      description="We build secure and scalable websites and web applications with clean architecture, fast performance, and long-term maintainability."
      buttonText="Start a Project With Us"
    />
  );
}
