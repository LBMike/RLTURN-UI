"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { BorrowSheet } from "@/components/borrow/BorrowSheet";
import { BorrowConfirmSheet } from "@/components/borrow/BorrowConfirmSheet";
import { RepaySheet } from "@/components/borrow/RepaySheet";
import { RepayConfirmSheet } from "@/components/borrow/RepayConfirmSheet";
import { DepositXrpSheet } from "@/components/borrow/DepositXrpSheet";
import { DepositXrpConfirmSheet } from "@/components/borrow/DepositXrpConfirmSheet";
import { WithdrawXrpSheet } from "@/components/borrow/WithdrawXrpSheet";
import { WithdrawXrpConfirmSheet } from "@/components/borrow/WithdrawXrpConfirmSheet";

export default function BorrowPage() {
  const { borrow } = mockData;

  const [repayOpen, setRepayOpen] = useState(false);
  const [repayConfirmOpen, setRepayConfirmOpen] = useState(false);
  const [borrowMoreOpen, setBorrowMoreOpen] = useState(false);
  const [borrowMoreConfirmOpen, setBorrowMoreConfirmOpen] = useState(false);
  const [depositXrpOpen, setDepositXrpOpen] = useState(false);
  const [depositXrpConfirmOpen, setDepositXrpConfirmOpen] = useState(false);
  const [withdrawXrpOpen, setWithdrawXrpOpen] = useState(false);
  const [withdrawXrpConfirmOpen, setWithdrawXrpConfirmOpen] = useState(false);
  const [actionAmount, setActionAmount] = useState("");

  const closeAll = () => {
    setRepayOpen(false);
    setRepayConfirmOpen(false);
    setBorrowMoreOpen(false);
    setBorrowMoreConfirmOpen(false);
    setDepositXrpOpen(false);
    setDepositXrpConfirmOpen(false);
    setWithdrawXrpOpen(false);
    setWithdrawXrpConfirmOpen(false);
    setActionAmount("");
  };

  return (
    <div className="max-w-2xl">
      {/* Header */}
      <h1 className="text-[2.25rem] font-bold leading-tight">Borrow</h1>

      {/* Borrowed Amount + APR */}
      <div className="mt-6">
        <div className="flex items-baseline gap-4">
          <span className="border border-[#22C55E] text-[#22C55E] rounded-full px-3 py-1 text-xs font-medium">
            {borrow.apr}% APR
          </span>
        </div>
        <p className="mt-3 font-mono text-[2.25rem] font-bold leading-tight tracking-tight">
          {borrow.borrowedAmount}{" "}
          <Image src="/rlusd.svg" alt="RLUSD" width={36} height={36} className="inline-block h-[2.25rem] w-[2.25rem] -translate-y-[1px] ml-1.5 mr-0.5" />
          RLUSD
        </p>
        <p className="mt-1 text-sm text-[var(--text-tertiary)] font-mono">
          ${borrow.borrowedAmountUsd}
        </p>
      </div>

      {/* Repay / Borrow More Buttons */}
      <div className="mt-8 flex gap-3">
        <button
          onClick={() => setRepayOpen(true)}
          className="flex-1 h-12 rounded-full bg-primary text-white text-sm font-semibold transition-colors hover:brightness-110"
        >
          Repay RLUSD
        </button>
        <button
          onClick={() => setBorrowMoreOpen(true)}
          className="flex-1 h-12 rounded-full border border-[var(--border)] text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--background-secondary)] transition-colors"
        >
          Borrow More RLUSD
        </button>
      </div>

      {/* Active Collateral */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
            Active Collateral
          </h3>
        </div>

        {/* XRP Collateral Row */}
        <div className="mt-4 border border-[var(--border)] rounded-[12px] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/xrp.svg" alt="XRP" width={32} height={32} className="w-8 h-8" />
            <span className="text-sm font-semibold text-[var(--text-primary)]">XRP</span>
          </div>
          <div className="text-right">
            <p className="font-mono text-sm font-medium">
              {borrow.collateral.amount} XRP
            </p>
            <p className="text-xs text-[var(--text-tertiary)]">
              ${borrow.collateral.amountUsd}
            </p>
          </div>
        </div>
      </div>

      {/* Loan Details */}
      <div className="mt-3 border border-[var(--border)] rounded-[12px] p-5">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-[var(--text-secondary)]">Borrow Capacity</span>
          <span className="font-mono text-sm font-medium">${borrow.borrowCapacity}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-[var(--text-secondary)]">Liquidation Price</span>
          <span className="font-mono text-sm font-medium">${borrow.liquidationPrice}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-[var(--text-secondary)]">LTV Ratio</span>
          <span className="font-mono text-sm font-medium text-[#22C55E]">{borrow.ltvRatio}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-[var(--text-secondary)]">Available to Borrow</span>
          <span className="font-mono text-sm font-medium text-[#22C55E]">${borrow.availableToBorrow}</span>
        </div>
      </div>

      {/* Deposit / Withdraw XRP */}
      <div
        onClick={() => setDepositXrpOpen(true)}
        className="border border-[var(--border)] rounded-[12px] p-5 mt-3 flex items-center justify-between cursor-pointer hover:bg-[var(--background-secondary)] transition-colors"
      >
        <div className="flex items-center gap-3">
          <ArrowDownLeft className="w-5 h-5 text-[var(--text-tertiary)]" />
          <p className="text-sm font-medium">Deposit XRP</p>
        </div>
        <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
      </div>

      <div
        onClick={() => setWithdrawXrpOpen(true)}
        className="border border-[var(--border)] rounded-[12px] p-5 mt-3 flex items-center justify-between cursor-pointer hover:bg-[var(--background-secondary)] transition-colors"
      >
        <div className="flex items-center gap-3">
          <ArrowUpRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          <p className="text-sm font-medium">Withdraw XRP</p>
        </div>
        <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
      </div>

      {/* Repay Flow */}
      <RepaySheet
        open={repayOpen}
        onClose={closeAll}
        onContinue={(amt) => {
          setActionAmount(amt);
          setRepayOpen(false);
          setRepayConfirmOpen(true);
        }}
      />
      <RepayConfirmSheet
        open={repayConfirmOpen}
        amount={actionAmount}
        onClose={closeAll}
        onBack={() => {
          setRepayConfirmOpen(false);
          setRepayOpen(true);
        }}
        onConfirm={closeAll}
      />

      {/* Borrow More Flow */}
      <BorrowSheet
        open={borrowMoreOpen}
        onClose={closeAll}
        onContinue={(amt) => {
          setActionAmount(amt);
          setBorrowMoreOpen(false);
          setBorrowMoreConfirmOpen(true);
        }}
      />
      <BorrowConfirmSheet
        open={borrowMoreConfirmOpen}
        amount={actionAmount}
        onClose={closeAll}
        onConfirm={closeAll}
      />

      {/* Deposit XRP Flow */}
      <DepositXrpSheet
        open={depositXrpOpen}
        onClose={closeAll}
        onContinue={(amt) => {
          setActionAmount(amt);
          setDepositXrpOpen(false);
          setDepositXrpConfirmOpen(true);
        }}
      />
      <DepositXrpConfirmSheet
        open={depositXrpConfirmOpen}
        amount={actionAmount}
        onClose={closeAll}
        onBack={() => {
          setDepositXrpConfirmOpen(false);
          setDepositXrpOpen(true);
        }}
        onConfirm={closeAll}
      />

      {/* Withdraw XRP Flow */}
      <WithdrawXrpSheet
        open={withdrawXrpOpen}
        onClose={closeAll}
        onContinue={(amt) => {
          setActionAmount(amt);
          setWithdrawXrpOpen(false);
          setWithdrawXrpConfirmOpen(true);
        }}
      />
      <WithdrawXrpConfirmSheet
        open={withdrawXrpConfirmOpen}
        amount={actionAmount}
        onClose={closeAll}
        onBack={() => {
          setWithdrawXrpConfirmOpen(false);
          setWithdrawXrpOpen(true);
        }}
        onConfirm={closeAll}
      />
    </div>
  );
}
