  import Image from "next/image";
  import AboutGif from "@/assets/images/sections/about/company/technodha-gif.png";

  const ABOUT_CONTENT = {
    title: "ABOUT TECHNODHA",
    description:
      "Technodha is a product-driven team that partners with startups and growing businesses to design and build high-performing websites, mobile apps, and scalable digital systems—focused on real users, smooth experiences, and long-term business growth.",
  };

  export default function AboutCompany() {
    return (
      <section
        className="
        py-16  max-w-[1230px] px-[15px] m-auto
          flex flex-col gap-8
          lg:flex-row lg:gap-16.25
          justify-between items-center
        "
      >
        {/* ================= TEXT CONTENT ================= */}
        <div className="company-contain w-full lg:w-1/2 text-center lg:text-left">
          {/* Section Title */}
          <div className="section-title mb-3">{ABOUT_CONTENT.title}</div>

          {/* Main Heading */}
          <h2 className="heading-primary text-xl sm:text-2xl lg:text-3xl leading-tight">
            We build{" "}
            <span className="italic text-(--light-color-primary)">digital</span>{" "}
            products with{" "}
            <span className="italic text-(--light-color-secondary)">clarity</span>,{" "}
            <span className="text-(--light-color-text-secondary)">scale</span>, and
            long-term value
          </h2>

          {/* Description */}
          <p className="text-support mt-4 text-sm sm:text-base">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        {/* ================= IMAGE CONTENT ================= */}
        <div className="company-gif w-full lg:w-1/2 flex justify-center">
          <Image
            src={AboutGif}
            alt="Technodha digital product illustration"
            className="max-w-full sm:max-w-[80%] lg:max-w-full"
            priority
            sizes="(max-width: 1024px) 80vw, 50vw"
          />
        </div>
      </section>
    );
  }
