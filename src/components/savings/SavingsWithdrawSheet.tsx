"use client";

import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { mockData } from "@/lib/mock-data";

interface SavingsWithdrawSheetProps {
  open: boolean;
  asset: "xrp" | "rlusd";
  onClose: () => void;
  onContinue: (amount: string) => void;
}

export function SavingsWithdrawSheet({ open, asset, onClose, onContinue }: SavingsWithdrawSheetProps) {
  const [amount, setAmount] = useState("");

  if (!open) return null;

  const isXrp = asset === "xrp";
  const { savings, xrp } = mockData;
  const xrpPrice = parseFloat(xrp.price) || 2.34;
  const apy = isXrp ? parseFloat(savings.xrp.apy) : parseFloat(savings.rlusd.apy);
  const currentEarning = isXrp
    ? parseFloat(savings.xrp.earning.replace(/,/g, ""))
    : parseFloat(savings.rlusd.earning.replace(/,/g, ""));

  const numAmount = parseFloat(amount.replace(/,/g, "")) || 0;
  const remainingBalance = Math.max(currentEarning - numAmount, 0);
  const newMonthlyEarning = (remainingBalance * apy / 100) / 12;

  const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleMax = () => {
    setAmount(currentEarning.toFixed(2));
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
          <h2 className="text-lg font-bold">Withdraw {isXrp ? "XRP" : "RLUSD"}</h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pt-8">
          <p className="text-sm text-[#475569]">
            How much {isXrp ? "XRP" : "RLUSD"} do you want to withdraw from Savings?
          </p>

          <div className="mt-3 flex items-center rounded-[8px] border-2 border-[#0085ff] px-4 py-3">
            <span className="text-lg text-[#94a3b8]">{isXrp ? "XRP" : "$"}</span>
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
            Savings Balance: {isXrp ? `${savings.xrp.earning} XRP` : `${savings.rlusd.earning} RLUSD`}
          </p>

          {/* Savings Balance */}
          <div className="mt-6 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Savings Balance</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Current Savings</span>
                <span className="font-mono text-sm font-semibold">
                  {isXrp ? `${savings.xrp.earning} XRP` : `$${savings.rlusd.earning}`}
                </span>
              </div>
              {isXrp && (
                <div className="flex justify-end -mt-1">
                  <span className="font-mono text-xs text-[#94a3b8]">${savings.xrp.earningUsd}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Withdrawing</span>
                <span className="font-mono text-sm font-semibold text-[#EF4444]">
                  -{isXrp ? `${fmt(numAmount)} XRP` : `$${fmt(numAmount)}`}
                </span>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-sm font-semibold">Remaining</span>
                <span className="font-mono text-sm font-bold">
                  {isXrp ? `${fmt(remainingBalance)} XRP` : `$${fmt(remainingBalance)}`}
                </span>
              </div>
              {isXrp && (
                <div className="flex justify-end -mt-1">
                  <span className="font-mono text-xs text-[#94a3b8]">${fmt(remainingBalance * xrpPrice)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Earnings Impact */}
          <div className="mt-4 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Earnings Impact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Current APY</span>
                <span className="font-mono text-sm font-semibold text-[#22C55E]">{apy}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">New Monthly Earning</span>
                <span className="font-mono text-sm font-semibold">
                  {isXrp ? `${fmt(newMonthlyEarning)} XRP` : `$${fmt(newMonthlyEarning)}`}
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
