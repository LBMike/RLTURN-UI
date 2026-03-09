"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, ExternalLink } from "lucide-react";

interface Wallet {
  label: string;
  address: string;
  link: string;
}

interface CollateralWalletsProps {
  wallets: Wallet[];
  totalWallets: number;
}

const PAGE_SIZE = 5;

export function CollateralWallets({ wallets, totalWallets }: CollateralWalletsProps) {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(wallets.length / PAGE_SIZE);
  const visibleWallets = wallets.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="mt-4 border border-[var(--border)] rounded-[12px]">
      {/* Toggle Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-sm hover:bg-[var(--background-secondary)] transition-colors rounded-[12px]"
      >
        <span className="text-[var(--text-secondary)]">
          Custody Wallets ({totalWallets})
        </span>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-[var(--text-tertiary)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--text-tertiary)]" />
        )}
      </button>

      {/* Wallet List */}
      {expanded && (
        <div className="px-4 pb-4">
          <div className="space-y-2">
            {visibleWallets.map((wallet) => (
              <a
                key={wallet.address}
                href={wallet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors group"
              >
                <div>
                  <p className="text-sm font-medium">{wallet.label}</p>
                  <p className="text-xs text-[var(--text-tertiary)] font-mono mt-0.5">
                    {wallet.address}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-[var(--border)]">
              <button
                onClick={() => setPage(Math.max(0, page - 1))}
                disabled={page === 0}
                className="px-3 py-1 text-xs text-[var(--text-secondary)] disabled:opacity-30 hover:text-[var(--text-primary)] transition-colors"
              >
                Previous
              </button>
              <span className="text-xs text-[var(--text-tertiary)]">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                disabled={page === totalPages - 1}
                className="px-3 py-1 text-xs text-[var(--text-secondary)] disabled:opacity-30 hover:text-[var(--text-primary)] transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
