import React, { useEffect, useRef } from "react";
import { pointer, useRaf, lerp, place } from "./pointer";
export default function AdvancedCursor({ mode }) {
  const canvas = useRef(null),
    lens = useRef(null),
    size = useRef({ w: 0, h: 0 }),
    points = useRef(Array.from({ length: 24 }, () => ({ x: -200, y: -200 }))),
    ripples = useRef([]),
    lastDown = useRef(false);
  useEffect(() => {
    if (mode === "inverted") return;
    const resize = () => {
      const el = canvas.current;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size.current = { w: innerWidth, h: innerHeight };
      el.width = innerWidth * dpr;
      el.height = innerHeight * dpr;
      el.style.width = innerWidth + "px";
      el.style.height = innerHeight + "px";
      el.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [mode]);
  useRaf((time) => {
    if (mode === "inverted") {
      place(
        lens.current,
        pointer.x,
        pointer.y,
        `scale(${pointer.hover ? 1.65 : 1})`,
      );
      return;
    }
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, size.current.w, size.current.h);
    if (!pointer.visible) {
      ripples.current = [];
      return;
    }
    const { x, y } = pointer;
    const hover = !!pointer.hover;
    const blue = "#438cff";
    function circle(cx, cy, r, fill = true, alpha = 1) {
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      fill ? ctx.fill() : ctx.stroke();
      ctx.globalAlpha = 1;
    }
    ctx.strokeStyle = blue;
    ctx.fillStyle = blue;
    ctx.lineWidth = 1.4;
    if (mode === "orbit") {
      const radius = hover ? 24 : 16;
      circle(x, y, 3.5);
      circle(x, y, radius, false, 0.4);
      for (let i = 0; i < 3; i++) {
        const a = time * 0.0018 + (i * Math.PI * 2) / 3;
        circle(
          x + Math.cos(a) * radius,
          y + Math.sin(a) * radius,
          2.5,
          true,
          0.85,
        );
      }
    }
    if (mode === "crosshair") {
      const r = hover ? 22 : 13;
      circle(x, y, 2);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2;
        ctx.moveTo(x + Math.cos(a) * 7, y + Math.sin(a) * 7);
        ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
      }
      ctx.stroke();
      ctx.strokeRect(x - r, y - r, r * 2, r * 2);
    }
    if (mode === "ribbon") {
      const ps = points.current;
      ps[0] = { x, y };
      for (let i = 1; i < ps.length; i++) {
        ps[i].x = lerp(ps[i].x, ps[i - 1].x, 0.46);
        ps[i].y = lerp(ps[i].y, ps[i - 1].y, 0.46);
      }
      for (let i = 1; i < ps.length; i++) {
        ctx.globalAlpha = (1 - i / ps.length) * 0.8;
        ctx.lineWidth = (1 - i / ps.length) * (hover ? 7 : 4);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(ps[i - 1].x, ps[i - 1].y);
        ctx.lineTo(ps[i].x, ps[i].y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      circle(x, y, 3);
    }
    if (mode === "ripple") {
      circle(x, y, 3.5);
      circle(x, y, hover ? 19 : 12, false, 0.65);
      if (pointer.down && !lastDown.current) {
        ripples.current.push({ x, y, t: time });
        ripples.current = ripples.current.slice(-8);
      }
      lastDown.current = pointer.down;
      ripples.current = ripples.current.filter((r) => time - r.t < 650);
      for (const r of ripples.current) {
        const age = (time - r.t) / 650;
        circle(r.x, r.y, 10 + age * 52, false, 1 - age);
      }
    }
  });
  return mode === "inverted" ? (
    <div ref={lens} className="cur-inverted" data-testid="cursor-inverted" />
  ) : (
    <canvas
      ref={canvas}
      className="cur-advanced"
      data-testid={`cursor-${mode}`}
    />
  );
}
