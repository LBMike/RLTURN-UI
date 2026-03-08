"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20 pb-0">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 lg:grid-cols-2" style={{ transform: "translateX(-75px)" }}>
        {/* Left — Text */}
        <div className="max-w-[540px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[2.75rem] font-bold leading-[1.15] tracking-tight text-text-primary md:text-[3.25rem] lg:text-[3.5rem]"
          >
            Don&apos;t Sell XRP.
            <br />
            Use IT.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-[420px] text-lg leading-relaxed text-text-secondary"
          >
            Earn yield in a Savings. Unlock dollars with collateral.
            Spend globally. Your holdings grow while you sleep.
          </motion.p>
        </div>

        {/* Right — Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[272px] lg:w-[304px]">
            {/* Phone Image */}
            <Image
              src="/phone-frame.svg"
              alt="RLTURN App"
              width={380}
              height={780}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
            {/* Reflection Effect */}
            <div
              className="pointer-events-none mt-[-2px] h-[200px] overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15), transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15), transparent)",
              }}
            >
              <Image
                src="/phone-frame.svg"
                alt=""
                width={380}
                height={780}
                className="w-full h-auto scale-y-[-1]"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
