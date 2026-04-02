export default function MaintenancePlatform() {
  const maintenanceItems = [
    {
      id: "01",
      title: "Essential Support",
      desc: "Core maintenance for small websites and apps — regular updates, bug fixes, and basic monitoring to keep things running smoothly.",
    },
    {
      id: "02",
      title: "Business Support",
      desc: "Comprehensive support for growing businesses — performance optimization, security patches, and priority issue resolution.",
    },
    {
      id: "03",
      title: "Enterprise Support",
      desc: "Dedicated team with SLA guarantees — 24/7 monitoring, rapid response, and strategic infrastructure improvements.",
    },
  ];

  return (
    <section
      data-theme="light"
      className="max-w-[1230px] px-[15px] m-auto py-15 bg-[#FFF7F2]"
    >
      {/* Header */}
      <div className="text-center max-w-[720px] mx-auto">
        <div className="section-title mb-2">SUPPORT PLANS</div>

        <div className="heading-primary">
          Flexible{" "}
          <span className="italic text-(--color-primary)">support</span> for
          every{" "}
          <span className="italic text-(--color-secondary)">business</span>{" "}
          size
        </div>

        <p className="text-support mt-3">
          Whether you need basic upkeep or full-scale enterprise support, we
          offer plans that match your needs and grow with your business.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {maintenanceItems.map((item, index) => (
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
