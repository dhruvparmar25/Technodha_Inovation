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

      // Animation sequence
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

      // Cards animation
      cards.forEach((card) => {
        tl.from(card, {
          y: 200,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onStart: () => {
            cards.forEach((c) =>
              gsap.set(c, { pointerEvents: "none" })
            );
            gsap.set(card, { pointerEvents: "auto" });
          },
        });
      });

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  // SERVICES
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
      image: App,
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
      className="relative overflow-hidden lg:h-screen"
      data-theme="light"
    >
      {/* HEADER */}
      <div className="mt-10 flex flex-col items-center px-4 md:mt-20 lg:mt-12 xl:mt-20">
        <h2 className="text-[24px] font-medium text-gradient-primary md:text-[32px]">
          OUR APPROACH
        </h2>

        <h1 className="max-w-[90%] text-center text-[28px] font-bold leading-tight text-text-primary sm:text-[36px] md:max-w-[850px] md:text-[48px] lg:text-[58px]">
          WHERE CREATIVITY MEETS FUNCTIONALITY
        </h1>
      </div>

      {/* IMAGE */}
      <div className="relative hidden h-[300px] justify-center lg:flex xl:h-[400px]">
        <div
          ref={menRef}
          className="absolute left-0 lg:bottom-[220px] xl:bottom-[300px]"
        >
          <Image
            src={Men}
            alt="Men"
            className="w-[160px] h-[220px] sm:w-[180px] sm:h-[250px] md:w-[200px] md:h-[280px] lg:w-[190px] lg:h-[270px] xl:w-[230px] xl:h-[320px]"
          />
        </div>

        <div
          ref={finishRef}
          className="absolute right-10 lg:bottom-[220px] xl:bottom-[300px]"
        >
          <Image
            src={MenFinsh}
            alt="Finish"
            className="w-[160px] h-[220px] sm:w-[180px] sm:h-[250px] md:w-[200px] md:h-[280px] lg:w-[190px] lg:h-[270px] xl:w-[230px] xl:h-[320px]"
          />
        </div>

        <Image src={BGCreativity} alt="bg" className="w-full" />
      </div>

      {/* CARDS */}
      <div className="relative mt-8 flex flex-col items-center gap-6 px-6 pb-10 lg:absolute lg:inset-0 lg:justify-center lg:items-end">
        {services.map((item, index) => (
          <div
            key={index}
            className="creativity-card relative left-0 w-full translate-x-0 cursor-pointer overflow-hidden rounded-xl border border-[#F2C5BE] bg-white p-4 flex flex-col gap-4 lg:absolute lg:bottom-[10%] lg:left-1/2 lg:w-[720px] lg:-translate-x-1/2 lg:flex-row lg:gap-8 lg:px-10 lg:py-6 xl:w-[900px] xl:gap-10 xl:px-16 xl:py-10 min-h-[260px] lg:h-[360px] xl:h-[420px]"
            style={{ zIndex: index }}
          >
            <div className="absolute inset-0" />

            <div className="relative flex w-full flex-col gap-6 lg:flex-row lg:gap-10">
              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <Image src={item.image} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="w-full space-y-3 lg:w-1/2 lg:space-y-4">
                <h3 className="text-[20px] font-semibold text-[#2C2C2C] lg:text-[24px]">
                  {item.title}
                </h3>

                <p className="text-[14px] text-[#5F5F6B] lg:text-[16px]">
                  {item.desc}
                </p>

                <ul className="space-y-2 text-[12px] lg:text-[13px]">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-[#5F5F6B]">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary lg:h-3 lg:w-3" />
                      {point}
                    </li>
                  ))}
                </ul>

                <GradientButton
                  text="Explore our Capabilities"
                  onClick={() =>
                    router.push(`/services/${item.slug}`)
                  }
                  className="cursor-pointer text-sm lg:text-base"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}