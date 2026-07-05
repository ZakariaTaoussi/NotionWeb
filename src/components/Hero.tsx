"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { NotionLogo } from "@/components/NotionLogo";
import { externalLinks } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(92,126,143,0.22),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(212,221,226,0.7),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-5 flex justify-center"
        >
          <NotionLogo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex rounded-full border border-[#D4DDE2] bg-white/76 px-4 py-2 text-sm font-semibold text-[#5C7E8F] shadow-[0_14px_36px_rgba(92,126,143,0.12)] backdrop-blur-xl"
        >
          Premium Notion Templates & Custom Workspaces
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-tight text-[#111827] sm:text-6xl"
        >
          Build Professional{" "}
          <span className="bg-gradient-to-r from-[#5C7E8F] via-[#A2A2A2] to-[#D4DDE2] bg-clip-text text-transparent">
            Notion Systems
          </span>{" "}
          for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4B5563]"
        >
          I am Ziko_Notion, a Notion creator building clean, practical, and
          professional workspaces for businesses, creators, agencies,
          investors, and operators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/templates"
            className="rounded-xl bg-[#5C7E8F] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_44px_rgba(92,126,143,0.26)] transition hover:-translate-y-0.5 hover:bg-[#4d6d7c]"
          >
            View Templates
          </Link>
          <a
            href={externalLinks.bookCall}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#D4DDE2] bg-white/84 px-5 py-3 text-center text-sm font-semibold text-[#5C7E8F] shadow-[0_12px_34px_rgba(92,126,143,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#5C7E8F]"
          >
            Book a Call
          </a>
          <a
            href={externalLinks.notionMarketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#D4DDE2] bg-white/84 px-5 py-3 text-center text-sm font-semibold text-[#5C7E8F] shadow-[0_12px_34px_rgba(92,126,143,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#5C7E8F]"
          >
            Visit Notion Marketplace
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.36, ease: "easeOut" }}
          className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3"
        >
          {[
            "30+ premium templates",
            "100+ free templates",
            "100+ customers",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D4DDE2] bg-white/76 px-4 py-3 text-sm font-semibold text-[#4B5563] shadow-[0_12px_34px_rgba(92,126,143,0.1)] backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
