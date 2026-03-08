"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  TrendingUp,
  Banknote,
  CreditCard,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/savings", label: "Savings", icon: TrendingUp },
  { href: "/borrow", label: "Borrow", icon: Banknote },
  { href: "/line-of-credit", label: "Line of Credit", icon: CreditCard },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-60 flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex items-center gap-3 p-6">
        <Image
          src="/logo.webp"
          alt="RLTURN"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="text-lg font-bold text-primary-dark">RLTURN</span>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-1 flex-col gap-1 px-3">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            pathname === href || pathname.startsWith(href + "/");

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-sm px-4 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-background-secondary font-semibold text-text-primary"
                  : "text-text-secondary hover:bg-background-secondary"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
