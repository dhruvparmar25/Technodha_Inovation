import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function CommonPageHero({
  bgImage,
  title,
  highlight,
}) {
  return (
    <section className="relative w-full h-82.5">

      {/* Background */}
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover bg-cover"
          style={{ opacity: 0.93 }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
        <h1 className="font-poppins font-medium text-[48px] mb-4 leading-none">
          {title}{" "}
          {highlight && (
            <span className="text-gradient-primary">
              {highlight}
            </span>
          )}
        </h1>

        <Breadcrumbs />
      </div>
    </section>
  );
}
