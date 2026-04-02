export default function AIPlatform() {
  const aiItems = [
    {
      id: "01",
      title: "Startup Automation",
      desc: "Quick AI integrations to accelerate early-stage operations — automate tasks, reduce costs, and move faster from day one.",
    },
    {
      id: "02",
      title: "Enterprise AI Solutions",
      desc: "Scalable AI pipelines for complex business workflows — from data processing to intelligent decision support systems.",
    },
    {
      id: "03",
      title: "Ongoing AI Optimization",
      desc: "Continuous model tuning and performance monitoring to ensure your AI systems keep delivering better results over time.",
    },
  ];

  return (
    <section
      data-theme="light"
      className="max-w-[1230px] px-[15px] m-auto py-15 bg-[#FFF7F2]"
    >
      {/* Header */}
      <div className="text-center max-w-[720px] mx-auto">
        <div className="section-title mb-2">AI SOLUTIONS</div>

        <div className="heading-primary">
          AI <span className="italic text-(--color-primary)">solutions</span>{" "}
          tailored to your{" "}
          <span className="italic text-(--color-secondary)">business</span>{" "}
          needs
        </div>

        <p className="text-support mt-3">
          Whether you&apos;re automating a single workflow or building an
          enterprise AI system, we deliver solutions that are reliable,
          scalable, and easy to manage.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {aiItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#FFD8C7] px-6 py-6 min-h-[210px] flex flex-col"
          >
            <span className="digit font-[900] text-[32px] mb-2">
              {item.id}
            </span>
            <h4 className="text-[15px] font-medium text-(--color-primary) mb-2">
              {item.title}
            </h4>
            <p className="text-[13px] text-[#5F5F6B] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
