import Image from "next/image";

export default function CommonSolutionsGrid({
  eyebrow,
  heading,
  description,
  items = [],
}) {
  return (
    <section className=" max-w-[1230px] px-[15px] m-auto py-16">

      {/* Header */}
      <div className="text-center">
        {eyebrow && <div className="section-title">{eyebrow}</div>}

        {heading}

        {description && (
          <p className="text-support mt-4 max-w-200 mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 place-items-center">

        {items.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-xl border border-(--light-color-border)
              w-full max-w-96
              min-h-90
              px-5 sm:px-6
              flex flex-col items-center justify-around
              hover:shadow-lg transition-shadow duration-300
            "
          >
            {/* Image */}
            <div className="
              w-full max-w-80
              h-52 sm:h-64 lg:h-72
              flex items-center justify-center
            ">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center max-w-84 mb-9">
              <h4 className="text-lg sm:text-xl font-medium text-[#1A1A1F] mb-2">
                {item.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#5F5F6B] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
