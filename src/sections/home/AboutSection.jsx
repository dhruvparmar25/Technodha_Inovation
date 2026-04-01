"use client";

import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";
import { useRouter } from "next/navigation";

import Aboutimg from "@/assets/images/sections/home/about/about-main.png";
import Aboutimgone from "@/assets/images/sections/home/about/about-one.jpg";
import Aboutimgtwo from "@/assets/images/sections/home/about/about-two.jpg";

function AboutSection() {
  const router = useRouter();

  return (
    // main section wrapper
  <section
  data-theme="light"
  className="w-full flex items-center justify-between py-4 sm:py-4 lg:py-5"
>
  {/* container */}
  <div className="w-full  px-6 sm:px-6 lg:px-20">
        
        {/* layout wrapper */}
        <div className="flex flex-col xl:flex-row items-center">
          
          {/* mobile image */}
          <div className="block xl:hidden m-auto">
            <div className="m-auto rounded-[14px] overflow-hidden">
              <Image
                src={Aboutimg}
                alt="About section visual"
                className="h-auto object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* desktop image layout */}
          <div
            className="lifestyle-image w-170 h-137.25 hidden xl:block
            relative
            scale-[0.75] sm:scale-[0.85] xl:scale-100
            -translate-x-4 sm:translate-x-0 xl:translate-x-0
            origin-top"
          >
            {/* gradient background box */}
            <div className="absolute w-70.5 h-87.75 top-31 left-46.75 rounded-[10px] bg-linear-to-b from-[#FB6557] to-[#FE9139] z-1" />

            {/* decorative box one */}
            <div className="absolute w-25 h-25 top-18.5 left-104.75 rounded-[10px] p-0.75 border-3 border-primary z-3 box-one">
              <div className="w-full h-full rounded-[7px] bg-transparent" />
            </div>

            {/* decorative box two */}
            <div className="absolute w-17.25 h-17.25 top-110 left-38.25 rounded-[10px] p-0.75 border-3 border-primary z-3 box-two">
              <div className="w-full h-full rounded-[7px] bg-transparent" />
            </div>

            {/* image one */}
            <div className="absolute top-16 left-10 z-2 rounded-[10px] overflow-hidden image-one">
              <Image
                src={Aboutimgone}
                alt="Office collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* image two */}
            <div className="absolute top-63.75 left-85 z-2 rounded-[10px] overflow-hidden image-two">
              <Image
                src={Aboutimgtwo}
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* content section */}
          <div className="about-contain w-full  py-4 xl:w-1/2 xl:py-16 text-left">
            
            {/* label */}
            <span className="bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent text-sm tracking-wide">
              WE BUILD WITH INTENTION
            </span>

            {/* heading */}
            <div className="heading-primary">
              Designing
              <span className="font-semibold italic bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent px-1">
                digital
              </span>
              systems that scale with your
              <span className="font-medium italic text-[#6E5C59] px-1">
                ambition
              </span>
            </div>

            {/* description */}
            <div className="text-support text-justify mt-4 text-[#5F5F6B] xl:mx-0">
              At Technodha, we help startups and growing teams turn ideas into
              reliable digital products. From thoughtful design to scalable
              development, we build solutions meant to grow — not just launch.
            </div>

            {/* capabilities title */}
            <div className="capabilities font-medium text-[16px] leading-6.5 tracking-[0.006em] text-[#8F8F9A] mt-6">
              CAPABILITIES WE FOCUS
            </div>

            {/* capabilities list */}
            <div className="btn-grup grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-3">
              {[
                "Product Design",
                "Web Platforms",
                "Scalable Systems",
                "Startup MVPs",
                "Long-term Support",
              ].map((item) => (
                <button
                  key={item}
                  className="btn-focus py-2 px-3.5 border border-border rounded-[50px] text-[#1A1A1F]"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* button */}
            <div className="mt-6 flex xl:justify-start sm:w-full">
              <GradientButton
                onClick={() => router.push("/about")}
                text="Explore how we work"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;