"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CommonPageHero from "@/components/common/CommonPageHero";
import aboutbg from "@/assets/images/common/hero-bg.png";

const tabs = [
  { name: "Web Development", slug: "web-development" },
  { name: "Mobile App Development", slug: "mobile-apps" },
  { name: "UI/UX Design", slug: "ui-ux" },
  { name: "Cloud Computing Services", slug: "cloud-services" },
  { name: "AI Integration & Automation", slug: "ai-automation" },
  { name: "Maintenance & Support", slug: "maintenance-support" },
];

export default function ServicesLayout({ children }) {
  const pathname = usePathname();

  return (
    <div data-theme="light">
      
      {/* Hero */}
      <CommonPageHero
        bgImage={aboutbg}
        title="Services"
        showBreadcrumbs={false}
      />

      {/* Tabs */}
      <div className="w-full flex justify-center px-4 relative z-20 -mt-10 sm:-mt-12">

        <div className="
          flex gap-2 sm:gap-4
          bg-white shadow-lg rounded-full
          p-2 sm:px-4
          overflow-x-auto
          scrollbar-hide
          max-w-full
          absolute
          bottom-8
        ">
          {tabs.map((tab) => {
            const isActive = pathname.includes(tab.slug);

            return (
              <Link
                key={tab.slug}
                href={`/services/${tab.slug}`}
                className={`
                  whitespace-nowrap
                  mx-1.5 sm:mx-2.5
                  py-2
                  text-xs sm:text-sm
                  font-medium
                  transition
                  ${
                    isActive
                        ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-500 hover:text-secondary"
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

      </div>

      {/* Content */}
      <div >{children}</div>
    </div>
  );
}