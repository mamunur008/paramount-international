import React from "react";
import { Asterisk } from "lucide-react";
import { MARQUEE } from "../mock";

export default function Marquee() {
  const sequence = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <section className="py-8 bg-[#c6f934] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center shrink-0">
            {sequence.map((word, i) => (
              <span key={`${dup}-${i}`} className="flex items-center text-[#0a0b0a] text-2xl md:text-3xl font-extrabold px-6">
                <Asterisk size={26} className="mr-6" strokeWidth={2.5} />
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
