"use client";

interface CollateralAsset {
  name: string;
  color: string;
  amount: string;
  value: string;
  percentage: number;
}

interface CollateralTableProps {
  assets: CollateralAsset[];
}

export function CollateralTable({ assets }: CollateralTableProps) {
  return (
    <table className="w-full text-xs">
      <thead>
        <tr className="text-[11px] text-[var(--text-tertiary)]">
          <th className="text-left font-medium pb-3">Asset</th>
          <th className="text-right font-medium pb-3 whitespace-nowrap">Amount</th>
          <th className="text-right font-medium pb-3 whitespace-nowrap">Value</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset.name} className="border-t border-[var(--border)]">
            <td className="py-3 pr-2">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: asset.color }}
                />
                <span className="font-medium whitespace-nowrap">{asset.name}</span>
                <span className="text-[11px] text-[var(--text-tertiary)]">
                  {asset.percentage}%
                </span>
              </div>
            </td>
            <td className="py-3 px-2 text-right font-mono text-[var(--text-secondary)] whitespace-nowrap">
              {asset.amount}
            </td>
            <td className="py-3 pl-2 text-right font-mono font-medium whitespace-nowrap">
              {asset.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
