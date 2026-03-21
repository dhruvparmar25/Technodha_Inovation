"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Image from "next/image";
import Frame from "@/assets/images/sections/home/director/director.png";
import Left from "@/assets/images/sections/home/director/left-icon.png";

const data = [
  {
    name: "Amit Verma",
    role: "Co-Founder",
    image: "/icon-1.jpg",
    message: "Innovation and commitment define our journey toward excellence.",
  },
  {
    name: "Ranjan Singh",
    role: "Director",
    image: "/icon-1.jpg",
    message:
      "True success is not measured by how much we deliver, but by the value and trust we create.",
  },
  {
    name: "Neha Sharma",
    role: "Managing Director",
    image: "/icon-1.jpg",
    message:
      "We believe in building relationships, not just delivering services.",
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
      className="relative py-16 md:py-20 bg-[#fff7f5] overflow-hidden"
    >
      <Image
        src={Left}
        alt=""
        className="absolute -left-50 top-0  md:-left-50 md:top-10  lg:-left-45 lg:top-32  w-100 opacity-100 z-50"
      />
      <Image
        src={Left}
        alt=""
        className="absolute 
             -right-50 -bottom-70 
             md:-right-34 md:-bottom-70 
             lg:-right-50 lg:-bottom-34.5
             w-100 opacity-100 z-50 
             scale-x-[-1]"
      />

      {/* Background Image with 50% opacity */}
      <div className="absolute inset-0 bg-[url('/card-bg.jpg')] bg-cover bg-center opacity-50 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center px-4">
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 
                     w-10 h-10 flex items-center justify-center 
                     rounded-full border-2 border-text-primary bg-white"
        >
          <Icon
            icon="lucide:arrow-left"
            className="text-text-primary text-lg"
          />
        </button>

        {/* DESKTOP FRAME */}
        <div className="hidden md:block relative w-full max-w-175 h-90 md:h-105">
          <Image
            src={Frame}
            alt="frame"
            fill
            className="object-contain"
            priority
          />

          {/* CONTENT inside frame */}
          <div className="absolute inset-0 flex items-center justify-center gap-10 px-6 ml-6">
            {/* IMAGE */}
            <div className="w-50 h-60 relative">
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

              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {data[index].message}
              </p>

              <p className="text-primary font-medium">— {data[index].name}</p>

              <p className="text-sm text-gray-500">{data[index].role}</p>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (NO FRAME) */}
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

            <p className="text-primary font-medium">— {data[index].name}</p>

            <p className="text-sm text-gray-500">{data[index].role}</p>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-2 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 
                     w-10 h-10 flex items-center justify-center 
                     rounded-full border-2 border-text-primary bg-white"
        >
          <Icon
            icon="lucide:arrow-right"
            className="text-text-primary text-lg"
          />
        </button>
      </div>
    </section>
  );
}
