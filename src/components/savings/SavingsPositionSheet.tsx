"use client";

import { ArrowLeft, Info } from "lucide-react";

interface SavingsPositionSheetProps {
  open: boolean;
  onClose: () => void;
}

export function SavingsPositionSheet({
  open,
  onClose,
}: SavingsPositionSheetProps) {
  if (!open) return null;

  const position = {
    balance: "12,112.91",
    balanceDecimals: "057230",
    earningApr: "4.10",
    totalBalance: "12,112",
    totalBalanceDecimals: ".9105",
    lifetimeInterest: "309.42",
    available: {
      amount: "2,003.75",
      raw: "2,003.7481",
      network: "XRPL",
    },
    earning: {
      amount: "10,109.16",
      raw: "10,109.1624",
      apr: "4.91",
      network: "XRPL",
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative flex h-[720px] w-full max-w-[420px] flex-col rounded-radius-lg bg-white shadow-2xl overflow-hidden">
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1 w-10 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#0085FF" />
              <circle cx="12" cy="12" r="6" fill="white" />
              <circle cx="12" cy="12" r="3" fill="#0085FF" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-success">Saving</p>
            <p className="text-xl font-bold text-text-primary">RLUSD</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6">
          {/* Earning Badge */}
          <div className="mt-6 flex items-center justify-center gap-1.5">
            <span className="text-sm font-medium text-success">
              Earning {position.earningApr}%
            </span>
            <span className="text-sm text-text-secondary">· Net</span>
            <Info size={12} className="text-text-tertiary" />
          </div>

          {/* Large Balance */}
          <div className="mt-2 flex items-start justify-center">
            <span className="font-mono text-[36px] font-bold tracking-tight text-text-primary">
              ${position.balance}
            </span>
            <span className="font-mono text-[36px] font-bold tracking-tight text-border blur-[0.5px]">
              {position.balanceDecimals}
            </span>
          </div>

          {/* Custodied by */}
          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-text-secondary">
            <span>Custodied by</span>
            <span className="font-semibold text-text-primary">Ripple</span>
            <span className="font-semibold text-text-primary">Zodia</span>
          </div>

          {/* Stats Row */}
          <div className="mt-8 rounded-radius-sm border border-border">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="px-4 py-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DBEAFE]">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0085FF" />
                    </svg>
                  </div>
                  <span className="font-mono text-base font-semibold text-text-primary">
                    {position.totalBalance}
                  </span>
                  <span className="font-mono text-sm text-text-tertiary">
                    {position.totalBalanceDecimals}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-text-secondary">
                  Total Balance
                </p>
              </div>
              <div className="px-4 py-4">
                <p className="font-mono text-base font-bold text-text-primary">
                  ${position.lifetimeInterest}
                </p>
                <p className="mt-1 text-xs font-medium text-text-secondary">
                  Lifetime Interest
                </p>
              </div>
            </div>
          </div>

          {/* Balances Section */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-text-secondary">
              Balances
            </p>

            <div className="mt-4 space-y-6">
              {/* Available */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#3B82F6" strokeWidth="2" />
                      <path d="M8 12h8" stroke="#3B82F6" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">Available</p>
                    <div className="mt-0.5 flex items-center gap-1">
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="#6B7280" strokeWidth="1.5" />
                      </svg>
                      <span className="text-xs font-medium text-text-secondary">
                        {position.available.network}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-text-primary">
                    ${position.available.amount}
                  </p>
                  <p className="font-mono text-xs text-text-secondary">
                    {position.available.raw}
                  </p>
                </div>
              </div>

              {/* Earning */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-background-tertiary bg-[#EFF6FF]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#3B82F6" strokeWidth="2" />
                      <path d="M12 7v10M7 12h10" stroke="#3B82F6" strokeWidth="2" />
                    </svg>
                    <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0085FF]">
                      <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4h6M4 1v6" stroke="white" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">Earning</p>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#059669]">
                        {position.earning.apr}% APR
                      </span>
                      <span className="text-xs text-text-secondary">·</span>
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="#6B7280" strokeWidth="1.5" />
                      </svg>
                      <span className="text-xs font-medium text-text-secondary">
                        {position.earning.network}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-text-primary">
                    ${position.earning.amount}
                  </p>
                  <p className="font-mono text-xs text-text-secondary">
                    {position.earning.raw}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for bottom buttons */}
          <div className="h-24" />
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 bg-white px-6 pb-6 pt-4">
          <button
            onClick={onClose}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-tertiary shadow-sm transition-colors hover:bg-border"
          >
            <ArrowLeft size={16} />
          </button>
          <button className="flex h-14 flex-1 items-center justify-center rounded-full bg-[#1A1A1A] text-lg font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90">
            Deposit RLUSD
          </button>
        </div>
      </div>
    </div>
  );
}
