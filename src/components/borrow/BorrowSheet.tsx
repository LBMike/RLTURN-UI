"use client";

import { useState } from "react";
import { ArrowLeft, Info, X } from "lucide-react";

interface BorrowSheetProps {
  open: boolean;
  onClose: () => void;
  onContinue: (amount: string) => void;
}

export function BorrowSheet({ open, onClose, onContinue }: BorrowSheetProps) {
  const [amount, setAmount] = useState("1000");

  if (!open) return null;

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
          <h2 className="text-lg font-bold">Borrow</h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f8fafc]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 px-6 pt-8">
          <p className="text-sm text-[#475569]">
            How much do you want to borrow?
          </p>

          <div className="mt-3 flex items-center rounded-[8px] border-2 border-[#0085ff] px-4 py-3">
            <span className="text-lg text-[#94a3b8]">$</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="ml-2 flex-1 bg-transparent text-lg font-semibold outline-none"
              placeholder="0"
            />
            <button className="rounded-[8px] border px-3 py-1 text-sm font-medium hover:bg-[#f8fafc]">
              Max
            </button>
          </div>

          <div className="mt-6 rounded-[12px] border p-5">
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
            <h3 className="text-lg font-bold">Capital Charge</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
              A capital charge will be applied to your loan balance at the end of
              the year or when you fully repay your loan. The capital charge is
              2% assessed on your max balance within a year.
            </p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={() => onContinue(amount)}
            className="h-12 w-full rounded-full bg-[#23292f] text-base font-semibold text-white transition-colors hover:bg-[#1a1f24]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
