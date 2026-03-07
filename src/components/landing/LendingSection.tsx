"use client";

import { motion } from "framer-motion";
import { Eye, Repeat, Lock } from "lucide-react";

export default function LendingSection() {
  return (
    <section className="bg-background-tertiary py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Reversed Zigzag: Mockup Left, Text Right */}
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg">
              {/* Mockup Header */}
              <div className="border-b border-border px-5 py-4">
                <p className="text-sm font-semibold text-primary-dark">Line of Credit</p>
              </div>

              <div className="p-5">
                {/* Currently Borrowing */}
                <div className="text-center">
                  <p className="text-xs text-text-tertiary">Currently Borrowing</p>
                  <p className="mt-2 font-mono text-4xl font-bold text-primary-dark">
                    $5,200.00
                  </p>
                  <div className="mx-auto mt-3 inline-flex items-center gap-1.5 rounded-full bg-success-bg px-3 py-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-success" />
                    <span className="text-xs font-medium text-success">
                      You can borrow $7,300 more
                    </span>
                  </div>
                </div>

                {/* Balance Details */}
                <div className="mt-6 rounded-[12px] border border-border p-4">
                  <p className="text-xs font-semibold text-primary-dark">Balance Details</p>
                  <div className="mt-3 space-y-2.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Principal</span>
                      <span className="font-mono font-medium text-primary-dark">$5,000.00</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Interest Accrued</span>
                      <span className="font-mono font-medium text-primary-dark">$200.00</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Annual Interest Rate</span>
                      <span className="font-mono font-medium text-primary-dark">7.5% APR</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">LTV Ratio</span>
                      <span className="font-mono font-medium text-success">52%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-primary/10">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-primary-dark">
              Flexible Terms, Full Transparency
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">
              Choose fixed or variable rates with open repayment terms. Every
              loan is Proof-of-Reserve verified and trackable 24/7.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                { icon: Repeat, text: "Variable or fixed-term rates" },
                { icon: Lock, text: "Proof-of-Reserve verified 24/7" },
                { icon: Eye, text: "Fully transparent on-chain tracking" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
