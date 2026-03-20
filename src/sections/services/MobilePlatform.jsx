import Image from "next/image";

import Timeline from "@/assets/images/sections/services/mobile-icon.png";
import Chat from "@/assets/images/sections/services/apple-icon.png";
import Deploy from "@/assets/images/sections/services/mobile-code.png";

const expectations = [
  {
    title: "Android Development",
    desc: "Apps built for a wide range of devices with stable performance, clean navigation, and scalable architecture.",
    icon: Timeline,
  },
  {
    title: "iOS Development",
    desc: "Polished iOS experiences designed for speed, smooth interactions, and consistency across Apple devices.",
    icon: Chat,
  },
  {
    title: "Cross-Platform Development",
    desc: "One build for both Android and iOS—faster launch, consistent design, and easier long-term maintenance.",
    icon: Deploy,
  },
];

export default function MobilePlatform() {
  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-16 ">

      {/* Header */}
      <div className="text-center max-w-180 mx-auto">
        <div className="section-title mb-2">
          PLATFORMS WE BUILD FOR
        </div>

        <div className="heading-primary">
          <span className="italic text-(--light-color-primary)">Android</span>-ready,{" "}
          <span className="italic text-(--light-color-secondary)">iOS</span>-polished
        </div>

        <p className="text-support mt-3">
          We develop mobile apps with smooth performance, consistent UI, and
          production-ready quality—across the platforms your users rely on.
        </p>
      </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  {expectations.map((item, index) => (
    <div
      key={index}
      className="group
        bg-white rounded-xl border border-(--light-color-border)
        p-4 pt-5.5 flex flex-col 
        transition-all duration-300
hover:shadow-[0_0_0_1px_rgba(254,145,57,0.25),0_0_20px_rgba(254,145,57,0.35)]
      "
    >
      {/* Icon */}
      <Image
        src={item.icon}
        alt=""
        width={32}
        height={32}
        className="mb-3"
      />

      {/* Title */}
      <h4 className="text-sm font-medium text-[#1A1A1F] mb-2 transition-colors duration-300 group-hover:text-(--light-color-primary)">
        {item.title}
      </h4>

      {/* Desc */}
      <p className="text-sm text-[#5F5F6B] leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}

</div>


    </section>
  );
}
