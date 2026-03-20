import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/contact/contact-cta.png";

export default function ContactCTASection() {
  return (
    <section >
      <CommonProcessSection
        illustration={Illustration}
        eyebrow="LET’S CONNECT"
        heading={
          <div className="heading-primary">
            Turn your <span className="italic text-(--light-color-primary)">requirement</span>{" "}
            into a real <span className="italic text-(--light-color-secondary)">plan</span>
          </div>
        }
        description="Tell us what you need — we’ll respond with a clear scope, timeline, and approach. We understand your goals before suggesting solutions. Expect honest guidance, smooth communication, and clean execution. Let’s build something reliable that scales with your business."
        reverse={false}
      />
    </section>
  );
}
