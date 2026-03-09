"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface DataPoint {
  date: string;
  rlturn: number;
  benchmark: number;
}

interface ApyChartProps {
  xrpData: Record<string, DataPoint[]>;
  rlusdData: Record<string, DataPoint[]>;
  xrpApy: string;
  rlusdApy: string;
}

const PERIODS = ["1W", "1M", "1Y"] as const;
type Period = (typeof PERIODS)[number];

export function ApyChart({ xrpData, rlusdData, xrpApy, rlusdApy }: ApyChartProps) {
  const [activeAsset, setActiveAsset] = useState<"xrp" | "rlusd">("xrp");
  const [activePeriod, setActivePeriod] = useState<Period>("1M");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const isXrp = activeAsset === "xrp";
  const data = isXrp ? xrpData[activePeriod] : rlusdData[activePeriod];
  const currentApy = isXrp ? xrpApy : rlusdApy;

  // Chart dimensions
  const width = 600;
  const height = 200;
  const padX = 48;
  const padY = 24;
  const padBottom = 32;
  const chartW = width - padX * 2;
  const chartH = height - padY - padBottom;

  // Calculate scales
  const allValues = data.flatMap((d) => [d.rlturn, d.benchmark]);
  const minVal = Math.floor(Math.min(...allValues) - 0.5);
  const maxVal = Math.ceil(Math.max(...allValues) + 0.5);
  const range = maxVal - minVal || 1;

  const getX = (i: number) => padX + (i / (data.length - 1)) * chartW;
  const getY = (v: number) => padY + chartH - ((v - minVal) / range) * chartH;

  const makePath = (key: "rlturn" | "benchmark") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d[key])}`).join(" ");

  // Y-axis ticks
  const yTicks = Array.from({ length: 5 }, (_, i) => minVal + (range / 4) * i);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * width;

      let closest = 0;
      let closestDist = Infinity;
      for (let i = 0; i < data.length; i++) {
        const dist = Math.abs(getX(i) - mouseX);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      }
      setHoveredIndex(closest);
    },
    [data.length, width],
  );

  const hoveredPoint = hoveredIndex !== null ? data[hoveredIndex] : null;

  // Tooltip position
  const tooltipX = hoveredIndex !== null ? getX(hoveredIndex) : 0;
  const tooltipLeft = (tooltipX / width) * 100;
  const flipTooltip = tooltipLeft > 65;

  return (
    <div className="border border-[var(--border)] rounded-[12px] p-5 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Asset Pill Tabs */}
          <div className="inline-flex bg-[var(--background-secondary)] rounded-full p-1">
            <button
              onClick={() => setActiveAsset("xrp")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs transition-all ${
                isXrp
                  ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Image src="/xrp.svg" alt="XRP" width={16} height={16} className="w-4 h-4" />
              XRP
            </button>
            <button
              onClick={() => setActiveAsset("rlusd")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs transition-all ${
                !isXrp
                  ? "bg-white shadow-sm font-semibold text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Image src="/rlusd.svg" alt="RLUSD" width={16} height={16} className="w-4 h-4" />
              RLUSD
            </button>
          </div>
          <span className="text-sm font-semibold font-mono">{currentApy}% APY</span>
        </div>

        {/* Period Tabs */}
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
                {tick.toFixed(1)}%
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {data.map((d, i) => (
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

          {/* Benchmark line (purple) */}
          <path
            d={makePath("benchmark")}
            fill="none"
            stroke="#A855F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* RLTURN line (orange) */}
          <path
            d={makePath("rlturn")}
            fill="none"
            stroke="#F97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {data.map((d, i) => (
            <g key={i}>
              <circle cx={getX(i)} cy={getY(d.rlturn)} r="3" fill="#F97316" />
              <circle cx={getX(i)} cy={getY(d.benchmark)} r="2.5" fill="#A855F7" />
            </g>
          ))}

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
              <circle cx={getX(hoveredIndex)} cy={getY(hoveredPoint.rlturn)} r="5" fill="#F97316" stroke="white" strokeWidth="2" />
              <circle cx={getX(hoveredIndex)} cy={getY(hoveredPoint.benchmark)} r="4.5" fill="#A855F7" stroke="white" strokeWidth="2" />
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
            <div className="bg-white border border-[var(--border)] rounded-[12px] shadow-lg p-4 min-w-[180px]">
              <div className="flex items-center justify-between gap-6 mb-3">
                <span className="text-xs font-semibold">APY</span>
                <span className="text-xs text-[var(--text-tertiary)]">{hoveredPoint.date}</span>
              </div>

              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span className="text-xs font-medium">RLTURN</span>
                </div>
                <span className="text-xs font-semibold font-mono">{hoveredPoint.rlturn}%</span>
              </div>

              <div className="border-t border-[var(--border)] my-2" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                  <span className="text-xs font-medium">USD Benchmark</span>
                </div>
                <span className="text-xs font-semibold font-mono">{hoveredPoint.benchmark}%</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-[#F97316] rounded-full" />
          <span className="text-xs text-[var(--text-secondary)]">RLTURN APY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-[#A855F7] rounded-full" />
          <span className="text-xs text-[var(--text-secondary)]">USD Benchmark Rate</span>
        </div>
      </div>
    </div>
  );
}
