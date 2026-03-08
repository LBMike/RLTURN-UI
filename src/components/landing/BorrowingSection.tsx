"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock } from "lucide-react";

export default function BorrowingSection() {
  return (
    <section id="borrowing" className="py-24 md:py-32">
      {/* Custody Partners */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-32 flex max-w-[1280px] flex-col items-center border-t border-b border-border px-6 py-20"
      >
        <p className="text-[36px] font-semibold text-text-primary">
          Secured by institutional-grade XRP custody services
        </p>
        <div className="mt-8 flex items-center gap-12">
          <Image src="/ripple-custody.svg" alt="Ripple Custody" width={140} height={60} className="h-[75px] w-auto" />
          <Image src="/fireblock.svg" alt="Fireblocks" width={140} height={60} className="h-[75px] w-auto" />
          <Image src="/zodia.svg" alt="Zodia Custody" width={140} height={60} className="h-[75px] w-auto" />
        </div>
      </motion.div>

      <div className="mx-auto max-w-[1280px] px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center text-[1.875rem] font-semibold leading-tight text-primary-dark md:text-[2.25rem]"
        >
          The Fastest and Easiest Borrowing Experience
        </motion.h2>

        {/* Zigzag: Text Left, Mockup Right */}
        <div className="mt-16 flex flex-col items-center gap-12 md:mt-20 md:flex-row md:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-primary-dark">
              Instant Access, Zero Paperwork
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">
              Borrow from anywhere and receive funds in seconds. No credit
              checks, no delays &mdash; just collateralize your XRP and go.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                { icon: ShieldCheck, text: "Institutional-grade custody" },
                { icon: Clock, text: "Funds in seconds, not days" },
                { icon: Zap, text: "No credit checks required" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg">
              {/* Mockup Header */}
              <div className="border-b border-border bg-background-secondary px-5 py-4">
                <p className="text-sm font-semibold text-primary-dark">Borrow RLUSD</p>
              </div>

              <div className="p-5">
                {/* Amount Input */}
                <div className="rounded-[12px] border border-border bg-background-secondary p-4">
                  <p className="text-xs text-text-tertiary">Borrow Amount</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-mono text-3xl font-bold text-primary-dark">
                      $10,000
                    </span>
                    <span className="text-sm text-text-tertiary">RLUSD</span>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Collateral Required</span>
                    <span className="font-mono font-medium text-primary-dark">5,186 XRP</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Interest Rate</span>
                    <span className="font-mono font-medium text-primary-dark">7.5% APR</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">LTV Ratio</span>
                    <span className="font-mono font-medium text-success">65%</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Monthly Interest</span>
                    <span className="font-mono font-medium text-primary-dark">~$62.50</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full rounded-full bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover">
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
