import React, { useRef } from "react";
import { pointer, useRaf, lerp, place } from "./pointer";

const N = 16;

export default function TrailCursor() {
  const refs = useRef([]);
  const pts = useRef(Array.from({ length: N }, () => ({ x: -200, y: -200 })));

  useRaf(() => {
    const p = pts.current;
    p[0].x = lerp(p[0].x, pointer.x, 0.6);
    p[0].y = lerp(p[0].y, pointer.y, 0.6);
    for (let i = 1; i < N; i++) {
      p[i].x = lerp(p[i].x, p[i - 1].x, 0.42);
      p[i].y = lerp(p[i].y, p[i - 1].y, 0.42);
    }
    const scale = pointer.hover ? 1.6 : 1;
    for (let i = 0; i < N; i++)
      place(refs.current[i], p[i].x, p[i].y, `scale(${scale})`);
  });

  return (
    <div data-testid="cursor-trail">
      {pts.current.map((_, i) => (
        <span
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="cur-trail"
          style={{
            width: 20 - i,
            height: 20 - i,
            opacity: 1 - i / N,
            zIndex: 9999 - i,
            filter: `hue-rotate(${i * 16}deg)`,
          }}
        />
      ))}
    </div>
  );
}
