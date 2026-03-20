import CommonHeroSection from "@/components/common/CommonHeroSection";

// Assets
import CloudIllustration from "@/assets/images/sections/services/cloud-hero.png";
import Cloudbg from "@/assets/images/sections/services/cloud-bg.jpg";


export default function CloudHero() {
  return (
    <CommonHeroSection
      theme="light"
      herobg={Cloudbg}
      illustration={CloudIllustration}
      sectionTitle="CLOUD COMPUTING"
      heading={
        <h1 className="heading-primary-dark text-[32px]!">
          Cloud infrastructure built for{" "}
          <span className="italic text-primary">stability</span>,{" "}
          <span className="italic text-secondary">scale</span>, and speed
        </h1>
      }
      description="We help teams deploy, manage, and scale cloud systems with secure configurations, smooth performance, and long-term reliability."
      buttonText="Start a Project With Us"
    />
  );
}
