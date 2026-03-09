"use client";

interface TvlMetricCardProps {
  label: string;
  value: string;
  color: string;
}

export function TvlMetricCard({ label, value, color }: TvlMetricCardProps) {
  return (
    <div className="border border-[var(--border)] rounded-[12px] p-4">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-xs text-[var(--text-tertiary)]">{label}</span>
      </div>
      <p className="font-mono text-lg font-semibold">{value}</p>
    </div>
  );
}
