import { useEffect, useRef } from "react";
export const pointer = {
  x: -200,
  y: -200,
  down: false,
  hover: null,
  text: "",
  visible: false,
};
const INTERACTIVE =
  "a,button,[role=button],[role=radio],[role=tab],input,textarea,select,label,[data-cursor],[data-cursor-text]";
export function bindPointer() {
  const root = document.documentElement;
  const hide = () => {
    pointer.visible = false;
    pointer.down = false;
    pointer.hover = null;
    root.classList.remove("pointer-visible");
  };
  const move = (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.visible = true;
    root.classList.add("pointer-visible");
  };
  const down = () => {
    pointer.down = true;
  };
  const up = () => {
    pointer.down = false;
  };
  const over = (e) => {
    const el =
      e.target instanceof Element ? e.target.closest(INTERACTIVE) : null;
    pointer.text = el?.dataset.cursorText || "";
    pointer.hover = el
      ? el.dataset.cursor || (pointer.text ? "text" : "link")
      : null;
  };
  const key = (e) => {
    if (e.key === "Tab") hide();
  };
  const visibility = () => {
    if (document.hidden) hide();
  };
  window.addEventListener("pointermove", move, { passive: true });
  window.addEventListener("pointerdown", down);
  window.addEventListener("pointerup", up);
  window.addEventListener("blur", hide);
  root.addEventListener("pointerleave", hide);
  document.addEventListener("pointerover", over);
  document.addEventListener("keydown", key);
  document.addEventListener("visibilitychange", visibility);
  return () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerdown", down);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("blur", hide);
    root.removeEventListener("pointerleave", hide);
    document.removeEventListener("pointerover", over);
    document.removeEventListener("keydown", key);
    document.removeEventListener("visibilitychange", visibility);
    hide();
  };
}
export function useRaf(callback) {
  const cb = useRef(callback);
  cb.current = callback;
  useEffect(() => {
    let id;
    const loop = (t) => {
      cb.current(t);
      id = requestAnimationFrame(loop);
    };
    const start = () => {
      cancelAnimationFrame(id);
      if (!document.hidden) id = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", start);
    start();
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("visibilitychange", start);
    };
  }, []);
}
export const lerp = (a, b, t) => a + (b - a) * t;
export const place = (el, x, y, extra = "") => {
  if (el)
    el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%) ${extra}`;
};
