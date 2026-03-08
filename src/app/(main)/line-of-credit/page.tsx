"use client";

import { useState } from "react";
import { Clock, Info, ArrowRight } from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { BorrowSheet } from "@/components/borrow/BorrowSheet";
import { BorrowConfirmSheet } from "@/components/borrow/BorrowConfirmSheet";

export default function LineOfCreditPage() {
  const loc = mockData.lineOfCredit;
  const [borrowOpen, setBorrowOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [borrowAmount, setBorrowAmount] = useState("");

  return (
    <div className="max-w-[960px]">
      <BorrowSheet
        open={borrowOpen}
        onClose={() => setBorrowOpen(false)}
        onContinue={(amount) => {
          setBorrowAmount(amount);
          setBorrowOpen(false);
          setConfirmOpen(true);
        }}
      />
      <BorrowConfirmSheet
        open={confirmOpen}
        amount={borrowAmount}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => setConfirmOpen(false)}
      />

      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[2.25rem] font-bold leading-tight text-text-primary">
          Line of Credit
        </h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="History"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
          >
            <Clock size={20} />
          </button>
          <button
            type="button"
            onClick={() => setBorrowOpen(true)}
            className="h-12 rounded-full bg-primary px-8 text-[0.875rem] font-semibold text-white transition-colors hover:brightness-110"
          >
            Start Borrowing
          </button>
        </div>
      </div>

      {/* Currently Borrowing */}
      <div className="mt-8 text-center">
        <p className="text-sm text-text-secondary">Currently Borrowing</p>
        <p className="mt-1 font-mono text-[3rem] font-bold leading-tight text-text-primary">
          ${loc.currentlyBorrowing}
        </p>
      </div>

      {/* Borrowable Banner */}
      <div className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-success-bg py-3">
        <span className="text-sm font-medium text-success">
          You can borrow ${loc.borrowableMore} more
        </span>
        <Info size={16} className="text-success" />
      </div>

      {/* Cards section */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Balance Details Card */}
        <div className="rounded-md border border-border bg-background p-6">
          <h3 className="text-lg font-semibold text-text-primary">
            Balance Details
          </h3>

          <div className="mt-4 divide-y divide-border">
            <div className="flex items-center justify-between py-3">
              <span className="text-[0.9375rem] text-text-secondary">
                Interest Accrued
              </span>
              <span className="font-mono text-[0.9375rem] font-medium text-text-primary">
                ${loc.interestAccrued}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[0.9375rem] text-text-secondary">
                Principal
              </span>
              <span className="font-mono text-[0.9375rem] font-medium text-text-primary">
                ${loc.principal}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[0.9375rem] text-text-secondary">
                Capital Charge (Estimated)
              </span>
              <span className="font-mono text-[0.9375rem] font-medium text-text-primary">
                ${loc.capitalCharge}
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-text-tertiary">
            A capital charge will be applied to your loan balance a year after
            you open your line of credit, or when you fully repay your loan. The
            capital charge is 2% assessed on your max outstanding balance within
            a year.
          </p>

          <button
            type="button"
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            Learn More About Your Capital Charge
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Right column: Terms + My Collateral */}
        <div className="flex flex-col gap-6">
          {/* Terms Card */}
          <div className="rounded-md border border-border bg-background p-6">
            <h3 className="text-lg font-semibold text-text-primary">Terms</h3>

            <div className="mt-4 divide-y divide-border">
              <div className="flex items-center justify-between py-3">
                <span className="inline-flex items-center gap-1.5 text-[0.9375rem] text-text-secondary">
                  Annual Interest Rate
                  <Info size={14} className="text-text-tertiary" />
                </span>
                <span className="font-mono text-[0.9375rem] font-medium text-text-primary">
                  {loc.annualInterestRate}%
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-[0.9375rem] text-text-secondary">
                  Next Rate Update
                </span>
                <span className="font-mono text-[0.9375rem] font-medium text-text-primary">
                  {loc.nextRateUpdate}
                </span>
              </div>
            </div>
          </div>

          {/* My Collateral Card */}
          <div className="rounded-md border border-border bg-background p-6">
            <h3 className="text-lg font-semibold text-text-primary">
              My Collateral
            </h3>

            <div className="mt-4 divide-y divide-border">
              <div className="flex items-center justify-between py-3">
                <span className="text-[0.9375rem] text-text-secondary">
                  Collateral Value
                </span>
                <div className="text-right">
                  <p className="font-mono text-[0.9375rem] font-semibold text-text-primary">
                    {loc.collateralXrp} XRP
                  </p>
                  <p className="font-mono text-sm text-text-tertiary">
                    ${loc.collateralValue}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-[0.9375rem] text-text-secondary">
                  LTV Ratio
                </span>
                <div className="text-right">
                  <p className="font-mono text-[0.9375rem] font-semibold text-text-primary">
                    {loc.ltvRatio}%
                  </p>
                  <p className="text-sm text-text-tertiary">
                    Liquidation at {loc.liquidationAt}%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="inline-flex items-center gap-1.5 text-[0.9375rem] text-text-secondary">
                  Liquidation Protection
                  <Info size={14} className="text-text-tertiary" />
                </span>
                <span className="text-[0.9375rem] font-semibold text-success">
                  {loc.liquidationProtection}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
