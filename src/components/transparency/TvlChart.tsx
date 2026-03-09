"use client";

import { useRef, useState, useCallback } from "react";

interface TvlDataPoint {
  date: string;
  total: number;
  savings: number;
  collateral: number;
  borrow: number;
}

interface TvlChartProps {
  data: Record<string, TvlDataPoint[]>;
}

const PERIODS = ["1W", "1M", "1Y"] as const;
type Period = (typeof PERIODS)[number];

const LINES = [
  { key: "total" as const, label: "Total TVL", color: "#0F172A" },
  { key: "savings" as const, label: "Savings", color: "#22C55E" },
  { key: "collateral" as const, label: "Collateral", color: "#F97316" },
  { key: "borrow" as const, label: "Borrow", color: "#0085FF" },
];

export function TvlChart({ data }: TvlChartProps) {
  const [activePeriod, setActivePeriod] = useState<Period>("1M");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const points = data[activePeriod];

  // Chart dimensions
  const width = 600;
  const height = 220;
  const padX = 48;
  const padY = 24;
  const padBottom = 32;
  const chartW = width - padX * 2;
  const chartH = height - padY - padBottom;

  // Scale
  const allValues = points.flatMap((d) => [d.total, d.savings, d.collateral, d.borrow]);
  const maxVal = Math.ceil(Math.max(...allValues) * 1.15 * 10) / 10;
  const minVal = 0;
  const range = maxVal - minVal || 1;

  const getX = (i: number) => padX + (i / (points.length - 1)) * chartW;
  const getY = (v: number) => padY + chartH - ((v - minVal) / range) * chartH;

  const makePath = (key: "total" | "savings" | "collateral" | "borrow") =>
    points.map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d[key])}`).join(" ");

  const makeAreaPath = (key: "total" | "savings" | "collateral" | "borrow") => {
    const linePath = makePath(key);
    return `${linePath} L ${getX(points.length - 1)} ${getY(0)} L ${getX(0)} ${getY(0)} Z`;
  };

  // Y-axis ticks
  const tickCount = 5;
  const yTicks = Array.from({ length: tickCount }, (_, i) => minVal + (range / (tickCount - 1)) * i);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * width;

      let closest = 0;
      let closestDist = Infinity;
      for (let i = 0; i < points.length; i++) {
        const dist = Math.abs(getX(i) - mouseX);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      }
      setHoveredIndex(closest);
    },
    [points.length, width],
  );

  const hoveredPoint = hoveredIndex !== null ? points[hoveredIndex] : null;

  // Tooltip position
  const tooltipX = hoveredIndex !== null ? getX(hoveredIndex) : 0;
  const tooltipLeft = (tooltipX / width) * 100;
  const flipTooltip = tooltipLeft > 60;

  return (
    <div className="border border-[var(--border)] rounded-[12px] p-5 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold">TVL History</span>
        <div className="inline-flex bg-[var(--background-secondary)] rounded-full p-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setActivePeriod(p)}
              className={`px-3 py-1 rounded-full text-xs transition-all ${
                activePeriod === p
                  ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Grid lines */}
          {yTicks.map((tick) => (
            <g key={tick}>
              <line
                x1={padX}
                y1={getY(tick)}
                x2={width - padX}
                y2={getY(tick)}
                stroke="var(--border)"
                strokeDasharray="4 4"
              />
              <text
                x={padX - 8}
                y={getY(tick) + 4}
                textAnchor="end"
                className="fill-[var(--text-tertiary)]"
                fontSize="10"
              >
                ${tick.toFixed(1)}B
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {points.map((d, i) => (
            <text
              key={i}
              x={getX(i)}
              y={height - 8}
              textAnchor="middle"
              className="fill-[var(--text-tertiary)]"
              fontSize="10"
            >
              {d.date}
            </text>
          ))}

          {/* Total area fill */}
          <path
            d={makeAreaPath("total")}
            fill="var(--border)"
            opacity="0.3"
          />

          {/* Lines (reverse order so total renders on top) */}
          {[...LINES].reverse().map((line) => (
            <path
              key={line.key}
              d={makePath(line.key)}
              fill="none"
              stroke={line.color}
              strokeWidth={line.key === "total" ? 2.5 : 1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={line.key === "total" ? 1 : 0.8}
            />
          ))}

          {/* Data points */}
          {points.map((d, i) =>
            LINES.map((line) => (
              <circle
                key={`${line.key}-${i}`}
                cx={getX(i)}
                cy={getY(d[line.key])}
                r={line.key === "total" ? 3 : 2}
                fill={line.color}
              />
            ))
          )}

          {/* Hover vertical line */}
          {hoveredIndex !== null && (
            <line
              x1={getX(hoveredIndex)}
              y1={padY}
              x2={getX(hoveredIndex)}
              y2={padY + chartH}
              stroke="var(--text-tertiary)"
              strokeWidth="1"
              strokeDasharray="4 3"
              pointerEvents="none"
            />
          )}

          {/* Hover highlight circles */}
          {hoveredIndex !== null && hoveredPoint && (
            <g pointerEvents="none">
              {LINES.map((line) => (
                <circle
                  key={line.key}
                  cx={getX(hoveredIndex)}
                  cy={getY(hoveredPoint[line.key])}
                  r={line.key === "total" ? 5 : 4}
                  fill={line.color}
                  stroke="white"
                  strokeWidth="2"
                />
              ))}
            </g>
          )}
        </svg>

        {/* Tooltip */}
        {hoveredIndex !== null && hoveredPoint && (
          <div
            className="absolute top-0 pointer-events-none z-10"
            style={{
              left: `${tooltipLeft}%`,
              transform: flipTooltip ? "translateX(-100%)" : "translateX(0)",
            }}
          >
            <div className="bg-white border border-[var(--border)] rounded-[12px] shadow-lg p-4 min-w-[190px]">
              <div className="flex items-center justify-between gap-6 mb-3">
                <span className="text-xs font-semibold">TVL</span>
                <span className="text-xs text-[var(--text-tertiary)]">{hoveredPoint.date}</span>
              </div>

              {LINES.map((line, i) => (
                <div key={line.key}>
                  {i > 0 && <div className="border-t border-[var(--border)] my-2" />}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: line.color }}
                      />
                      <span className="text-xs font-medium">{line.label}</span>
                    </div>
                    <span className="text-xs font-semibold font-mono">
                      ${hoveredPoint[line.key].toFixed(2)}B
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-3">
        {LINES.map((line) => (
          <div key={line.key} className="flex items-center gap-1.5">
            <span
              className="w-3 h-0.5 rounded-full"
              style={{ backgroundColor: line.color }}
            />
            <span className="text-xs text-[var(--text-secondary)]">{line.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
