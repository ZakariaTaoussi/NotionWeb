"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const reviews = [
  {
    src: "/reviews/notion-marketplace-review-1.png",
    title: "Exactly what I was looking for",
    date: "Jul 5, 2026",
  },
  {
    src: "/reviews/notion-marketplace-review-2.png",
    title: "Great and detailed",
    date: "Jun 24, 2026",
  },
  {
    src: "/reviews/notion-marketplace-review-3.png",
    title: "5-star Notion Marketplace review",
    date: "Jun 18, 2026",
  },
];

function ReviewImage({ src, title }: { src: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="grid aspect-[16/10] w-full place-items-center rounded-2xl border border-[#D4DDE2] bg-[radial-gradient(circle_at_top_left,rgba(92,126,143,0.18),transparent_36%),#FFFFFF] text-center">
        <div>
          <p className="text-sm font-semibold text-[#111827]">
            Notion Marketplace
          </p>
          <p className="mt-2 text-xs text-[#4B5563]">Review screenshot</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#D4DDE2] bg-white">
      <Image
        src={src}
        alt={`${title} screenshot`}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export function CustomerReviews() {
  return (
    <section id="reviews" className="scroll-mt-28 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C7E8F]">
            Customers Reviews
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Trusted by Notion Marketplace Customers
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4B5563]">
            Screenshots from real Notion Marketplace reviews and customer
            feedback.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <motion.article
              key={review.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[#D4DDE2] bg-white/82 p-4 shadow-[0_20px_60px_rgba(92,126,143,0.13)] backdrop-blur-xl"
            >
              <ReviewImage src={review.src} title={review.title} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#111827]">
                    {review.title}
                  </p>
                  <p className="mt-1 text-sm text-[#4B5563]">{review.date}</p>
                </div>
                <p className="text-sm tracking-[0.18em] text-[#111827]">
                  *****
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
