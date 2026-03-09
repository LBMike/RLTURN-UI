"use client";

import { Shield } from "lucide-react";
import { TvlOverview } from "@/components/transparency/TvlOverview";
import { LoanCollateral } from "@/components/transparency/LoanCollateral";
import { CollateralizationRatio } from "@/components/transparency/CollateralizationRatio";

export default function TransparencyPage() {
  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Shield className="w-7 h-7 text-[var(--text-primary)]" />
        <h1 className="text-[2.25rem] font-bold leading-tight">Transparency</h1>
      </div>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Real-time Proof of Reserve data. All assets are verified 24/7 via Chainlink PoR and Accountable.
      </p>

      {/* TVL Overview */}
      <div className="mt-8">
        <TvlOverview />
      </div>

      {/* Loan Collateral + Collateralization Ratio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <LoanCollateral />
        <CollateralizationRatio />
      </div>
    </div>
  );
}
