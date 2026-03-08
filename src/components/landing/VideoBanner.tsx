"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function VideoBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#030712]">
      {!prefersReducedMotion && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/landing-brand.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/44" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.76)_0%,rgba(2,6,23,0.42)_35%,rgba(2,6,23,0.2)_60%,rgba(2,6,23,0.58)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] items-center justify-center px-6 py-20 md:py-24"
      >
        <div className="max-w-3xl text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-white/72">
            Inside RLTURN
          </p>
          <h2 className="mt-4 text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-white md:text-[3.5rem]">
            Institutional-grade access to XRP liquidity and yield.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            A quiet brand moment between the promise and the product. Built to
            make RLTURN feel secure, global, and always in motion.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
