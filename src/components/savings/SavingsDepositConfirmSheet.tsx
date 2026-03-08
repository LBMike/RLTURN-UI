"use client";

import { ArrowLeft, X } from "lucide-react";
import { mockData } from "@/lib/mock-data";

interface SavingsDepositConfirmSheetProps {
  open: boolean;
  asset: "xrp" | "rlusd";
  amount: string;
  onClose: () => void;
  onBack: () => void;
  onConfirm: () => void;
}

export function SavingsDepositConfirmSheet({
  open,
  asset,
  amount,
  onClose,
  onBack,
  onConfirm,
}: SavingsDepositConfirmSheetProps) {
  if (!open) return null;

  const isXrp = asset === "xrp";
  const { savings, xrp } = mockData;
  const xrpPrice = parseFloat(xrp.price) || 2.34;
  const apy = isXrp ? parseFloat(savings.xrp.apy) : parseFloat(savings.rlusd.apy);
  const currentEarning = isXrp
    ? parseFloat(savings.xrp.earning.replace(/,/g, ""))
    : parseFloat(savings.rlusd.earning.replace(/,/g, ""));

  const numAmount = parseFloat(amount.replace(/,/g, "")) || 0;
  const newBalance = currentEarning + numAmount;
  const estMonthlyEarning = (newBalance * apy / 100) / 12;
  const estAnnualEarning = newBalance * apy / 100;
  const amountUsd = numAmount * xrpPrice;

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
            <p className="text-sm text-[#94a3b8]">Total {isXrp ? "XRP" : "RLUSD"} to Deposit</p>
            <p className="mt-1 text-4xl font-bold font-mono">
              {isXrp
                ? `${numAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })} XRP`
                : `$${numAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
            </p>
            {isXrp && (
              <p className="mt-1 text-sm text-[#94a3b8]">${fmt(amountUsd)}</p>
            )}
          </div>

          {/* Deposit Details */}
          <div className="mt-8 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Deposit Details</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Depositing</span>
                <span className="font-mono text-sm font-semibold text-[#22C55E]">
                  +{isXrp ? `${fmt(numAmount)} XRP` : `$${fmt(numAmount)}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">New Savings Balance</span>
                <span className="font-mono text-sm font-semibold">
                  {isXrp ? `${fmt(newBalance)} XRP` : `$${fmt(newBalance)}`}
                </span>
              </div>
              {isXrp && (
                <div className="flex justify-end -mt-1">
                  <span className="font-mono text-xs text-[#94a3b8]">${fmt(newBalance * xrpPrice)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Earnings Projection */}
          <div className="mt-4 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Earnings Projection</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">APY</span>
                <span className="font-mono text-sm font-semibold text-[#22C55E]">{apy}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Est. Monthly Earning</span>
                <span className="font-mono text-sm font-semibold text-[#22C55E]">
                  {isXrp ? `${fmt(estMonthlyEarning)} XRP` : `$${fmt(estMonthlyEarning)}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Est. Annual Earning</span>
                <span className="font-mono text-sm font-semibold text-[#22C55E]">
                  {isXrp ? `${fmt(estAnnualEarning)} XRP` : `$${fmt(estAnnualEarning)}`}
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
