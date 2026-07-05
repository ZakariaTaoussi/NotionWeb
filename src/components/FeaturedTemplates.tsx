import Link from "next/link";

import { templates } from "@/data/templates";
import { SectionHeader } from "./SectionHeader";
import { TemplateCard } from "./TemplateCard";

export function FeaturedTemplates() {
  const featuredTemplates = templates.filter((template) => template.featured);

  return (
    <section id="templates" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeader
            title="Featured Templates"
            description="Premium Notion systems built for business workflows."
          />
          <Link
            href="/templates"
            className="w-fit rounded-xl border border-[#D4DDE2] bg-white/80 px-4 py-2 text-sm font-semibold text-[#5C7E8F] shadow-[0_12px_34px_rgba(92,126,143,0.12)] transition hover:-translate-y-0.5 hover:border-[#5C7E8F]"
          >
            View all templates
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
