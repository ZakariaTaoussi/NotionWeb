import { externalLinks } from "@/lib/links";

export type TemplateCategory =
  | "Finance & Advisory"
  | "Real Estate & M&A"
  | "Agency & Consulting"
  | "Founder & CRM"
  | "Business Operations";

export type TemplateProduct = {
  id: string;
  title: string;
  category: TemplateCategory;
  price: number;
  image: string;
  link: string;
  featured: boolean;
  description: string;
};

export const templateCategories: TemplateCategory[] = [
  "Finance & Advisory",
  "Real Estate & M&A",
  "Agency & Consulting",
  "Founder & CRM",
  "Business Operations",
];

export const templates: TemplateProduct[] = [
  {
    id: "financial-advisory-firm-os",
    title: "Financial Advisory Firm OS",
    category: "Finance & Advisory",
    price: 149,
    image: "/templates/financial-advisory-firm-os.png",
    link: externalLinks.Financial_Advisory_Firm_OS,
    featured: true,
    description:
      "Run your entire financial advisory firm in one powerful Notion workspace. Manage clients, financial plans, meetings, compliance, revenue, and your sales pipeline with connected databases, automated dashboards, and smart workflows built for advisors, RIAs, and wealth managers.",
  },
  {
    id: "real-estate-investor-os",
    title: "Real Estate Investor OS",
    category: "Real Estate & M&A",
    price: 129,
    image: "/templates/real-estate-investor-os.png",
    link: externalLinks.Real_Estate_Investor_OS,
    featured: true,
    description:
      "A Real Estate Investor OS designed to analyze property deals, calculate ROI, track cash flow, and manage your investment portfolio in one system. Make smarter investment decisions and scale your real estate portfolio efficiently.",
  },
  {
    id: "social-media-marketing-agency-os",
    title: "Social Media Marketing Agency OS",
    category: "Agency & Consulting",
    price: 129,
    image: "/templates/social-media-marketing-agency-os.png",
    link: externalLinks.Social_Media_Marketing_Agency_OS,
    featured: true,
    description:
      "A complete Social Media Marketing Agency OS for managing clients, content, tasks, and performance in one place. Plan, create, publish, and analyze your social media workflow with a structured, easy-to-use system.",
  },
  {
    id: "solopreneur-os",
    title: "Solopreneur OS",
    category: "Founder & CRM",
    price: 99,
    image: "/templates/solopreneur-os.png",
    link: externalLinks.Solopreneur_OS,
    featured: false,
    description:
      "Solopreneur OS is an all-in-one Notion system designed to help you turn ideas into revenue. Manage your idea pipeline, validate business concepts, build MVPs, launch products, and track growth-all in one structured workflow.",
  },
  {
    id: "accounting-firm-os",
    title: "Accounting Firm OS",
    category: "Finance & Advisory",
    price: 99,
    image: "/templates/accounting-firm-os.png",
    link: externalLinks.Accounting_Firm_OS,
    featured: false,
    description:
      "All-in-one Notion template for accounting firms to manage clients, engagements, invoices, payments, and compliance deadlines. Track cash flow, monitor workload, organize documents, and streamline your accounting workflow with a powerful financial dashboard.",
  },
  {
    id: "fundraising-investor-crm",
    title: "Fundraising & Investor CRM",
    category: "Founder & CRM",
    price: 89,
    image: "/templates/fundraising-investor-crm.png",
    link: externalLinks.Fundraising_Investor_CRM,
    featured: false,
    description:
      "Fundraising & Investor CRM is a premium Notion system for founders raising capital. Track your investor pipeline, monitor round progress, manage commitments, and structure your cap table - all in one executive dashboard designed for clarity, momentum, and control.",
  },
  {
    id: "consulting-firm-os",
    title: "Consulting Firm OS",
    category: "Agency & Consulting",
    price: 129,
    image: "/templates/consulting-firm-os.png",
    link: externalLinks.Consulting_Firm_OS,
    featured: false,
    description:
      "Consulting Firm OS is an all-in-one Notion workspace for consultants and agencies. Manage clients, projects, tasks, proposals, meetings, and invoices from one connected system with dashboards, CRM, automation, and financial tracking to streamline operations and grow your business.",
  },
  {
    id: "acquisition-operating-system",
    title: "Acquisition Operating System",
    category: "Real Estate & M&A",
    price: 79,
    image: "/templates/acquisition-operating-system.png",
    link: externalLinks.Acquisition_Operating_System,
    featured: false,
    description:
      "Acquisition Operating System is a professional M&A deal tracker for search funds and private equity. Manage deal flow, underwriting, risk scoring, due diligence, capital structure, and value creation in one structured acquisition dashboard.",
  },
  {
    id: "client-management-crm",
    title: "Client Management CRM",
    category: "Business Operations",
    price: 69,
    image: "/templates/client-management-crm.png",
    link: externalLinks.Client_Management_CRM,
    featured: false,
    description:
      "This template is an all-in-one client management system built in Notion that combines follow-ups, client database, sales pipeline, payments tracking, and smart dashboards into one clean and powerful workspace.",
  },
];
