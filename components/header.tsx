import siteConfig from "@/site.config";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <div className="flex justify-between my-4">
      <h1>
        <Link className="font-bold text-lg hover:text-blue-500" href="/">
          {siteConfig.title}
        </Link>
      </h1>
      <div className="flex gap-8 items-center">
        <nav className="flex gap-4">
          <Link className="hover:underline" href="/posts">
            Posts
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
};
