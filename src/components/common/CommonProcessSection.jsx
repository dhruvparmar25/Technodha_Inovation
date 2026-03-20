import Image from "next/image";

export default function CommonProcessSection({
  illustration,
  eyebrow,
  heading,
  description,
  items = [],
    iconSize = 24, 
  customRight = null, 

  reverse = true,
}) {
  return (
    <section className=" max-w-[1230px] px-[15px] m-auto lg:py-16">
      <div className={`grid lg:grid-cols-2 gap-13.5 items-center`}>

     {/* Illustration */}
<div
  className={`p-5 flex justify-center lg:justify-start overflow-hidden 
  transition-transform duration-300 ease-out
  ${!customRight ? "hover:scale-120" : ""}
  ${reverse ? "lg:order-2" : ""}
  ${customRight ? "career-right-align" : ""}`}
>

  {customRight ? (
    customRight
  ) : (
    <Image
      src={illustration}
      alt=""
      className="xl:max-w-[460px] max-h-[410px]"
      priority
    />
  )}
</div>





        {/* Content */}
        <div className={`${reverse ? "lg:order-1" : ""}`}>
          {eyebrow && <div className="section-title">{eyebrow}</div>}

          {heading}

          {description && <p className="text-support">{description}</p>}

          {/* Items */}
          <div className="space-y-4 mt-6">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">

                {/* LEFT SIDE: NUMBER OR ICON */}
                {item.id ? (
                  <span className="text-(--light-color-primary) font-extrabold text-[24px]">
                    {item.id}
                  </span>
                ) : item.icon ? (
                <Image
  src={item.icon}
  alt=""
  width={iconSize}
  height={iconSize}
/>

                ) : null}

                <div>
                  <h4 className="text-[16px] font-medium text-[#1A1A1F]">
                    {item.title}
                  </h4>

                  {item.desc && (
                    <p className="text-[12px] text-[#5F5F6B]">
                      {item.desc}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
