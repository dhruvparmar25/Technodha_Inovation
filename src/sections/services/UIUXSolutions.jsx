import CommonSolutionsGrid from "@/components/common/CommonServiceGrid";

import MobileUI from "@/assets/images/sections/services/mobile-ui.gif";
import WebsiteUI from "@/assets/images/sections/services/website-ui.gif";
import DashboardUI from "@/assets/images/sections/services/dashboard-ui.gif";
import Wireframes from "@/assets/images/sections/services/wireframes.gif";
import UserFlows from "@/assets/images/sections/services/user-flows.gif";
import DesignSystem from "@/assets/images/sections/services/design-system.gif";

const items = [
  { title: "Mobile App UI", desc: "Smooth, user-friendly app screens with clean layouts.", image: MobileUI },
  { title: "Website UI", desc: "Responsive web designs that guide users toward action.", image: WebsiteUI },
  { title: "Dashboard UI", desc: "Clear dashboards with easy scanning and hierarchy.", image: DashboardUI },
  { title: "Wireframes", desc: "Step-by-step layouts that reduce friction.", image: Wireframes },
  { title: "User Flows", desc: "Journey mapping for intuitive navigation.", image: UserFlows },
  { title: "Design System", desc: "Reusable components for consistent builds.", image: DesignSystem },
];

export default function UIUXSolutions() {
  return (
    <CommonSolutionsGrid
      eyebrow="WHAT WE DESIGN"
      heading={
        <div className="heading-primary">
          UI/UX solutions built for real <span className="italic text-(--light-color-primary)">product</span> usage
        </div>
      }
      description="From structure to final screens, we design experiences that feel simple for users and clear for development teams."
      items={items}
    />
  );
}
