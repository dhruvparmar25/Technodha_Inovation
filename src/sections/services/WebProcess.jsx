import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/web-gif.png";

const items = [
  { id: "01", title: "Project kickoff & scope freeze", desc: "We align on goals and timelines." },
  { id: "02", title: "System architecture & planning", desc: "Stable scalable structure." },
  { id: "03", title: "UI integration & frontend build", desc: "Responsive screens." },
  { id: "04", title: "Backend + API development", desc: "Secure APIs and databases." },
  { id: "05", title: "Testing, deployment & monitoring", desc: "Stable launch." },
];

export default function WebProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="HOW WE BUILD"
      heading={
        <div className="heading-primary">
          How<span className="italic text-(--light-color-secondary)">web development</span>
          works with<span className="italic text-(--light-color-primary)">us</span>
        </div>
      }
      description="A clear, engineering-focused workflow."
      items={items}
    />
  );
}
