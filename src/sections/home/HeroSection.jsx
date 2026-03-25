"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";
import { useRouter } from "next/navigation";

import Main from "@/assets/images/sections/home/hero/main.gif";
import { Icon } from "@iconify/react";
import ContactSection from "./ContactSection";

function HeroSection() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
    )
      .fromTo(
        paraRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1",
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.8",
      );

    return () => tl.kill();
  }, []);

  return (
    <section
      data-theme="light"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0  backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative max-w-305 mx-auto w-full px-4 min-h-screen py-10 flex flex-col lg:flex-row items-center justify-between gap-10 ">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 flex flex-col items-center lg:items-start">
          <h1
            ref={headingRef}
            className="text-text-primary leading-14 tracking-[0%] space-x-2"
          >
            {/* Line 1 */}
            <span className="font-light italic text-[50px]">Scalable</span>{" "}
            <span className="font-medium text-[50px]">by</span> {/* Design. */}
            <span className="text-primary">
              <span className="font-medium italic text-[55px]">D</span>
              <span className="font-medium italic text-[50px]">esign.</span>
            </span>
            <br />
            {/* Line 2 */}
            <span className="font-medium text-[45px]">Digital</span>{" "}
            <span className="font-medium text-[50px]">by</span>{" "}
            <span className="font-medium italic text-[50px]">Nature.</span>
          </h1>
          <p
            ref={paraRef}
            className="mt-5 text-sm m-auto lg:m-0 sm:text-base text-text-secondary max-w-[500px]"
          >
            We build scalable digital solutions that help businesses move faster
            and smarter.
          </p>
          <div ref={buttonRef} className="mt-6 ">
            <GradientButton
              text="GET IN TOUCH"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative z-10">
            <Image
              src={Main}
              alt="Laptop"
              priority
              className="w-[220px] sm:w-[260px] lg:w-[460px] shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
