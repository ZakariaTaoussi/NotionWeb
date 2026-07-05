import Link from "next/link";

import { BrandAvatar } from "@/components/BrandAvatar";
import { externalLinks } from "@/lib/links";

const internalLinks = [
  { href: "/templates", label: "Templates" },
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#about", label: "About" },
];

const externalNavLinks = [
  { href: externalLinks.notionMarketplace, label: "Notion Marketplace" },
  { href: externalLinks.gumroad, label: "Gumroad" },
  { href: externalLinks.youtube, label: "YouTube" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D4DDE2]/80 bg-white/78 backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 xl:flex-row xl:items-center xl:justify-between lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <BrandAvatar />
            <span className="text-lg font-semibold tracking-[0.02em] text-[#111827]">
              Ziko_Notion
            </span>
          </Link>
          <a
            href={externalLinks.bookCall}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-[#5C7E8F] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(92,126,143,0.24)] transition hover:-translate-y-0.5 hover:bg-[#4d6d7c] sm:hidden"
            aria-label="Book a call with Ziko_Notion"
          >
            Book a Call
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-[#4B5563] transition hover:bg-[#D4DDE2]/35 hover:text-[#111827]"
            >
              {link.label}
            </Link>
          ))}
          {externalNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-3 py-2 text-sm font-medium text-[#4B5563] transition hover:bg-[#D4DDE2]/35 hover:text-[#111827]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={externalLinks.bookCall}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-[#5C7E8F] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(92,126,143,0.24)] transition hover:-translate-y-0.5 hover:bg-[#4d6d7c] sm:inline-flex"
            aria-label="Book a call with Ziko_Notion"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  );
}
