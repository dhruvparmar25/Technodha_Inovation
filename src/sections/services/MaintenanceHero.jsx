import CommonHeroSection from "@/components/common/CommonHeroSection";

import MaintenanceIllustration from "@/assets/images/sections/services/maintenance/maintenance-hero.svg";
import Maintenancebg from "@/assets/images/sections/services/web-bg.jpg";

export default function MaintenanceHero() {
  return (
    <CommonHeroSection
      theme="dark"
      herobg={Maintenancebg}
      illustration={MaintenanceIllustration}
      sectionTitle="MAINTENANCE & SUPPORT"
      heading={
        <h1 className="heading-primary-dark text-[28px]! sm:text-[32px]!">
          Reliable <span className="italic text-primary">support</span> that
          keeps your product{" "}
          <span className="italic text-secondary">running</span> smoothly
        </h1>
      }
      description="We provide ongoing maintenance and support to ensure your digital products stay secure, updated, and performing at their best — so you can focus on growing your business."
      buttonText="Start a Project With Us"
    />
  );
}
