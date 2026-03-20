
import Business from "@/assets/images/sections/services/business.gif";
import Landing from "@/assets/images/sections/services/landing.gif";
import Webapps from "@/assets/images/sections/services/webapps.gif";
import Admin from "@/assets/images/sections/services/admin.gif";
import Ecommerce from "@/assets/images/sections/services/ecommerce.gif";
import Api from "@/assets/images/sections/services/api.gif";
import CommonSolutionsGrid from "@/components/common/CommonServiceGrid";

const items = [
  { title: "Business Websites", desc: "Modern, responsive websites built to communicate trust, clarity, and your brand story.", image: Business },
  { title: "Landing Pages", desc: "High-performance landing pages optimized for conversions, speed, and mobile-first experience.", image: Landing },
  { title: "Web Apps & Dashboards", desc: "Scalable web applications with clean UI, smooth workflows, and real-time data visibility.", image: Webapps },
  { title: "Admin Panels", desc: "Powerful admin systems to manage users, content, roles, and operations with ease.", image: Admin },
  { title: "E-commerce", desc: "Storefronts built for usability, secure checkout, product management, and scalable growth.", image: Ecommerce },
  { title: "API Integrations", desc: "Seamless integration with third-party tools, payment gateways, CRMs, and custom APIs.", image: Api },
];

export default function WebSolutions() {
  return (
    <CommonSolutionsGrid
      eyebrow="WHAT WE BUILD"
      heading={
        <div className="heading-primary">
          <span className="italic text-(--light-color-primary)">Web solutions</span>{" "}
          designed to{" "}
          <span className="italic text-(--light-color-secondary)">perform</span>{" "}
          and{" "}
          <span className="italic text-(--light-text-primary)">scale</span>
        </div>
      }
      description="From high-converting websites to full web platforms, we build experiences that stay fast, stable, and easy to maintain as your product grows."
      items={items}
    />
  );
}
