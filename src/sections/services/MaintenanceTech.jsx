import Illustration from "@/assets/images/sections/services/maintenance/maintenance-tech.svg";
import CommonTechSection from "@/components/common/CommonTechSection";

export default function MaintenanceTech() {
  return (
    <CommonTechSection
      illustration={Illustration}
      eyebrow="OUR APPROACH"
      heading={
        <div className="heading-primary text-white!" data-theme="light">
          Monitored{" "}
          <span className="italic text-(--color-primary)">24/7</span>. Support you can{" "}
          <span className="italic text-(--color-secondary)">count on</span>
        </div>
      }
      description="We use industry-leading monitoring tools, automated alerts, and proven maintenance workflows to keep your applications healthy. From server uptime checks to code-level optimizations, our team ensures your product stays fast, secure, and dependable — giving you confidence that everything runs smoothly behind the scenes."
    />
  );
}
