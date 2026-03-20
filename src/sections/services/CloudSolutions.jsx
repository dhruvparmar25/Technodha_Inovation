
import Hosting from "@/assets/images/sections/services/hosting.gif";
import Migration from "@/assets/images/sections/services/migration.gif";
import Security from "@/assets/images/sections/services/security.gif";
import Database from "@/assets/images/sections/services/database.gif";
import Server from "@/assets/images/sections/services/server.gif";
import Monitoring from "@/assets/images/sections/services/monitoring.gif";
import CommonSolutionsGrid from "@/components/common/CommonServiceGrid";

const items = [
  { title: "Hosting & Deployment", desc: "Production-ready environments with smooth releases.", image: Hosting },
  { title: "Cloud Setup & Migration", desc: "Move products to cloud with minimal downtime.", image: Migration },
  { title: "Security & Access Control", desc: "Permissions and best practices to protect users.", image: Security },
  { title: "Database Setup & Backup", desc: "Reliable databases with backup strategies.", image: Database },
  { title: "Server Management", desc: "Updates and configs to keep systems stable.", image: Server },
  { title: "Performance Monitoring", desc: "Alerts and monitoring for uptime and speed.", image: Monitoring },
];

export default function CloudSolutions() {
  return (
    <CommonSolutionsGrid
      eyebrow="WHAT WE HELP WITH"
      heading={
        <div className="heading-primary">
          Cloud services that keep your <span className="italic text-(--light-color-primary)">product</span> reliable
        </div>
      }
      description="From setup to monitoring, we build cloud foundations that stay secure, scalable, and easy to manage."
      items={items}
    />
  );
}
