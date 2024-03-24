import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "next-themes";
import siteConfig from "@/site.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    "A Next.js 14 Blog Starter using Contentlayer and TailwindCSS, built by @chrisjarling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-md">
          <ThemeProvider attribute="class" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
