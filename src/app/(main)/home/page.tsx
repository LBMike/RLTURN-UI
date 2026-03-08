"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDownLeft, ArrowUpRight, Lock, TrendingUp } from "lucide-react";
import { mockData } from "@/lib/mock-data";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"xrp" | "rlusd">("xrp");
  const { totalBalance, xrp, rlusd } = mockData;

  const isXrp = activeTab === "xrp";

  return (
    <div className="max-w-2xl">
      {/* Total Balance */}
      <div>
        <p className="text-sm text-[var(--text-secondary)]">Total Balance</p>
        <p className="text-[3rem] font-semibold font-mono leading-[60px] tracking-[-1.2px]">
          ${totalBalance}
        </p>
      </div>

      {/* Tab + Receive/Send Row */}
      <div className="flex items-center justify-between mt-8">
        {/* Pill Tab */}
        <div className="inline-flex bg-[var(--background-secondary)] rounded-full p-1">
          <button
            onClick={() => setActiveTab("xrp")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm transition-all ${
              isXrp
                ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Image src="/xrp.svg" alt="XRP" width={20} height={20} className="w-5 h-5" />
            XRP
          </button>
          <button
            onClick={() => setActiveTab("rlusd")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm transition-all ${
              !isXrp
                ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Image src="/rlusd.svg" alt="RLUSD" width={20} height={20} className="w-5 h-5" />
            RLUSD
          </button>
        </div>

        {/* Receive / Send Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 h-10 px-5 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--background-secondary)] transition-colors"
            aria-label="Receive"
          >
            <ArrowDownLeft className="w-4 h-4" />
            Receive
          </button>
          <button
            className="flex items-center gap-2 h-10 px-5 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--background-secondary)] transition-colors"
            aria-label="Send"
          >
            <ArrowUpRight className="w-4 h-4" />
            Send
          </button>
        </div>
      </div>

      {/* Total Asset Balance */}
      <div className="mt-6">
        <p className="text-sm text-[var(--text-secondary)]">
          Total {isXrp ? "XRP" : "RLUSD"} Balance
        </p>
        <p className="text-[2.25rem] font-bold font-mono leading-tight tracking-tight">
          ${isXrp ? xrp.availableUsd : rlusd.available}
        </p>
      </div>

      {/* Available Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-5 mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={isXrp ? "/xrp.svg" : "/rlusd.svg"}
            alt={isXrp ? "XRP" : "RLUSD"}
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-sm text-[var(--text-primary)]">Available</span>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm font-medium">
            ${isXrp ? xrp.availableUsd : rlusd.available}
          </p>
          {isXrp && (
            <p className="text-xs text-[var(--text-tertiary)]">
              {xrp.available} XRP
            </p>
          )}
        </div>
      </div>

      {/* Collateral Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-5 mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Lock className="w-5 h-5 text-[var(--text-tertiary)]" />
          <span className="text-sm text-[var(--text-primary)]">Collateral</span>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm font-medium">
            {isXrp ? `$${xrp.collateralUsd}` : "$0"}
          </p>
          {isXrp && (
            <p className="text-xs text-[var(--text-tertiary)]">
              {xrp.collateral} XRP
            </p>
          )}
        </div>
      </div>

      {/* Saving Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-5 mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-[var(--text-tertiary)]" />
          <span className="text-sm text-[var(--text-primary)]">Saving</span>
        </div>
        <p className="font-mono text-sm font-medium">
          {isXrp ? "$0" : `$${rlusd.savings}`}
        </p>
      </div>
    </div>
  );
}
