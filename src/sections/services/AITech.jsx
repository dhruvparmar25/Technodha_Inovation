import Illustration from "@/assets/images/sections/services/ai/ai-tech.svg";
import CommonTechSection from "@/components/common/CommonTechSection";

export default function AITech() {
  return (
    <CommonTechSection
      illustration={Illustration}
      eyebrow="TECH STACK"
      heading={
        <div className="heading-primary text-white!" data-theme="light">
          Built on{" "}
          <span className="italic text-(--color-primary)">Python</span>. Powered
          by <span className="italic text-(--color-secondary)">AI</span>
        </div>
      }
      description="We build intelligent automation using Python, TensorFlow, and OpenAI APIs for reliable AI integration. From natural language processing to predictive analytics, our solutions leverage cutting-edge frameworks to deliver automation that scales with your business — turning complex data into clear, actionable outcomes."
    />
  );
}
