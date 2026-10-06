import React from "react";
import * as Popover from "@radix-ui/react-popover";
import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  Circle,
  Activity,
  Sparkles,
  Droplets,
  Flashlight,
  Orbit,
  Crosshair,
  Spline,
  Waves,
  Contrast,
  MousePointer2,
  MousePointerClick,
  X,
  Check,
} from "lucide-react";
import { CURSOR_MODES, useCursor } from "../../context/CursorContext";
const icons = {
  Circle,
  Activity,
  Sparkles,
  Droplets,
  Flashlight,
  Orbit,
  Crosshair,
  Spline,
  Waves,
  Contrast,
  MousePointer2,
};
export default function CursorPicker() {
  const { mode, setMode, reduced, fine } = useCursor();
  if (!fine) return null;
  return (
    <Popover.Root>
      <Popover.Trigger
        className="cursor-picker-trigger"
        aria-label="Choose cursor effect"
        data-testid="cursor-picker-toggle"
      >
        <MousePointerClick size={18} />
        <span>Cursor studio</span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          align="end"
          sideOffset={12}
          collisionPadding={16}
          className="cursor-picker-panel"
          data-testid="cursor-picker-panel"
        >
          <div className="cursor-panel-heading">
            <div>
              <span className="tiny-label">Make it your own</span>
              <h2>Find your flow.</h2>
            </div>
            <Popover.Close
              className="icon-button"
              aria-label="Close cursor studio"
            >
              <X size={18} />
            </Popover.Close>
          </div>
          <p className="cursor-panel-desc">
            Choose an effect. Move around to try it.
          </p>
          {reduced && (
            <p className="cursor-motion-note">
              Reduced motion is enabled on your device. Your choice is saved;
              the system cursor stays active.
            </p>
          )}
          <RadioGroup.Root
            className="cursor-options"
            aria-label="Cursor style"
            value={mode}
            onValueChange={setMode}
          >
            {CURSOR_MODES.map((m) => {
              const Icon = icons[m.icon];
              return (
                <RadioGroup.Item
                  value={m.id}
                  className="cursor-choice"
                  key={m.id}
                  data-testid={`cursor-option-${m.id}`}
                >
                  <Icon size={20} />
                  <div>
                    <strong>{m.name}</strong>
                    <span>{m.desc}</span>
                  </div>
                  <RadioGroup.Indicator className="cursor-selected">
                    <Check size={14} />
                  </RadioGroup.Indicator>
                </RadioGroup.Item>
              );
            })}
          </RadioGroup.Root>
          <div className="cursor-panel-bottom">
            <span>Saved on this device</span>
            <Popover.Close className="cursor-done">
              Done <Check size={14} />
            </Popover.Close>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
