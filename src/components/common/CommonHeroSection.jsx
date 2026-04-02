"use client";

import Image from "next/image";
import GradientButton from "@/components/common/GradientButton";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function CommonHeroSection({
  theme = "light",
  herobg,
  illustration,
  sectionTitle,
  heading,
  description,
  buttonText,
}) {
  const router = useRouter();

  return (
    <section
      data-theme={theme}
      className="relative overflow-hidden bg-black py-8"
    >
     {herobg && (
  <Image
    src={herobg}
    alt="bg"
    fill
    priority
  className="object-cover object-center opacity-50 pointer-events-none"
  />
)}

      {/* Overlay */}
      <div className="absolute inset-0" />

      <div className="relative max-w-[1230px] px-[15px] m-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">

          {/* LEFT */}
          <div>
            {sectionTitle && (
              <div className="section-title">{sectionTitle}</div>
            )}

            {heading}

            {description && (
              <p className="text-support text-[#CFCFD6]!">
                {description}
              </p>
            )}

            {buttonText && (
              <GradientButton onClick={()=> router.push('/contact')} text={buttonText} className="mt-6 text-white! hover:text-primary!" />
            )}
          </div>

          {/* RIGHT */}
          {illustration && (
            <motion.div
              className="flex justify-center lg:justify-end"
              animate={{
                scale: [0.65, 1, 0.65],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                times: [0, 0.15, 1],
                ease: ["easeOut", "linear"],
              }}
            >
              <Image
                src={illustration}
                alt="Hero illustration"
                priority
                className="w-65 sm:w-[320px] lg:w-105"
              />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
