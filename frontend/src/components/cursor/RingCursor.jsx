import React, { useRef } from "react";
import { pointer, useRaf, lerp, place } from "./pointer";

export default function RingCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);
  const pos = useRef({ x: -200, y: -200 });

  useRaf(() => {
    const p = pos.current;
    p.x = lerp(p.x, pointer.x, 0.18);
    p.y = lerp(p.y, pointer.y, 0.18);
    place(dot.current, pointer.x, pointer.y);
    place(ring.current, p.x, p.y);
    const r = ring.current;
    if (!r) return;
    const state = pointer.hover || "";
    if (r.dataset.state !== state) r.dataset.state = state;
    const down = pointer.down ? "1" : "0";
    if (r.dataset.down !== down) r.dataset.down = down;
    if (label.current && label.current.textContent !== pointer.text) label.current.textContent = pointer.text;
    dot.current.style.opacity = state === "text" || state === "-opaque" ? "0" : "1";
  });

  return (
    <>
      <div ref={dot} className="cur-dot" data-testid="cursor-ring-dot" />
      <div ref={ring} className="cur-ring" data-testid="cursor-ring">
        <span ref={label} className="cur-ring-text" />
      </div>
    </>
  );
}
