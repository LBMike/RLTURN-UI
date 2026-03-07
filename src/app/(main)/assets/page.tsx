"use client";

import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Building,
  ChevronRight,
  DollarSign,
  Lock,
} from "lucide-react";
import { mockData } from "@/lib/mock-data";

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState<"xrp" | "rlusd">("xrp");
  const { xrp, rlusd } = mockData;

  return (
    <div className="max-w-2xl">
      {/* Tab Switcher */}
      <div className="inline-flex bg-[var(--background-secondary)] rounded-full p-1">
        <button
          onClick={() => setActiveTab("xrp")}
          className={`px-6 py-2 rounded-full text-sm transition-all ${
            activeTab === "xrp"
              ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          XRP
        </button>
        <button
          onClick={() => setActiveTab("rlusd")}
          className={`px-6 py-2 rounded-full text-sm transition-all ${
            activeTab === "rlusd"
              ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          RLUSD
        </button>
      </div>

      {/* Balance Section */}
      <div className="mt-6">
        <p className="text-sm text-[var(--text-secondary)]">
          {activeTab === "xrp" ? "Total XRP Balance" : "Total RLUSD Balance"}
        </p>
        <p className="text-[2.25rem] font-bold font-mono leading-tight tracking-tight">
          ${activeTab === "xrp" ? xrp.availableUsd : rlusd.available}
        </p>
        {activeTab === "xrp" && (
          <div className="mt-3">
            <span className="border border-[var(--border)] rounded-full px-4 py-1.5 text-sm font-mono text-[var(--text-secondary)]">
              XRP Price ${xrp.price}
            </span>
          </div>
        )}
      </div>

      {/* Available / Collateral Row */}
      <div className="mt-6 border border-[var(--border)] rounded-[12px] overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-[var(--border)]">
          {/* Available */}
          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0085FF] text-white flex items-center justify-center font-bold text-sm shrink-0">
              {activeTab === "xrp" ? "X" : "$"}
            </div>
            <span className="text-sm text-[var(--text-secondary)]">Available</span>
            <p className="font-mono text-sm font-medium ml-auto">
              ${activeTab === "xrp" ? xrp.availableUsd : rlusd.available}
            </p>
          </div>

          {/* Collateral / Savings */}
          <div className="p-4 flex items-center gap-3">
            <Lock className="w-5 h-5 text-[var(--text-tertiary)] shrink-0" />
            <span className="text-sm text-[var(--text-secondary)]">
              {activeTab === "xrp" ? "Collateral" : "Savings"}
            </span>
            <p className="font-mono text-sm font-medium ml-auto">
              ${activeTab === "xrp" ? xrp.collateralUsd : rlusd.savings}
            </p>
          </div>
        </div>
      </div>

      {/* Buy Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-6 mt-6">
        <h3 className="font-semibold">Buy</h3>
        <div className="mt-4">
          <div className="flex items-center justify-between py-3 border-b border-[var(--border)] cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
            <div className="flex items-center gap-3">
              <ArrowDownLeft className="w-5 h-5 text-[var(--text-tertiary)]" />
              <div>
                <p className="text-sm font-medium">Use Dollar Balance</p>
                <p className="text-xs text-[var(--text-tertiary)]">
                  ${rlusd.available} available
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>
          <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-[var(--text-tertiary)]" />
              <p className="text-sm font-medium">Send a Bank Transfer</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>
        </div>
      </div>

      {/* Transfer Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-6 mt-6">
        <h3 className="font-semibold">Transfer</h3>
        <div className="mt-4">
          <div className="flex items-center justify-between py-3 border-b border-[var(--border)] cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
            <div className="flex items-center gap-3">
              <ArrowDownLeft className="w-5 h-5 text-[var(--text-tertiary)]" />
              <p className="text-sm font-medium">
                Receive {activeTab === "xrp" ? "XRP" : "RLUSD"}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>
          <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
            <div className="flex items-center gap-3">
              <ArrowUpRight className="w-5 h-5 text-[var(--text-tertiary)]" />
              <p className="text-sm font-medium">
                Send {activeTab === "xrp" ? "XRP" : "RLUSD"}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>
        </div>
      </div>

      {/* Sell Card */}
      <div className="border border-[var(--border)] rounded-[12px] p-6 mt-6">
        <h3 className="font-semibold">Sell</h3>
        <div className="mt-4">
          <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-[var(--text-tertiary)]" />
              <p className="text-sm font-medium">
                Sell {activeTab === "xrp" ? "XRP" : "RLUSD"}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
