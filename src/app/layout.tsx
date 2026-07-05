import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ziko_Notion - Professional Notion Templates & Workspaces",
    template: "%s | Ziko_Notion",
  },
  description:
    "Premium Notion templates and custom workspaces for businesses, creators, agencies, investors, consultants, and operators.",
  keywords: [
    "Notion templates",
    "Notion systems",
    "Notion workspace",
    "business operations",
    "Ziko_Notion",
  ],
  authors: [{ name: "Ziko_Notion" }],
  creator: "Ziko_Notion",
  openGraph: {
    title: "Ziko_Notion - Professional Notion Templates & Workspaces",
    description:
      "Premium Notion templates and custom workspaces for businesses, creators, agencies, investors, consultants, and operators.",
    url: "https://zikonotion.com",
    siteName: "Ziko_Notion",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
