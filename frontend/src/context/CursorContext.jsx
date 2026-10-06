import React, { createContext, useContext, useEffect, useState } from "react";
export const CURSOR_MODES = [
  {
    id: "ring",
    name: "Classic ring",
    desc: "The original dot and following ring",
    icon: "Circle",
  },
  {
    id: "trail",
    name: "Rainbow comet",
    desc: "A flowing, colourful trail",
    icon: "Activity",
  },
  {
    id: "sparkle",
    name: "Stardust",
    desc: "Small sparks that fade behind you",
    icon: "Sparkles",
  },
  {
    id: "blob",
    name: "Liquid blob",
    desc: "Fluid blue shapes in motion",
    icon: "Droplets",
  },
  {
    id: "spotlight",
    name: "Torchlight",
    desc: "A soft spotlight follows your pointer",
    icon: "Flashlight",
  },
  {
    id: "orbit",
    name: "Orbit",
    desc: "Tiny satellites around a precise dot",
    icon: "Orbit",
  },
  {
    id: "crosshair",
    name: "Precision",
    desc: "A crisp, responsive targeting reticle",
    icon: "Crosshair",
  },
  {
    id: "ribbon",
    name: "Silk ribbon",
    desc: "A fine blue ribbon follows each turn",
    icon: "Spline",
  },
  {
    id: "ripple",
    name: "Ripple",
    desc: "Gentle circles expand on click",
    icon: "Waves",
  },
  {
    id: "inverted",
    name: "Contrast lens",
    desc: "An inverted lens over the page",
    icon: "Contrast",
  },
  {
    id: "none",
    name: "System cursor",
    desc: "Your device’s standard pointer",
    icon: "MousePointer2",
  },
];
const CursorContext = createContext(null);
const KEY = "pi-cursor";
function initial() {
  try {
    const v = localStorage.getItem(KEY);
    if (CURSOR_MODES.some((m) => m.id === v)) return v;
  } catch {}
  return "ring";
}
export function CursorProvider({ children }) {
  const [mode, setModeState] = useState(initial);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [fine, setFine] = useState(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)"),
      pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const r = (e) => setReduced(e.matches),
      f = (e) => setFine(e.matches);
    reduce.addEventListener("change", r);
    pointer.addEventListener("change", f);
    return () => {
      reduce.removeEventListener("change", r);
      pointer.removeEventListener("change", f);
    };
  }, []);
  const setMode = (id) => {
    if (!CURSOR_MODES.some((m) => m.id === id)) return;
    setModeState(id);
    try {
      localStorage.setItem(KEY, id);
    } catch {}
  };
  return (
    <CursorContext.Provider
      value={{
        mode,
        setMode,
        reduced,
        fine,
        effectiveMode: reduced || !fine ? "none" : mode,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}
export const useCursor = () => useContext(CursorContext);
