"use client";

import { mockData } from "@/lib/mock-data";
import { TvlMetricCard } from "./TvlMetricCard";
import { TvlChart } from "./TvlChart";
import { ApyChart } from "./ApyChart";

export function TvlOverview() {
  const { tvl, apy } = mockData.transparency;

  return (
    <div>
      {/* Total TVL */}
      <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider font-semibold">
        Total Value Locked
      </p>
      <p className="font-mono text-[3rem] font-bold leading-tight tracking-tight mt-1">
        {tvl.total}
      </p>

      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <TvlMetricCard label="Savings TVL" value={tvl.savings} color="#22C55E" />
        <TvlMetricCard label="Collateral TVL" value={tvl.collateral} color="#F97316" />
        <TvlMetricCard label="Borrow TVL" value={tvl.borrow} color="#0085FF" />
      </div>

      {/* TVL Chart */}
      <TvlChart data={tvl.history} />

      {/* APY Chart */}
      <ApyChart
        xrpData={apy.xrp.history}
        rlusdData={apy.rlusd.history}
        xrpApy={apy.xrp.current}
        rlusdApy={apy.rlusd.current}
      />
    </div>
  );
}
