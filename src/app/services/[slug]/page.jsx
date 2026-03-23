import ContactSection from "@/sections/home/ContactSection";
import TechStackSection from "@/sections/home/TechStackSection";
import Matters from "@/sections/home/Matters";

// Web
import WebProcess from "@/sections/services/WebProcess";
import WebDevelopmentHero from "@/sections/services/WebDevelopmentHero";
import WebSolutionsSection from "@/sections/services/WebSolutionsSection";

// UI/UX
import UIUXHero from "@/sections/services/UIUXHero";
import UIUXProcess from "@/sections/services/UIUXProcess";
import UIUXSolutions from "@/sections/services/UIUXSolutions";
import UIUXTools from "@/sections/services/UIUXTech";
import UXFlow from "@/sections/services/UXFlow";

// Mobile
import MobileHero from "@/sections/services/MobileHero";
import MobilePlatform from "@/sections/services/MobilePlatform";
import MobileProcess from "@/sections/services/MobileProcess";
import MobileSolutions from "@/sections/services/MobileSolutions";
import MobileTech from "@/sections/services/MobileTech";

// Cloud
import CloudHero from "@/sections/services/CloudHero";
import CloudPlatform from "@/sections/services/CloudPlatform";
import CloudProcess from "@/sections/services/CloudProcess";
import CloudSolutions from "@/sections/services/CloudSolutions";
import CloudTech from "@/sections/services/CloudTech";

const servicesMap = {
  "web-development": {
    title: "WebDevelopment | Technodha",
    content: (
      <>
        <WebDevelopmentHero />
        <WebSolutionsSection />
        <Matters />
        <WebProcess />
        <TechStackSection />
        <ContactSection />
      </>
    ),
  },

  "ui-ux": {
    title: "UiuxDesign | Technodha",
    content: (
      <>
        <UIUXHero />
        <UIUXSolutions />
        <UIUXProcess />
        <UXFlow />
        <UIUXTools />
        <ContactSection />
      </>
    ),
  },

  "mobile-apps": {
    title: "MobileDevelopment | Technodha",
    content: (
      <>
        <MobileHero />
        <MobileSolutions />
        <MobilePlatform />
        <MobileProcess />
        <MobileTech />
        <ContactSection />
      </>
    ),
  },

  "cloud-services": {
    title: "CloudComputing | Technodha",
    content: (
      <>
        <CloudHero />
        <CloudSolutions />
        <CloudProcess />
        <CloudPlatform />
        <CloudTech />
        <ContactSection />
      </>
    ),
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = servicesMap[slug];

  return {
    title: service?.title || "Services | Technodha",
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = servicesMap[slug];

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return <>{service.content}</>;
}