"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Card1 from "@/assets/images/sections/services/ux1.png";
import Card2 from "@/assets/images/sections/services/ux2.png";
import Card3 from "@/assets/images/sections/services/ux3.png";
import Card4 from "@/assets/images/sections/services/ux4.png";
import Card5 from "@/assets/images/sections/services/ux5.png";


const cards = [
  { title: "Quick Wireframing", img: Card3 },
  { title: "Testing & Iteration", img: Card5 },
    { title: "UI Design", img: Card4 },

  { title: "Brainstorming", img: Card2 },

{ title: "UX Research", img: Card1 }];
export default function Home() {
  const cardsRef = useRef([]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // GSAP only on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      // XL screens
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(cardsRef.current[4], { x: -500, duration: 0.7 })
        .to(cardsRef.current[3], { x: -250, duration: 0.7 }, "-=0.4")
        .to(cardsRef.current[2], { x: 250, duration: 0.7 }, "-=0.4")
        .to(cardsRef.current[1], { x: 500, duration: 0.7 }, "-=0.4")
        .to({}, { duration: 1 })
        .to(cardsRef.current, { x: 0, duration: 0.6 });
    });

    mm.add("(min-width:1024px) and (max-width:1279px)", () => {
      // LG screens (1024)
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(cardsRef.current[4], { x: -400, duration: 0.6 })
        .to(cardsRef.current[3], { x: -200, duration: 0.6 }, "-=0.4")
        .to(cardsRef.current[2], { x: 200, duration: 0.6 }, "-=0.4")
        .to(cardsRef.current[1], { x: 400, duration: 0.6 }, "-=0.4")
        .to({}, { duration: 1 })
        .to(cardsRef.current, { x: 0, duration: 0.5 });
    });

    return () => mm.revert();
  }, [isDesktop]);

  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-6 lg:py-16">
      <header className="text-center">
        <div className="section-title">DESIGN WORKFLOW</div>

        <h2 className="heading-primary">
          From
          <span className="italic text-(--light-color-secondary) mx-2">user</span>
          insight to usable
          <span className="italic text-(--light-color-text-secondary) mx-2">
            interface
          </span>
        </h2>

        <div className="text-support max-w-[792px] m-auto">
          A structured UX process that helps us design products that feel intuitive,
          consistent, and ready for real users
        </div>
      </header>

      {/* Desktop Animated */}
      {isDesktop && (
        <div className="w-full h-[290px] flex items-center justify-center overflow-hidden">
          <div className="relative flex items-center justify-center">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute flex items-center justify-center"
                style={{ zIndex: cards.length - i }}
              >
<div className="
  w-[160px] h-[172px] lg:w-[180px] lg:h-[200px] xl:w-[193px] xl:h-[207px]
  bg-white rounded-xl shadow-xl p-3 xl:p-4
  flex flex-col items-center justify-between
">
                  <img src={card.img.src} alt={card.title} />
                  <h3 className="text-gradient-primary text-[16px] font-medium text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile / Tablet Static Grid */}
      {!isDesktop && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-between"
            >
              <img src={card.img.src} alt={card.title} />
              <h3 className="text-gradient-primary text-sm font-medium text-center mt-2">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
