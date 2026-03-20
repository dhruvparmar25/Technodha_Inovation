"use client";
import Image from "next/image";
import Aws from "@/assets/images/tech/aws.svg";
import Bootstrap from "@/assets/images/tech/bootstrap.png";
import Css from "@/assets/images/tech/css.png";
import Django from "@/assets/images/tech/django.svg";
import Figma from "@/assets/images/tech/figma.png";
import Flutter from "@/assets/images/tech/flutter.svg";
import Github from "@/assets/images/tech/github.svg";
import Gitlab from "@/assets/images/tech/gitlab.png";
import Html from "@/assets/images/tech/html.png";
import Javascript from "@/assets/images/tech/javascript.png";
import Kotlin from "@/assets/images/tech/kotlin.svg";
import Nextjs from "@/assets/images/tech/nextjs.png";
import Nodejs from "@/assets/images/tech/nodejs.svg";
import Python from "@/assets/images/tech/python.svg";
import ReactImg from "@/assets/images/tech/react.png";
import Sass from "@/assets/images/tech/sass.png";
import Slack from "@/assets/images/tech/slack.svg";
import Swift from "@/assets/images/tech/swift.svg";
import Tailwind from "@/assets/images/tech/tailwind.png";
import Typescript from "@/assets/images/tech/typescript.png";
import Techmen from "@/assets/images/tech/tech-men.gif";


// DATA
const techItems = [
  { title: "Flutter", img: Flutter },
  { title: "Kotlin", img: Kotlin },
  { title: "Swift", img: Swift },
  { title: "Python", img: Python },
  { title: "Django", img: Django },
  { title: "Nodejs", img: Nodejs },
  { title: "AWS", img: Aws },
  { title: "Gitlab", img: Gitlab },
  { title: "Github", img: Github },
  { title: "Slack", img: Slack },
];

const techItemsSecond = [
  { title: "Figma", img: Figma },
  { title: "HTML", img: Html },
  { title: "CSS", img: Css },
  { title: "SASS", img: Sass },
  { title: "Tailwind CSS", img: Tailwind },
  { title: "Bootstrap", img: Bootstrap },
  { title: "JavaScript", img: Javascript },
  { title: "React JS", img: ReactImg },
  { title: "TypeScript", img: Typescript },
  { title: "Next JS", img: Nextjs },
];

/* ================================
   Marquee Row Component
================================ */
const MarqueeRow = ({ items, reverse = false }) => {
  return (
    <div className="relative  w-full">
      <div
        className={`
          flex w-max
          gap-8 sm:gap-12 lg:gap-16
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
        `}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="tech-box bg-[#0B0C0C]! flex items-center justify-center gap-2 sm:gap-3"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={32}
              height={32}
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
            />
            <span className="whitespace-nowrap text-white">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ================================
   Main Section
================================ */
function TechStackSection() {
  return (
    <section
      className=" relative bg-[#000000]  sm:pb-20 page-wrapper "
    >

<div className="mt-4">
      {/* HEADER */}
      <div className="w-[76px] h-[125px] -rotate-25  flex justify-center items-center m-auto   ">
        <Image src={Techmen} className="w-full pb-6" alt=""/>
      </div>
      <div className="text-center mb-12 sm:mb-16 px-">
        <span className="bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent text-sm sm:text-base font-medium">
          POWERED BY MODERN ENGINEERING
        </span>

        <div className="heading-primary mt-2 text-white!">
          The <span className="italic text-[#FB6557]">stack</span> behind
          reliable <span className="italic text-[#FE9139]">scalable</span>{" "}
          systems
        </div>

        <p className="text-support mt-3 text-white!">
          Technologies chosen for real-world performance, not trends.
        </p>
      </div>

      {/* MARQUEE ROWS */}
      <div className="flex flex-col gap-6 sm:gap-8 mt-14 sm:mt-16">
        <MarqueeRow items={techItemsSecond} />
        <MarqueeRow items={techItems} reverse />
      </div>
      </div>
    </section>
  );
}

export default TechStackSection;
