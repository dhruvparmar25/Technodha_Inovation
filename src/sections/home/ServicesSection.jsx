"use client";

import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";

import Web from "@/assets/images/sections/home/services/web-service.jpg";
import Webgif from "@/assets/images/sections/home/services/web-gif.gif";

import App from "@/assets/images/sections/home/services/app-service.jpg";
import Appgif from "@/assets/images/sections/home/services/app-gif.gif";

import UiUx from "@/assets/images/sections/home/services/uiux-service.jpg";
import UiUxgif from "@/assets/images/sections/home/services/uiux-gif.gif";

import Cloud from "@/assets/images/sections/home/services/cloud-service.jpg";
import Cloudgif from "@/assets/images/sections/home/services/cloud-gif.gif";

import AI from "@/assets/images/sections/home/services/ai-service.svg";
import AIgif from "@/assets/images/sections/home/services/ai-gif.svg";

import Maintenance from "@/assets/images/sections/home/services/maintenance-service.svg";
import Maintenancegif from "@/assets/images/sections/home/services/maintenance-gif.svg";

import { useRouter } from "next/navigation";

const services = [
  {
    title: "Web Development",
    url: "/services/web-development",
    description:
      "We build robust web applications using modern frameworks and proven engineering practices. Our focus is on clean architecture, scalable systems, and maintainable codebases that support long-term product growth — not short-term hacks.",
    image: Web,
    gif: Webgif,
    points: [
      "Systems designed to handle growth without rework.",
      "Clean structure that teams can extend confidently.",
      "Optimized loading, efficient APIs, and stable deployments.",
    ],
  },
  {
    title: "Mobile App Development",
    url: "/services/mobile-apps",
    description:
      "We build mobile apps that feel fast, reliable, and intuitive — whether used by a handful of users or thousands at scale.",
    image: App,
    gif: Appgif,
    points: [
      "Single codebase solutions without compromising UX.",
      "Smooth animations and fast load times.",
      "Designed for feature and user growth.",
    ],
  },
  {
    title: "UI / UX Design",
    url: "/services/ui-ux",
    description:
      "We design interfaces that feel intuitive from the first interaction and remain consistent as products grow.",
    image: UiUx,
    gif: UiUxgif,
    points: [
      "Designs based on real user behavior.",
      "Reusable design systems.",
      "Clear and confident user journeys.",
    ],
  },
  {
    title: "Cloud Computing Services",
    url: "/services/cloud-services",
    description:
      "We help teams build and manage cloud infrastructure that supports modern applications and evolving business needs.",
    image: Cloud,
    gif: Cloudgif,
    points: [
      "Scalable and reliable infrastructure.",
      "Security-first architecture.",
      "Cost and performance optimization.",
    ],
  },
  {
    title: "AI Integration & Automation",
    url: "/services/ai-automation",
    description:
      "We help businesses integrate AI into their workflows — automating repetitive tasks, uncovering insights, and building intelligent systems that boost efficiency and decision-making.",
    image: AI,
    gif: AIgif,
    points: [
      "Automate workflows to save time and reduce errors.",
      "AI-powered analytics for smarter decisions.",
      "Custom AI solutions tailored to your business.",
    ],
  },
  {
    title: "Maintenance & Support",
    url: "/services/maintenance-support",
    description:
      "We provide ongoing maintenance and support to keep your digital products secure, updated, and performing at their best — so you can focus on growth.",
    image: Maintenance,
    gif: Maintenancegif,
    points: [
      "Proactive monitoring and quick bug resolution.",
      "Regular security updates and performance tuning.",
      "Long-term reliability with 24/7 support.",
    ],
  },
];

function ServicesSection() {
  const router = useRouter();

  return (
    <>

      <section
        data-theme="light"
        className="  max-w-[1230px] px-[15px] m-auto"
      >
        {/* HEADER */}
        <div className="text-center lg:text-left">
          <span className="bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent text-sm font-medium">
            WHAT WE DO
          </span>

          <div className="heading-primary">
            Core <span className="italic text-[#FB6557]">services</span> behind
            scalable <span className="italic text-[#6E5C59]">products</span>
          </div>

          <p className="text-support">
            We offer focused services that help teams design, build, and scale
            reliable digital products.
          </p>
        </div>

        {/* SERVICES */}
        {services.map((service) => (
          <div
            key={service.title}
            className="
                        flex flex-col lg:flex-row
                        items-center justify-between
                        gap-10 lg:gap-14
                        odd:lg:flex-row-reverse
                        mt-16 lg:mt-20
                        mb-24 lg:mb-34
                    "
          >
            {/* IMAGE */}
            <div
              className="
                            relative
                            w-full
                            sm:max-w-90
                            lg:max-w-none lg:w-1/2
                            aspect-5/4
                            sm:aspect-4/3
                            lg:aspect-16/10
                            xl:h-86.5
                            flex
                        "
            >
              <Image
                src={service.image}
                alt={service.title}
                className="
                                w-full
                                max-w-90 sm:max-w-105
                                lg:max-w-120 xl:max-w-109
                                h-auto
                                animate-three-corner
                            "
              />

              {/* GIF */}
              <div
                className="
                                hidden sm:block
                                absolute bottom-0 right-0
                                xl:right-18 lg:right-6
                                translate-x-1/4 translate-y-1/4
                                sm:translate-x-1/3 sm:translate-y-1/3
                                lg:translate-x-1/4 lg:translate-y-1/4
                                bg-white
                                p-2 sm:p-3 lg:p-4
                                rounded-tl-[28px] sm:rounded-tl-[36px] lg:rounded-tl-[50px]
                                rounded-br-[28px] sm:rounded-br-[36px] lg:rounded-br-[50px]
                                shadow-md
                                pointer-events-none
                            "
              >
                <Image
                  src={service.gif}
                  alt=""
                  className="
                                    w-20 h-20
                                    sm:w-28 sm:h-28
                                    lg:w-36 lg:h-36
                                    xl:w-40 xl:h-40
                                    object-contain
                                "
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2">
              <h2
                className="
                                bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)]
                                w-full sm:w-[320px] lg:w-105 xl:w-106.5
                                h-14 sm:h-16 lg:h-18 xl:h-20.5
                                rounded-br-[40px]
                                font-semibold
                                text-[16px] sm:text-[18px]
                                lg:text-[22px] xl:text-[24px]
                                flex items-center justify-center
                            "
              >
                {service.title}
              </h2>

              <p className="mt-4 sm:mt-6 text-[13px] sm:text-[14px] lg:text-[15px] text-[#5F5F6B]">
                {service.description}
              </p>

              <ul className="mt-4">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 mt-2">
                    <span className="w-3 h-3 rounded-full bg-primary shrink-0"></span>
                    <span className="text-[12px] sm:text-[13px] lg:text-[14px] text-[#5F5F6B]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <GradientButton
                onClick={() => router.push(service.url)}
                text="Explore our capabilities"
                className="mt-6 mx-auto lg:mx-0"
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default ServicesSection;
