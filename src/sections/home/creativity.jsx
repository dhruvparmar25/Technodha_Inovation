"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CardBg from "@/assets/images/common/hero-bg.png";
import BGCreativity from "../../assets/images/sections/creativity/creativity.png";
import Men from "../../assets/images/sections/creativity/men.png";
import MenFinsh from "../../assets/images/sections/creativity/men-finish.png";
import Web from "../../assets/images/sections/home/creativity/web-development.gif";
import App from "../../assets/images/sections/home/creativity/mobile-app.gif";
import UIUX from "../../assets/images/sections/home/creativity/ui-ux.gif";
import Cloud from "../../assets/images/sections/home/creativity/cloud.gif";

import GradientButton from "@/components/common/GradientButton";

export default function Creativity() {
  const sectionRef = useRef(null);
  const menRef = useRef(null);
  const finishRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray(".creativity-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3200",
          scrub: 1.5,
          pin: true,
        },
      });

      gsap.set(finishRef.current, { opacity: 0 });

      tl.to(menRef.current, {
        x: "50vw",
        duration: 1,
        ease: "power1.inOut",
      })
        .to(menRef.current, {
          x: "100vw",
          duration: 1,
          ease: "power1.inOut",
        })
        .to(menRef.current, { opacity: 0, duration: 0.5 }, "<")
        .to(finishRef.current, { opacity: 1, duration: 0.5 }, "<");

      cards.forEach((card, i) => {
        tl.from(card, {
          y: 200,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onStart: () => {
            cards.forEach((c) => gsap.set(c, { pointerEvents: "none" }));

            gsap.set(card, { pointerEvents: "auto" });
          },
        });
      });

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  // ✅ SERVICES WITH SLUG
  const services = [
    {
      title: "Web Development",
      slug: "web-development",
      image: Web,
      desc: "We build robust web applications using modern frameworks and scalable architecture.",
      points: ["Scalable systems", "Clean architecture", "High performance"],
    },
    {
      title: "Mobile App Development",
      slug: "mobile-apps",
      image:App,
      desc: "We build fast and reliable mobile apps for iOS and Android platforms.",
      points: [
        "Cross-platform apps",
        "Optimized performance",
        "Scalable architecture",
      ],
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux",
      image: UIUX,
      desc: "We design intuitive and engaging user interfaces with great usability.",
      points: ["User-first design", "Wireframes to UI", "Design systems"],
    },
    {
      title: "Cloud Services",
      slug: "cloud-services",
      image: Cloud,
      desc: "We provide scalable cloud infrastructure and deployment solutions.",
      points: [
        "Secure infrastructure",
        "Reliable deployment",
        "Cost optimized",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative lg:h-screen  overflow-hidden"
      data-theme="light"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center mt-10  md:mt-20 lg:mt-12 px-4">
        <h2 className="text-[24px]  md:text-[32px] font-medium text-gradient-primary">
          OUR APPROACH
        </h2>

        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold text-center text-text-primary max-w-[90%] md:max-w-212.5 leading-tight">
          WHERE CREATIVITY MEETS FUNCTIONALITY
        </h1>
      </div>

      {/* IMAGE */}
      <div className="hidden lg:flex justify-center relative h-[400px]">
        <div ref={menRef} className="absolute left-0 bottom-75 ">
          <Image src={Men} alt="Men" className="w-[250px] h-[350px]" />
        </div>

        <div ref={finishRef} className="absolute right-10 bottom-75 ">
          <Image src={MenFinsh} alt="Finish" className="w-[250px] h-[350px]" />
        </div>

        <Image src={BGCreativity} alt="bg" className="object-contain" />
      </div>

      {/* CARDS */}
      <div className="relative flex flex-col gap-6 px-4 mt-10 pb-10 lg:absolute lg:inset-0 lg:flex lg:justify-center lg:items-end">
        {services.map((item, index) => (
          <div
            key={index}
            className="creativity-card w-full lg:w-[900px] min-h-[300px] lg:h-[420px] 
  border border-[#F2C5BE] rounded-xl flex flex-col lg:flex-row 
  gap-6 lg:gap-10 p-6 lg:px-16 lg:py-10 
  relative left-0 translate-x-0 
  lg:absolute lg:bottom-3 xl:bottom-10 lg:left-1/2 lg:-translate-x-1/2 
  cursor-pointer overflow-hidden bg-white"
            style={{ zIndex: index }}
          >
            <div className="absolute inset-0 "></div>

            <div className="relative  w-full flex flex-col lg:flex-row gap-6 lg:gap-10">
              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <Image src={item.image} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#2C2C2C]">
                  {item.title}
                </h3>

                <p className="text-[14px] lg:text-[16px] text-[#5F5F6B]">
                  {item.desc}
                </p>

                <ul className="text-[12px] lg:text-[13px] space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-[#5F5F6B]">
                      <span className="w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full mt-1"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <GradientButton
                  text="Explore our Capabilities"
                  onClick={() => router.push(`/services/${item.slug}`)}
                  className="text-sm lg:text-base cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
