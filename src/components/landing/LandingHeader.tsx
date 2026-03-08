"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-5">
      <div
        className="mx-auto flex h-[54px] max-w-[calc(100%-8px)] items-center justify-between rounded-[16px] bg-white/[0.08] px-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.45)] backdrop-blur-xl md:h-[58px] md:px-6"
        style={{ boxShadow: "0 18px 45px -34px rgba(15,23,42,0.45)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="RLTURN Logo"
            width={40}
            height={40}
            className="h-8 w-8 rounded-full md:h-9 md:w-9"
            priority
          />
          <span className="text-base font-semibold tracking-[0.02em] text-white md:text-lg">
            RLTURN
          </span>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-white/72 transition-colors hover:text-white sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="inline-flex h-10 items-center rounded-[12px] bg-white px-4 text-sm font-semibold text-primary-dark transition-colors hover:bg-white/92 md:px-5"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
