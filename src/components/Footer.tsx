import Link from "next/link";

import { externalLinks } from "@/lib/links";

const footerLinks = [
  { href: "/templates", label: "Templates", external: false },
  { href: "/#services", label: "Services", external: false },
  { href: externalLinks.bookCall, label: "Book a Call", external: true },
  {
    href: externalLinks.notionMarketplace,
    label: "Notion Marketplace",
    external: true,
  },
  { href: externalLinks.gumroad, label: "Gumroad Marketplace", external: true },
  { href: externalLinks.youtube, label: "YouTube Channel", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-[#D4DDE2] bg-white/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-[#111827]">Ziko_Notion</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#4B5563]">
            Professional Notion systems for businesses, creators, agencies,
            investors, and operators.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#111827]">Links</p>
          <div className="mt-3 flex flex-col gap-2">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4B5563] transition hover:text-[#5C7E8F]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#4B5563] transition hover:text-[#5C7E8F]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
        <div id="contact">
          <p className="text-sm font-semibold text-[#111827]">Contact</p>
          <a
            href="mailto:zakaria.taoussi03@gmail.com"
            className="mt-3 inline-flex text-sm text-[#4B5563] transition hover:text-[#5C7E8F]"
          >
            zakaria.taoussi03@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-[#D4DDE2] px-5 py-5 text-center text-xs text-[#4B5563]">
        &copy; 2026 Ziko_Notion. All rights reserved.
      </div>
    </footer>
  );
}
