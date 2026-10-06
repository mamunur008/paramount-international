import React, { useRef } from "react";
import { pointer, useRaf, place } from "./pointer";

const spawn = (parent, x, y) => {
  if (parent.childElementCount > 60) parent.firstChild.remove();
  const s = document.createElement("span");
  const size = 7 + Math.random() * 11;
  const hue = Math.random() < 0.6 ? 216 : 190 + Math.random() * 50;
  const light = 60 + Math.random() * 30;
  s.className = "cur-spark";
  s.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;--dx:${(Math.random() - 0.5) * 90}px;--dy:${(Math.random() - 0.5) * 90 - 25}px;--rot:${Math.random() * 180}deg;background:hsl(${hue} 95% ${light}%)`;
  s.addEventListener("animationend", () => s.remove());
  parent.appendChild(s);
};

export default function SparkleCursor() {
  const layer = useRef(null);
  const dot = useRef(null);
  const last = useRef({ x: 0, y: 0 });

  useRaf(() => {
    place(
      dot.current,
      pointer.x,
      pointer.y,
      `scale(${pointer.hover ? 2 : 1.2})`,
    );
    const dx = pointer.x - last.current.x;
    const dy = pointer.y - last.current.y;
    if (dx * dx + dy * dy > 110 && layer.current && pointer.x > 0) {
      last.current = { x: pointer.x, y: pointer.y };
      spawn(layer.current, pointer.x, pointer.y);
      if (Math.random() < 0.5)
        spawn(layer.current, pointer.x - dx * 0.5, pointer.y - dy * 0.5);
    }
  });

  return (
    <>
      <div ref={dot} className="cur-dot" data-testid="cursor-sparkle-dot" />
      <div ref={layer} className="cur-layer" data-testid="cursor-sparkle" />
    </>
  );
}
