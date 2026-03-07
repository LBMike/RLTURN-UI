'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Fingerprint, MessageCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.webp"
              alt="RLTURN"
              width={48}
              height={48}
              priority
            />
            <span className="text-[22px] font-bold tracking-tight text-[#0F172A]">
              RLTURN
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-[#0F172A]">Log In</h1>
          <p className="mt-2 text-sm text-[#475569]">
            Please enter your email to log in to your account
          </p>
        </div>

        {/* Email Form */}
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#0F172A] mb-2"
          >
            Email
          </label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none"
            />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full h-12 pl-10 pr-4 border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#0085FF] focus:ring-1 focus:ring-[#0085FF]"
            />
          </div>

          <button
            type="button"
            className="mt-4 w-full h-12 bg-[#23292F] text-white rounded-full text-sm font-semibold transition-colors hover:bg-[#1a1f24] active:bg-[#111518] cursor-pointer"
          >
            Send Code
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E2E8F0]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs text-[#94A3B8]">Or</span>
          </div>
        </div>

        {/* Passkey */}
        <button
          type="button"
          className="w-full h-12 flex items-center justify-center gap-2 border border-[#E2E8F0] rounded-full text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[#F8FAFC] active:bg-[#F1F5F9] cursor-pointer"
        >
          <Fingerprint size={18} />
          Log in with Passkey
        </button>

        {/* Social Login */}
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="flex-1 h-12 flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] rounded-full text-sm font-semibold transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
          >
            <MessageCircle size={18} />
            Kakao
          </button>
          <button
            type="button"
            className="flex-1 h-12 flex items-center justify-center gap-1.5 bg-[#06C755] text-white rounded-full text-sm font-semibold transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 5.82 2 10.5c0 3.34 2.55 6.27 6.36 7.65-.09.78-.32 2.82-.37 3.27-.06.56.2.55.43.4.17-.12 2.75-1.87 3.87-2.63.56.08 1.13.12 1.71.12 5.52 0 10-3.82 10-8.5S17.52 2 12 2Z"
                fill="currentColor"
              />
            </svg>
            LINE
          </button>
        </div>

        {/* Create Account */}
        <div className="mt-6 text-center">
          <Link
            href="/register"
            className="text-sm font-medium text-[#0085FF] hover:underline"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
}
