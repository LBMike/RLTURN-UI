"use client";

import { ArrowLeft, X, AlertTriangle } from "lucide-react";
import { mockData } from "@/lib/mock-data";

interface WithdrawXrpConfirmSheetProps {
  open: boolean;
  amount: string;
  onClose: () => void;
  onBack: () => void;
  onConfirm: () => void;
}

export function WithdrawXrpConfirmSheet({
  open,
  amount,
  onClose,
  onBack,
  onConfirm,
}: WithdrawXrpConfirmSheetProps) {
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
  const remainingCollateralXrp = Math.max(currentCollateralXrp - numAmount, 0);
  const newLtv = remainingCollateralUsd > 0 ? (borrowedUsd / remainingCollateralUsd) * 100 : 100;

  const ltvColor = newLtv < 65 ? "#22C55E" : newLtv < 75 ? "#F59E0B" : "#EF4444";
  const showWarning = newLtv >= 70;

  const newLiquidationPrice = remainingCollateralXrp > 0
    ? borrowedUsd / (remainingCollateralXrp * 0.80)
    : 0;
  const newAvailableToBorrow = Math.max(remainingCollateralUsd * 0.80 - borrowedUsd, 0);
  const borrowCapacity = remainingCollateralUsd > 0
    ? ((borrowedUsd / (remainingCollateralUsd * 0.80)) * 100).toFixed(1)
    : "100.0";

  const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative flex h-[680px] w-full max-w-md flex-col rounded-[16px] bg-white shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-6">
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-bold">Confirm</h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pt-8">
          {/* Amount Display */}
          <div className="text-center">
            <p className="text-sm text-[#94a3b8]">Total XRP to Withdraw</p>
            <p className="mt-1 text-4xl font-bold font-mono">
              {numAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })} XRP
            </p>
            <p className="mt-1 text-sm text-[#94a3b8]">${fmt(withdrawUsd)}</p>
          </div>

          {/* Liquidation Risk Warning */}
          {showWarning && (
            <div className="mt-6 flex items-start gap-3 rounded-[12px] border-2 border-[#EF4444] bg-[#EF4444]/5 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#EF4444]" />
              <div>
                <p className="text-sm font-semibold text-[#EF4444]">
                  Liquidation Risk
                </p>
                <p className="mt-1 text-xs text-[#EF4444]/80">
                  Your LTV will be {newLtv.toFixed(1)}%, close to the 80% liquidation threshold.
                </p>
              </div>
            </div>
          )}

          {/* Collateral Impact */}
          <div className="mt-6 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Collateral Impact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Current Collateral</span>
                <span className="font-mono text-sm font-semibold">${fmt(currentCollateralUsd)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Withdrawing</span>
                <span className="font-mono text-sm font-semibold text-[#EF4444]">-${fmt(withdrawUsd)}</span>
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
                <span className="font-mono text-sm font-semibold" style={{ color: ltvColor }}>
                  {newLtv.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="mt-4 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Risk Assessment</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">New Liquidation Price</span>
                <span className="font-mono text-sm font-semibold">
                  ${newLiquidationPrice.toFixed(5)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Available to Borrow</span>
                <span className="font-mono text-sm font-semibold">${fmt(newAvailableToBorrow)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Borrow Capacity</span>
                <span className="font-mono text-sm font-semibold">{borrowCapacity}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onConfirm}
            className="h-12 w-full rounded-full bg-primary text-base font-semibold text-white transition-colors hover:brightness-110"
          >
            Confirm Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
}
