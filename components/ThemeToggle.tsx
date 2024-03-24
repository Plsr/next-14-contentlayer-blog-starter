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

  if (resolvedTheme === "light") {
    return <Moon className="w-5 h-5" onClick={() => setTheme("dark")} />;
  }
  if (resolvedTheme === "dark") {
    return <Sun className="w-5 h-5" onClick={() => setTheme("light")} />;
  }
};
