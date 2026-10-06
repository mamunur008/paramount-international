import React from "react";
import { Sun, Moon, MousePointer2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { CURSOR_MODES, useCursor } from "../context/CursorContext";

export default function AppearanceToolbar() {
  const { theme, toggle } = useTheme();
  const { mode, setMode, fine, reduced } = useCursor();

  return <div className="appearance-toolbar" data-testid="appearance-toolbar">
    <div className="container-c appearance-inner">
      <span className="appearance-label">Make yourself at home.</span>
      {fine && <div className="appearance-cursor">
        <label htmlFor="cursor-effect"><MousePointer2 size={15}/><span>Cursor studio</span></label>
        <select id="cursor-effect" value={mode} onChange={e => setMode(e.target.value)}
          aria-describedby={reduced ? "cursor-motion-hint" : undefined}>
          {CURSOR_MODES.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
        </select>
        {reduced && <span id="cursor-motion-hint" className="sr-only">Your device has reduced motion enabled. The system cursor remains active.</span>}
      </div>}
      <div className="appearance-theme" role="group" aria-label="Colour theme">
        <button type="button" aria-pressed={theme === "light"} onClick={() => theme !== "light" && toggle()} data-testid="theme-light"><Sun size={15}/><span>Light</span></button>
        <button type="button" aria-pressed={theme === "dark"} onClick={() => theme !== "dark" && toggle()} data-testid="theme-dark"><Moon size={15}/><span>Dark</span></button>
      </div>
    </div>
  </div>;
}
