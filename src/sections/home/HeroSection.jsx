"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";
import { useRouter } from "next/navigation";

import Main from "@/assets/images/sections/home/hero/main.gif";

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
      { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
    )
      .fromTo(
        paraRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.8"
      );

    return () => tl.kill();
  }, []);

  return (
    <section
      data-theme="light"
      className="relative w-full min-h-screen overflow-hidden "
    >
     {/* Background */}
      <div
        className="absolute inset-0 bg-cover opacity-25"
        style={{ backgroundImage: "url('/bg-hero.jpg') " }}
      />

      {/* Content */}
      <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-10 py-10 px-6 sm:px-6 lg:px-30">
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <h1
            ref={headingRef}
            className="text-text-primary leading-tight tracking-tight"
          >
            {/* Line 1 */}
            <span className="font-light italic text-[22px] sm:text-[28px] md:text-[36px] lg:text-[50px]">
              Scalable
            </span>{" "}
            <span className="font-medium text-[22px] sm:text-[28px] md:text-[36px] lg:text-[50px]">
              by
            </span>{" "}
            <span className="text-primary">
              <span className="font-medium italic text-[26px] sm:text-[32px] md:text-[40px] lg:text-[55px]">
                D
              </span>
              <span className="font-medium italic text-[22px] sm:text-[28px] md:text-[36px] lg:text-[50px]">
                esign.
              </span>
            </span>
            <br />

            {/* Line 2 */}
            <span className="font-medium text-[20px] sm:text-[26px] md:text-[32px] lg:text-[45px]">
              Digital
            </span>{" "}
            <span className="font-medium text-[22px] sm:text-[28px] md:text-[36px] lg:text-[50px]">
              by
            </span>{" "}
            <span className="font-medium italic text-[22px] sm:text-[28px] md:text-[36px] lg:text-[50px]">
              Nature.
            </span>
          </h1>

          <p
            ref={paraRef}
            className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-text-secondary max-w-120"
          >
            We build scalable digital solutions that help businesses move faster
            and smarter.
          </p>

          <div ref={buttonRef} className="mt-5 sm:mt-6">
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
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={Main}
              alt="Laptop"
              priority
              className="w-60 sm:w-70 md:w-85 lg:w-115"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;