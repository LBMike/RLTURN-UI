"use client";

import { motion } from "framer-motion";
import {
  Home,
  CreditCard,
  Wallet,
  Receipt,
  PiggyBank,
  Settings,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-[1280px] text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[3rem] font-bold leading-tight tracking-tight text-primary-dark md:text-[3.5rem] lg:text-[4rem]"
        >
          Don&apos;t Sell XRP.{" "}
          <span className="text-primary">Use IT.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-xl text-lg text-text-secondary"
        >
          Secured by institutional-grade XRP custody services
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="/register"
            className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Get Started
          </a>
          <a
            href="#borrowing"
            className="inline-flex h-12 items-center rounded-full border border-border px-8 text-base font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-background-secondary"
          >
            Learn More
          </a>
        </motion.div>

        {/* App Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-2xl shadow-primary/10">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-background-secondary px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#EF4444]" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B]" />
              <div className="h-3 w-3 rounded-full bg-[#22C55E]" />
              <div className="ml-4 flex-1 rounded-md bg-background-tertiary px-3 py-1 text-xs text-text-tertiary">
                app.rlturn.com
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex min-h-[360px]">
              {/* Sidebar */}
              <div className="hidden w-52 shrink-0 border-r border-border bg-background-secondary p-4 md:block">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
                    R
                  </div>
                  <span className="text-sm font-bold text-primary-dark">RLTURN</span>
                </div>
                <nav className="space-y-1">
                  {[
                    { icon: Home, label: "Home", active: true },
                    { icon: CreditCard, label: "Line of Credit", active: false },
                    { icon: Wallet, label: "Assets", active: false },
                    { icon: Receipt, label: "Payments", active: false },
                    { icon: PiggyBank, label: "Savings", active: false },
                    { icon: Settings, label: "Settings", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
                        item.active
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-text-secondary"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="text-sm text-text-tertiary">Total Balance</p>
                    <p className="mt-1 font-mono text-3xl font-bold text-primary-dark">
                      $48,250.00
                    </p>
                  </div>
                  <button className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white">
                    Borrow
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {/* XRP Card */}
                  <div className="rounded-[12px] border border-border p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary-dark">XRP</span>
                      <span className="font-mono text-xs text-text-tertiary">
                        <TrendingUp className="mr-1 inline h-3 w-3 text-success" />
                        $2.41
                      </span>
                    </div>
                    <p className="font-mono text-xl font-bold text-primary-dark">
                      12,500 XRP
                    </p>
                    <p className="mt-0.5 font-mono text-sm text-text-secondary">
                      $30,125.00
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
                        <ArrowDownLeft className="h-3 w-3" /> Available: 8,200
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-text-tertiary">
                        <ArrowUpRight className="h-3 w-3" /> Collateral: 4,300
                      </span>
                    </div>
                  </div>

                  {/* RLUSD Card */}
                  <div className="rounded-[12px] border border-border p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary-dark">RLUSD</span>
                      <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">
                        4.2% APY
                      </span>
                    </div>
                    <p className="font-mono text-xl font-bold text-primary-dark">
                      $18,125.00
                    </p>
                    <p className="mt-0.5 font-mono text-sm text-text-secondary">
                      18,125 RLUSD
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
                        <ArrowDownLeft className="h-3 w-3" /> Available: $10,125
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-text-tertiary">
                        <PiggyBank className="h-3 w-3" /> Savings: $8,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Line of Credit Summary */}
                <div className="mt-4 rounded-[12px] border border-border p-4">
                  <p className="text-sm font-semibold text-primary-dark">Line of Credit</p>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Balance</span>
                    <span className="font-mono font-medium text-primary-dark">$5,200.00</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Interest Rate</span>
                    <span className="font-mono font-medium text-primary-dark">7.5% APR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
