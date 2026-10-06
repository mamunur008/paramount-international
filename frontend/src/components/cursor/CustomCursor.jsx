import React, { useEffect } from "react";
import { useCursor } from "../../context/CursorContext";
import { bindPointer } from "./pointer";
import RingCursor from "./RingCursor";
import TrailCursor from "./TrailCursor";
import SparkleCursor from "./SparkleCursor";
import BlobCursor from "./BlobCursor";
import SpotlightCursor from "./SpotlightCursor";
import AdvancedCursor from "./AdvancedCursor";
const effects = {
  ring: RingCursor,
  trail: TrailCursor,
  sparkle: SparkleCursor,
  blob: BlobCursor,
  spotlight: SpotlightCursor,
};
export default function CustomCursor() {
  const { effectiveMode: mode } = useCursor();
  const active = mode !== "none";
  useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor", active);
    const cleanup = active ? bindPointer() : null;
    return () => {
      cleanup?.();
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [active]);
  if (!active) return null;
  const Effect = effects[mode];
  return (
    <div className="cursor-effects" aria-hidden="true" data-cursor-mode={mode}>
      {Effect ? (
        <Effect key={mode} />
      ) : (
        <AdvancedCursor key={mode} mode={mode} />
      )}
    </div>
  );
}
