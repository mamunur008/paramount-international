import React, { useState } from "react";
import { Plus } from "lucide-react";

// Codeio-style accordion: open item turns accent with white text.
export default function Accordion({ items, defaultOpen = 0, testId = "accordion" }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="space-y-5 lg:space-y-[30px]" data-testid={testId}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="card-c !rounded-[10px] overflow-hidden" data-testid={`${testId}-item-${i}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              data-testid={`${testId}-trigger-${i}`}
              className={`relative w-full text-left text-base lg:text-lg font-medium py-4 lg:py-5 pl-5 pr-14 lg:pl-[30px] lg:pr-[55px] transition-colors duration-300 ${
                isOpen ? "bg-c-accent text-white" : "text-c-primary hover:text-c-accent"
              }`}
            >
              {i + 1}. {f.q}
              <Plus
                size={18}
                className={`absolute right-5 lg:right-[30px] top-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            <div aria-hidden={!isOpen} className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="bg-c-accent border-t border-white/10 text-white px-5 lg:px-[30px] py-4 lg:py-5 leading-[1.7]" data-testid={`${testId}-content-${i}`}>
                  {f.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
