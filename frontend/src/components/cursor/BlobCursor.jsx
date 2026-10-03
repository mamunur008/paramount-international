import React, { useRef } from "react";
import { pointer, useRaf, lerp } from "./pointer";

const BLOBS = [
  { size: 34, k: 0.5 },
  { size: 28, k: 0.3 },
  { size: 22, k: 0.18 },
  { size: 16, k: 0.1 },
];
const HALF = 200;

export default function BlobCursor() {
  const box = useRef(null);
  const refs = useRef([]);
  const pts = useRef(BLOBS.map(() => ({ x: -200, y: -200 })));

  useRaf(() => {
    const p = pts.current;
    BLOBS.forEach((b, i) => {
      p[i].x = lerp(p[i].x, pointer.x, b.k);
      p[i].y = lerp(p[i].y, pointer.y, b.k);
    });
    const head = p[0];
    if (box.current) box.current.style.transform = `translate3d(${head.x - HALF}px,${head.y - HALF}px,0)`;
    const scale = pointer.hover ? 1.8 : 1;
    BLOBS.forEach((b, i) => {
      const el = refs.current[i];
      if (el) el.style.transform = `translate3d(${p[i].x - head.x + HALF}px,${p[i].y - head.y + HALF}px,0) translate(-50%,-50%) scale(${scale})`;
    });
  });

  return (
    <>
      <svg className="cur-goo-filter" aria-hidden="true">
        <defs>
          <filter id="pi-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div ref={box} className="cur-goo" style={{ filter: "url(#pi-goo)" }} data-testid="cursor-blob">
        {BLOBS.map((b, i) => (
          <span key={i} ref={(el) => (refs.current[i] = el)} className="cur-blob" style={{ width: b.size, height: b.size }} />
        ))}
      </div>
    </>
  );
}
