"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

import type { TemplateProduct } from "@/data/templates";
import { externalLinks } from "@/lib/links";

type TemplateCardProps = {
  template: TemplateProduct;
};

function TemplateImage({ template }: TemplateCardProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="grid size-[200px] place-items-center rounded-2xl border border-[#D4DDE2] bg-[radial-gradient(circle_at_top_left,rgba(92,126,143,0.22),transparent_38%),#FFFFFF] text-center shadow-inner">
        <div>
          <p className="text-sm font-semibold text-[#5C7E8F]">Ziko_Notion</p>
          <p className="mt-2 px-5 text-xs leading-5 text-[#4B5563]">
            Template preview coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative size-[200px] overflow-hidden rounded-2xl border border-[#D4DDE2] bg-white">
      <Image
        src={template.image}
        alt={`${template.title} thumbnail`}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="200px"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export function TemplateCard({ template }: TemplateCardProps) {
  const hasDirectLink = template.link && template.link !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-2xl border border-[#D4DDE2] bg-white/82 p-5 shadow-[0_22px_70px_rgba(92,126,143,0.14)] backdrop-blur-xl"
    >
      <div className="flex justify-center">
        <TemplateImage template={template} />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <span className="w-fit rounded-full border border-[#D4DDE2] bg-[#D4DDE2]/40 px-3 py-1 text-xs font-semibold text-[#5C7E8F]">
          {template.category}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-[#111827]">
          {template.title}
        </h3>
        <p className="mt-3 line-clamp-5 flex-1 text-sm leading-6 text-[#4B5563]">
          {template.description}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <p className="text-2xl font-semibold text-[#111827]">
            ${template.price}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={hasDirectLink ? template.link : externalLinks.notionMarketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#5C7E8F] px-4 py-2 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4d6d7c]"
              aria-label={`Get ${template.title} now`}
            >
              Get it Now
            </a>
            {!hasDirectLink ? (
              <a
                href={externalLinks.notionMarketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#D4DDE2] bg-white px-4 py-2 text-center text-sm font-semibold text-[#5C7E8F] transition hover:-translate-y-0.5 hover:border-[#5C7E8F]"
              >
                View on Notion Marketplace
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
