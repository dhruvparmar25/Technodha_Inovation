import CommonPageHero from "@/components/common/CommonPageHero";
import aboutbg from "@/assets/images/sections/about/hero/hero-bg.png";

export default function AboutHero() {
  return (
    <CommonPageHero
      bgImage={aboutbg}
      title="About"
      highlight="Technodha"
    />
  );
}
