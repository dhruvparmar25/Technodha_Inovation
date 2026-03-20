import Illustration from "@/assets/images/sections/career/career-grow.png";
import CommonTechSection from "@/components/common/CommonTechSection";

export default function CareerGrow() {
  return (
    <CommonTechSection

      illustration={Illustration}
      eyebrow="LET’S GROW TOGETHER"
      heading={
        <div className="heading-primary">
        We’re
        <span className="italic text-(--light-color-primary)">building</span>with <span className="italic text-(--light-color-secondary)">curious</span> minds
        </div>    
      }
      description="We use a focused set of tools to keep every screen clean and consistent. From wireframes to final UI, everything stays structured and easy to manage. Our files are organized for quick feedback and smooth collaboration, helping developers get a clear handoff and faster implementation."
    />
  );
}
