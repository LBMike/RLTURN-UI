"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { SavingsDepositSheet } from "@/components/savings/SavingsDepositSheet";
import { SavingsDepositConfirmSheet } from "@/components/savings/SavingsDepositConfirmSheet";
import { SavingsWithdrawSheet } from "@/components/savings/SavingsWithdrawSheet";
import { SavingsWithdrawConfirmSheet } from "@/components/savings/SavingsWithdrawConfirmSheet";

export default function SavingsPage() {
  const [activeTab, setActiveTab] = useState<"xrp" | "rlusd">("xrp");
  const { savings } = mockData;

  const [depositOpen, setDepositOpen] = useState(false);
  const [depositConfirmOpen, setDepositConfirmOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawConfirmOpen, setWithdrawConfirmOpen] = useState(false);
  const [actionAmount, setActionAmount] = useState("");

  const closeAll = () => {
    setDepositOpen(false);
    setDepositConfirmOpen(false);
    setWithdrawOpen(false);
    setWithdrawConfirmOpen(false);
    setActionAmount("");
  };

  const isXrp = activeTab === "xrp";
  const data = isXrp ? savings.xrp : savings.rlusd;

  return (
    <div className="max-w-2xl">
      {/* Header */}
      <h1 className="text-[2.25rem] font-bold leading-tight">Savings</h1>

      {/* Tab + Actions Row */}
      <div className="flex items-center justify-between mt-6">
        {/* Pill Tab */}
        <div className="inline-flex bg-[var(--background-secondary)] rounded-full p-1">
          <button
            onClick={() => setActiveTab("xrp")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm transition-all ${
              isXrp
                ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Image src="/xrp.svg" alt="XRP" width={20} height={20} className="w-5 h-5" />
            XRP
          </button>
          <button
            onClick={() => setActiveTab("rlusd")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm transition-all ${
              !isXrp
                ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Image src="/rlusd.svg" alt="RLUSD" width={20} height={20} className="w-5 h-5" />
            RLUSD
          </button>
        </div>
      </div>

      {/* Earning Balance */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="border border-[#22C55E] text-[#22C55E] rounded-full px-3 py-1 text-xs font-medium">
            Earning APY {data.apy}%
          </span>
        </div>
        <p className="mt-3 font-mono text-[2.25rem] font-bold leading-tight tracking-tight">
          {isXrp ? (
            `${savings.xrp.earning} XRP`
          ) : (
            <>
              {savings.rlusd.earning}{" "}
              <Image src="/rlusd.svg" alt="RLUSD" width={36} height={36} className="inline-block h-[2.25rem] w-[2.25rem] -translate-y-[1px] ml-1.5 mr-0.5" />
              RLUSD
            </>
          )}
        </p>
        {isXrp && (
          <p className="mt-1 text-sm text-[var(--text-tertiary)] font-mono">
            ${savings.xrp.earningUsd}
          </p>
        )}
        <p className="mt-2 text-xs text-[var(--text-tertiary)]">
          Custodied by
          <Image src="/ripple-custody.svg" alt="Ripple" width={90} height={24} className="inline-block h-6 w-auto ml-2 mr-2" />
          <Image src="/zodia.svg" alt="Zodia" width={90} height={24} className="inline-block h-6 w-auto" />
        </p>
      </div>

      {/* Earnings Cards */}
      <div className="mt-6 border border-[var(--border)] rounded-[12px] p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center shrink-0">
            <DollarSign className="w-4 h-4" />
          </div>
          <span className="text-sm text-[var(--text-primary)]">Earnings This Month</span>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm font-medium">
            {isXrp ? `${savings.xrp.earningsThisMonth} XRP` : `$${savings.rlusd.earningsThisMonth}`}
          </p>
          {isXrp && (
            <p className="text-xs text-[var(--text-tertiary)]">
              ${savings.xrp.earningsThisMonthUsd}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 border border-[var(--border)] rounded-[12px] p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <span className="text-sm text-[var(--text-primary)]">Lifetime Interest</span>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm font-medium">
            {isXrp ? `${savings.xrp.lifetimeInterest} XRP` : `$${savings.rlusd.lifetimeInterest}`}
          </p>
          {isXrp && (
            <p className="text-xs text-[var(--text-tertiary)]">
              ${savings.xrp.lifetimeInterestUsd}
            </p>
          )}
        </div>
      </div>

      {/* Manage Actions */}
      <div
        onClick={() => setDepositOpen(true)}
        className="border border-[var(--border)] rounded-[12px] p-5 mt-6 flex items-center justify-between cursor-pointer hover:bg-[var(--background-secondary)] transition-colors"
      >
        <div className="flex items-center gap-3">
          <ArrowDownLeft className="w-5 h-5 text-[var(--text-tertiary)]" />
          <p className="text-sm font-medium">Deposit {isXrp ? "XRP" : "RLUSD"}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
      </div>

      <div
        onClick={() => setWithdrawOpen(true)}
        className="border border-[var(--border)] rounded-[12px] p-5 mt-3 flex items-center justify-between cursor-pointer hover:bg-[var(--background-secondary)] transition-colors"
      >
        <div className="flex items-center gap-3">
          <ArrowUpRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          <p className="text-sm font-medium">Withdraw {isXrp ? "XRP" : "RLUSD"}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
      </div>

      {/* Sheets */}
      <SavingsDepositSheet
        open={depositOpen}
        asset={activeTab}
        onClose={closeAll}
        onContinue={(amt) => {
          setActionAmount(amt);
          setDepositOpen(false);
          setDepositConfirmOpen(true);
        }}
      />
      <SavingsDepositConfirmSheet
        open={depositConfirmOpen}
        asset={activeTab}
        amount={actionAmount}
        onClose={closeAll}
        onBack={() => {
          setDepositConfirmOpen(false);
          setDepositOpen(true);
        }}
        onConfirm={closeAll}
      />
      <SavingsWithdrawSheet
        open={withdrawOpen}
        asset={activeTab}
        onClose={closeAll}
        onContinue={(amt) => {
          setActionAmount(amt);
          setWithdrawOpen(false);
          setWithdrawConfirmOpen(true);
        }}
      />
      <SavingsWithdrawConfirmSheet
        open={withdrawConfirmOpen}
        asset={activeTab}
        amount={actionAmount}
        onClose={closeAll}
        onBack={() => {
          setWithdrawConfirmOpen(false);
          setWithdrawOpen(true);
        }}
        onConfirm={closeAll}
      />
    </div>
  );
}
