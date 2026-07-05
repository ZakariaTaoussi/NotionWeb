"use client";

import Image from "next/image";
import { useState } from "react";

export function BrandAvatar() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="grid size-12 place-items-center rounded-2xl border border-[#D4DDE2] bg-white text-sm font-bold text-[#5C7E8F] shadow-[0_12px_30px_rgba(92,126,143,0.16)] transition group-hover:-translate-y-0.5">
        Z
      </span>
    );
  }

  return (
    <span className="relative block size-12 overflow-hidden rounded-2xl border border-[#D4DDE2] bg-white shadow-[0_12px_30px_rgba(92,126,143,0.16)] transition group-hover:-translate-y-0.5">
      <Image
        src="/templates/profile.png"
        alt="Ziko_Notion profile picture"
        fill
        sizes="48px"
        className="object-cover"
        priority
        onError={() => setHasError(true)}
      />
    </span>
  );
}
