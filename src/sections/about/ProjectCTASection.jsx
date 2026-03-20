'use client';
import GradientButton from "@/components/common/GradientButton";
import { useRouter } from 'next/navigation';

export default function ProjectCTASection() {
  const router = useRouter();

  return (
    <section className=" max-w-[1230px] px-[15px] m-auto pb-16 ">

      <div className="text-center flex flex-col items-center justify-center">

        {/* Small Gradient Title */}
        <span className="section-title">
          LET’S BUILD TOGETHER
        </span>

        {/* Main Heading */}
        <div className="heading-primary ">
          Have a{" "}
          <span className="italic text-gradient-primary">
            project
          </span>{" "}
          in mind?
        </div>

        {/* Sub Text */}
        <p className="text-support">
          Share your requirements—we’ll reply with the next best step, clearly and quickly.
        </p>

     <GradientButton onClick={()=> router.push('/contact')} text="Let’s Build Together" className="mt-13"/>

      </div>

    </section>
  );
}
