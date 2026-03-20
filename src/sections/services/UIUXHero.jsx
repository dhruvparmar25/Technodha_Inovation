import CommonHeroSection from "@/components/common/CommonHeroSection";

// Assets
import UIUXIllustration from "@/assets/images/sections/services/uiux-hero.png";
import Uiuxbg from "@/assets/images/sections/services/uiux-bg.jpg";

export default function UIUXHero() {
  return (
    <CommonHeroSection
      theme="light"
      illustration={UIUXIllustration}
      herobg={Uiuxbg}
      sectionTitle="UI / UX DESIGN"
      heading={
        <h1 className="heading-primary-dark text-[32px]!">
          <span className="italic text-primary">Design</span> that feels effortless
          — and <span className="italic text-secondary">works</span> flawlessly
        </h1>
      }
      description="We design user flows and interfaces that make products easy to use, visually consistent, and ready to scale—so teams ship faster with confidence."
      buttonText="Start a Project With Us"
    />
  );
}
