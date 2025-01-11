"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const DebugTheme = () => {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    console.log("Current theme:", theme);
    console.log("Resolved theme:", resolvedTheme);
  }, [theme, resolvedTheme]);

  return null;
};

export default DebugTheme;