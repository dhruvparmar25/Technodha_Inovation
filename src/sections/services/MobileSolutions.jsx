import CommonSolutionsGrid from "@/components/common/CommonServiceGrid";

import Business from "@/assets/images/sections/services/business.gif";
import Ecommerce from "@/assets/images/sections/services/ecommerce.gif";
import Custom from "@/assets/images/sections/services/custom.gif";
import Startup from "@/assets/images/sections/services/startup.gif";
import Booking from "@/assets/images/sections/services/booking.gif";
import Dashboard from "@/assets/images/sections/services/dashboard.gif";

const items = [
  { title: "Business Apps", desc: "Internal tools and customer apps that streamline workflows and operations.", image: Business },
  { title: "E-commerce Apps", desc: "Mobile storefronts with browsing, checkout, and order tracking.", image: Ecommerce },
  { title: "Custom App Solutions", desc: "Apps designed around your idea, market, and business needs.", image: Custom },
  { title: "Startup MVP Apps", desc: "Lean MVP builds focused on validation and scalability.", image: Startup },
  { title: "Booking & Services", desc: "Scheduling and service apps with smooth journeys.", image: Booking },
  { title: "Dashboards & Admin", desc: "Apps for managing users, content, and reports.", image: Dashboard },
];

export default function MobileSolutions() {
  return (
    <CommonSolutionsGrid
      eyebrow="APP TYPES WE DELIVER"
      heading={
        <div className="heading-primary">
          Mobile apps <span className="italic text-(--light-color-primary)">built</span> for real <span className="italic text-(--light-color-secondary)">users</span> and real growth
        </div>
      }
      description="From MVPs to feature-rich applications, we build mobile apps that are fast, reliable, and designed for smooth everyday usage"
      items={items}
    />
  );
}
