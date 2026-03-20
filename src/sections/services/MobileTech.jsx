import Illustration from "@/assets/images/sections/services/web-tech.png";
import CommonTechSection from "@/components/common/CommonTechSection";


export default function MobileTech() {
  return (
    <CommonTechSection
      illustration={Illustration}
      eyebrow="TECH STACK WE USE"
      heading={
        <div className="heading-primary">
         <span className="italic text-(--light-color-primary)">Android</span>,<span className="italic text-(--light-color-text-secondary)">Kotlin</span>&
        <span className="italic text-(--light-color-secondary)">Flutter</span>— Built for Speed and Scale
        </div>
      }
      description="We build high-performance mobile apps using Android, Kotlin, and Flutter—delivering smooth UI experiences, clean architecture, and scalable modules that support long-term growth. From native performance to cross-platform speed, we ensure reliable apps that stay stable, fast, and production-ready for real users"
    />
  );
}
