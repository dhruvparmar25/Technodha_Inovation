"use client";

import CommonProcessSection from "@/components/common/CommonProcessSection";
import Female from "@/assets/images/sections/career/female.png";
import Image from "next/image";
import gsap from "gsap";
import Bullet1 from "@/assets/images/sections/career/bullet1.png";
import Bullet2 from "@/assets/images/sections/career/bullet2.png";
import Bullet3 from "@/assets/images/sections/career/bullet3.png";
import Bullet4 from "@/assets/images/sections/career/bullet4.png";
import Bullet5 from "@/assets/images/sections/career/bullet5.png";

import I1 from "@/assets/images/sections/career/icon-one.png";
import I2 from "@/assets/images/sections/career/icon-two.png";
import I3 from "@/assets/images/sections/career/icon-three.png";

import { useEffect } from "react";

import RightImage from "@/assets/images/sections/career/career-proecess.png";

const items = [
  { title: "Work on real-world AI & deep-tech projects", icon: Bullet1 },
  { title: "Fast-growing startup culture", icon: Bullet2 },
  { title: "Learning-focused & innovation-driven environment", icon: Bullet3 },
  { title: "Exposure to modern tools & technologies", icon: Bullet4 },
  { title: "Transparent communication & ownership", icon: Bullet5 },
];
const careerCards = [
  { title: "Real responsibility", icon: I1 },
  { title: "Supportive team", icon: I2 },
  { title: "Strong standards", icon: I3 },
];

export default function CareerProcess() {

useEffect(() => {
  const mm = gsap.matchMedia();

  // Initial stacked positions behind female
  gsap.set(".card-1", { x: 40, y: 0, opacity: 0 });
  gsap.set(".card-2", { x: 40, y: 22, opacity: 0 });
  gsap.set(".card-3", { x: 40, y: 44, opacity: 0 });

  gsap.set(".female-image", { scale: 1 });

  mm.add("(min-width: 0px)", () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(".card-1", {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    })
      .to(".female-image", { scale: 1.05, duration: 0.6 }, "<")

      .to(".card-2", {
        opacity: 1,
        x: -90,
        y: 22,
        duration: 0.7,
        ease: "power2.out",
      })
      .to(".female-image", { scale: 1.1, duration: 0.6 }, "<")

      .to(".card-3", {
        opacity: 1,
        x: 0,
        y: 44,
        duration: 0.7,
        ease: "power2.out",
      })
      .to(".female-image", { scale: 1.15, duration: 0.6 }, "<")

      // Hold
      .to({}, { duration: 1 })

      // Collapse back to stacked position
      .to(".card-1", { opacity: 0, x: 40, y: 0, duration: 0.6 })
      .to(".card-2", { opacity: 0, x: 40, y: 22, duration: 0.6 }, "<")
      .to(".card-3", { opacity: 0, x: 40, y: 44, duration: 0.6 }, "<")

      .to(".female-image", { scale: 1, duration: 1 }, "<");
  });

  return () => mm.revert();
}, []);


const RightAnimation = (
  <>
    {/* MOBILE STATIC IMAGE */}
    <div className="block sm:hidden">
      <Image
        src={RightImage}
        alt=""
        className="w-full max-w-[320px] mx-auto"
      />
    </div>

    {/* DESKTOP / TABLET ANIMATION */}
    <div className="relative hidden sm:block">
      <Image
        src={Female}
        alt=""
        className="female-image w-56"
      />

      <div className="absolute top-0 right-full mr-4 space-y-4">
        {careerCards.map((card, i) => (
          <div
            key={card.title}
            className={`career-card card-${i + 1} flex items-center gap-2 bg-white w-[250px] py-4 px-6.5 rounded-xl shadow-lg`}
          >
            <Image src={card.icon} alt="" className="w-6 h-6" />
            <span className="text-(--light-color-primary) font-medium text-[16px]">
              {card.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  </>
);


  return (
    <CommonProcessSection
      eyebrow="WHY TECHNODHA"
      heading={
        <div className="heading-primary">
          Build{" "}
          <span className="italic text-(--light-color-primary)">skills</span>.
          Build{" "}
          <span className="italic text-(--light-color-primary)">
            confidence
          </span>
          . Build products
        </div>
      }
      description="At Technodha, we turn ideas into real products with clean design and strong development. Bring your skills and curiosity—we’ll build the rest together."
      items={items}
      reverse={true}
      customRight={RightAnimation} 
    />
  );
}
