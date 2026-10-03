import React, { createContext, useContext, useEffect, useState } from "react";

export const CURSOR_MODES = [
  { id: "ring", name: "Classic Ring", desc: "Codeio dot & lagging ring", icon: "Circle" },
  { id: "trail", name: "Rainbow Comet", desc: "A 16-dot snake that chases you", icon: "Activity" },
  { id: "sparkle", name: "Stardust", desc: "Sparkles burst as you move", icon: "Sparkles" },
  { id: "blob", name: "Liquid Blob", desc: "Gooey ink that stretches", icon: "Droplets" },
  { id: "spotlight", name: "Torchlight", desc: "Dim room, you hold the light", icon: "Flashlight" },
  { id: "none", name: "System", desc: "Plain native cursor", icon: "MousePointer2" },
];

const KEY = "pi-cursor";
const CursorContext = createContext(null);

const initialMode = () => {
  const stored = localStorage.getItem(KEY);
  if (CURSOR_MODES.some((m) => m.id === stored)) return stored;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "ring";
};

export function CursorProvider({ children }) {
  const [mode, setModeState] = useState(initialMode);

  useEffect(() => {
    localStorage.setItem(KEY, mode);
  }, [mode]);

  return (
    <CursorContext.Provider value={{ mode, setMode: setModeState }}>{children}</CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);
