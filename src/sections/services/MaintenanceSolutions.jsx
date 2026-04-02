import BugFix from "@/assets/images/sections/services/maintenance/bug-fix.svg";
import Performance from "@/assets/images/sections/services/maintenance/performance.svg";
import SecurityUpdate from "@/assets/images/sections/services/maintenance/security-update.svg";
import Updates from "@/assets/images/sections/services/maintenance/updates.svg";
import Uptime from "@/assets/images/sections/services/maintenance/uptime.svg";
import Backup from "@/assets/images/sections/services/maintenance/backup.svg";
import CommonSolutionsGrid from "@/components/common/CommonServiceGrid";

const items = [
  {
    title: "Bug Fixing & Issue Resolution",
    desc: "Quick identification and resolution of bugs to keep your product stable and reliable.",
    image: BugFix,
  },
  {
    title: "Performance Optimization",
    desc: "Keep your application fast, responsive, and running at peak efficiency.",
    image: Performance,
  },
  {
    title: "Security Updates & Patches",
    desc: "Regular security patches to protect your application against vulnerabilities and threats.",
    image: SecurityUpdate,
  },
  {
    title: "Regular Updates & Upgrades",
    desc: "Keep your tech stack current with the latest features and improvements.",
    image: Updates,
  },
  {
    title: "Uptime Monitoring",
    desc: "24/7 monitoring to detect and resolve issues before they impact your users.",
    image: Uptime,
  },
  {
    title: "Backup & Recovery",
    desc: "Reliable backup systems and disaster recovery plans for complete business continuity.",
    image: Backup,
  },
];

export default function MaintenanceSolutions() {
  return (
    <CommonSolutionsGrid
      eyebrow="WHAT WE HELP WITH"
      heading={
        <div className="heading-primary" data-theme="light">
          Support that keeps your{" "}
          <span className="italic text-(--color-primary)">product</span>{" "}
          reliable
        </div>
      }
      description="From bug fixes to performance tuning, we ensure your digital products stay secure, stable, and running smoothly — long after launch."
      items={items}
    />
  );
}
