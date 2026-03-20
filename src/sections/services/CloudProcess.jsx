import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/cloud-process.png";

import Infra from "@/assets/images/sections/services/infrastructure.png";
import Shield from "@/assets/images/sections/services/security.png";
import Backup from "@/assets/images/sections/services/backup.png";
import Store from "@/assets/images/sections/services/store.png";

const items = [
  { title: "Scalable infrastructure", desc: "Stays stable as traffic grows.", icon: Infra },
  { title: "Strong security practices", desc: "Protect apps and data.", icon: Shield },
  { title: "Reliable uptime & backups", desc: "Recovery systems for continuity.", icon: Backup },
  { title: "Faster deployments & updates", desc: "Smooth production releases.", icon: Store },
];

export default function CloudProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="WHY IT MATTERS"
      heading={
        <div className="heading-primary">
          Cloud built for long-term <span className="italic text-(--light-color-primary)">reliability</span>
        </div>
      }
      description="Cloud isn’t just hosting—it’s the foundation that keeps your product secure, scalable, and stable as usage grows."
      items={items}
      reverse={true}
    />
  );
}
