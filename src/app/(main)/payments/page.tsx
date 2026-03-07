"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Clock,
  Filter,
  Search,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "deposit",
    label: "XRP Deposit",
    amount: "+500.00 XRP",
    usd: "+$1,170.00",
    date: "Mar 7, 2026",
    status: "Completed",
  },
  {
    id: 2,
    type: "borrow",
    label: "RLUSD Borrowed",
    amount: "+$1,500.00",
    usd: "",
    date: "Mar 5, 2026",
    status: "Completed",
  },
  {
    id: 3,
    type: "withdrawal",
    label: "RLUSD Withdrawal",
    amount: "-$800.00",
    usd: "",
    date: "Mar 3, 2026",
    status: "Completed",
  },
  {
    id: 4,
    type: "interest",
    label: "Interest Payment",
    amount: "-$22.50",
    usd: "",
    date: "Mar 1, 2026",
    status: "Completed",
  },
  {
    id: 5,
    type: "deposit",
    label: "XRP Deposit",
    amount: "+1,000.00 XRP",
    usd: "+$2,340.00",
    date: "Feb 28, 2026",
    status: "Completed",
  },
  {
    id: 6,
    type: "savings",
    label: "Savings Deposit",
    amount: "+$500.00",
    usd: "",
    date: "Feb 25, 2026",
    status: "Completed",
  },
  {
    id: 7,
    type: "repayment",
    label: "Loan Repayment",
    amount: "-$200.00",
    usd: "",
    date: "Feb 20, 2026",
    status: "Completed",
  },
];

export default function PaymentsPage() {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Payments</h1>
        <div className="flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border hover:bg-[#f8fafc]">
            <Filter className="h-5 w-5 text-[#475569]" />
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-full border hover:bg-[#f8fafc]">
            <Search className="h-5 w-5 text-[#475569]" />
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-[12px] border">
        {transactions.map((tx, i) => (
          <div
            key={tx.id}
            className={`flex items-center justify-between px-6 py-4 ${
              i !== transactions.length - 1 ? "border-b" : ""
            } hover:bg-[#f8fafc] transition-colors`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  tx.type === "deposit" || tx.type === "savings"
                    ? "bg-[#f0fdf4]"
                    : tx.type === "borrow"
                      ? "bg-[#eff6ff]"
                      : "bg-[#f8fafc]"
                }`}
              >
                {tx.type === "deposit" || tx.type === "savings" ? (
                  <ArrowDownLeft
                    className="h-5 w-5 text-[#22c55e]"
                  />
                ) : tx.type === "borrow" ? (
                  <ArrowDownLeft className="h-5 w-5 text-[#0085ff]" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-[#475569]" />
                )}
              </div>
              <div>
                <p className="font-medium">{tx.label}</p>
                <p className="text-sm text-[#94a3b8]">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-mono font-medium ${
                  tx.amount.startsWith("+")
                    ? "text-[#22c55e]"
                    : "text-[#0f172a]"
                }`}
              >
                {tx.amount}
              </p>
              {tx.usd && (
                <p className="text-sm text-[#94a3b8] font-mono">{tx.usd}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#94a3b8]">
        <Clock className="h-4 w-4" />
        <span>Showing recent transactions</span>
      </div>
    </div>
  );
}
