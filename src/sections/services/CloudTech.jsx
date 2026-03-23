import Illustration from "@/assets/images/sections/services/cloud-tech.png";
import CommonTechSection from "@/components/common/CommonTechSection";

export default function CloudTech() {
  return (
    <CommonTechSection
      illustration={Illustration}
      eyebrow="TECH STACK"
      heading={
        <div className="heading-primary" data-theme="light">
          Built on <span className="italic text-(--color-primary)">Python</span>. Powered by{" "}
          <span className="italic text-(--color-secondary)">AWS</span>
        </div>
      }
      description="We build secure cloud solutions using Python and Django for clean, reliable backend systems. With AWS, we deploy scalable infrastructure that handles growth smoothly. Our setups focus on performance, stability, and secure access control—from deployment to monitoring, everything stays production-ready."
    />
  );
}
