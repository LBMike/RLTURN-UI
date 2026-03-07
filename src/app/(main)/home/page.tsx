import { Clock, ChevronRight, Lock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { mockData } from "@/lib/mock-data";

export default function HomePage() {
  const { totalBalance, xrp, rlusd, lineOfCredit } = mockData;

  return (
    <div className="max-w-2xl">
      {/* Top Row: Total Balance + Actions */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--text-secondary)]">Total Balance</p>
          <p className="text-[3rem] font-bold font-mono leading-tight tracking-tight">
            ${totalBalance}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center w-[44px] h-[44px] rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--background-secondary)] transition-colors"
            aria-label="History"
          >
            <Clock className="w-5 h-5" />
          </button>
          <button className="bg-[#23292F] text-white rounded-full px-8 h-12 font-semibold hover:opacity-90 transition-opacity">
            Borrow
          </button>
        </div>
      </div>

      {/* Asset Cards */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* XRP Card */}
        <div className="border border-[var(--border)] rounded-[12px] p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">XRP</h3>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>

          {/* Available */}
          <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0085FF] text-white flex items-center justify-center font-bold text-sm">
                X
              </div>
              <span className="text-sm text-[var(--text-primary)]">Available</span>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm font-medium">${xrp.availableUsd}</p>
              <p className="text-sm text-[var(--text-tertiary)]">
                {xrp.available} XRP
              </p>
            </div>
          </div>

          {/* Collateral */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[var(--text-tertiary)]" />
              <span className="text-sm text-[var(--text-primary)]">Collateral</span>
            </div>
            <p className="font-mono text-sm font-medium">{xrp.collateral} XRP</p>
          </div>

          {/* Bottom Links */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--border)]">
            <Link
              href="/assets?tab=xrp&action=buy"
              className="text-[#0085FF] text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Buy XRP
            </Link>
            <Link
              href="/assets?tab=xrp&action=add"
              className="text-[#0085FF] text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Add XRP
            </Link>
          </div>
        </div>

        {/* RLUSD Card */}
        <div className="border border-[var(--border)] rounded-[12px] p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">RLUSD</h3>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>

          {/* Available */}
          <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#22C55E] text-white flex items-center justify-center font-bold text-sm">
                $
              </div>
              <span className="text-sm text-[var(--text-primary)]">Available</span>
            </div>
            <p className="font-mono text-sm font-medium">${rlusd.available}</p>
          </div>

          {/* Savings Account */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-[var(--text-tertiary)]" />
              <span className="text-sm text-[var(--text-primary)]">Savings Account</span>
            </div>
            <p className="font-mono text-sm font-medium">${rlusd.savings}</p>
          </div>

          {/* Bottom Links */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--border)]">
            <Link
              href="/assets?tab=rlusd&action=add"
              className="text-[#0085FF] text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Add Dollars
            </Link>
            <Link
              href="/assets?tab=rlusd&action=withdraw"
              className="text-[#0085FF] text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Withdraw Dollars
            </Link>
          </div>
        </div>
      </div>

      {/* Line of Credit Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-6 mt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[var(--text-tertiary)]" />
            <h3 className="font-semibold">My Line of Credit</h3>
          </div>
          <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
        </div>

        {/* Balance */}
        <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
          <span className="text-sm text-[var(--text-secondary)]">Balance</span>
          <p className="font-mono text-sm font-medium">
            ${lineOfCredit.currentlyBorrowing}
          </p>
        </div>

        {/* Interest Rate */}
        <div className="flex items-center justify-between py-3">
          <span className="text-sm text-[var(--text-secondary)]">Interest Rate</span>
          <p className="font-mono text-sm font-medium">
            {lineOfCredit.annualInterestRate}%
          </p>
        </div>

        {/* Bottom Link */}
        <div className="mt-4">
          <Link
            href="/line-of-credit"
            className="text-[#0085FF] text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Start Borrowing
          </Link>
        </div>
      </div>
    </div>
  );
}
