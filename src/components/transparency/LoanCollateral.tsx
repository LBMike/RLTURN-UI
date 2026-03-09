"use client";

import { mockData } from "@/lib/mock-data";
import { DonutChart } from "./DonutChart";
import { CollateralTable } from "./CollateralTable";
import { CollateralWallets } from "./CollateralWallets";

export function LoanCollateral() {
  const { collateral } = mockData.transparency;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#F97316]" />
        <span className="font-mono text-2xl font-bold">{collateral.totalValueFormatted}</span>
        <span className="text-sm text-[var(--text-secondary)]">Loan Collateral</span>
      </div>
      <p className="mt-1 text-xs text-[var(--text-tertiary)]">
        Total collateral backing all active loans on RLTURN
      </p>

      {/* Donut + Table */}
      <div className="mt-5 border border-[var(--border)] rounded-[12px] p-5">
        <div className="flex items-start gap-6">
          {/* Donut Chart */}
          <div className="shrink-0">
            <DonutChart
              segments={collateral.assets.map((a) => ({
                percentage: a.percentage,
                color: a.color,
                name: a.name,
              }))}
              size={140}
              strokeWidth={22}
            />
          </div>

          {/* Table */}
          <div className="flex-1 min-w-0 overflow-x-auto">
            <CollateralTable assets={collateral.assets} />
          </div>
        </div>
      </div>

      {/* Wallets */}
      <CollateralWallets
        wallets={collateral.wallets}
        totalWallets={collateral.totalWallets}
      />
    </div>
  );
}
