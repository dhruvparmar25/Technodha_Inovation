import ProcessAuto from "@/assets/images/sections/services/ai/process-automation.svg";
import Analytics from "@/assets/images/sections/services/ai/ai-analytics.svg";
import Chatbot from "@/assets/images/sections/services/ai/chatbot.svg";
import Predictive from "@/assets/images/sections/services/ai/predictive.svg";
import DocumentAI from "@/assets/images/sections/services/ai/document-ai.svg";
import CustomAI from "@/assets/images/sections/services/ai/custom-ai.svg";
import CommonSolutionsGrid from "@/components/common/CommonServiceGrid";

const items = [
  {
    title: "Process Automation",
    desc: "Automate repetitive workflows to save time and reduce manual errors across your operations.",
    image: ProcessAuto,
  },
  {
    title: "AI-Powered Analytics",
    desc: "Turn raw data into actionable insights with intelligent analysis and reporting.",
    image: Analytics,
  },
  {
    title: "Chatbots & Virtual Assistants",
    desc: "Smart conversational interfaces that handle customer queries around the clock.",
    image: Chatbot,
  },
  {
    title: "Predictive Systems",
    desc: "Forecast trends and user behaviors to make informed, data-driven decisions.",
    image: Predictive,
  },
  {
    title: "Document Processing",
    desc: "Extract, classify, and process documents automatically with AI-powered tools.",
    image: DocumentAI,
  },
  {
    title: "Custom AI Solutions",
    desc: "Tailored AI models designed to solve your specific business challenges.",
    image: CustomAI,
  },
];

export default function AISolutions() {
  return (
    <CommonSolutionsGrid
      eyebrow="WHAT WE HELP WITH"
      heading={
        <div className="heading-primary" data-theme="light">
          AI solutions that make your{" "}
          <span className="italic text-(--color-primary)">business</span>{" "}
          smarter
        </div>
      }
      description="From workflow automation to predictive analytics, we build AI systems that drive real efficiency and measurable results."
      items={items}
    />
  );
}
