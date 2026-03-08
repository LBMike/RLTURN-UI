"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
        {/* Join RLTURN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-[2.25rem] font-bold md:text-[2.75rem]">
            Join RLTURN Today
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/60">
            Access the fastest and most secure XRP-backed neobank system.
          </p>

          {/* Get Started */}
          <a
            href="/register"
            className="mt-10 inline-flex h-14 items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Get started
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>

          {/* Divider */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-16 bg-white/20" />
            <span className="text-sm text-white/40">or download the app</span>
            <div className="h-px w-16 bg-white/20" />
          </div>

          {/* App Store Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              className="inline-flex h-[52px] items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-5 transition-colors hover:bg-white/10"
            >
              <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
                <path d="M16.52 12.26c-.03-3.19 2.6-4.72 2.72-4.8-1.48-2.16-3.78-2.46-4.6-2.5-1.96-.2-3.82 1.15-4.82 1.15-.99 0-2.53-1.12-4.15-1.09-2.14.03-4.11 1.24-5.21 3.16-2.22 3.86-.57 9.57 1.6 12.7 1.06 1.53 2.32 3.25 3.98 3.19 1.6-.06 2.2-1.03 4.13-1.03 1.93 0 2.48 1.03 4.17.99 1.72-.03 2.8-1.56 3.85-3.1 1.21-1.78 1.71-3.5 1.74-3.59-.04-.02-3.34-1.28-3.37-5.08z" />
                <path d="M13.38 3.32c.88-1.07 1.47-2.55 1.31-4.03-1.27.05-2.8.84-3.71 1.91-.81.94-1.52 2.44-1.33 3.88 1.42.11 2.86-.72 3.73-1.76z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-white/60">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex h-[52px] items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-5 transition-colors hover:bg-white/10"
            >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path d="M1.22.57L11.53 11 1.22 21.43c-.14-.2-.22-.53-.22-.93V1.5c0-.4.08-.73.22-.93z" fill="#4285F4" />
                <path d="M15.54 7.24L11.53 11l4.01 3.76 4.53-2.54c.82-.46.82-1.21 0-1.67l-4.53-2.54-.03.23.03-.23z" fill="#FBBC04" />
                <path d="M1.22.57L11.53 11 15.54 7.24 2.87.11C2.3-.21 1.7-.02 1.22.57z" fill="#34A853" />
                <path d="M1.22 21.43L15.54 14.76 11.53 11 1.22 21.43z" fill="#EA4335" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-white/60">GET IT ON</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-24 flex flex-col items-center text-center"
        >
          <h3 className="text-[1.875rem] font-bold">Subscribe for Updates</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex w-full max-w-md items-center rounded-full border border-white/20 bg-white/5 p-1.5"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-5 text-sm text-white placeholder-white/40 outline-none"
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-white px-6 text-sm font-semibold text-[#0F172A] transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
