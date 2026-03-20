import CommonProcessSection from "@/components/common/CommonProcessSection";

import Illustration from "@/assets/images/sections/services/mobile-process.png";

import Speed from "@/assets/images/sections/services/speed.png";
import Scale from "@/assets/images/sections/services/scale.png";
import Lock from "@/assets/images/sections/services/lock.png";
import UI from "@/assets/images/sections/services/ui.png";
import Store from "@/assets/images/sections/services/store.png";

const items = [
  { title: "Smooth performance on devices", desc: "Fast loading, responsive UI, and fluid interactions.", icon: Speed },
  { title: "Scalable architecture for future features", desc: "Built to grow without breaking flows.", icon: Scale },
  { title: "Secure login & data handling", desc: "Authentication, validation, and safe data flows.", icon: Lock },
  { title: "Clean UI + consistent experience", desc: "Design consistency for faster usage.", icon: UI },
  { title: "App-ready for store deployment", desc: "Store-ready builds with release setup.", icon: Store },
];

export default function MobileProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="THE DIFFERENCE IN EXECUTION"
      heading={
        <div className="heading-primary">
          Built for <span className="italic text-(--light-color-primary)">real-world</span> usage
        </div>
      }
      description="We focus on performance, scalability, and user experience—so your app feels smooth today and stays strong as it grows."
      items={items}
      reverse={true}
    />
  );
}
