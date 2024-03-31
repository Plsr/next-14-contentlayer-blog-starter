import siteConfig from "@/site.config";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { allPages } from "@/.contentlayer/generated/Page/_index.mjs";

export const Header = () => {
  const navPages = allPages.filter((page) => page.showInHeader);

  return (
    <div className="flex items-center justify-between my-6">
      <h1>
        <Link className="font-bold text-lg hover:text-accent-400" href="/">
          {siteConfig.title}
        </Link>
      </h1>
      <div className="flex gap-4 items-center">
        <nav className="flex gap-4">
          {navPages.map((page) => (
            <Link
              key={page._id}
              className="py-2 px-4 transition rounded-lg dark:hover:bg-base-900 hover:bg-base-200"
              href={`/pages/${page.slug}`}
            >
              {page.title}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
};
