import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppSidebar from "@/components/layout/AppSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main content */}
      <main className="ml-60 flex flex-1">
        {/* Content area */}
        <div className="flex-1 p-8">{children}</div>

        {/* Right promotional banner */}
        <aside className="hidden w-[280px] shrink-0 p-8 pl-0 xl:block">
          <div className="rounded-md border border-border bg-background p-4">
            <h3 className="text-sm font-semibold text-text-primary">
              Earn 6.5% yield on your RLUSD
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary">
              Earn up to 6.5% yield on your RLUSD by funding XRP-backed loans on
              RLTURN. Withdraw instantly at any time.
            </p>
            <Link
              href="/savings"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-hover transition-colors"
            >
              Get Started
              <ArrowRight size={14} />
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}
