import React, { createContext, useContext, useState, useEffect } from "react";
import { type ThemeMode, type ThemeConfig, THEME_CONFIGS } from "../models/theme.model";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  currentConfig: ThemeConfig;
  isNavy: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_KEY = "mavern_theme_mode";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    return saved === "cosmic" || saved === "navy" ? saved : "navy";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    if (theme === "navy") {
      root.classList.add("theme-navy");
      root.classList.remove("theme-cosmic");
    } else {
      root.classList.add("theme-cosmic");
      root.classList.remove("theme-navy");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "navy" ? "cosmic" : "navy"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        currentConfig: THEME_CONFIGS[theme],
        isNavy: theme === "navy",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
