import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
const ThemeContext = createContext(null);
const KEY = "pi-theme";
const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
function savedTheme() {
  try {
    const v = localStorage.getItem(KEY);
    return ["light", "dark"].includes(v) ? v : null;
  } catch {
    return null;
  }
}
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => savedTheme() || systemTheme());
  const busy = useRef(false);
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const change = () => {
      if (!savedTheme()) setTheme(systemTheme());
    };
    mq.addEventListener("change", change);
    return () => mq.removeEventListener("change", change);
  }, []);
  const toggle = () => {
    if (busy.current) return;
    const next = theme === "dark" ? "light" : "dark";
    const commit = () => {
      flushSync(() => setTheme(next));
      try {
        localStorage.setItem(KEY, next);
      } catch {}
    };
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      commit();
      return;
    }
    busy.current = true;
    document.documentElement.classList.add("theme-changing");
    try {
      const transition = document.startViewTransition(commit);
      transition.finished
        .catch(() => {})
        .finally(() => {
          busy.current = false;
          document.documentElement.classList.remove("theme-changing");
        });
    } catch {
      commit();
      busy.current = false;
      document.documentElement.classList.remove("theme-changing");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
