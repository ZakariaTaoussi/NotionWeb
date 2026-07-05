"use client";

import { useMemo, useState } from "react";

import { FilterTabs } from "@/components/FilterTabs";
import { TemplateCard } from "@/components/TemplateCard";
import { templates, type TemplateCategory } from "@/data/templates";

export function TemplatesCatalog() {
  const [activeCategory, setActiveCategory] = useState<
    TemplateCategory | "All"
  >("All");

  const visibleTemplates = useMemo(() => {
    if (activeCategory === "All") {
      return templates;
    }

    return templates.filter((template) => template.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-6 lg:px-8">
        <FilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <section className="px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
    </>
  );
}
