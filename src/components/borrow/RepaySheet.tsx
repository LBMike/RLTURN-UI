"use client";

import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { mockData } from "@/lib/mock-data";

interface RepaySheetProps {
  open: boolean;
  onClose: () => void;
  onContinue: (amount: string) => void;
}

export function RepaySheet({ open, onClose, onContinue }: RepaySheetProps) {
  const [amount, setAmount] = useState("");

  if (!open) return null;

  const { borrow } = mockData;
  const currentBorrowed = parseFloat(borrow.borrowedAmount.replace(/,/g, "")) || 0;
  const numAmount = parseFloat(amount.replace(/,/g, "")) || 0;
  const remaining = Math.max(currentBorrowed - numAmount, 0);

  const handleMax = () => {
    setAmount(currentBorrowed.toFixed(2));
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
          <h2 className="text-lg font-bold">Repay</h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 px-6 pt-8">
          <p className="text-sm text-[#475569]">
            How much do you want to repay?
          </p>

          <div className="mt-3 flex items-center rounded-[8px] border-2 border-[#0085ff] px-4 py-3">
            <span className="text-lg text-[#94a3b8]">$</span>
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

          <div className="mt-6 rounded-[12px] border p-5">
            <h3 className="text-lg font-bold">Terms</h3>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold">Remaining Balance</span>
              <span className="font-mono text-sm font-semibold">
                ${remaining.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={() => onContinue(amount)}
            className="h-12 w-full rounded-full bg-primary text-base font-semibold text-white transition-colors hover:brightness-110"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
