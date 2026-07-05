"use client";

import { templateCategories, type TemplateCategory } from "@/data/templates";

type FilterTabsProps = {
  activeCategory: TemplateCategory | "All";
  onCategoryChange: (category: TemplateCategory | "All") => void;
};

export function FilterTabs({
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  const categories = ["All", ...templateCategories] as const;

  return (
    <div className="flex flex-wrap gap-3" aria-label="Template categories">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "border-[#5C7E8F] bg-[#5C7E8F] text-white shadow-[0_12px_30px_rgba(92,126,143,0.22)]"
                : "border-[#D4DDE2] bg-white/78 text-[#4B5563] hover:-translate-y-0.5 hover:border-[#5C7E8F] hover:text-[#111827]"
            }`}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
