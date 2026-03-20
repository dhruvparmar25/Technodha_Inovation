import Image from "next/image";

import Timeline from "@/assets/images/sections/about/expectations/timeline-icon.png";
import Chat from "@/assets/images/sections/about/expectations/chat-icon.png";
import Deploy from "@/assets/images/sections/about/expectations/deploy-icon.png";

const expectations = [
  {
    title: "Real timelines, realistic commitments",
    desc: "We provide honest estimates and deliver on time without cutting corners.",
    icon: Timeline,
  },
  {
    title: "Strong communication, clear scope",
    desc: "We keep you in the loop and ensure alignment at every project milestone.",
    icon: Chat,
  },
  {
    title: "Production-ready output, not demos",
    desc: "We deliver fully tested, deployable solutions that are ready for real-world use.",
    icon: Deploy,
  },
];

export default function ExpectationsSection() {
  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-16">
      {/* Header */}
      <div>
        <div className="section-title">WHAT YOU CAN EXPECT</div>

        <div className="heading-primary">
          Reliable{" "}
          <span className="italic text-(--light-color-secondary)">delivery</span>,
          built on{" "}
          <span className="italic text-(--light-color-primary)">trust</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10.5">
        {expectations.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl py-5.5 px-3.5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex justify-center mb-1">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                sizes="40px"
              />
            </div>

            <h4 className="text-lg font-medium text-[#2C2C2C] hover:text-(--light-color-primary) transition-colors duration-300">
              {item.title}
            </h4>

            <p className="text-[14px] text-[#2C2C2C] mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
