import { useEffect, useRef } from "react";

// Shared pointer state, bound once for every cursor effect.
export const pointer = { x: -200, y: -200, down: false, hover: null, text: "" };

const INTERACTIVE = "a,button,[role=button],input,textarea,select,label,[data-cursor],[data-cursor-text]";
let bound = false;

export function bindPointer() {
  if (bound) return;
  bound = true;
  window.addEventListener("mousemove", (e) => { pointer.x = e.clientX; pointer.y = e.clientY; }, { passive: true });
  window.addEventListener("mousedown", () => { pointer.down = true; });
  window.addEventListener("mouseup", () => { pointer.down = false; });
  document.documentElement.addEventListener("mouseleave", () => { pointer.x = -200; pointer.y = -200; pointer.hover = null; });
  document.addEventListener("mouseover", (e) => {
    const el = e.target instanceof Element ? e.target.closest(INTERACTIVE) : null;
    pointer.text = el?.dataset.cursorText || "";
    pointer.hover = el ? el.dataset.cursor || (pointer.text ? "text" : "link") : null;
  });
}

export function useRaf(callback) {
  const cb = useRef(callback);
  cb.current = callback;
  useEffect(() => {
    let id;
    const loop = () => { cb.current(); id = requestAnimationFrame(loop); };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);
}

export const lerp = (a, b, t) => a + (b - a) * t;
export const place = (el, x, y, extra = "") => {
  if (el) el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%) ${extra}`;
};
