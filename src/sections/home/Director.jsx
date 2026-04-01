"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Image from "next/image";
import Frame from "@/assets/images/sections/home/director/director.png";
import Left from "@/assets/images/sections/home/director/left-icon.png";
import CEO from "@/assets/images/sections/home/director/ceo.png";
import CMO from "@/assets/images/sections/home/director/cmo.png";


const data = [
  {
    name: "MADHUR AHIR",
    role: "Chief Executive Officer (CEO)",
    image: CEO,
    message: "Madhur Ahir is the strategic visionary and Chief Executive Officer of the group of companies. He defines long-term business direction, corporate governance, and expansion strategy across all enterprises. With a strong entrepreneurial mindset and leadership acumen, he drives the group’s focus on innovation, operational excellence, and sustainable growth. His ability to anticipate market trends and align business models accordingly has been instrumental in building a future-ready organization. He believes in building institutions rather than just companies — organizations that create lasting value for clients, employees, and partners.",
  },
  {
    name: "HARDEVSINH RATHOD",
    role: "Chief Marketing Officer (CMO)",
    image: CMO,
    message:
      "Hardevsinh Rathod serves as the Chief Marketing Officer across the entire group of companies. He leads brand strategy, market positioning, and business development with a strong focus on corporate credibility and global standards. With expertise in strategic marketing, communication, and customer engagement, he ensures that each company maintains a strong professional identity and competitive presence in its respective market. His role bridges technology and business by transforming complex solutions into clear value propositions for enterprises and multinational clients. Under his leadership, the group continues to strengthen its brand equity and market trust.",
  },
  {
    name: "YUVRAJSINH JADEJA",
    role: "Chief Technical Officer (CTO)",
    image: "/icon-1.jpg",
    message:
      "Yuvrajsinh Jadeja is the Chief Technical Officer of the group and leads its technology innovation and product development strategy. He is responsible for building scalable, secure, and future-ready technology solutions across all companies. His expertise in system architecture, research & development, and advanced digital platforms ensures that every solution meets enterprise-grade standards. His leadership drives continuous innovation and enables the group to deliver reliable, high-performance solutions for startups, enterprises, and industrial clients",
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
 <section       data-theme="light"
 className="relative py-16 md:py-20 min-h-[600px] md:min-h-[700px] bg-[#fff7f5] overflow-hidden">
      <Image
        src={Left}
        alt=""
        className="absolute -left-50 top-0  md:-left-50 md:top-10  lg:-left-45 lg:top-32  w-100 opacity-100 z-50"
      />
      <Image
        src={Left}
        alt=""
        className="absolute 
             -right-50 -bottom-80 
             md:-right-34 md:-bottom-70 
             lg:-right-50 lg:-bottom-34.5
             w-100 opacity-100 z-50 
             scale-x-[-1]"
      />

      {/* Background Image with 50% opacity */}
      <div className="absolute inset-0 bg-[url('/card-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center px-4">
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 
                     w-10 h-10 flex items-center justify-center 
                     rounded-full border border-text-primary bg-white hover:bg-primary"
        >
          <Icon
            icon="lucide:arrow-left"
            className="text-text-primary text-lg"
          />
        </button>

        {/* DESKTOP FRAME */}
        <div className="hidden md:block relative w-full max-w-300 h-200 md:h-125">
          <Image
            src={Frame}
            alt="frame"
            fill
            className="object-contain"
            priority
          />

          {/* CONTENT inside frame */}
          <div className="absolute inset-0 flex items-center justify-center gap-10 px-6 ">
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

            <p className="text-[12px] text-gray-500 mb-2 leading-relaxed min-h-[80px]">
  {data[index].message}
</p>
              <p className="text-primary font-medium">— {data[index].name}</p>

              <p className="text-[12px] text-gray-500">{data[index].role}</p>
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

            <p className="text-sm text-gray-500 mb-4 leading-relaxed ">
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
                     rounded-full border border-text-primary bg-white hover:bg-primary"
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
