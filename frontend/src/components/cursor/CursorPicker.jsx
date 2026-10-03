import React, { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";
import { MousePointerClick, X } from "lucide-react";
import { CURSOR_MODES, useCursor } from "../../context/CursorContext";

export default function CursorPicker() {
  const { mode, setMode } = useCursor();
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => box.current && !box.current.contains(e.target) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={box} className="fixed bottom-6 right-6 z-[60] hidden [@media(pointer:fine)]:block" data-testid="cursor-picker">
      {open && (
        <div
          className="absolute bottom-16 right-0 w-[320px] rounded-[20px] bg-c-bg/95 backdrop-blur-xl border border-c-divider p-3 shadow-2xl animate-fadein"
          data-testid="cursor-picker-panel"
          role="menu"
        >
          <div className="flex items-center justify-between px-2 pt-1 pb-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-c-text/70">Cursor effect</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-c-text/60 hover:text-c-primary" data-testid="cursor-picker-close">
              <X size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {CURSOR_MODES.map((m) => {
              const Icon = Icons[m.icon] || Icons.MousePointer2;
              const active = m.id === mode;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => setMode(m.id)}
                  data-testid={`cursor-option-${m.id}`}
                  className={`text-left rounded-[14px] p-3 transition-all duration-200 ${
                    active ? "bg-c-accent text-white shadow-lg shadow-c-accent/30" : "bg-c-card text-c-primary hover:bg-c-accent/15"
                  }`}
                >
                  <Icon size={20} className={active ? "text-white" : "text-c-accent"} />
                  <div className="mt-2 text-sm font-semibold leading-tight">{m.name}</div>
                  <div className={`mt-0.5 text-[11px] leading-snug ${active ? "text-white/80" : "text-c-text/65"}`}>{m.desc}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Choose cursor effect"
        data-testid="cursor-picker-toggle"
        className="w-12 h-12 rounded-full bg-c-accent text-white shadow-lg shadow-c-accent/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      >
        <MousePointerClick size={20} />
      </button>
    </div>
  );
}
