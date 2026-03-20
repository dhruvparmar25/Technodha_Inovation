import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/uiux-process.png";

import Check from "@/assets/images/sections/services/check.png";

const items = [
  { title: "Clear user journeys", icon: Check },
  { title: "Consistent UI components", icon: Check },
  { title: "Better usability & retention", icon: Check },
  { title: "Faster development handoff", icon: Check },
];

export default function UIUXProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="WHY IT MATTERS"
      heading={
        <div className="heading-primary">
          Design outcomes that <span className="italic text-(--light-color-primary)">improve</span> the product
        </div>
      }
      description="Great UI is more than visuals—it reduces confusion, improves usability, and helps teams move faster with confidence."
      items={items}
      reverse={true}   // 👈 image on right like screenshot
    />
  );
}
