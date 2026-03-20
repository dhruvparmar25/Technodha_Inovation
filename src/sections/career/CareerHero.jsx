import CommonHeroSection from "@/components/common/CommonHeroSection";

// Assets
import CarrerIllustration from "@/assets/images/sections/career/career-hero.png";
import Careerbg from "@/assets/images/sections/career/Career-bg.jpg";

export default function CareerHero() {
  return (
    <CommonHeroSection
      theme="light"
      herobg={Careerbg}
      illustration={CarrerIllustration}
      sectionTitle="CAREERS AT TECHNODHA"
      heading={
        <h1 className="heading-primary-dark text-[32px]!">
          Join   
          <span className="italic text-primary mx-2">Technodha</span>
          and build what’s
          <span className="italic text-secondary mx-1">next</span>
        </h1>
      }
      description="We’re a team of designers and developers who care about quality and clarity.At Technodha, you’ll work on real projects, learn fast, and grow with every build.If you enjoy solving problems and improving your skills every day, you’ll fit right in.Bring your mindset—we’ll support the journey"
    />
  );
}
