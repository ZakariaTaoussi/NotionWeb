import { CTASection } from "@/components/CTASection";
import { CustomerReviews } from "@/components/CustomerReviews";
import { FeaturedTemplates } from "@/components/FeaturedTemplates";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarketplaceLinks } from "@/components/MarketplaceLinks";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { externalLinks } from "@/lib/links";

const services = [
  {
    title: "Custom Notion Systems",
    text: "I design complete Notion workspaces from scratch based on your business workflow.",
    bullets: [
      "Workspace architecture",
      "Databases and relations",
      "Dashboards and formulas",
      "Clean business workflows",
    ],
    cta: "Book a Call",
    href: externalLinks.bookCall,
  },
  {
    title: "Ready-to-Use Templates",
    text: "Download premium Notion templates built for real business operations.",
    bullets: [
      "Instant access",
      "Easy to customize",
      "Built for professionals",
      "Practical dashboards",
    ],
    cta: "View Marketplace",
    href: externalLinks.notionMarketplace,
  },
  {
    title: "Notion Fixes & Coaching",
    text: "I help you improve, clean, and optimize your existing Notion workspace.",
    bullets: [
      "Fix broken databases",
      "Improve dashboards",
      "Simplify workflows",
      "Learn how to use Notion better",
    ],
    cta: "Book a Session",
    href: externalLinks.bookCall,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFFFF] text-[#111827]">
      <Navbar />
      <main className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAFB_42%,#FFFFFF_100%)]" />
        <Hero />

        <section id="services" className="px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="How I Can Help You"
              description="Simple, structured Notion systems designed to organize your work and save time."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <FeaturedTemplates />
        <StatsSection />
        <CustomerReviews />
        <MarketplaceLinks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
