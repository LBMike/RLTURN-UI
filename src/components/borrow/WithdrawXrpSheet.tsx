"use client";

import { useState } from "react";
import { ArrowLeft, X, AlertTriangle } from "lucide-react";
import { mockData } from "@/lib/mock-data";

interface WithdrawXrpSheetProps {
  open: boolean;
  onClose: () => void;
  onContinue: (amount: string) => void;
}

export function WithdrawXrpSheet({ open, onClose, onContinue }: WithdrawXrpSheetProps) {
  const [amount, setAmount] = useState("");

  if (!open) return null;

  const { borrow, xrp } = mockData;
  const xrpPrice = parseFloat(xrp.price) || 2.34;
  const currentCollateralUsd = parseFloat(borrow.collateral.amountUsd.replace(/,/g, "")) || 0;
  const currentCollateralXrp = parseFloat(borrow.collateral.amount.replace(/,/g, "")) || 0;
  const borrowedUsd = parseFloat(borrow.borrowedAmountUsd.replace(/,/g, "")) || 0;
  const currentLtv = parseFloat(borrow.ltvRatio) || 52;

  const numAmount = parseFloat(amount.replace(/,/g, "")) || 0;
  const withdrawUsd = numAmount * xrpPrice;
  const remainingCollateralUsd = Math.max(currentCollateralUsd - withdrawUsd, 0);
  const newLtv = remainingCollateralUsd > 0 ? (borrowedUsd / remainingCollateralUsd) * 100 : 100;

  const ltvColor = newLtv < 65 ? "#22C55E" : newLtv < 75 ? "#F59E0B" : "#EF4444";
  const showWarning = numAmount > 0 && newLtv >= 70;

  const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleMax = () => {
    setAmount(currentCollateralXrp.toFixed(2));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative flex h-[680px] w-full max-w-md flex-col rounded-[16px] bg-white shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-6">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-bold">Withdraw XRP</h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pt-8">
          <p className="text-sm text-[#475569]">
            How much XRP collateral do you want to withdraw?
          </p>

          <div className="mt-3 flex items-center rounded-[8px] border-2 border-[#0085ff] px-4 py-3">
            <span className="text-lg text-[#94a3b8]">XRP</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="ml-2 flex-1 bg-transparent text-lg font-semibold outline-none"
              placeholder="0.00"
            />
            <button
              onClick={handleMax}
              className="rounded-[8px] border px-3 py-1 text-sm font-medium hover:bg-[#f8fafc]"
            >
              Max
            </button>
          </div>
          <p className="mt-1 text-xs text-[#94a3b8]">
            Collateral: {borrow.collateral.amount} XRP
          </p>

          {/* Warning Banner */}
          {showWarning && (
            <div className="mt-4 flex items-start gap-3 rounded-[12px] border-2 border-[#EF4444] bg-[#EF4444]/5 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#EF4444]" />
              <div>
                <p className="text-sm font-semibold text-[#EF4444]">
                  Withdrawing this amount raises your LTV to {newLtv.toFixed(1)}%
                </p>
                <p className="mt-1 text-xs text-[#EF4444]/80">
                  Liquidation threshold: 80%
                </p>
              </div>
            </div>
          )}

          {/* Collateral Status */}
          <div className="mt-6 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Collateral Status</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Current Collateral</span>
                <span className="font-mono text-sm font-semibold">${fmt(currentCollateralUsd)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Withdrawing</span>
                <span className="font-mono text-sm font-semibold text-[#EF4444]">
                  -${fmt(withdrawUsd)}
                </span>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-sm font-semibold">Remaining</span>
                <span className="font-mono text-sm font-bold">${fmt(remainingCollateralUsd)}</span>
              </div>
            </div>
          </div>

          {/* LTV Impact */}
          <div className="mt-4 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">LTV Impact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Current LTV</span>
                <span className="font-mono text-sm font-semibold">{currentLtv}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">New LTV</span>
                <span className="font-mono text-sm font-semibold" style={{ color: numAmount > 0 ? ltvColor : "#22C55E" }}>
                  {numAmount > 0 ? `${newLtv.toFixed(1)}%` : `${currentLtv}%`}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={() => onContinue(amount)}
            disabled={numAmount <= 0}
            className="h-12 w-full rounded-full bg-primary text-base font-semibold text-white transition-colors hover:brightness-110 disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
