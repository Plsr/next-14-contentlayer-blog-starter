"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SunMoon className="w-5 h-5" />;
  }

  const handleToggleClick = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className="p-2 transition rounded-lg dark:hover:bg-base-900 hover:bg-base-200"
      onClick={handleToggleClick}
    >
      <ThemeToggleIcon themeType={resolvedTheme!} />
    </div>
  );
};

const ThemeToggleIcon = ({ themeType }: { themeType: string }) => {
  if (themeType === "light") {
    return <Moon className="w-5 h-5" />;
  }
  if (themeType === "dark") {
    return <Sun className="w-5 h-5" />;
  }
};
