import React from "react";
import { Check, Headphones, Cloud } from "lucide-react";
import { FEATURES, IMAGES } from "../mock";

export default function Features() {
  return (
    <section className="section-pad relative">
      <div className="container-c">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="eyebrow mb-5 justify-center">{FEATURES.eyebrow}</span>
          <h2 className="section-title mt-5">{FEATURES.title}</h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="card-dark p-8 reveal flex flex-col">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c6f934]/10 text-[#c6f934] mb-6">
              <Headphones size={26} />
            </span>
            <h3 className="text-xl font-semibold text-white">{FEATURES.cards[0].title}</h3>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">{FEATURES.cards[0].desc}</p>
            <img src={IMAGES.whatWe} alt="" className="mt-6 rounded-2xl h-40 w-full object-cover" />
          </div>

          {/* Middle list */}
          <div className="rounded-3xl bg-[#c6f934] text-[#0a0b0a] p-8 reveal flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
            <ul className="space-y-4">
              {FEATURES.list.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0a0b0a] text-[#c6f934] shrink-0">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="card-dark p-8 reveal flex flex-col">
            <img src={IMAGES.whatWeHighlight} alt="" className="mb-6 rounded-2xl h-40 w-full object-cover" />
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c6f934]/10 text-[#c6f934] mb-6">
              <Cloud size={26} />
            </span>
            <h3 className="text-xl font-semibold text-white">{FEATURES.cards[1].title}</h3>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">{FEATURES.cards[1].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
