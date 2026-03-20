import Image from "next/image";
import CenterImg from "@/assets/images/sections/home/matters/center-image.png";
import TopLeft from "@/assets/images/sections/home/matters/left-top.png";
import TopRight from "@/assets/images/sections/home/matters/right-top.png";
import BottomLeft from "@/assets/images/sections/home/matters/bottom-left.png";
import BottomRight from "@/assets/images/sections/home/matters/bottom-right.png";

import TopLeftIcon from "@/assets/images/sections/home/matters/topleft-icon.png";
import TopRightIcon from "@/assets/images/sections/home/matters/topright-icon.png";
import BottomLeftIcon from "@/assets/images/sections/home/matters/bottomleft-icon.png";
import BottomRightIcon from "@/assets/images/sections/home/matters/bottomright-icon.png";

import Animated from "@/assets/images/sections/home/matters/animated-img.png";
export default function Maters() {
  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-16 ">
      {" "}
      {/* Heading */}
      <div>
        <span className="bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent text-sm tracking-wide">
          WHY IT MATTERS
        </span>

        <div className="heading-primary">
          <span className="font-semibold italic bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] bg-clip-text text-transparent px-1">
            Benefits
          </span>
          built into every{" "}
          <span className="font-medium italic text-[#6E5C59] px-1">build</span>
        </div>

        <p className="text-support mt-4 max-w-xl">
          We don’t just deliver a website — we deliver a foundation that stays
          reliable as your product, users, and features grow.
        </p>
      </div>

      {/* Diagram */}
      <div className="mt-12 flex justify-center lg:hidden">
  <Image
    src={Animated}
    alt=""
    className=""
  />
</div>
<div className="relative my-[125px] hidden lg:flex justify-center mx-40 xl:mx-59">
       {/* Center Image */}
<div className="z-10 max-w-155.75 max-h-75 animate-[centerPulse_4s_ease-in-out_infinite]">
  <Image src={CenterImg} alt="" className="w-full" />
</div>


        {/* TOP LEFT */}
        <div className="absolute -top-14 -left-30 flex items-center gap-2 text-(--light-color-primary)  max-w-[250px]">
          <Image src={TopLeftIcon} alt="" width={16} height={16} />
          <h1 className="text-sm">Scalable architecture</h1>
        </div>

      <div className="absolute flex items-center -top-12 left-0 lg:left-25 animate-[cornerFade_4s_ease-in-out_infinite]">
  <Image src={TopLeft} alt="" className="w-40" />
</div>

        {/* TOP RIGHT */}
        <div className="absolute -top-14 -right-30 flex items-center gap-2 text-(--light-color-primary) max-w-[250px]">
          <Image src={TopRightIcon} alt="" width={16} height={16} />
          <h1 className="text-sm">Secure development</h1>
        </div>

       <div className="absolute -top-12 right-0 lg:right-20 animate-[cornerFade_4s_ease-in-out_infinite]">
  <Image src={TopRight} alt="" className="w-40" />
</div>

        {/* BOTTOM LEFT */}
        <div className="absolute -bottom-18 -left-32 flex items-center gap-2 text-(--light-color-primary) max-w-[250px]">
          <Image src={BottomLeftIcon} alt="" width={16} height={16} />
          <h1 className="text-sm">Performance optimization</h1>
        </div>

       <div className="absolute -bottom-16 left-0 lg:left-25 animate-[cornerFade_4s_ease-in-out_infinite]">
  <Image src={BottomLeft} alt="" className="w-40" />
</div>


        {/* BOTTOM RIGHT */}
        <div className="absolute -bottom-18 -right-23 flex items-center gap-2 text-(--light-color-primary) max-w-[250px]">
          <Image src={BottomRightIcon} alt="" width={16} height={16} />
          <h1 className="text-sm">Maintainable code</h1>
        </div>

      <div className="absolute -bottom-16 right-0 lg:right-20 animate-[cornerFade_4s_ease-in-out_infinite]">
  <Image src={BottomRight} alt="" className="w-40" />
</div>

      </div>
    </section>
  );
}
