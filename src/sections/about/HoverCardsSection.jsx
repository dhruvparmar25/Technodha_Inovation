import Image from "next/image";
import Person from "@/assets/images/sections/about/hovercard/person.png";

import Icon1 from "@/assets/images/sections/about/hovercard/icon-1.png";
import Icon2 from "@/assets/images/sections/about/hovercard/icon-2.png";
import Icon3 from "@/assets/images/sections/about/hovercard/icon-3.png";
import Icon4 from "@/assets/images/sections/about/hovercard/icon-4.png";
import Icon5 from "@/assets/images/sections/about/hovercard/icon-5.png";

const cards = [
  {
    title: "Clear scope, clear communication",
    desc: "We ensure every project starts with a shared understanding and stays aligned throughout.",
    pos: "top-15 left-1/2 -translate-x-1/2",
    icon: Icon1,
  },
  {
    title: "Scalable foundations from day one",
    desc: "Our Designer is designed to grow with your business, avoiding costly rewrites later.",
    pos: "left-0 top-1/2 -translate-y-1/2",
    icon: Icon2,
  },
  {
    title: "Reliable delivery beyond launch",
    desc: "We don't just build and leave—we ensure your product continues to perform and evolve.",
    pos: "right-0 top-1/2 -translate-y-1/2",
    icon: Icon3,
  },
  {
    title: "Quality Guaranteed",
    desc: "We focus on clean design, strong performance, and reliable delivery—every time.",
    pos: "bottom-0 left-0",
    icon: Icon4,
  },
  {
    title: "On-Time Delivery Promise",
    desc: "We respect deadlines and deliver your project on schedule without compromise.",
    pos: "bottom-0 right-0",
    icon: Icon5,
  },
];

export default function HoverCardsSection() {
  return (
    <section className=" relative  max-w-[1230px] px-[15px] m-auto py-16">
      <div className="text-center flex flex-col items-center justify-center">
        {/* Small Gradient Title */}
        <span className="section-title">THE WAY WE BUILD</span>

        {/* Main Heading */}
        <div className="heading-primary ">
          Built with
          <span className="italic text-gradient-primary mx-1">intention</span>
          .Delivered with
          <span className="italic text-gradient-primary mx-1"> confidence</span>
          .
        </div>

        {/* Sub Text */}
        <p className="text-support mx-1">
          We keep the process simple and structured—understand the goal, design
          with purpose, build with clean foundations, and ship something you can
          grow on.{" "}
        </p>
      </div>

      <div className=" px-6">
        <div className="relative flex justify-center items-end">
          {/* GROUP */}
          <div className=" group  ">
            {/* Cards */}

            {cards.map((item, i) => (
              <div
                key={i}
            className={`hidden lg:flex absolute ${item.pos} max-w-131 max-h-20
rounded-xl p-2.5
opacity-0 scale-90 translate-y-4
transition-all duration-500
group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
pointer-events-none items-start gap-4`}
>
                <div
                  className="w-12 h-12 rounded-full
  bg-[linear-gradient(180deg,rgba(251,101,87,0.2)_0%,rgba(254,145,57,0.2)_100%)]
  flex items-center justify-center shrink-0"
                >
                  <Image src={item.icon} alt="" width={24} height={24} />
                </div>

                <div>
                  <h4 className="text-[14px] font-medium text-[#1A1A1F]">
                    {item.title}
                  </h4>
                  <p className="text-[13px] text-[#5F5F6B] leading-relaxed max-w-[390px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            {/* Mobile + Tablet Cards */}
            <div className="lg:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto">
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-2.5 flex items-start gap-4
      border border-black/5 shadow-sm bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-full
        bg-[linear-gradient(180deg,rgba(251,101,87,0.2)_0%,rgba(254,145,57,0.2)_100%)]
        flex items-center justify-center shrink-0"
                  >
                    <Image src={item.icon} alt="" width={24} height={24} />
                  </div>

                  <div>
                    <h4 className="text-[14px] font-medium text-[#1A1A1F]">
                      {item.title}
                    </h4>

                    <p className="text-[13px] text-[#5F5F6B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="relative z-10 w-75 lg:h-97 sm:w-95 flex items-end m-auto">
<div className="left-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

              <Image
                src={Person}
                alt=""
                className="w-full h-auto cursor-pointer "
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
