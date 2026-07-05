import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TemplatesCatalog } from "@/components/TemplatesCatalog";
import { externalLinks } from "@/lib/links";

export const metadata: Metadata = {
  title: "All Templates",
  description:
    "Premium Notion templates for finance, real estate, agencies, founders, consultants, and business operators.",
};

export default function TemplatesPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#111827]">
      <Navbar />
      <main className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(92,126,143,0.18),transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#F7FAFB_44%,#FFFFFF_100%)]" />
        <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C7E8F]">
              Marketplace
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#111827] sm:text-6xl">
              All Templates
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4B5563]">
              Premium Notion templates for finance, real estate, agencies,
              founders, consultants, and business operators.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={externalLinks.notionMarketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#5C7E8F] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_40px_rgba(92,126,143,0.24)] transition hover:-translate-y-0.5 hover:bg-[#4d6d7c]"
              >
                Notion Marketplace
              </a>
              <a
                href={externalLinks.gumroad}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#D4DDE2] bg-white/82 px-5 py-3 text-center text-sm font-semibold text-[#5C7E8F] shadow-[0_12px_34px_rgba(92,126,143,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#5C7E8F]"
              >
                Gumroad Marketplace
              </a>
            </div>
          </div>
        </section>
        <TemplatesCatalog />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
