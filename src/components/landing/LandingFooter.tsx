import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Line of Credit", href: "/line-of-credit" },
      { label: "Savings", href: "/savings" },
      { label: "Assets", href: "/assets" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];

export default function LandingFooter() {
  return (
    <footer className="border-t border-[#334155] bg-[#23292F]">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo + Description */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="RLTURN Logo"
                width={32}
                height={32}
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="text-lg font-bold text-white">RLTURN</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
              Institutional-grade XRP-backed lending and savings. Borrow RLUSD,
              earn real yield, and manage your digital assets.
            </p>
          </div>

          {/* Link Columns */}
          <div className="flex flex-wrap gap-16">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-white">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#94A3B8] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#334155] pt-8 md:flex-row">
          <p className="text-xs text-[#64748B]">
            &copy; 2026 RLTURN. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#64748B] transition-colors hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#64748B] transition-colors hover:text-white"
            >
              Discord
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#64748B] transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
