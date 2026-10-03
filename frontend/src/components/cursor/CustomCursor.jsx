import React, { useEffect, useState } from "react";
import { useCursor } from "../../context/CursorContext";
import { bindPointer } from "./pointer";
import RingCursor from "./RingCursor";
import TrailCursor from "./TrailCursor";
import SparkleCursor from "./SparkleCursor";
import BlobCursor from "./BlobCursor";
import SpotlightCursor from "./SpotlightCursor";

const EFFECTS = { ring: RingCursor, trail: TrailCursor, sparkle: SparkleCursor, blob: BlobCursor, spotlight: SpotlightCursor };

export default function CustomCursor() {
  const { mode } = useCursor();
  const [fine, setFine] = useState(() => window.matchMedia("(pointer: fine)").matches);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const onChange = (e) => setFine(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const active = fine && mode !== "none";

  useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor", active);
    if (active) bindPointer();
    return () => document.documentElement.classList.remove("custom-cursor");
  }, [active]);

  if (!active) return null;
  const Effect = EFFECTS[mode];
  return <Effect key={mode} />;
}
