import CommonHeroSection from "@/components/common/CommonHeroSection";

import AIIllustration from "@/assets/images/sections/services/ai/ai-hero.svg";
import AIbg from "@/assets/images/sections/services/cloud-bg.jpg";

export default function AIHero() {
  return (
    <CommonHeroSection
      theme="dark"
      herobg={AIbg}
      illustration={AIIllustration}
      sectionTitle="AI INTEGRATION & AUTOMATION"
      heading={
        <h1 className="heading-primary-dark text-[28px]! sm:text-[32px]!">
          Intelligent <span className="italic text-primary">automation</span>{" "}
          built for <span className="italic text-secondary">smarter</span>{" "}
          operations
        </h1>
      }
      description="We help businesses integrate AI into their workflows — from automating repetitive tasks to building intelligent systems that improve efficiency, accuracy, and decision-making."
      buttonText="Start a Project With Us"
    />
  );
}
