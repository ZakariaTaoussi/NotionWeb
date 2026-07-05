"use client";

import { motion } from "motion/react";

import { externalLinks } from "@/lib/links";

const links = [
  {
    title: "Notion Marketplace",
    description: "Browse Ziko_Notion templates directly on Notion.",
    href: externalLinks.notionMarketplace,
  },
  {
    title: "Gumroad Marketplace",
    description: "Find downloadable templates and product updates.",
    href: externalLinks.gumroad,
  },
  {
    title: "YouTube Channel",
    description: "Watch Notion builds, walkthroughs, and workflow ideas.",
    href: externalLinks.youtube,
  },
];

export function MarketplaceLinks() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C7E8F]">
            Marketplaces
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Find Ziko_Notion Online
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-[#D4DDE2] bg-white/78 p-6 shadow-[0_20px_60px_rgba(92,126,143,0.13)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-[#111827]">
                {link.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                {link.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[#5C7E8F]">
                Visit
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
