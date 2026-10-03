import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const light = theme === "light";
  return (
    <button
      type="button"
      onClick={toggle}
      data-testid="theme-toggle"
      aria-label={`Switch to ${light ? "dark" : "light"} mode`}
      aria-pressed={light}
      className={`relative w-[56px] h-[30px] shrink-0 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors ${className}`}
    >
      <span
        className={`absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full bg-white text-[#090915] flex items-center justify-center transition-transform duration-300 ${
          light ? "translate-x-[26px]" : ""
        }`}
      >
        {light ? <Sun size={13} /> : <Moon size={13} />}
      </span>
    </button>
  );
}
