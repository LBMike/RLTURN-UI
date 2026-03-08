"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Earn Real Yield on XRP & RLUSD",
    description:
      "Deposit into RLTURN's Savings Vault and earn yield powered by institutional-grade lending — a pure, transparent yield source.",
  },
  {
    title: "Build Wealth Without Selling",
    description:
      "Compound your earnings over time. The same infrastructure trusted by institutions, now open to everyone.",
  },
];

function SavingsMockupCard() {
  return (
    <div className="w-full max-w-[480px] overflow-hidden rounded-2xl bg-background-secondary p-6 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.15)] md:p-8">
      {/* Header */}
      <p className="text-base font-semibold text-primary-dark">Saving</p>

      {/* XRP / RLUSD Tabs */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full bg-primary-dark px-4 py-2">
          <Image src="/xrp.svg" alt="XRP" width={20} height={20} className="h-5 w-5" />
          <span className="text-sm font-medium text-white">XRP</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2">
          <Image src="/rlusd.svg" alt="RLUSD" width={20} height={20} className="h-5 w-5" />
          <span className="text-sm font-medium text-text-secondary">RLUSD</span>
        </div>
      </div>

      {/* APY Badge */}
      <div className="mt-5 inline-block rounded-full border border-success/30 bg-success/5 px-3.5 py-1.5">
        <span className="text-xs font-semibold text-success">Earning APY 4.5%</span>
      </div>

      {/* Balance */}
      <p className="mt-4 font-mono text-[2rem] font-bold tracking-tight text-primary-dark md:text-[2.25rem]">
        40,512.31 <span className="text-lg font-semibold">XRP</span>
      </p>
      <p className="mt-1 font-mono text-sm text-text-secondary">$80,421.52</p>

      {/* Details Card */}
      <div className="mt-6 rounded-xl border border-border bg-white p-5">
        {/* Earnings This Month */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <span className="text-sm font-bold text-primary">$</span>
            </div>
            <span className="text-sm font-medium text-primary-dark">Earnings This Month</span>
          </div>
          <div className="text-right">
            <p className="font-mono text-sm font-semibold text-primary-dark">1,512.31 XRP</p>
            <p className="font-mono text-xs text-text-tertiary">$2,421.52</p>
          </div>
        </div>

        <div className="my-4 h-px bg-border" />

        {/* Lifetime Interest */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <span className="text-sm font-medium text-primary-dark">Lifetime Interest</span>
          </div>
          <div className="text-right">
            <p className="font-mono text-sm font-semibold text-primary-dark">512.31 XRP</p>
            <p className="font-mono text-xs text-text-tertiary">$1,021.52</p>
          </div>
        </div>
      </div>

      {/* Action Rows */}
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between rounded-xl border border-border bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            <span className="text-sm font-medium text-primary-dark">Deposit XRP</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-border bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <span className="text-sm font-medium text-primary-dark">Withdraw XRP</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SavingsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[1.875rem] font-semibold leading-tight text-primary-dark md:text-[2.25rem]">
            Your XRP Works While You Sleep.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
            Put your idle assets to work with Savings Vaults backed by real
            institutional lending demand.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.92fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[560px]"
          >
            <div className="space-y-10 md:space-y-12">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={index === 0 ? "" : "border-t border-border pt-10 md:pt-12"}
                >
                  <h3 className="text-[1.5rem] font-semibold leading-tight text-primary-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-[36rem] text-[1.0625rem] leading-[1.75] text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <SavingsMockupCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
