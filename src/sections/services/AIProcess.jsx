import CommonProcessSection from "@/components/common/CommonProcessSection";
import Illustration from "@/assets/images/sections/services/ai/ai-process.svg";

import Workflow from "@/assets/images/sections/services/ai/workflow-icon.svg";
import Integration from "@/assets/images/sections/services/ai/integration-icon.svg";
import Optimize from "@/assets/images/sections/services/ai/optimize-icon.svg";
import Impact from "@/assets/images/sections/services/ai/impact-icon.svg";

const items = [
  {
    title: "Workflow analysis",
    desc: "We study your current processes to find the best automation opportunities.",
    icon: Workflow,
  },
  {
    title: "Seamless AI integration",
    desc: "AI models embedded into your existing systems without disruption.",
    icon: Integration,
  },
  {
    title: "Continuous optimization",
    desc: "Models that learn and improve with real-world data over time.",
    icon: Optimize,
  },
  {
    title: "Measurable impact",
    desc: "Clear metrics showing efficiency gains, cost savings, and ROI.",
    icon: Impact,
  },
];

export default function AIProcess() {
  return (
    <CommonProcessSection
      illustration={Illustration}
      eyebrow="WHY IT MATTERS"
      heading={
        <div className="heading-primary" data-theme="light">
          AI that delivers real{" "}
          <span className="italic text-(--color-primary)">business</span> value
        </div>
      }
      description="AI is a powerful tool that automates repetitive work, uncovers hidden insights, and frees your team to focus on what drives growth."
      items={items}
      reverse={true}
    />
  );
}
