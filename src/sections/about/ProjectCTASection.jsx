"use client";
import GradientButton from "@/components/common/GradientButton";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectCTASection() {
  const router = useRouter();

  return (
    <section
      data-theme="light"
      className=" max-w-[1230px] px-[15px] m-auto pb-16 "
    >
      <div className="text-center flex flex-col items-center justify-center">
        {/* Small Gradient Title */}
        <span className="section-title">LET’S BUILD TOGETHER</span>

        {/* Main Heading */}
        <div className="heading-primary ">
          Have a <span className="italic text-gradient-primary">project</span>{" "}
          in mind?
        </div>

        {/* Sub Text */}
        <p className="text-support mb-10">
          Share your requirements—we’ll reply with the next best step, clearly
          and quickly.
        </p>
<Link href="/contact">

        <button className="group text-4 font-medium text-text-primary py-2 flex items-center gap-2 m-auto lg:m-0 hover:text-primary">
          SEND YOUR REQUIREMENTS{" "}
          <Icon
            color="#fe9139"
            className="w-9 h-9 bg-white rounded-full -rotate-45 
                 transition-transform duration-300 ease-in-out 
                 group-hover:rotate-0"
            icon="fa6-solid:circle-right"
          />
        </button>
        </Link>
      </div>
    </section>
  );
}
