"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Startups from "@/assets/images/sections/startups/startups.jpg";
import Healthcare from "@/assets/images/sections/startups/healthcare.jpg";
import Ecom from "@/assets/images/sections/startups/ecom.jpg";
import Edu from "@/assets/images/sections/startups/edu.jpg";
import Realestate from "@/assets/images/sections/startups/realestate.jpg";

export default function ServiceStack() {
  const sectionRef = useRef(null);

  const services = [
    { title: "Startups", image: Startups },
    { title: "Healthcare", image: Healthcare },
    { title: "E-Commerce", image: Ecom },
    { title: "Education", image: Edu },
    { title: "Real Estate", image: Realestate },
  ];

  const [activeTitle, setActiveTitle] = useState(services[0].title);
  const [currentIndex, setCurrentIndex] = useState(0);

  // GSAP only for desktop
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".service-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1800",
        scrub: true,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      tl.from(card, {
        y: 400,
        opacity: 0,
        rotate: i % 2 === 0 ? -6 : 6,
        duration: 0.6,
      });

      tl.to(card, {
        y: -i * 12,
        onStart: () => setActiveTitle(services[i].title),
      });
    });

    tl.to(cards, {
      x: (i) => (i - 2) * 280,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 1,
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // Slider controls
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-bg flex flex-col items-center justify-center overflow-hidden relative lg:px-[120px]"
    >
      <div className="max-w-[1440px] h-screen mx-auto w-full relative">

        {/* Heading */}
        <h2 className="lg:text-[48px] font-semibold absolute top-0 text-center text-text-primary mt-4 lg:leading-[65px] w-full text-[35px] leading-[48px]">
          Where <span className="text-primary"> Innovation </span>
          <br />
          <span>
            Meets <span className="text-secondary"> Industry </span>
          </span>
        </h2>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="lg:hidden w-full flex flex-col items-center gap-6 mt-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full flex justify-center">
                  <div className="w-[260px] h-[340px] relative border border-border rounded-xl overflow-hidden shadow-xl">
                    
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-70"
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-text-primary py-2 px-4 rounded-2xl">
                      <h1 className="text-gradient-primary text-[14px] font-bold">
                        {service.title}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 border border-border rounded-lg"
            >
              Prev
            </button>

            <button
              onClick={nextSlide}
              className="px-4 py-2 border border-border rounded-lg"
            >
              Next
            </button>
          </div>
        </div>

        {/* ================= DESKTOP GSAP ================= */}
        <div className="hidden lg:flex relative w-full justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group absolute w-[260px] h-[340px]
              border border-border rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-70"
              />

              {/* Center Title */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-text-primary py-2 px-4 rounded-2xl">
                <h1 className="text-gradient-primary text-[14px] font-bold">
                  {service.title}
                </h1>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 text-text-primary py-5 px-3 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-primary">
                <div className="border border-text-primary h-full rounded-[10px] py-5 px-3">
                  <h3 className="text-[22px] font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[14px] mb-4 text-text-primary">
                    Smart digital solutions designed to help {service.title}{" "}
                    businesses scale faster and improve their digital presence.
                  </p>

                  <button className="border border-text-primary px-4 py-2 rounded-[20px] text-[12px] hover:bg-text-primary hover:text-bg transition">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}