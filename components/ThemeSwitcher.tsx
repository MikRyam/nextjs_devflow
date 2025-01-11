"use client";

import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-light-850 px-4 py-2 text-dark-100 dark:bg-dark-100 dark:text-light-850"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
