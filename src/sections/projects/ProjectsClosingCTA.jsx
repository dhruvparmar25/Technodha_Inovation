import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ProjectsClosingCTA() {
  return (
    <section data-theme="light" className="py-14 lg:py-20">
      <div className="max-w-[1230px] px-[15px] m-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#F2C5BE] bg-[linear-gradient(135deg,#fff7f5_0%,#ffeae3_100%)] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center shadow-[0_22px_55px_rgba(34,34,43,0.08)]">
          {/* Decorative blurred circles */}
          <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-[#FB6557]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full bg-[#FE9139]/15 blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-[#F2C5BE] shadow-sm mb-6">
              <Icon
                icon="lucide:sparkles"
                className="text-[24px] text-[#FB6557]"
              />
            </span>

            <p className="section-title">LET&apos;S BUILD TOGETHER</p>
            <h2 className="heading-primary text-[26px]! sm:text-[34px]! lg:text-[40px]! leading-tight!">
              Have a <span className="italic text-gradient-primary">project</span>{" "}
              in mind?
            </h2>
            <p className="text-support max-w-2xl mx-auto">
              Share your requirements and we&apos;ll reply with the next best
              step — clearly and quickly. From discovery to launch, we&apos;ll
              help you ship something that actually works for your users.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#FB6557_0%,#FE9139_100%)] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(251,101,87,0.35)] hover:opacity-95 transition-opacity"
              >
                Send your requirements
                <Icon icon="lucide:arrow-right" className="text-[16px]" />
              </Link>
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 rounded-full border border-[#F2C5BE] bg-white px-7 py-3 text-[14px] font-semibold text-[#1A1A1F] hover:border-[#FB6557] hover:text-[#FB6557] transition-colors"
              >
                Explore our services
                <Icon icon="lucide:arrow-up-right" className="text-[16px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
