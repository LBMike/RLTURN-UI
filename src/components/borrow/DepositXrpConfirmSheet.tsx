"use client";

import { ArrowLeft, X } from "lucide-react";
import { mockData } from "@/lib/mock-data";

interface DepositXrpConfirmSheetProps {
  open: boolean;
  amount: string;
  onClose: () => void;
  onBack: () => void;
  onConfirm: () => void;
}

export function DepositXrpConfirmSheet({
  open,
  amount,
  onClose,
  onBack,
  onConfirm,
}: DepositXrpConfirmSheetProps) {
  if (!open) return null;

  const { borrow, xrp } = mockData;
  const xrpPrice = parseFloat(xrp.price) || 2.34;
  const currentCollateralUsd = parseFloat(borrow.collateral.amountUsd.replace(/,/g, "")) || 0;
  const currentCollateralXrp = parseFloat(borrow.collateral.amount.replace(/,/g, "")) || 0;
  const borrowedUsd = parseFloat(borrow.borrowedAmountUsd.replace(/,/g, "")) || 0;
  const currentLtv = parseFloat(borrow.ltvRatio) || 52;

  const numAmount = parseFloat(amount.replace(/,/g, "")) || 0;
  const depositUsd = numAmount * xrpPrice;
  const newCollateralUsd = currentCollateralUsd + depositUsd;
  const newCollateralXrp = currentCollateralXrp + numAmount;
  const newLtv = newCollateralUsd > 0 ? (borrowedUsd / newCollateralUsd) * 100 : currentLtv;
  const ltvImprovement = currentLtv - newLtv;

  const newLiquidationPrice = borrowedUsd / (newCollateralXrp * 0.80);
  const newAvailableToBorrow = newCollateralUsd * 0.80 - borrowedUsd;

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
            <p className="text-sm text-[#94a3b8]">Total XRP to Deposit</p>
            <p className="mt-1 text-4xl font-bold font-mono">
              {numAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })} XRP
            </p>
            <p className="mt-1 text-sm text-[#94a3b8]">${fmt(depositUsd)}</p>
          </div>

          {/* Collateral Impact */}
          <div className="mt-8 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Collateral Impact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Current Collateral</span>
                <span className="font-mono text-sm font-semibold">${fmt(currentCollateralUsd)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Adding</span>
                <span className="font-mono text-sm font-semibold text-[#22C55E]">+${fmt(depositUsd)}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-sm font-semibold">New Total</span>
                <span className="font-mono text-sm font-bold">${fmt(newCollateralUsd)}</span>
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
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold text-[#22C55E]">
                    {newLtv.toFixed(1)}%
                  </span>
                  {ltvImprovement > 0 && (
                    <span className="rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-xs font-medium text-[#22C55E]">
                      -{ltvImprovement.toFixed(1)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Security Details */}
          <div className="mt-4 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Security Details</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Liquidation Price</span>
                <span className="font-mono text-sm font-semibold">${newLiquidationPrice.toFixed(5)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Available to Borrow</span>
                <span className="font-mono text-sm font-semibold text-[#22C55E]">
                  ${fmt(Math.max(newAvailableToBorrow, 0))}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onConfirm}
            className="h-12 w-full rounded-full bg-primary text-base font-semibold text-white transition-colors hover:brightness-110"
          >
            Confirm Deposit
          </button>
        </div>
      </div>
    </div>
  );
}
