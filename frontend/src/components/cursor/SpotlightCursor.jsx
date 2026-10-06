import React, { useRef } from "react";
import { pointer, useRaf, lerp, place } from "./pointer";

export default function SpotlightCursor() {
  const spot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: -1000, y: -1000, r: 180 });

  useRaf(() => {
    const p = pos.current;
    p.x = lerp(p.x, pointer.x, 0.2);
    p.y = lerp(p.y, pointer.y, 0.2);
    p.r = lerp(p.r, pointer.hover ? 260 : 180, 0.12);
    const el = spot.current;
    if (el) {
      el.style.setProperty("--sx", `${p.x}px`);
      el.style.setProperty("--sy", `${p.y}px`);
      el.style.setProperty("--sr", `${p.r}px`);
    }
    place(
      ring.current,
      pointer.x,
      pointer.y,
      `scale(${pointer.down ? 0.8 : 1})`,
    );
  });

  return (
    <>
      <div ref={spot} className="cur-spot" data-testid="cursor-spotlight" />
      <div ref={ring} className="cur-ring cur-ring--thin" />
    </>
  );
}
