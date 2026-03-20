export default function CloudPlatform() {
  const cloudItems = [
    {
      id: "01",
      title: "MVP Hosting",
      desc: "Launch fast with a clean cloud setup that’s reliable from day one—ready to scale as users grow.",
    },
    {
      id: "02",
      title: "Business App Infrastructure",
      desc: "Production-ready infrastructure for web apps, dashboards, and internal systems—built for stability and performance.",
    },
    {
      id: "03",
      title: "Managed Cloud Support",
      desc: "Ongoing support to keep your infrastructure healthy—updates, monitoring, and improvements handled smoothly.",
    },
  ];

  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-20 bg-[#FFF7F2]">

      {/* Header */}
      <div className="text-center max-w-[720px] mx-auto">
        <div className="section-title mb-2">
          CLOUD SOLUTIONS
        </div>

        <div className="heading-primary">
          Cloud <span className="italic text-(--light-color-primary)">setups</span>{" "}
          built for real{" "}
          <span className="italic text-(--light-color-secondary)">business</span>{" "}
          needs
        </div>

        <p className="text-support mt-3">
          Whether you’re launching an MVP or scaling a business system, we
          deliver cloud infrastructure that stays secure, stable, and easy to
          manage.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

        {cloudItems.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-xl border border-[#FFD8C7]
              px-6 py-6
              min-h-[210px]
              flex flex-col
            "
          >
            {/* Number */}
            <span className="digit font-[900] text-[32px] mb-2">
              {item.id}
            </span>

            {/* Title */}
            <h4 className="text-[15px] font-medium text-(--light-color-primary) mb-2">
              {item.title}
            </h4>

            {/* Desc */}
            <p className="text-[13px] text-[#5F5F6B] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
