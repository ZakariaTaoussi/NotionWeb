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
  metadataBase: new URL("https://ziko-notion.vercel.app"),
  title: {
    default: "Ziko Notion | Premium Notion Templates for Businesses",
    template: "%s | Ziko Notion",
  },
  description:
    "Ziko Notion creates professional Notion templates and business operating systems for agencies, investors, consultants, creators, and modern businesses.",
  keywords: [
    "Ziko Notion",
    "Ziko_Notion",
    "Notion templates",
    "business Notion templates",
    "premium Notion templates",
    "Notion systems",
    "Notion workspace",
    "Notion marketplace",
  ],
  authors: [{ name: "Ziko Notion" }],
  creator: "Ziko Notion",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/templates/notion.png",
    shortcut: "/templates/notion.png",
    apple: "/templates/notion.png",
  },
  openGraph: {
    title: "Ziko Notion | Premium Notion Templates for Businesses",
    description:
      "Ziko Notion creates professional Notion templates and business operating systems for agencies, investors, consultants, creators, and modern businesses.",
    url: "https://ziko-notion.vercel.app",
    siteName: "Ziko Notion",
    images: [
      {
        url: "/templates/notion.png",
        width: 512,
        height: 512,
        alt: "Ziko Notion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ziko Notion | Premium Notion Templates for Businesses",
    description:
      "Ziko Notion creates professional Notion templates and business operating systems for agencies, investors, consultants, creators, and modern businesses.",
    images: ["/templates/notion.png"],
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
