import React from "react";
import { Asterisk } from "lucide-react";
import { MARQUEE } from "../mock";

export default function Marquee() {
  const sequence = [...MARQUEE, ...MARQUEE];
  return (
    <section data-testid="marquee-section" className="overflow-hidden mb-[50px] lg:mb-[100px] select-none" aria-hidden="true">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 pr-[30px] gap-[30px]">
            {sequence.map((word, i) => (
              <span key={`${dup}-${i}`} className="ticker-text flex items-center whitespace-nowrap">
                <Asterisk className="text-c-accent mr-5 lg:mr-[30px] w-6 h-6 lg:w-10 lg:h-10 shrink-0" strokeWidth={2.5} />
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
