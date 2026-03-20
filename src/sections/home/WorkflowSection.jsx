"use client";

import Image from "next/image";

import CheckIcon from "@/assets/images/sections/home/workflow/check.png";
import LightIcon from "@/assets/images/sections/home/workflow/icon-light.png";
import DesignIcon from "@/assets/images/sections/home/workflow/icon-design.png";
import CodeIcon from "@/assets/images/sections/home/workflow/code.png";
import RocketIcon from "@/assets/images/sections/home/workflow/rocket.png";

const workflowSteps = [
  {
    title: "Requirement Gathering",
    description:
      "We understand goals, users, scope, and project needs clearly.",
    icon: CheckIcon,
  },
  {
    title: "Ideation",
    description:
      "We brainstorm solutions, structure flows, and plan the best approach.",
    icon: LightIcon,
  },
  {
    title: "Design",
    description:
      "We design clean screens, smooth journeys, and consistent UI systems.",
    icon: DesignIcon,
  },
  {
    title: "Development",
    description: "We build scalable, secure, and performance-ready solutions.",
    icon: CodeIcon,
  },
  {
    title: "Launch",
    description:
      "We deploy, test final checks, and make everything live smoothly.",
    icon: RocketIcon,
  },
];

function WorkflowSection() {
  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-20">
      {/* HEADER */}
      <div className="text-center mb-16">
        <span className="bg-linear-to-r from-[#FB6557] to-[#FE9139] bg-clip-text text-transparent text-sm font-medium">
          FROM BRIEF TO BUILD
        </span>

        <h2 className="heading-primary mt-2">
          A <span className="italic text-[#FB6557]">workflow</span> that turns
          clarity into <span className="italic text-[#FE9139]">scalable</span>{" "}
          code
        </h2>

        <p className="text-support mt-3 max-w-2xl mx-auto">
          We align early, design with purpose, and ship with confidence—so every
          phase creates visible progress.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-7xl mx-auto">
        {/* dashed line (desktop only) */}
        <div className="hidden lg:block absolute top-56.25 left-0 w-full border-t-2 border-dashed border-orange-200" />

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-12
          "
        >
          {workflowSteps.map((step) => (
            <div
              key={step.title}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div
                className="
        w-24 h-24
        sm:w-28 sm:h-28
        md:w-32 md:h-32
        lg:w-36 lg:h-36
        xl:w-40 xl:h-40
        rounded-full
        border-2
        border-(--color-border)
        bg-white
        flex items-center justify-center
    "
              >
                <Image
                  src={step.icon}
                  alt={step.title}
                  className="
            w-8 h-8
            sm:w-10 sm:h-10
            md:w-12 md:h-12
            lg:w-14 lg:h-14
            xl:w-17.5 xl:h-17.5
            animate-scale
        "
                />
              </div>

              <div className="w-0.5 h-10 bg-(--color-border) hidden lg:block" />

              <div className="relative w-12.5 h-12.5 bg-(--color-primary) rounded-full hidden lg:flex items-center justify-center mb-4">
                <div className="absolute w-7.5 h-7.5 bg-(--color-secondary) rounded-full"></div>
                <div className="absolute w-5 h-5 bg-white rounded-full"></div>
              </div>

              <h3 className=" text-base font-medium text-[#1A1A1F] my-2">
                {step.title}
              </h3>
              <p
                className="
        text-[12px]
        font-normal
        text-[#5F5F6B]
        leading-relaxed
        w-[60%]
        sm:w-full
        mx-auto
    "
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowSection;
