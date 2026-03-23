"use client";

import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";

import Aboutimg from "@/assets/images/sections/home/about/about-main.png";
import Aboutimgone from "@/assets/images/sections/home/about/about-one.jpg";
import Aboutimgtwo from "@/assets/images/sections/home/about/about-two.jpg";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

function AboutSection() {
  const router = useRouter();

  return (
    <section
      data-theme="light"
      className="bg-bg flex items-center xl:h-153.5 max-w-[1230px] px-[15px] m-auto py-16 xl:py-0"
    >
      <div className="w-full max-w-full">
        <div className="flex flex-col xl:flex-row items-center">
          <div className="block xl:hidden  m-auto">
            <div className=" m-auto rounded-[14px] overflow-hidden">
              <Image
                src={Aboutimg}
                alt="About section visual"
                className=" h-auto object-cover"
                priority={false}
              />
            </div>
          </div>

          <div
            className="lifestyle-image w-170 h-137.25 hidden xl:block
            relative
            scale-[0.75] sm:scale-[0.85] xl:scale-100
            -translate-x-4 sm:translate-x-0 xl:translate-x-0
            origin-top"
          >
            <div className="absolute w-70.5 h-87.75 top-31 left-46.75 rounded-[10px] bg-linear-to-b from-[#FB6557] to-[#FE9139] z-1" />

            <div className="absolute w-25 h-25 top-18.5 left-104.75 rounded-[10px] p-0.75 border-3 border-primary z-3 box-one">
              <div className="w-full h-full rounded-[7px] bg-transparent" />
            </div>

            <div className="absolute w-17.25 h-17.25 top-110 left-38.25 rounded-[10px] p-0.75 border-3 border-primary z-3 box-two">
              <div className="w-full h-full rounded-[7px] bg-transparent" />
            </div>

            <div className="absolute top-16 left-10 z-2 rounded-[10px] overflow-hidden image-one">
              <Image
                src={Aboutimgone}
                alt="Office collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-63.75 left-85 z-2 rounded-[10px] overflow-hidden image-two">
              <Image
                src={Aboutimgtwo}
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="about-contain w-full px-6 py-4 xl:w-1/2 xl:py-16 text-left">
            <span className="bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent text-sm tracking-wide">
              WE BUILD WITH INTENTION
            </span>

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

            <div className="text-support text-justify mt-4 text-[#5F5F6B] xl:mx-0">
              At Technodha, we help startups and growing teams turn ideas into
              reliable digital products. From thoughtful design to scalable
              development, we build solutions meant to grow — not just launch.
            </div>

            <div className="capabilities font-medium text-[16px] leading-6.5 tracking-[0.006em] text-[#8F8F9A] mt-6">
              CAPABILITIES WE FOCUS
            </div>

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

            <div className="mt-6 px-2 flex xl:justify-start sm:w-full">
              <button  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }} className="group text-4 font-medium text-text-primary py-2 flex items-center gap-2 m-auto lg:m-0">
                SEND YOUR REQUIREMENTS{" "}
                <Icon
                  color="#fe9139"
                  className="w-9 h-9 bg-white rounded-full -rotate-45 
                                             transition-transform duration-300 ease-in-out 
                                             group-hover:rotate-0"
                  icon="fa6-solid:circle-right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
