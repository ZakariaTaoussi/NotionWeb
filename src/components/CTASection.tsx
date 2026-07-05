"use client";

import { motion } from "motion/react";

import { externalLinks } from "@/lib/links";

export function CTASection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-5xl rounded-3xl border border-[#D4DDE2] bg-[radial-gradient(circle_at_top_left,rgba(92,126,143,0.22),transparent_34%),rgba(255,255,255,0.84)] px-6 py-14 text-center shadow-[0_30px_100px_rgba(92,126,143,0.18)] backdrop-blur-xl sm:px-10"
      >
        <h2 className="text-3xl font-semibold text-[#111827] sm:text-4xl">
          Ready to Build a Better Notion Workspace?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5563]">
          Choose a ready-made template or book a call for a custom Notion
          system.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={externalLinks.bookCall}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#5C7E8F] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4d6d7c]"
            aria-label="Book a call with Ziko_Notion"
          >
            Book a Call
          </a>
          <a
            href={externalLinks.notionMarketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#D4DDE2] bg-white px-5 py-3 text-sm font-semibold text-[#5C7E8F] transition hover:-translate-y-0.5 hover:border-[#5C7E8F]"
          >
            View Notion Marketplace
          </a>
        </div>
      </motion.div>
    </section>
  );
}
