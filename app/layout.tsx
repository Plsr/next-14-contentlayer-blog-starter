import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./nightowl.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "next-themes";
import siteConfig from "@/site.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description:
    "A Next.js 14 Blog Starter using Contentlayer and TailwindCSS, built by @chrisjarling",
  alternates: {
    types: {
      "application/rss+xml": "/posts/rss",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-50 dark:bg-base-950`}>
        <div className="p-4">
          <div className="mx-auto max-w-screen-md">
            <ThemeProvider attribute="class" enableSystem>
              <Header />
              {children}
            </ThemeProvider>
          </div>
        </div>
        <div className="text-sm text-base-400 dark:text-base-500 bg-base-100 dark:bg-base-900 text-center p-4">
          © {new Date().getFullYear()} {siteConfig.title}
        </div>
      </body>
    </html>
  );
}
