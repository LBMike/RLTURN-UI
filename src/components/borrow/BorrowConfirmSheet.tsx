"use client";

import { ArrowLeft, Info, X } from "lucide-react";

interface BorrowConfirmSheetProps {
  open: boolean;
  amount: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function BorrowConfirmSheet({
  open,
  amount,
  onClose,
  onConfirm,
}: BorrowConfirmSheetProps) {
  if (!open) return null;

  const numAmount = parseFloat(amount.replace(/,/g, "")) || 0;
  const collateralXrp = (numAmount / 2.34 / 0.58).toFixed(6);
  const collateralUsd = ((numAmount / 0.58)).toFixed(2);
  const ltvRatio = "58%";

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
          <h2 className="text-lg font-bold">Confirm</h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 px-6 pt-8">
          <div className="text-center">
            <p className="text-sm text-[#94a3b8]">Total Amount</p>
            <p className="mt-1 text-4xl font-bold font-mono">
              ${Number(amount.replace(/,/g, "")).toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </div>

          <div className="mt-8 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Terms</h3>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Annual Interest Rate
                </span>
                <Info className="h-4 w-4 text-[#22c55e]" />
              </div>
              <span className="font-mono text-sm font-semibold">7.5%</span>
            </div>
          </div>

          <div className="mt-4 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Collateral</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Collateral Added</span>
                <div className="text-right">
                  <p className="font-mono text-sm font-semibold">
                    {collateralXrp} XRP
                  </p>
                  <p className="font-mono text-xs text-[#94a3b8]">
                    ${Number(collateralUsd).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">LTV Ratio</span>
                <span className="font-mono text-sm font-semibold">
                  {ltvRatio}
                </span>
              </div>
            </div>
          </div>

          {/* Insufficient collateral warning */}
          <p className="mt-5 text-sm">
            <span className="text-error">Insufficient collateral.</span>{" "}
            <button type="button" className="font-medium underline underline-offset-2 text-text-primary hover:text-primary-dark">
              Add more XRP
            </button>
          </p>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onConfirm}
            className="h-12 w-full rounded-full bg-[#23292f] text-base font-semibold text-white transition-colors hover:bg-[#1a1f24]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
