"use client";
import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Process() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isTablet: "(min-width: 640px) and (max-width: 1023px)",
        isLaptop: "(min-width: 1024px) and (max-width: 1439px)",
        isDesktop: "(min-width: 1440px)",
      },
      (context) => {
        const { isLaptop, isDesktop } = context.conditions;

        if (!isLaptop && !isDesktop) return;

        const letters = gsap.utils.toArray(".letter");

        let fromX = 600;
        let toX;

        if (isLaptop) {
          toX = -800;
        } else if (isDesktop) {
          toX = -400;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1500",
            scrub: true,
            pin: true,
          },
        });

        // Cards animation
        tl.fromTo(
          cardsRef.current,
          { x: fromX },
          { x: toX, ease: "none", duration: 1 },
        );

        // Letters animation
        for (let i = 0; i < letters.length; i += 2) {
          tl.to(
            [letters[i], letters[i + 1]],
            {
              color: "#fb6557",
              duration: 0.1,
              ease: "none",
            },
            i * 0.2,
          );
        }

        return () => tl.kill();
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="relative" data-theme="light">
      <div
        ref={sectionRef}
        className="process min-h-screen lg:h-screen flex flex-col md:flex-col lg:flex-row justify-start lg:justify-center items-center overflow-hidden py-20 lg:py-0"
      >
        {/* 🔤 Heading */}
        <h1
          className="font-extrabold flex gap-1 z-10 
          text-[50px] sm:text-[70px] md:text-[100px] lg:text-[180px] xl:text-[220px]
          mb-10 lg:mb-0"
        >
          {"Process".split("").map((char, i) => (
            <span key={i} className="letter text-text-primary">
              {char}
            </span>
          ))}
        </h1>
        {/* 📦 Cards */}
        <div
          ref={cardsRef}
          className="
          flex flex-col items-center lg:flex-row
          gap-6 md:gap-10 lg:gap-94.5
          z-50
          relative lg:absolute
          top-0 lg:top-30
          left-0 lg:-left-120
          w-full lg:w-auto
          px-5 md:px-10 lg:px-0
        "
        >
          {/* Card 1 */}
          <div className="w-full max-w-[500px] lg:w-130 min-h-[240px] bg-white border border-[#F2C5BE] rounded-2xl p-6 md:p-9">
            <div className="relative">
              {" "}
              <Icon
                icon="carbon:document-requirements"
                className="w-10 h-10 absolute right-0 top-0"
                color="#FE9139"
              />{" "}
              <h4 className="text-[#1A1A1F] text-[20px] lg:text-[24px] font-medium mb-2">
                {" "}
                Requirement Gathering{" "}
              </h4>{" "}
              <p className="text-[#5F5F6B] text-[16px]">
                {" "}
                We start by understanding your business goals, challenges, and
                project requirements. Our team works closely with you to gather
                all necessary details, ensuring we build the right solution that
                aligns with your objectives and delivers real value to your
                user{" "}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[500px] lg:w-130 min-h-[240px] bg-white border border-[#F2C5BE] rounded-2xl p-6 md:p-9 lg:absolute lg:top-70 lg:left-120">
            <div className="relative">
              {" "}
              <Icon
                icon="iconoir:design-nib"
                className="w-10 h-10 absolute right-0 top-0"
                color="#FE9139"
              />{" "}
              <h4 className="text-[#1A1A1F] text-[20px] lg:text-[24px] font-medium mb-2">
                {" "}
                Design{" "}
              </h4>{" "}
              <p className="text-[#5F5F6B] text-[16px]">
                {" "}
                In this stage, our team transforms ideas into visually engaging
                and user-friendly designs. We focus on creating intuitive
                interfaces and seamless user experiences that align with your
                brand and project goals{" "}
              </p>{" "}
            </div>{" "}
          </div>
          {/* Card 2 */}
          <div className="w-full max-w-[500px] lg:w-130 min-h-[240px] bg-white border border-[#F2C5BE] rounded-2xl p-6 md:p-9">
            <div className="relative">
              {" "}
              <Icon
                icon="mage:light-bulb"
                className="w-10 h-10 absolute right-0 top-0"
                color="#FE9139"
              />{" "}
              <h4 className="text-[#1A1A1F] text-[20px] lg:text-[24px] font-medium mb-2">
                {" "}
                Ideation{" "}
              </h4>{" "}
              <p className="text-[#5F5F6B] text-[16px]">
                {" "}
                After understanding your requirements, our team brainstorms and
                explores creative ideas to define the best approach for your
                project. We focus on innovative solutions that align with your
                business goals and deliver the best possible user
                experience{" "}
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full max-w-[500px] lg:w-130 min-h-[240px] bg-white border border-[#F2C5BE] rounded-2xl p-6 md:p-9">
            <div className="relative">
              {" "}
              <Icon
                icon="tdesign:code"
                className="w-10 h-10 absolute right-0 top-0"
                color="#FE9139"
              />{" "}
              <h4 className="text-[#1A1A1F] text-[20px] lg:text-[24px] font-medium mb-2">
                {" "}
                Development{" "}
              </h4>{" "}
              <p className="text-[#5F5F6B] text-[16px]">
                {" "}
                In this stage, our developers transform the approved designs
                into a fully functional product. We use modern technologies and
                best coding practices to build secure, scalable, and
                high-performance digital solutions{" "}
              </p>{" "}
            </div>
          </div>

          {/* Card 5 */}
          <div className="w-full max-w-[500px] lg:w-130 min-h-[240px] bg-white border border-[#F2C5BE] rounded-2xl p-6 md:p-9 lg:absolute lg:top-70 lg:right-100">
            <div className="relative">
              {" "}
              <Icon
                icon="heroicons:rocket-launch"
                className="w-10 h-10 absolute right-0 top-0"
                color="#FE9139"
              />{" "}
              <h4 className="text-[#1A1A1F] text-[20px] lg:text-[24px] font-medium mb-2">
                {" "}
                Launch{" "}
              </h4>{" "}
              <p className="text-[#5F5F6B] text-[16px]">
                {" "}
                After thorough testing and final approval, we deploy the product
                to the live server and make it accessible to users. Our team
                ensures the launch is smooth, stable, and ready to support your
                business operations{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
