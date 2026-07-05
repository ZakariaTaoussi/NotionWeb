"use client";

import { motion } from "motion/react";

type ServiceCardProps = {
  title: string;
  text: string;
  bullets: string[];
  cta: string;
  href: string;
};

export function ServiceCard({
  title,
  text,
  bullets,
  cta,
  href,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-2xl border border-[#D4DDE2] bg-white/78 p-6 shadow-[0_20px_60px_rgba(92,126,143,0.13)] backdrop-blur-xl"
    >
      <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#5C7E8F] to-[#D4DDE2]" />
      <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#4B5563]">{text}</p>
      <ul className="mt-5 flex-1 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm text-[#111827]">
            <span className="mt-1.5 size-2 rounded-full bg-[#5C7E8F]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex w-fit rounded-xl bg-[#5C7E8F] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4d6d7c]"
      >
        {cta}
      </a>
    </motion.article>
  );
}
