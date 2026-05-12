import Image from "next/image";

export function BrowserFrame({
  image,
  alt,
  urlLabel = "technodha.app",
  fit = "cover",
  className = "",
  priority = false,
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-white border border-[#F2C5BE] shadow-[0_22px_55px_rgba(34,34,43,0.16)] ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#fff7f5] border-b border-[#F2C5BE]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FB6557]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FE9139]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
        <div className="ml-2 hidden sm:flex flex-1 max-w-[200px] items-center rounded-md bg-white/85 border border-[#F2C5BE]/70 px-2 py-0.5 text-[10px] text-[#8a6f6a]">
          <span className="truncate">{urlLabel}</span>
        </div>
      </div>
      {/* Screen */}
      <div className="relative aspect-[16/10] bg-white">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    </div>
  );
}

export function PhoneFrame({
  image,
  alt,
  fit = "cover",
  className = "",
  priority = false,
}) {
  return (
    <div
      className={`rounded-[28px] overflow-hidden bg-white shadow-[0_18px_45px_rgba(34,34,43,0.20)] ring-1 ring-black/5 ${className}`}
    >
      <div className="relative aspect-[9/19] bg-white">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 18vw, 35vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    </div>
  );
}

export default function ProjectVisual({ project, variant = "card" }) {
  const screenshots = project.screenshots || [];
  const main = project.coverImage || screenshots[0];
  const sec = screenshots[1] || main;
  const ter = screenshots[2] || sec;
  const isHero = variant === "hero";

  if (project.isMobileApp) {
    return (
      <div
        className={`relative w-full ${
          isHero ? "aspect-[5/4] lg:aspect-[4/3.4]" : "aspect-[5/4] sm:aspect-[16/11]"
        }`}
      >
        {/* Left phone */}
        <div className="absolute bottom-3 left-[4%] sm:left-[8%] w-[28%] sm:w-[24%] -rotate-[10deg] origin-bottom-right">
          <PhoneFrame image={sec} alt={`${project.name} screen 2`} />
        </div>
        {/* Right phone */}
        <div className="absolute bottom-3 right-[4%] sm:right-[8%] w-[28%] sm:w-[24%] rotate-[10deg] origin-bottom-left">
          <PhoneFrame image={ter} alt={`${project.name} screen 3`} />
        </div>
        {/* Center phone (front) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[32%] sm:w-[28%] z-10">
          <PhoneFrame
            image={main}
            alt={`${project.name} main screen`}
            priority={isHero}
          />
        </div>
      </div>
    );
  }

  // Web project — main browser + floating secondary
  const slugForUrl = project.slug.replace(/-/g, "");
  const url = `${slugForUrl}.technodha.app`;

  return (
    <div
      className={`relative w-full ${
        isHero ? "aspect-[16/11]" : "aspect-[16/11]"
      }`}
    >
      {/* Main browser */}
      <div className="absolute top-0 left-0 w-[86%]">
        <BrowserFrame
          image={main}
          alt={`${project.name} main dashboard`}
          urlLabel={url}
          priority={isHero}
        />
      </div>
      {/* Floating secondary browser */}
      <div className="absolute bottom-0 right-0 w-[46%] sm:w-[42%] z-10">
        <BrowserFrame
          image={sec}
          alt={`${project.name} secondary view`}
          urlLabel={url}
        />
      </div>
    </div>
  );
}
