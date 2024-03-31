import siteConfig from "@/site.config";

export const Footer = () => {
  return (
    <div className="text-sm text-base-400 dark:text-base-500 bg-base-100 dark:bg-base-900 text-center p-4">
      © {new Date().getFullYear()} {siteConfig.title}
    </div>
  );
};
