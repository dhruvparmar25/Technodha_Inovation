import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/maintenance/maintenance-process.svg";

import Monitor from "@/assets/images/sections/services/maintenance/monitor-icon.svg";
import Response from "@/assets/images/sections/services/maintenance/response-icon.svg";
import Health from "@/assets/images/sections/services/maintenance/health-icon.svg";
import Reliable from "@/assets/images/sections/services/maintenance/reliable-icon.svg";

const items = [
  {
    title: "Proactive monitoring",
    desc: "Catch and fix issues before they affect your users.",
    icon: Monitor,
  },
  {
    title: "Rapid response times",
    desc: "Quick turnaround on critical bugs and issues.",
    icon: Response,
  },
  {
    title: "Regular health checks",
    desc: "Scheduled reviews to maintain peak performance.",
    icon: Health,
  },
  {
    title: "Long-term reliability",
    desc: "Systems that stay stable and secure over time.",
    icon: Reliable,
  },
];

export default function MaintenanceProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="WHY IT MATTERS"
      heading={
        <div className="heading-primary" data-theme="light">
          Support built for long-term{" "}
          <span className="italic text-(--color-primary)">peace of mind</span>
        </div>
      }
      description="Maintenance isn't just fixing bugs — it's proactive care that keeps your product secure, fast, and growing with your business."
      items={items}
      reverse={true}
    />
  );
}
