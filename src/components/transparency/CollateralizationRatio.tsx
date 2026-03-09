"use client";

import { Info } from "lucide-react";
import { mockData } from "@/lib/mock-data";

export function CollateralizationRatio() {
  const { collateralization } = mockData.transparency;

  // Parse values for height ratio
  const collateralNum = parseFloat(collateralization.collateralValue.replace(/[$B]/g, "")) * 1000;
  const loansNum = parseFloat(collateralization.loansValue.replace(/[$BM]/g, ""));
  const totalHeight = 140;
  const loansHeight = (loansNum / collateralNum) * totalHeight;
  const collateralHeight = totalHeight;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-2xl font-bold">{collateralization.ratio}%</span>
        <Info className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
      </div>
      <p className="text-xs text-[var(--text-tertiary)] mt-1">Collateralization Ratio</p>

      {/* Formula */}
      <div className="flex items-center gap-2 mt-3 text-xs text-[var(--text-secondary)]">
        <span className="w-2 h-2 rounded-full bg-[#F97316]" />
        <span>Collateral</span>
        <span className="text-[var(--text-tertiary)]">÷</span>
        <span className="w-2 h-2 rounded-full bg-[#0085FF]" />
        <span>Loans</span>
        <span className="text-[var(--text-tertiary)]">=</span>
        <span>Collat. Ratio</span>
      </div>

      {/* Ratio Bar */}
      <div className="mt-4 border border-[var(--border)] rounded-[12px] p-5">
        <div className="flex items-end gap-3 justify-center">
          {/* Collateral Block */}
          <div className="flex flex-col items-center">
            <div
              className="w-24 rounded-md"
              style={{
                height: `${collateralHeight}px`,
                background: "linear-gradient(180deg, #F97316 0%, #FB923C 100%)",
              }}
            />
            <p className="mt-2 text-[11px] font-semibold text-[var(--text-primary)]">Collateral</p>
            <p className="font-mono text-xs font-medium">{collateralization.collateralValue}</p>
          </div>

          {/* Loans Block */}
          <div className="flex flex-col items-center">
            <div
              className="w-24 rounded-md bg-[#0085FF]"
              style={{ height: `${loansHeight}px` }}
            />
            <p className="mt-2 text-[11px] font-semibold text-[var(--text-primary)]">Loans</p>
            <p className="font-mono text-xs font-medium">{collateralization.loansValue}</p>
          </div>
        </div>

        {/* Backing text */}
        <p className="text-center text-xs text-[var(--text-secondary)] mt-5">
          Every <span className="font-semibold">$1</span> in Loans is backed by{" "}
          <span className="font-semibold font-mono">{collateralization.perDollarBacking}</span>{" "}
          in collateral
        </p>
      </div>
    </div>
  );
}
