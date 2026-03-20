const PRINCIPLES = [
  {
    id: "01",
    title: "Clarity over complexity",
    desc: "Simple decisions. Clean execution. We believe in straightforward solutions that solve real problems without unnecessary complications.",
  },
  {
    id: "02",
    title: "Built for scale",
    desc: "Built on strong foundations. Our systems are designed to handle growth confidently, so you don’t need to rebuild again and again.",
  },
  {
    id: "03",
    title: "Ownership mindset",
    desc: "We treat every project like a product, not a task. From planning to launch, we give full attention to every detail and deliver with care.",
  },
  {
    id: "04",
    title: "Consistency in delivery",
    desc: "Predictable progress and transparent updates. We keep you informed at every step and deliver on our promises—every single time.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className=" py-16 max-w-[1230px] px-[15px] m-auto">
      <div className="flex flex-col">
        {/* ================= HEADER ================= */}
        <header>
          <div className="section-title">WHAT WE STAND FOR</div>

          <h2 className="heading-primary">
            <span className="italic text-(--light-color-primary)">Principles</span>{" "}
            we don&apos;t{" "}
            <span className="italic text-(--light-color-text-secondary)">
              compromise
            </span>{" "}
            on
          </h2>
        </header>

        {/* ================= PRINCIPLES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-19.5 gap-6">
          {PRINCIPLES.map((item) => (
            <article
              key={item.id}
              className="relative bg-[#FB6557]/20 p-5 pt-17.25 rounded-xl"
            >
              {/* Principle Number */}
              <span className="digit absolute -top-5 right-4 text-5xl font-bold opacity-70 animate-icon-pulse">
                {item.id}
              </span>

              {/* Title */}
              <h3 className="text-gradient-primary text-[18px] font-medium">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-(--light-color-text-secondary) text-[14px] mt-2">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
