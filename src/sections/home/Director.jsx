"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Image from "next/image";
import Frame from "@/assets/images/sections/home/director/director.png";
import Left from "@/assets/images/sections/home/director/left-icon.png";
import CEO from "@/assets/images/sections/home/director/ceo.png";
import CMO from "@/assets/images/sections/home/director/cmo.png";
import CTO from "@/assets/images/sections/home/director/uv.png"


const data = [
  {
    name: "MADHUR AHIR",
    role: "Chief Executive Officer (CEO)",
    image: CEO,
    message: "To build enterprises that combine innovation with responsibility and growth with integrity - Madhur Ahir",
  },
  {
    name: "HARDEVSINH RATHOD",
    role: "Chief Marketing Officer (CMO)",
    image: CMO,
    message:
      "To create brands that inspire confidence and represent excellence at every touchpoint - Hardevsinh Rathod",
  },
  {
    name: "YUVRAJSINH JADEJA",
    role: "Chief Technical Officer (CTO)",
    image: CTO,
    message:
      "To design intelligent systems that simplify complexity and enable business transformation - Yuvrajsinh Jadeja",
  },
];

export default function DirectorSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === data.length - 1 ? 0 : i + 1));
  };

  return (
    <section
      data-theme="light"
      className="relative py-16 md:py-20 min-h-[600px] md:min-h-[700px] bg-[#fff7f5] overflow-hidden"
    >
      {/* LEFT DECOR IMAGE */}
      <Image
        src={Left}
        alt=""
        className="absolute -left-50 top-0 md:-left-50 md:top-10 lg:-left-45 lg:top-32 w-100 opacity-100 z-0 pointer-events-none"
      />

      {/* RIGHT DECOR IMAGE */}
      <Image
        src={Left}
        alt=""
        className="absolute -right-50 -bottom-80 md:-right-34 md:-bottom-70 lg:-right-50 lg:-bottom-34.5 w-100 opacity-100 z-0 scale-x-[-1] pointer-events-none"
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/card-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0"></div>

      {/* MAIN */}
      <div className="relative z-10 max-w-6xl mx-auto flex items-center justify-center px-4">
        
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-50 
          w-10 h-10 flex items-center justify-center 
          rounded-full border border-text-primary bg-white hover:bg-primary"
        >
          <Icon icon="lucide:arrow-left" className="text-text-primary text-lg" />
        </button>

        {/* DESKTOP */}
        <div className="hidden md:block relative w-full max-w-300 h-200 md:h-125">
          <Image
            src={Frame}
            alt="frame"
            fill
            className="object-contain"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center gap-10 px-6">
            
            {/* IMAGE */}
            <div className="w-60 h-80 relative bg-white">
              <Image
                src={data[index].image}
                alt={data[index].name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* TEXT */}
            <div className="max-w-90 text-left">
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                <span className="text-primary mr-1">Director’s</span> Message
              </h3>

              <p className="text-[16px] text-gray-500 mb-2 leading-relaxed ">
                {data[index].message}
              </p>

              <p className="text-primary font-medium">
                — {data[index].name}
              </p>

              <p className="text-[16px] text-gray-500">
                {data[index].role}
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col items-center text-center gap-6">
          <div className="w-45 h-55 relative">
            <Image
              src={data[index].image}
              alt={data[index].name}
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="max-w-75">
            <h3 className="text-lg font-semibold mb-3 mr-1 text-text-primary">
              <span className="text-primary">Director’s</span> Message
            </h3>

            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              {data[index].message}
            </p>

            <p className="text-primary font-medium">
              — {data[index].name}
            </p>

            <p className="text-sm text-gray-500">
              {data[index].role}
            </p>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-2 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 
          w-10 h-10 flex items-center justify-center 
          rounded-full border border-text-primary bg-white hover:bg-primary"
        >
          <Icon icon="lucide:arrow-right" className="text-text-primary text-lg" />
        </button>
      </div>
    </section>
  );
}
