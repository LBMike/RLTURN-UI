"use client";

import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  DollarSign,
} from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { SavingsPositionSheet } from "@/components/savings/SavingsPositionSheet";

export default function SavingsPage() {
  const { savings } = mockData;
  const [positionOpen, setPositionOpen] = useState(false);

  return (
    <div className="max-w-2xl">
      <SavingsPositionSheet
        open={positionOpen}
        onClose={() => setPositionOpen(false)}
      />

      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[2.25rem] font-bold leading-tight">
          Savings Account
        </h1>
        <button className="border border-[var(--border)] rounded-full px-6 py-2.5 font-semibold text-sm text-[var(--text-primary)] hover:bg-[var(--background-secondary)] transition-colors">
          Savings Account History
        </button>
      </div>

      {/* Balance Section */}
      <button
        type="button"
        onClick={() => setPositionOpen(true)}
        className="mt-6 w-full text-left transition-opacity hover:opacity-80"
      >
        <p className="text-sm text-[var(--text-secondary)]">Balance</p>
        <div className="flex items-center mt-1">
          <p className="text-[2.25rem] font-bold font-mono leading-tight tracking-tight">
            ${savings.balance}
          </p>
          <span className="ml-3 border border-[#22C55E] text-[#22C55E] rounded-full px-3 py-1 text-xs font-medium">
            Current APY {savings.currentApy}%
          </span>
        </div>
      </button>

      {/* Earnings Row */}
      <div className="mt-6 border border-[var(--border)] rounded-[12px] overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-[var(--border)]">
          {/* Lifetime Earnings */}
          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center shrink-0">
              <DollarSign className="w-4 h-4" />
            </div>
            <span className="text-sm text-[var(--text-secondary)]">
              Lifetime Earnings
            </span>
            <p className="font-mono text-sm font-medium ml-auto">
              ${savings.lifetimeEarnings}
            </p>
          </div>

          {/* Earnings This Month */}
          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center shrink-0">
              <DollarSign className="w-4 h-4" />
            </div>
            <span className="text-sm text-[var(--text-secondary)]">
              Earnings This Month
            </span>
            <p className="font-mono text-sm font-medium ml-auto">
              ${savings.earningsThisMonth}
            </p>
          </div>
        </div>
      </div>

      {/* Auto-compound Note */}
      <p className="mt-3 text-sm text-[var(--text-tertiary)]">
        Your earnings will be automatically added to your balance and compounded
        monthly.
      </p>

      {/* Manage Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-6 mt-6">
        <h3 className="font-semibold">Manage Savings Account</h3>
        <div className="mt-4">
          <div className="flex items-center justify-between py-3 border-b border-[var(--border)] cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
            <div className="flex items-center gap-3">
              <ArrowDownLeft className="w-5 h-5 text-[var(--text-tertiary)]" />
              <p className="text-sm font-medium">Deposit Funds</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>
          <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
            <div className="flex items-center gap-3">
              <ArrowUpRight className="w-5 h-5 text-[var(--text-tertiary)]" />
              <p className="text-sm font-medium">Withdraw Funds</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
