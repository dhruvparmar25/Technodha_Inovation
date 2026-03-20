import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/career/career-tech.png";

// Orange dot icon (reuse any small circle or create one)
import Dot from "@/assets/images/sections/career/dot.png";

const items = [
  { title: "Open & collaborative work culture", icon: Dot },
  { title: "Merit-based growth", icon: Dot },
  { title: "Flexible and agile work approach", icon: Dot },
  { title: "Continuous upskilling & mentorship", icon: Dot },
];

export default function CareerTech() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="LIFE AT TECHNODHA"
      heading={
        <div className="heading-primary">
          <span className="italic text-(--light-color-primary)">Simple</span>, focused,
          and <span className="italic text-(--light-color-primary)">collaborative</span>
        </div>
      }
      description="We keep our environment calm and goal-driven. A place where ideas are respected, learning is constant, and everyone contributes with ownership."
      items={items}
      reverse={false}
        iconSize={11}   // 👈 HERE

    />
  );
}
