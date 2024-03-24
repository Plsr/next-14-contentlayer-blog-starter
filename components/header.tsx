import siteConfig from "@/site.config";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <div className="flex justify-between my-6">
      <h1>
        <Link className="font-bold text-lg hover:text-accent-400" href="/">
          {siteConfig.title}
        </Link>
      </h1>
      <div className="flex gap-4 items-center">
        <nav className="flex gap-4">
          <Link
            className="py-2 px-4 transition rounded-lg dark:hover:bg-base-900 hover:bg-base-200"
            href="/posts"
          >
            Posts
          </Link>
          <Link
            className="py-2 px-4 transition rounded-lg dark:hover:bg-base-900 hover:bg-base-200"
            href="/about"
          >
            About
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
};
