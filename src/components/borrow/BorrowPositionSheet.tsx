"use client";

import { ArrowLeft, X, MoreHorizontal, Info } from "lucide-react";

interface BorrowPositionSheetProps {
  open: boolean;
  onClose: () => void;
}

export function BorrowPositionSheet({
  open,
  onClose,
}: BorrowPositionSheetProps) {
  if (!open) return null;

  const position = {
    balance: "8,456.03",
    apr: "2.92",
    liquidationRiskPct: 52,
    collateral: {
      asset: "XRP",
      network: "Ripple",
      valueUsd: "18,604.76",
      amount: "30,499.6 XRP",
    },
    liquidationPrice: "$0.3224",
    borrowCapacity: "$16,000.01",
    availableToBorrow: "$7,544.06",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative flex h-[720px] w-full max-w-[420px] flex-col rounded-radius-lg bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DBEAFE]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#8B5CF6]"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M7 12h10M9 8l-2 4 2 4M15 8l2 4-2 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#8B5CF6]">Borrowing</p>
              <p className="text-xl font-bold text-text-primary">RLUSD</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background-secondary text-text-secondary hover:bg-background-tertiary transition-colors"
          >
            <MoreHorizontal size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6">
          {/* Balance + APR */}
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="font-mono text-[30px] font-extrabold tracking-tight text-text-primary">
                ${position.balance}
              </p>
              <p className="text-sm font-medium text-text-secondary">
                Current Balance
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-2xl font-bold text-[#8B5CF6]">
                {position.apr}%
              </p>
              <p className="text-sm font-medium text-text-secondary">APR</p>
            </div>
          </div>

          {/* Custodied by */}
          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-text-secondary">
            <span>Custodied by</span>
            <span className="font-semibold text-text-primary">Ripple</span>
            <span className="font-semibold text-text-primary">Zodia</span>
          </div>

          {/* Separator */}
          <div className="mt-4 border-t border-border" />

          {/* Liquidation Risk */}
          <div className="mt-5">
            <p className="text-sm font-semibold text-text-secondary">
              Liquidation Risk
            </p>
            <div className="mt-3 relative">
              <div className="h-2 w-full rounded-full bg-background-tertiary">
                <div
                  className="h-2 rounded-full bg-success"
                  style={{ width: `${position.liquidationRiskPct}%` }}
                />
              </div>
              <div
                className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-success bg-white shadow-sm"
                style={{ left: `${position.liquidationRiskPct}%`, marginLeft: "-6px" }}
              />
            </div>
            <div className="mt-2 flex justify-center">
              <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-xs font-bold text-success">
                {position.liquidationRiskPct}% Safe
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="h-14 w-full rounded-full bg-primary-dark font-bold text-white shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-90">
              Repay RLUSD
            </button>
            <button className="h-14 w-full rounded-full border border-border bg-white font-bold text-text-primary shadow-sm transition-colors hover:bg-background-secondary">
              Borrow More RLUSD
            </button>
          </div>

          {/* Separator */}
          <div className="mt-6 border-t border-border" />

          {/* Active Collateral */}
          <div className="mt-5">
            <div className="flex items-center gap-1.5 text-sm uppercase tracking-wider">
              <span className="font-bold text-text-secondary">
                Active Collateral
              </span>
              <span className="font-normal text-text-tertiary">
                ${position.collateral.valueUsd}
              </span>
            </div>

            {/* Collateral Asset Row */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-background-secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0085FF" strokeWidth="2" />
                    <path d="M7 12h10M9 8l-2 4 2 4M15 8l2 4-2 4" stroke="#0085FF" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-text-primary">
                    {position.collateral.asset}
                  </p>
                  <p className="text-xs font-medium text-text-secondary">
                    {position.collateral.network}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono font-bold text-text-primary">
                  ${position.collateral.valueUsd}
                </p>
                <p className="font-mono text-xs text-text-secondary">
                  {position.collateral.amount}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">
                  Liquidation Price
                </span>
                <span className="text-sm font-semibold text-text-primary">
                  {position.liquidationPrice}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">
                  Borrow Capacity
                </span>
                <span className="text-sm font-semibold text-text-primary">
                  {position.borrowCapacity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">
                  Available to Borrow
                </span>
                <span className="text-sm font-semibold text-text-primary">
                  {position.availableToBorrow}
                </span>
              </div>
            </div>
          </div>

          {/* Spacer for bottom buttons */}
          <div className="h-24" />
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-white px-6 pb-6 pt-4">
          <button
            onClick={onClose}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-background-tertiary bg-white shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.1)] transition-colors hover:bg-background-secondary"
          >
            <ArrowLeft size={18} />
          </button>
          <button className="flex h-14 flex-1 items-center justify-center rounded-full bg-primary-dark font-bold text-white shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90">
            Manage Position
          </button>
        </div>
      </div>
    </div>
  );
}
