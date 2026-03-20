import Image from "next/image";
import EyeIcon from "@/assets/images/sections/about/exist/eye-icon.png";
import RocketIcon from "@/assets/images/sections/about/exist/rocket-icon.png";
import DiamondIcon from "@/assets/images/sections/about/exist/diamound-icon.png";

const EXIST_CARDS = [
  {
    id: "vision",
    icon: EyeIcon,
    title: "Vision Ahead",
    desc: "To build digital experiences that help businesses grow smarter and faster.",
  },
  {
    id: "mission",
    icon: RocketIcon,
    title: "Mission in Action",
    desc: "We turn ideas into digital products with a strong team culture and modern tech.",
  },
  {
    id: "values",
    icon: DiamondIcon,
    title: "Built on Strong Values",
    desc: "Quality-driven solutions that earn trust and create long-term impact.",
  },
];

export default function AboutExist() {
  return (
    <section className="py-16  max-w-[1230px] px-[15px] m-auto">
      {/* ================= HEADER ================= */}
      <header className="text-center md:text-left">
        <div className="section-title">WHY WE EXIST</div>

        <h2 className="heading-primary">
          Driven by
          <span className="italic text-(--light-color-secondary) mx-2">
            purpose
          </span>
          , not
          <span className="italic text-(--light-color-text-secondary) mx-2">
            hype
          </span>
        </h2>
      </header>

      {/* ================= CARDS ================= */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-6 text-center mt-16 md:mt-24">
        {EXIST_CARDS.map((item) => (
          <article
            key={item.id}
            className="bg-white flex-1 pt-14 pb-8 px-4 rounded-xl relative"
          >
            {/* Icon */}
            <div className="w-18 h-18 md:w-22 md:h-22 bg-(--light-color-border) rounded-full absolute left-1/2 md:left-6 -top-9 md:-top-11 -translate-x-1/2 md:translate-x-0 flex items-center justify-center p-3">
              <div className="animate-icon-pulse">
                <Image
                  src={item.icon}
                  alt={item.title}
                  sizes="96px"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-(--light-color-text-primary) text-4 md:text-5 font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-3 md:text-4 text-(--light-color-text-secondary)">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
